(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 2546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2547);
/* harmony import */ var stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(549);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var strategies = Object.keys(lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].strategies);
var accounts = Array.from(stores_AccountStore__WEBPACK_IMPORTED_MODULE_2__["default"].getState().myActiveAccounts);

var Bots = function (_React$Component) {
    _inherits(Bots, _React$Component);

    function Bots() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Bots);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bots.__proto__ || Object.getPrototypeOf(Bots)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selectStrategy: strategies[0],
            bots: lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].getBots(accounts[0]),
            selectBot: null
        }, _this.handleChangeStrategy = function (event) {
            _this.setState({ selectStrategy: event.target.value });
        }, _this.handleChangeBot = function (event) {
            _this.setState({ selectBot: event.target.value });
        }, _this.handleCreate = function (event) {
            event.preventDefault();
            var bots = _this.state.bots;

            bots.push(lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].create(_this.state.selectStrategy, accounts[0], _this.createForm.state));
            _this.setState({ bots: bots });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Bots, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            console.log("selectStrategy", this.state.selectStrategy);
            //let CreateForm = BotManager.strategies[this.state.selectStrategy].create

            var CreateForm = function CreateForm() {
                var Create = lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].strategies[_this2.state.selectStrategy].create;

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Create, {
                        ref: function ref(form) {
                            _this2.createForm = form;
                        },
                        account: accounts[0],
                        name: _this2.state.selectStrategy
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        {
                            className: "button float-right no-margin",
                            type: "submit",
                            disabled: false
                        },
                        "Create"
                    )
                );
            };

            var StateForm = function StateForm() {
                if (_this2.state.selectBot) {
                    var State = _this2.state.bots[_this2.state.selectBot].state;
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(State, { bot: _this2.state.bots[_this2.state.selectBot] }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                className: "button",
                                onClick: function onClick() {
                                    return _this2.state.bots[_this2.state.selectBot].start();
                                }
                            },
                            "Start"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            {
                                className: "button",
                                onClick: function onClick() {
                                    return _this2.state.bots[_this2.state.selectBot].stop();
                                }
                            },
                            "Stop"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "button",
                            { className: "button" },
                            "Delete"
                        )
                    );
                } else {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        null,
                        "Please, select bot"
                    );
                }
            };
            //console.log("state form",StateForm)
            //console.log("bots", this.state.bots)

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
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "left-label", style: { marginTop: 30 } },
                                "Select strategy:"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "content-block" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "select",
                                    {
                                        className: "form-control bts-select ",
                                        value: this.props.selectStrategy,
                                        onChange: this.handleChangeStrategy
                                    },
                                    strategies.map(function (name) {
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
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateForm, null)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        "Bot state:",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "select",
                            {
                                className: "form-control account-select bts-select ",
                                value: this.props.selectBot,
                                onChange: this.handleChangeBot
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "option",
                                { key: "empty", value: null },
                                "Select bot"
                            ),
                            this.state.bots.map(function (bot, index) {
                                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "option",
                                    { key: bot.name, value: index },
                                    bot.name
                                );
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StateForm, null)
                        )
                    )
                )
            );
        }
    }]);

    return Bots;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Bots);

/***/ }),

/***/ 2547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2548);
/* harmony import */ var _RelativeOrders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2553);
/* harmony import */ var stores_BotsStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2556);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



//import Storage from "./Storage"


/* harmony default export */ __webpack_exports__["default"] = ({
    strategies: {
        SpreadTrade: _SpreadTrade__WEBPACK_IMPORTED_MODULE_0__["default"],
        RelativeOrders: _RelativeOrders__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    Storage: stores_BotsStorage__WEBPACK_IMPORTED_MODULE_2__["default"],
    account: "",

    create: function create(strategy, account, initData) {
        //console.log("Hello, create function", strategy, account, initData)
        var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_2__["default"](account + "::" + strategy + "[" + initData.name + "]");

        return new this.strategies[strategy](account, storage, initData);
    },
    getBots: function getBots(account) {
        var _this = this;

        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getAccountBot(account).map(function (key) {
            var _key$replace$split = key.replace(/^__bots__(.+)::(\w+)\[(\w+)\]/, "$2,$3").split(","),
                _key$replace$split2 = _slicedToArray(_key$replace$split, 2),
                strategy = _key$replace$split2[0],
                name = _key$replace$split2[1];

            var storage = new stores_BotsStorage__WEBPACK_IMPORTED_MODULE_2__["default"](account + "::" + strategy + "[" + name + "]");

            return new _this.strategies[strategy](account, storage);
        });
    },
    hasBot: function hasBot(account, strategy, name) {
        console.log("check name stategy", account, strategy, name);
        return stores_BotsStorage__WEBPACK_IMPORTED_MODULE_2__["default"].has(account + "::" + strategy + "[" + name + "]");
    }
});

/***/ }),

/***/ 2548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_SpreadTrade_CreateForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2549);
/* harmony import */ var components_Bots_SpreadTrade_StateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2550);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(416);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2551);
/* harmony import */ var lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2552);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1287);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_5__);
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
            var state, feedPrice, buyPrice, sellPrice, buyOrder, sellOrder, orderAmount, accountBalance, amount, obj, _accountBalance, _obj, _orderAmount, _accountBalance2, _amount, _obj2, _accountBalance3, _obj3;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            state = _this.storage.read();
                            _context.next = 3;
                            return _this.getFeed();

                        case 3:
                            feedPrice = _context.sent;
                            buyPrice = feedPrice.div(1 + state.baseSpread / 100).toNumber();
                            sellPrice = feedPrice.times(1 + state.quoteSpread / 100).toNumber();


                            feedPrice = feedPrice.toNumber();

                            if (!(feedPrice == 0)) {
                                _context.next = 9;
                                break;
                            }

                            return _context.abrupt("return");

                        case 9:

                            console.log("feed", feedPrice, buyPrice, sellPrice);
                            return _context.abrupt("return");

                        case 14:
                            _context.t0 = _context.sent;
                            _context.next = 18;
                            break;

                        case 17:
                            _context.t0 = state.buy.id;

                        case 18:
                            buyOrder = _context.t0;

                            if (!state.sell.id) {
                                _context.next = 25;
                                break;
                            }

                            _context.next = 22;
                            return _this.account.getOrder(state.sell.id);

                        case 22:
                            _context.t1 = _context.sent;
                            _context.next = 26;
                            break;

                        case 25:
                            _context.t1 = state.sell.id;

                        case 26:
                            sellOrder = _context.t1;

                            if (!buyOrder) {
                                _context.next = 54;
                                break;
                            }

                            if (!new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(Math.abs(buyPrice - state.buy.price)).div(state.buy.price).isGreaterThanOrEqualTo(_this.conf.movePercent / 100)) {
                                _context.next = 52;
                                break;
                            }

                            // move order

                            _this.logger.info("move buy order: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 32;
                            return _this.account.cancelOrder(state.buy.id);

                        case 32:

                            // check amount in order
                            orderAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(buyOrder.for_sale).div(Math.pow(10, _this.base.precision)).toNumber();

                            state.buy.balance += orderAmount;

                            // add to sell balance
                            if (state.buy.amount > orderAmount) state.sell.balance += new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(state.buy.amount - orderAmount).div(state.buy.price).toNumber();

                            _context.next = 37;
                            return _this.account.balances(_this.base.symbol);

                        case 37:
                            _context.t2 = _context.sent[0].amount;
                            _context.t3 = Math.pow(10, _this.base.precision);
                            accountBalance = _context.t2 / _context.t3;
                            amount = Math.min(accountBalance, state.buy.balance, _this.conf.base.amount);
                            _context.prev = 41;
                            _context.next = 44;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, amount, new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(1).div(buyPrice).toNumber());

                        case 44:
                            obj = _context.sent;

                            state.buy = {
                                id: obj ? obj.id : "1.7.0",
                                price: buyPrice,
                                balance: state.buy.balance - amount,
                                amount: amount
                            };
                            _context.next = 52;
                            break;

                        case 48:
                            _context.prev = 48;
                            _context.t4 = _context["catch"](41);

                            _this.logger.error(_context.t4);
                            state.buy.id = undefined;

                        case 52:
                            _context.next = 73;
                            break;

                        case 54:
                            if (/^1.7.\d*$/.test(state.buy.id)) {
                                // fill order
                                state.sell.balance += new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(state.buy.amount).div(state.buy.price).toNumber();
                                state.buy.id = undefined;
                            }

                            _context.t5 = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a;
                            _context.next = 58;
                            return _this.account.balances(_this.base.symbol);

                        case 58:
                            _context.t6 = _context.sent[0].amount;
                            _context.t7 = Math.pow(10, _this.base.precision);
                            _accountBalance = new _context.t5(_context.t6).div(_context.t7).toNumber();

                            if (!(Math.min(_accountBalance, state.buy.balance) >= _this.conf.base.amount)) {
                                _context.next = 73;
                                break;
                            }

                            //buy
                            _this.logger.info("buy: " + buyPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 63;
                            _context.next = 66;
                            return _this.account.sell(_this.base.symbol, _this.quote.symbol, _this.conf.base.amount, new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(1).div(buyPrice).toNumber());

                        case 66:
                            _obj = _context.sent;

                            state.buy = {
                                id: _obj ? _obj.id : "1.7.0",
                                price: buyPrice,
                                balance: state.buy.balance - _this.conf.base.amount,
                                amount: _this.conf.base.amount
                            };
                            _context.next = 73;
                            break;

                        case 70:
                            _context.prev = 70;
                            _context.t8 = _context["catch"](63);

                            _this.logger.error(_context.t8);

                        case 73:
                            if (!sellOrder) {
                                _context.next = 101;
                                break;
                            }

                            if (!new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(Math.abs(sellPrice - state.sell.price)).div(state.sell.price).isGreaterThanOrEqualTo(_this.conf.movePercent / 100)) {
                                _context.next = 99;
                                break;
                            }

                            // move order

                            _this.logger.info("move sell order: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.next = 78;
                            return _this.account.cancelOrder(state.sell.id);

                        case 78:

                            // check amount in order
                            _orderAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(sellOrder.for_sale).div(Math.pow(10, _this.quote.precision)).toNumber();

                            state.sell.balance += _orderAmount;

                            // add to buy balance
                            if (state.sell.amount > _orderAmount) state.buy.balance += new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(state.sell.amount - _orderAmount).times(state.sell.price).toNumber();

                            _context.t9 = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a;
                            _context.next = 84;
                            return _this.account.balances(_this.quote.symbol);

                        case 84:
                            _context.t10 = _context.sent[0].amount;
                            _context.t11 = Math.pow(10, _this.quote.precision);
                            _accountBalance2 = new _context.t9(_context.t10).div(_context.t11).toNumber();
                            _amount = Math.min(_accountBalance2, state.sell.balance, _this.conf.quote.amount);
                            _context.prev = 88;
                            _context.next = 91;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, _amount, sellPrice);

                        case 91:
                            _obj2 = _context.sent;

                            state.sell = {
                                id: _obj2 ? _obj2.id : "1.7.0",
                                price: sellPrice,
                                balance: state.sell.balance - _amount,
                                amount: _amount
                            };
                            _context.next = 99;
                            break;

                        case 95:
                            _context.prev = 95;
                            _context.t12 = _context["catch"](88);

                            _this.logger.error(_context.t12);
                            state.sell.id = undefined;

                        case 99:
                            _context.next = 120;
                            break;

                        case 101:
                            if (/^1.7.\d*$/.test(state.sell.id)) {
                                // fill order
                                state.buy.balance += new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(state.sell.amount).times(state.sell.price).toNumber();
                                state.sell.id = undefined;
                            }

                            _context.t13 = bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a;
                            _context.next = 105;
                            return _this.account.balances(_this.quote.symbol);

                        case 105:
                            _context.t14 = _context.sent[0].amount;
                            _context.t15 = Math.pow(10, _this.quote.precision);
                            _accountBalance3 = new _context.t13(_context.t14).div(_context.t15).toNumber();

                            if (!(Math.min(_accountBalance3, state.sell.balance) >= _this.conf.quote.amount)) {
                                _context.next = 120;
                                break;
                            }

                            //buy
                            _this.logger.info("sell: " + sellPrice + " " + _this.quote.symbol + "/" + _this.base.symbol);
                            _context.prev = 110;
                            _context.next = 113;
                            return _this.account.sell(_this.quote.symbol, _this.base.symbol, _this.conf.quote.amount, sellPrice);

                        case 113:
                            _obj3 = _context.sent;

                            state.sell = {
                                id: _obj3 ? _obj3.id : "1.7.0",
                                price: sellPrice,
                                balance: state.sell.balance - _this.conf.quote.amount,
                                amount: _this.conf.quote.amount
                            };
                            _context.next = 120;
                            break;

                        case 117:
                            _context.prev = 117;
                            _context.t16 = _context["catch"](110);

                            _this.logger.error(_context.t16);

                        case 120:

                            _this.storage.write(state);

                        case 121:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[41, 48], [63, 70], [88, 95], [110, 117]]);
        }));

        this.account = account;
        this.storage = storage;
        //this.config = initData

        //State.props.storage = storage
        if (initData) storage.init(initData);

        this.name = storage.read().name;

        this.logger = console;
        this.queueEvents = Promise.resolve();
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
                                console.log("start");
                                state = this.storage.read();
                                _context2.next = 4;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.baseAsset];

                            case 4:
                                this.base = _context2.sent;
                                _context2.next = 7;
                                return lib_bots_assets__WEBPACK_IMPORTED_MODULE_4__["default"][state.quoteAsset];

                            case 7:
                                this.quote = _context2.sent;


                                if ([this.base.issuer, this.quote.issuer].includes("1.2.0")) {
                                    if ([this.base.id, this.quote.id].includes("1.3.0")) this.getFeed = this.getCoreFeed;else if (this.base.issuer == this.quote.issuer) this.getFeed = this.getSmartFeed;else this.getFeed = this.getUIAFeed;
                                } else {
                                    this.getFeed = this.getUIAFeed;
                                }

                                bitsharesjs__WEBPACK_IMPORTED_MODULE_2__["ChainStore"].subscribe(this.queue);
                                this.queue();

                            case 11:
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

                            case 1:
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
                                return _context4.abrupt("return", new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(base.amount).div(Math.pow(10, this.base.precision)).div(new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(quote.amount).div(Math.pow(10, this.quote.precision))));

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
                                basePrice = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(base.amount).div(Math.pow(10, bts.precision)).div(new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(quote.amount).div(Math.pow(10, this.base.precision)));
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

                                quotePrice = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(base.amount).div(Math.pow(10, bts.precision)).div(new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(quote.amount).div(Math.pow(10, this.quote.precision)));
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

                                _context6.t0 = new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(this.defaultPrice);
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
                var asset, data;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                asset = ("" + quote.split(".").slice(-1)[0] + base.split(".").slice(-1)[0]).toUpperCase().replace("USD", "USDT");

                                console.log("get asset: " + asset);
                                this.priceArray = this.priceArray || [];

                                _context7.prev = 3;
                                _context7.next = 6;
                                return axios.get("https://api.binance.com/api/v1/trades", { params: { symbol: asset, limit: 1 } });

                            case 6:
                                data = _context7.sent;

                                this.priceArray.push(data.data[0].price);
                                _context7.next = 13;
                                break;

                            case 10:
                                _context7.prev = 10;
                                _context7.t0 = _context7["catch"](3);

                                this.logger.error("Error Binance request: " + asset + ", error: " + _context7.t0);

                            case 13:

                                if (this.priceArray.length > 10) this.priceArray.shift();

                                return _context7.abrupt("return", this.priceArray.length > 0 ? this.priceArray.reduce(function (a, b) {
                                    return a.plus(b);
                                }, new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(0)).div(this.priceArray.length) : new bignumber_js__WEBPACK_IMPORTED_MODULE_5___default.a(0));

                            case 15:
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, this, [[3, 10]]);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_bots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2547);
/* harmony import */ var bitsharesjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(416);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




//import {debounce} from "lodash-es";

/*
{
    name: "RubleWorker",
    strategy: "SpreadTrade",
    base: {
      asset: "bts",
      balance: 2,
      amount: 1,
      spread: 2,
    },
    quote: {
      asset: "ruble",
      balance: 1,
      amount: 1,
      spread: 2
    },
    movePercent: 2,
    defaultPrice: 10
}
*/

var CreateForm = function (_React$Component) {
    _inherits(CreateForm, _React$Component);

    function CreateForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CreateForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateForm.__proto__ || Object.getPrototypeOf(CreateForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: "",
            baseAsset: "USD",
            quoteAsset: "OPEN.BTC",
            validate: []
        }, _this.handleChange = function (event) {
            console.log(event.target.name, event.target.value);
            var name = event.target.name,
                value = event.target.value;

            _this.setState(_defineProperty({}, name, value), function () {
                return _this.validate(name, value);
            });
        }, _this.validate = function (name, value) {
            var validate = _this.state.validate;

            switch (name) {
                case "name":
                    if (value.length == 0 || lib_bots__WEBPACK_IMPORTED_MODULE_1__["default"].hasBot(_this.props.account, _this.props.name, value)) {
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
                    if (value.length == 0) {
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
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CreateForm, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            Object.keys(this.state).forEach(function (name) {
                return _this2.validate(name, _this2.state[name]);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        "Name"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block horizontal" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
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
                            id: "baseAsset",
                            type: "text",
                            ref: "input",
                            value: this.state.baseAsset,
                            onChange: this.handleChange,
                            autoComplete: "baseAsset",
                            style: {
                                border: this.state.validate.includes("baseAsset") ? "1px solid red" : "none"
                            }
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Balance"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseBalance",
                            id: "baseBalance",
                            type: "text",
                            ref: "input",
                            onChange: this.handleChange,
                            autoComplete: "baseBalance"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Amount"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseAmount",
                            id: "baseAmount",
                            type: "text",
                            ref: "input",
                            onChange: this.handleChange,
                            autoComplete: "baseAmount"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Spread"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "baseSpread",
                            id: "baseSpread",
                            type: "text",
                            ref: "input",
                            onChange: this.handleChange,
                            autoComplete: "baseSpread"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block", style: { marginLeft: 50 } },
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
                            id: "quoteAsset",
                            type: "text",
                            ref: "input",
                            onChange: this.handleChange,
                            autoComplete: "quoteAsset"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Balance"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteBalance",
                            id: "quoteBalance",
                            type: "text",
                            ref: "input",
                            onChange: this.handleChange,
                            autoComplete: "quoteBalance"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Amount"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteAmount",
                            id: "quoteAmount",
                            type: "text",
                            ref: "input",
                            onChange: this.handleChange,
                            autoComplete: "quoteAmount"
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Spread"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "quoteSpread",
                            id: "quoteSpread",
                            type: "text",
                            ref: "input",
                            onChange: this.handleChange,
                            autoComplete: "quoteSpread"
                        })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "content-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "label",
                        { className: "left-label" },
                        "Move Percent"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                        name: "movePercent",
                        id: "movePercent",
                        type: "text",
                        ref: "input",
                        onChange: this.handleChange,
                        autoComplete: "movePercent"
                    })
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
                        id: "defaultPrice",
                        type: "text",
                        ref: "input",
                        onChange: this.handleChange,
                        autoComplete: "defaultPrice"
                    })
                )
            );
        }
    }]);

    return CreateForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CreateForm);

/***/ }),

/***/ 2550:
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
        _classCallCheck(this, StateForm);

        return _possibleConstructorReturn(this, (StateForm.__proto__ || Object.getPrototypeOf(StateForm)).apply(this, arguments));
    }

    _createClass(StateForm, [{
        key: "render",
        value: function render() {
            console.log("StateForm props", this.props);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "p",
                    null,
                    "Hello State SpreadTrade! ",
                    this.props.bot.name,
                    "!!"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Name"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "name",
                            id: "name",
                            type: "text",
                            ref: "input",
                            onChange: this.handleChange,
                            autoComplete: "name"
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Base"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                "Asset"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                name: "baseAsset",
                                id: "baseAsset",
                                type: "text",
                                ref: "input",
                                onChange: this.handleChange,
                                autoComplete: "baseAsset"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                "Balance"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                name: "baseBalance",
                                id: "baseBalance",
                                type: "text",
                                ref: "input",
                                onChange: this.handleChange,
                                autoComplete: "baseBalance"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                "Amount"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                name: "baseAmount",
                                id: "baseAmount",
                                type: "text",
                                ref: "input",
                                onChange: this.handleChange,
                                autoComplete: "baseAmount"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                "Spread"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                name: "baseSpread",
                                id: "baseSpread",
                                type: "text",
                                ref: "input",
                                onChange: this.handleChange,
                                autoComplete: "baseSpread"
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Quote"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                "Asset"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                name: "quoteAsset",
                                id: "quoteAsset",
                                type: "text",
                                ref: "input",
                                onChange: this.handleChange,
                                autoComplete: "quoteAsset"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                "Balance"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                name: "quoteBalance",
                                id: "quoteBalance",
                                type: "text",
                                ref: "input",
                                onChange: this.handleChange,
                                autoComplete: "quoteBalance"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                "Amount"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                name: "quoteAmount",
                                id: "quoteAmount",
                                type: "text",
                                ref: "input",
                                onChange: this.handleChange,
                                autoComplete: "quoteAmount"
                            })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "content-block" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "label",
                                { className: "left-label" },
                                "Spread"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                                name: "quoteSpread",
                                id: "quoteSpread",
                                type: "text",
                                ref: "input",
                                onChange: this.handleChange,
                                autoComplete: "quoteSpread"
                            })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "content-block" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "label",
                            { className: "left-label" },
                            "Move Percent"
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
                            name: "movePercent",
                            id: "movePercent",
                            type: "text",
                            ref: "input",
                            onChange: this.handleChange,
                            autoComplete: "movePercent"
                        })
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
                            id: "defaultPrice",
                            type: "text",
                            ref: "input",
                            onChange: this.handleChange,
                            autoComplete: "defaultPrice"
                        })
                    )
                )
            );
        }
    }]);

    return StateForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StateForm);

/***/ }),

/***/ 2551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485);


/* harmony default export */ __webpack_exports__["default"] = ({
    db: new Proxy(bitsharesjs_ws__WEBPACK_IMPORTED_MODULE_0__["Apis"], {
        get: function get(apis, method) {
            return function () {
                //console.log(`call Apis.db.${method}(${[...arguments]})`)
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

/***/ 2552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lib_bots_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2551);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Asset = function () {
    _createClass(Asset, null, [{
        key: "get",
        value: function get(obj, name) {
            if (obj[name]) return obj[name];

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

/* harmony default export */ __webpack_exports__["default"] = (new Proxy(Asset, Asset));

/***/ }),

/***/ 2553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Bots_RelativeOrders_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2554);
/* harmony import */ var components_Bots_RelativeOrders_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2555);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var RelativeOrders = function RelativeOrders() {
    _classCallCheck(this, RelativeOrders);
};

RelativeOrders.create = components_Bots_RelativeOrders_Create__WEBPACK_IMPORTED_MODULE_0__["default"];
RelativeOrders.state = components_Bots_RelativeOrders_State__WEBPACK_IMPORTED_MODULE_1__["default"];


/* harmony default export */ __webpack_exports__["default"] = (RelativeOrders);

/***/ }),

/***/ 2554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
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

/***/ 2555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
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

/***/ 2556:
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
    }]);

    return Storage;
}();

/* harmony default export */ __webpack_exports__["default"] = (Storage);

/***/ })

}]);
//# sourceMappingURL=bots.js.map