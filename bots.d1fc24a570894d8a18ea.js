(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 2581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2582);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(552);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Bots = function (_React$Component) {
    _inherits(Bots, _React$Component);

    function Bots() {
        var _this2 = this;

        _classCallCheck(this, Bots);

        var _this = _possibleConstructorReturn(this, (Bots.__proto__ || Object.getPrototypeOf(Bots)).call(this));

        _this.handleChangeStrategy = function (event) {
            _this.setState({ selectStrategy: event.target.value });
        };

        _this.handleChangeBot = function (event) {
            var selectBot = event.target.value;

            _this.setState({
                selectBot: selectBot,
                botRun: _this.state.bots[selectBot].run
            });
        };

        _this.handleCreate = function (event) {
            event.preventDefault();
            var bots = _this.state.bots;

            bots.push(lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].create(_this.state.selectStrategy, _this.props.currentAccount, _this.createForm.state));
            _this.setState({ bots: bots });

            if (_this.createForm.validate) _this.createForm.validate("name", _this.createForm.state.name);
        };

        _this.handleEnableCreate = function (enableCreate) {
            if (_this.state.enableCreate != enableCreate) _this.setState({ enableCreate: enableCreate });
        };

        _this.handleStartBot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var bot;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            bot = _this.state.bots[_this.state.selectBot];
                            _context.next = 3;
                            return bot.start();

                        case 3:
                            _this.setState({ botRun: bot.run });

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));
        _this.handleStopBot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var bot;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            bot = _this.state.bots[_this.state.selectBot];
                            _context2.next = 3;
                            return bot.stop();

                        case 3:
                            _this.setState({ botRun: bot.run });

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));

        _this.handleDeleteBot = function () {
            lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].delete(_this.state.bots[_this.state.selectBot]);

            _this.setState({
                bots: lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].getBots(_this.props.currentAccount),
                selectBot: 0
            });
        };

        _this.strategies = lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].strategies;
        _this.state = {
            selectStrategy: Object.keys(_this.strategies)[0],
            bots: [],
            selectBot: 0,
            enableCreate: false,
            botRun: false
        };
        return _this;
    }

    _createClass(Bots, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var bots = lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].getBots(this.props.currentAccount);
            this.setState({
                bots: bots,
                selectBot: 0,
                botRun: bots[0] ? bots[0].run : false
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            //console.log("start render main page", this.props)
            if (this.props.currentAccount === null) return null;

            var CreateForm = this.strategies[this.state.selectStrategy].create;

            var bot = this.state.bots[this.state.selectBot] || null;

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block vertical" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block shrink vertical medium-horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "form",
                        {
                            style: { paddingBottom: 20, overflow: "visible" },
                            className: "grid-content small-12 medium-6 large-5 large-offset-1 full-width-content",
                            onSubmit: this.handleCreate,
                            noValidate: true
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "left-label", style: { marginTop: 30 } },
                            "Select strategy:"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "content-block" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "select",
                                    {
                                        className: "form-control bts-select ",
                                        value: this.state.selectStrategy,
                                        onChange: this.handleChangeStrategy
                                    },
                                    Object.keys(this.strategies).map(function (name) {
                                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            "option",
                                            { key: name, value: name },
                                            name
                                        );
                                    })
                                )
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateForm, {
                                ref: function ref(form) {
                                    _this3.createForm = form;
                                },
                                account: this.props.currentAccount,
                                name: this.state.selectStrategy,
                                enableCreate: this.handleEnableCreate
                            }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                {
                                    className: "button no-margin",
                                    type: "submit",
                                    disabled: !this.state.enableCreate
                                },
                                "Create"
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "left-label", style: { marginTop: 30 } },
                            "Bot state:"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "select",
                            {
                                className: "form-control bts-select",
                                value: this.state.selectBot,
                                onChange: this.handleChangeBot
                            },
                            this.state.bots.map(function (bot, index) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "option",
                                    { key: bot.name, value: index },
                                    bot.name + " (" + bot.constructor.name + ")"
                                );
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            bot ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(bot.state, { key: bot.name, bot: bot }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        onClick: this.handleStartBot,
                                        disabled: this.state.botRun,
                                        style: { marginLeft: 50 }
                                    },
                                    "Start"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        onClick: this.handleStopBot,
                                        disabled: !this.state.botRun,
                                        style: { marginLeft: 50 }
                                    },
                                    "Stop"
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                        className: "button",
                                        onClick: this.handleDeleteBot,
                                        disabled: this.state.botRun,
                                        style: { marginLeft: 50 }
                                    },
                                    "Delete"
                                )
                            ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "p",
                                null,
                                "Please, select bot"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Bots;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(Bots, {
    listenTo: function listenTo() {
        return [stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"]];
    },
    getProps: function getProps() {
        return {
            currentAccount: stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().currentAccount
        };
    }
}));

/***/ }),

/***/ 2582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2583);
/* harmony import */ var _TrailingStop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2589);
/* harmony import */ var _RelativeOrders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2592);
/* harmony import */ var stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2595);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();






var bots = {};

/* harmony default export */ __webpack_exports__["default"] = ({
    strategies: {
        SpreadTrade: _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__["default"],
        TrailingStop: _TrailingStop__WEBPACK_IMPORTED_MODULE_1__["default"],
        RelativeOrders: _RelativeOrders__WEBPACK_IMPORTED_MODULE_2__["default"]
    },

    create: function create(strategy, account, initData) {
        var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"](account + "::" + strategy + "[" + initData.name + "]");

        var bot = new this.strategies[strategy](account, storage, initData);
        bots["__bots__" + storage.name] = bot;

        return bot;
    },
    delete: function _delete(bot) {
        var name = "__bots__" + bot.storage.name;

        bots[name].delete();
        delete bots[name];
    },
    getBots: function getBots(account) {
        var _this = this;

        //console.log("getBots", Object.keys(bots))

        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"].getAccountBot(account).map(function (key) {
            if (bots[key]) return bots[key];

            var _key$replace$split = key.replace(/^__bots__(.+)::(\w+)\[(\w+)\]/, "$2,$3").split(","),
                _key$replace$split2 = _slicedToArray(_key$replace$split, 2),
                strategy = _key$replace$split2[0],
                name = _key$replace$split2[1];

            if (!strategy || !name) return null;

            var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"](account + "::" + strategy + "[" + name + "]");

            var bot = new _this.strategies[strategy](account, storage);
            bots[key] = bot;
            return bot;
        }).filter(function (el) {
            return el;
        });
    },
    hasBot: function hasBot(account, strategy, name) {
        console.log("check name stategy", account, strategy, name);
        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_3__["default"].has(account + "::" + strategy + "[" + name + "]");
    }
});

/***/ }),

/***/ 2583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_SpreadTrade_CreateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2584);
/* harmony import */ var components_Bots_SpreadTrade_StateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2586);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(419);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2587);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1294);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2588);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(714);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(591);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var SpreadTrade = function () {
    function SpreadTrade(account, storage, initData) {
        var _this = this;

        _classCallCheck(this, SpreadTrade);

        this.state = components_Bots_SpreadTrade_StateForm__WEBPACK_IMPORTED_MODULE_1__["default"];

        this.queue = function () {
            _this.queueEvents = _this.queueEvents.then(_this.checkOrders).catch(_this.logger.error.bind(_this.logger));
        };

        this.checkOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var state, feedPrice, buyPrice, sellPrice, buyOrder, sellOrder, ticker, accountBalances, baseBalance, quoteBalance, orderAmount, amount, obj, _obj, _orderAmount, _amount, _obj2, _obj3;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            state = _this.storage.read();
                            //console.log("state", state);

                            _this.defaultPrice = state.defaultPrice;

                            _context.next = 4;
                            return _this.getFeed();

                        case 4:
                            feedPrice = _context.sent;
                            buyPrice = feedPrice.times(1 - state.base.spread / 100).toNumber();
                            sellPrice = feedPrice.times(1 + state.quote.spread / 100).toNumber();


                            feedPrice = feedPrice.toNumber();

                            if (!(feedPrice == 0)) {
                                _context.next = 10;
                                break;
                            }

                            return _context.abrupt("return");

                        case 10:
                            if (!state.base.order.id) {
                                _context.next = 16;
                                break;
                            }

                            _context.next = 13;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_objects([state.base.order.id]);

                        case 13:
                            _context.t0 = _context.sent[0];
                            _context.next = 17;
                            break;

                        case 16:
                            _context.t0 = state.base.order.id;

                        case 17:
                            buyOrder = _context.t0;

                            if (!state.quote.order.id) {
                                _context.next = 24;
                                break;
                            }

                            _context.next = 21;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_objects([state.quote.order.id]);

                        case 21:
                            _context.t1 = _context.sent[0];
                            _context.next = 25;
                            break;

                        case 24:
                            _context.t1 = state.quote.order.id;

                        case 25:
                            sellOrder = _context.t1;
                            _context.next = 28;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_ticker(_this.base.symbol, _this.quote.symbol);

                        case 28:
                            ticker = _context.sent;
                            _context.next = 31;
                            return _this.account.balances(_this.base.id, _this.quote.id);

                        case 31:
                            _context.t2 = function (acc, balance) {
                                _this.base.id === balance.asset_id ? acc.base = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(balance.amount).div(Math.pow(10, _this.base.precision)).toNumber() : acc.quote = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(balance.amount).div(Math.pow(10, _this.quote.precision)).toNumber();
                                return acc;
                            };

                            _context.t3 = {};
                            accountBalances = _context.sent.reduce(_context.t2, _context.t3);
                            baseBalance = state.base.balance === "-" ? 0 : state.base.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.base.balance);
                            quoteBalance = state.quote.balance === "-" ? 0 : state.quote.balance === "" ? accountBalances.quote : Math.min(accountBalances.quote, state.quote.balance);


                            console.log("prices", buyPrice, feedPrice, sellPrice);
                            console.log("orders", buyOrder, sellOrder);

                            if (!buyOrder) {
                                _context.next = 62;
                                break;
                            }

                            //check Price
                            console.log("check buyOrder: move=" + (Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2) + ", fill=" + (ticker.lowest_ask <= buyPrice));

                            if (!(Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2 && ticker.lowest_ask > buyPrice)) {
                                _context.next = 60;
                                break;
                            }

                            // move order

                            _this.logger.info("move buy order: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 44;
                            return _this.account.cancelOrder(state.base.order.id);

                        case 44:

                            // check amount in order
                            orderAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(buyOrder.for_sale).div(Math.pow(10, _this.base.precision)).toNumber();


                            !["", "-"].includes(state.base.balance) && (state.base.balance = Number(state.base.balance) + orderAmount);

                            // add to sell balance
                            if (state.base.order.amount > orderAmount && !["", "-"].incudes(state.quote.balance)) state.quote.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount - orderAmount).div(state.base.order.price).plus(state.quote.balance).toNumber();

                            amount = Math.min(baseBalance, state.base.amount);
                            _context.prev = 48;
                            _context.next = 51;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, amount, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());

                        case 51:
                            obj = _context.sent;

                            state.base.order = {
                                id: obj ? obj.id : "1.7.0",
                                price: buyPrice,
                                amount: amount
                            };
                            !["", "-"].includes(state.base.balance) && (state.base.balance -= amount);
                            _context.next = 60;
                            break;

                        case 56:
                            _context.prev = 56;
                            _context.t4 = _context["catch"](48);

                            _this.logger.error(_context.t4);
                            state.base.order.id = undefined;

                        case 60:
                            _context.next = 77;
                            break;

                        case 62:
                            if (/^1.7.\d*$/.test(state.base.order.id)) {
                                // fill order
                                !["", "-"].includes(state.quote.balance) && (state.quote.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount).div(state.base.order.price).plus(state.quote.balance).toNumber());

                                state.base.order.id = undefined;
                            }

                            console.log("create buyOrder: balance=" + (baseBalance >= state.base.amount) + ", fill=" + (ticker.lowest_ask <= buyPrice));

                            if (!(baseBalance >= state.base.amount && ticker.lowest_ask > buyPrice)) {
                                _context.next = 77;
                                break;
                            }

                            //buy
                            _this.logger.info("buy: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 66;
                            _context.next = 69;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, state.base.amount, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());

                        case 69:
                            _obj = _context.sent;

                            state.base.order = {
                                id: _obj ? _obj.id : "1.7.0",
                                price: buyPrice,
                                amount: state.base.amount
                            };
                            !["", "-"].includes(state.base.balance) && (state.base.balance -= state.base.amount);
                            _context.next = 77;
                            break;

                        case 74:
                            _context.prev = 74;
                            _context.t5 = _context["catch"](66);

                            _this.logger.error(_context.t5);

                        case 77:
                            if (!sellOrder) {
                                _context.next = 101;
                                break;
                            }

                            //check Price
                            console.log("check sellOrder: move=" + (Math.abs(sellPrice - state.quote.order.price) > Math.abs(feedPrice - sellPrice) / 2) + ", fill=" + (ticker.highest_bid >= sellPrice));

                            if (!(Math.abs(sellPrice - state.quote.order.price) > Math.abs(feedPrice - sellPrice) / 2 && ticker.highest_bid < sellPrice)) {
                                _context.next = 99;
                                break;
                            }

                            // move order

                            _this.logger.info("move sell order: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 83;
                            return _this.account.cancelOrder(state.quote.order.id);

                        case 83:

                            // check amount in order
                            _orderAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(sellOrder.for_sale).div(Math.pow(10, _this.quote.precision)).toNumber();

                            !["", "-"].includes(state.quote.balance) && (state.quote.balance = Number(state.quote.balance) + _orderAmount);

                            // add to buy balance
                            if (state.quote.order.amount > _orderAmount && !["", "-"].includes(state.base.balance)) state.base.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount - _orderAmount).times(state.quote.order.price).plus(state.base.balance).toNumber();

                            _amount = Math.min(quoteBalance, state.quote.amount);
                            _context.prev = 87;
                            _context.next = 90;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, _amount, sellPrice);

                        case 90:
                            _obj2 = _context.sent;

                            state.quote.order = {
                                id: _obj2 ? _obj2.id : "1.7.0",
                                price: sellPrice,
                                amount: _amount
                            };
                            !["", "-"].includes(state.quote.balance) && (state.quote.balance -= _amount);
                            _context.next = 99;
                            break;

                        case 95:
                            _context.prev = 95;
                            _context.t6 = _context["catch"](87);

                            _this.logger.error(_context.t6);
                            state.quote.order.id = undefined;

                        case 99:
                            _context.next = 116;
                            break;

                        case 101:
                            if (/^1.7.\d*$/.test(state.quote.order.id)) {
                                // fill order
                                !["", "-"].includes(state.base.balance) && (state.base.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount).times(state.quote.order.price).plus(state.base.balance).toNumber());
                                state.quote.order.id = undefined;
                            }

                            console.log("create sellOrder: balance=" + (quoteBalance >= state.quote.amount) + ", fill=" + (ticker.highest_bid >= sellPrice));

                            if (!(quoteBalance >= state.quote.amount && ticker.highest_bid < sellPrice)) {
                                _context.next = 116;
                                break;
                            }

                            //buy
                            _this.logger.info("sell: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 105;
                            _context.next = 108;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, state.quote.amount, sellPrice);

                        case 108:
                            _obj3 = _context.sent;

                            state.quote.order = {
                                id: _obj3 ? _obj3.id : "1.7.0",
                                price: sellPrice,
                                amount: state.quote.amount
                            };
                            !["", "-"].includes(state.quote.balance) && (state.quote.balance -= state.quote.amount);
                            _context.next = 116;
                            break;

                        case 113:
                            _context.prev = 113;
                            _context.t7 = _context["catch"](105);

                            _this.logger.error(_context.t7);

                        case 116:

                            _this.storage.write(state);

                        case 117:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[48, 56], [66, 74], [87, 95], [105, 113]]);
        }));

        this.account = new lib_bots_account__WEBPACK_IMPORTED_MODULE_6__["default"](account);
        this.storage = storage;

        if (initData) {
            storage.init({
                name: initData.name,
                base: {
                    asset: initData.baseAsset,
                    balance: initData.baseBalance,
                    spread: initData.baseSpread,
                    amount: initData.baseAmount,
                    order: {
                        //id, price and amount
                    }
                },
                quote: {
                    asset: initData.quoteAsset,
                    balance: initData.quoteBalance,
                    spread: initData.quoteSpread,
                    amount: initData.quoteAmount,
                    order: {
                        //id, price and amount
                    }
                },
                defaultPrice: initData.defaultPrice
            });
        }

        this.name = storage.read().name;

        this.logger = console;
        this.queueEvents = Promise.resolve();
        this.run = false;
    }

    _createClass(SpreadTrade, [{
        key: "start",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var state;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                state = this.storage.read();
                                _context2.next = 3;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.base.asset];

                            case 3:
                                this.base = _context2.sent;
                                _context2.next = 6;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.quote.asset];

                            case 6:
                                this.quote = _context2.sent;


                                if ([this.base.issuer, this.quote.issuer].includes("1.2.0")) {
                                    if ([this.base.id, this.quote.id].includes("1.3.0")) this.getFeed = this.getCoreFeed;else if (this.base.issuer == this.quote.issuer) this.getFeed = this.getSmartFeed;else this.getFeed = this.getUIAFeed;
                                } else {
                                    this.getFeed = this.getUIAFeed;
                                }

                                _context2.next = 10;
                                return actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock();

                            case 10:
                                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeSetting({
                                    setting: "walletLockTimeout",
                                    value: 0
                                });

                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(this.queue);
                                this.run = true;

                            case 13:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function start() {
                return _ref2.apply(this, arguments);
            }

            return start;
        }()
    }, {
        key: "stop",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].unsubscribe(this.queue);
                                this.run = false;
                                _context3.next = 4;
                                return this.queueEvents;

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function stop() {
                return _ref3.apply(this, arguments);
            }

            return stop;
        }()
    }, {
        key: "delete",
        value: function _delete() {
            this.storage.delete();
        }
    }, {
        key: "getCoreFeed",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var rate, _ref5, _ref6, base, quote;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                rate = void 0;

                                if (!(this.base.id == "1.3.0")) {
                                    _context4.next = 7;
                                    break;
                                }

                                _context4.next = 4;
                                return this.quote.update();

                            case 4:
                                rate = this.quote.options.core_exchange_rate;
                                _context4.next = 10;
                                break;

                            case 7:
                                _context4.next = 9;
                                return this.base.update();

                            case 9:
                                rate = this.base.options.core_exchange_rate;

                            case 10:
                                _ref5 = rate.base.asset_id == this.base.id ? [rate.base, rate.quote] : [rate.quote, rate.base], _ref6 = _slicedToArray(_ref5, 2), base = _ref6[0], quote = _ref6[1];
                                return _context4.abrupt("return", Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(Math.pow(10, this.base.precision)).div(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(Math.pow(10, this.quote.precision))));

                            case 12:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getCoreFeed() {
                return _ref4.apply(this, arguments);
            }

            return getCoreFeed;
        }()
    }, {
        key: "getSmartFeed",
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var bts, rate, _ref8, _ref9, base, quote, basePrice, quotePrice;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"]["bts"];

                            case 2:
                                bts = _context5.sent;
                                _context5.next = 5;
                                return this.base.update();

                            case 5:
                                rate = this.base.options.core_exchange_rate;
                                _ref8 = rate.base.asset_id == "1.3.0" ? [rate.base, rate.quote] : [rate.quote, rate.base], _ref9 = _slicedToArray(_ref8, 2), base = _ref9[0], quote = _ref9[1];
                                basePrice = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(Math.pow(10, bts.precision)).div(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(Math.pow(10, this.base.precision)));
                                _context5.next = 10;
                                return this.quote.update();

                            case 10:
                                rate = this.quote.options.core_exchange_rate;
                                if (rate.base.asset_id == "1.3.0") {
                                    base = rate.base;
                                    quote = rate.quote;
                                } else {
                                    base = rate.quote;
                                    quote = rate.base;
                                }

                                quotePrice = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(base.amount).div(Math.pow(10, bts.precision)).div(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(quote.amount).div(Math.pow(10, this.quote.precision)));
                                return _context5.abrupt("return", quotePrice.div(basePrice));

                            case 14:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getSmartFeed() {
                return _ref7.apply(this, arguments);
            }

            return getSmartFeed;
        }()
    }, {
        key: "getUIAFeed",
        value: function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                if (!this.defaultPrice) {
                                    _context6.next = 4;
                                    break;
                                }

                                _context6.t0 = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this.defaultPrice);
                                _context6.next = 7;
                                break;

                            case 4:
                                _context6.next = 6;
                                return this.binancePrice(this.base.symbol, this.quote.symbol);

                            case 6:
                                _context6.t0 = _context6.sent;

                            case 7:
                                return _context6.abrupt("return", _context6.t0);

                            case 8:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getUIAFeed() {
                return _ref10.apply(this, arguments);
            }

            return getUIAFeed;
        }()
    }, {
        key: "binancePrice",
        value: function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(base, quote) {
                var asset, response, data;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                asset = ("" + quote.split(".").slice(-1)[0] + base.split(".").slice(-1)[0]).toUpperCase().replace("USD", "USDT");

                                console.log("get asset: " + asset);
                                this.priceArray = this.priceArray || [];

                                _context7.prev = 3;
                                _context7.next = 6;
                                return fetch("https://api.binance.com/api/v1/trades?symbol=" + asset + "&limit=1");

                            case 6:
                                response = _context7.sent;
                                _context7.next = 9;
                                return response.json();

                            case 9:
                                data = _context7.sent;

                                this.priceArray.push(data[0].price);
                                //this.priceArray.push(10)
                                _context7.next = 16;
                                break;

                            case 13:
                                _context7.prev = 13;
                                _context7.t0 = _context7["catch"](3);

                                this.logger.error("Error Binance request: " + asset + ", error: " + _context7.t0);

                            case 16:

                                if (this.priceArray.length > 10) this.priceArray.shift();

                                return _context7.abrupt("return", this.priceArray.length > 0 ? this.priceArray.reduce(function (a, b) {
                                    return a.plus(b);
                                }, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(0)).div(this.priceArray.length) : Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(0));

                            case 18:
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, this, [[3, 13]]);
            }));

            function binancePrice(_x, _x2) {
                return _ref11.apply(this, arguments);
            }

            return binancePrice;
        }()
    }]);

    return SpreadTrade;
}();

SpreadTrade.create = components_Bots_SpreadTrade_CreateForm__WEBPACK_IMPORTED_MODULE_0__["default"];


/* harmony default export */ __webpack_exports__["default"] = (SpreadTrade);

/***/ }),

/***/ 2584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1003);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2582);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





//import FloatingDropdown from "components/Utility/FloatingDropdown";

var CreateForm = function (_React$Component) {
    _inherits(CreateForm, _React$Component);

    function CreateForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, CreateForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateForm.__proto__ || Object.getPrototypeOf(CreateForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: "",
            baseAsset: "USD",
            quoteAsset: "OPEN.BTC",
            baseAmount: 10,
            quoteAmount: 0.01,
            baseSpread: 10,
            quoteSpread: 10,
            baseBalance: 100,
            quoteBalance: 0.1,
            validate: ["name"]
        }, _this.assetValidate = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
                var asset, blockchainAssets, validate;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                asset = _this.state[name];
                                _context.next = 3;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.list_assets(asset, 1);

                            case 3:
                                blockchainAssets = _context.sent[0];
                                validate = _this.state.validate;


                                if (asset !== blockchainAssets.symbol) validate.push(name);else {
                                    validate = validate.filter(function (input) {
                                        return input !== name;
                                    });
                                }

                                _this.setState({ validate: validate });
                                _this.props.enableCreate(_this.state.validate.length == 0);

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.handleChange = function (event) {
            //console.log(event.target.name, event.target.value);
            var name = event.target.name,
                value = event.target.value;

            if (["baseAsset", "quoteAsset"].includes(name)) value = value.toUpperCase();

            _this.setState(_defineProperty({}, name, value), function () {
                return _this.validate(name, value);
            });
        }, _this.validate = function (name, value) {
            var validate = _this.state.validate;

            switch (name) {
                case "name":
                    if (!/^\w+$/.test(value) || lib_bots__WEBPACK_IMPORTED_MODULE_2__["default"].hasBot(_this.props.account, _this.props.name, value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "baseAsset":
                case "quoteAsset":
                    if (value.length !== 0) {
                        _this.assetValidate(name);
                    } else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
                case "baseBalance":
                case "quoteBalance":
                    if (value !== "-" && isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "baseAmount":
                case "quoteAmount":
                case "baseSpread":
                case "quoteSpread":
                    if (value === "" || isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "defaultPrice":
                    if (!isNaN(+value)) _this.setState({
                        validate: validate.filter(function (input) {
                            return input !== name;
                        })
                    });else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
            }

            console.log(_this.state.validate);
            _this.props.enableCreate(_this.state.validate.length == 0);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CreateForm, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.assetValidate = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(this.assetValidate, 200);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        "Name"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "name",
                        id: "name",
                        type: "text",
                        ref: "input",
                        value: this.state.name,
                        onChange: this.handleChange,
                        autoComplete: "name",
                        style: {
                            border: this.state.validate.includes("name") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            "Base"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Asset"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "baseAsset",
                            id: "baseAsset",
                            type: "text",
                            ref: "input",
                            value: this.state.baseAsset,
                            onChange: this.handleChange,
                            autoComplete: "baseAsset",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseAsset") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Balance"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "baseBalance",
                            id: "baseBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.baseBalance,
                            onChange: this.handleChange,
                            autoComplete: "baseBalance",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Amount in order"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "baseAmount",
                            id: "baseAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.baseAmount,
                            onChange: this.handleChange,
                            autoComplete: "baseAmount",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Spread, %"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "baseSpread",
                            id: "baseSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.baseSpread,
                            onChange: this.handleChange,
                            autoComplete: "baseSpread",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseSpread") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            "Quote"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Asset"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "quoteAsset",
                            id: "quoteAsset",
                            type: "text",
                            ref: "input",
                            value: this.state.quoteAsset,
                            onChange: this.handleChange,
                            autoComplete: "quoteAsset",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteAsset") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Balance"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "quoteBalance",
                            id: "quoteBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.quoteBalance,
                            onChange: this.handleChange,
                            autoComplete: "quoteBalance",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Amount in order"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "quoteAmount",
                            id: "quoteAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.quoteAmount,
                            onChange: this.handleChange,
                            autoComplete: "quoteAmount",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Spread, %"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "quoteSpread",
                            id: "quoteSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.quoteSpread,
                            onChange: this.handleChange,
                            autoComplete: "quoteSpread",
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteSpread") ? "1px solid red" : "none"
                            }
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        "Default Price"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "defaultPrice",
                        id: "defaultPrice",
                        type: "text",
                        ref: "input",
                        value: this.state.defaultPrice,
                        onChange: this.handleChange,
                        autoComplete: "defaultPrice",
                        style: {
                            border: this.state.validate.includes("defaultPrice") ? "1px solid red" : "none"
                        }
                    })
                )
            );
        }
    }]);

    return CreateForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CreateForm);

/***/ }),

/***/ 2585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);


/* harmony default export */ __webpack_exports__["default"] = ({
    db: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                //console.log(`call Apis.db.${method}(${[...arguments]})`);
                return apis.instance().db_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    history: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().history_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    network: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().network_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    crypto: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().crypto_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    }),

    orders: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                return apis.instance().orders_api().exec(method, [].concat(Array.prototype.slice.call(arguments)));
            };
        }
    })
});

/***/ }),

/***/ 2586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var StateForm = function (_React$Component) {
    _inherits(StateForm, _React$Component);

    function StateForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, StateForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StateForm.__proto__ || Object.getPrototypeOf(StateForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value,
                base = void 0,
                quote = void 0;

            switch (name) {
                case "baseAmount":
                    base = _this.state.base;
                    base.amount = value;
                    _this.setState({ base: base });
                    break;
                case "baseBalance":
                    base = _this.state.base;
                    base.balance = value;
                    _this.setState({ base: base });
                    break;
                case "baseSpread":
                    base = _this.state.base;
                    base.spread = value;
                    _this.setState({ base: base });
                    break;
                case "quoteAmount":
                    quote = _this.state.quote;
                    quote.amount = value;
                    _this.setState({ quote: quote });
                    break;
                case "quoteBalance":
                    quote = _this.state.quote;
                    quote.balance = value;
                    _this.setState({ quote: quote });
                    break;
                case "quoteSpread":
                    quote = _this.state.quote;
                    quote.spread = value;
                    _this.setState({ quote: quote });
                    break;
                case "defaultPrice":
                    _this.setState({ defaultPrice: value });
                    break;
            }

            //this.setState({[name]: value}, () => this.validate(name, value));
        }, _this.handleUpdateBot = function () {
            var stateNow = _this.props.bot.storage.read();
            _this.state.base.order = stateNow.base.order;
            _this.state.quote.order = stateNow.quote.order;

            _this.props.bot.storage.write(_this.state);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(StateForm, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState(Object.assign({ validate: [] }, this.props.bot.storage.read()));
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "content-block",
                            style: {
                                marginLeft: 50,
                                marginTop: 30
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            "Base"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Asset"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseAsset",
                            type: "text",
                            ref: "input",
                            value: this.state.base.asset,
                            disabled: true,
                            style: {
                                marginBottom: 30
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Balance"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.base.balance,
                            onChange: this.handleChange,
                            autoComplete: "baseBalance",
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Amount"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.base.amount,
                            onChange: this.handleChange,
                            autoComplete: "baseAmount",
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Spread"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.base.spread,
                            onChange: this.handleChange,
                            autoComplete: "baseSpread",
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("baseSpread") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        {
                            className: "content-block",
                            style: {
                                marginLeft: 50,
                                marginTop: 30
                            }
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { style: { textAlign: "center" } },
                            "Quote"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Asset"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteAsset",
                            type: "text",
                            ref: "input",
                            value: this.state.quote.asset,
                            disabled: true,
                            style: {
                                marginBottom: 30
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Balance"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteBalance",
                            type: "text",
                            ref: "input",
                            value: this.state.quote.balance,
                            onChange: this.handleChange,
                            autoComplete: "quoteBalance",
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteBalance") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Amount"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.quote.amount,
                            onChange: this.handleChange,
                            autoComplete: "quoteAmount",
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteAmount") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Spread"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteSpread",
                            type: "text",
                            ref: "input",
                            value: this.state.quote.spread,
                            onChange: this.handleChange,
                            autoComplete: "quoteSpread",
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("quoteSpread") ? "1px solid red" : "none"
                            }
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        "Default Price"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "defaultPrice",
                        type: "text",
                        ref: "input",
                        value: this.state.defaultPrice,
                        onChange: this.handleChange,
                        autoComplete: "defaultPrice",
                        disabled: this.props.bot.run,
                        style: {
                            border: this.state.validate.includes("defaultPrice") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "button",
                    {
                        className: "button",
                        onClick: this.handleUpdateBot,
                        disabled: this.props.bot.run,
                        style: { marginLeft: 50, marginBottom: 30 }
                    },
                    "Update"
                )
            );
        }
    }]);

    return StateForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StateForm);

/***/ }),

/***/ 2587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2585);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Asset = function () {
    _createClass(Asset, null, [{
        key: "get",
        value: function get(obj, name) {
            if (this[name]) return this[name];

            return this.getAsset(name);
        }
    }, {
        key: "getAsset",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_symbol) {
                var symbol, obj;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                symbol = _symbol.toUpperCase();


                                this.map = this.map || {};

                                if (!this.map[symbol]) {
                                    _context.next = 4;
                                    break;
                                }

                                return _context.abrupt("return", this.map[symbol]);

                            case 4:
                                _context.next = 6;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.list_assets(symbol, 1);

                            case 6:
                                obj = _context.sent[0];

                                if (!(!obj || obj.symbol !== symbol)) {
                                    _context.next = 9;
                                    break;
                                }

                                throw new Error("Not found asset " + symbol + "! Blockchain return " + (obj ? obj.symbol : obj));

                            case 9:

                                this.map[symbol] = new this(obj);
                                return _context.abrupt("return", this.map[symbol]);

                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getAsset(_x) {
                return _ref.apply(this, arguments);
            }

            return getAsset;
        }()
    }, {
        key: "id",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_id) {
                var _this = this;

                var asset;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.map = this.map || {};
                                asset = Object.keys(this.map).find(function (symbol) {
                                    return _this.map[symbol].id == _id;
                                });

                                if (!asset) {
                                    _context2.next = 4;
                                    break;
                                }

                                return _context2.abrupt("return", this.map[asset]);

                            case 4:
                                _context2.next = 6;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets([_id]);

                            case 6:
                                asset = _context2.sent[0];

                                if (asset) {
                                    _context2.next = 9;
                                    break;
                                }

                                throw new Error("Not found asset by id " + _id + "!");

                            case 9:

                                this.map[asset.symbol] = new this(asset);
                                return _context2.abrupt("return", this.map[asset.symbol]);

                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function id(_x2) {
                return _ref2.apply(this, arguments);
            }

            return id;
        }()
    }, {
        key: "fromParam",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(param) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.t0 = param.amount;
                                _context3.next = 3;
                                return this.id(param.asset_id);

                            case 3:
                                _context3.t1 = _context3.sent;
                                return _context3.abrupt("return", {
                                    amount: _context3.t0,
                                    asset: _context3.t1
                                });

                            case 5:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function fromParam(_x3) {
                return _ref3.apply(this, arguments);
            }

            return fromParam;
        }()
    }, {
        key: "update",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this2 = this;

                var assets;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                this.map = this.map || {};

                                _context4.next = 3;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets(Object.keys(this.map).map(function (symbol) {
                                    return _this2.map[symbol].id;
                                }));

                            case 3:
                                assets = _context4.sent;

                                assets.forEach(function (asset) {
                                    return Object.assign(_this2.map[asset.symbol], asset);
                                });

                            case 5:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function update() {
                return _ref4.apply(this, arguments);
            }

            return update;
        }()
    }]);

    function Asset(rpcObj) {
        _classCallCheck(this, Asset);

        Object.assign(this, rpcObj);
    }

    _createClass(Asset, [{
        key: "toParam",
        value: function toParam() {
            var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            return { amount: number, asset_id: this.id };
        }
    }, {
        key: "fee",
        value: function fee() {
            return this.options.market_fee_percent / 100 / 100;
        }
    }, {
        key: "update",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.t0 = Object;
                                _context5.t1 = this;
                                _context5.next = 4;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_assets([this.id]);

                            case 4:
                                _context5.t2 = _context5.sent[0];

                                _context5.t0.assign.call(_context5.t0, _context5.t1, _context5.t2);

                            case 6:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function update() {
                return _ref5.apply(this, arguments);
            }

            return update;
        }()
    }]);

    return Asset;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Proxy({}, Asset));

/***/ }),

/***/ 2588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2585);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2587);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1294);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(593);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(591);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(419);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var Account = function () {
    function Account(name) {
        var _this = this;

        var feeSymbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "BTS";

        _classCallCheck(this, Account);

        this.promise = Promise.all([lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_account_by_name(name), lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][feeSymbol]]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                acc = _ref2[0],
                fee = _ref2[1];

            _this.acc = acc;
            _this.feeAsset = fee;
        });
    }

    _createClass(Account, [{
        key: "cancelOrder",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.promise;

                            case 2:
                                return _context.abrupt("return", this.sendTransaction("limit_order_cancel", {
                                    fee: this.feeAsset.toParam(),
                                    fee_paying_account: this.acc.id,
                                    order: id,
                                    extensions: []
                                }));

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function cancelOrder(_x2) {
                return _ref3.apply(this, arguments);
            }

            return cancelOrder;
        }()
    }, {
        key: "buy",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(buySymbol, baseSymbol, amount, price) {
                var fill_or_kill = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var expire = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "2020-02-02T02:02:02";
                var buyAsset, baseAsset, buyAmount, sellAmount, tx;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.promise;

                            case 2:
                                _context2.next = 4;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][buySymbol];

                            case 4:
                                buyAsset = _context2.sent;
                                _context2.next = 7;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][baseSymbol];

                            case 7:
                                baseAsset = _context2.sent;
                                buyAmount = Math.floor(amount * Math.pow(10, buyAsset.precision));
                                sellAmount = Math.floor(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(amount).times(price * Math.pow(10, baseAsset.precision)).toString());

                                if (!(buyAmount == 0 || sellAmount == 0)) {
                                    _context2.next = 12;
                                    break;
                                }

                                throw new Error("Amount equal 0!");

                            case 12:
                                _context2.next = 14;
                                return this.sendTransaction("limit_order_create", {
                                    fee: this.feeAsset.toParam(),
                                    seller: this.acc.id,
                                    amount_to_sell: baseAsset.toParam(sellAmount),
                                    min_to_receive: buyAsset.toParam(buyAmount),
                                    expiration: expire,
                                    fill_or_kill: fill_or_kill,
                                    extensions: []
                                });

                            case 14:
                                tx = _context2.sent;
                                _context2.next = 17;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_objects([tx[0].trx.operation_results[0][1]]);

                            case 17:
                                return _context2.abrupt("return", _context2.sent[0]);

                            case 18:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function buy(_x3, _x4, _x5, _x6) {
                return _ref4.apply(this, arguments);
            }

            return buy;
        }()
    }, {
        key: "sell",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(sellSymbol, baseSymbol, amount, price) {
                var fill_or_kill = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                var expire = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "2020-02-02T02:02:02";
                var sellAsset, baseAsset, sellAmount, buyAmount, tx;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.promise;

                            case 2:
                                _context3.next = 4;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][sellSymbol];

                            case 4:
                                sellAsset = _context3.sent;
                                _context3.next = 7;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__["default"][baseSymbol];

                            case 7:
                                baseAsset = _context3.sent;
                                sellAmount = Math.floor(amount * Math.pow(10, sellAsset.precision));
                                buyAmount = Math.floor(Object(bignumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(amount).times(price * Math.pow(10, baseAsset.precision)).toString());

                                if (!(buyAmount == 0 || sellAmount == 0)) {
                                    _context3.next = 12;
                                    break;
                                }

                                throw new Error("Amount equal 0!");

                            case 12:
                                _context3.next = 14;
                                return this.sendTransaction("limit_order_create", {
                                    fee: this.feeAsset.toParam(),
                                    seller: this.acc.id,
                                    amount_to_sell: sellAsset.toParam(sellAmount),
                                    min_to_receive: baseAsset.toParam(buyAmount),
                                    expiration: expire,
                                    fill_or_kill: fill_or_kill,
                                    extensions: []
                                });

                            case 14:
                                tx = _context3.sent;
                                _context3.next = 17;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_objects([tx[0].trx.operation_results[0][1]]);

                            case 17:
                                return _context3.abrupt("return", _context3.sent[0]);

                            case 18:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function sell(_x9, _x10, _x11, _x12) {
                return _ref5.apply(this, arguments);
            }

            return sell;
        }()
    }, {
        key: "balances",
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _args4 = arguments;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.promise;

                            case 2:
                                return _context4.abrupt("return", lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__["default"].db.get_account_balances(this.acc.id, [].concat(Array.prototype.slice.call(_args4))));

                            case 3:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function balances() {
                return _ref6.apply(this, arguments);
            }

            return balances;
        }()
    }, {
        key: "sendTransaction",
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(type, operation) {
                var tr, private_key;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                tr = new bitsharesjs__WEBPACK_IMPORTED_MODULE_5__["TransactionBuilder"]();

                                tr.add_type_operation(type, operation);
                                _context5.next = 4;
                                return tr.set_required_fees();

                            case 4:
                                _context5.next = 6;
                                return actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__["default"].unlock();

                            case 6:
                                private_key = stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__["default"].getPrivateKey(this.acc.active.key_auths[0][0]);

                                tr.add_signer(private_key, private_key.toPublicKey().toPublicKeyString());

                                return _context5.abrupt("return", tr.broadcast());

                            case 9:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function sendTransaction(_x15, _x16) {
                return _ref7.apply(this, arguments);
            }

            return sendTransaction;
        }()
    }]);

    return Account;
}();

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ 2589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2590);
/* harmony import */ var components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2591);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(419);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2587);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1294);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2588);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(714);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(591);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var TrailingStop = function () {
    function TrailingStop(account, storage, initData) {
        var _this = this;

        _classCallCheck(this, TrailingStop);

        this.state = components_Bots_TrailingStop_State__WEBPACK_IMPORTED_MODULE_1__["default"];

        this.queue = function () {
            _this.queueEvents = _this.queueEvents.then(_this.checkOrders).catch(_this.logger.error.bind(_this.logger));
        };

        this.checkOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var state;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            state = _this.storage.read();

                            console.log("checkOrders");

                            _this.storage.write(state);

                        case 3:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        this.account = new lib_bots_account__WEBPACK_IMPORTED_MODULE_6__["default"](account, "TEST");
        this.storage = storage;

        if (initData) {
            storage.init({
                name: initData.name,
                sellAsset: initData.sellAsset,
                getAsset: initData.getAsset,
                amount: initData.amount,
                percent: initData.percent
            });
        }

        this.name = storage.read().name;

        this.logger = console;
        this.queueEvents = Promise.resolve();
        this.run = false;
    }

    _createClass(TrailingStop, [{
        key: "start",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var state;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                state = this.storage.read();
                                _context2.next = 3;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.base.asset];

                            case 3:
                                this.base = _context2.sent;
                                _context2.next = 6;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.quote.asset];

                            case 6:
                                this.quote = _context2.sent;
                                _context2.next = 9;
                                return actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__["default"].unlock();

                            case 9:
                                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__["default"].changeSetting({
                                    setting: "walletLockTimeout",
                                    value: 0
                                });

                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(this.queue);
                                this.run = true;

                            case 12:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function start() {
                return _ref2.apply(this, arguments);
            }

            return start;
        }()
    }, {
        key: "stop",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].unsubscribe(this.queue);
                                this.run = false;
                                _context3.next = 4;
                                return this.queueEvents;

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function stop() {
                return _ref3.apply(this, arguments);
            }

            return stop;
        }()
    }, {
        key: "delete",
        value: function _delete() {
            this.storage.delete();
        }
    }]);

    return TrailingStop;
}();

TrailingStop.create = components_Bots_TrailingStop_Create__WEBPACK_IMPORTED_MODULE_0__["default"];


/* harmony default export */ __webpack_exports__["default"] = (TrailingStop);

/***/ }),

/***/ 2590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1003);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2582);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Create = function (_React$Component) {
    _inherits(Create, _React$Component);

    function Create() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Create);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Create.__proto__ || Object.getPrototypeOf(Create)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: "",
            sellAsset: "BTC",
            getAsset: "USD",
            amount: 0.01,
            minAmount: 1,
            stoploss: 100,
            percent: 10,
            validate: ["name"]
        }, _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value;

            if (["sellAsset", "getAsset"].includes(name)) value = value.toUpperCase();

            if (name === "minAmount") {
                _this.setState({
                    minAmount: value,
                    stoploss: value / _this.state.amount
                }, function () {
                    return _this.validate(name, value);
                });
            } else if (name === "stoploss") {
                _this.setState({
                    minAmount: _this.state.amount * value,
                    stoploss: value
                }, function () {
                    return _this.validate(name, value);
                });
            } else if (name === "amount") {
                _this.setState({
                    amount: value,
                    //stoploss: this.state.minAmount / this.state.amount,
                    minAmount: value * _this.state.stoploss
                }, function () {
                    return _this.validate(name, value);
                });
            } else {
                _this.setState(_defineProperty({}, name, value), function () {
                    return _this.validate(name, value);
                });
            }
        }, _this.assetValidate = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(name) {
                var asset, blockchainAssets, validate;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                asset = _this.state[name];
                                _context.next = 3;
                                return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.list_assets(asset, 1);

                            case 3:
                                blockchainAssets = _context.sent[0];
                                validate = _this.state.validate;


                                if (asset !== blockchainAssets.symbol) validate.push(name);else {
                                    validate = validate.filter(function (input) {
                                        return input !== name;
                                    });
                                }

                                _this.setState({ validate: validate });
                                _this.props.enableCreate(_this.state.validate.length == 0);

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.validate = function (name, value) {
            var validate = _this.state.validate;

            switch (name) {
                case "name":
                    if (!/^\w+$/.test(value) || lib_bots__WEBPACK_IMPORTED_MODULE_2__["default"].hasBot(_this.props.account, _this.props.name, value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
                case "sellAsset":
                case "getAsset":
                    if (value.length !== 0) {
                        _this.assetValidate(name);
                    } else {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    }
                    break;
                case "amount":
                case "minAmount":
                case "pecent":
                case "stoploss":
                    if (value === "" || isNaN(+value)) {
                        validate.push(name);
                        _this.setState({ validate: validate });
                    } else {
                        _this.setState({
                            validate: validate.filter(function (input) {
                                return input !== name;
                            })
                        });
                    }
                    break;
            }

            console.log(_this.state.validate);
            _this.props.enableCreate(_this.state.validate.length == 0);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Create, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.assetValidate = Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(this.assetValidate, 200);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        "Name"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "name",
                        id: "name",
                        type: "text",
                        ref: "input",
                        value: this.state.name,
                        onChange: this.handleChange,
                        style: {
                            border: this.state.validate.includes("name") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal", style: { marginLeft: 50 } },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Sell asset"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "sellAsset",
                            id: "sellAsset",
                            type: "text",
                            ref: "input",
                            value: this.state.sellAsset,
                            onChange: this.handleChange,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("sellAsset") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Amount"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "amount",
                            id: "amount",
                            type: "text",
                            ref: "input",
                            value: this.state.amount,
                            onChange: this.handleChange,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("amount") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Get asset"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "getAsset",
                            id: "getAsset",
                            type: "text",
                            ref: "input",
                            value: this.state.getAsset,
                            onChange: this.handleChange,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("getAsset") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Min Amount"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            name: "minAmount",
                            id: "minAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.minAmount,
                            onChange: this.handleChange,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("minAmount") ? "1px solid red" : "none"
                            }
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        "Stoploss"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "stoploss",
                        id: "stoploss",
                        type: "text",
                        ref: "input",
                        value: this.state.stoploss,
                        onChange: this.handleChange,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("stoploss") ? "1px solid red" : "none"
                        }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        "Trailing Percent, %"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                        name: "percent",
                        id: "percent",
                        type: "text",
                        ref: "input",
                        value: this.state.percent,
                        onChange: this.handleChange,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("percent") ? "1px solid red" : "none"
                        }
                    })
                )
            );
        }
    }]);

    return Create;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ 2591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var State = function (_React$Component) {
    _inherits(State, _React$Component);

    function State() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, State);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = State.__proto__ || Object.getPrototypeOf(State)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            validate: []
        }, _this.handleChange = function (event) {
            var name = event.target.name,
                value = event.target.value;

            if (["sellAsset", "getAsset"].includes(name)) value = value.toUpperCase();

            _this.setState(_defineProperty({}, name, value));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(State, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState(this.props.bot.storage.read());
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal", style: { marginLeft: 50 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Sell asset"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "sellAsset",
                            id: "sellAsset",
                            type: "text",
                            ref: "input",
                            value: this.state.sellAsset,
                            onChange: this.handleChange,
                            style: {
                                marginBottom: 30
                            },
                            disabled: true
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Amount"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "amount",
                            id: "amount",
                            type: "text",
                            ref: "input",
                            value: this.state.amount,
                            onChange: this.handleChange,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("amount") ? "1px solid red" : "none"
                            }
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Get asset"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "getAsset",
                            id: "getAsset",
                            type: "text",
                            ref: "input",
                            value: this.state.getAsset,
                            onChange: this.handleChange,
                            style: {
                                marginBottom: 30
                            },
                            disabled: true
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        "Percent, %"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "percent",
                        id: "percent",
                        type: "text",
                        ref: "input",
                        value: this.state.percent,
                        onChange: this.handleChange,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("percent") ? "1px solid red" : "none"
                        }
                    })
                )
            );
        }
    }]);

    return State;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ 2592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_RelativeOrders_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2593);
/* harmony import */ var components_Bots_RelativeOrders_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2594);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2588);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var RelativeOrders = function () {
    function RelativeOrders(account, storage, initData) {
        var _this = this;

        _classCallCheck(this, RelativeOrders);

        this.state = components_Bots_RelativeOrders_State__WEBPACK_IMPORTED_MODULE_1__["default"];

        this.queue = function () {
            _this.queueEvents = _this.queueEvents.then(_this.checkOrders).catch(_this.logger.error.bind(_this.logger));
        };

        this.checkOrders = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var state;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            state = _this.storage.read();


                            _this.storage.write(state);

                        case 2:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        this.account = new lib_bots_account__WEBPACK_IMPORTED_MODULE_2__["default"](account);
        this.storage = storage;

        if (initData) {
            storage.init({
                name: initData.name,
                defaultPrice: initData.defaultPrice
            });
        }

        this.name = storage.read().name;

        this.logger = console;
        this.queueEvents = Promise.resolve();
        this.run = false;
    }

    _createClass(RelativeOrders, [{
        key: "start",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var state;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                state = this.storage.read();
                                _context2.next = 3;
                                return Assets[state.base.asset];

                            case 3:
                                this.base = _context2.sent;
                                _context2.next = 6;
                                return Assets[state.quote.asset];

                            case 6:
                                this.quote = _context2.sent;


                                if ([this.base.issuer, this.quote.issuer].includes("1.2.0")) {
                                    if ([this.base.id, this.quote.id].includes("1.3.0")) this.getFeed = this.getCoreFeed;else if (this.base.issuer == this.quote.issuer) this.getFeed = this.getSmartFeed;else this.getFeed = this.getUIAFeed;
                                } else {
                                    this.getFeed = this.getUIAFeed;
                                }

                                _context2.next = 10;
                                return WalletUnlockActions.unlock();

                            case 10:
                                SettingsActions.changeSetting({
                                    setting: "walletLockTimeout",
                                    value: 0
                                });

                                ChainStore.subscribe(this.queue);
                                this.run = true;

                            case 13:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function start() {
                return _ref2.apply(this, arguments);
            }

            return start;
        }()
    }, {
        key: "stop",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                ChainStore.unsubscribe(this.queue);
                                this.run = false;
                                _context3.next = 4;
                                return this.queueEvents;

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function stop() {
                return _ref3.apply(this, arguments);
            }

            return stop;
        }()
    }, {
        key: "delete",
        value: function _delete() {
            this.storage.delete();
        }
    }]);

    return RelativeOrders;
}();

RelativeOrders.create = components_Bots_RelativeOrders_Create__WEBPACK_IMPORTED_MODULE_0__["default"];


/* harmony default export */ __webpack_exports__["default"] = (RelativeOrders);

/***/ }),

/***/ 2593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Create = function (_React$Component) {
    _inherits(Create, _React$Component);

    function Create() {
        _classCallCheck(this, Create);

        return _possibleConstructorReturn(this, (Create.__proto__ || Object.getPrototypeOf(Create)).apply(this, arguments));
    }

    _createClass(Create, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "p",
                null,
                "Hello Create RelativeOrders"
            );
        }
    }]);

    return Create;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ 2594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var State = function (_React$Component) {
    _inherits(State, _React$Component);

    function State() {
        _classCallCheck(this, State);

        return _possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).apply(this, arguments));
    }

    _createClass(State, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "p",
                null,
                "Hello State RelativeOrders"
            );
        }
    }]);

    return State;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ 2595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(717);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var bots = Object(common_localStorage__WEBPACK_IMPORTED_MODULE_0__["default"])("__bots__");

var Storage = function () {
    _createClass(Storage, null, [{
        key: "getAccountBot",
        value: function getAccountBot(account) {
            var re = new RegExp("^__bots__" + account + "::");
            return Object.keys(localStorage).filter(function (key) {
                return re.test(key);
            });
        }
    }, {
        key: "has",
        value: function has(name) {
            return bots.has(name);
        }
    }]);

    function Storage(name) {
        _classCallCheck(this, Storage);

        //bots.has(name)
        this.name = name;
        //if (!bots.has(name))
        //bots.set(name, {})
    }

    _createClass(Storage, [{
        key: "init",
        value: function init(data) {
            if (!bots.has(name)) bots.set(this.name, data);
        }
    }, {
        key: "read",
        value: function read() {
            return bots.get(this.name);
        }
    }, {
        key: "write",
        value: function write(newState) {
            bots.set(this.name, newState);
        }
    }, {
        key: "delete",
        value: function _delete() {
            bots.remove(this.name);
        }
    }]);

    return Storage;
}();

/* harmony default export */ __webpack_exports__["default"] = (Storage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90cy5kMWZjMjRhNTcwODk0ZDhhMThlYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Cb3RzL0JvdHMuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9TcHJlYWRUcmFkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9DcmVhdGVGb3JtLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL2FwaXMuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvU3RhdGVGb3JtLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL2Fzc2V0cy5qcyIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9UcmFpbGluZ1N0b3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL0NyZWF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL1JlbGF0aXZlT3JkZXJzL2luZGV4LmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Cb3RzL1JlbGF0aXZlT3JkZXJzL0NyZWF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvUmVsYXRpdmVPcmRlcnMvU3RhdGUuanN4Iiwid2VicGFjazovLy9hcHAvc3RvcmVzL0JvdHNTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xuaW1wb3J0IEFjY291bnRTdG9yZSBmcm9tIFwic3RvcmVzL0FjY291bnRTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5cbmNsYXNzIEJvdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc3RyYXRlZ2llcyA9IEJvdE1hbmFnZXIuc3RyYXRlZ2llcztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdFN0cmF0ZWd5OiBPYmplY3Qua2V5cyh0aGlzLnN0cmF0ZWdpZXMpWzBdLFxuICAgICAgICAgICAgYm90czogW10sXG4gICAgICAgICAgICBzZWxlY3RCb3Q6IDAsXG4gICAgICAgICAgICBlbmFibGVDcmVhdGU6IGZhbHNlLFxuICAgICAgICAgICAgYm90UnVuOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgYm90cyA9IEJvdE1hbmFnZXIuZ2V0Qm90cyh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBib3RzLFxuICAgICAgICAgICAgc2VsZWN0Qm90OiAwLFxuICAgICAgICAgICAgYm90UnVuOiBib3RzWzBdID8gYm90c1swXS5ydW4gOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VTdHJhdGVneSA9IGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0U3RyYXRlZ3k6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVDaGFuZ2VCb3QgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBzZWxlY3RCb3QgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RCb3QsXG4gICAgICAgICAgICBib3RSdW46IHRoaXMuc3RhdGUuYm90c1tzZWxlY3RCb3RdLnJ1blxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ3JlYXRlID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgYm90cyA9IHRoaXMuc3RhdGUuYm90cztcblxuICAgICAgICBib3RzLnB1c2goXG4gICAgICAgICAgICBCb3RNYW5hZ2VyLmNyZWF0ZShcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5LFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudEFjY291bnQsXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtLnN0YXRlXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JvdHN9KTtcblxuICAgICAgICBpZiAodGhpcy5jcmVhdGVGb3JtLnZhbGlkYXRlKVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtLnZhbGlkYXRlKFwibmFtZVwiLCB0aGlzLmNyZWF0ZUZvcm0uc3RhdGUubmFtZSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUVuYWJsZUNyZWF0ZSA9IGVuYWJsZUNyZWF0ZSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVuYWJsZUNyZWF0ZSAhPSBlbmFibGVDcmVhdGUpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlbmFibGVDcmVhdGV9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlU3RhcnRCb3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBib3QgPSB0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdO1xuXG4gICAgICAgIGF3YWl0IGJvdC5zdGFydCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtib3RSdW46IGJvdC5ydW59KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlU3RvcEJvdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGJvdCA9IHRoaXMuc3RhdGUuYm90c1t0aGlzLnN0YXRlLnNlbGVjdEJvdF07XG5cbiAgICAgICAgYXdhaXQgYm90LnN0b3AoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym90UnVuOiBib3QucnVufSk7XG4gICAgfTtcblxuICAgIGhhbmRsZURlbGV0ZUJvdCA9ICgpID0+IHtcbiAgICAgICAgQm90TWFuYWdlci5kZWxldGUodGhpcy5zdGF0ZS5ib3RzW3RoaXMuc3RhdGUuc2VsZWN0Qm90XSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBib3RzOiBCb3RNYW5hZ2VyLmdldEJvdHModGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCksXG4gICAgICAgICAgICBzZWxlY3RCb3Q6IDBcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInN0YXJ0IHJlbmRlciBtYWluIHBhZ2VcIiwgdGhpcy5wcm9wcylcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQgPT09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGxldCBDcmVhdGVGb3JtID0gdGhpcy5zdHJhdGVnaWVzW3RoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3ldLmNyZWF0ZTtcblxuICAgICAgICBsZXQgYm90ID0gdGhpcy5zdGF0ZS5ib3RzW3RoaXMuc3RhdGUuc2VsZWN0Qm90XSB8fCBudWxsO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgc2hyaW5rIHZlcnRpY2FsIG1lZGl1bS1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdCb3R0b206IDIwLCBvdmVyZmxvdzogXCJ2aXNpYmxlXCJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50IHNtYWxsLTEyIG1lZGl1bS02IGxhcmdlLTUgbGFyZ2Utb2Zmc2V0LTEgZnVsbC13aWR0aC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDMwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IHN0cmF0ZWd5OlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBidHMtc2VsZWN0IFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0U3RyYXRlZ3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VTdHJhdGVneX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMuc3RyYXRlZ2llcykubWFwKG5hbWUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtuYW1lfSB2YWx1ZT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17Zm9ybSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0gPSBmb3JtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVDcmVhdGU9e3RoaXMuaGFuZGxlRW5hYmxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gbm8tbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5lbmFibGVDcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCIgc3R5bGU9e3ttYXJnaW5Ub3A6IDMwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQm90IHN0YXRlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBidHMtc2VsZWN0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0Qm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5ib3RzLm1hcCgoYm90LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Ym90Lm5hbWV9IHZhbHVlPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Ym90Lm5hbWV9ICgke2JvdC5jb25zdHJ1Y3Rvci5uYW1lfSlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JvdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxib3Quc3RhdGUga2V5PXtib3QubmFtZX0gYm90PXtib3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXJ0Qm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmJvdFJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0b3BCb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmJvdFJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsZXRlQm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmJvdFJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2UsIHNlbGVjdCBib3Q8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBCb3RzLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FjY291bnRTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWNjb3VudDogQWNjb3VudFN0b3JlLmdldFN0YXRlKCkuY3VycmVudEFjY291bnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFNwcmVhZFRyYWRlIGZyb20gXCIuL1NwcmVhZFRyYWRlXCI7XG5pbXBvcnQgVHJhaWxpbmdTdG9wIGZyb20gXCIuL1RyYWlsaW5nU3RvcFwiO1xuaW1wb3J0IFJlbGF0aXZlT3JkZXJzIGZyb20gXCIuL1JlbGF0aXZlT3JkZXJzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwic3RvcmVzL0JvdHNTdG9yYWdlXCI7XG5cbnZhciBib3RzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdHJhdGVnaWVzOiB7XG4gICAgICAgIFNwcmVhZFRyYWRlLFxuICAgICAgICBUcmFpbGluZ1N0b3AsXG4gICAgICAgIFJlbGF0aXZlT3JkZXJzXG4gICAgfSxcblxuICAgIGNyZWF0ZShzdHJhdGVneSwgYWNjb3VudCwgaW5pdERhdGEpIHtcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZShgJHthY2NvdW50fTo6JHtzdHJhdGVneX1bJHtpbml0RGF0YS5uYW1lfV1gKTtcblxuICAgICAgICBsZXQgYm90ID0gbmV3IHRoaXMuc3RyYXRlZ2llc1tzdHJhdGVneV0oYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpO1xuICAgICAgICBib3RzW2BfX2JvdHNfXyR7c3RvcmFnZS5uYW1lfWBdID0gYm90O1xuXG4gICAgICAgIHJldHVybiBib3Q7XG4gICAgfSxcblxuICAgIGRlbGV0ZShib3QpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBgX19ib3RzX18ke2JvdC5zdG9yYWdlLm5hbWV9YDtcblxuICAgICAgICBib3RzW25hbWVdLmRlbGV0ZSgpO1xuICAgICAgICBkZWxldGUgYm90c1tuYW1lXTtcbiAgICB9LFxuXG4gICAgZ2V0Qm90cyhhY2NvdW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnZXRCb3RzXCIsIE9iamVjdC5rZXlzKGJvdHMpKVxuXG4gICAgICAgIHJldHVybiBTdG9yYWdlLmdldEFjY291bnRCb3QoYWNjb3VudClcbiAgICAgICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYm90c1trZXldKSByZXR1cm4gYm90c1trZXldO1xuXG4gICAgICAgICAgICAgICAgbGV0IFtzdHJhdGVneSwgbmFtZV0gPSBrZXlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15fX2JvdHNfXyguKyk6OihcXHcrKVxcWyhcXHcrKVxcXS8sIFwiJDIsJDNcIilcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLFwiKTtcblxuICAgICAgICAgICAgICAgIGlmICghc3RyYXRlZ3kgfHwgIW5hbWUpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICAgICAgbGV0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZShgJHthY2NvdW50fTo6JHtzdHJhdGVneX1bJHtuYW1lfV1gKTtcblxuICAgICAgICAgICAgICAgIGxldCBib3QgPSBuZXcgdGhpcy5zdHJhdGVnaWVzW3N0cmF0ZWd5XShhY2NvdW50LCBzdG9yYWdlKTtcbiAgICAgICAgICAgICAgICBib3RzW2tleV0gPSBib3Q7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvdDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGVsID0+IGVsKTtcbiAgICB9LFxuXG4gICAgaGFzQm90KGFjY291bnQsIHN0cmF0ZWd5LCBuYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgbmFtZSBzdGF0ZWd5XCIsIGFjY291bnQsIHN0cmF0ZWd5LCBuYW1lKTtcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuaGFzKGAke2FjY291bnR9Ojoke3N0cmF0ZWd5fVske25hbWV9XWApO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgQ3JlYXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvQ3JlYXRlRm9ybVwiO1xuaW1wb3J0IFN0YXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvU3RhdGVGb3JtXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwibGliL2JvdHMvYWNjb3VudFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldFVubG9ja0FjdGlvbnNcIjtcblxuY2xhc3MgU3ByZWFkVHJhZGUge1xuICAgIHN0YXRpYyBjcmVhdGUgPSBDcmVhdGU7XG4gICAgc3RhdGUgPSBTdGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudCA9IG5ldyBBY2NvdW50KGFjY291bnQpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xuICAgICAgICAgICAgc3RvcmFnZS5pbml0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpbml0RGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIGJhc2U6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGluaXREYXRhLmJhc2VBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZTogaW5pdERhdGEuYmFzZUJhbGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIHNwcmVhZDogaW5pdERhdGEuYmFzZVNwcmVhZCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBpbml0RGF0YS5iYXNlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZCwgcHJpY2UgYW5kIGFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdW90ZToge1xuICAgICAgICAgICAgICAgICAgICBhc3NldDogaW5pdERhdGEucXVvdGVBc3NldCxcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZTogaW5pdERhdGEucXVvdGVCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBzcHJlYWQ6IGluaXREYXRhLnF1b3RlU3ByZWFkLFxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLnF1b3RlQW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZCwgcHJpY2UgYW5kIGFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0UHJpY2U6IGluaXREYXRhLmRlZmF1bHRQcmljZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5hbWUgPSBzdG9yYWdlLnJlYWQoKS5uYW1lO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0KCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuXG4gICAgICAgIHRoaXMuYmFzZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5iYXNlLmFzc2V0XTtcbiAgICAgICAgdGhpcy5xdW90ZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5xdW90ZS5hc3NldF07XG5cbiAgICAgICAgaWYgKFt0aGlzLmJhc2UuaXNzdWVyLCB0aGlzLnF1b3RlLmlzc3Vlcl0uaW5jbHVkZXMoXCIxLjIuMFwiKSkge1xuICAgICAgICAgICAgaWYgKFt0aGlzLmJhc2UuaWQsIHRoaXMucXVvdGUuaWRdLmluY2x1ZGVzKFwiMS4zLjBcIikpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRDb3JlRmVlZDtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYmFzZS5pc3N1ZXIgPT0gdGhpcy5xdW90ZS5pc3N1ZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRTbWFydEZlZWQ7XG4gICAgICAgICAgICBlbHNlIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0VUlBRmVlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0VUlBRmVlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgIHNldHRpbmc6IFwid2FsbGV0TG9ja1RpbWVvdXRcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xuICAgICAgICB0aGlzLnJ1biA9IHRydWU7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RvcCgpIHtcbiAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWV1ZUV2ZW50cztcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoKTtcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IHRoaXMucXVldWVFdmVudHNcbiAgICAgICAgICAgIC50aGVuKHRoaXMuY2hlY2tPcmRlcnMpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3IuYmluZCh0aGlzLmxvZ2dlcikpO1xuICAgIH07XG5cbiAgICBjaGVja09yZGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInN0YXRlXCIsIHN0YXRlKTtcblxuICAgICAgICB0aGlzLmRlZmF1bHRQcmljZSA9IHN0YXRlLmRlZmF1bHRQcmljZTtcblxuICAgICAgICBsZXQgZmVlZFByaWNlID0gYXdhaXQgdGhpcy5nZXRGZWVkKCksXG4gICAgICAgICAgICBidXlQcmljZSA9IGZlZWRQcmljZS50aW1lcygxIC0gc3RhdGUuYmFzZS5zcHJlYWQgLyAxMDApLnRvTnVtYmVyKCksXG4gICAgICAgICAgICBzZWxsUHJpY2UgPSBmZWVkUHJpY2VcbiAgICAgICAgICAgICAgICAudGltZXMoMSArIHN0YXRlLnF1b3RlLnNwcmVhZCAvIDEwMClcbiAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcblxuICAgICAgICBmZWVkUHJpY2UgPSBmZWVkUHJpY2UudG9OdW1iZXIoKTtcblxuICAgICAgICBpZiAoZmVlZFByaWNlID09IDApIHJldHVybjtcblxuICAgICAgICBsZXQgYnV5T3JkZXIgPSBzdGF0ZS5iYXNlLm9yZGVyLmlkXG4gICAgICAgICAgICAgICAgPyAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbc3RhdGUuYmFzZS5vcmRlci5pZF0pKVswXVxuICAgICAgICAgICAgICAgIDogc3RhdGUuYmFzZS5vcmRlci5pZCxcbiAgICAgICAgICAgIHNlbGxPcmRlciA9IHN0YXRlLnF1b3RlLm9yZGVyLmlkXG4gICAgICAgICAgICAgICAgPyAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbc3RhdGUucXVvdGUub3JkZXIuaWRdKSlbMF1cbiAgICAgICAgICAgICAgICA6IHN0YXRlLnF1b3RlLm9yZGVyLmlkLFxuICAgICAgICAgICAgdGlja2VyID0gYXdhaXQgQXBpcy5kYi5nZXRfdGlja2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2xcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBhY2NvdW50QmFsYW5jZXMgPSAoYXdhaXQgdGhpcy5hY2NvdW50LmJhbGFuY2VzKFxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5pZCxcbiAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLmlkXG4gICAgICAgICAgICApKS5yZWR1Y2UoKGFjYywgYmFsYW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5pZCA9PT0gYmFsYW5jZS5hc3NldF9pZFxuICAgICAgICAgICAgICAgICAgICA/IChhY2MuYmFzZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSlcbiAgICAgICAgICAgICAgICAgICAgOiAoYWNjLnF1b3RlID0gQmlnTnVtYmVyKGJhbGFuY2UuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgICAgIGJhc2VCYWxhbmNlID1cbiAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLmJhbGFuY2UgPT09IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLmJhc2UuYmFsYW5jZSA9PT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50QmFsYW5jZXMuYmFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1pbihhY2NvdW50QmFsYW5jZXMuYmFzZSwgc3RhdGUuYmFzZS5iYWxhbmNlKSxcbiAgICAgICAgICAgIHF1b3RlQmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgc3RhdGUucXVvdGUuYmFsYW5jZSA9PT0gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgICAgICAgIDogc3RhdGUucXVvdGUuYmFsYW5jZSA9PT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBhY2NvdW50QmFsYW5jZXMucXVvdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5taW4oYWNjb3VudEJhbGFuY2VzLnF1b3RlLCBzdGF0ZS5xdW90ZS5iYWxhbmNlKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInByaWNlc1wiLCBidXlQcmljZSwgZmVlZFByaWNlLCBzZWxsUHJpY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9yZGVyc1wiLCBidXlPcmRlciwgc2VsbE9yZGVyKTtcblxuICAgICAgICBpZiAoYnV5T3JkZXIpIHtcbiAgICAgICAgICAgIC8vY2hlY2sgUHJpY2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBjaGVjayBidXlPcmRlcjogbW92ZT0ke01hdGguYWJzKFxuICAgICAgICAgICAgICAgICAgICBidXlQcmljZSAtIHN0YXRlLmJhc2Uub3JkZXIucHJpY2VcbiAgICAgICAgICAgICAgICApID5cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gYnV5UHJpY2UpIC9cbiAgICAgICAgICAgICAgICAgICAgICAgIDJ9LCBmaWxsPSR7dGlja2VyLmxvd2VzdF9hc2sgPD0gYnV5UHJpY2V9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhidXlQcmljZSAtIHN0YXRlLmJhc2Uub3JkZXIucHJpY2UpID5cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gYnV5UHJpY2UpIC8gMiAmJlxuICAgICAgICAgICAgICAgIHRpY2tlci5sb3dlc3RfYXNrID4gYnV5UHJpY2VcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3JkZXJcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXG4gICAgICAgICAgICAgICAgICAgIGBtb3ZlIGJ1eSBvcmRlcjogJHtidXlQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5jYW5jZWxPcmRlcihzdGF0ZS5iYXNlLm9yZGVyLmlkKTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFtb3VudCBpbiBvcmRlclxuICAgICAgICAgICAgICAgIGxldCBvcmRlckFtb3VudCA9IEJpZ051bWJlcihidXlPcmRlci5mb3Jfc2FsZSlcbiAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcblxuICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoc3RhdGUuYmFzZS5iYWxhbmNlKSArIG9yZGVyQW1vdW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGFkZCB0byBzZWxsIGJhbGFuY2VcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50ID4gb3JkZXJBbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUuYmFsYW5jZSA9IEJpZ051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2Uub3JkZXIuYW1vdW50IC0gb3JkZXJBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUucXVvdGUuYmFsYW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFtb3VudCA9IE1hdGgubWluKGJhc2VCYWxhbmNlLCBzdGF0ZS5iYXNlLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgQmlnTnVtYmVyKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihidXlQcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBidXlQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUuYmFzZS5iYWxhbmNlIC09IGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgvXjEuNy5cXGQqJC8udGVzdChzdGF0ZS5iYXNlLm9yZGVyLmlkKSkge1xuICAgICAgICAgICAgICAgIC8vIGZpbGwgb3JkZXJcbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSA9IEJpZ051bWJlcihzdGF0ZS5iYXNlLm9yZGVyLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoc3RhdGUuYmFzZS5vcmRlci5wcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSk7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgY3JlYXRlIGJ1eU9yZGVyOiBiYWxhbmNlPSR7YmFzZUJhbGFuY2UgPj1cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5hbW91bnR9LCBmaWxsPSR7dGlja2VyLmxvd2VzdF9hc2sgPD0gYnV5UHJpY2V9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBiYXNlQmFsYW5jZSA+PSBzdGF0ZS5iYXNlLmFtb3VudCAmJlxuICAgICAgICAgICAgICAgIHRpY2tlci5sb3dlc3RfYXNrID4gYnV5UHJpY2VcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vYnV5XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgYGJ1eTogJHtidXlQcmljZX0gJHt0aGlzLnF1b3RlLnN5bWJvbH0vJHt0aGlzLmJhc2Uuc3ltYm9sfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2UuYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgQmlnTnVtYmVyKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdihidXlQcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBidXlQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogc3RhdGUuYmFzZS5hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSAtPSBzdGF0ZS5iYXNlLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxsT3JkZXIpIHtcbiAgICAgICAgICAgIC8vY2hlY2sgUHJpY2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBjaGVjayBzZWxsT3JkZXI6IG1vdmU9JHtNYXRoLmFicyhcbiAgICAgICAgICAgICAgICAgICAgc2VsbFByaWNlIC0gc3RhdGUucXVvdGUub3JkZXIucHJpY2VcbiAgICAgICAgICAgICAgICApID5cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gc2VsbFByaWNlKSAvXG4gICAgICAgICAgICAgICAgICAgICAgICAyfSwgZmlsbD0ke3RpY2tlci5oaWdoZXN0X2JpZCA+PSBzZWxsUHJpY2V9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhzZWxsUHJpY2UgLSBzdGF0ZS5xdW90ZS5vcmRlci5wcmljZSkgPlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhmZWVkUHJpY2UgLSBzZWxsUHJpY2UpIC8gMiAmJlxuICAgICAgICAgICAgICAgIHRpY2tlci5oaWdoZXN0X2JpZCA8IHNlbGxQcmljZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvcmRlclxuXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgYG1vdmUgc2VsbCBvcmRlcjogJHtzZWxsUHJpY2V9ICR7dGhpcy5xdW90ZS5zeW1ib2x9LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuY2FuY2VsT3JkZXIoc3RhdGUucXVvdGUub3JkZXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYW1vdW50IGluIG9yZGVyXG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyQW1vdW50ID0gQmlnTnVtYmVyKHNlbGxPcmRlci5mb3Jfc2FsZSlcbiAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHN0YXRlLnF1b3RlLmJhbGFuY2UpICsgb3JkZXJBbW91bnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYWRkIHRvIGJ1eSBiYWxhbmNlXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlci5hbW91bnQgPiBvcmRlckFtb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLmJhbGFuY2UgPSBCaWdOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlci5hbW91bnQgLSBvcmRlckFtb3VudFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUucXVvdGUub3JkZXIucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5iYXNlLmJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcblxuICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSBNYXRoLm1pbihxdW90ZUJhbGFuY2UsIHN0YXRlLnF1b3RlLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsbFByaWNlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBzZWxsUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5xdW90ZS5iYWxhbmNlIC09IGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoL14xLjcuXFxkKiQvLnRlc3Qoc3RhdGUucXVvdGUub3JkZXIuaWQpKSB7XG4gICAgICAgICAgICAgICAgLy8gZmlsbCBvcmRlclxuICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSA9IEJpZ051bWJlcihzdGF0ZS5xdW90ZS5vcmRlci5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGltZXMoc3RhdGUucXVvdGUub3JkZXIucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5iYXNlLmJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKSk7XG4gICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIGBjcmVhdGUgc2VsbE9yZGVyOiBiYWxhbmNlPSR7cXVvdGVCYWxhbmNlID49XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLmFtb3VudH0sIGZpbGw9JHt0aWNrZXIuaGlnaGVzdF9iaWQgPj1cbiAgICAgICAgICAgICAgICAgICAgc2VsbFByaWNlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcXVvdGVCYWxhbmNlID49IHN0YXRlLnF1b3RlLmFtb3VudCAmJlxuICAgICAgICAgICAgICAgIHRpY2tlci5oaWdoZXN0X2JpZCA8IHNlbGxQcmljZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy9idXlcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxuICAgICAgICAgICAgICAgICAgICBgc2VsbDogJHtzZWxsUHJpY2V9ICR7dGhpcy5xdW90ZS5zeW1ib2x9LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxsUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogb2JqID8gb2JqLmlkIDogXCIxLjcuMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHNlbGxQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogc3RhdGUucXVvdGUuYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSAtPSBzdGF0ZS5xdW90ZS5hbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0b3JhZ2Uud3JpdGUoc3RhdGUpO1xuICAgIH07XG5cbiAgICBhc3luYyBnZXRDb3JlRmVlZCgpIHtcbiAgICAgICAgbGV0IHJhdGU7XG5cbiAgICAgICAgaWYgKHRoaXMuYmFzZS5pZCA9PSBcIjEuMy4wXCIpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucXVvdGUudXBkYXRlKCk7XG4gICAgICAgICAgICByYXRlID0gdGhpcy5xdW90ZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYmFzZS51cGRhdGUoKTtcbiAgICAgICAgICAgIHJhdGUgPSB0aGlzLmJhc2Uub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgW2Jhc2UsIHF1b3RlXSA9XG4gICAgICAgICAgICByYXRlLmJhc2UuYXNzZXRfaWQgPT0gdGhpcy5iYXNlLmlkXG4gICAgICAgICAgICAgICAgPyBbcmF0ZS5iYXNlLCByYXRlLnF1b3RlXVxuICAgICAgICAgICAgICAgIDogW3JhdGUucXVvdGUsIHJhdGUuYmFzZV07XG5cbiAgICAgICAgcmV0dXJuIEJpZ051bWJlcihiYXNlLmFtb3VudClcbiAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgIC5kaXYoQmlnTnVtYmVyKHF1b3RlLmFtb3VudCkuZGl2KDEwICoqIHRoaXMucXVvdGUucHJlY2lzaW9uKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U21hcnRGZWVkKCkge1xuICAgICAgICBsZXQgYnRzID0gYXdhaXQgQXNzZXRzW1wiYnRzXCJdO1xuICAgICAgICBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XG4gICAgICAgIGxldCByYXRlID0gdGhpcy5iYXNlLm9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlO1xuICAgICAgICBsZXQgW2Jhc2UsIHF1b3RlXSA9XG4gICAgICAgICAgICByYXRlLmJhc2UuYXNzZXRfaWQgPT0gXCIxLjMuMFwiXG4gICAgICAgICAgICAgICAgPyBbcmF0ZS5iYXNlLCByYXRlLnF1b3RlXVxuICAgICAgICAgICAgICAgIDogW3JhdGUucXVvdGUsIHJhdGUuYmFzZV07XG5cbiAgICAgICAgbGV0IGJhc2VQcmljZSA9IEJpZ051bWJlcihiYXNlLmFtb3VudClcbiAgICAgICAgICAgIC5kaXYoMTAgKiogYnRzLnByZWNpc2lvbilcbiAgICAgICAgICAgIC5kaXYoQmlnTnVtYmVyKHF1b3RlLmFtb3VudCkuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pKTtcblxuICAgICAgICBhd2FpdCB0aGlzLnF1b3RlLnVwZGF0ZSgpO1xuICAgICAgICByYXRlID0gdGhpcy5xdW90ZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgaWYgKHJhdGUuYmFzZS5hc3NldF9pZCA9PSBcIjEuMy4wXCIpIHtcbiAgICAgICAgICAgIGJhc2UgPSByYXRlLmJhc2U7XG4gICAgICAgICAgICBxdW90ZSA9IHJhdGUucXVvdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYXNlID0gcmF0ZS5xdW90ZTtcbiAgICAgICAgICAgIHF1b3RlID0gcmF0ZS5iYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHF1b3RlUHJpY2UgPSBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAuZGl2KDEwICoqIGJ0cy5wcmVjaXNpb24pXG4gICAgICAgICAgICAuZGl2KEJpZ051bWJlcihxdW90ZS5hbW91bnQpLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbikpO1xuXG4gICAgICAgIHJldHVybiBxdW90ZVByaWNlLmRpdihiYXNlUHJpY2UpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFVJQUZlZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRQcmljZVxuICAgICAgICAgICAgPyBCaWdOdW1iZXIodGhpcy5kZWZhdWx0UHJpY2UpXG4gICAgICAgICAgICA6IGF3YWl0IHRoaXMuYmluYW5jZVByaWNlKHRoaXMuYmFzZS5zeW1ib2wsIHRoaXMucXVvdGUuc3ltYm9sKTtcbiAgICB9XG5cbiAgICBhc3luYyBiaW5hbmNlUHJpY2UoYmFzZSwgcXVvdGUpIHtcbiAgICAgICAgbGV0IGFzc2V0ID0gYCR7cXVvdGUuc3BsaXQoXCIuXCIpLnNsaWNlKC0xKVswXX0ke1xuICAgICAgICAgICAgYmFzZS5zcGxpdChcIi5cIikuc2xpY2UoLTEpWzBdXG4gICAgICAgIH1gXG4gICAgICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCJVU0RcIiwgXCJVU0RUXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2V0IGFzc2V0OiAke2Fzc2V0fWApO1xuICAgICAgICB0aGlzLnByaWNlQXJyYXkgPSB0aGlzLnByaWNlQXJyYXkgfHwgW107XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vYXNzZXQgPSBcIkJUQ1VTRFRcIlxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICAgICAgYGh0dHBzOi8vYXBpLmJpbmFuY2UuY29tL2FwaS92MS90cmFkZXM/c3ltYm9sPSR7YXNzZXR9JmxpbWl0PTFgXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB0aGlzLnByaWNlQXJyYXkucHVzaChkYXRhWzBdLnByaWNlKTtcbiAgICAgICAgICAgIC8vdGhpcy5wcmljZUFycmF5LnB1c2goMTApXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcbiAgICAgICAgICAgICAgICBgRXJyb3IgQmluYW5jZSByZXF1ZXN0OiAke2Fzc2V0fSwgZXJyb3I6ICR7ZXJyb3J9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByaWNlQXJyYXkubGVuZ3RoID4gMTApIHRoaXMucHJpY2VBcnJheS5zaGlmdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlQXJyYXkubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB0aGlzLnByaWNlQXJyYXlcbiAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEucGx1cyhiKSwgQmlnTnVtYmVyKDApKVxuICAgICAgICAgICAgICAgICAgLmRpdih0aGlzLnByaWNlQXJyYXkubGVuZ3RoKVxuICAgICAgICAgICAgOiBCaWdOdW1iZXIoMCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcHJlYWRUcmFkZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCb3RNYW5hZ2VyIGZyb20gXCJsaWIvYm90c1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCB7ZGVib3VuY2V9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbi8vaW1wb3J0IEZsb2F0aW5nRHJvcGRvd24gZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9GbG9hdGluZ0Ryb3Bkb3duXCI7XG5cbmNsYXNzIENyZWF0ZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBiYXNlQXNzZXQ6IFwiVVNEXCIsXG4gICAgICAgIHF1b3RlQXNzZXQ6IFwiT1BFTi5CVENcIixcbiAgICAgICAgYmFzZUFtb3VudDogMTAsXG4gICAgICAgIHF1b3RlQW1vdW50OiAwLjAxLFxuICAgICAgICBiYXNlU3ByZWFkOiAxMCxcbiAgICAgICAgcXVvdGVTcHJlYWQ6IDEwLFxuICAgICAgICBiYXNlQmFsYW5jZTogMTAwLFxuICAgICAgICBxdW90ZUJhbGFuY2U6IDAuMSxcbiAgICAgICAgdmFsaWRhdGU6IFtcIm5hbWVcIl1cbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuYXNzZXRWYWxpZGF0ZSA9IGRlYm91bmNlKHRoaXMuYXNzZXRWYWxpZGF0ZSwgMjAwKTtcbiAgICB9XG5cbiAgICBhc3NldFZhbGlkYXRlID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm5hbWUsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoW1wiYmFzZUFzc2V0XCIsIFwicXVvdGVBc3NldFwiXS5pbmNsdWRlcyhuYW1lKSlcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSwgKCkgPT4gdGhpcy52YWxpZGF0ZShuYW1lLCB2YWx1ZSkpO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQXNzZXRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUFzc2V0XCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUJhbGFuY2VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUJhbGFuY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IFwiLVwiICYmIGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlQW1vdW50XCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVBbW91bnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlU3ByZWFkXCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVTcHJlYWRcIjpcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIgfHwgaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0ZX0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRQcmljZVwiOlxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4oK3ZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbGlkYXRlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodGhpcy5zdGF0ZS52YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+QmFzZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkFzc2V0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiYmFzZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+QmFsYW5jZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUJhbGFuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5BbW91bnQgaW4gb3JkZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlNwcmVhZCwgJTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VTcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlF1b3RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+QXNzZXQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVvdGVBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJxdW90ZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkJhbGFuY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxdW90ZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGVCYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJxdW90ZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5BbW91bnQgaW4gb3JkZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+U3ByZWFkLCAlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxdW90ZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZVNwcmVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkRlZmF1bHQgUHJpY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVmYXVsdFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZGVmYXVsdFByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwiZGVmYXVsdFByaWNlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlRm9ybTtcbiIsImltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYjogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGNhbGwgQXBpcy5kYi4ke21ldGhvZH0oJHtbLi4uYXJndW1lbnRzXX0pYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaXNcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgaGlzdG9yeTogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5oaXN0b3J5X2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgbmV0d29yazogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5uZXR3b3JrX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgY3J5cHRvOiBuZXcgUHJveHkoQXBpcywge1xuICAgICAgICBnZXQoYXBpcywgbWV0aG9kKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaXNcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmNyeXB0b19hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIG9yZGVyczogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5vcmRlcnNfYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMobWV0aG9kLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSlcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFN0YXRlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7dmFsaWRhdGU6IFtdfSwgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgcXVvdGU7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFtb3VudFwiOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnN0YXRlLmJhc2U7XG4gICAgICAgICAgICAgICAgYmFzZS5hbW91bnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYXNlfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUJhbGFuY2VcIjpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xuICAgICAgICAgICAgICAgIGJhc2UuYmFsYW5jZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2V9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlU3ByZWFkXCI6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuc3RhdGUuYmFzZTtcbiAgICAgICAgICAgICAgICBiYXNlLnNwcmVhZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2V9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUFtb3VudFwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5hbW91bnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInF1b3RlQmFsYW5jZVwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5iYWxhbmNlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZVNwcmVhZFwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5zcHJlYWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRQcmljZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlZmF1bHRQcmljZTogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlVXBkYXRlQm90ID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGVOb3cgPSB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5iYXNlLm9yZGVyID0gc3RhdGVOb3cuYmFzZS5vcmRlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS5xdW90ZS5vcmRlciA9IHN0YXRlTm93LnF1b3RlLm9yZGVyO1xuXG4gICAgICAgIHRoaXMucHJvcHMuYm90LnN0b3JhZ2Uud3JpdGUodGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PkJhc2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5Bc3NldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2UuYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkJhbGFuY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2UuYmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiYmFzZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+QW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2UuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+U3ByZWFkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2Uuc3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5RdW90ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkFzc2V0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlLmFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5CYWxhbmNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGUuYmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+U3ByZWFkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZS5zcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkRlZmF1bHQgUHJpY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVmYXVsdFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZGVmYXVsdFByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImRlZmF1bHRQcmljZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVVwZGF0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luQm90dG9tOiAzMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVGb3JtO1xuIiwiaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcblxuY2xhc3MgQXNzZXQge1xuICAgIHN0YXRpYyBnZXQob2JqLCBuYW1lKSB7XG4gICAgICAgIGlmICh0aGlzW25hbWVdKSByZXR1cm4gdGhpc1tuYW1lXTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBc3NldChuYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0QXNzZXQoX3N5bWJvbCkge1xuICAgICAgICBsZXQgc3ltYm9sID0gX3N5bWJvbC50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5tYXAgfHwge307XG5cbiAgICAgICAgaWYgKHRoaXMubWFwW3N5bWJvbF0pIHJldHVybiB0aGlzLm1hcFtzeW1ib2xdO1xuXG4gICAgICAgIGxldCBvYmogPSAoYXdhaXQgQXBpcy5kYi5saXN0X2Fzc2V0cyhzeW1ib2wsIDEpKVswXTtcblxuICAgICAgICBpZiAoIW9iaiB8fCBvYmouc3ltYm9sICE9PSBzeW1ib2wpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYE5vdCBmb3VuZCBhc3NldCAke3N5bWJvbH0hIEJsb2NrY2hhaW4gcmV0dXJuICR7XG4gICAgICAgICAgICAgICAgICAgIG9iaiA/IG9iai5zeW1ib2wgOiBvYmpcbiAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgKTtcblxuICAgICAgICB0aGlzLm1hcFtzeW1ib2xdID0gbmV3IHRoaXMob2JqKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwW3N5bWJvbF07XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGlkKGlkKSB7XG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5tYXAgfHwge307XG4gICAgICAgIGxldCBhc3NldCA9IE9iamVjdC5rZXlzKHRoaXMubWFwKS5maW5kKFxuICAgICAgICAgICAgc3ltYm9sID0+IHRoaXMubWFwW3N5bWJvbF0uaWQgPT0gaWRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoYXNzZXQpIHJldHVybiB0aGlzLm1hcFthc3NldF07XG5cbiAgICAgICAgYXNzZXQgPSAoYXdhaXQgQXBpcy5kYi5nZXRfYXNzZXRzKFtpZF0pKVswXTtcblxuICAgICAgICBpZiAoIWFzc2V0KSB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBhc3NldCBieSBpZCAke2lkfSFgKTtcblxuICAgICAgICB0aGlzLm1hcFthc3NldC5zeW1ib2xdID0gbmV3IHRoaXMoYXNzZXQpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBbYXNzZXQuc3ltYm9sXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZnJvbVBhcmFtKHBhcmFtKSB7XG4gICAgICAgIHJldHVybiB7YW1vdW50OiBwYXJhbS5hbW91bnQsIGFzc2V0OiBhd2FpdCB0aGlzLmlkKHBhcmFtLmFzc2V0X2lkKX07XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcCB8fCB7fTtcblxuICAgICAgICBsZXQgYXNzZXRzID0gYXdhaXQgQXBpcy5kYi5nZXRfYXNzZXRzKFxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tYXApLm1hcChzeW1ib2wgPT4gdGhpcy5tYXBbc3ltYm9sXS5pZClcbiAgICAgICAgKTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4gT2JqZWN0LmFzc2lnbih0aGlzLm1hcFthc3NldC5zeW1ib2xdLCBhc3NldCkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJwY09iaikge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHJwY09iaik7XG4gICAgfVxuXG4gICAgdG9QYXJhbShudW1iZXIgPSAwKSB7XG4gICAgICAgIHJldHVybiB7YW1vdW50OiBudW1iZXIsIGFzc2V0X2lkOiB0aGlzLmlkfTtcbiAgICB9XG5cbiAgICBmZWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubWFya2V0X2ZlZV9wZXJjZW50IC8gMTAwIC8gMTAwO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZSgpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCAoYXdhaXQgQXBpcy5kYi5nZXRfYXNzZXRzKFt0aGlzLmlkXSkpWzBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm94eSh7fSwgQXNzZXQpO1xuIiwiaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5pbXBvcnQgV2FsbGV0RGIgZnJvbSBcInN0b3Jlcy9XYWxsZXREYlwiO1xuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xuaW1wb3J0IHtUcmFuc2FjdGlvbkJ1aWxkZXJ9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuXG5jbGFzcyBBY2NvdW50IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBmZWVTeW1ib2wgPSBcIkJUU1wiKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIEFwaXMuZGIuZ2V0X2FjY291bnRfYnlfbmFtZShuYW1lKSxcbiAgICAgICAgICAgIEFzc2V0c1tmZWVTeW1ib2xdXG4gICAgICAgIF0pLnRoZW4oKFthY2MsIGZlZV0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWNjID0gYWNjO1xuICAgICAgICAgICAgdGhpcy5mZWVBc3NldCA9IGZlZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FuY2VsT3JkZXIoaWQpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRUcmFuc2FjdGlvbihcImxpbWl0X29yZGVyX2NhbmNlbFwiLCB7XG4gICAgICAgICAgICBmZWU6IHRoaXMuZmVlQXNzZXQudG9QYXJhbSgpLFxuICAgICAgICAgICAgZmVlX3BheWluZ19hY2NvdW50OiB0aGlzLmFjYy5pZCxcbiAgICAgICAgICAgIG9yZGVyOiBpZCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGJ1eShcbiAgICAgICAgYnV5U3ltYm9sLFxuICAgICAgICBiYXNlU3ltYm9sLFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIHByaWNlLFxuICAgICAgICBmaWxsX29yX2tpbGwgPSBmYWxzZSxcbiAgICAgICAgZXhwaXJlID0gXCIyMDIwLTAyLTAyVDAyOjAyOjAyXCJcbiAgICApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5wcm9taXNlO1xuXG4gICAgICAgIGxldCBidXlBc3NldCA9IGF3YWl0IEFzc2V0c1tidXlTeW1ib2xdLFxuICAgICAgICAgICAgYmFzZUFzc2V0ID0gYXdhaXQgQXNzZXRzW2Jhc2VTeW1ib2xdLFxuICAgICAgICAgICAgYnV5QW1vdW50ID0gTWF0aC5mbG9vcihhbW91bnQgKiAxMCAqKiBidXlBc3NldC5wcmVjaXNpb24pLFxuICAgICAgICAgICAgc2VsbEFtb3VudCA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgQmlnTnVtYmVyKGFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVzKHByaWNlICogMTAgKiogYmFzZUFzc2V0LnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgaWYgKGJ1eUFtb3VudCA9PSAwIHx8IHNlbGxBbW91bnQgPT0gMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFtb3VudCBlcXVhbCAwIVwiKTtcblxuICAgICAgICBsZXQgdHggPSBhd2FpdCB0aGlzLnNlbmRUcmFuc2FjdGlvbihcImxpbWl0X29yZGVyX2NyZWF0ZVwiLCB7XG4gICAgICAgICAgICBmZWU6IHRoaXMuZmVlQXNzZXQudG9QYXJhbSgpLFxuICAgICAgICAgICAgc2VsbGVyOiB0aGlzLmFjYy5pZCxcbiAgICAgICAgICAgIGFtb3VudF90b19zZWxsOiBiYXNlQXNzZXQudG9QYXJhbShzZWxsQW1vdW50KSxcbiAgICAgICAgICAgIG1pbl90b19yZWNlaXZlOiBidXlBc3NldC50b1BhcmFtKGJ1eUFtb3VudCksXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBleHBpcmUsXG4gICAgICAgICAgICBmaWxsX29yX2tpbGw6IGZpbGxfb3Jfa2lsbCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbXG4gICAgICAgICAgICB0eFswXS50cngub3BlcmF0aW9uX3Jlc3VsdHNbMF1bMV1cbiAgICAgICAgXSkpWzBdO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbGwoXG4gICAgICAgIHNlbGxTeW1ib2wsXG4gICAgICAgIGJhc2VTeW1ib2wsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIGZpbGxfb3Jfa2lsbCA9IGZhbHNlLFxuICAgICAgICBleHBpcmUgPSBcIjIwMjAtMDItMDJUMDI6MDI6MDJcIlxuICAgICkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG5cbiAgICAgICAgbGV0IHNlbGxBc3NldCA9IGF3YWl0IEFzc2V0c1tzZWxsU3ltYm9sXSxcbiAgICAgICAgICAgIGJhc2VBc3NldCA9IGF3YWl0IEFzc2V0c1tiYXNlU3ltYm9sXSxcbiAgICAgICAgICAgIHNlbGxBbW91bnQgPSBNYXRoLmZsb29yKGFtb3VudCAqIDEwICoqIHNlbGxBc3NldC5wcmVjaXNpb24pLFxuICAgICAgICAgICAgYnV5QW1vdW50ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICBCaWdOdW1iZXIoYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAudGltZXMocHJpY2UgKiAxMCAqKiBiYXNlQXNzZXQucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBpZiAoYnV5QW1vdW50ID09IDAgfHwgc2VsbEFtb3VudCA9PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW1vdW50IGVxdWFsIDAhXCIpO1xuXG4gICAgICAgIGxldCB0eCA9IGF3YWl0IHRoaXMuc2VuZFRyYW5zYWN0aW9uKFwibGltaXRfb3JkZXJfY3JlYXRlXCIsIHtcbiAgICAgICAgICAgIGZlZTogdGhpcy5mZWVBc3NldC50b1BhcmFtKCksXG4gICAgICAgICAgICBzZWxsZXI6IHRoaXMuYWNjLmlkLFxuICAgICAgICAgICAgYW1vdW50X3RvX3NlbGw6IHNlbGxBc3NldC50b1BhcmFtKHNlbGxBbW91bnQpLFxuICAgICAgICAgICAgbWluX3RvX3JlY2VpdmU6IGJhc2VBc3NldC50b1BhcmFtKGJ1eUFtb3VudCksXG4gICAgICAgICAgICBleHBpcmF0aW9uOiBleHBpcmUsXG4gICAgICAgICAgICBmaWxsX29yX2tpbGw6IGZpbGxfb3Jfa2lsbCxcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbXG4gICAgICAgICAgICB0eFswXS50cngub3BlcmF0aW9uX3Jlc3VsdHNbMF1bMV1cbiAgICAgICAgXSkpWzBdO1xuICAgIH1cblxuICAgIGFzeW5jIGJhbGFuY2VzKCkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG4gICAgICAgIHJldHVybiBBcGlzLmRiLmdldF9hY2NvdW50X2JhbGFuY2VzKHRoaXMuYWNjLmlkLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZFRyYW5zYWN0aW9uKHR5cGUsIG9wZXJhdGlvbikge1xuICAgICAgICBsZXQgdHIgPSBuZXcgVHJhbnNhY3Rpb25CdWlsZGVyKCk7XG4gICAgICAgIHRyLmFkZF90eXBlX29wZXJhdGlvbih0eXBlLCBvcGVyYXRpb24pO1xuICAgICAgICBhd2FpdCB0ci5zZXRfcmVxdWlyZWRfZmVlcygpO1xuXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XG4gICAgICAgIGxldCBwcml2YXRlX2tleSA9IFdhbGxldERiLmdldFByaXZhdGVLZXkoXG4gICAgICAgICAgICB0aGlzLmFjYy5hY3RpdmUua2V5X2F1dGhzWzBdWzBdXG4gICAgICAgICk7XG4gICAgICAgIHRyLmFkZF9zaWduZXIoXG4gICAgICAgICAgICBwcml2YXRlX2tleSxcbiAgICAgICAgICAgIHByaXZhdGVfa2V5LnRvUHVibGljS2V5KCkudG9QdWJsaWNLZXlTdHJpbmcoKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0ci5icm9hZGNhc3QoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnQ7XG4iLCJpbXBvcnQgQ3JlYXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL0NyZWF0ZVwiO1xuaW1wb3J0IFN0YXRlIGZyb20gXCJjb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlXCI7XG5pbXBvcnQge0NoYWluU3RvcmV9IGZyb20gXCJiaXRzaGFyZXNqc1wiO1xuaW1wb3J0IEFwaXMgZnJvbSBcImxpYi9ib3RzL2FwaXNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcImxpYi9ib3RzL2Fzc2V0c1wiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwibGliL2JvdHMvYWNjb3VudFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBXYWxsZXRVbmxvY2tBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1dhbGxldFVubG9ja0FjdGlvbnNcIjtcblxuY2xhc3MgVHJhaWxpbmdTdG9wIHtcbiAgICBzdGF0aWMgY3JlYXRlID0gQ3JlYXRlO1xuICAgIHN0YXRlID0gU3RhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSkge1xuICAgICAgICB0aGlzLmFjY291bnQgPSBuZXcgQWNjb3VudChhY2NvdW50LCBcIlRFU1RcIik7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XG5cbiAgICAgICAgaWYgKGluaXREYXRhKSB7XG4gICAgICAgICAgICBzdG9yYWdlLmluaXQoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGluaXREYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgc2VsbEFzc2V0OiBpbml0RGF0YS5zZWxsQXNzZXQsXG4gICAgICAgICAgICAgICAgZ2V0QXNzZXQ6IGluaXREYXRhLmdldEFzc2V0LFxuICAgICAgICAgICAgICAgIGFtb3VudDogaW5pdERhdGEuYW1vdW50LFxuICAgICAgICAgICAgICAgIHBlcmNlbnQ6IGluaXREYXRhLnBlcmNlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uYW1lID0gc3RvcmFnZS5yZWFkKCkubmFtZTtcblxuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhc3luYyBzdGFydCgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcblxuICAgICAgICB0aGlzLmJhc2UgPSBhd2FpdCBBc3NldHNbc3RhdGUuYmFzZS5hc3NldF07XG4gICAgICAgIHRoaXMucXVvdGUgPSBhd2FpdCBBc3NldHNbc3RhdGUucXVvdGUuYXNzZXRdO1xuXG4gICAgICAgIC8qXG4gICAgICAgIGlmIChbdGhpcy5iYXNlLmlzc3VlciwgdGhpcy5xdW90ZS5pc3N1ZXJdLmluY2x1ZGVzKFwiMS4yLjBcIikpIHtcbiAgICAgICAgICAgIGlmIChbdGhpcy5iYXNlLmlkLCB0aGlzLnF1b3RlLmlkXS5pbmNsdWRlcyhcIjEuMy4wXCIpKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0Q29yZUZlZWQ7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJhc2UuaXNzdWVyID09IHRoaXMucXVvdGUuaXNzdWVyKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0U21hcnRGZWVkO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmdldEZlZWQgPSB0aGlzLmdldFVJQUZlZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldEZlZWQgPSB0aGlzLmdldFVJQUZlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgKi9cblxuICAgICAgICBhd2FpdCBXYWxsZXRVbmxvY2tBY3Rpb25zLnVubG9jaygpO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICBzZXR0aW5nOiBcIndhbGxldExvY2tUaW1lb3V0XCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9KTtcblxuICAgICAgICBDaGFpblN0b3JlLnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcbiAgICAgICAgdGhpcy5ydW4gPSB0cnVlO1xuICAgIH1cbiAgICBhc3luYyBzdG9wKCkge1xuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXVlRXZlbnRzO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZSgpO1xuICAgIH1cblxuICAgIHF1ZXVlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gdGhpcy5xdWV1ZUV2ZW50c1xuICAgICAgICAgICAgLnRoZW4odGhpcy5jaGVja09yZGVycylcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvci5iaW5kKHRoaXMubG9nZ2VyKSk7XG4gICAgfTtcblxuICAgIGNoZWNrT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrT3JkZXJzXCIpO1xuXG4gICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhaWxpbmdTdG9wO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSBcImxpYi9ib3RzXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuXG5jbGFzcyBDcmVhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBzZWxsQXNzZXQ6IFwiQlRDXCIsXG4gICAgICAgIGdldEFzc2V0OiBcIlVTRFwiLFxuICAgICAgICBhbW91bnQ6IDAuMDEsXG4gICAgICAgIG1pbkFtb3VudDogMSxcbiAgICAgICAgc3RvcGxvc3M6IDEwMCxcbiAgICAgICAgcGVyY2VudDogMTAsXG4gICAgICAgIHZhbGlkYXRlOiBbXCJuYW1lXCJdXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUgPSBkZWJvdW5jZSh0aGlzLmFzc2V0VmFsaWRhdGUsIDIwMCk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKFtcInNlbGxBc3NldFwiLCBcImdldEFzc2V0XCJdLmluY2x1ZGVzKG5hbWUpKVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSBcIm1pbkFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlIC8gdGhpcy5zdGF0ZS5hbW91bnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3RvcGxvc3NcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdGhpcy5zdGF0ZS5hbW91bnQgKiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcImFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy9zdG9wbG9zczogdGhpcy5zdGF0ZS5taW5BbW91bnQgLyB0aGlzLnN0YXRlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSAqIHRoaXMuc3RhdGUuc3RvcGxvc3NcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3NldFZhbGlkYXRlID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzZWxsQXNzZXRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJnZXRBc3NldFwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcIm1pbkFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInBlY2VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInN0b3Bsb3NzXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsaWRhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TZWxsIGFzc2V0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxsQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VsbEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGxBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxsQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5HZXQgYXNzZXQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdldEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImdldEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdldEFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJnZXRBc3NldFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5NaW4gQW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbkFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlN0b3Bsb3NzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdG9wbG9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdG9wbG9zc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJzdG9wbG9zc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+VHJhaWxpbmcgUGVyY2VudCwgJTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwicGVyY2VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgU3RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICB2YWxpZGF0ZTogW11cbiAgICB9O1xuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMucHJvcHMuYm90LnN0b3JhZ2UucmVhZCgpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoW1wic2VsbEFzc2V0XCIsIFwiZ2V0QXNzZXRcIl0uaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBob3Jpem9udGFsXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+U2VsbCBhc3NldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsbEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlbGxBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxsQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJhbW91bnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+R2V0IGFzc2V0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJnZXRBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJnZXRBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nZXRBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlBlcmNlbnQsICU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcInBlcmNlbnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbiIsImltcG9ydCBDcmVhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9SZWxhdGl2ZU9yZGVycy9DcmVhdGVcIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1JlbGF0aXZlT3JkZXJzL1N0YXRlXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwibGliL2JvdHMvYWNjb3VudFwiO1xuXG5jbGFzcyBSZWxhdGl2ZU9yZGVycyB7XG4gICAgc3RhdGljIGNyZWF0ZSA9IENyZWF0ZTtcbiAgICBzdGF0ZSA9IFN0YXRlO1xuXG4gICAgY29uc3RydWN0b3IoYWNjb3VudCwgc3RvcmFnZSwgaW5pdERhdGEpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbmV3IEFjY291bnQoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XG5cbiAgICAgICAgaWYgKGluaXREYXRhKSB7XG4gICAgICAgICAgICBzdG9yYWdlLmluaXQoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGluaXREYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFByaWNlOiBpbml0RGF0YS5kZWZhdWx0UHJpY2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uYW1lID0gc3RvcmFnZS5yZWFkKCkubmFtZTtcblxuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgICAgIHRoaXMucXVldWVFdmVudHMgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhc3luYyBzdGFydCgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcblxuICAgICAgICB0aGlzLmJhc2UgPSBhd2FpdCBBc3NldHNbc3RhdGUuYmFzZS5hc3NldF07XG4gICAgICAgIHRoaXMucXVvdGUgPSBhd2FpdCBBc3NldHNbc3RhdGUucXVvdGUuYXNzZXRdO1xuXG4gICAgICAgIGlmIChbdGhpcy5iYXNlLmlzc3VlciwgdGhpcy5xdW90ZS5pc3N1ZXJdLmluY2x1ZGVzKFwiMS4yLjBcIikpIHtcbiAgICAgICAgICAgIGlmIChbdGhpcy5iYXNlLmlkLCB0aGlzLnF1b3RlLmlkXS5pbmNsdWRlcyhcIjEuMy4wXCIpKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0Q29yZUZlZWQ7XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJhc2UuaXNzdWVyID09IHRoaXMucXVvdGUuaXNzdWVyKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0U21hcnRGZWVkO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmdldEZlZWQgPSB0aGlzLmdldFVJQUZlZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdldEZlZWQgPSB0aGlzLmdldFVJQUZlZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBXYWxsZXRVbmxvY2tBY3Rpb25zLnVubG9jaygpO1xuICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlU2V0dGluZyh7XG4gICAgICAgICAgICBzZXR0aW5nOiBcIndhbGxldExvY2tUaW1lb3V0XCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9KTtcblxuICAgICAgICBDaGFpblN0b3JlLnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcbiAgICAgICAgdGhpcy5ydW4gPSB0cnVlO1xuICAgIH1cbiAgICBhc3luYyBzdG9wKCkge1xuICAgICAgICBDaGFpblN0b3JlLnVuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXVlRXZlbnRzO1xuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZSgpO1xuICAgIH1cblxuICAgIHF1ZXVlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gdGhpcy5xdWV1ZUV2ZW50c1xuICAgICAgICAgICAgLnRoZW4odGhpcy5jaGVja09yZGVycylcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dlci5lcnJvci5iaW5kKHRoaXMubG9nZ2VyKSk7XG4gICAgfTtcblxuICAgIGNoZWNrT3JkZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuXG4gICAgICAgIHRoaXMuc3RvcmFnZS53cml0ZShzdGF0ZSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVsYXRpdmVPcmRlcnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIENyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPHA+SGVsbG8gQ3JlYXRlIFJlbGF0aXZlT3JkZXJzPC9wPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgU3RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxwPkhlbGxvIFN0YXRlIFJlbGF0aXZlT3JkZXJzPC9wPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlO1xuIiwiaW1wb3J0IGxzIGZyb20gXCJjb21tb24vbG9jYWxTdG9yYWdlXCI7XG5cbnZhciBib3RzID0gbHMoXCJfX2JvdHNfX1wiKTtcblxuY2xhc3MgU3RvcmFnZSB7XG4gICAgc3RhdGljIGdldEFjY291bnRCb3QoYWNjb3VudCkge1xuICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKGBeX19ib3RzX18ke2FjY291bnR9OjpgKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZmlsdGVyKGtleSA9PiByZS50ZXN0KGtleSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYXMobmFtZSkge1xuICAgICAgICByZXR1cm4gYm90cy5oYXMobmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAvL2JvdHMuaGFzKG5hbWUpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIC8vaWYgKCFib3RzLmhhcyhuYW1lKSlcbiAgICAgICAgLy9ib3RzLnNldChuYW1lLCB7fSlcbiAgICB9XG5cbiAgICBpbml0KGRhdGEpIHtcbiAgICAgICAgaWYgKCFib3RzLmhhcyhuYW1lKSkgYm90cy5zZXQodGhpcy5uYW1lLCBkYXRhKTtcbiAgICB9XG5cbiAgICByZWFkKCkge1xuICAgICAgICByZXR1cm4gYm90cy5nZXQodGhpcy5uYW1lKTtcbiAgICB9XG5cbiAgICB3cml0ZShuZXdTdGF0ZSkge1xuICAgICAgICBib3RzLnNldCh0aGlzLm5hbWUsIG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGJvdHMucmVtb3ZlKHRoaXMubmFtZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQXVCQTtBQUNBO0FBQ0E7QUF6QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWxDQTtBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFuREE7QUFxREE7QUFFQTtBQUNBO0FBeERBO0FBeURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekRBO0FBZ0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFqRUE7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSkE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUE0REE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFMQTtBQURBO0FBREE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFUQTtBQXpCQTtBQTJDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFsQkE7QUE0QkE7QUFBQTtBQUFBO0FBQUE7QUE5QkE7QUFmQTtBQTVDQTtBQURBO0FBaUdBOzs7O0FBM0xBO0FBQ0E7QUE2TEE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUkE7Ozs7Ozs7Ozs7Ozs7OztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBaERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBeUVBO0FBR0E7QUFDQTtBQTdFQTtBQThFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBZ0JBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQW1CQTtBQW5CQTtBQUFBO0FBQ0E7QUFEQTtBQXNCQTtBQXRCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBOEJBO0FBT0E7QUFDQTtBQUNBO0FBdkNBO0FBMEJBO0FBYUE7QUFNQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUF0REE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXVEQTtBQUNBO0FBQ0E7QUExREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW9FQTtBQUNBO0FBQ0E7QUF2RUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFVQTtBQW5HQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBcUdBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFsSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFvSEE7QUFDQTtBQUNBO0FBdkhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUEwSEE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdElBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE0SUE7QUFDQTtBQTlJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBa0pBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUEvSkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFpS0E7QUFDQTtBQW5LQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF1S0E7QUFDQTtBQUNBO0FBMUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFvTEE7QUFDQTtBQUNBO0FBdkxBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUE2TEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVVBO0FBbE5BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFvTkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQS9OQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQWlPQTtBQUNBO0FBQ0E7QUFwT0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXVPQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbFBBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF5UEE7QUFDQTtBQTNQQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBaVFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUE1UUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUE4UUE7QUFDQTtBQWhSQTtBQUNBO0FBbVJBO0FBQ0E7QUFyUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTEE7QUFTQTtBQXBCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQWdTQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTs7QUFHQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTs7QUFEQTs7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFJQTs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBREE7O0FBR0E7QUFDQTs7QUFEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOWJBO0FBQ0E7QUFDQTtBQWljQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQTVEQTtBQUNBO0FBOERBO0FBQ0E7QUFDQTs7Ozs7QUFqR0E7QUFDQTtBQUNBOzs7QUFpR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVJBO0FBRkE7QUFpQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQXpEQTtBQTJFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBekRBO0FBNUVBO0FBd0pBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFGQTtBQTFLQTtBQTZMQTs7OztBQWhUQTtBQUNBO0FBa1RBOzs7Ozs7OztBQ3pUQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUkE7QUE5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQ0E7QUFDQTtBQW1DQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQXpEQTtBQUNBO0FBR0E7OztBQXVEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTkE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQXhEQTtBQTBFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUF4REE7QUEzRUE7QUFzSkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFSQTtBQUZBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBeEtBO0FBa0xBOzs7O0FBaFBBO0FBQ0E7QUFrUEE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUEE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUNBOztBQUFBO0FBQ0E7Ozs7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFGQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUdBO0FBQUE7O0FBQUE7QUFDQTs7QUFEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFJQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTs7QUFEQTs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7O0FBREE7O0FBVUE7QUFDQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUlBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFDQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTs7QUFEQTs7QUFVQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQTJEQTtBQUdBO0FBQ0E7QUEvREE7QUFnRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUVBOztBQUVBO0FBQ0E7O0FBREE7O0FBQ0E7QUFDQTs7QUFEQTs7QUFjQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBNURBO0FBQ0E7QUFDQTtBQTBFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWdCQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUF2Q0E7QUFDQTtBQXlDQTtBQUNBO0FBQ0E7Ozs7O0FBdEdBO0FBQ0E7QUFDQTs7O0FBc0dBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFGQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFuQkE7QUFrQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFqQkE7QUFuQ0E7QUFzRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFqQkE7QUF2RkE7QUF5SEE7Ozs7QUEvT0E7QUFDQTtBQWlQQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlBBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFaQTtBQUNBO0FBQ0E7OztBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFWQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFmQTtBQThCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVZBO0FBRkE7QUEvQkE7QUErQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQUZBO0FBaERBO0FBbUVBOzs7O0FBeEZBO0FBQ0E7QUEwRkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQXNEQTtBQUdBO0FBQ0E7QUExREE7QUEyREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUF2REE7QUFDQTtBQUNBO0FBb0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=