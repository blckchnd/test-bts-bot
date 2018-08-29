(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 2546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2547);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(788);
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

/***/ 2547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2548);
/* harmony import */ var stores_BotsStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2554);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();


//import RelativeOrders from "./RelativeOrders";


var bots = {};

/* harmony default export */ __webpack_exports__["default"] = ({
    strategies: {
        SpreadTrade: _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__["default"]
        //RelativeOrders
    },

    create: function create(strategy, account, initData) {
        var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_1__["default"](account + "::" + strategy + "[" + initData.name + "]");

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

        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].getAccountBot(account).map(function (key) {
            if (bots[key]) return bots[key];

            var _key$replace$split = key.replace(/^__bots__(.+)::(\w+)\[(\w+)\]/, "$2,$3").split(","),
                _key$replace$split2 = _slicedToArray(_key$replace$split, 2),
                strategy = _key$replace$split2[0],
                name = _key$replace$split2[1];

            if (!strategy || !name) return null;

            var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_1__["default"](account + "::" + strategy + "[" + name + "]");

            var bot = new _this.strategies[strategy](account, storage);
            bots[key] = bot;
            return bot;
        }).filter(function (el) {
            return el;
        });
    },
    hasBot: function hasBot(account, strategy, name) {
        console.log("check name stategy", account, strategy, name);
        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].has(account + "::" + strategy + "[" + name + "]");
    }
});

/***/ }),

/***/ 2548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_SpreadTrade_CreateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2549);
/* harmony import */ var components_Bots_SpreadTrade_StateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2551);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(416);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2550);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2552);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1287);
/* harmony import */ var lib_bots_account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2553);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(730);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(587);
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
                            buyPrice = feedPrice.div(1 + state.base.spread / 100).toNumber();
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


                            console.log("orders", buyOrder, sellOrder);

                            if (!buyOrder) {
                                _context.next = 60;
                                break;
                            }

                            if (!(Math.abs(buyPrice - state.base.order.price) > Math.abs(feedPrice - buyPrice) / 2 && ticker.lowest_ask > buyPrice)) {
                                _context.next = 58;
                                break;
                            }

                            // move order

                            _this.logger.info("move buy order: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 42;
                            return _this.account.cancelOrder(state.base.order.id);

                        case 42:

                            // check amount in order
                            orderAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(buyOrder.for_sale).div(Math.pow(10, _this.base.precision)).toNumber();


                            !["", "-"].includes(state.base.balance) && (state.base.balance = Number(state.base.balance) + orderAmount);

                            // add to sell balance
                            if (state.base.order.amount > orderAmount && !["", "-"].incudes(state.quote.balance)) state.quote.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount - orderAmount).div(state.base.order.price).plus(state.quote.balance).toNumber();

                            amount = Math.min(baseBalance, state.base.amount);
                            _context.prev = 46;
                            _context.next = 49;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, amount, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());

                        case 49:
                            obj = _context.sent;

                            state.base.order = {
                                id: obj ? obj.id : "1.7.0",
                                price: buyPrice,
                                amount: amount
                            };
                            !["", "-"].includes(state.base.balance) && (state.base.balance -= amount);
                            _context.next = 58;
                            break;

                        case 54:
                            _context.prev = 54;
                            _context.t4 = _context["catch"](46);

                            _this.logger.error(_context.t4);
                            state.base.order.id = undefined;

                        case 58:
                            _context.next = 74;
                            break;

                        case 60:
                            if (/^1.7.\d*$/.test(state.base.order.id)) {
                                // fill order
                                !["", "-"].includes(state.quote.balance) && (state.quote.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.base.order.amount).div(state.base.order.price).plus(state.quote.balance).toNumber());

                                state.base.order.id = undefined;
                            }

                            if (!(baseBalance >= state.base.amount && ticker.lowest_ask > buyPrice)) {
                                _context.next = 74;
                                break;
                            }

                            //buy
                            _this.logger.info("buy: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 63;
                            _context.next = 66;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, state.base.amount, Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(1).div(buyPrice).toNumber());

                        case 66:
                            _obj = _context.sent;

                            state.base.order = {
                                id: _obj ? _obj.id : "1.7.0",
                                price: buyPrice,
                                amount: state.base.amount
                            };
                            !["", "-"].includes(state.base.balance) && (state.base.balance -= state.base.amount);
                            _context.next = 74;
                            break;

                        case 71:
                            _context.prev = 71;
                            _context.t5 = _context["catch"](63);

                            _this.logger.error(_context.t5);

                        case 74:
                            if (!sellOrder) {
                                _context.next = 97;
                                break;
                            }

                            if (!(Math.abs(sellPrice - state.quote.order.price) > Math.abs(feedPrice - sellPrice) / 2 && ticker.highest_bid < sellPrice)) {
                                _context.next = 95;
                                break;
                            }

                            // move order

                            _this.logger.info("move sell order: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 79;
                            return _this.account.cancelOrder(state.quote.order.id);

                        case 79:

                            // check amount in order
                            _orderAmount = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(sellOrder.for_sale).div(Math.pow(10, _this.quote.precision)).toNumber();

                            !["", "-"].includes(state.quote.balance) && (state.quote.balance = Number(state.quote.balance) + _orderAmount);

                            // add to buy balance
                            if (state.quote.order.amount > _orderAmount && !["", "-"].includes(state.base.balance)) state.base.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount - _orderAmount).times(state.quote.order.price).plus(state.base.balance).toNumber();

                            _amount = Math.min(quoteBalance, state.quote.amount);
                            _context.prev = 83;
                            _context.next = 86;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, _amount, sellPrice);

                        case 86:
                            _obj2 = _context.sent;

                            state.quote.order = {
                                id: _obj2 ? _obj2.id : "1.7.0",
                                price: sellPrice,
                                amount: _amount
                            };
                            !["", "-"].includes(state.quote.balance) && (state.quote.balance -= _amount);
                            _context.next = 95;
                            break;

                        case 91:
                            _context.prev = 91;
                            _context.t6 = _context["catch"](83);

                            _this.logger.error(_context.t6);
                            state.quote.order.id = undefined;

                        case 95:
                            _context.next = 111;
                            break;

                        case 97:
                            if (/^1.7.\d*$/.test(state.quote.order.id)) {
                                // fill order
                                !["", "-"].includes(state.base.balance) && (state.base.balance = Object(bignumber_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.quote.order.amount).times(state.quote.order.price).plus(state.base.balance).toNumber());
                                state.quote.order.id = undefined;
                            }

                            if (!(quoteBalance >= state.quote.amount && ticker.highest_bid < sellPrice)) {
                                _context.next = 111;
                                break;
                            }

                            //buy
                            _this.logger.info("sell: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 100;
                            _context.next = 103;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, state.quote.amount, sellPrice);

                        case 103:
                            _obj3 = _context.sent;

                            state.quote.order = {
                                id: _obj3 ? _obj3.id : "1.7.0",
                                price: sellPrice,
                                amount: state.quote.amount
                            };
                            !["", "-"].includes(state.quote.balance) && (state.quote.balance -= state.quote.amount);
                            _context.next = 111;
                            break;

                        case 108:
                            _context.prev = 108;
                            _context.t7 = _context["catch"](100);

                            _this.logger.error(_context.t7);

                        case 111:

                            _this.storage.write(state);

                        case 112:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[46, 54], [63, 71], [83, 91], [100, 108]]);
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

/***/ 2549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2547);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2550);


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

/***/ 2550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485);


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

/***/ 2551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
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

/***/ 2552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2550);
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

/***/ 2553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2550);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2552);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1287);
/* harmony import */ var stores_WalletDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(589);
/* harmony import */ var actions_WalletUnlockActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(587);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(416);
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

/***/ 2554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
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
//# sourceMappingURL=bots.js.map