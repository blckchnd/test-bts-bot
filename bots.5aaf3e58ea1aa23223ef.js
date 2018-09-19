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
/* harmony import */ var stores_BotsStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2592);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



//import RelativeOrders from "./RelativeOrders";


var bots = {};

/* harmony default export */ __webpack_exports__["default"] = ({
    strategies: {
        SpreadTrade: _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__["default"],
        TrailingStop: _TrailingStop__WEBPACK_IMPORTED_MODULE_1__["default"]
        //RelativeOrders
    },

    create: function create(strategy, account, initData) {
        var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_2__["default"](account + "::" + strategy + "[" + initData.name + "]");

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

        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getAccountBot(account).map(function (key) {
            if (bots[key]) return bots[key];

            var _key$replace$split = key.replace(/^__bots__(.+)::(\w+)\[(\w+)\]/, "$2,$3").split(","),
                _key$replace$split2 = _slicedToArray(_key$replace$split, 2),
                strategy = _key$replace$split2[0],
                name = _key$replace$split2[1];

            if (!strategy || !name) return null;

            var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_2__["default"](account + "::" + strategy + "[" + name + "]");

            var bot = new _this.strategies[strategy](account, storage);
            bots[key] = bot;
            return bot;
        }).filter(function (el) {
            return el;
        });
    },
    hasBot: function hasBot(account, strategy, name) {
        console.log("check name stategy", account, strategy, name);
        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_2__["default"].has(account + "::" + strategy + "[" + name + "]");
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
            var state, ticker, feedPrice, buyPrice, sellPrice, buyOrder, sellOrder, accountBalances, baseBalance, quoteBalance, orderAmount, amount, obj, _obj, _orderAmount, _amount, _obj2, _obj3;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            state = _this.storage.read();
                            //console.log("state", state);

                            _context.next = 3;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_ticker(_this.base.symbol, _this.quote.symbol);

                        case 3:
                            ticker = _context.sent;


                            _this.defaultPrice = state.defaultPrice;

                            if (!state.fromMarket) {
                                _context.next = 9;
                                break;
                            }

                            _context.t0 = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ticker.latest);
                            _context.next = 12;
                            break;

                        case 9:
                            _context.next = 11;
                            return _this.getFeed();

                        case 11:
                            _context.t0 = _context.sent;

                        case 12:
                            feedPrice = _context.t0;
                            buyPrice = feedPrice.times(1 - state.base.spread / 100).toNumber();
                            sellPrice = feedPrice.times(1 + state.quote.spread / 100).toNumber();


                            feedPrice = feedPrice.toNumber();

                            if (!(feedPrice == 0)) {
                                _context.next = 18;
                                break;
                            }

                            return _context.abrupt("return");

                        case 18:
                            if (!state.base.order.id) {
                                _context.next = 24;
                                break;
                            }

                            _context.next = 21;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_objects([state.base.order.id]);

                        case 21:
                            _context.t1 = _context.sent[0];
                            _context.next = 25;
                            break;

                        case 24:
                            _context.t1 = state.base.order.id;

                        case 25:
                            buyOrder = _context.t1;

                            if (!state.quote.order.id) {
                                _context.next = 32;
                                break;
                            }

                            _context.next = 29;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_objects([state.quote.order.id]);

                        case 29:
                            _context.t2 = _context.sent[0];
                            _context.next = 33;
                            break;

                        case 32:
                            _context.t2 = state.quote.order.id;

                        case 33:
                            sellOrder = _context.t2;
                            _context.next = 36;
                            return _this.account.balances(_this.base.id, _this.quote.id);

                        case 36:
                            _context.t3 = function (acc, balance) {
                                _this.base.id === balance.asset_id ? acc.base = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(balance.amount).div(Math.pow(10, _this.base.precision)).toNumber() : acc.quote = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(balance.amount).div(Math.pow(10, _this.quote.precision)).toNumber();
                                return acc;
                            };

                            _context.t4 = {};
                            accountBalances = _context.sent.reduce(_context.t3, _context.t4);
                            baseBalance = state.base.balance === "-" ? 0 : state.base.balance === "" ? accountBalances.base : Math.min(accountBalances.base, state.base.balance);
                            quoteBalance = state.quote.balance === "-" ? 0 : state.quote.balance === "" ? accountBalances.quote : Math.min(accountBalances.quote, state.quote.balance);


                            console.log("prices", buyPrice, feedPrice, sellPrice);
                            console.log("orders", buyOrder, sellOrder);

                            if (!buyOrder) {
                                _context.next = 67;
                                break;
                            }

                            //check Price
                            console.log("check buyOrder: move=" + (Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2) + ", fill=" + (ticker.lowest_ask <= buyPrice));

                            if (!(Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2 && ticker.lowest_ask > buyPrice)) {
                                _context.next = 65;
                                break;
                            }

                            // move order

                            _this.logger.info("move buy order: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 49;
                            return _this.account.cancelOrder(state.base.order.id);

                        case 49:

                            // check amount in order
                            orderAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(buyOrder.for_sale).div(Math.pow(10, _this.base.precision)).toNumber();


                            !["", "-"].includes(state.base.balance) && (state.base.balance = Number(state.base.balance) + orderAmount);

                            // add to sell balance
                            if (state.base.order.amount > orderAmount && !["", "-"].incudes(state.quote.balance)) state.quote.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount - orderAmount).div(state.base.order.price).plus(state.quote.balance).toNumber();

                            amount = Math.min(baseBalance, state.base.amount);
                            _context.prev = 53;
                            _context.next = 56;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, amount, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());

                        case 56:
                            obj = _context.sent;

                            state.base.order = {
                                id: obj ? obj.id : "1.7.0",
                                price: buyPrice,
                                amount: amount
                            };
                            !["", "-"].includes(state.base.balance) && (state.base.balance -= amount);
                            _context.next = 65;
                            break;

                        case 61:
                            _context.prev = 61;
                            _context.t5 = _context["catch"](53);

                            _this.logger.error(_context.t5);
                            state.base.order.id = undefined;

                        case 65:
                            _context.next = 82;
                            break;

                        case 67:
                            if (/^1.7.\d*$/.test(state.base.order.id)) {
                                // fill order
                                !["", "-"].includes(state.quote.balance) && (state.quote.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount).div(state.base.order.price).plus(state.quote.balance).toNumber());

                                state.base.order.id = undefined;
                            }

                            console.log("create buyOrder: balance=" + (baseBalance >= state.base.amount) + ", fill=" + (ticker.lowest_ask <= buyPrice));

                            if (!(baseBalance >= state.base.amount && ticker.lowest_ask > buyPrice)) {
                                _context.next = 82;
                                break;
                            }

                            //buy
                            _this.logger.info("buy: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 71;
                            _context.next = 74;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, state.base.amount, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());

                        case 74:
                            _obj = _context.sent;

                            state.base.order = {
                                id: _obj ? _obj.id : "1.7.0",
                                price: buyPrice,
                                amount: state.base.amount
                            };
                            !["", "-"].includes(state.base.balance) && (state.base.balance -= state.base.amount);
                            _context.next = 82;
                            break;

                        case 79:
                            _context.prev = 79;
                            _context.t6 = _context["catch"](71);

                            _this.logger.error(_context.t6);

                        case 82:
                            if (!sellOrder) {
                                _context.next = 106;
                                break;
                            }

                            //check Price
                            console.log("check sellOrder: move=" + (Math.abs(sellPrice - state.quote.order.price) > Math.abs(feedPrice - sellPrice) / 2) + ", fill=" + (ticker.highest_bid >= sellPrice));

                            if (!(Math.abs(sellPrice - state.quote.order.price) > Math.abs(feedPrice - sellPrice) / 2 && ticker.highest_bid < sellPrice)) {
                                _context.next = 104;
                                break;
                            }

                            // move order

                            _this.logger.info("move sell order: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 88;
                            return _this.account.cancelOrder(state.quote.order.id);

                        case 88:

                            // check amount in order
                            _orderAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(sellOrder.for_sale).div(Math.pow(10, _this.quote.precision)).toNumber();

                            !["", "-"].includes(state.quote.balance) && (state.quote.balance = Number(state.quote.balance) + _orderAmount);

                            // add to buy balance
                            if (state.quote.order.amount > _orderAmount && !["", "-"].includes(state.base.balance)) state.base.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount - _orderAmount).times(state.quote.order.price).plus(state.base.balance).toNumber();

                            _amount = Math.min(quoteBalance, state.quote.amount);
                            _context.prev = 92;
                            _context.next = 95;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, _amount, sellPrice);

                        case 95:
                            _obj2 = _context.sent;

                            state.quote.order = {
                                id: _obj2 ? _obj2.id : "1.7.0",
                                price: sellPrice,
                                amount: _amount
                            };
                            !["", "-"].includes(state.quote.balance) && (state.quote.balance -= _amount);
                            _context.next = 104;
                            break;

                        case 100:
                            _context.prev = 100;
                            _context.t7 = _context["catch"](92);

                            _this.logger.error(_context.t7);
                            state.quote.order.id = undefined;

                        case 104:
                            _context.next = 121;
                            break;

                        case 106:
                            if (/^1.7.\d*$/.test(state.quote.order.id)) {
                                // fill order
                                !["", "-"].includes(state.base.balance) && (state.base.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount).times(state.quote.order.price).plus(state.base.balance).toNumber());
                                state.quote.order.id = undefined;
                            }

                            console.log("create sellOrder: balance=" + (quoteBalance >= state.quote.amount) + ", fill=" + (ticker.highest_bid >= sellPrice));

                            if (!(quoteBalance >= state.quote.amount && ticker.highest_bid < sellPrice)) {
                                _context.next = 121;
                                break;
                            }

                            //buy
                            _this.logger.info("sell: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 110;
                            _context.next = 113;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, state.quote.amount, sellPrice);

                        case 113:
                            _obj3 = _context.sent;

                            state.quote.order = {
                                id: _obj3 ? _obj3.id : "1.7.0",
                                price: sellPrice,
                                amount: state.quote.amount
                            };
                            !["", "-"].includes(state.quote.balance) && (state.quote.balance -= state.quote.amount);
                            _context.next = 121;
                            break;

                        case 118:
                            _context.prev = 118;
                            _context.t8 = _context["catch"](110);

                            _this.logger.error(_context.t8);

                        case 121:

                            _this.storage.write(state);

                        case 122:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[53, 61], [71, 79], [92, 100], [110, 118]]);
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
                fromMarket: initData.fromMarket,
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
            quoteAsset: "BTC",
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
            var name = event.target.name,
                value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
            //console.log(name, value)

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
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                            type: "checkbox",
                            name: "fromMarket",
                            onChange: this.handleChange,
                            checked: this.state.fromMarket
                        }),
                        "Get price from market"
                    )
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
                case "fromMarket":
                    _this.setState({ fromMarket: event.target.checked });
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
                        disabled: this.props.bot.run,
                        style: {
                            border: this.state.validate.includes("defaultPrice") ? "1px solid red" : "none"
                        }
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            type: "checkbox",
                            name: "fromMarket",
                            onChange: this.handleChange,
                            checked: this.state.fromMarket,
                            disabled: this.props.bot.run
                        }),
                        "Get price from market"
                    )
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
            var state, ticker, price, needStoploss, createOrderPrice, stoploss;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            state = _this.storage.read();

                            console.log("checkOrders");

                            _context.next = 4;
                            return lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__["default"].db.get_ticker(_this.getAsset.symbol, _this.sellAsset.symbol);

                        case 4:
                            ticker = _context.sent;
                            price = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ticker.latest);
                            needStoploss = price.times(1 - state.percent / 100);
                            createOrderPrice = price.times(1 - state.percent * 2 / 3 / 100);
                            stoploss = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.minAmount).div(state.amount);


                            console.log(price.toNumber(), needStoploss.toNumber(), createOrderPrice.toNumber(), stoploss.toNumber());

                            if (!needStoploss.gt(stoploss)) {
                                _context.next = 16;
                                break;
                            }

                            console.log("up minAmount");
                            state.minAmount = needStoploss.times(state.amount).toNumber();
                            _this.storage.write(state);
                            _context.next = 21;
                            break;

                        case 16:
                            if (!createOrderPrice.lt(stoploss)) {
                                _context.next = 21;
                                break;
                            }

                            console.log("create limit order");
                            _context.next = 20;
                            return _this.account.sell(_this.sellAsset.symbol, _this.getAsset.symbol, state.amount, stoploss.toNumber());

                        case 20:
                            _this.stop();

                        case 21:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        this.account = new lib_bots_account__WEBPACK_IMPORTED_MODULE_6__["default"](account);
        this.storage = storage;

        if (initData) {
            storage.init({
                name: initData.name,
                sellAsset: initData.sellAsset,
                getAsset: initData.getAsset,
                amount: initData.amount,
                minAmount: initData.minAmount,
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
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.sellAsset];

                            case 3:
                                this.sellAsset = _context2.sent;
                                _context2.next = 6;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.getAsset];

                            case 6:
                                this.getAsset = _context2.sent;
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
                    minAmount: value * _this.state.stoploss
                }, function () {
                    return _this.validate(name, value);
                });
            } else {
                _this.setState(_defineProperty({}, name, value), function () {
                    return _this.validate(name, value);
                });
            }

            _this.setState(_defineProperty({}, name, value));
        }, _this.validate = function (name, value) {}, _this.handleUpdateBot = function () {
            _this.props.bot.storage.write(_this.state);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(State, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var state = this.props.bot.storage.read();
            state.stoploss = state.minAmount / state.amount;

            this.setState(state);
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                        className: "grid-block horizontal",
                        style: { marginLeft: 50, marginTop: 50 }
                    },
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
                            disabled: true,
                            style: {
                                marginBottom: 30
                            }
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
                            disabled: this.props.bot.run,
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
                            disabled: true,
                            style: {
                                marginBottom: 30
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Min Amount"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "minAmount",
                            id: "minAmount",
                            type: "text",
                            ref: "input",
                            value: this.state.minAmount,
                            onChange: this.handleChange,
                            disabled: this.props.bot.run,
                            style: {
                                marginBottom: 30,
                                border: this.state.validate.includes("minAmount") ? "1px solid red" : "none"
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
                        "Stoploss"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "stoploss",
                        id: "stoploss",
                        type: "text",
                        ref: "input",
                        value: this.state.stoploss,
                        onChange: this.handleChange,
                        disabled: this.props.bot.run,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("stoploss") ? "1px solid red" : "none"
                        }
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        "Trailing Percent, %"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "percent",
                        id: "percent",
                        type: "text",
                        ref: "input",
                        value: this.state.percent,
                        onChange: this.handleChange,
                        disabled: this.props.bot.run,
                        style: {
                            marginBottom: 30,
                            border: this.state.validate.includes("percent") ? "1px solid red" : "none"
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

    return State;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (State);

/***/ }),

/***/ 2592:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90cy41YWFmM2U1OGVhMWFhMjMyMjNlZi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9Cb3RzL0JvdHMuanN4Iiwid2VicGFjazovLy9hcHAvbGliL2JvdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9TcHJlYWRUcmFkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9TcHJlYWRUcmFkZS9DcmVhdGVGb3JtLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL2FwaXMuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvU3ByZWFkVHJhZGUvU3RhdGVGb3JtLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL2Fzc2V0cy5qcyIsIndlYnBhY2s6Ly8vYXBwL2xpYi9ib3RzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9saWIvYm90cy9UcmFpbGluZ1N0b3AvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL0NyZWF0ZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvVHJhaWxpbmdTdG9wL1N0YXRlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL3N0b3Jlcy9Cb3RzU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm90TWFuYWdlciBmcm9tIFwibGliL2JvdHNcIjtcbmltcG9ydCBBY2NvdW50U3RvcmUgZnJvbSBcInN0b3Jlcy9BY2NvdW50U3RvcmVcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuXG5jbGFzcyBCb3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnN0cmF0ZWdpZXMgPSBCb3RNYW5hZ2VyLnN0cmF0ZWdpZXM7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RTdHJhdGVneTogT2JqZWN0LmtleXModGhpcy5zdHJhdGVnaWVzKVswXSxcbiAgICAgICAgICAgIGJvdHM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0Qm90OiAwLFxuICAgICAgICAgICAgZW5hYmxlQ3JlYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGJvdFJ1bjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IGJvdHMgPSBCb3RNYW5hZ2VyLmdldEJvdHModGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYm90cyxcbiAgICAgICAgICAgIHNlbGVjdEJvdDogMCxcbiAgICAgICAgICAgIGJvdFJ1bjogYm90c1swXSA/IGJvdHNbMF0ucnVuIDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlU3RyYXRlZ3kgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdFN0cmF0ZWd5OiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2hhbmdlQm90ID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0Qm90ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0Qm90LFxuICAgICAgICAgICAgYm90UnVuOiB0aGlzLnN0YXRlLmJvdHNbc2VsZWN0Qm90XS5ydW5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNyZWF0ZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGJvdHMgPSB0aGlzLnN0YXRlLmJvdHM7XG5cbiAgICAgICAgYm90cy5wdXNoKFxuICAgICAgICAgICAgQm90TWFuYWdlci5jcmVhdGUoXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RTdHJhdGVneSxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50LFxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybS5zdGF0ZVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtib3RzfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3JlYXRlRm9ybS52YWxpZGF0ZSlcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybS52YWxpZGF0ZShcIm5hbWVcIiwgdGhpcy5jcmVhdGVGb3JtLnN0YXRlLm5hbWUpO1xuICAgIH07XG5cbiAgICBoYW5kbGVFbmFibGVDcmVhdGUgPSBlbmFibGVDcmVhdGUgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbmFibGVDcmVhdGUgIT0gZW5hYmxlQ3JlYXRlKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW5hYmxlQ3JlYXRlfSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVN0YXJ0Qm90ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgYm90ID0gdGhpcy5zdGF0ZS5ib3RzW3RoaXMuc3RhdGUuc2VsZWN0Qm90XTtcblxuICAgICAgICBhd2FpdCBib3Quc3RhcnQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Ym90UnVuOiBib3QucnVufSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVN0b3BCb3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBib3QgPSB0aGlzLnN0YXRlLmJvdHNbdGhpcy5zdGF0ZS5zZWxlY3RCb3RdO1xuXG4gICAgICAgIGF3YWl0IGJvdC5zdG9wKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2JvdFJ1bjogYm90LnJ1bn0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVEZWxldGVCb3QgPSAoKSA9PiB7XG4gICAgICAgIEJvdE1hbmFnZXIuZGVsZXRlKHRoaXMuc3RhdGUuYm90c1t0aGlzLnN0YXRlLnNlbGVjdEJvdF0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYm90czogQm90TWFuYWdlci5nZXRCb3RzKHRoaXMucHJvcHMuY3VycmVudEFjY291bnQpLFxuICAgICAgICAgICAgc2VsZWN0Qm90OiAwXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzdGFydCByZW5kZXIgbWFpbiBwYWdlXCIsIHRoaXMucHJvcHMpXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRBY2NvdW50ID09PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBsZXQgQ3JlYXRlRm9ybSA9IHRoaXMuc3RyYXRlZ2llc1t0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5XS5jcmVhdGU7XG5cbiAgICAgICAgbGV0IGJvdCA9IHRoaXMuc3RhdGUuYm90c1t0aGlzLnN0YXRlLnNlbGVjdEJvdF0gfHwgbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIHNocmluayB2ZXJ0aWNhbCBtZWRpdW0taG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3twYWRkaW5nQm90dG9tOiAyMCwgb3ZlcmZsb3c6IFwidmlzaWJsZVwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtY29udGVudCBzbWFsbC0xMiBtZWRpdW0tNiBsYXJnZS01IGxhcmdlLW9mZnNldC0xIGZ1bGwtd2lkdGgtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVDcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAzMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBzdHJhdGVneTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgYnRzLXNlbGVjdCBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdFN0cmF0ZWd5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlU3RyYXRlZ3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnN0cmF0ZWdpZXMpLm1hcChuYW1lID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bmFtZX0gdmFsdWU9e25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2Zvcm0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtID0gZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5wcm9wcy5jdXJyZW50QWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5zdGF0ZS5zZWxlY3RTdHJhdGVneX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ3JlYXRlPXt0aGlzLmhhbmRsZUVuYWJsZUNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIG5vLW1hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZW5hYmxlQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiIHN0eWxlPXt7bWFyZ2luVG9wOiAzMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdCBzdGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgYnRzLXNlbGVjdFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdEJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VCb3R9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYm90cy5tYXAoKGJvdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JvdC5uYW1lfSB2YWx1ZT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2JvdC5uYW1lfSAoJHtib3QuY29uc3RydWN0b3IubmFtZX0pYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Ym90LnN0YXRlIGtleT17Ym90Lm5hbWV9IGJvdD17Ym90fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdGFydEJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ib3RSdW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdG9wQm90fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5ib3RSdW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURlbGV0ZUJvdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5ib3RSdW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlLCBzZWxlY3QgYm90PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgQm90cyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtBY2NvdW50U3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEFjY291bnQ6IEFjY291bnRTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRBY2NvdW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBTcHJlYWRUcmFkZSBmcm9tIFwiLi9TcHJlYWRUcmFkZVwiO1xuaW1wb3J0IFRyYWlsaW5nU3RvcCBmcm9tIFwiLi9UcmFpbGluZ1N0b3BcIjtcbi8vaW1wb3J0IFJlbGF0aXZlT3JkZXJzIGZyb20gXCIuL1JlbGF0aXZlT3JkZXJzXCI7XG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwic3RvcmVzL0JvdHNTdG9yYWdlXCI7XG5cbnZhciBib3RzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdHJhdGVnaWVzOiB7XG4gICAgICAgIFNwcmVhZFRyYWRlLFxuICAgICAgICBUcmFpbGluZ1N0b3BcbiAgICAgICAgLy9SZWxhdGl2ZU9yZGVyc1xuICAgIH0sXG5cbiAgICBjcmVhdGUoc3RyYXRlZ3ksIGFjY291bnQsIGluaXREYXRhKSB7XG4gICAgICAgIGxldCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoYCR7YWNjb3VudH06OiR7c3RyYXRlZ3l9WyR7aW5pdERhdGEubmFtZX1dYCk7XG5cbiAgICAgICAgbGV0IGJvdCA9IG5ldyB0aGlzLnN0cmF0ZWdpZXNbc3RyYXRlZ3ldKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKTtcbiAgICAgICAgYm90c1tgX19ib3RzX18ke3N0b3JhZ2UubmFtZX1gXSA9IGJvdDtcblxuICAgICAgICByZXR1cm4gYm90O1xuICAgIH0sXG5cbiAgICBkZWxldGUoYm90KSB7XG4gICAgICAgIGxldCBuYW1lID0gYF9fYm90c19fJHtib3Quc3RvcmFnZS5uYW1lfWA7XG5cbiAgICAgICAgYm90c1tuYW1lXS5kZWxldGUoKTtcbiAgICAgICAgZGVsZXRlIGJvdHNbbmFtZV07XG4gICAgfSxcblxuICAgIGdldEJvdHMoYWNjb3VudCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2V0Qm90c1wiLCBPYmplY3Qua2V5cyhib3RzKSlcblxuICAgICAgICByZXR1cm4gU3RvcmFnZS5nZXRBY2NvdW50Qm90KGFjY291bnQpXG4gICAgICAgICAgICAubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJvdHNba2V5XSkgcmV0dXJuIGJvdHNba2V5XTtcblxuICAgICAgICAgICAgICAgIGxldCBbc3RyYXRlZ3ksIG5hbWVdID0ga2V5XG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eX19ib3RzX18oLispOjooXFx3KylcXFsoXFx3KylcXF0vLCBcIiQyLCQzXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIixcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXN0cmF0ZWd5IHx8ICFuYW1lKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgICAgIGxldCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoYCR7YWNjb3VudH06OiR7c3RyYXRlZ3l9WyR7bmFtZX1dYCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYm90ID0gbmV3IHRoaXMuc3RyYXRlZ2llc1tzdHJhdGVneV0oYWNjb3VudCwgc3RvcmFnZSk7XG4gICAgICAgICAgICAgICAgYm90c1trZXldID0gYm90O1xuICAgICAgICAgICAgICAgIHJldHVybiBib3Q7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihlbCA9PiBlbCk7XG4gICAgfSxcblxuICAgIGhhc0JvdChhY2NvdW50LCBzdHJhdGVneSwgbmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIG5hbWUgc3RhdGVneVwiLCBhY2NvdW50LCBzdHJhdGVneSwgbmFtZSk7XG4gICAgICAgIHJldHVybiBTdG9yYWdlLmhhcyhgJHthY2NvdW50fTo6JHtzdHJhdGVneX1bJHtuYW1lfV1gKTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IENyZWF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL0NyZWF0ZUZvcm1cIjtcbmltcG9ydCBTdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9Cb3RzL1NwcmVhZFRyYWRlL1N0YXRlRm9ybVwiO1xuaW1wb3J0IHtDaGFpblN0b3JlfSBmcm9tIFwiYml0c2hhcmVzanNcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQgQXNzZXRzIGZyb20gXCJsaWIvYm90cy9hc3NldHNcIjtcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSBcImJpZ251bWJlci5qc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcImxpYi9ib3RzL2FjY291bnRcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgV2FsbGV0VW5sb2NrQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRVbmxvY2tBY3Rpb25zXCI7XG5cbmNsYXNzIFNwcmVhZFRyYWRlIHtcbiAgICBzdGF0aWMgY3JlYXRlID0gQ3JlYXRlO1xuICAgIHN0YXRlID0gU3RhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50LCBzdG9yYWdlLCBpbml0RGF0YSkge1xuICAgICAgICB0aGlzLmFjY291bnQgPSBuZXcgQWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcblxuICAgICAgICBpZiAoaW5pdERhdGEpIHtcbiAgICAgICAgICAgIHN0b3JhZ2UuaW5pdCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaW5pdERhdGEubmFtZSxcbiAgICAgICAgICAgICAgICBiYXNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0OiBpbml0RGF0YS5iYXNlQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IGluaXREYXRhLmJhc2VCYWxhbmNlLFxuICAgICAgICAgICAgICAgICAgICBzcHJlYWQ6IGluaXREYXRhLmJhc2VTcHJlYWQsXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogaW5pdERhdGEuYmFzZUFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWQsIHByaWNlIGFuZCBhbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcXVvdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQ6IGluaXREYXRhLnF1b3RlQXNzZXQsXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IGluaXREYXRhLnF1b3RlQmFsYW5jZSxcbiAgICAgICAgICAgICAgICAgICAgc3ByZWFkOiBpbml0RGF0YS5xdW90ZVNwcmVhZCxcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBpbml0RGF0YS5xdW90ZUFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWQsIHByaWNlIGFuZCBhbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnJvbU1hcmtldDogaW5pdERhdGEuZnJvbU1hcmtldCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0UHJpY2U6IGluaXREYXRhLmRlZmF1bHRQcmljZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5hbWUgPSBzdG9yYWdlLnJlYWQoKS5uYW1lO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLnJ1biA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0KCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuXG4gICAgICAgIHRoaXMuYmFzZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5iYXNlLmFzc2V0XTtcbiAgICAgICAgdGhpcy5xdW90ZSA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5xdW90ZS5hc3NldF07XG5cbiAgICAgICAgaWYgKFt0aGlzLmJhc2UuaXNzdWVyLCB0aGlzLnF1b3RlLmlzc3Vlcl0uaW5jbHVkZXMoXCIxLjIuMFwiKSkge1xuICAgICAgICAgICAgaWYgKFt0aGlzLmJhc2UuaWQsIHRoaXMucXVvdGUuaWRdLmluY2x1ZGVzKFwiMS4zLjBcIikpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRDb3JlRmVlZDtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYmFzZS5pc3N1ZXIgPT0gdGhpcy5xdW90ZS5pc3N1ZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGZWVkID0gdGhpcy5nZXRTbWFydEZlZWQ7XG4gICAgICAgICAgICBlbHNlIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0VUlBRmVlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RmVlZCA9IHRoaXMuZ2V0VUlBRmVlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IFdhbGxldFVubG9ja0FjdGlvbnMudW5sb2NrKCk7XG4gICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VTZXR0aW5nKHtcbiAgICAgICAgICAgIHNldHRpbmc6IFwid2FsbGV0TG9ja1RpbWVvdXRcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIENoYWluU3RvcmUuc3Vic2NyaWJlKHRoaXMucXVldWUpO1xuICAgICAgICB0aGlzLnJ1biA9IHRydWU7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RvcCgpIHtcbiAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWV1ZUV2ZW50cztcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoKTtcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IHRoaXMucXVldWVFdmVudHNcbiAgICAgICAgICAgIC50aGVuKHRoaXMuY2hlY2tPcmRlcnMpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3IuYmluZCh0aGlzLmxvZ2dlcikpO1xuICAgIH07XG5cbiAgICBjaGVja09yZGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInN0YXRlXCIsIHN0YXRlKTtcblxuICAgICAgICBsZXQgdGlja2VyID0gYXdhaXQgQXBpcy5kYi5nZXRfdGlja2VyKFxuICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcbiAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5kZWZhdWx0UHJpY2UgPSBzdGF0ZS5kZWZhdWx0UHJpY2U7XG5cbiAgICAgICAgbGV0IGZlZWRQcmljZSA9IHN0YXRlLmZyb21NYXJrZXRcbiAgICAgICAgICAgICAgICA/IEJpZ051bWJlcih0aWNrZXIubGF0ZXN0KVxuICAgICAgICAgICAgICAgIDogYXdhaXQgdGhpcy5nZXRGZWVkKCksXG4gICAgICAgICAgICBidXlQcmljZSA9IGZlZWRQcmljZS50aW1lcygxIC0gc3RhdGUuYmFzZS5zcHJlYWQgLyAxMDApLnRvTnVtYmVyKCksXG4gICAgICAgICAgICBzZWxsUHJpY2UgPSBmZWVkUHJpY2VcbiAgICAgICAgICAgICAgICAudGltZXMoMSArIHN0YXRlLnF1b3RlLnNwcmVhZCAvIDEwMClcbiAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcblxuICAgICAgICBmZWVkUHJpY2UgPSBmZWVkUHJpY2UudG9OdW1iZXIoKTtcblxuICAgICAgICBpZiAoZmVlZFByaWNlID09IDApIHJldHVybjtcblxuICAgICAgICBsZXQgYnV5T3JkZXIgPSBzdGF0ZS5iYXNlLm9yZGVyLmlkXG4gICAgICAgICAgICAgICAgPyAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbc3RhdGUuYmFzZS5vcmRlci5pZF0pKVswXVxuICAgICAgICAgICAgICAgIDogc3RhdGUuYmFzZS5vcmRlci5pZCxcbiAgICAgICAgICAgIHNlbGxPcmRlciA9IHN0YXRlLnF1b3RlLm9yZGVyLmlkXG4gICAgICAgICAgICAgICAgPyAoYXdhaXQgQXBpcy5kYi5nZXRfb2JqZWN0cyhbc3RhdGUucXVvdGUub3JkZXIuaWRdKSlbMF1cbiAgICAgICAgICAgICAgICA6IHN0YXRlLnF1b3RlLm9yZGVyLmlkLFxuICAgICAgICAgICAgYWNjb3VudEJhbGFuY2VzID0gKGF3YWl0IHRoaXMuYWNjb3VudC5iYWxhbmNlcyhcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuaWQsXG4gICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5pZFxuICAgICAgICAgICAgKSkucmVkdWNlKChhY2MsIGJhbGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuaWQgPT09IGJhbGFuY2UuYXNzZXRfaWRcbiAgICAgICAgICAgICAgICAgICAgPyAoYWNjLmJhc2UgPSBCaWdOdW1iZXIoYmFsYW5jZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpXG4gICAgICAgICAgICAgICAgICAgIDogKGFjYy5xdW90ZSA9IEJpZ051bWJlcihiYWxhbmNlLmFtb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgICBiYXNlQmFsYW5jZSA9XG4gICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5iYWxhbmNlID09PSBcIi1cIlxuICAgICAgICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgICAgICAgOiBzdGF0ZS5iYXNlLmJhbGFuY2UgPT09IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEJhbGFuY2VzLmJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDogTWF0aC5taW4oYWNjb3VudEJhbGFuY2VzLmJhc2UsIHN0YXRlLmJhc2UuYmFsYW5jZSksXG4gICAgICAgICAgICBxdW90ZUJhbGFuY2UgPVxuICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLmJhbGFuY2UgPT09IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLnF1b3RlLmJhbGFuY2UgPT09IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYWNjb3VudEJhbGFuY2VzLnF1b3RlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGgubWluKGFjY291bnRCYWxhbmNlcy5xdW90ZSwgc3RhdGUucXVvdGUuYmFsYW5jZSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJwcmljZXNcIiwgYnV5UHJpY2UsIGZlZWRQcmljZSwgc2VsbFByaWNlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJvcmRlcnNcIiwgYnV5T3JkZXIsIHNlbGxPcmRlcik7XG5cbiAgICAgICAgaWYgKGJ1eU9yZGVyKSB7XG4gICAgICAgICAgICAvL2NoZWNrIFByaWNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgY2hlY2sgYnV5T3JkZXI6IG1vdmU9JHtNYXRoLmFicyhcbiAgICAgICAgICAgICAgICAgICAgYnV5UHJpY2UgLSBzdGF0ZS5iYXNlLm9yZGVyLnByaWNlXG4gICAgICAgICAgICAgICAgKSA+XG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGZlZWRQcmljZSAtIGJ1eVByaWNlKSAvXG4gICAgICAgICAgICAgICAgICAgICAgICAyfSwgZmlsbD0ke3RpY2tlci5sb3dlc3RfYXNrIDw9IGJ1eVByaWNlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoYnV5UHJpY2UgLSBzdGF0ZS5iYXNlLm9yZGVyLnByaWNlKSA+XG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGZlZWRQcmljZSAtIGJ1eVByaWNlKSAvIDIgJiZcbiAgICAgICAgICAgICAgICB0aWNrZXIubG93ZXN0X2FzayA+IGJ1eVByaWNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIG9yZGVyXG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFxuICAgICAgICAgICAgICAgICAgICBgbW92ZSBidXkgb3JkZXI6ICR7YnV5UHJpY2V9ICR7dGhpcy5xdW90ZS5zeW1ib2x9LyR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnQuY2FuY2VsT3JkZXIoc3RhdGUuYmFzZS5vcmRlci5pZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhbW91bnQgaW4gb3JkZXJcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXJBbW91bnQgPSBCaWdOdW1iZXIoYnV5T3JkZXIuZm9yX3NhbGUpXG4gICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5iYXNlLnByZWNpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5iYXNlLmJhbGFuY2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHN0YXRlLmJhc2UuYmFsYW5jZSkgKyBvcmRlckFtb3VudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgdG8gc2VsbCBiYWxhbmNlXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyLmFtb3VudCA+IG9yZGVyQW1vdW50ICYmXG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY3VkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLmJhbGFuY2UgPSBCaWdOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLm9yZGVyLmFtb3VudCAtIG9yZGVyQW1vdW50XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoc3RhdGUuYmFzZS5vcmRlci5wcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wbHVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9OdW1iZXIoKTtcblxuICAgICAgICAgICAgICAgIGxldCBhbW91bnQgPSBNYXRoLm1pbihiYXNlQmFsYW5jZSwgc3RhdGUuYmFzZS5hbW91bnQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1b3RlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlcigxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYnV5UHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYnV5UHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLmJhc2UuYmFsYW5jZSAtPSBhbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoL14xLjcuXFxkKiQvLnRlc3Qoc3RhdGUuYmFzZS5vcmRlci5pZCkpIHtcbiAgICAgICAgICAgICAgICAvLyBmaWxsIG9yZGVyXG4gICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUucXVvdGUuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgPSBCaWdOdW1iZXIoc3RhdGUuYmFzZS5vcmRlci5hbW91bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGl2KHN0YXRlLmJhc2Uub3JkZXIucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGx1cyhzdGF0ZS5xdW90ZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlci5pZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgYGNyZWF0ZSBidXlPcmRlcjogYmFsYW5jZT0ke2Jhc2VCYWxhbmNlID49XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmJhc2UuYW1vdW50fSwgZmlsbD0ke3RpY2tlci5sb3dlc3RfYXNrIDw9IGJ1eVByaWNlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgYmFzZUJhbGFuY2UgPj0gc3RhdGUuYmFzZS5hbW91bnQgJiZcbiAgICAgICAgICAgICAgICB0aWNrZXIubG93ZXN0X2FzayA+IGJ1eVByaWNlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvL2J1eVxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXG4gICAgICAgICAgICAgICAgICAgIGBidXk6ICR7YnV5UHJpY2V9ICR7dGhpcy5xdW90ZS5zeW1ib2x9LyR7dGhpcy5iYXNlLnN5bWJvbH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5hY2NvdW50LnNlbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5iYXNlLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIEJpZ051bWJlcigxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXYoYnV5UHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5vcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogYnV5UHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHN0YXRlLmJhc2UuYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLmJhc2UuYmFsYW5jZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZS5iYXNlLmJhbGFuY2UgLT0gc3RhdGUuYmFzZS5hbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsbE9yZGVyKSB7XG4gICAgICAgICAgICAvL2NoZWNrIFByaWNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgY2hlY2sgc2VsbE9yZGVyOiBtb3ZlPSR7TWF0aC5hYnMoXG4gICAgICAgICAgICAgICAgICAgIHNlbGxQcmljZSAtIHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlXG4gICAgICAgICAgICAgICAgKSA+XG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKGZlZWRQcmljZSAtIHNlbGxQcmljZSkgL1xuICAgICAgICAgICAgICAgICAgICAgICAgMn0sIGZpbGw9JHt0aWNrZXIuaGlnaGVzdF9iaWQgPj0gc2VsbFByaWNlfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoc2VsbFByaWNlIC0gc3RhdGUucXVvdGUub3JkZXIucHJpY2UpID5cbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoZmVlZFByaWNlIC0gc2VsbFByaWNlKSAvIDIgJiZcbiAgICAgICAgICAgICAgICB0aWNrZXIuaGlnaGVzdF9iaWQgPCBzZWxsUHJpY2VcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmUgb3JkZXJcblxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXG4gICAgICAgICAgICAgICAgICAgIGBtb3ZlIHNlbGwgb3JkZXI6ICR7c2VsbFByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50LmNhbmNlbE9yZGVyKHN0YXRlLnF1b3RlLm9yZGVyLmlkKTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFtb3VudCBpbiBvcmRlclxuICAgICAgICAgICAgICAgIGxldCBvcmRlckFtb3VudCA9IEJpZ051bWJlcihzZWxsT3JkZXIuZm9yX3NhbGUpXG4gICAgICAgICAgICAgICAgICAgIC5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b051bWJlcigpO1xuICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5xdW90ZS5iYWxhbmNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihzdGF0ZS5xdW90ZS5iYWxhbmNlKSArIG9yZGVyQW1vdW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGFkZCB0byBidXkgYmFsYW5jZVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuYW1vdW50ID4gb3JkZXJBbW91bnQgJiZcbiAgICAgICAgICAgICAgICAgICAgIVtcIlwiLCBcIi1cIl0uaW5jbHVkZXMoc3RhdGUuYmFzZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuYmFzZS5iYWxhbmNlID0gQmlnTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuYW1vdW50IC0gb3JkZXJBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUuYmFzZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYW1vdW50ID0gTWF0aC5taW4ocXVvdGVCYWxhbmNlLCBzdGF0ZS5xdW90ZS5hbW91bnQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSBhd2FpdCB0aGlzLmFjY291bnQuc2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVvdGUuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxQcmljZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5vcmRlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBvYmogPyBvYmouaWQgOiBcIjEuNy4wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogc2VsbFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICFbXCJcIiwgXCItXCJdLmluY2x1ZGVzKHN0YXRlLnF1b3RlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUucXVvdGUuYmFsYW5jZSAtPSBhbW91bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUub3JkZXIuaWQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKC9eMS43LlxcZCokLy50ZXN0KHN0YXRlLnF1b3RlLm9yZGVyLmlkKSkge1xuICAgICAgICAgICAgICAgIC8vIGZpbGwgb3JkZXJcbiAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5iYXNlLmJhbGFuY2UpICYmXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5iYXNlLmJhbGFuY2UgPSBCaWdOdW1iZXIoc3RhdGUucXVvdGUub3JkZXIuYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVzKHN0YXRlLnF1b3RlLm9yZGVyLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBsdXMoc3RhdGUuYmFzZS5iYWxhbmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyLmlkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBgY3JlYXRlIHNlbGxPcmRlcjogYmFsYW5jZT0ke3F1b3RlQmFsYW5jZSA+PVxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5xdW90ZS5hbW91bnR9LCBmaWxsPSR7dGlja2VyLmhpZ2hlc3RfYmlkID49XG4gICAgICAgICAgICAgICAgICAgIHNlbGxQcmljZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHF1b3RlQmFsYW5jZSA+PSBzdGF0ZS5xdW90ZS5hbW91bnQgJiZcbiAgICAgICAgICAgICAgICB0aWNrZXIuaGlnaGVzdF9iaWQgPCBzZWxsUHJpY2VcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vYnV5XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcbiAgICAgICAgICAgICAgICAgICAgYHNlbGw6ICR7c2VsbFByaWNlfSAke3RoaXMucXVvdGUuc3ltYm9sfS8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdW90ZS5zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2Uuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUucXVvdGUuYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsbFByaWNlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnF1b3RlLm9yZGVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9iaiA/IG9iai5pZCA6IFwiMS43LjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBzZWxsUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHN0YXRlLnF1b3RlLmFtb3VudFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAhW1wiXCIsIFwiLVwiXS5pbmNsdWRlcyhzdGF0ZS5xdW90ZS5iYWxhbmNlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHN0YXRlLnF1b3RlLmJhbGFuY2UgLT0gc3RhdGUucXVvdGUuYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdG9yYWdlLndyaXRlKHN0YXRlKTtcbiAgICB9O1xuXG4gICAgYXN5bmMgZ2V0Q29yZUZlZWQoKSB7XG4gICAgICAgIGxldCByYXRlO1xuXG4gICAgICAgIGlmICh0aGlzLmJhc2UuaWQgPT0gXCIxLjMuMFwiKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnF1b3RlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmF0ZSA9IHRoaXMucXVvdGUub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmJhc2UudXBkYXRlKCk7XG4gICAgICAgICAgICByYXRlID0gdGhpcy5iYXNlLm9wdGlvbnMuY29yZV9leGNoYW5nZV9yYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPVxuICAgICAgICAgICAgcmF0ZS5iYXNlLmFzc2V0X2lkID09IHRoaXMuYmFzZS5pZFxuICAgICAgICAgICAgICAgID8gW3JhdGUuYmFzZSwgcmF0ZS5xdW90ZV1cbiAgICAgICAgICAgICAgICA6IFtyYXRlLnF1b3RlLCByYXRlLmJhc2VdO1xuXG4gICAgICAgIHJldHVybiBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAuZGl2KDEwICoqIHRoaXMuYmFzZS5wcmVjaXNpb24pXG4gICAgICAgICAgICAuZGl2KEJpZ051bWJlcihxdW90ZS5hbW91bnQpLmRpdigxMCAqKiB0aGlzLnF1b3RlLnByZWNpc2lvbikpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNtYXJ0RmVlZCgpIHtcbiAgICAgICAgbGV0IGJ0cyA9IGF3YWl0IEFzc2V0c1tcImJ0c1wiXTtcbiAgICAgICAgYXdhaXQgdGhpcy5iYXNlLnVwZGF0ZSgpO1xuICAgICAgICBsZXQgcmF0ZSA9IHRoaXMuYmFzZS5vcHRpb25zLmNvcmVfZXhjaGFuZ2VfcmF0ZTtcbiAgICAgICAgbGV0IFtiYXNlLCBxdW90ZV0gPVxuICAgICAgICAgICAgcmF0ZS5iYXNlLmFzc2V0X2lkID09IFwiMS4zLjBcIlxuICAgICAgICAgICAgICAgID8gW3JhdGUuYmFzZSwgcmF0ZS5xdW90ZV1cbiAgICAgICAgICAgICAgICA6IFtyYXRlLnF1b3RlLCByYXRlLmJhc2VdO1xuXG4gICAgICAgIGxldCBiYXNlUHJpY2UgPSBCaWdOdW1iZXIoYmFzZS5hbW91bnQpXG4gICAgICAgICAgICAuZGl2KDEwICoqIGJ0cy5wcmVjaXNpb24pXG4gICAgICAgICAgICAuZGl2KEJpZ051bWJlcihxdW90ZS5hbW91bnQpLmRpdigxMCAqKiB0aGlzLmJhc2UucHJlY2lzaW9uKSk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5xdW90ZS51cGRhdGUoKTtcbiAgICAgICAgcmF0ZSA9IHRoaXMucXVvdGUub3B0aW9ucy5jb3JlX2V4Y2hhbmdlX3JhdGU7XG4gICAgICAgIGlmIChyYXRlLmJhc2UuYXNzZXRfaWQgPT0gXCIxLjMuMFwiKSB7XG4gICAgICAgICAgICBiYXNlID0gcmF0ZS5iYXNlO1xuICAgICAgICAgICAgcXVvdGUgPSByYXRlLnF1b3RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFzZSA9IHJhdGUucXVvdGU7XG4gICAgICAgICAgICBxdW90ZSA9IHJhdGUuYmFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBxdW90ZVByaWNlID0gQmlnTnVtYmVyKGJhc2UuYW1vdW50KVxuICAgICAgICAgICAgLmRpdigxMCAqKiBidHMucHJlY2lzaW9uKVxuICAgICAgICAgICAgLmRpdihCaWdOdW1iZXIocXVvdGUuYW1vdW50KS5kaXYoMTAgKiogdGhpcy5xdW90ZS5wcmVjaXNpb24pKTtcblxuICAgICAgICByZXR1cm4gcXVvdGVQcmljZS5kaXYoYmFzZVByaWNlKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRVSUFGZWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0UHJpY2VcbiAgICAgICAgICAgID8gQmlnTnVtYmVyKHRoaXMuZGVmYXVsdFByaWNlKVxuICAgICAgICAgICAgOiBhd2FpdCB0aGlzLmJpbmFuY2VQcmljZSh0aGlzLmJhc2Uuc3ltYm9sLCB0aGlzLnF1b3RlLnN5bWJvbCk7XG4gICAgfVxuXG4gICAgYXN5bmMgYmluYW5jZVByaWNlKGJhc2UsIHF1b3RlKSB7XG4gICAgICAgIGxldCBhc3NldCA9IGAke3F1b3RlLnNwbGl0KFwiLlwiKS5zbGljZSgtMSlbMF19JHtcbiAgICAgICAgICAgIGJhc2Uuc3BsaXQoXCIuXCIpLnNsaWNlKC0xKVswXVxuICAgICAgICB9YFxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgIC5yZXBsYWNlKFwiVVNEXCIsIFwiVVNEVFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYGdldCBhc3NldDogJHthc3NldH1gKTtcbiAgICAgICAgdGhpcy5wcmljZUFycmF5ID0gdGhpcy5wcmljZUFycmF5IHx8IFtdO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvL2Fzc2V0ID0gXCJCVENVU0RUXCJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgIGBodHRwczovL2FwaS5iaW5hbmNlLmNvbS9hcGkvdjEvdHJhZGVzP3N5bWJvbD0ke2Fzc2V0fSZsaW1pdD0xYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgdGhpcy5wcmljZUFycmF5LnB1c2goZGF0YVswXS5wcmljZSk7XG4gICAgICAgICAgICAvL3RoaXMucHJpY2VBcnJheS5wdXNoKDEwKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXG4gICAgICAgICAgICAgICAgYEVycm9yIEJpbmFuY2UgcmVxdWVzdDogJHthc3NldH0sIGVycm9yOiAke2Vycm9yfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcmljZUFycmF5Lmxlbmd0aCA+IDEwKSB0aGlzLnByaWNlQXJyYXkuc2hpZnQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcmljZUFycmF5Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gdGhpcy5wcmljZUFycmF5XG4gICAgICAgICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBhLnBsdXMoYiksIEJpZ051bWJlcigwKSlcbiAgICAgICAgICAgICAgICAgIC5kaXYodGhpcy5wcmljZUFycmF5Lmxlbmd0aClcbiAgICAgICAgICAgIDogQmlnTnVtYmVyKDApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ByZWFkVHJhZGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm90TWFuYWdlciBmcm9tIFwibGliL2JvdHNcIjtcbmltcG9ydCBBcGlzIGZyb20gXCJsaWIvYm90cy9hcGlzXCI7XG5pbXBvcnQge2RlYm91bmNlfSBmcm9tIFwibG9kYXNoLWVzXCI7XG4vL2ltcG9ydCBGbG9hdGluZ0Ryb3Bkb3duIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvRmxvYXRpbmdEcm9wZG93blwiO1xuXG5jbGFzcyBDcmVhdGVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgYmFzZUFzc2V0OiBcIlVTRFwiLFxuICAgICAgICBxdW90ZUFzc2V0OiBcIkJUQ1wiLFxuICAgICAgICBiYXNlQW1vdW50OiAxMCxcbiAgICAgICAgcXVvdGVBbW91bnQ6IDAuMDEsXG4gICAgICAgIGJhc2VTcHJlYWQ6IDEwLFxuICAgICAgICBxdW90ZVNwcmVhZDogMTAsXG4gICAgICAgIGJhc2VCYWxhbmNlOiAxMDAsXG4gICAgICAgIHF1b3RlQmFsYW5jZTogMC4xLFxuICAgICAgICB2YWxpZGF0ZTogW1wibmFtZVwiXVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlID0gZGVib3VuY2UodGhpcy5hc3NldFZhbGlkYXRlLCAyMDApO1xuICAgIH1cblxuICAgIGFzc2V0VmFsaWRhdGUgPSBhc3luYyBuYW1lID0+IHtcbiAgICAgICAgbGV0IGFzc2V0ID0gdGhpcy5zdGF0ZVtuYW1lXTtcbiAgICAgICAgbGV0IGJsb2NrY2hhaW5Bc3NldHMgPSAoYXdhaXQgQXBpcy5kYi5saXN0X2Fzc2V0cyhhc3NldCwgMSkpWzBdO1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIGlmIChhc3NldCAhPT0gYmxvY2tjaGFpbkFzc2V0cy5zeW1ib2wpIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGUgPSB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVDcmVhdGUodGhpcy5zdGF0ZS52YWxpZGF0ZS5sZW5ndGggPT0gMCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID1cbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgID8gZXZlbnQudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgOiBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIC8vY29uc29sZS5sb2cobmFtZSwgdmFsdWUpXG5cbiAgICAgICAgaWYgKFtcImJhc2VBc3NldFwiLCBcInF1b3RlQXNzZXRcIl0uaW5jbHVkZXMobmFtZSkpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhL15cXHcrJC8udGVzdCh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgQm90TWFuYWdlci5oYXNCb3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFzc2V0XCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVBc3NldFwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhc2VCYWxhbmNlXCI6XG4gICAgICAgICAgICBjYXNlIFwicXVvdGVCYWxhbmNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBcIi1cIiAmJiBpc05hTigrdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInF1b3RlQW1vdW50XCI6XG4gICAgICAgICAgICBjYXNlIFwiYmFzZVNwcmVhZFwiOlxuICAgICAgICAgICAgY2FzZSBcInF1b3RlU3ByZWFkXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkZWZhdWx0UHJpY2VcIjpcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKCt2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWxpZGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiIHN0eWxlPXt7bWFyZ2luTGVmdDogNTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PkJhc2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5Bc3NldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2VBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImJhc2VBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkJhbGFuY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2VCYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+QW1vdW50IGluIG9yZGVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZUFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiYmFzZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TcHJlYWQsICU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzZVNwcmVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5iYXNlU3ByZWFkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5RdW90ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkFzc2V0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1b3RlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGVBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxdW90ZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5CYWxhbmNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUJhbGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlQmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+QW1vdW50IGluIG9yZGVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJxdW90ZUFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZUFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwicXVvdGVBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlNwcmVhZCwgJTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicXVvdGVTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGVTcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5EZWZhdWx0IFByaWNlPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZWZhdWx0UHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVmYXVsdFByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZGVmYXVsdFByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwiZGVmYXVsdFByaWNlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnJvbU1hcmtldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZnJvbU1hcmtldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBHZXQgcHJpY2UgZnJvbSBtYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlRm9ybTtcbiIsImltcG9ydCB7QXBpc30gZnJvbSBcImJpdHNoYXJlc2pzLXdzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYjogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGNhbGwgQXBpcy5kYi4ke21ldGhvZH0oJHtbLi4uYXJndW1lbnRzXX0pYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaXNcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmRiX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgaGlzdG9yeTogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5oaXN0b3J5X2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgbmV0d29yazogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5uZXR3b3JrX2FwaSgpXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKG1ldGhvZCwgWy4uLmFyZ3VtZW50c10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pLFxuXG4gICAgY3J5cHRvOiBuZXcgUHJveHkoQXBpcywge1xuICAgICAgICBnZXQoYXBpcywgbWV0aG9kKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaXNcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlKClcbiAgICAgICAgICAgICAgICAgICAgLmNyeXB0b19hcGkoKVxuICAgICAgICAgICAgICAgICAgICAuZXhlYyhtZXRob2QsIFsuLi5hcmd1bWVudHNdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KSxcblxuICAgIG9yZGVyczogbmV3IFByb3h5KEFwaXMsIHtcbiAgICAgICAgZ2V0KGFwaXMsIG1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcGlzXG4gICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZSgpXG4gICAgICAgICAgICAgICAgICAgIC5vcmRlcnNfYXBpKClcbiAgICAgICAgICAgICAgICAgICAgLmV4ZWMobWV0aG9kLCBbLi4uYXJndW1lbnRzXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSlcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFN0YXRlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7dmFsaWRhdGU6IFtdfSwgdGhpcy5wcm9wcy5ib3Quc3RvcmFnZS5yZWFkKCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICBiYXNlLFxuICAgICAgICAgICAgcXVvdGU7XG5cbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUFtb3VudFwiOlxuICAgICAgICAgICAgICAgIGJhc2UgPSB0aGlzLnN0YXRlLmJhc2U7XG4gICAgICAgICAgICAgICAgYmFzZS5hbW91bnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtiYXNlfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFzZUJhbGFuY2VcIjpcbiAgICAgICAgICAgICAgICBiYXNlID0gdGhpcy5zdGF0ZS5iYXNlO1xuICAgICAgICAgICAgICAgIGJhc2UuYmFsYW5jZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2V9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlU3ByZWFkXCI6XG4gICAgICAgICAgICAgICAgYmFzZSA9IHRoaXMuc3RhdGUuYmFzZTtcbiAgICAgICAgICAgICAgICBiYXNlLnNwcmVhZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Jhc2V9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZUFtb3VudFwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5hbW91bnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInF1b3RlQmFsYW5jZVwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5iYWxhbmNlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVvdGV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJxdW90ZVNwcmVhZFwiOlxuICAgICAgICAgICAgICAgIHF1b3RlID0gdGhpcy5zdGF0ZS5xdW90ZTtcbiAgICAgICAgICAgICAgICBxdW90ZS5zcHJlYWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtxdW90ZX0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRlZmF1bHRQcmljZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlZmF1bHRQcmljZTogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmcm9tTWFya2V0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbU1hcmtldDogZXZlbnQudGFyZ2V0LmNoZWNrZWR9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlVXBkYXRlQm90ID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGVOb3cgPSB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5iYXNlLm9yZGVyID0gc3RhdGVOb3cuYmFzZS5vcmRlcjtcbiAgICAgICAgdGhpcy5zdGF0ZS5xdW90ZS5vcmRlciA9IHN0YXRlTm93LnF1b3RlLm9yZGVyO1xuXG4gICAgICAgIHRoaXMucHJvcHMuYm90LnN0b3JhZ2Uud3JpdGUodGhpcy5zdGF0ZSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PkJhc2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5Bc3NldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFzZUFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2UuYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkJhbGFuY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmJhc2UuYmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhc2VCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TcHJlYWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2VTcHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmFzZS5zcHJlYWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXNlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlF1b3RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+QXNzZXQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVvdGUuYXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkJhbGFuY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdW90ZS5iYWxhbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVvdGVCYWxhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TcHJlYWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1b3RlLnNwcmVhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF1b3RlU3ByZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5EZWZhdWx0IFByaWNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVmYXVsdFByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlZmF1bHRQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImRlZmF1bHRQcmljZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZyb21NYXJrZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmZyb21NYXJrZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBHZXQgcHJpY2UgZnJvbSBtYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQm90fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZUZvcm07XG4iLCJpbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuXG5jbGFzcyBBc3NldCB7XG4gICAgc3RhdGljIGdldChvYmosIG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXNbbmFtZV0pIHJldHVybiB0aGlzW25hbWVdO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldEFzc2V0KG5hbWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRBc3NldChfc3ltYm9sKSB7XG4gICAgICAgIGxldCBzeW1ib2wgPSBfc3ltYm9sLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcCB8fCB7fTtcblxuICAgICAgICBpZiAodGhpcy5tYXBbc3ltYm9sXSkgcmV0dXJuIHRoaXMubWFwW3N5bWJvbF07XG5cbiAgICAgICAgbGV0IG9iaiA9IChhd2FpdCBBcGlzLmRiLmxpc3RfYXNzZXRzKHN5bWJvbCwgMSkpWzBdO1xuXG4gICAgICAgIGlmICghb2JqIHx8IG9iai5zeW1ib2wgIT09IHN5bWJvbClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgTm90IGZvdW5kIGFzc2V0ICR7c3ltYm9sfSEgQmxvY2tjaGFpbiByZXR1cm4gJHtcbiAgICAgICAgICAgICAgICAgICAgb2JqID8gb2JqLnN5bWJvbCA6IG9ialxuICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubWFwW3N5bWJvbF0gPSBuZXcgdGhpcyhvYmopO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBbc3ltYm9sXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgaWQoaWQpIHtcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLm1hcCB8fCB7fTtcbiAgICAgICAgbGV0IGFzc2V0ID0gT2JqZWN0LmtleXModGhpcy5tYXApLmZpbmQoXG4gICAgICAgICAgICBzeW1ib2wgPT4gdGhpcy5tYXBbc3ltYm9sXS5pZCA9PSBpZFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChhc3NldCkgcmV0dXJuIHRoaXMubWFwW2Fzc2V0XTtcblxuICAgICAgICBhc3NldCA9IChhd2FpdCBBcGlzLmRiLmdldF9hc3NldHMoW2lkXSkpWzBdO1xuXG4gICAgICAgIGlmICghYXNzZXQpIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIGFzc2V0IGJ5IGlkICR7aWR9IWApO1xuXG4gICAgICAgIHRoaXMubWFwW2Fzc2V0LnN5bWJvbF0gPSBuZXcgdGhpcyhhc3NldCk7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcFthc3NldC5zeW1ib2xdO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBmcm9tUGFyYW0ocGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHthbW91bnQ6IHBhcmFtLmFtb3VudCwgYXNzZXQ6IGF3YWl0IHRoaXMuaWQocGFyYW0uYXNzZXRfaWQpfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLm1hcCA9IHRoaXMubWFwIHx8IHt9O1xuXG4gICAgICAgIGxldCBhc3NldHMgPSBhd2FpdCBBcGlzLmRiLmdldF9hc3NldHMoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1hcCkubWFwKHN5bWJvbCA9PiB0aGlzLm1hcFtzeW1ib2xdLmlkKVxuICAgICAgICApO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChhc3NldCA9PiBPYmplY3QuYXNzaWduKHRoaXMubWFwW2Fzc2V0LnN5bWJvbF0sIGFzc2V0KSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocnBjT2JqKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcnBjT2JqKTtcbiAgICB9XG5cbiAgICB0b1BhcmFtKG51bWJlciA9IDApIHtcbiAgICAgICAgcmV0dXJuIHthbW91bnQ6IG51bWJlciwgYXNzZXRfaWQ6IHRoaXMuaWR9O1xuICAgIH1cblxuICAgIGZlZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5tYXJrZXRfZmVlX3BlcmNlbnQgLyAxMDAgLyAxMDA7XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlKCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIChhd2FpdCBBcGlzLmRiLmdldF9hc3NldHMoW3RoaXMuaWRdKSlbMF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb3h5KHt9LCBBc3NldCk7XG4iLCJpbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcbmltcG9ydCBXYWxsZXREYiBmcm9tIFwic3RvcmVzL1dhbGxldERiXCI7XG5pbXBvcnQgV2FsbGV0VW5sb2NrQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9XYWxsZXRVbmxvY2tBY3Rpb25zXCI7XG5pbXBvcnQge1RyYW5zYWN0aW9uQnVpbGRlcn0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5cbmNsYXNzIEFjY291bnQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGZlZVN5bWJvbCA9IFwiQlRTXCIpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgQXBpcy5kYi5nZXRfYWNjb3VudF9ieV9uYW1lKG5hbWUpLFxuICAgICAgICAgICAgQXNzZXRzW2ZlZVN5bWJvbF1cbiAgICAgICAgXSkudGhlbigoW2FjYywgZmVlXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2MgPSBhY2M7XG4gICAgICAgICAgICB0aGlzLmZlZUFzc2V0ID0gZmVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYW5jZWxPcmRlcihpZCkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZFRyYW5zYWN0aW9uKFwibGltaXRfb3JkZXJfY2FuY2VsXCIsIHtcbiAgICAgICAgICAgIGZlZTogdGhpcy5mZWVBc3NldC50b1BhcmFtKCksXG4gICAgICAgICAgICBmZWVfcGF5aW5nX2FjY291bnQ6IHRoaXMuYWNjLmlkLFxuICAgICAgICAgICAgb3JkZXI6IGlkLFxuICAgICAgICAgICAgZXh0ZW5zaW9uczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgYnV5KFxuICAgICAgICBidXlTeW1ib2wsXG4gICAgICAgIGJhc2VTeW1ib2wsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIGZpbGxfb3Jfa2lsbCA9IGZhbHNlLFxuICAgICAgICBleHBpcmUgPSBcIjIwMjAtMDItMDJUMDI6MDI6MDJcIlxuICAgICkge1xuICAgICAgICBhd2FpdCB0aGlzLnByb21pc2U7XG5cbiAgICAgICAgbGV0IGJ1eUFzc2V0ID0gYXdhaXQgQXNzZXRzW2J1eVN5bWJvbF0sXG4gICAgICAgICAgICBiYXNlQXNzZXQgPSBhd2FpdCBBc3NldHNbYmFzZVN5bWJvbF0sXG4gICAgICAgICAgICBidXlBbW91bnQgPSBNYXRoLmZsb29yKGFtb3VudCAqIDEwICoqIGJ1eUFzc2V0LnByZWNpc2lvbiksXG4gICAgICAgICAgICBzZWxsQW1vdW50ID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICBCaWdOdW1iZXIoYW1vdW50KVxuICAgICAgICAgICAgICAgICAgICAudGltZXMocHJpY2UgKiAxMCAqKiBiYXNlQXNzZXQucHJlY2lzaW9uKVxuICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBpZiAoYnV5QW1vdW50ID09IDAgfHwgc2VsbEFtb3VudCA9PSAwKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQW1vdW50IGVxdWFsIDAhXCIpO1xuXG4gICAgICAgIGxldCB0eCA9IGF3YWl0IHRoaXMuc2VuZFRyYW5zYWN0aW9uKFwibGltaXRfb3JkZXJfY3JlYXRlXCIsIHtcbiAgICAgICAgICAgIGZlZTogdGhpcy5mZWVBc3NldC50b1BhcmFtKCksXG4gICAgICAgICAgICBzZWxsZXI6IHRoaXMuYWNjLmlkLFxuICAgICAgICAgICAgYW1vdW50X3RvX3NlbGw6IGJhc2VBc3NldC50b1BhcmFtKHNlbGxBbW91bnQpLFxuICAgICAgICAgICAgbWluX3RvX3JlY2VpdmU6IGJ1eUFzc2V0LnRvUGFyYW0oYnV5QW1vdW50KSxcbiAgICAgICAgICAgIGV4cGlyYXRpb246IGV4cGlyZSxcbiAgICAgICAgICAgIGZpbGxfb3Jfa2lsbDogZmlsbF9vcl9raWxsLFxuICAgICAgICAgICAgZXh0ZW5zaW9uczogW11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFtcbiAgICAgICAgICAgIHR4WzBdLnRyeC5vcGVyYXRpb25fcmVzdWx0c1swXVsxXVxuICAgICAgICBdKSlbMF07XG4gICAgfVxuXG4gICAgYXN5bmMgc2VsbChcbiAgICAgICAgc2VsbFN5bWJvbCxcbiAgICAgICAgYmFzZVN5bWJvbCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBwcmljZSxcbiAgICAgICAgZmlsbF9vcl9raWxsID0gZmFsc2UsXG4gICAgICAgIGV4cGlyZSA9IFwiMjAyMC0wMi0wMlQwMjowMjowMlwiXG4gICAgKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucHJvbWlzZTtcblxuICAgICAgICBsZXQgc2VsbEFzc2V0ID0gYXdhaXQgQXNzZXRzW3NlbGxTeW1ib2xdLFxuICAgICAgICAgICAgYmFzZUFzc2V0ID0gYXdhaXQgQXNzZXRzW2Jhc2VTeW1ib2xdLFxuICAgICAgICAgICAgc2VsbEFtb3VudCA9IE1hdGguZmxvb3IoYW1vdW50ICogMTAgKiogc2VsbEFzc2V0LnByZWNpc2lvbiksXG4gICAgICAgICAgICBidXlBbW91bnQgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgIEJpZ051bWJlcihhbW91bnQpXG4gICAgICAgICAgICAgICAgICAgIC50aW1lcyhwcmljZSAqIDEwICoqIGJhc2VBc3NldC5wcmVjaXNpb24pXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGlmIChidXlBbW91bnQgPT0gMCB8fCBzZWxsQW1vdW50ID09IDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBbW91bnQgZXF1YWwgMCFcIik7XG5cbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdGhpcy5zZW5kVHJhbnNhY3Rpb24oXCJsaW1pdF9vcmRlcl9jcmVhdGVcIiwge1xuICAgICAgICAgICAgZmVlOiB0aGlzLmZlZUFzc2V0LnRvUGFyYW0oKSxcbiAgICAgICAgICAgIHNlbGxlcjogdGhpcy5hY2MuaWQsXG4gICAgICAgICAgICBhbW91bnRfdG9fc2VsbDogc2VsbEFzc2V0LnRvUGFyYW0oc2VsbEFtb3VudCksXG4gICAgICAgICAgICBtaW5fdG9fcmVjZWl2ZTogYmFzZUFzc2V0LnRvUGFyYW0oYnV5QW1vdW50KSxcbiAgICAgICAgICAgIGV4cGlyYXRpb246IGV4cGlyZSxcbiAgICAgICAgICAgIGZpbGxfb3Jfa2lsbDogZmlsbF9vcl9raWxsLFxuICAgICAgICAgICAgZXh0ZW5zaW9uczogW11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChhd2FpdCBBcGlzLmRiLmdldF9vYmplY3RzKFtcbiAgICAgICAgICAgIHR4WzBdLnRyeC5vcGVyYXRpb25fcmVzdWx0c1swXVsxXVxuICAgICAgICBdKSlbMF07XG4gICAgfVxuXG4gICAgYXN5bmMgYmFsYW5jZXMoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIEFwaXMuZGIuZ2V0X2FjY291bnRfYmFsYW5jZXModGhpcy5hY2MuaWQsIFsuLi5hcmd1bWVudHNdKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZW5kVHJhbnNhY3Rpb24odHlwZSwgb3BlcmF0aW9uKSB7XG4gICAgICAgIGxldCB0ciA9IG5ldyBUcmFuc2FjdGlvbkJ1aWxkZXIoKTtcbiAgICAgICAgdHIuYWRkX3R5cGVfb3BlcmF0aW9uKHR5cGUsIG9wZXJhdGlvbik7XG4gICAgICAgIGF3YWl0IHRyLnNldF9yZXF1aXJlZF9mZWVzKCk7XG5cbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcbiAgICAgICAgbGV0IHByaXZhdGVfa2V5ID0gV2FsbGV0RGIuZ2V0UHJpdmF0ZUtleShcbiAgICAgICAgICAgIHRoaXMuYWNjLmFjdGl2ZS5rZXlfYXV0aHNbMF1bMF1cbiAgICAgICAgKTtcbiAgICAgICAgdHIuYWRkX3NpZ25lcihcbiAgICAgICAgICAgIHByaXZhdGVfa2V5LFxuICAgICAgICAgICAgcHJpdmF0ZV9rZXkudG9QdWJsaWNLZXkoKS50b1B1YmxpY0tleVN0cmluZygpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRyLmJyb2FkY2FzdCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDtcbiIsImltcG9ydCBDcmVhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9UcmFpbGluZ1N0b3AvQ3JlYXRlXCI7XG5pbXBvcnQgU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvQm90cy9UcmFpbGluZ1N0b3AvU3RhdGVcIjtcbmltcG9ydCB7Q2hhaW5TdG9yZX0gZnJvbSBcImJpdHNoYXJlc2pzXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwibGliL2JvdHMvYXNzZXRzXCI7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCJsaWIvYm90cy9hY2NvdW50XCI7XG5pbXBvcnQgU2V0dGluZ3NBY3Rpb25zIGZyb20gXCJhY3Rpb25zL1NldHRpbmdzQWN0aW9uc1wiO1xuaW1wb3J0IFdhbGxldFVubG9ja0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvV2FsbGV0VW5sb2NrQWN0aW9uc1wiO1xuXG5jbGFzcyBUcmFpbGluZ1N0b3Age1xuICAgIHN0YXRpYyBjcmVhdGUgPSBDcmVhdGU7XG4gICAgc3RhdGUgPSBTdGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHN0b3JhZ2UsIGluaXREYXRhKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudCA9IG5ldyBBY2NvdW50KGFjY291bnQpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuXG4gICAgICAgIGlmIChpbml0RGF0YSkge1xuICAgICAgICAgICAgc3RvcmFnZS5pbml0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpbml0RGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIHNlbGxBc3NldDogaW5pdERhdGEuc2VsbEFzc2V0LFxuICAgICAgICAgICAgICAgIGdldEFzc2V0OiBpbml0RGF0YS5nZXRBc3NldCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGluaXREYXRhLmFtb3VudCxcbiAgICAgICAgICAgICAgICBtaW5BbW91bnQ6IGluaXREYXRhLm1pbkFtb3VudCxcbiAgICAgICAgICAgICAgICBwZXJjZW50OiBpbml0RGF0YS5wZXJjZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmFtZSA9IHN0b3JhZ2UucmVhZCgpLm5hbWU7XG5cbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgICAgICB0aGlzLnF1ZXVlRXZlbnRzID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMucnVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgc3RhcnQoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RvcmFnZS5yZWFkKCk7XG5cbiAgICAgICAgdGhpcy5zZWxsQXNzZXQgPSBhd2FpdCBBc3NldHNbc3RhdGUuc2VsbEFzc2V0XTtcbiAgICAgICAgdGhpcy5nZXRBc3NldCA9IGF3YWl0IEFzc2V0c1tzdGF0ZS5nZXRBc3NldF07XG5cbiAgICAgICAgYXdhaXQgV2FsbGV0VW5sb2NrQWN0aW9ucy51bmxvY2soKTtcbiAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVNldHRpbmcoe1xuICAgICAgICAgICAgc2V0dGluZzogXCJ3YWxsZXRMb2NrVGltZW91dFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgQ2hhaW5TdG9yZS5zdWJzY3JpYmUodGhpcy5xdWV1ZSk7XG4gICAgICAgIHRoaXMucnVuID0gdHJ1ZTtcbiAgICB9XG4gICAgYXN5bmMgc3RvcCgpIHtcbiAgICAgICAgQ2hhaW5TdG9yZS51bnN1YnNjcmliZSh0aGlzLnF1ZXVlKTtcbiAgICAgICAgdGhpcy5ydW4gPSBmYWxzZTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWV1ZUV2ZW50cztcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGUoKTtcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5xdWV1ZUV2ZW50cyA9IHRoaXMucXVldWVFdmVudHNcbiAgICAgICAgICAgIC50aGVuKHRoaXMuY2hlY2tPcmRlcnMpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnZXIuZXJyb3IuYmluZCh0aGlzLmxvZ2dlcikpO1xuICAgIH07XG5cbiAgICBjaGVja09yZGVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja09yZGVyc1wiKTtcblxuICAgICAgICBsZXQgdGlja2VyID0gYXdhaXQgQXBpcy5kYi5nZXRfdGlja2VyKFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QXNzZXQuc3ltYm9sLFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsbEFzc2V0LnN5bWJvbFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHByaWNlID0gQmlnTnVtYmVyKHRpY2tlci5sYXRlc3QpLFxuICAgICAgICAgICAgbmVlZFN0b3Bsb3NzID0gcHJpY2UudGltZXMoMSAtIHN0YXRlLnBlcmNlbnQgLyAxMDApLFxuICAgICAgICAgICAgY3JlYXRlT3JkZXJQcmljZSA9IHByaWNlLnRpbWVzKDEgLSAoc3RhdGUucGVyY2VudCAqIDIpIC8gMyAvIDEwMCksXG4gICAgICAgICAgICBzdG9wbG9zcyA9IEJpZ051bWJlcihzdGF0ZS5taW5BbW91bnQpLmRpdihzdGF0ZS5hbW91bnQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgcHJpY2UudG9OdW1iZXIoKSxcbiAgICAgICAgICAgIG5lZWRTdG9wbG9zcy50b051bWJlcigpLFxuICAgICAgICAgICAgY3JlYXRlT3JkZXJQcmljZS50b051bWJlcigpLFxuICAgICAgICAgICAgc3RvcGxvc3MudG9OdW1iZXIoKVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChuZWVkU3RvcGxvc3MuZ3Qoc3RvcGxvc3MpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwIG1pbkFtb3VudFwiKTtcbiAgICAgICAgICAgIHN0YXRlLm1pbkFtb3VudCA9IG5lZWRTdG9wbG9zcy50aW1lcyhzdGF0ZS5hbW91bnQpLnRvTnVtYmVyKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uud3JpdGUoc3RhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGNyZWF0ZU9yZGVyUHJpY2UubHQoc3RvcGxvc3MpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBsaW1pdCBvcmRlclwiKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudC5zZWxsKFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsbEFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFzc2V0LnN5bWJvbCxcbiAgICAgICAgICAgICAgICBzdGF0ZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgc3RvcGxvc3MudG9OdW1iZXIoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhaWxpbmdTdG9wO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvdE1hbmFnZXIgZnJvbSBcImxpYi9ib3RzXCI7XG5pbXBvcnQgQXBpcyBmcm9tIFwibGliL2JvdHMvYXBpc1wiO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSBcImxvZGFzaC1lc1wiO1xuXG5jbGFzcyBDcmVhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICBzZWxsQXNzZXQ6IFwiQlRDXCIsXG4gICAgICAgIGdldEFzc2V0OiBcIlVTRFwiLFxuICAgICAgICBhbW91bnQ6IDAuMDEsXG4gICAgICAgIG1pbkFtb3VudDogMSxcbiAgICAgICAgc3RvcGxvc3M6IDEwMCxcbiAgICAgICAgcGVyY2VudDogMTAsXG4gICAgICAgIHZhbGlkYXRlOiBbXCJuYW1lXCJdXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmFzc2V0VmFsaWRhdGUgPSBkZWJvdW5jZSh0aGlzLmFzc2V0VmFsaWRhdGUsIDIwMCk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKFtcInNlbGxBc3NldFwiLCBcImdldEFzc2V0XCJdLmluY2x1ZGVzKG5hbWUpKVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSBcIm1pbkFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlIC8gdGhpcy5zdGF0ZS5hbW91bnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3RvcGxvc3NcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdGhpcy5zdGF0ZS5hbW91bnQgKiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcImFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSAqIHRoaXMuc3RhdGUuc3RvcGxvc3NcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3NldFZhbGlkYXRlID0gYXN5bmMgbmFtZSA9PiB7XG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMuc3RhdGVbbmFtZV07XG4gICAgICAgIGxldCBibG9ja2NoYWluQXNzZXRzID0gKGF3YWl0IEFwaXMuZGIubGlzdF9hc3NldHMoYXNzZXQsIDEpKVswXTtcbiAgICAgICAgbGV0IHZhbGlkYXRlID0gdGhpcy5zdGF0ZS52YWxpZGF0ZTtcblxuICAgICAgICBpZiAoYXNzZXQgIT09IGJsb2NrY2hhaW5Bc3NldHMuc3ltYm9sKSB2YWxpZGF0ZS5wdXNoKG5hbWUpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlID0gdmFsaWRhdGUuZmlsdGVyKGlucHV0ID0+IGlucHV0ICE9PSBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZW5hYmxlQ3JlYXRlKHRoaXMuc3RhdGUudmFsaWRhdGUubGVuZ3RoID09IDApO1xuICAgIH07XG5cbiAgICB2YWxpZGF0ZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLnN0YXRlLnZhbGlkYXRlO1xuXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEvXlxcdyskLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICBCb3RNYW5hZ2VyLmhhc0JvdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzZWxsQXNzZXRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJnZXRBc3NldFwiOlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hc3NldFZhbGlkYXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcIm1pbkFtb3VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInBlY2VudFwiOlxuICAgICAgICAgICAgY2FzZSBcInN0b3Bsb3NzXCI6XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiIHx8IGlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGV9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZS5maWx0ZXIoaW5wdXQgPT4gaW5wdXQgIT09IG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmFsaWRhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLmVuYWJsZUNyZWF0ZSh0aGlzLnN0YXRlLnZhbGlkYXRlLmxlbmd0aCA9PSAwKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWJsb2NrIGhvcml6b250YWxcIiBzdHlsZT17e21hcmdpbkxlZnQ6IDUwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5TZWxsIGFzc2V0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxsQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VsbEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlbGxBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxsQXNzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5HZXQgYXNzZXQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdldEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImdldEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdldEFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJnZXRBc3NldFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5NaW4gQW1vdW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbkFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlN0b3Bsb3NzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdG9wbG9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdG9wbG9zc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJzdG9wbG9zc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+VHJhaWxpbmcgUGVyY2VudCwgJTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwicGVyY2VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgU3RhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICB2YWxpZGF0ZTogW11cbiAgICB9O1xuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLnJlYWQoKTtcbiAgICAgICAgc3RhdGUuc3RvcGxvc3MgPSBzdGF0ZS5taW5BbW91bnQgLyBzdGF0ZS5hbW91bnQ7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKFtcInNlbGxBc3NldFwiLCBcImdldEFzc2V0XCJdLmluY2x1ZGVzKG5hbWUpKVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChuYW1lID09PSBcIm1pbkFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlIC8gdGhpcy5zdGF0ZS5hbW91bnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3RvcGxvc3NcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkFtb3VudDogdGhpcy5zdGF0ZS5hbW91bnQgKiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcGxvc3M6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcImFtb3VudFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluQW1vdW50OiB2YWx1ZSAqIHRoaXMuc3RhdGUuc3RvcGxvc3NcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0sICgpID0+IHRoaXMudmFsaWRhdGUobmFtZSwgdmFsdWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9KTtcbiAgICB9O1xuXG4gICAgdmFsaWRhdGUgPSAobmFtZSwgdmFsdWUpID0+IHt9O1xuXG4gICAgaGFuZGxlVXBkYXRlQm90ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmJvdC5zdG9yYWdlLndyaXRlKHRoaXMuc3RhdGUpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MCwgbWFyZ2luVG9wOiA1MH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+U2VsbCBhc3NldDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsbEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlbGxBc3NldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxsQXNzZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogdGhpcy5zdGF0ZS52YWxpZGF0ZS5pbmNsdWRlcyhcImFtb3VudFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OiA1MH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxlZnQtbGFiZWxcIj5HZXQgYXNzZXQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdldEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImdldEFzc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdldEFzc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsZWZ0LWxhYmVsXCI+TWluIEFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWluQW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1pbkFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW5BbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5BbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMXB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlN0b3Bsb3NzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RvcGxvc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdG9wbG9zc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdG9wbG9zc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmJvdC5ydW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB0aGlzLnN0YXRlLnZhbGlkYXRlLmluY2x1ZGVzKFwic3RvcGxvc3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGVmdC1sYWJlbFwiPlRyYWlsaW5nIFBlcmNlbnQsICU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wZXJjZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuYm90LnJ1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHRoaXMuc3RhdGUudmFsaWRhdGUuaW5jbHVkZXMoXCJwZXJjZW50XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlQm90fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5ib3QucnVufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6IDUwLCBtYXJnaW5Cb3R0b206IDMwfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZTtcbiIsImltcG9ydCBscyBmcm9tIFwiY29tbW9uL2xvY2FsU3RvcmFnZVwiO1xuXG52YXIgYm90cyA9IGxzKFwiX19ib3RzX19cIik7XG5cbmNsYXNzIFN0b3JhZ2Uge1xuICAgIHN0YXRpYyBnZXRBY2NvdW50Qm90KGFjY291bnQpIHtcbiAgICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChgXl9fYm90c19fJHthY2NvdW50fTo6YCk7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZpbHRlcihrZXkgPT4gcmUudGVzdChrZXkpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFzKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGJvdHMuaGFzKG5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgLy9ib3RzLmhhcyhuYW1lKVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvL2lmICghYm90cy5oYXMobmFtZSkpXG4gICAgICAgIC8vYm90cy5zZXQobmFtZSwge30pXG4gICAgfVxuXG4gICAgaW5pdChkYXRhKSB7XG4gICAgICAgIGlmICghYm90cy5oYXMobmFtZSkpIGJvdHMuc2V0KHRoaXMubmFtZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmVhZCgpIHtcbiAgICAgICAgcmV0dXJuIGJvdHMuZ2V0KHRoaXMubmFtZSk7XG4gICAgfVxuXG4gICAgd3JpdGUobmV3U3RhdGUpIHtcbiAgICAgICAgYm90cy5zZXQodGhpcy5uYW1lLCBuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBib3RzLnJlbW92ZSh0aGlzLm5hbWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUF1QkE7QUFDQTtBQUNBO0FBekJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFsQ0E7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBbkRBO0FBcURBO0FBRUE7QUFDQTtBQXhEQTtBQXlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpEQTtBQWdFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBakVBO0FBd0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUE1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUpBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBNERBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFEQTtBQURBO0FBZUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBVEE7QUF6QkE7QUEyQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBbEJBO0FBNEJBO0FBQUE7QUFBQTtBQUFBO0FBOUJBO0FBZkE7QUE1Q0E7QUFEQTtBQWlHQTs7OztBQTNMQTtBQUNBO0FBNkxBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVJBOzs7Ozs7Ozs7Ozs7OztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBaERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBMEVBO0FBR0E7QUFDQTtBQTlFQTtBQStFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBV0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUF1QkE7QUFDQTtBQXhCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBMEJBO0FBMUJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFpQ0E7QUFPQTtBQUNBO0FBQ0E7QUExQ0E7QUE2QkE7QUFhQTtBQU1BO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQXpEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBMERBO0FBQ0E7QUFDQTtBQTdEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBdUVBO0FBQ0E7QUFDQTtBQTFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBZ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVVBO0FBdEdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUF3R0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQXJIQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXVIQTtBQUNBO0FBQ0E7QUExSEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQTZIQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6SUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQStJQTtBQUNBO0FBakpBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFxSkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQWxLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQW9LQTtBQUNBO0FBdEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTBLQTtBQUNBO0FBQ0E7QUE3S0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXVMQTtBQUNBO0FBQ0E7QUExTEE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQWdNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBVUE7QUFyTkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXVOQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBbE9BO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBb09BO0FBQ0E7QUFDQTtBQXZPQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBME9BO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTRQQTtBQUNBO0FBOVBBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFvUUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQS9RQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQWlSQTtBQUNBO0FBblJBO0FBQ0E7QUFzUkE7QUFDQTtBQXhSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFMQTtBQVNBO0FBQ0E7QUFyQkE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7QUFEQTs7QUFDQTtBQUNBOztBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFtU0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUFBOzs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7O0FBR0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7O0FBREE7O0FBQ0E7QUFDQTs7QUFBQTtBQUVBO0FBSUE7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7Ozs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQURBOztBQUdBO0FBQ0E7O0FBREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWxjQTtBQUNBO0FBQ0E7QUFxY0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBYUE7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUE1REE7QUFDQTtBQThEQTtBQUNBO0FBQ0E7Ozs7O0FBcEdBO0FBQ0E7QUFDQTs7O0FBb0dBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFSQTtBQUZBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUF6REE7QUEyRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQXpEQTtBQTVFQTtBQXdKQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQVJBO0FBSEE7QUFrQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFBQTtBQURBO0FBNUxBO0FBeU1BOzs7O0FBL1RBO0FBQ0E7QUFpVUE7Ozs7Ozs7O0FDeFVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFSQTtBQTlDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBDQTtBQUNBO0FBc0NBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBNURBO0FBQ0E7QUFHQTs7O0FBMERBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBdERBO0FBdUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTkE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQXREQTtBQXhFQTtBQWdKQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFQQTtBQUZBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFBQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUE3S0E7QUF1TEE7Ozs7QUF4UEE7QUFDQTtBQTBQQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdQQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBOzs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0FBQ0E7O0FBQUE7QUFDQTs7OztBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUZBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBR0E7QUFBQTs7QUFBQTtBQUNBOztBQURBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUlBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFDQTtBQUNBOztBQURBOztBQUNBO0FBQ0E7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTs7QUFEQTs7QUFVQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBSUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7O0FBREE7O0FBQ0E7QUFDQTs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBOztBQURBOztBQVVBO0FBQ0E7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBZ0RBO0FBR0E7QUFDQTtBQXBEQTtBQXFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFvQkE7QUFDQTtBQUNBO0FBdkJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXdCQTtBQXpCQTtBQUFBO0FBQ0E7QUFEQTtBQWdDQTtBQUNBO0FBakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7QUFEQTs7QUFDQTtBQUNBOztBQURBOztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFqREE7QUFDQTtBQUNBO0FBNEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBZ0JBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUF2Q0E7QUFDQTtBQXlDQTtBQUNBO0FBQ0E7Ozs7O0FBckdBO0FBQ0E7QUFDQTs7O0FBcUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFGQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFuQkE7QUFrQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFqQkE7QUFuQ0E7QUFzRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUEE7QUFqQkE7QUF2RkE7QUF5SEE7Ozs7QUE5T0E7QUFDQTtBQWdQQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFBBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7QUFZQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7Ozs7O0FBakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOENBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFSQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWZBO0FBK0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUkE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFmQTtBQW5DQTtBQXFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFsQkE7QUFrQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUF4R0E7QUFrSEE7Ozs7QUE1S0E7QUFDQTtBQThLQTs7Ozs7Ozs7Ozs7Ozs7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQTs7OztBIiwic291cmNlUm9vdCI6IiJ9