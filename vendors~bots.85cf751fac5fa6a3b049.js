(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ 2589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(731);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _Select = __webpack_require__(2590);

var _Select2 = _interopRequireDefault(_Select);

var _stripDiacritics = __webpack_require__(2595);

var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
	autoload: _propTypes2.default.bool.isRequired, // automatically call the `loadOptions` prop on-mount; defaults to true
	cache: _propTypes2.default.any, // object to use to cache results; set to null/false to disable caching
	children: _propTypes2.default.func.isRequired, // Child function responsible for creating the inner Select component; (props: Object): PropTypes.element
	ignoreAccents: _propTypes2.default.bool, // strip diacritics when filtering; defaults to true
	ignoreCase: _propTypes2.default.bool, // perform case-insensitive filtering; defaults to true
	loadOptions: _propTypes2.default.func.isRequired, // callback to load options asynchronously; (inputValue: string, callback: Function): ?Promise
	loadingPlaceholder: _propTypes2.default.oneOfType([// replaces the placeholder while options are loading
	_propTypes2.default.string, _propTypes2.default.node]),
	multi: _propTypes2.default.bool, // multi-value input
	noResultsText: _propTypes2.default.oneOfType([// field noResultsText, displayed when no options come back from the server
	_propTypes2.default.string, _propTypes2.default.node]),
	onChange: _propTypes2.default.func, // onChange handler: function (newValue) {}
	onInputChange: _propTypes2.default.func, // optional for keeping track of what is being typed
	options: _propTypes2.default.array.isRequired, // array of options
	placeholder: _propTypes2.default.oneOfType([// field placeholder, displayed when there's no value (shared with Select)
	_propTypes2.default.string, _propTypes2.default.node]),
	searchPromptText: _propTypes2.default.oneOfType([// label to prompt for search input
	_propTypes2.default.string, _propTypes2.default.node]),
	value: _propTypes2.default.any // initial field value
};

var defaultCache = {};

var defaultChildren = function defaultChildren(props) {
	return _react2.default.createElement(_Select2.default, props);
};

var defaultProps = {
	autoload: true,
	cache: defaultCache,
	children: defaultChildren,
	ignoreAccents: true,
	ignoreCase: true,
	loadingPlaceholder: 'Loading...',
	options: [],
	searchPromptText: 'Type to search'
};

var Async = function (_Component) {
	_inherits(Async, _Component);

	function Async(props, context) {
		_classCallCheck(this, Async);

		var _this = _possibleConstructorReturn(this, (Async.__proto__ || Object.getPrototypeOf(Async)).call(this, props, context));

		_this._cache = props.cache === defaultCache ? {} : props.cache;

		_this.state = {
			inputValue: '',
			isLoading: false,
			options: props.options
		};

		_this.onInputChange = _this.onInputChange.bind(_this);
		return _this;
	}

	_createClass(Async, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var autoload = this.props.autoload;


			if (autoload) {
				this.loadOptions('');
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.options !== this.props.options) {
				this.setState({
					options: nextProps.options
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this._callback = null;
		}
	}, {
		key: 'loadOptions',
		value: function loadOptions(inputValue) {
			var _this2 = this;

			var loadOptions = this.props.loadOptions;

			var cache = this._cache;

			if (cache && Object.prototype.hasOwnProperty.call(cache, inputValue)) {
				this._callback = null;

				this.setState({
					isLoading: false,
					options: cache[inputValue]
				});

				return;
			}

			var callback = function callback(error, data) {
				var options = data && data.options || [];

				if (cache) {
					cache[inputValue] = options;
				}

				if (callback === _this2._callback) {
					_this2._callback = null;

					_this2.setState({
						isLoading: false,
						options: options
					});
				}
			};

			// Ignore all but the most recent request
			this._callback = callback;

			var promise = loadOptions(inputValue, callback);
			if (promise) {
				promise.then(function (data) {
					return callback(null, data);
				}, function (error) {
					return callback(error);
				});
			}

			if (this._callback && !this.state.isLoading) {
				this.setState({
					isLoading: true
				});
			}
		}
	}, {
		key: 'onInputChange',
		value: function onInputChange(inputValue) {
			var _props = this.props,
			    ignoreAccents = _props.ignoreAccents,
			    ignoreCase = _props.ignoreCase,
			    onInputChange = _props.onInputChange;

			var newInputValue = inputValue;

			if (onInputChange) {
				var value = onInputChange(newInputValue);
				// Note: != used deliberately here to catch undefined and null
				if (value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
					newInputValue = '' + value;
				}
			}

			var transformedInputValue = newInputValue;

			if (ignoreAccents) {
				transformedInputValue = (0, _stripDiacritics2.default)(transformedInputValue);
			}

			if (ignoreCase) {
				transformedInputValue = transformedInputValue.toLowerCase();
			}

			this.setState({ inputValue: newInputValue });
			this.loadOptions(transformedInputValue);

			// Return new input value, but without applying toLowerCase() to avoid modifying the user's view case of the input while typing.
			return newInputValue;
		}
	}, {
		key: 'noResultsText',
		value: function noResultsText() {
			var _props2 = this.props,
			    loadingPlaceholder = _props2.loadingPlaceholder,
			    noResultsText = _props2.noResultsText,
			    searchPromptText = _props2.searchPromptText;
			var _state = this.state,
			    inputValue = _state.inputValue,
			    isLoading = _state.isLoading;


			if (isLoading) {
				return loadingPlaceholder;
			}
			if (inputValue && noResultsText) {
				return noResultsText;
			}
			return searchPromptText;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.select.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props3 = this.props,
			    children = _props3.children,
			    loadingPlaceholder = _props3.loadingPlaceholder,
			    placeholder = _props3.placeholder;
			var _state2 = this.state,
			    isLoading = _state2.isLoading,
			    options = _state2.options;


			var props = {
				noResultsText: this.noResultsText(),
				placeholder: isLoading ? loadingPlaceholder : placeholder,
				options: isLoading && loadingPlaceholder ? [] : options,
				ref: function ref(_ref) {
					return _this3.select = _ref;
				}
			};

			return children(_extends({}, this.props, props, {
				isLoading: isLoading,
				onInputChange: this.onInputChange
			}));
		}
	}]);

	return Async;
}(_react.Component);

exports.default = Async;


Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

/***/ }),

/***/ 2590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*!
                                                                                                                                                                                                                                                                                Copyright (c) 2018 Jed Watson.
                                                                                                                                                                                                                                                                                Licensed under the MIT License (MIT), see
                                                                                                                                                                                                                                                                                http://jedwatson.github.io/react-select
                                                                                                                                                                                                                                                                              */


var _reactInputAutosize = __webpack_require__(2591);

var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);

var _classnames = __webpack_require__(856);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(731);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(398);

var _defaultArrowRenderer = __webpack_require__(2592);

var _defaultArrowRenderer2 = _interopRequireDefault(_defaultArrowRenderer);

var _defaultClearRenderer = __webpack_require__(2593);

var _defaultClearRenderer2 = _interopRequireDefault(_defaultClearRenderer);

var _defaultFilterOptions = __webpack_require__(2594);

var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

var _defaultMenuRenderer = __webpack_require__(2597);

var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

var _Option = __webpack_require__(2598);

var _Option2 = _interopRequireDefault(_Option);

var _Value = __webpack_require__(2600);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stringifyValue = function stringifyValue(value) {
	return typeof value === 'string' ? value : value !== null && JSON.stringify(value) || '';
};

var stringOrNode = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]);
var stringOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);

var instanceId = 1;

var shouldShowValue = function shouldShowValue(state, props) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	if (!inputValue) return true;

	if (!onSelectResetsInput) {
		return !(!isFocused && isPseudoFocused || isFocused && !isPseudoFocused);
	}

	return false;
};

var shouldShowPlaceholder = function shouldShowPlaceholder(state, props, isOpen) {
	var inputValue = state.inputValue,
	    isPseudoFocused = state.isPseudoFocused,
	    isFocused = state.isFocused;
	var onSelectResetsInput = props.onSelectResetsInput;


	return !inputValue || !onSelectResetsInput && !isOpen && !isPseudoFocused && !isFocused;
};

/**
 * Retrieve a value from the given options and valueKey
 * @param {String|Number|Array} value	- the selected value(s)
 * @param {Object}		 props	- the Select component's props (or nextProps)
 */
var expandValue = function expandValue(value, props) {
	var valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	if (valueType !== 'string' && valueType !== 'number' && valueType !== 'boolean') return value;
	var options = props.options,
	    valueKey = props.valueKey;

	if (!options) return;
	for (var i = 0; i < options.length; i++) {
		if (String(options[i][valueKey]) === String(value)) return options[i];
	}
};

var handleRequired = function handleRequired(value, multi) {
	if (!value) return true;
	return multi ? value.length === 0 : Object.keys(value).length === 0;
};

var Select = function (_React$Component) {
	_inherits(Select, _React$Component);

	function Select(props) {
		_classCallCheck(this, Select);

		var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

		['clearValue', 'focusOption', 'getOptionLabel', 'handleInputBlur', 'handleInputChange', 'handleInputFocus', 'handleInputValueChange', 'handleKeyDown', 'handleMenuScroll', 'handleMouseDown', 'handleMouseDownOnArrow', 'handleMouseDownOnMenu', 'handleTouchEnd', 'handleTouchEndClearValue', 'handleTouchMove', 'handleTouchOutside', 'handleTouchStart', 'handleValueClick', 'onOptionRef', 'removeValue', 'selectValue'].forEach(function (fn) {
			return _this[fn] = _this[fn].bind(_this);
		});

		_this.state = {
			inputValue: '',
			isFocused: false,
			isOpen: false,
			isPseudoFocused: false,
			required: false
		};
		return _this;
	}

	_createClass(Select, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this._instancePrefix = 'react-select-' + (this.props.instanceId || ++instanceId) + '-';
			var valueArray = this.getValueArray(this.props.value);

			if (this.props.required) {
				this.setState({
					required: handleRequired(valueArray[0], this.props.multi)
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (typeof this.props.autofocus !== 'undefined' && typeof console !== 'undefined') {
				console.warn('Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0');
			}
			if (this.props.autoFocus || this.props.autofocus) {
				this.focus();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var valueArray = this.getValueArray(nextProps.value, nextProps);

			if (nextProps.required) {
				this.setState({
					required: handleRequired(valueArray[0], nextProps.multi)
				});
			} else if (this.props.required) {
				// Used to be required but it's not any more
				this.setState({ required: false });
			}

			if (this.state.inputValue && this.props.value !== nextProps.value && nextProps.onSelectResetsInput) {
				this.setState({ inputValue: this.handleInputValueChange('') });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			// focus to the selected option
			if (this.menu && this.focused && this.state.isOpen && !this.hasScrolledToOption) {
				var focusedOptionNode = (0, _reactDom.findDOMNode)(this.focused);
				var menuNode = (0, _reactDom.findDOMNode)(this.menu);

				var scrollTop = menuNode.scrollTop;
				var scrollBottom = scrollTop + menuNode.offsetHeight;
				var optionTop = focusedOptionNode.offsetTop;
				var optionBottom = optionTop + focusedOptionNode.offsetHeight;

				if (scrollTop > optionTop || scrollBottom < optionBottom) {
					menuNode.scrollTop = focusedOptionNode.offsetTop;
				}

				// We still set hasScrolledToOption to true even if we didn't
				// actually need to scroll, as we've still confirmed that the
				// option is in view.
				this.hasScrolledToOption = true;
			} else if (!this.state.isOpen) {
				this.hasScrolledToOption = false;
			}

			if (this._scrollToFocusedOptionOnUpdate && this.focused && this.menu) {
				this._scrollToFocusedOptionOnUpdate = false;
				var focusedDOM = (0, _reactDom.findDOMNode)(this.focused);
				var menuDOM = (0, _reactDom.findDOMNode)(this.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();
				if (focusedRect.bottom > menuRect.bottom) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				} else if (focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop;
				}
			}
			if (this.props.scrollMenuIntoView && this.menuContainer) {
				var menuContainerRect = this.menuContainer.getBoundingClientRect();
				if (window.innerHeight < menuContainerRect.bottom + this.props.menuBuffer) {
					window.scrollBy(0, menuContainerRect.bottom + this.props.menuBuffer - window.innerHeight);
				}
			}
			if (prevProps.disabled !== this.props.disabled) {
				this.setState({ isFocused: false }); // eslint-disable-line react/no-did-update-set-state
				this.closeMenu();
			}
			if (prevState.isOpen !== this.state.isOpen) {
				this.toggleTouchOutsideEvent(this.state.isOpen);
				var handler = this.state.isOpen ? this.props.onOpen : this.props.onClose;
				handler && handler();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.toggleTouchOutsideEvent(false);
		}
	}, {
		key: 'toggleTouchOutsideEvent',
		value: function toggleTouchOutsideEvent(enabled) {
			var eventTogglerName = enabled ? document.addEventListener ? 'addEventListener' : 'attachEvent' : document.removeEventListener ? 'removeEventListener' : 'detachEvent';
			var pref = document.addEventListener ? '' : 'on';

			document[eventTogglerName](pref + 'touchstart', this.handleTouchOutside);
			document[eventTogglerName](pref + 'mousedown', this.handleTouchOutside);
		}
	}, {
		key: 'handleTouchOutside',
		value: function handleTouchOutside(event) {
			// handle touch outside on ios to dismiss menu
			if (this.wrapper && !this.wrapper.contains(event.target)) {
				this.closeMenu();
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			if (!this.input) return;
			this.input.focus();
		}
	}, {
		key: 'blurInput',
		value: function blurInput() {
			if (!this.input) return;
			this.input.blur();
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchEndClearValue',
		value: function handleTouchEndClearValue(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Clear the value
			this.clearValue(event);
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (event.target.tagName === 'INPUT') {
				if (!this.state.isFocused) {
					this._openAfterFocus = this.props.openOnClick;
					this.focus();
				} else if (!this.state.isOpen) {
					this.setState({
						isOpen: true,
						isPseudoFocused: false,
						focusedOption: null
					});
				}

				return;
			}

			// prevent default event handlers
			event.preventDefault();

			// for the non-searchable select, toggle the menu
			if (!this.props.searchable) {
				// This code means that if a select is searchable, onClick the options menu will not appear, only on subsequent click will it open.
				this.focus();
				return this.setState({
					isOpen: !this.state.isOpen,
					focusedOption: null
				});
			}

			if (this.state.isFocused) {
				// On iOS, we can get into a state where we think the input is focused but it isn't really,
				// since iOS ignores programmatic calls to input.focus() that weren't triggered by a click event.
				// Call focus() again here to be safe.
				this.focus();

				var input = this.input;
				var toOpen = true;

				if (typeof input.getInput === 'function') {
					// Get the actual DOM input if the ref is an <AutosizeInput /> component
					input = input.getInput();
				}

				// clears the value so that the cursor will be at the end of input when the component re-renders
				input.value = '';

				if (this._focusAfterClear) {
					toOpen = false;
					this._focusAfterClear = false;
				}

				// if the input is focused, ensure the menu is open
				this.setState({
					isOpen: toOpen,
					isPseudoFocused: false,
					focusedOption: null
				});
			} else {
				// otherwise, focus the input and open the menu
				this._openAfterFocus = this.props.openOnClick;
				this.focus();
				this.setState({ focusedOption: null });
			}
		}
	}, {
		key: 'handleMouseDownOnArrow',
		value: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			if (this.state.isOpen) {
				// prevent default event handlers
				event.stopPropagation();
				event.preventDefault();
				// close the menu
				this.closeMenu();
			} else {
				// If the menu isn't open, let the event bubble to the main handleMouseDown
				this.setState({
					isOpen: true
				});
			}
		}
	}, {
		key: 'handleMouseDownOnMenu',
		value: function handleMouseDownOnMenu(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.stopPropagation();
			event.preventDefault();

			this._openAfterFocus = true;
			this.focus();
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {
			if (this.props.onCloseResetsInput) {
				this.setState({
					inputValue: this.handleInputValueChange(''),
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			} else {
				this.setState({
					isOpen: false,
					isPseudoFocused: this.state.isFocused && !this.props.multi
				});
			}
			this.hasScrolledToOption = false;
		}
	}, {
		key: 'handleInputFocus',
		value: function handleInputFocus(event) {
			if (this.props.disabled) return;

			var toOpen = this.state.isOpen || this._openAfterFocus || this.props.openOnFocus;
			toOpen = this._focusAfterClear ? false : toOpen; //if focus happens after clear values, don't open dropdown yet.

			if (this.props.onFocus) {
				this.props.onFocus(event);
			}

			this.setState({
				isFocused: true,
				isOpen: !!toOpen
			});

			this._focusAfterClear = false;
			this._openAfterFocus = false;
		}
	}, {
		key: 'handleInputBlur',
		value: function handleInputBlur(event) {
			// The check for menu.contains(activeElement) is necessary to prevent IE11's scrollbar from closing the menu in certain contexts.
			if (this.menu && (this.menu === document.activeElement || this.menu.contains(document.activeElement))) {
				this.focus();
				return;
			}

			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
			var onBlurredState = {
				isFocused: false,
				isOpen: false,
				isPseudoFocused: false
			};
			if (this.props.onBlurResetsInput) {
				onBlurredState.inputValue = this.handleInputValueChange('');
			}
			this.setState(onBlurredState);
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var newInputValue = event.target.value;

			if (this.state.inputValue !== event.target.value) {
				newInputValue = this.handleInputValueChange(newInputValue);
			}

			this.setState({
				inputValue: newInputValue,
				isOpen: true,
				isPseudoFocused: false
			});
		}
	}, {
		key: 'setInputValue',
		value: function setInputValue(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			this.setState({
				inputValue: newValue
			});
		}
	}, {
		key: 'handleInputValueChange',
		value: function handleInputValueChange(newValue) {
			if (this.props.onInputChange) {
				var nextState = this.props.onInputChange(newValue);
				// Note: != used deliberately here to catch undefined and null
				if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
					newValue = '' + nextState;
				}
			}
			return newValue;
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (this.props.disabled) return;

			if (typeof this.props.onInputKeyDown === 'function') {
				this.props.onInputKeyDown(event);
				if (event.defaultPrevented) {
					return;
				}
			}

			switch (event.keyCode) {
				case 8:
					// backspace
					if (!this.state.inputValue && this.props.backspaceRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.props.tabSelectsValue) {
						break;
					}
					event.preventDefault();
					this.selectFocusedOption();
					break;
				case 13:
					// enter
					event.preventDefault();
					event.stopPropagation();
					if (this.state.isOpen) {
						this.selectFocusedOption();
					} else {
						this.focusNextOption();
					}
					break;
				case 27:
					// escape
					event.preventDefault();
					if (this.state.isOpen) {
						this.closeMenu();
						event.stopPropagation();
					} else if (this.props.clearable && this.props.escapeClearsValue) {
						this.clearValue(event);
						event.stopPropagation();
					}
					break;
				case 32:
					// space
					if (this.props.searchable) {
						break;
					}
					event.preventDefault();
					if (!this.state.isOpen) {
						this.focusNextOption();
						break;
					}
					event.stopPropagation();
					this.selectFocusedOption();
					break;
				case 38:
					// up
					event.preventDefault();
					this.focusPreviousOption();
					break;
				case 40:
					// down
					event.preventDefault();
					this.focusNextOption();
					break;
				case 33:
					// page up
					event.preventDefault();
					this.focusPageUpOption();
					break;
				case 34:
					// page down
					event.preventDefault();
					this.focusPageDownOption();
					break;
				case 35:
					// end key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusEndOption();
					break;
				case 36:
					// home key
					if (event.shiftKey) {
						break;
					}
					event.preventDefault();
					this.focusStartOption();
					break;
				case 46:
					// delete
					if (!this.state.inputValue && this.props.deleteRemoves) {
						event.preventDefault();
						this.popValue();
					}
					break;
			}
		}
	}, {
		key: 'handleValueClick',
		value: function handleValueClick(option, event) {
			if (!this.props.onValueClick) return;
			this.props.onValueClick(option, event);
		}
	}, {
		key: 'handleMenuScroll',
		value: function handleMenuScroll(event) {
			if (!this.props.onMenuScrollToBottom) return;
			var target = event.target;

			if (target.scrollHeight > target.offsetHeight && target.scrollHeight - target.offsetHeight - target.scrollTop <= 0) {
				this.props.onMenuScrollToBottom();
			}
		}
	}, {
		key: 'getOptionLabel',
		value: function getOptionLabel(op) {
			return op[this.props.labelKey];
		}

		/**
   * Turns a value into an array from the given options
   * @param {String|Number|Array} value		- the value of the select input
   * @param {Object}		nextProps	- optionally specify the nextProps so the returned array uses the latest configuration
   * @returns	{Array}	the value of the select represented in an array
   */

	}, {
		key: 'getValueArray',
		value: function getValueArray(value) {
			var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

			/** support optionally passing in the `nextProps` so `componentWillReceiveProps` updates will function as expected */
			var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) === 'object' ? nextProps : this.props;
			if (props.multi) {
				if (typeof value === 'string') {
					value = value.split(props.delimiter);
				}
				if (!Array.isArray(value)) {
					if (value === null || value === undefined) return [];
					value = [value];
				}
				return value.map(function (value) {
					return expandValue(value, props);
				}).filter(function (i) {
					return i;
				});
			}
			var expandedValue = expandValue(value, props);
			return expandedValue ? [expandedValue] : [];
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			var _this2 = this;

			if (this.props.autoBlur) {
				this.blurInput();
			}
			if (this.props.required) {
				var required = handleRequired(value, this.props.multi);
				this.setState({ required: required });
			}
			if (this.props.simpleValue && value) {
				value = this.props.multi ? value.map(function (i) {
					return i[_this2.props.valueKey];
				}).join(this.props.delimiter) : value[this.props.valueKey];
			}
			if (this.props.onChange) {
				this.props.onChange(value);
			}
		}
	}, {
		key: 'selectValue',
		value: function selectValue(value) {
			var _this3 = this;

			// NOTE: we actually add/set the value in a callback to make sure the
			// input value is empty to avoid styling issues in Chrome
			if (this.props.closeOnSelect) {
				this.hasScrolledToOption = false;
			}
			var updatedValue = this.props.onSelectResetsInput ? '' : this.state.inputValue;
			if (this.props.multi) {
				this.setState({
					focusedIndex: null,
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect
				}, function () {
					var valueArray = _this3.getValueArray(_this3.props.value);
					if (valueArray.some(function (i) {
						return i[_this3.props.valueKey] === value[_this3.props.valueKey];
					})) {
						_this3.removeValue(value);
					} else {
						_this3.addValue(value);
					}
				});
			} else {
				this.setState({
					inputValue: this.handleInputValueChange(updatedValue),
					isOpen: !this.props.closeOnSelect,
					isPseudoFocused: this.state.isFocused
				}, function () {
					_this3.setValue(value);
				});
			}
		}
	}, {
		key: 'addValue',
		value: function addValue(value) {
			var valueArray = this.getValueArray(this.props.value);
			var visibleOptions = this._visibleOptions.filter(function (val) {
				return !val.disabled;
			});
			var lastValueIndex = visibleOptions.indexOf(value);
			this.setValue(valueArray.concat(value));
			if (!this.props.closeOnSelect) {
				return;
			}
			if (visibleOptions.length - 1 === lastValueIndex) {
				// the last option was selected; focus the second-last one
				this.focusOption(visibleOptions[lastValueIndex - 1]);
			} else if (visibleOptions.length > lastValueIndex) {
				// focus the option below the selected one
				this.focusOption(visibleOptions[lastValueIndex + 1]);
			}
		}
	}, {
		key: 'popValue',
		value: function popValue() {
			var valueArray = this.getValueArray(this.props.value);
			if (!valueArray.length) return;
			if (valueArray[valueArray.length - 1].clearableValue === false) return;
			this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
		}
	}, {
		key: 'removeValue',
		value: function removeValue(value) {
			var _this4 = this;

			var valueArray = this.getValueArray(this.props.value);
			this.setValue(valueArray.filter(function (i) {
				return i[_this4.props.valueKey] !== value[_this4.props.valueKey];
			}));
			this.focus();
		}
	}, {
		key: 'clearValue',
		value: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.preventDefault();

			this.setValue(this.getResetValue());
			this.setState({
				inputValue: this.handleInputValueChange(''),
				isOpen: false
			}, this.focus);

			this._focusAfterClear = true;
		}
	}, {
		key: 'getResetValue',
		value: function getResetValue() {
			if (this.props.resetValue !== undefined) {
				return this.props.resetValue;
			} else if (this.props.multi) {
				return [];
			} else {
				return null;
			}
		}
	}, {
		key: 'focusOption',
		value: function focusOption(option) {
			this.setState({
				focusedOption: option
			});
		}
	}, {
		key: 'focusNextOption',
		value: function focusNextOption() {
			this.focusAdjacentOption('next');
		}
	}, {
		key: 'focusPreviousOption',
		value: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		}
	}, {
		key: 'focusPageUpOption',
		value: function focusPageUpOption() {
			this.focusAdjacentOption('page_up');
		}
	}, {
		key: 'focusPageDownOption',
		value: function focusPageDownOption() {
			this.focusAdjacentOption('page_down');
		}
	}, {
		key: 'focusStartOption',
		value: function focusStartOption() {
			this.focusAdjacentOption('start');
		}
	}, {
		key: 'focusEndOption',
		value: function focusEndOption() {
			this.focusAdjacentOption('end');
		}
	}, {
		key: 'focusAdjacentOption',
		value: function focusAdjacentOption(dir) {
			var options = this._visibleOptions.map(function (option, index) {
				return { option: option, index: index };
			}).filter(function (option) {
				return !option.option.disabled;
			});
			this._scrollToFocusedOptionOnUpdate = true;
			if (!this.state.isOpen) {
				var newState = {
					focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null),
					isOpen: true
				};
				if (this.props.onSelectResetsInput) {
					newState.inputValue = '';
				}
				this.setState(newState);
				return;
			}
			if (!options.length) return;
			var focusedIndex = -1;
			for (var i = 0; i < options.length; i++) {
				if (this._focusedOption === options[i].option) {
					focusedIndex = i;
					break;
				}
			}
			if (dir === 'next' && focusedIndex !== -1) {
				focusedIndex = (focusedIndex + 1) % options.length;
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedIndex = focusedIndex - 1;
				} else {
					focusedIndex = options.length - 1;
				}
			} else if (dir === 'start') {
				focusedIndex = 0;
			} else if (dir === 'end') {
				focusedIndex = options.length - 1;
			} else if (dir === 'page_up') {
				var potentialIndex = focusedIndex - this.props.pageSize;
				if (potentialIndex < 0) {
					focusedIndex = 0;
				} else {
					focusedIndex = potentialIndex;
				}
			} else if (dir === 'page_down') {
				var _potentialIndex = focusedIndex + this.props.pageSize;
				if (_potentialIndex > options.length - 1) {
					focusedIndex = options.length - 1;
				} else {
					focusedIndex = _potentialIndex;
				}
			}

			if (focusedIndex === -1) {
				focusedIndex = 0;
			}

			this.setState({
				focusedIndex: options[focusedIndex].index,
				focusedOption: options[focusedIndex].option
			});
		}
	}, {
		key: 'getFocusedOption',
		value: function getFocusedOption() {
			return this._focusedOption;
		}
	}, {
		key: 'selectFocusedOption',
		value: function selectFocusedOption() {
			if (this._focusedOption) {
				return this.selectValue(this._focusedOption);
			}
		}
	}, {
		key: 'renderLoading',
		value: function renderLoading() {
			if (!this.props.isLoading) return;
			return _react2.default.createElement(
				'span',
				{ className: 'Select-loading-zone', 'aria-hidden': 'true' },
				_react2.default.createElement('span', { className: 'Select-loading' })
			);
		}
	}, {
		key: 'renderValue',
		value: function renderValue(valueArray, isOpen) {
			var _this5 = this;

			var renderLabel = this.props.valueRenderer || this.getOptionLabel;
			var ValueComponent = this.props.valueComponent;
			if (!valueArray.length) {
				var showPlaceholder = shouldShowPlaceholder(this.state, this.props, isOpen);
				return showPlaceholder ? _react2.default.createElement(
					'div',
					{ className: 'Select-placeholder' },
					this.props.placeholder
				) : null;
			}
			var onClick = this.props.onValueClick ? this.handleValueClick : null;
			if (this.props.multi) {
				return valueArray.map(function (value, i) {
					return _react2.default.createElement(
						ValueComponent,
						{
							disabled: _this5.props.disabled || value.clearableValue === false,
							id: _this5._instancePrefix + '-value-' + i,
							instancePrefix: _this5._instancePrefix,
							key: 'value-' + i + '-' + value[_this5.props.valueKey],
							onClick: onClick,
							onRemove: _this5.removeValue,
							placeholder: _this5.props.placeholder,
							value: value,
							values: valueArray
						},
						renderLabel(value, i),
						_react2.default.createElement(
							'span',
							{ className: 'Select-aria-only' },
							'\xA0'
						)
					);
				});
			} else if (shouldShowValue(this.state, this.props)) {
				if (isOpen) onClick = null;
				return _react2.default.createElement(
					ValueComponent,
					{
						disabled: this.props.disabled,
						id: this._instancePrefix + '-value-item',
						instancePrefix: this._instancePrefix,
						onClick: onClick,
						placeholder: this.props.placeholder,
						value: valueArray[0]
					},
					renderLabel(valueArray[0])
				);
			}
		}
	}, {
		key: 'renderInput',
		value: function renderInput(valueArray, focusedOptionIndex) {
			var _classNames,
			    _this6 = this;

			var className = (0, _classnames2.default)('Select-input', this.props.inputProps.className);
			var isOpen = this.state.isOpen;

			var ariaOwns = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, this._instancePrefix + '-list', isOpen), _defineProperty(_classNames, this._instancePrefix + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classNames));

			var value = this.state.inputValue;
			if (value && !this.props.onSelectResetsInput && !this.state.isFocused) {
				// it hides input value when it is not focused and was not reset on select
				value = '';
			}

			var inputProps = _extends({}, this.props.inputProps, {
				'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
				'aria-describedby': this.props['aria-describedby'],
				'aria-expanded': '' + isOpen,
				'aria-haspopup': '' + isOpen,
				'aria-label': this.props['aria-label'],
				'aria-labelledby': this.props['aria-labelledby'],
				'aria-owns': ariaOwns,
				onBlur: this.handleInputBlur,
				onChange: this.handleInputChange,
				onFocus: this.handleInputFocus,
				ref: function ref(_ref) {
					return _this6.input = _ref;
				},
				role: 'combobox',
				required: this.state.required,
				tabIndex: this.props.tabIndex,
				value: value
			});

			if (this.props.inputRenderer) {
				return this.props.inputRenderer(inputProps);
			}

			if (this.props.disabled || !this.props.searchable) {
				var divProps = _objectWithoutProperties(this.props.inputProps, []);

				var _ariaOwns = (0, _classnames2.default)(_defineProperty({}, this._instancePrefix + '-list', isOpen));
				return _react2.default.createElement('div', _extends({}, divProps, {
					'aria-expanded': isOpen,
					'aria-owns': _ariaOwns,
					'aria-activedescendant': isOpen ? this._instancePrefix + '-option-' + focusedOptionIndex : this._instancePrefix + '-value',
					'aria-disabled': '' + this.props.disabled,
					'aria-label': this.props['aria-label'],
					'aria-labelledby': this.props['aria-labelledby'],
					className: className,
					onBlur: this.handleInputBlur,
					onFocus: this.handleInputFocus,
					ref: function ref(_ref2) {
						return _this6.input = _ref2;
					},
					role: 'combobox',
					style: { border: 0, width: 1, display: 'inline-block' },
					tabIndex: this.props.tabIndex || 0
				}));
			}

			if (this.props.autosize) {
				return _react2.default.createElement(_reactInputAutosize2.default, _extends({ id: this.props.id }, inputProps, { className: className, minWidth: '5' }));
			}
			return _react2.default.createElement(
				'div',
				{ className: className, key: 'input-wrap', style: { display: 'inline-block' } },
				_react2.default.createElement('input', _extends({ id: this.props.id }, inputProps))
			);
		}
	}, {
		key: 'renderClear',
		value: function renderClear() {
			var valueArray = this.getValueArray(this.props.value);
			if (!this.props.clearable || !valueArray.length || this.props.disabled || this.props.isLoading) return;
			var ariaLabel = this.props.multi ? this.props.clearAllText : this.props.clearValueText;
			var clear = this.props.clearRenderer();

			return _react2.default.createElement(
				'span',
				{
					'aria-label': ariaLabel,
					className: 'Select-clear-zone',
					onMouseDown: this.clearValue,
					onTouchEnd: this.handleTouchEndClearValue,
					onTouchMove: this.handleTouchMove,
					onTouchStart: this.handleTouchStart,
					title: ariaLabel
				},
				clear
			);
		}
	}, {
		key: 'renderArrow',
		value: function renderArrow() {
			if (!this.props.arrowRenderer) return;

			var onMouseDown = this.handleMouseDownOnArrow;
			var isOpen = this.state.isOpen;
			var arrow = this.props.arrowRenderer({ onMouseDown: onMouseDown, isOpen: isOpen });

			if (!arrow) {
				return null;
			}

			return _react2.default.createElement(
				'span',
				{
					className: 'Select-arrow-zone',
					onMouseDown: onMouseDown
				},
				arrow
			);
		}
	}, {
		key: 'filterOptions',
		value: function filterOptions(excludeOptions) {
			var filterValue = this.state.inputValue;
			var options = this.props.options || [];
			if (this.props.filterOptions) {
				// Maintain backwards compatibility with boolean attribute
				var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : _defaultFilterOptions2.default;

				return filterOptions(options, filterValue, excludeOptions, {
					filterOption: this.props.filterOption,
					ignoreAccents: this.props.ignoreAccents,
					ignoreCase: this.props.ignoreCase,
					labelKey: this.props.labelKey,
					matchPos: this.props.matchPos,
					matchProp: this.props.matchProp,
					trimFilter: this.props.trimFilter,
					valueKey: this.props.valueKey
				});
			} else {
				return options;
			}
		}
	}, {
		key: 'onOptionRef',
		value: function onOptionRef(ref, isFocused) {
			if (isFocused) {
				this.focused = ref;
			}
		}
	}, {
		key: 'renderMenu',
		value: function renderMenu(options, valueArray, focusedOption) {
			if (options && options.length) {
				return this.props.menuRenderer({
					focusedOption: focusedOption,
					focusOption: this.focusOption,
					inputValue: this.state.inputValue,
					instancePrefix: this._instancePrefix,
					labelKey: this.props.labelKey,
					onFocus: this.focusOption,
					onOptionRef: this.onOptionRef,
					onSelect: this.selectValue,
					optionClassName: this.props.optionClassName,
					optionComponent: this.props.optionComponent,
					optionRenderer: this.props.optionRenderer || this.getOptionLabel,
					options: options,
					removeValue: this.removeValue,
					selectValue: this.selectValue,
					valueArray: valueArray,
					valueKey: this.props.valueKey
				});
			} else if (this.props.noResultsText) {
				return _react2.default.createElement(
					'div',
					{ className: 'Select-noresults' },
					this.props.noResultsText
				);
			} else {
				return null;
			}
		}
	}, {
		key: 'renderHiddenField',
		value: function renderHiddenField(valueArray) {
			var _this7 = this;

			if (!this.props.name) return;
			if (this.props.joinValues) {
				var value = valueArray.map(function (i) {
					return stringifyValue(i[_this7.props.valueKey]);
				}).join(this.props.delimiter);
				return _react2.default.createElement('input', {
					disabled: this.props.disabled,
					name: this.props.name,
					ref: function ref(_ref3) {
						return _this7.value = _ref3;
					},
					type: 'hidden',
					value: value
				});
			}
			return valueArray.map(function (item, index) {
				return _react2.default.createElement('input', {
					disabled: _this7.props.disabled,
					key: 'hidden.' + index,
					name: _this7.props.name,
					ref: 'value' + index,
					type: 'hidden',
					value: stringifyValue(item[_this7.props.valueKey])
				});
			});
		}
	}, {
		key: 'getFocusableOptionIndex',
		value: function getFocusableOptionIndex(selectedOption) {
			var options = this._visibleOptions;
			if (!options.length) return null;

			var valueKey = this.props.valueKey;
			var focusedOption = this.state.focusedOption || selectedOption;
			if (focusedOption && !focusedOption.disabled) {
				var focusedOptionIndex = -1;
				options.some(function (option, index) {
					var isOptionEqual = option[valueKey] === focusedOption[valueKey];
					if (isOptionEqual) {
						focusedOptionIndex = index;
					}
					return isOptionEqual;
				});
				if (focusedOptionIndex !== -1) {
					return focusedOptionIndex;
				}
			}

			for (var i = 0; i < options.length; i++) {
				if (!options[i].disabled) return i;
			}
			return null;
		}
	}, {
		key: 'renderOuter',
		value: function renderOuter(options, valueArray, focusedOption) {
			var _this8 = this;

			var menu = this.renderMenu(options, valueArray, focusedOption);
			if (!menu) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				{ ref: function ref(_ref5) {
						return _this8.menuContainer = _ref5;
					}, className: 'Select-menu-outer', style: this.props.menuContainerStyle },
				_react2.default.createElement(
					'div',
					{
						className: 'Select-menu',
						id: this._instancePrefix + '-list',
						onMouseDown: this.handleMouseDownOnMenu,
						onScroll: this.handleMenuScroll,
						ref: function ref(_ref4) {
							return _this8.menu = _ref4;
						},
						role: 'listbox',
						style: this.props.menuStyle,
						tabIndex: -1
					},
					menu
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this9 = this;

			var valueArray = this.getValueArray(this.props.value);
			var options = this._visibleOptions = this.filterOptions(this.props.multi && this.props.removeSelected ? valueArray : null);
			var isOpen = this.state.isOpen;
			if (this.props.multi && !options.length && valueArray.length && !this.state.inputValue) isOpen = false;
			var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);

			var focusedOption = null;
			if (focusedOptionIndex !== null) {
				focusedOption = this._focusedOption = options[focusedOptionIndex];
			} else {
				focusedOption = this._focusedOption = null;
			}
			var className = (0, _classnames2.default)('Select', this.props.className, {
				'has-value': valueArray.length,
				'is-clearable': this.props.clearable,
				'is-disabled': this.props.disabled,
				'is-focused': this.state.isFocused,
				'is-loading': this.props.isLoading,
				'is-open': isOpen,
				'is-pseudo-focused': this.state.isPseudoFocused,
				'is-searchable': this.props.searchable,
				'Select--multi': this.props.multi,
				'Select--rtl': this.props.rtl,
				'Select--single': !this.props.multi
			});

			var removeMessage = null;
			if (this.props.multi && !this.props.disabled && valueArray.length && !this.state.inputValue && this.state.isFocused && this.props.backspaceRemoves) {
				removeMessage = _react2.default.createElement(
					'span',
					{ id: this._instancePrefix + '-backspace-remove-message', className: 'Select-aria-only', 'aria-live': 'assertive' },
					this.props.backspaceToRemoveMessage.replace('{label}', valueArray[valueArray.length - 1][this.props.labelKey])
				);
			}

			return _react2.default.createElement(
				'div',
				{ ref: function ref(_ref7) {
						return _this9.wrapper = _ref7;
					},
					className: className,
					style: this.props.wrapperStyle },
				this.renderHiddenField(valueArray),
				_react2.default.createElement(
					'div',
					{ ref: function ref(_ref6) {
							return _this9.control = _ref6;
						},
						className: 'Select-control',
						onKeyDown: this.handleKeyDown,
						onMouseDown: this.handleMouseDown,
						onTouchEnd: this.handleTouchEnd,
						onTouchMove: this.handleTouchMove,
						onTouchStart: this.handleTouchStart,
						style: this.props.style
					},
					_react2.default.createElement(
						'div',
						{ className: 'Select-multi-value-wrapper', id: this._instancePrefix + '-value' },
						this.renderValue(valueArray, isOpen),
						this.renderInput(valueArray, focusedOptionIndex)
					),
					removeMessage,
					this.renderLoading(),
					this.renderClear(),
					this.renderArrow()
				),
				isOpen ? this.renderOuter(options, valueArray, focusedOption) : null
			);
		}
	}]);

	return Select;
}(_react2.default.Component);

Select.propTypes = {
	'aria-describedby': _propTypes2.default.string, // html id(s) of element(s) that should be used to describe this input (for assistive tech)
	'aria-label': _propTypes2.default.string, // aria label (for assistive tech)
	'aria-labelledby': _propTypes2.default.string, // html id of an element that should be used as the label (for assistive tech)
	arrowRenderer: _propTypes2.default.func, // create the drop-down caret element
	autoBlur: _propTypes2.default.bool, // automatically blur the component when an option is selected
	autoFocus: _propTypes2.default.bool, // autofocus the component on mount
	autofocus: _propTypes2.default.bool, // deprecated; use autoFocus instead
	autosize: _propTypes2.default.bool, // whether to enable autosizing or not
	backspaceRemoves: _propTypes2.default.bool, // whether backspace removes an item if there is no text input
	backspaceToRemoveMessage: _propTypes2.default.string, // message to use for screenreaders to press backspace to remove the current item - {label} is replaced with the item label
	className: _propTypes2.default.string, // className for the outer element
	clearAllText: stringOrNode, // title for the "clear" control when multi: true
	clearRenderer: _propTypes2.default.func, // create clearable x element
	clearValueText: stringOrNode, // title for the "clear" control
	clearable: _propTypes2.default.bool, // should it be possible to reset value
	closeOnSelect: _propTypes2.default.bool, // whether to close the menu when a value is selected
	deleteRemoves: _propTypes2.default.bool, // whether delete removes an item if there is no text input
	delimiter: _propTypes2.default.string, // delimiter to use to join multiple values for the hidden field value
	disabled: _propTypes2.default.bool, // whether the Select is disabled or not
	escapeClearsValue: _propTypes2.default.bool, // whether escape clears the value when the menu is closed
	filterOption: _propTypes2.default.func, // method to filter a single option (option, filterString)
	filterOptions: _propTypes2.default.any, // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
	id: _propTypes2.default.string, // html id to set on the input element for accessibility or tests
	ignoreAccents: _propTypes2.default.bool, // whether to strip diacritics when filtering
	ignoreCase: _propTypes2.default.bool, // whether to perform case-insensitive filtering
	inputProps: _propTypes2.default.object, // custom attributes for the Input
	inputRenderer: _propTypes2.default.func, // returns a custom input component
	instanceId: _propTypes2.default.string, // set the components instanceId
	isLoading: _propTypes2.default.bool, // whether the Select is loading externally or not (such as options being loaded)
	joinValues: _propTypes2.default.bool, // joins multiple values into a single form field with the delimiter (legacy mode)
	labelKey: _propTypes2.default.string, // path of the label value in option objects
	matchPos: _propTypes2.default.string, // (any|start) match the start or entire string when filtering
	matchProp: _propTypes2.default.string, // (any|label|value) which option property to filter on
	menuBuffer: _propTypes2.default.number, // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
	menuContainerStyle: _propTypes2.default.object, // optional style to apply to the menu container
	menuRenderer: _propTypes2.default.func, // renders a custom menu with options
	menuStyle: _propTypes2.default.object, // optional style to apply to the menu
	multi: _propTypes2.default.bool, // multi-value input
	name: _propTypes2.default.string, // generates a hidden <input /> tag with this field name for html forms
	noResultsText: stringOrNode, // placeholder displayed when there are no matching search results
	onBlur: _propTypes2.default.func, // onBlur handler: function (event) {}
	onBlurResetsInput: _propTypes2.default.bool, // whether input is cleared on blur
	onChange: _propTypes2.default.func, // onChange handler: function (newValue) {}
	onClose: _propTypes2.default.func, // fires when the menu is closed
	onCloseResetsInput: _propTypes2.default.bool, // whether input is cleared when menu is closed through the arrow
	onFocus: _propTypes2.default.func, // onFocus handler: function (event) {}
	onInputChange: _propTypes2.default.func, // onInputChange handler: function (inputValue) {}
	onInputKeyDown: _propTypes2.default.func, // input keyDown handler: function (event) {}
	onMenuScrollToBottom: _propTypes2.default.func, // fires when the menu is scrolled to the bottom; can be used to paginate options
	onOpen: _propTypes2.default.func, // fires when the menu is opened
	onSelectResetsInput: _propTypes2.default.bool, // whether input is cleared on select (works only for multiselect)
	onValueClick: _propTypes2.default.func, // onClick handler for value labels: function (value, event) {}
	openOnClick: _propTypes2.default.bool, // boolean to control opening the menu when the control is clicked
	openOnFocus: _propTypes2.default.bool, // always open options menu on focus
	optionClassName: _propTypes2.default.string, // additional class(es) to apply to the <Option /> elements
	optionComponent: _propTypes2.default.func, // option component to render in dropdown
	optionRenderer: _propTypes2.default.func, // optionRenderer: function (option) {}
	options: _propTypes2.default.array, // array of options
	pageSize: _propTypes2.default.number, // number of entries to page when using page up/down keys
	placeholder: stringOrNode, // field placeholder, displayed when there's no value
	removeSelected: _propTypes2.default.bool, // whether the selected option is removed from the dropdown on multi selects
	required: _propTypes2.default.bool, // applies HTML5 required attribute when needed
	resetValue: _propTypes2.default.any, // value to use when you clear the control
	rtl: _propTypes2.default.bool, // set to true in order to use react-select in right-to-left direction
	scrollMenuIntoView: _propTypes2.default.bool, // boolean to enable the viewport to shift so that the full menu fully visible when engaged
	searchable: _propTypes2.default.bool, // whether to enable searching feature or not
	simpleValue: _propTypes2.default.bool, // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
	style: _propTypes2.default.object, // optional style to apply to the control
	tabIndex: stringOrNumber, // optional tab index of the control
	tabSelectsValue: _propTypes2.default.bool, // whether to treat tabbing out while focused to be value selection
	trimFilter: _propTypes2.default.bool, // whether to trim whitespace around filter value
	value: _propTypes2.default.any, // initial field value
	valueComponent: _propTypes2.default.func, // value component to render
	valueKey: _propTypes2.default.string, // path of the label value in option objects
	valueRenderer: _propTypes2.default.func, // valueRenderer: function (option) {}
	wrapperStyle: _propTypes2.default.object // optional style to apply to the component wrapper
};

Select.defaultProps = {
	arrowRenderer: _defaultArrowRenderer2.default,
	autosize: true,
	backspaceRemoves: true,
	backspaceToRemoveMessage: 'Press backspace to remove {label}',
	clearable: true,
	clearAllText: 'Clear all',
	clearRenderer: _defaultClearRenderer2.default,
	clearValueText: 'Clear value',
	closeOnSelect: true,
	deleteRemoves: true,
	delimiter: ',',
	disabled: false,
	escapeClearsValue: true,
	filterOptions: _defaultFilterOptions2.default,
	ignoreAccents: true,
	ignoreCase: true,
	inputProps: {},
	isLoading: false,
	joinValues: false,
	labelKey: 'label',
	matchPos: 'any',
	matchProp: 'any',
	menuBuffer: 0,
	menuRenderer: _defaultMenuRenderer2.default,
	multi: false,
	noResultsText: 'No results found',
	onBlurResetsInput: true,
	onCloseResetsInput: true,
	onSelectResetsInput: true,
	openOnClick: true,
	optionComponent: _Option2.default,
	pageSize: 5,
	placeholder: 'Select...',
	removeSelected: true,
	required: false,
	rtl: false,
	scrollMenuIntoView: true,
	searchable: true,
	simpleValue: false,
	tabSelectsValue: true,
	trimFilter: true,
	valueComponent: _Value2.default,
	valueKey: 'value'
};

exports.default = Select;

/***/ }),

/***/ 2591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(731);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ 2592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(731);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrowRenderer = function arrowRenderer(_ref) {
	var onMouseDown = _ref.onMouseDown;

	return _react2.default.createElement('span', {
		className: 'Select-arrow',
		onMouseDown: onMouseDown
	});
};

arrowRenderer.propTypes = {
	onMouseDown: _propTypes2.default.func
};

exports.default = arrowRenderer;

/***/ }),

/***/ 2593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clearRenderer = function clearRenderer() {
	return _react2.default.createElement('span', {
		className: 'Select-clear',
		dangerouslySetInnerHTML: { __html: '&times;' }
	});
};

exports.default = clearRenderer;

/***/ }),

/***/ 2594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stripDiacritics = __webpack_require__(2595);

var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

var _trim = __webpack_require__(2596);

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isValid = function isValid(value) {
	return typeof value !== 'undefined' && value !== null && value !== '';
};

var filterOptions = function filterOptions(options, filterValue, excludeOptions, props) {
	if (props.ignoreAccents) {
		filterValue = (0, _stripDiacritics2.default)(filterValue);
	}

	if (props.ignoreCase) {
		filterValue = filterValue.toLowerCase();
	}

	if (props.trimFilter) {
		filterValue = (0, _trim2.default)(filterValue);
	}

	if (excludeOptions) excludeOptions = excludeOptions.map(function (i) {
		return i[props.valueKey];
	});

	return options.filter(function (option) {
		if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
		if (props.filterOption) return props.filterOption.call(undefined, option, filterValue);
		if (!filterValue) return true;

		var value = option[props.valueKey];
		var label = option[props.labelKey];
		var hasValue = isValid(value);
		var hasLabel = isValid(label);

		if (!hasValue && !hasLabel) {
			return false;
		}

		var valueTest = hasValue ? String(value) : null;
		var labelTest = hasLabel ? String(label) : null;

		if (props.ignoreAccents) {
			if (valueTest && props.matchProp !== 'label') valueTest = (0, _stripDiacritics2.default)(valueTest);
			if (labelTest && props.matchProp !== 'value') labelTest = (0, _stripDiacritics2.default)(labelTest);
		}

		if (props.ignoreCase) {
			if (valueTest && props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
			if (labelTest && props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
		}

		return props.matchPos === 'start' ? valueTest && props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || labelTest && props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : valueTest && props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || labelTest && props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
	});
};

exports.default = filterOptions;

/***/ }),

/***/ 2595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

var stripDiacritics = function stripDiacritics(str) {
	for (var i = 0; i < map.length; i++) {
		str = str.replace(map[i].letters, map[i].base);
	}
	return str;
};

exports.default = stripDiacritics;

/***/ }),

/***/ 2596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var trim = function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

exports.default = trim;

/***/ }),

/***/ 2597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classnames = __webpack_require__(856);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(731);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuRenderer = function menuRenderer(_ref) {
	var focusedOption = _ref.focusedOption,
	    focusOption = _ref.focusOption,
	    inputValue = _ref.inputValue,
	    instancePrefix = _ref.instancePrefix,
	    onFocus = _ref.onFocus,
	    onOptionRef = _ref.onOptionRef,
	    onSelect = _ref.onSelect,
	    optionClassName = _ref.optionClassName,
	    optionComponent = _ref.optionComponent,
	    optionRenderer = _ref.optionRenderer,
	    options = _ref.options,
	    removeValue = _ref.removeValue,
	    selectValue = _ref.selectValue,
	    valueArray = _ref.valueArray,
	    valueKey = _ref.valueKey;

	var Option = optionComponent;

	return options.map(function (option, i) {
		var isSelected = valueArray && valueArray.some(function (x) {
			return x[valueKey] === option[valueKey];
		});
		var isFocused = option === focusedOption;
		var optionClass = (0, _classnames2.default)(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return _react2.default.createElement(
			Option,
			{
				className: optionClass,
				focusOption: focusOption,
				inputValue: inputValue,
				instancePrefix: instancePrefix,
				isDisabled: option.disabled,
				isFocused: isFocused,
				isSelected: isSelected,
				key: 'option-' + i + '-' + option[valueKey],
				onFocus: onFocus,
				onSelect: onSelect,
				option: option,
				optionIndex: i,
				ref: function ref(_ref2) {
					onOptionRef(_ref2, isFocused);
				},
				removeValue: removeValue,
				selectValue: selectValue
			},
			optionRenderer(option, i, inputValue)
		);
	});
};

menuRenderer.propTypes = {
	focusOption: _propTypes2.default.func,
	focusedOption: _propTypes2.default.object,
	inputValue: _propTypes2.default.string,
	instancePrefix: _propTypes2.default.string,
	onFocus: _propTypes2.default.func,
	onOptionRef: _propTypes2.default.func,
	onSelect: _propTypes2.default.func,
	optionClassName: _propTypes2.default.string,
	optionComponent: _propTypes2.default.func,
	optionRenderer: _propTypes2.default.func,
	options: _propTypes2.default.array,
	removeValue: _propTypes2.default.func,
	selectValue: _propTypes2.default.func,
	valueArray: _propTypes2.default.array,
	valueKey: _propTypes2.default.string
};

exports.default = menuRenderer;

/***/ }),

/***/ 2598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(856);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(731);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

var _blockEvent = __webpack_require__(2599);

var _blockEvent2 = _interopRequireDefault(_blockEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_React$Component) {
	_inherits(Option, _React$Component);

	function Option(props) {
		_classCallCheck(this, Option);

		var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
		_this.handleMouseMove = _this.handleMouseMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		_this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.onFocus = _this.onFocus.bind(_this);
		return _this;
	}

	_createClass(Option, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onSelect(this.props.option, event);
		}
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleMouseMove',
		value: function handleMouseMove(event) {
			this.onFocus(event);
		}
	}, {
		key: 'handleTouchEnd',
		value: function handleTouchEnd(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			this.handleMouseDown(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'onFocus',
		value: function onFocus(event) {
			if (!this.props.isFocused) {
				this.props.onFocus(this.props.option, event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    option = _props.option,
			    instancePrefix = _props.instancePrefix,
			    optionIndex = _props.optionIndex;

			var className = (0, _classnames2.default)(this.props.className, option.className);

			return option.disabled ? _react2.default.createElement(
				'div',
				{ className: className,
					onMouseDown: _blockEvent2.default,
					onClick: _blockEvent2.default },
				this.props.children
			) : _react2.default.createElement(
				'div',
				{ className: className,
					style: option.style,
					role: 'option',
					'aria-label': option.label,
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseMove: this.handleMouseMove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove,
					onTouchEnd: this.handleTouchEnd,
					id: instancePrefix + '-option-' + optionIndex,
					title: option.title },
				this.props.children
			);
		}
	}]);

	return Option;
}(_react2.default.Component);

Option.propTypes = {
	children: _propTypes2.default.node,
	className: _propTypes2.default.string, // className (based on mouse position)
	instancePrefix: _propTypes2.default.string.isRequired, // unique prefix for the ids (used for aria)
	isDisabled: _propTypes2.default.bool, // the option is disabled
	isFocused: _propTypes2.default.bool, // the option is focused
	isSelected: _propTypes2.default.bool, // the option is selected
	onFocus: _propTypes2.default.func, // method to handle mouseEnter on option element
	onSelect: _propTypes2.default.func, // method to handle click on option element
	onUnfocus: _propTypes2.default.func, // method to handle mouseLeave on option element
	option: _propTypes2.default.object.isRequired, // object that is base for that option
	optionIndex: _propTypes2.default.number // index of the option, used to generate unique ids for aria
};

exports.default = Option;

/***/ }),

/***/ 2599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (event) {
	event.preventDefault();
	event.stopPropagation();
	if (event.target.tagName !== 'A' || !('href' in event.target)) {
		return;
	}
	if (event.target.target) {
		window.open(event.target.href, event.target.target);
	} else {
		window.location.href = event.target.href;
	}
};

/***/ }),

/***/ 2600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(856);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(731);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(389);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Value = function (_React$Component) {
	_inherits(Value, _React$Component);

	function Value(props) {
		_classCallCheck(this, Value);

		var _this = _possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));

		_this.handleMouseDown = _this.handleMouseDown.bind(_this);
		_this.onRemove = _this.onRemove.bind(_this);
		_this.handleTouchEndRemove = _this.handleTouchEndRemove.bind(_this);
		_this.handleTouchMove = _this.handleTouchMove.bind(_this);
		_this.handleTouchStart = _this.handleTouchStart.bind(_this);
		return _this;
	}

	_createClass(Value, [{
		key: 'handleMouseDown',
		value: function handleMouseDown(event) {
			if (event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			if (this.props.onClick) {
				event.stopPropagation();
				this.props.onClick(this.props.value, event);
				return;
			}
			if (this.props.value.href) {
				event.stopPropagation();
			}
		}
	}, {
		key: 'onRemove',
		value: function onRemove(event) {
			event.preventDefault();
			event.stopPropagation();
			this.props.onRemove(this.props.value);
		}
	}, {
		key: 'handleTouchEndRemove',
		value: function handleTouchEndRemove(event) {
			// Check if the view is being dragged, In this case
			// we don't want to fire the click event (because the user only wants to scroll)
			if (this.dragging) return;

			// Fire the mouse events
			this.onRemove(event);
		}
	}, {
		key: 'handleTouchMove',
		value: function handleTouchMove() {
			// Set a flag that the view is being dragged
			this.dragging = true;
		}
	}, {
		key: 'handleTouchStart',
		value: function handleTouchStart() {
			// Set a flag that the view is not being dragged
			this.dragging = false;
		}
	}, {
		key: 'renderRemoveIcon',
		value: function renderRemoveIcon() {
			if (this.props.disabled || !this.props.onRemove) return;
			return _react2.default.createElement(
				'span',
				{ className: 'Select-value-icon',
					'aria-hidden': 'true',
					onMouseDown: this.onRemove,
					onTouchEnd: this.handleTouchEndRemove,
					onTouchStart: this.handleTouchStart,
					onTouchMove: this.handleTouchMove },
				'\xD7'
			);
		}
	}, {
		key: 'renderLabel',
		value: function renderLabel() {
			var className = 'Select-value-label';
			return this.props.onClick || this.props.value.href ? _react2.default.createElement(
				'a',
				{ className: className, href: this.props.value.href, target: this.props.value.target, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				this.props.children
			) : _react2.default.createElement(
				'span',
				{ className: className, role: 'option', 'aria-selected': 'true', id: this.props.id },
				this.props.children
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('Select-value', this.props.value.disabled ? 'Select-value-disabled' : '', this.props.value.className),
					style: this.props.value.style,
					title: this.props.value.title
				},
				this.renderRemoveIcon(),
				this.renderLabel()
			);
		}
	}]);

	return Value;
}(_react2.default.Component);

Value.propTypes = {
	children: _propTypes2.default.node,
	disabled: _propTypes2.default.bool, // disabled prop passed to ReactSelect
	id: _propTypes2.default.string, // Unique id for the value - used for aria
	onClick: _propTypes2.default.func, // method to handle click on value label
	onRemove: _propTypes2.default.func, // method to handle removal of the value
	value: _propTypes2.default.object.isRequired // the option object for this value
};

exports.default = Value;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35ib3RzLjg1Y2Y3NTFmYWM1ZmE2YTNiMDQ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvQXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvU2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1hdXRvc2l6ZS9saWIvQXV0b3NpemVJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi91dGlscy9kZWZhdWx0QXJyb3dSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi91dGlscy9kZWZhdWx0Q2xlYXJSZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi91dGlscy9kZWZhdWx0RmlsdGVyT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi91dGlscy9zdHJpcERpYWNyaXRpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9saWIvdXRpbHMvdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi91dGlscy9kZWZhdWx0TWVudVJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL09wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2xpYi91dGlscy9ibG9ja0V2ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zZWxlY3QvbGliL1ZhbHVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1NlbGVjdCA9IHJlcXVpcmUoJy4vU2VsZWN0Jyk7XG5cbnZhciBfU2VsZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlbGVjdCk7XG5cbnZhciBfc3RyaXBEaWFjcml0aWNzID0gcmVxdWlyZSgnLi91dGlscy9zdHJpcERpYWNyaXRpY3MnKTtcblxudmFyIF9zdHJpcERpYWNyaXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaXBEaWFjcml0aWNzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuXHRhdXRvbG9hZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsIC8vIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGUgYGxvYWRPcHRpb25zYCBwcm9wIG9uLW1vdW50OyBkZWZhdWx0cyB0byB0cnVlXG5cdGNhY2hlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSwgLy8gb2JqZWN0IHRvIHVzZSB0byBjYWNoZSByZXN1bHRzOyBzZXQgdG8gbnVsbC9mYWxzZSB0byBkaXNhYmxlIGNhY2hpbmdcblx0Y2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLCAvLyBDaGlsZCBmdW5jdGlvbiByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIGlubmVyIFNlbGVjdCBjb21wb25lbnQ7IChwcm9wczogT2JqZWN0KTogUHJvcFR5cGVzLmVsZW1lbnRcblx0aWdub3JlQWNjZW50czogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBzdHJpcCBkaWFjcml0aWNzIHdoZW4gZmlsdGVyaW5nOyBkZWZhdWx0cyB0byB0cnVlXG5cdGlnbm9yZUNhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gcGVyZm9ybSBjYXNlLWluc2Vuc2l0aXZlIGZpbHRlcmluZzsgZGVmYXVsdHMgdG8gdHJ1ZVxuXHRsb2FkT3B0aW9uczogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsIC8vIGNhbGxiYWNrIHRvIGxvYWQgb3B0aW9ucyBhc3luY2hyb25vdXNseTsgKGlucHV0VmFsdWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogP1Byb21pc2Vcblx0bG9hZGluZ1BsYWNlaG9sZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbLy8gcmVwbGFjZXMgdGhlIHBsYWNlaG9sZGVyIHdoaWxlIG9wdGlvbnMgYXJlIGxvYWRpbmdcblx0X3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZV0pLFxuXHRtdWx0aTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBtdWx0aS12YWx1ZSBpbnB1dFxuXHRub1Jlc3VsdHNUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbLy8gZmllbGQgbm9SZXN1bHRzVGV4dCwgZGlzcGxheWVkIHdoZW4gbm8gb3B0aW9ucyBjb21lIGJhY2sgZnJvbSB0aGUgc2VydmVyXG5cdF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVdKSxcblx0b25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25DaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7fVxuXHRvbklucHV0Q2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9wdGlvbmFsIGZvciBrZWVwaW5nIHRyYWNrIG9mIHdoYXQgaXMgYmVpbmcgdHlwZWRcblx0b3B0aW9uczogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheS5pc1JlcXVpcmVkLCAvLyBhcnJheSBvZiBvcHRpb25zXG5cdHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbLy8gZmllbGQgcGxhY2Vob2xkZXIsIGRpc3BsYXllZCB3aGVuIHRoZXJlJ3Mgbm8gdmFsdWUgKHNoYXJlZCB3aXRoIFNlbGVjdClcblx0X3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZV0pLFxuXHRzZWFyY2hQcm9tcHRUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbLy8gbGFiZWwgdG8gcHJvbXB0IGZvciBzZWFyY2ggaW5wdXRcblx0X3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZV0pLFxuXHR2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnkgLy8gaW5pdGlhbCBmaWVsZCB2YWx1ZVxufTtcblxudmFyIGRlZmF1bHRDYWNoZSA9IHt9O1xuXG52YXIgZGVmYXVsdENoaWxkcmVuID0gZnVuY3Rpb24gZGVmYXVsdENoaWxkcmVuKHByb3BzKSB7XG5cdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfU2VsZWN0Mi5kZWZhdWx0LCBwcm9wcyk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuXHRhdXRvbG9hZDogdHJ1ZSxcblx0Y2FjaGU6IGRlZmF1bHRDYWNoZSxcblx0Y2hpbGRyZW46IGRlZmF1bHRDaGlsZHJlbixcblx0aWdub3JlQWNjZW50czogdHJ1ZSxcblx0aWdub3JlQ2FzZTogdHJ1ZSxcblx0bG9hZGluZ1BsYWNlaG9sZGVyOiAnTG9hZGluZy4uLicsXG5cdG9wdGlvbnM6IFtdLFxuXHRzZWFyY2hQcm9tcHRUZXh0OiAnVHlwZSB0byBzZWFyY2gnXG59O1xuXG52YXIgQXN5bmMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoQXN5bmMsIF9Db21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIEFzeW5jKHByb3BzLCBjb250ZXh0KSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFzeW5jKTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBc3luYy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFzeW5jKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG5cdFx0X3RoaXMuX2NhY2hlID0gcHJvcHMuY2FjaGUgPT09IGRlZmF1bHRDYWNoZSA/IHt9IDogcHJvcHMuY2FjaGU7XG5cblx0XHRfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0VmFsdWU6ICcnLFxuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdG9wdGlvbnM6IHByb3BzLm9wdGlvbnNcblx0XHR9O1xuXG5cdFx0X3RoaXMub25JbnB1dENoYW5nZSA9IF90aGlzLm9uSW5wdXRDaGFuZ2UuYmluZChfdGhpcyk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEFzeW5jLCBbe1xuXHRcdGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0XHR2YXIgYXV0b2xvYWQgPSB0aGlzLnByb3BzLmF1dG9sb2FkO1xuXG5cblx0XHRcdGlmIChhdXRvbG9hZCkge1xuXHRcdFx0XHR0aGlzLmxvYWRPcHRpb25zKCcnKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRcdGlmIChuZXh0UHJvcHMub3B0aW9ucyAhPT0gdGhpcy5wcm9wcy5vcHRpb25zKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdG9wdGlvbnM6IG5leHRQcm9wcy5vcHRpb25zXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XHR0aGlzLl9jYWxsYmFjayA9IG51bGw7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbG9hZE9wdGlvbnMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBsb2FkT3B0aW9ucyhpbnB1dFZhbHVlKSB7XG5cdFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdFx0dmFyIGxvYWRPcHRpb25zID0gdGhpcy5wcm9wcy5sb2FkT3B0aW9ucztcblxuXHRcdFx0dmFyIGNhY2hlID0gdGhpcy5fY2FjaGU7XG5cblx0XHRcdGlmIChjYWNoZSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2FjaGUsIGlucHV0VmFsdWUpKSB7XG5cdFx0XHRcdHRoaXMuX2NhbGxiYWNrID0gbnVsbDtcblxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdG9wdGlvbnM6IGNhY2hlW2lucHV0VmFsdWVdXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soZXJyb3IsIGRhdGEpIHtcblx0XHRcdFx0dmFyIG9wdGlvbnMgPSBkYXRhICYmIGRhdGEub3B0aW9ucyB8fCBbXTtcblxuXHRcdFx0XHRpZiAoY2FjaGUpIHtcblx0XHRcdFx0XHRjYWNoZVtpbnB1dFZhbHVlXSA9IG9wdGlvbnM7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY2FsbGJhY2sgPT09IF90aGlzMi5fY2FsbGJhY2spIHtcblx0XHRcdFx0XHRfdGhpczIuX2NhbGxiYWNrID0gbnVsbDtcblxuXHRcdFx0XHRcdF90aGlzMi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdFx0b3B0aW9uczogb3B0aW9uc1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBJZ25vcmUgYWxsIGJ1dCB0aGUgbW9zdCByZWNlbnQgcmVxdWVzdFxuXHRcdFx0dGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuXHRcdFx0dmFyIHByb21pc2UgPSBsb2FkT3B0aW9ucyhpbnB1dFZhbHVlLCBjYWxsYmFjayk7XG5cdFx0XHRpZiAocHJvbWlzZSkge1xuXHRcdFx0XHRwcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2sobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH0sIGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fY2FsbGJhY2sgJiYgIXRoaXMuc3RhdGUuaXNMb2FkaW5nKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzTG9hZGluZzogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbklucHV0Q2hhbmdlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gb25JbnB1dENoYW5nZShpbnB1dFZhbHVlKSB7XG5cdFx0XHR2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBpZ25vcmVBY2NlbnRzID0gX3Byb3BzLmlnbm9yZUFjY2VudHMsXG5cdFx0XHQgICAgaWdub3JlQ2FzZSA9IF9wcm9wcy5pZ25vcmVDYXNlLFxuXHRcdFx0ICAgIG9uSW5wdXRDaGFuZ2UgPSBfcHJvcHMub25JbnB1dENoYW5nZTtcblxuXHRcdFx0dmFyIG5ld0lucHV0VmFsdWUgPSBpbnB1dFZhbHVlO1xuXG5cdFx0XHRpZiAob25JbnB1dENoYW5nZSkge1xuXHRcdFx0XHR2YXIgdmFsdWUgPSBvbklucHV0Q2hhbmdlKG5ld0lucHV0VmFsdWUpO1xuXHRcdFx0XHQvLyBOb3RlOiAhPSB1c2VkIGRlbGliZXJhdGVseSBoZXJlIHRvIGNhdGNoIHVuZGVmaW5lZCBhbmQgbnVsbFxuXHRcdFx0XHRpZiAodmFsdWUgIT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdG5ld0lucHV0VmFsdWUgPSAnJyArIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciB0cmFuc2Zvcm1lZElucHV0VmFsdWUgPSBuZXdJbnB1dFZhbHVlO1xuXG5cdFx0XHRpZiAoaWdub3JlQWNjZW50cykge1xuXHRcdFx0XHR0cmFuc2Zvcm1lZElucHV0VmFsdWUgPSAoMCwgX3N0cmlwRGlhY3JpdGljczIuZGVmYXVsdCkodHJhbnNmb3JtZWRJbnB1dFZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlnbm9yZUNhc2UpIHtcblx0XHRcdFx0dHJhbnNmb3JtZWRJbnB1dFZhbHVlID0gdHJhbnNmb3JtZWRJbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBuZXdJbnB1dFZhbHVlIH0pO1xuXHRcdFx0dGhpcy5sb2FkT3B0aW9ucyh0cmFuc2Zvcm1lZElucHV0VmFsdWUpO1xuXG5cdFx0XHQvLyBSZXR1cm4gbmV3IGlucHV0IHZhbHVlLCBidXQgd2l0aG91dCBhcHBseWluZyB0b0xvd2VyQ2FzZSgpIHRvIGF2b2lkIG1vZGlmeWluZyB0aGUgdXNlcidzIHZpZXcgY2FzZSBvZiB0aGUgaW5wdXQgd2hpbGUgdHlwaW5nLlxuXHRcdFx0cmV0dXJuIG5ld0lucHV0VmFsdWU7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnbm9SZXN1bHRzVGV4dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG5vUmVzdWx0c1RleHQoKSB7XG5cdFx0XHR2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgbG9hZGluZ1BsYWNlaG9sZGVyID0gX3Byb3BzMi5sb2FkaW5nUGxhY2Vob2xkZXIsXG5cdFx0XHQgICAgbm9SZXN1bHRzVGV4dCA9IF9wcm9wczIubm9SZXN1bHRzVGV4dCxcblx0XHRcdCAgICBzZWFyY2hQcm9tcHRUZXh0ID0gX3Byb3BzMi5zZWFyY2hQcm9tcHRUZXh0O1xuXHRcdFx0dmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG5cdFx0XHQgICAgaW5wdXRWYWx1ZSA9IF9zdGF0ZS5pbnB1dFZhbHVlLFxuXHRcdFx0ICAgIGlzTG9hZGluZyA9IF9zdGF0ZS5pc0xvYWRpbmc7XG5cblxuXHRcdFx0aWYgKGlzTG9hZGluZykge1xuXHRcdFx0XHRyZXR1cm4gbG9hZGluZ1BsYWNlaG9sZGVyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlucHV0VmFsdWUgJiYgbm9SZXN1bHRzVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gbm9SZXN1bHRzVGV4dDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzZWFyY2hQcm9tcHRUZXh0O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG5cdFx0XHR0aGlzLnNlbGVjdC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfdGhpczMgPSB0aGlzO1xuXG5cdFx0XHR2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG5cdFx0XHQgICAgY2hpbGRyZW4gPSBfcHJvcHMzLmNoaWxkcmVuLFxuXHRcdFx0ICAgIGxvYWRpbmdQbGFjZWhvbGRlciA9IF9wcm9wczMubG9hZGluZ1BsYWNlaG9sZGVyLFxuXHRcdFx0ICAgIHBsYWNlaG9sZGVyID0gX3Byb3BzMy5wbGFjZWhvbGRlcjtcblx0XHRcdHZhciBfc3RhdGUyID0gdGhpcy5zdGF0ZSxcblx0XHRcdCAgICBpc0xvYWRpbmcgPSBfc3RhdGUyLmlzTG9hZGluZyxcblx0XHRcdCAgICBvcHRpb25zID0gX3N0YXRlMi5vcHRpb25zO1xuXG5cblx0XHRcdHZhciBwcm9wcyA9IHtcblx0XHRcdFx0bm9SZXN1bHRzVGV4dDogdGhpcy5ub1Jlc3VsdHNUZXh0KCksXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBpc0xvYWRpbmcgPyBsb2FkaW5nUGxhY2Vob2xkZXIgOiBwbGFjZWhvbGRlcixcblx0XHRcdFx0b3B0aW9uczogaXNMb2FkaW5nICYmIGxvYWRpbmdQbGFjZWhvbGRlciA/IFtdIDogb3B0aW9ucyxcblx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuXHRcdFx0XHRcdHJldHVybiBfdGhpczMuc2VsZWN0ID0gX3JlZjtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0cmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCBwcm9wcywge1xuXHRcdFx0XHRpc0xvYWRpbmc6IGlzTG9hZGluZyxcblx0XHRcdFx0b25JbnB1dENoYW5nZTogdGhpcy5vbklucHV0Q2hhbmdlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEFzeW5jO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXN5bmM7XG5cblxuQXN5bmMucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQXN5bmMuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyAvKiFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL3JlYWN0LXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuXG52YXIgX3JlYWN0SW5wdXRBdXRvc2l6ZSA9IHJlcXVpcmUoJ3JlYWN0LWlucHV0LWF1dG9zaXplJyk7XG5cbnZhciBfcmVhY3RJbnB1dEF1dG9zaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SW5wdXRBdXRvc2l6ZSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfZGVmYXVsdEFycm93UmVuZGVyZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmF1bHRBcnJvd1JlbmRlcmVyJyk7XG5cbnZhciBfZGVmYXVsdEFycm93UmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdEFycm93UmVuZGVyZXIpO1xuXG52YXIgX2RlZmF1bHRDbGVhclJlbmRlcmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZhdWx0Q2xlYXJSZW5kZXJlcicpO1xuXG52YXIgX2RlZmF1bHRDbGVhclJlbmRlcmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRDbGVhclJlbmRlcmVyKTtcblxudmFyIF9kZWZhdWx0RmlsdGVyT3B0aW9ucyA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmYXVsdEZpbHRlck9wdGlvbnMnKTtcblxudmFyIF9kZWZhdWx0RmlsdGVyT3B0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0RmlsdGVyT3B0aW9ucyk7XG5cbnZhciBfZGVmYXVsdE1lbnVSZW5kZXJlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmYXVsdE1lbnVSZW5kZXJlcicpO1xuXG52YXIgX2RlZmF1bHRNZW51UmVuZGVyZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdE1lbnVSZW5kZXJlcik7XG5cbnZhciBfT3B0aW9uID0gcmVxdWlyZSgnLi9PcHRpb24nKTtcblxudmFyIF9PcHRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT3B0aW9uKTtcblxudmFyIF9WYWx1ZSA9IHJlcXVpcmUoJy4vVmFsdWUnKTtcblxudmFyIF9WYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9WYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgc3RyaW5naWZ5VmFsdWUgPSBmdW5jdGlvbiBzdHJpbmdpZnlWYWx1ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdmFsdWUgIT09IG51bGwgJiYgSlNPTi5zdHJpbmdpZnkodmFsdWUpIHx8ICcnO1xufTtcblxudmFyIHN0cmluZ09yTm9kZSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXSk7XG52YXIgc3RyaW5nT3JOdW1iZXIgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSk7XG5cbnZhciBpbnN0YW5jZUlkID0gMTtcblxudmFyIHNob3VsZFNob3dWYWx1ZSA9IGZ1bmN0aW9uIHNob3VsZFNob3dWYWx1ZShzdGF0ZSwgcHJvcHMpIHtcblx0dmFyIGlucHV0VmFsdWUgPSBzdGF0ZS5pbnB1dFZhbHVlLFxuXHQgICAgaXNQc2V1ZG9Gb2N1c2VkID0gc3RhdGUuaXNQc2V1ZG9Gb2N1c2VkLFxuXHQgICAgaXNGb2N1c2VkID0gc3RhdGUuaXNGb2N1c2VkO1xuXHR2YXIgb25TZWxlY3RSZXNldHNJbnB1dCA9IHByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQ7XG5cblxuXHRpZiAoIWlucHV0VmFsdWUpIHJldHVybiB0cnVlO1xuXG5cdGlmICghb25TZWxlY3RSZXNldHNJbnB1dCkge1xuXHRcdHJldHVybiAhKCFpc0ZvY3VzZWQgJiYgaXNQc2V1ZG9Gb2N1c2VkIHx8IGlzRm9jdXNlZCAmJiAhaXNQc2V1ZG9Gb2N1c2VkKTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBzaG91bGRTaG93UGxhY2Vob2xkZXIgPSBmdW5jdGlvbiBzaG91bGRTaG93UGxhY2Vob2xkZXIoc3RhdGUsIHByb3BzLCBpc09wZW4pIHtcblx0dmFyIGlucHV0VmFsdWUgPSBzdGF0ZS5pbnB1dFZhbHVlLFxuXHQgICAgaXNQc2V1ZG9Gb2N1c2VkID0gc3RhdGUuaXNQc2V1ZG9Gb2N1c2VkLFxuXHQgICAgaXNGb2N1c2VkID0gc3RhdGUuaXNGb2N1c2VkO1xuXHR2YXIgb25TZWxlY3RSZXNldHNJbnB1dCA9IHByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQ7XG5cblxuXHRyZXR1cm4gIWlucHV0VmFsdWUgfHwgIW9uU2VsZWN0UmVzZXRzSW5wdXQgJiYgIWlzT3BlbiAmJiAhaXNQc2V1ZG9Gb2N1c2VkICYmICFpc0ZvY3VzZWQ7XG59O1xuXG4vKipcbiAqIFJldHJpZXZlIGEgdmFsdWUgZnJvbSB0aGUgZ2l2ZW4gb3B0aW9ucyBhbmQgdmFsdWVLZXlcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcnxBcnJheX0gdmFsdWVcdC0gdGhlIHNlbGVjdGVkIHZhbHVlKHMpXG4gKiBAcGFyYW0ge09iamVjdH1cdFx0IHByb3BzXHQtIHRoZSBTZWxlY3QgY29tcG9uZW50J3MgcHJvcHMgKG9yIG5leHRQcm9wcylcbiAqL1xudmFyIGV4cGFuZFZhbHVlID0gZnVuY3Rpb24gZXhwYW5kVmFsdWUodmFsdWUsIHByb3BzKSB7XG5cdHZhciB2YWx1ZVR5cGUgPSB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKTtcblx0aWYgKHZhbHVlVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsdWVUeXBlICE9PSAnbnVtYmVyJyAmJiB2YWx1ZVR5cGUgIT09ICdib29sZWFuJykgcmV0dXJuIHZhbHVlO1xuXHR2YXIgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG5cdCAgICB2YWx1ZUtleSA9IHByb3BzLnZhbHVlS2V5O1xuXG5cdGlmICghb3B0aW9ucykgcmV0dXJuO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoU3RyaW5nKG9wdGlvbnNbaV1bdmFsdWVLZXldKSA9PT0gU3RyaW5nKHZhbHVlKSkgcmV0dXJuIG9wdGlvbnNbaV07XG5cdH1cbn07XG5cbnZhciBoYW5kbGVSZXF1aXJlZCA9IGZ1bmN0aW9uIGhhbmRsZVJlcXVpcmVkKHZhbHVlLCBtdWx0aSkge1xuXHRpZiAoIXZhbHVlKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIG11bHRpID8gdmFsdWUubGVuZ3RoID09PSAwIDogT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbn07XG5cbnZhciBTZWxlY3QgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoU2VsZWN0LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0KTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTZWxlY3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWxlY3QpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRbJ2NsZWFyVmFsdWUnLCAnZm9jdXNPcHRpb24nLCAnZ2V0T3B0aW9uTGFiZWwnLCAnaGFuZGxlSW5wdXRCbHVyJywgJ2hhbmRsZUlucHV0Q2hhbmdlJywgJ2hhbmRsZUlucHV0Rm9jdXMnLCAnaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZScsICdoYW5kbGVLZXlEb3duJywgJ2hhbmRsZU1lbnVTY3JvbGwnLCAnaGFuZGxlTW91c2VEb3duJywgJ2hhbmRsZU1vdXNlRG93bk9uQXJyb3cnLCAnaGFuZGxlTW91c2VEb3duT25NZW51JywgJ2hhbmRsZVRvdWNoRW5kJywgJ2hhbmRsZVRvdWNoRW5kQ2xlYXJWYWx1ZScsICdoYW5kbGVUb3VjaE1vdmUnLCAnaGFuZGxlVG91Y2hPdXRzaWRlJywgJ2hhbmRsZVRvdWNoU3RhcnQnLCAnaGFuZGxlVmFsdWVDbGljaycsICdvbk9wdGlvblJlZicsICdyZW1vdmVWYWx1ZScsICdzZWxlY3RWYWx1ZSddLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG5cdFx0XHRyZXR1cm4gX3RoaXNbZm5dID0gX3RoaXNbZm5dLmJpbmQoX3RoaXMpO1xuXHRcdH0pO1xuXG5cdFx0X3RoaXMuc3RhdGUgPSB7XG5cdFx0XHRpbnB1dFZhbHVlOiAnJyxcblx0XHRcdGlzRm9jdXNlZDogZmFsc2UsXG5cdFx0XHRpc09wZW46IGZhbHNlLFxuXHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiBmYWxzZSxcblx0XHRcdHJlcXVpcmVkOiBmYWxzZVxuXHRcdH07XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFNlbGVjdCwgW3tcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0XHR0aGlzLl9pbnN0YW5jZVByZWZpeCA9ICdyZWFjdC1zZWxlY3QtJyArICh0aGlzLnByb3BzLmluc3RhbmNlSWQgfHwgKytpbnN0YW5jZUlkKSArICctJztcblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5yZXF1aXJlZCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRyZXF1aXJlZDogaGFuZGxlUmVxdWlyZWQodmFsdWVBcnJheVswXSwgdGhpcy5wcm9wcy5tdWx0aSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wcm9wcy5hdXRvZm9jdXMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1dhcm5pbmc6IFRoZSBhdXRvZm9jdXMgcHJvcCBoYXMgY2hhbmdlZCB0byBhdXRvRm9jdXMsIHN1cHBvcnQgd2lsbCBiZSByZW1vdmVkIGFmdGVyIHJlYWN0LXNlbGVjdEAxLjAnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cyB8fCB0aGlzLnByb3BzLmF1dG9mb2N1cykge1xuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheShuZXh0UHJvcHMudmFsdWUsIG5leHRQcm9wcyk7XG5cblx0XHRcdGlmIChuZXh0UHJvcHMucmVxdWlyZWQpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0cmVxdWlyZWQ6IGhhbmRsZVJlcXVpcmVkKHZhbHVlQXJyYXlbMF0sIG5leHRQcm9wcy5tdWx0aSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMucmVxdWlyZWQpIHtcblx0XHRcdFx0Ly8gVXNlZCB0byBiZSByZXF1aXJlZCBidXQgaXQncyBub3QgYW55IG1vcmVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHJlcXVpcmVkOiBmYWxzZSB9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAmJiB0aGlzLnByb3BzLnZhbHVlICE9PSBuZXh0UHJvcHMudmFsdWUgJiYgbmV4dFByb3BzLm9uU2VsZWN0UmVzZXRzSW5wdXQpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSgnJykgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0XHQvLyBmb2N1cyB0byB0aGUgc2VsZWN0ZWQgb3B0aW9uXG5cdFx0XHRpZiAodGhpcy5tZW51ICYmIHRoaXMuZm9jdXNlZCAmJiB0aGlzLnN0YXRlLmlzT3BlbiAmJiAhdGhpcy5oYXNTY3JvbGxlZFRvT3B0aW9uKSB7XG5cdFx0XHRcdHZhciBmb2N1c2VkT3B0aW9uTm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMuZm9jdXNlZCk7XG5cdFx0XHRcdHZhciBtZW51Tm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMubWVudSk7XG5cblx0XHRcdFx0dmFyIHNjcm9sbFRvcCA9IG1lbnVOb2RlLnNjcm9sbFRvcDtcblx0XHRcdFx0dmFyIHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRvcCArIG1lbnVOb2RlLm9mZnNldEhlaWdodDtcblx0XHRcdFx0dmFyIG9wdGlvblRvcCA9IGZvY3VzZWRPcHRpb25Ob2RlLm9mZnNldFRvcDtcblx0XHRcdFx0dmFyIG9wdGlvbkJvdHRvbSA9IG9wdGlvblRvcCArIGZvY3VzZWRPcHRpb25Ob2RlLm9mZnNldEhlaWdodDtcblxuXHRcdFx0XHRpZiAoc2Nyb2xsVG9wID4gb3B0aW9uVG9wIHx8IHNjcm9sbEJvdHRvbSA8IG9wdGlvbkJvdHRvbSkge1xuXHRcdFx0XHRcdG1lbnVOb2RlLnNjcm9sbFRvcCA9IGZvY3VzZWRPcHRpb25Ob2RlLm9mZnNldFRvcDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlIHN0aWxsIHNldCBoYXNTY3JvbGxlZFRvT3B0aW9uIHRvIHRydWUgZXZlbiBpZiB3ZSBkaWRuJ3Rcblx0XHRcdFx0Ly8gYWN0dWFsbHkgbmVlZCB0byBzY3JvbGwsIGFzIHdlJ3ZlIHN0aWxsIGNvbmZpcm1lZCB0aGF0IHRoZVxuXHRcdFx0XHQvLyBvcHRpb24gaXMgaW4gdmlldy5cblx0XHRcdFx0dGhpcy5oYXNTY3JvbGxlZFRvT3B0aW9uID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoIXRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgJiYgdGhpcy5mb2N1c2VkICYmIHRoaXMubWVudSkge1xuXHRcdFx0XHR0aGlzLl9zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0XHR2YXIgZm9jdXNlZERPTSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMuZm9jdXNlZCk7XG5cdFx0XHRcdHZhciBtZW51RE9NID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcy5tZW51KTtcblx0XHRcdFx0dmFyIGZvY3VzZWRSZWN0ID0gZm9jdXNlZERPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0dmFyIG1lbnVSZWN0ID0gbWVudURPTS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0aWYgKGZvY3VzZWRSZWN0LmJvdHRvbSA+IG1lbnVSZWN0LmJvdHRvbSkge1xuXHRcdFx0XHRcdG1lbnVET00uc2Nyb2xsVG9wID0gZm9jdXNlZERPTS5vZmZzZXRUb3AgKyBmb2N1c2VkRE9NLmNsaWVudEhlaWdodCAtIG1lbnVET00ub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGZvY3VzZWRSZWN0LnRvcCA8IG1lbnVSZWN0LnRvcCkge1xuXHRcdFx0XHRcdG1lbnVET00uc2Nyb2xsVG9wID0gZm9jdXNlZERPTS5vZmZzZXRUb3A7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLnNjcm9sbE1lbnVJbnRvVmlldyAmJiB0aGlzLm1lbnVDb250YWluZXIpIHtcblx0XHRcdFx0dmFyIG1lbnVDb250YWluZXJSZWN0ID0gdGhpcy5tZW51Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRpZiAod2luZG93LmlubmVySGVpZ2h0IDwgbWVudUNvbnRhaW5lclJlY3QuYm90dG9tICsgdGhpcy5wcm9wcy5tZW51QnVmZmVyKSB7XG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbEJ5KDAsIG1lbnVDb250YWluZXJSZWN0LmJvdHRvbSArIHRoaXMucHJvcHMubWVudUJ1ZmZlciAtIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChwcmV2UHJvcHMuZGlzYWJsZWQgIT09IHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogZmFsc2UgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcblx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHRcdH1cblx0XHRcdGlmIChwcmV2U3RhdGUuaXNPcGVuICE9PSB0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHR0aGlzLnRvZ2dsZVRvdWNoT3V0c2lkZUV2ZW50KHRoaXMuc3RhdGUuaXNPcGVuKTtcblx0XHRcdFx0dmFyIGhhbmRsZXIgPSB0aGlzLnN0YXRlLmlzT3BlbiA/IHRoaXMucHJvcHMub25PcGVuIDogdGhpcy5wcm9wcy5vbkNsb3NlO1xuXHRcdFx0XHRoYW5kbGVyICYmIGhhbmRsZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFx0dGhpcy50b2dnbGVUb3VjaE91dHNpZGVFdmVudChmYWxzZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndG9nZ2xlVG91Y2hPdXRzaWRlRXZlbnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVUb3VjaE91dHNpZGVFdmVudChlbmFibGVkKSB7XG5cdFx0XHR2YXIgZXZlbnRUb2dnbGVyTmFtZSA9IGVuYWJsZWQgPyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ2F0dGFjaEV2ZW50JyA6IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIgPyAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgOiAnZGV0YWNoRXZlbnQnO1xuXHRcdFx0dmFyIHByZWYgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyID8gJycgOiAnb24nO1xuXG5cdFx0XHRkb2N1bWVudFtldmVudFRvZ2dsZXJOYW1lXShwcmVmICsgJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZVRvdWNoT3V0c2lkZSk7XG5cdFx0XHRkb2N1bWVudFtldmVudFRvZ2dsZXJOYW1lXShwcmVmICsgJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlVG91Y2hPdXRzaWRlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaE91dHNpZGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaE91dHNpZGUoZXZlbnQpIHtcblx0XHRcdC8vIGhhbmRsZSB0b3VjaCBvdXRzaWRlIG9uIGlvcyB0byBkaXNtaXNzIG1lbnVcblx0XHRcdGlmICh0aGlzLndyYXBwZXIgJiYgIXRoaXMud3JhcHBlci5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG5cdFx0XHRcdHRoaXMuY2xvc2VNZW51KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcblx0XHRcdGlmICghdGhpcy5pbnB1dCkgcmV0dXJuO1xuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2JsdXJJbnB1dCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGJsdXJJbnB1dCgpIHtcblx0XHRcdGlmICghdGhpcy5pbnB1dCkgcmV0dXJuO1xuXHRcdFx0dGhpcy5pbnB1dC5ibHVyKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hNb3ZlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKCkge1xuXHRcdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIGJlaW5nIGRyYWdnZWRcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoU3RhcnQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KCkge1xuXHRcdFx0Ly8gU2V0IGEgZmxhZyB0aGF0IHRoZSB2aWV3IGlzIG5vdCBiZWluZyBkcmFnZ2VkXG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hFbmQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChldmVudCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZCwgSW4gdGhpcyBjYXNlXG5cdFx0XHQvLyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgdGhlIGNsaWNrIGV2ZW50IChiZWNhdXNlIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gc2Nyb2xsKVxuXHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHJldHVybjtcblxuXHRcdFx0Ly8gRmlyZSB0aGUgbW91c2UgZXZlbnRzXG5cdFx0XHR0aGlzLmhhbmRsZU1vdXNlRG93bihldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlKGV2ZW50KSB7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkLCBJbiB0aGlzIGNhc2Vcblx0XHRcdC8vIHdlIGRvbid0IHdhbnQgdG8gZmlyZSB0aGUgY2xpY2sgZXZlbnQgKGJlY2F1c2UgdGhlIHVzZXIgb25seSB3YW50cyB0byBzY3JvbGwpXG5cdFx0XHRpZiAodGhpcy5kcmFnZ2luZykgcmV0dXJuO1xuXG5cdFx0XHQvLyBDbGVhciB0aGUgdmFsdWVcblx0XHRcdHRoaXMuY2xlYXJWYWx1ZShldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG5cdFx0XHQvLyBpZiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBieSBhIG1vdXNlZG93biBhbmQgbm90IHRoZSBwcmltYXJ5XG5cdFx0XHQvLyBidXR0b24sIG9yIGlmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGlnbm9yZSBpdC5cblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xuXHRcdFx0XHRpZiAoIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdFx0dGhpcy5fb3BlbkFmdGVyRm9jdXMgPSB0aGlzLnByb3BzLm9wZW5PbkNsaWNrO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0fSBlbHNlIGlmICghdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdGlzT3BlbjogdHJ1ZSxcblx0XHRcdFx0XHRcdGlzUHNldWRvRm9jdXNlZDogZmFsc2UsXG5cdFx0XHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBudWxsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIHByZXZlbnQgZGVmYXVsdCBldmVudCBoYW5kbGVyc1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Ly8gZm9yIHRoZSBub24tc2VhcmNoYWJsZSBzZWxlY3QsIHRvZ2dsZSB0aGUgbWVudVxuXHRcdFx0aWYgKCF0aGlzLnByb3BzLnNlYXJjaGFibGUpIHtcblx0XHRcdFx0Ly8gVGhpcyBjb2RlIG1lYW5zIHRoYXQgaWYgYSBzZWxlY3QgaXMgc2VhcmNoYWJsZSwgb25DbGljayB0aGUgb3B0aW9ucyBtZW51IHdpbGwgbm90IGFwcGVhciwgb25seSBvbiBzdWJzZXF1ZW50IGNsaWNrIHdpbGwgaXQgb3Blbi5cblx0XHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0aXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW4sXG5cdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbjogbnVsbFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdC8vIE9uIGlPUywgd2UgY2FuIGdldCBpbnRvIGEgc3RhdGUgd2hlcmUgd2UgdGhpbmsgdGhlIGlucHV0IGlzIGZvY3VzZWQgYnV0IGl0IGlzbid0IHJlYWxseSxcblx0XHRcdFx0Ly8gc2luY2UgaU9TIGlnbm9yZXMgcHJvZ3JhbW1hdGljIGNhbGxzIHRvIGlucHV0LmZvY3VzKCkgdGhhdCB3ZXJlbid0IHRyaWdnZXJlZCBieSBhIGNsaWNrIGV2ZW50LlxuXHRcdFx0XHQvLyBDYWxsIGZvY3VzKCkgYWdhaW4gaGVyZSB0byBiZSBzYWZlLlxuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cblx0XHRcdFx0dmFyIGlucHV0ID0gdGhpcy5pbnB1dDtcblx0XHRcdFx0dmFyIHRvT3BlbiA9IHRydWU7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBpbnB1dC5nZXRJbnB1dCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdC8vIEdldCB0aGUgYWN0dWFsIERPTSBpbnB1dCBpZiB0aGUgcmVmIGlzIGFuIDxBdXRvc2l6ZUlucHV0IC8+IGNvbXBvbmVudFxuXHRcdFx0XHRcdGlucHV0ID0gaW5wdXQuZ2V0SW5wdXQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGNsZWFycyB0aGUgdmFsdWUgc28gdGhhdCB0aGUgY3Vyc29yIHdpbGwgYmUgYXQgdGhlIGVuZCBvZiBpbnB1dCB3aGVuIHRoZSBjb21wb25lbnQgcmUtcmVuZGVyc1xuXHRcdFx0XHRpbnB1dC52YWx1ZSA9ICcnO1xuXG5cdFx0XHRcdGlmICh0aGlzLl9mb2N1c0FmdGVyQ2xlYXIpIHtcblx0XHRcdFx0XHR0b09wZW4gPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLl9mb2N1c0FmdGVyQ2xlYXIgPSBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGlmIHRoZSBpbnB1dCBpcyBmb2N1c2VkLCBlbnN1cmUgdGhlIG1lbnUgaXMgb3BlblxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc09wZW46IHRvT3Blbixcblx0XHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IG51bGxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBvdGhlcndpc2UsIGZvY3VzIHRoZSBpbnB1dCBhbmQgb3BlbiB0aGUgbWVudVxuXHRcdFx0XHR0aGlzLl9vcGVuQWZ0ZXJGb2N1cyA9IHRoaXMucHJvcHMub3Blbk9uQ2xpY2s7XG5cdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRPcHRpb246IG51bGwgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duT25BcnJvdycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bk9uQXJyb3coZXZlbnQpIHtcblx0XHRcdC8vIGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgbW91c2Vkb3duIGFuZCBub3QgdGhlIHByaW1hcnlcblx0XHRcdC8vIGJ1dHRvbiwgb3IgaWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgaWdub3JlIGl0LlxuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdC8vIHByZXZlbnQgZGVmYXVsdCBldmVudCBoYW5kbGVyc1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Ly8gY2xvc2UgdGhlIG1lbnVcblx0XHRcdFx0dGhpcy5jbG9zZU1lbnUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIElmIHRoZSBtZW51IGlzbid0IG9wZW4sIGxldCB0aGUgZXZlbnQgYnViYmxlIHRvIHRoZSBtYWluIGhhbmRsZU1vdXNlRG93blxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpc09wZW46IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duT25NZW51Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duT25NZW51KGV2ZW50KSB7XG5cdFx0XHQvLyBpZiB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBieSBhIG1vdXNlZG93biBhbmQgbm90IHRoZSBwcmltYXJ5XG5cdFx0XHQvLyBidXR0b24sIG9yIGlmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGlnbm9yZSBpdC5cblx0XHRcdGlmICh0aGlzLnByb3BzLmRpc2FibGVkIHx8IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpcy5fb3BlbkFmdGVyRm9jdXMgPSB0cnVlO1xuXHRcdFx0dGhpcy5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2Nsb3NlTWVudScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLm9uQ2xvc2VSZXNldHNJbnB1dCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpbnB1dFZhbHVlOiB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UoJycpLFxuXHRcdFx0XHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiB0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiAhdGhpcy5wcm9wcy5tdWx0aVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlzT3BlbjogZmFsc2UsXG5cdFx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiB0aGlzLnN0YXRlLmlzRm9jdXNlZCAmJiAhdGhpcy5wcm9wcy5tdWx0aVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUlucHV0Rm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVJbnB1dEZvY3VzKGV2ZW50KSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG5cdFx0XHR2YXIgdG9PcGVuID0gdGhpcy5zdGF0ZS5pc09wZW4gfHwgdGhpcy5fb3BlbkFmdGVyRm9jdXMgfHwgdGhpcy5wcm9wcy5vcGVuT25Gb2N1cztcblx0XHRcdHRvT3BlbiA9IHRoaXMuX2ZvY3VzQWZ0ZXJDbGVhciA/IGZhbHNlIDogdG9PcGVuOyAvL2lmIGZvY3VzIGhhcHBlbnMgYWZ0ZXIgY2xlYXIgdmFsdWVzLCBkb24ndCBvcGVuIGRyb3Bkb3duIHlldC5cblxuXHRcdFx0aWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aXNGb2N1c2VkOiB0cnVlLFxuXHRcdFx0XHRpc09wZW46ICEhdG9PcGVuXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5fZm9jdXNBZnRlckNsZWFyID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUlucHV0Qmx1cicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUlucHV0Qmx1cihldmVudCkge1xuXHRcdFx0Ly8gVGhlIGNoZWNrIGZvciBtZW51LmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IElFMTEncyBzY3JvbGxiYXIgZnJvbSBjbG9zaW5nIHRoZSBtZW51IGluIGNlcnRhaW4gY29udGV4dHMuXG5cdFx0XHRpZiAodGhpcy5tZW51ICYmICh0aGlzLm1lbnUgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgfHwgdGhpcy5tZW51LmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSkge1xuXHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcblx0XHRcdH1cblx0XHRcdHZhciBvbkJsdXJyZWRTdGF0ZSA9IHtcblx0XHRcdFx0aXNGb2N1c2VkOiBmYWxzZSxcblx0XHRcdFx0aXNPcGVuOiBmYWxzZSxcblx0XHRcdFx0aXNQc2V1ZG9Gb2N1c2VkOiBmYWxzZVxuXHRcdFx0fTtcblx0XHRcdGlmICh0aGlzLnByb3BzLm9uQmx1clJlc2V0c0lucHV0KSB7XG5cdFx0XHRcdG9uQmx1cnJlZFN0YXRlLmlucHV0VmFsdWUgPSB0aGlzLmhhbmRsZUlucHV0VmFsdWVDaGFuZ2UoJycpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZShvbkJsdXJyZWRTdGF0ZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlSW5wdXRDaGFuZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuXHRcdFx0dmFyIG5ld0lucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cblx0XHRcdGlmICh0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xuXHRcdFx0XHRuZXdJbnB1dFZhbHVlID0gdGhpcy5oYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKG5ld0lucHV0VmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5wdXRWYWx1ZTogbmV3SW5wdXRWYWx1ZSxcblx0XHRcdFx0aXNPcGVuOiB0cnVlLFxuXHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IGZhbHNlXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzZXRJbnB1dFZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2V0SW5wdXRWYWx1ZShuZXdWYWx1ZSkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMub25JbnB1dENoYW5nZSkge1xuXHRcdFx0XHR2YXIgbmV4dFN0YXRlID0gdGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKG5ld1ZhbHVlKTtcblx0XHRcdFx0aWYgKG5leHRTdGF0ZSAhPSBudWxsICYmICh0eXBlb2YgbmV4dFN0YXRlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuZXh0U3RhdGUpKSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRuZXdWYWx1ZSA9ICcnICsgbmV4dFN0YXRlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aW5wdXRWYWx1ZTogbmV3VmFsdWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZUlucHV0VmFsdWVDaGFuZ2UnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVJbnB1dFZhbHVlQ2hhbmdlKG5ld1ZhbHVlKSB7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlKSB7XG5cdFx0XHRcdHZhciBuZXh0U3RhdGUgPSB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UobmV3VmFsdWUpO1xuXHRcdFx0XHQvLyBOb3RlOiAhPSB1c2VkIGRlbGliZXJhdGVseSBoZXJlIHRvIGNhdGNoIHVuZGVmaW5lZCBhbmQgbnVsbFxuXHRcdFx0XHRpZiAobmV4dFN0YXRlICE9IG51bGwgJiYgKHR5cGVvZiBuZXh0U3RhdGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5leHRTdGF0ZSkpICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRcdG5ld1ZhbHVlID0gJycgKyBuZXh0U3RhdGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXdWYWx1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVLZXlEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uSW5wdXRLZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25JbnB1dEtleURvd24oZXZlbnQpO1xuXHRcdFx0XHRpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcblx0XHRcdFx0Y2FzZSA4OlxuXHRcdFx0XHRcdC8vIGJhY2tzcGFjZVxuXHRcdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMucHJvcHMuYmFja3NwYWNlUmVtb3Zlcykge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRoaXMucG9wVmFsdWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgOTpcblx0XHRcdFx0XHQvLyB0YWJcblx0XHRcdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkgfHwgIXRoaXMuc3RhdGUuaXNPcGVuIHx8ICF0aGlzLnByb3BzLnRhYlNlbGVjdHNWYWx1ZSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RGb2N1c2VkT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTM6XG5cdFx0XHRcdFx0Ly8gZW50ZXJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdGlmICh0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3RGb2N1c2VkT3B0aW9uKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZm9jdXNOZXh0T3B0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDI3OlxuXHRcdFx0XHRcdC8vIGVzY2FwZVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUuaXNPcGVuKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNsb3NlTWVudSgpO1xuXHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmNsZWFyYWJsZSAmJiB0aGlzLnByb3BzLmVzY2FwZUNsZWFyc1ZhbHVlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNsZWFyVmFsdWUoZXZlbnQpO1xuXHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDMyOlxuXHRcdFx0XHRcdC8vIHNwYWNlXG5cdFx0XHRcdFx0aWYgKHRoaXMucHJvcHMuc2VhcmNoYWJsZSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLnN0YXRlLmlzT3Blbikge1xuXHRcdFx0XHRcdFx0dGhpcy5mb2N1c05leHRPcHRpb24oKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdEZvY3VzZWRPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0XHQvLyB1cFxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1c1ByZXZpb3VzT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdFx0Ly8gZG93blxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5mb2N1c05leHRPcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzMzpcblx0XHRcdFx0XHQvLyBwYWdlIHVwXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzUGFnZVVwT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzQ6XG5cdFx0XHRcdFx0Ly8gcGFnZSBkb3duXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzUGFnZURvd25PcHRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzNTpcblx0XHRcdFx0XHQvLyBlbmQga2V5XG5cdFx0XHRcdFx0aWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLmZvY3VzRW5kT3B0aW9uKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzY6XG5cdFx0XHRcdFx0Ly8gaG9tZSBrZXlcblx0XHRcdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMuZm9jdXNTdGFydE9wdGlvbigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQ2OlxuXHRcdFx0XHRcdC8vIGRlbGV0ZVxuXHRcdFx0XHRcdGlmICghdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMucHJvcHMuZGVsZXRlUmVtb3Zlcykge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHRoaXMucG9wVmFsdWUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVmFsdWVDbGljaycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVZhbHVlQ2xpY2sob3B0aW9uLCBldmVudCkge1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLm9uVmFsdWVDbGljaykgcmV0dXJuO1xuXHRcdFx0dGhpcy5wcm9wcy5vblZhbHVlQ2xpY2sob3B0aW9uLCBldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlTWVudVNjcm9sbCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1lbnVTY3JvbGwoZXZlbnQpIHtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5vbk1lbnVTY3JvbGxUb0JvdHRvbSkgcmV0dXJuO1xuXHRcdFx0dmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuXHRcdFx0aWYgKHRhcmdldC5zY3JvbGxIZWlnaHQgPiB0YXJnZXQub2Zmc2V0SGVpZ2h0ICYmIHRhcmdldC5zY3JvbGxIZWlnaHQgLSB0YXJnZXQub2Zmc2V0SGVpZ2h0IC0gdGFyZ2V0LnNjcm9sbFRvcCA8PSAwKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25NZW51U2Nyb2xsVG9Cb3R0b20oKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRPcHRpb25MYWJlbCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKG9wKSB7XG5cdFx0XHRyZXR1cm4gb3BbdGhpcy5wcm9wcy5sYWJlbEtleV07XG5cdFx0fVxuXG5cdFx0LyoqXG4gICAqIFR1cm5zIGEgdmFsdWUgaW50byBhbiBhcnJheSBmcm9tIHRoZSBnaXZlbiBvcHRpb25zXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcnxBcnJheX0gdmFsdWVcdFx0LSB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdCBpbnB1dFxuICAgKiBAcGFyYW0ge09iamVjdH1cdFx0bmV4dFByb3BzXHQtIG9wdGlvbmFsbHkgc3BlY2lmeSB0aGUgbmV4dFByb3BzIHNvIHRoZSByZXR1cm5lZCBhcnJheSB1c2VzIHRoZSBsYXRlc3QgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuc1x0e0FycmF5fVx0dGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QgcmVwcmVzZW50ZWQgaW4gYW4gYXJyYXlcbiAgICovXG5cblx0fSwge1xuXHRcdGtleTogJ2dldFZhbHVlQXJyYXknLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZUFycmF5KHZhbHVlKSB7XG5cdFx0XHR2YXIgbmV4dFByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cblx0XHRcdC8qKiBzdXBwb3J0IG9wdGlvbmFsbHkgcGFzc2luZyBpbiB0aGUgYG5leHRQcm9wc2Agc28gYGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNgIHVwZGF0ZXMgd2lsbCBmdW5jdGlvbiBhcyBleHBlY3RlZCAqL1xuXHRcdFx0dmFyIHByb3BzID0gKHR5cGVvZiBuZXh0UHJvcHMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG5leHRQcm9wcykpID09PSAnb2JqZWN0JyA/IG5leHRQcm9wcyA6IHRoaXMucHJvcHM7XG5cdFx0XHRpZiAocHJvcHMubXVsdGkpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnNwbGl0KHByb3BzLmRlbGltaXRlcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW107XG5cdFx0XHRcdFx0dmFsdWUgPSBbdmFsdWVdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGV4cGFuZFZhbHVlKHZhbHVlLCBwcm9wcyk7XG5cdFx0XHRcdH0pLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHZhciBleHBhbmRlZFZhbHVlID0gZXhwYW5kVmFsdWUodmFsdWUsIHByb3BzKTtcblx0XHRcdHJldHVybiBleHBhbmRlZFZhbHVlID8gW2V4cGFuZGVkVmFsdWVdIDogW107XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2V0VmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdGlmICh0aGlzLnByb3BzLmF1dG9CbHVyKSB7XG5cdFx0XHRcdHRoaXMuYmx1cklucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5yZXF1aXJlZCkge1xuXHRcdFx0XHR2YXIgcmVxdWlyZWQgPSBoYW5kbGVSZXF1aXJlZCh2YWx1ZSwgdGhpcy5wcm9wcy5tdWx0aSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyByZXF1aXJlZDogcmVxdWlyZWQgfSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5zaW1wbGVWYWx1ZSAmJiB2YWx1ZSkge1xuXHRcdFx0XHR2YWx1ZSA9IHRoaXMucHJvcHMubXVsdGkgPyB2YWx1ZS5tYXAoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gaVtfdGhpczIucHJvcHMudmFsdWVLZXldO1xuXHRcdFx0XHR9KS5qb2luKHRoaXMucHJvcHMuZGVsaW1pdGVyKSA6IHZhbHVlW3RoaXMucHJvcHMudmFsdWVLZXldO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2VsZWN0VmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RWYWx1ZSh2YWx1ZSkge1xuXHRcdFx0dmFyIF90aGlzMyA9IHRoaXM7XG5cblx0XHRcdC8vIE5PVEU6IHdlIGFjdHVhbGx5IGFkZC9zZXQgdGhlIHZhbHVlIGluIGEgY2FsbGJhY2sgdG8gbWFrZSBzdXJlIHRoZVxuXHRcdFx0Ly8gaW5wdXQgdmFsdWUgaXMgZW1wdHkgdG8gYXZvaWQgc3R5bGluZyBpc3N1ZXMgaW4gQ2hyb21lXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG5cdFx0XHRcdHRoaXMuaGFzU2Nyb2xsZWRUb09wdGlvbiA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHVwZGF0ZWRWYWx1ZSA9IHRoaXMucHJvcHMub25TZWxlY3RSZXNldHNJbnB1dCA/ICcnIDogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMubXVsdGkpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4OiBudWxsLFxuXHRcdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSh1cGRhdGVkVmFsdWUpLFxuXHRcdFx0XHRcdGlzT3BlbjogIXRoaXMucHJvcHMuY2xvc2VPblNlbGVjdFxuXHRcdFx0XHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dmFyIHZhbHVlQXJyYXkgPSBfdGhpczMuZ2V0VmFsdWVBcnJheShfdGhpczMucHJvcHMudmFsdWUpO1xuXHRcdFx0XHRcdGlmICh2YWx1ZUFycmF5LnNvbWUoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBpW190aGlzMy5wcm9wcy52YWx1ZUtleV0gPT09IHZhbHVlW190aGlzMy5wcm9wcy52YWx1ZUtleV07XG5cdFx0XHRcdFx0fSkpIHtcblx0XHRcdFx0XHRcdF90aGlzMy5yZW1vdmVWYWx1ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF90aGlzMy5hZGRWYWx1ZSh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSh1cGRhdGVkVmFsdWUpLFxuXHRcdFx0XHRcdGlzT3BlbjogIXRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCxcblx0XHRcdFx0XHRpc1BzZXVkb0ZvY3VzZWQ6IHRoaXMuc3RhdGUuaXNGb2N1c2VkXG5cdFx0XHRcdH0sIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRfdGhpczMuc2V0VmFsdWUodmFsdWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdhZGRWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGFkZFZhbHVlKHZhbHVlKSB7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdHZhciB2aXNpYmxlT3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdHJldHVybiAhdmFsLmRpc2FibGVkO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgbGFzdFZhbHVlSW5kZXggPSB2aXNpYmxlT3B0aW9ucy5pbmRleE9mKHZhbHVlKTtcblx0XHRcdHRoaXMuc2V0VmFsdWUodmFsdWVBcnJheS5jb25jYXQodmFsdWUpKTtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh2aXNpYmxlT3B0aW9ucy5sZW5ndGggLSAxID09PSBsYXN0VmFsdWVJbmRleCkge1xuXHRcdFx0XHQvLyB0aGUgbGFzdCBvcHRpb24gd2FzIHNlbGVjdGVkOyBmb2N1cyB0aGUgc2Vjb25kLWxhc3Qgb25lXG5cdFx0XHRcdHRoaXMuZm9jdXNPcHRpb24odmlzaWJsZU9wdGlvbnNbbGFzdFZhbHVlSW5kZXggLSAxXSk7XG5cdFx0XHR9IGVsc2UgaWYgKHZpc2libGVPcHRpb25zLmxlbmd0aCA+IGxhc3RWYWx1ZUluZGV4KSB7XG5cdFx0XHRcdC8vIGZvY3VzIHRoZSBvcHRpb24gYmVsb3cgdGhlIHNlbGVjdGVkIG9uZVxuXHRcdFx0XHR0aGlzLmZvY3VzT3B0aW9uKHZpc2libGVPcHRpb25zW2xhc3RWYWx1ZUluZGV4ICsgMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3BvcFZhbHVlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcG9wVmFsdWUoKSB7XG5cdFx0XHR2YXIgdmFsdWVBcnJheSA9IHRoaXMuZ2V0VmFsdWVBcnJheSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHRcdGlmICghdmFsdWVBcnJheS5sZW5ndGgpIHJldHVybjtcblx0XHRcdGlmICh2YWx1ZUFycmF5W3ZhbHVlQXJyYXkubGVuZ3RoIC0gMV0uY2xlYXJhYmxlVmFsdWUgPT09IGZhbHNlKSByZXR1cm47XG5cdFx0XHR0aGlzLnNldFZhbHVlKHRoaXMucHJvcHMubXVsdGkgPyB2YWx1ZUFycmF5LnNsaWNlKDAsIHZhbHVlQXJyYXkubGVuZ3RoIC0gMSkgOiBudWxsKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW1vdmVWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVZhbHVlKHZhbHVlKSB7XG5cdFx0XHR2YXIgX3RoaXM0ID0gdGhpcztcblxuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0XHR0aGlzLnNldFZhbHVlKHZhbHVlQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdHJldHVybiBpW190aGlzNC5wcm9wcy52YWx1ZUtleV0gIT09IHZhbHVlW190aGlzNC5wcm9wcy52YWx1ZUtleV07XG5cdFx0XHR9KSk7XG5cdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY2xlYXJWYWx1ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNsZWFyVmFsdWUoZXZlbnQpIHtcblx0XHRcdC8vIGlmIHRoZSBldmVudCB3YXMgdHJpZ2dlcmVkIGJ5IGEgbW91c2Vkb3duIGFuZCBub3QgdGhlIHByaW1hcnlcblx0XHRcdC8vIGJ1dHRvbiwgaWdub3JlIGl0LlxuXHRcdFx0aWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRoaXMuc2V0VmFsdWUodGhpcy5nZXRSZXNldFZhbHVlKCkpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGlucHV0VmFsdWU6IHRoaXMuaGFuZGxlSW5wdXRWYWx1ZUNoYW5nZSgnJyksXG5cdFx0XHRcdGlzT3BlbjogZmFsc2Vcblx0XHRcdH0sIHRoaXMuZm9jdXMpO1xuXG5cdFx0XHR0aGlzLl9mb2N1c0FmdGVyQ2xlYXIgPSB0cnVlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldFJlc2V0VmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRSZXNldFZhbHVlKCkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMucmVzZXRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzLnJlc2V0VmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucHJvcHMubXVsdGkpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c09wdGlvbihvcHRpb24pIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBvcHRpb25cblx0XHRcdH0pO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzTmV4dE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzTmV4dE9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbignbmV4dCcpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzUHJldmlvdXNPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c1ByZXZpb3VzT3B0aW9uKCkge1xuXHRcdFx0dGhpcy5mb2N1c0FkamFjZW50T3B0aW9uKCdwcmV2aW91cycpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzUGFnZVVwT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNQYWdlVXBPcHRpb24oKSB7XG5cdFx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ3BhZ2VfdXAnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1c1BhZ2VEb3duT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXNQYWdlRG93bk9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbigncGFnZV9kb3duJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNTdGFydE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzU3RhcnRPcHRpb24oKSB7XG5cdFx0XHR0aGlzLmZvY3VzQWRqYWNlbnRPcHRpb24oJ3N0YXJ0Jyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNFbmRPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb2N1c0VuZE9wdGlvbigpIHtcblx0XHRcdHRoaXMuZm9jdXNBZGphY2VudE9wdGlvbignZW5kJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZm9jdXNBZGphY2VudE9wdGlvbicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzQWRqYWNlbnRPcHRpb24oZGlyKSB7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4geyBvcHRpb246IG9wdGlvbiwgaW5kZXg6IGluZGV4IH07XG5cdFx0XHR9KS5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuXHRcdFx0XHRyZXR1cm4gIW9wdGlvbi5vcHRpb24uZGlzYWJsZWQ7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuX3Njcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gdHJ1ZTtcblx0XHRcdGlmICghdGhpcy5zdGF0ZS5pc09wZW4pIHtcblx0XHRcdFx0dmFyIG5ld1N0YXRlID0ge1xuXHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IHRoaXMuX2ZvY3VzZWRPcHRpb24gfHwgKG9wdGlvbnMubGVuZ3RoID8gb3B0aW9uc1tkaXIgPT09ICduZXh0JyA/IDAgOiBvcHRpb25zLmxlbmd0aCAtIDFdLm9wdGlvbiA6IG51bGwpLFxuXHRcdFx0XHRcdGlzT3BlbjogdHJ1ZVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5vblNlbGVjdFJlc2V0c0lucHV0KSB7XG5cdFx0XHRcdFx0bmV3U3RhdGUuaW5wdXRWYWx1ZSA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW9wdGlvbnMubGVuZ3RoKSByZXR1cm47XG5cdFx0XHR2YXIgZm9jdXNlZEluZGV4ID0gLTE7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHRoaXMuX2ZvY3VzZWRPcHRpb24gPT09IG9wdGlvbnNbaV0ub3B0aW9uKSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRpciA9PT0gJ25leHQnICYmIGZvY3VzZWRJbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gKGZvY3VzZWRJbmRleCArIDEpICUgb3B0aW9ucy5sZW5ndGg7XG5cdFx0XHR9IGVsc2UgaWYgKGRpciA9PT0gJ3ByZXZpb3VzJykge1xuXHRcdFx0XHRpZiAoZm9jdXNlZEluZGV4ID4gMCkge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IGZvY3VzZWRJbmRleCAtIDE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGRpciA9PT0gJ3N0YXJ0Jykge1xuXHRcdFx0XHRmb2N1c2VkSW5kZXggPSAwO1xuXHRcdFx0fSBlbHNlIGlmIChkaXIgPT09ICdlbmQnKSB7XG5cdFx0XHRcdGZvY3VzZWRJbmRleCA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdH0gZWxzZSBpZiAoZGlyID09PSAncGFnZV91cCcpIHtcblx0XHRcdFx0dmFyIHBvdGVudGlhbEluZGV4ID0gZm9jdXNlZEluZGV4IC0gdGhpcy5wcm9wcy5wYWdlU2l6ZTtcblx0XHRcdFx0aWYgKHBvdGVudGlhbEluZGV4IDwgMCkge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IDA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gcG90ZW50aWFsSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZGlyID09PSAncGFnZV9kb3duJykge1xuXHRcdFx0XHR2YXIgX3BvdGVudGlhbEluZGV4ID0gZm9jdXNlZEluZGV4ICsgdGhpcy5wcm9wcy5wYWdlU2l6ZTtcblx0XHRcdFx0aWYgKF9wb3RlbnRpYWxJbmRleCA+IG9wdGlvbnMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdGZvY3VzZWRJbmRleCA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb2N1c2VkSW5kZXggPSBfcG90ZW50aWFsSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGZvY3VzZWRJbmRleCA9PT0gLTEpIHtcblx0XHRcdFx0Zm9jdXNlZEluZGV4ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGZvY3VzZWRJbmRleDogb3B0aW9uc1tmb2N1c2VkSW5kZXhdLmluZGV4LFxuXHRcdFx0XHRmb2N1c2VkT3B0aW9uOiBvcHRpb25zW2ZvY3VzZWRJbmRleF0ub3B0aW9uXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRGb2N1c2VkT3B0aW9uJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0Rm9jdXNlZE9wdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLl9mb2N1c2VkT3B0aW9uO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3NlbGVjdEZvY3VzZWRPcHRpb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RGb2N1c2VkT3B0aW9uKCkge1xuXHRcdFx0aWYgKHRoaXMuX2ZvY3VzZWRPcHRpb24pIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VsZWN0VmFsdWUodGhpcy5fZm9jdXNlZE9wdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyTG9hZGluZycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxvYWRpbmcoKSB7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuaXNMb2FkaW5nKSByZXR1cm47XG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3QtbG9hZGluZy16b25lJywgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0sXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdTZWxlY3QtbG9hZGluZycgfSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyVmFsdWUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJWYWx1ZSh2YWx1ZUFycmF5LCBpc09wZW4pIHtcblx0XHRcdHZhciBfdGhpczUgPSB0aGlzO1xuXG5cdFx0XHR2YXIgcmVuZGVyTGFiZWwgPSB0aGlzLnByb3BzLnZhbHVlUmVuZGVyZXIgfHwgdGhpcy5nZXRPcHRpb25MYWJlbDtcblx0XHRcdHZhciBWYWx1ZUNvbXBvbmVudCA9IHRoaXMucHJvcHMudmFsdWVDb21wb25lbnQ7XG5cdFx0XHRpZiAoIXZhbHVlQXJyYXkubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBzaG93UGxhY2Vob2xkZXIgPSBzaG91bGRTaG93UGxhY2Vob2xkZXIodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcywgaXNPcGVuKTtcblx0XHRcdFx0cmV0dXJuIHNob3dQbGFjZWhvbGRlciA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnU2VsZWN0LXBsYWNlaG9sZGVyJyB9LFxuXHRcdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXJcblx0XHRcdFx0KSA6IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR2YXIgb25DbGljayA9IHRoaXMucHJvcHMub25WYWx1ZUNsaWNrID8gdGhpcy5oYW5kbGVWYWx1ZUNsaWNrIDogbnVsbDtcblx0XHRcdGlmICh0aGlzLnByb3BzLm11bHRpKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZUFycmF5Lm1hcChmdW5jdGlvbiAodmFsdWUsIGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRWYWx1ZUNvbXBvbmVudCxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IF90aGlzNS5wcm9wcy5kaXNhYmxlZCB8fCB2YWx1ZS5jbGVhcmFibGVWYWx1ZSA9PT0gZmFsc2UsXG5cdFx0XHRcdFx0XHRcdGlkOiBfdGhpczUuX2luc3RhbmNlUHJlZml4ICsgJy12YWx1ZS0nICsgaSxcblx0XHRcdFx0XHRcdFx0aW5zdGFuY2VQcmVmaXg6IF90aGlzNS5faW5zdGFuY2VQcmVmaXgsXG5cdFx0XHRcdFx0XHRcdGtleTogJ3ZhbHVlLScgKyBpICsgJy0nICsgdmFsdWVbX3RoaXM1LnByb3BzLnZhbHVlS2V5XSxcblx0XHRcdFx0XHRcdFx0b25DbGljazogb25DbGljayxcblx0XHRcdFx0XHRcdFx0b25SZW1vdmU6IF90aGlzNS5yZW1vdmVWYWx1ZSxcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IF90aGlzNS5wcm9wcy5wbGFjZWhvbGRlcixcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZXM6IHZhbHVlQXJyYXlcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRyZW5kZXJMYWJlbCh2YWx1ZSwgaSksXG5cdFx0XHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1hcmlhLW9ubHknIH0sXG5cdFx0XHRcdFx0XHRcdCdcXHhBMCdcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAoc2hvdWxkU2hvd1ZhbHVlKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMpKSB7XG5cdFx0XHRcdGlmIChpc09wZW4pIG9uQ2xpY2sgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0VmFsdWVDb21wb25lbnQsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG5cdFx0XHRcdFx0XHRpZDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlLWl0ZW0nLFxuXHRcdFx0XHRcdFx0aW5zdGFuY2VQcmVmaXg6IHRoaXMuX2luc3RhbmNlUHJlZml4LFxuXHRcdFx0XHRcdFx0b25DbGljazogb25DbGljayxcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyLFxuXHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlQXJyYXlbMF1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlbmRlckxhYmVsKHZhbHVlQXJyYXlbMF0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVySW5wdXQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dCh2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uSW5kZXgpIHtcblx0XHRcdHZhciBfY2xhc3NOYW1lcyxcblx0XHRcdCAgICBfdGhpczYgPSB0aGlzO1xuXG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgnU2VsZWN0LWlucHV0JywgdGhpcy5wcm9wcy5pbnB1dFByb3BzLmNsYXNzTmFtZSk7XG5cdFx0XHR2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG5cblx0XHRcdHZhciBhcmlhT3ducyA9ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLWxpc3QnLCBpc09wZW4pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1iYWNrc3BhY2UtcmVtb3ZlLW1lc3NhZ2UnLCB0aGlzLnByb3BzLm11bHRpICYmICF0aGlzLnByb3BzLmRpc2FibGVkICYmIHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmICF0aGlzLnN0YXRlLmlucHV0VmFsdWUpLCBfY2xhc3NOYW1lcykpO1xuXG5cdFx0XHR2YXIgdmFsdWUgPSB0aGlzLnN0YXRlLmlucHV0VmFsdWU7XG5cdFx0XHRpZiAodmFsdWUgJiYgIXRoaXMucHJvcHMub25TZWxlY3RSZXNldHNJbnB1dCAmJiAhdGhpcy5zdGF0ZS5pc0ZvY3VzZWQpIHtcblx0XHRcdFx0Ly8gaXQgaGlkZXMgaW5wdXQgdmFsdWUgd2hlbiBpdCBpcyBub3QgZm9jdXNlZCBhbmQgd2FzIG5vdCByZXNldCBvbiBzZWxlY3Rcblx0XHRcdFx0dmFsdWUgPSAnJztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGlucHV0UHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5pbnB1dFByb3BzLCB7XG5cdFx0XHRcdCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBpc09wZW4gPyB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctb3B0aW9uLScgKyBmb2N1c2VkT3B0aW9uSW5kZXggOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctdmFsdWUnLFxuXHRcdFx0XHQnYXJpYS1kZXNjcmliZWRieSc6IHRoaXMucHJvcHNbJ2FyaWEtZGVzY3JpYmVkYnknXSxcblx0XHRcdFx0J2FyaWEtZXhwYW5kZWQnOiAnJyArIGlzT3Blbixcblx0XHRcdFx0J2FyaWEtaGFzcG9wdXAnOiAnJyArIGlzT3Blbixcblx0XHRcdFx0J2FyaWEtbGFiZWwnOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsJ10sXG5cdFx0XHRcdCdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzWydhcmlhLWxhYmVsbGVkYnknXSxcblx0XHRcdFx0J2FyaWEtb3ducyc6IGFyaWFPd25zLFxuXHRcdFx0XHRvbkJsdXI6IHRoaXMuaGFuZGxlSW5wdXRCbHVyLFxuXHRcdFx0XHRvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSxcblx0XHRcdFx0b25Gb2N1czogdGhpcy5oYW5kbGVJbnB1dEZvY3VzLFxuXHRcdFx0XHRyZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG5cdFx0XHRcdFx0cmV0dXJuIF90aGlzNi5pbnB1dCA9IF9yZWY7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJvbGU6ICdjb21ib2JveCcsXG5cdFx0XHRcdHJlcXVpcmVkOiB0aGlzLnN0YXRlLnJlcXVpcmVkLFxuXHRcdFx0XHR0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleCxcblx0XHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKHRoaXMucHJvcHMuaW5wdXRSZW5kZXJlcikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5pbnB1dFJlbmRlcmVyKGlucHV0UHJvcHMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG5cdFx0XHRcdHZhciBkaXZQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyh0aGlzLnByb3BzLmlucHV0UHJvcHMsIFtdKTtcblxuXHRcdFx0XHR2YXIgX2FyaWFPd25zID0gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KShfZGVmaW5lUHJvcGVydHkoe30sIHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1saXN0JywgaXNPcGVuKSk7XG5cdFx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgX2V4dGVuZHMoe30sIGRpdlByb3BzLCB7XG5cdFx0XHRcdFx0J2FyaWEtZXhwYW5kZWQnOiBpc09wZW4sXG5cdFx0XHRcdFx0J2FyaWEtb3ducyc6IF9hcmlhT3ducyxcblx0XHRcdFx0XHQnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogaXNPcGVuID8gdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLW9wdGlvbi0nICsgZm9jdXNlZE9wdGlvbkluZGV4IDogdGhpcy5faW5zdGFuY2VQcmVmaXggKyAnLXZhbHVlJyxcblx0XHRcdFx0XHQnYXJpYS1kaXNhYmxlZCc6ICcnICsgdGhpcy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6IHRoaXMucHJvcHNbJ2FyaWEtbGFiZWwnXSxcblx0XHRcdFx0XHQnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J10sXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHRcdFx0b25CbHVyOiB0aGlzLmhhbmRsZUlucHV0Qmx1cixcblx0XHRcdFx0XHRvbkZvY3VzOiB0aGlzLmhhbmRsZUlucHV0Rm9jdXMsXG5cdFx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZjIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfdGhpczYuaW5wdXQgPSBfcmVmMjtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJvbGU6ICdjb21ib2JveCcsXG5cdFx0XHRcdFx0c3R5bGU6IHsgYm9yZGVyOiAwLCB3aWR0aDogMSwgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfSxcblx0XHRcdFx0XHR0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleCB8fCAwXG5cdFx0XHRcdH0pKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucHJvcHMuYXV0b3NpemUpIHtcblx0XHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdElucHV0QXV0b3NpemUyLmRlZmF1bHQsIF9leHRlbmRzKHsgaWQ6IHRoaXMucHJvcHMuaWQgfSwgaW5wdXRQcm9wcywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgbWluV2lkdGg6ICc1JyB9KSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBrZXk6ICdpbnB1dC13cmFwJywgc3R5bGU6IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfSB9LFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7IGlkOiB0aGlzLnByb3BzLmlkIH0sIGlucHV0UHJvcHMpKVxuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJDbGVhcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNsZWFyKCkge1xuXHRcdFx0dmFyIHZhbHVlQXJyYXkgPSB0aGlzLmdldFZhbHVlQXJyYXkodGhpcy5wcm9wcy52YWx1ZSk7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuY2xlYXJhYmxlIHx8ICF2YWx1ZUFycmF5Lmxlbmd0aCB8fCB0aGlzLnByb3BzLmRpc2FibGVkIHx8IHRoaXMucHJvcHMuaXNMb2FkaW5nKSByZXR1cm47XG5cdFx0XHR2YXIgYXJpYUxhYmVsID0gdGhpcy5wcm9wcy5tdWx0aSA/IHRoaXMucHJvcHMuY2xlYXJBbGxUZXh0IDogdGhpcy5wcm9wcy5jbGVhclZhbHVlVGV4dDtcblx0XHRcdHZhciBjbGVhciA9IHRoaXMucHJvcHMuY2xlYXJSZW5kZXJlcigpO1xuXG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1jbGVhci16b25lJyxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogdGhpcy5jbGVhclZhbHVlLFxuXHRcdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRDbGVhclZhbHVlLFxuXHRcdFx0XHRcdG9uVG91Y2hNb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcblx0XHRcdFx0XHRvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcblx0XHRcdFx0XHR0aXRsZTogYXJpYUxhYmVsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNsZWFyXG5cdFx0XHQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlckFycm93Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQXJyb3coKSB7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuYXJyb3dSZW5kZXJlcikgcmV0dXJuO1xuXG5cdFx0XHR2YXIgb25Nb3VzZURvd24gPSB0aGlzLmhhbmRsZU1vdXNlRG93bk9uQXJyb3c7XG5cdFx0XHR2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG5cdFx0XHR2YXIgYXJyb3cgPSB0aGlzLnByb3BzLmFycm93UmVuZGVyZXIoeyBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sIGlzT3BlbjogaXNPcGVuIH0pO1xuXG5cdFx0XHRpZiAoIWFycm93KSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdzcGFuJyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1hcnJvdy16b25lJyxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogb25Nb3VzZURvd25cblx0XHRcdFx0fSxcblx0XHRcdFx0YXJyb3dcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZmlsdGVyT3B0aW9ucycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZpbHRlck9wdGlvbnMoZXhjbHVkZU9wdGlvbnMpIHtcblx0XHRcdHZhciBmaWx0ZXJWYWx1ZSA9IHRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcblx0XHRcdHZhciBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zIHx8IFtdO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuZmlsdGVyT3B0aW9ucykge1xuXHRcdFx0XHQvLyBNYWludGFpbiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIGJvb2xlYW4gYXR0cmlidXRlXG5cdFx0XHRcdHZhciBmaWx0ZXJPcHRpb25zID0gdHlwZW9mIHRoaXMucHJvcHMuZmlsdGVyT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucHJvcHMuZmlsdGVyT3B0aW9ucyA6IF9kZWZhdWx0RmlsdGVyT3B0aW9uczIuZGVmYXVsdDtcblxuXHRcdFx0XHRyZXR1cm4gZmlsdGVyT3B0aW9ucyhvcHRpb25zLCBmaWx0ZXJWYWx1ZSwgZXhjbHVkZU9wdGlvbnMsIHtcblx0XHRcdFx0XHRmaWx0ZXJPcHRpb246IHRoaXMucHJvcHMuZmlsdGVyT3B0aW9uLFxuXHRcdFx0XHRcdGlnbm9yZUFjY2VudHM6IHRoaXMucHJvcHMuaWdub3JlQWNjZW50cyxcblx0XHRcdFx0XHRpZ25vcmVDYXNlOiB0aGlzLnByb3BzLmlnbm9yZUNhc2UsXG5cdFx0XHRcdFx0bGFiZWxLZXk6IHRoaXMucHJvcHMubGFiZWxLZXksXG5cdFx0XHRcdFx0bWF0Y2hQb3M6IHRoaXMucHJvcHMubWF0Y2hQb3MsXG5cdFx0XHRcdFx0bWF0Y2hQcm9wOiB0aGlzLnByb3BzLm1hdGNoUHJvcCxcblx0XHRcdFx0XHR0cmltRmlsdGVyOiB0aGlzLnByb3BzLnRyaW1GaWx0ZXIsXG5cdFx0XHRcdFx0dmFsdWVLZXk6IHRoaXMucHJvcHMudmFsdWVLZXlcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb3B0aW9ucztcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdvbk9wdGlvblJlZicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIG9uT3B0aW9uUmVmKHJlZiwgaXNGb2N1c2VkKSB7XG5cdFx0XHRpZiAoaXNGb2N1c2VkKSB7XG5cdFx0XHRcdHRoaXMuZm9jdXNlZCA9IHJlZjtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJNZW51Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWVudShvcHRpb25zLCB2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uKSB7XG5cdFx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5tZW51UmVuZGVyZXIoe1xuXHRcdFx0XHRcdGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG5cdFx0XHRcdFx0Zm9jdXNPcHRpb246IHRoaXMuZm9jdXNPcHRpb24sXG5cdFx0XHRcdFx0aW5wdXRWYWx1ZTogdGhpcy5zdGF0ZS5pbnB1dFZhbHVlLFxuXHRcdFx0XHRcdGluc3RhbmNlUHJlZml4OiB0aGlzLl9pbnN0YW5jZVByZWZpeCxcblx0XHRcdFx0XHRsYWJlbEtleTogdGhpcy5wcm9wcy5sYWJlbEtleSxcblx0XHRcdFx0XHRvbkZvY3VzOiB0aGlzLmZvY3VzT3B0aW9uLFxuXHRcdFx0XHRcdG9uT3B0aW9uUmVmOiB0aGlzLm9uT3B0aW9uUmVmLFxuXHRcdFx0XHRcdG9uU2VsZWN0OiB0aGlzLnNlbGVjdFZhbHVlLFxuXHRcdFx0XHRcdG9wdGlvbkNsYXNzTmFtZTogdGhpcy5wcm9wcy5vcHRpb25DbGFzc05hbWUsXG5cdFx0XHRcdFx0b3B0aW9uQ29tcG9uZW50OiB0aGlzLnByb3BzLm9wdGlvbkNvbXBvbmVudCxcblx0XHRcdFx0XHRvcHRpb25SZW5kZXJlcjogdGhpcy5wcm9wcy5vcHRpb25SZW5kZXJlciB8fCB0aGlzLmdldE9wdGlvbkxhYmVsLFxuXHRcdFx0XHRcdG9wdGlvbnM6IG9wdGlvbnMsXG5cdFx0XHRcdFx0cmVtb3ZlVmFsdWU6IHRoaXMucmVtb3ZlVmFsdWUsXG5cdFx0XHRcdFx0c2VsZWN0VmFsdWU6IHRoaXMuc2VsZWN0VmFsdWUsXG5cdFx0XHRcdFx0dmFsdWVBcnJheTogdmFsdWVBcnJheSxcblx0XHRcdFx0XHR2YWx1ZUtleTogdGhpcy5wcm9wcy52YWx1ZUtleVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5wcm9wcy5ub1Jlc3VsdHNUZXh0KSB7XG5cdFx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC1ub3Jlc3VsdHMnIH0sXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5ub1Jlc3VsdHNUZXh0XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJIaWRkZW5GaWVsZCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlckhpZGRlbkZpZWxkKHZhbHVlQXJyYXkpIHtcblx0XHRcdHZhciBfdGhpczcgPSB0aGlzO1xuXG5cdFx0XHRpZiAoIXRoaXMucHJvcHMubmFtZSkgcmV0dXJuO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuam9pblZhbHVlcykge1xuXHRcdFx0XHR2YXIgdmFsdWUgPSB2YWx1ZUFycmF5Lm1hcChmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRcdHJldHVybiBzdHJpbmdpZnlWYWx1ZShpW190aGlzNy5wcm9wcy52YWx1ZUtleV0pO1xuXHRcdFx0XHR9KS5qb2luKHRoaXMucHJvcHMuZGVsaW1pdGVyKTtcblx0XHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcblx0XHRcdFx0XHRkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdFx0XHRuYW1lOiB0aGlzLnByb3BzLm5hbWUsXG5cdFx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZjMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfdGhpczcudmFsdWUgPSBfcmVmMztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZUFycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcblx0XHRcdFx0XHRkaXNhYmxlZDogX3RoaXM3LnByb3BzLmRpc2FibGVkLFxuXHRcdFx0XHRcdGtleTogJ2hpZGRlbi4nICsgaW5kZXgsXG5cdFx0XHRcdFx0bmFtZTogX3RoaXM3LnByb3BzLm5hbWUsXG5cdFx0XHRcdFx0cmVmOiAndmFsdWUnICsgaW5kZXgsXG5cdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0dmFsdWU6IHN0cmluZ2lmeVZhbHVlKGl0ZW1bX3RoaXM3LnByb3BzLnZhbHVlS2V5XSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdnZXRGb2N1c2FibGVPcHRpb25JbmRleCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEZvY3VzYWJsZU9wdGlvbkluZGV4KHNlbGVjdGVkT3B0aW9uKSB7XG5cdFx0XHR2YXIgb3B0aW9ucyA9IHRoaXMuX3Zpc2libGVPcHRpb25zO1xuXHRcdFx0aWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cblx0XHRcdHZhciB2YWx1ZUtleSA9IHRoaXMucHJvcHMudmFsdWVLZXk7XG5cdFx0XHR2YXIgZm9jdXNlZE9wdGlvbiA9IHRoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbiB8fCBzZWxlY3RlZE9wdGlvbjtcblx0XHRcdGlmIChmb2N1c2VkT3B0aW9uICYmICFmb2N1c2VkT3B0aW9uLmRpc2FibGVkKSB7XG5cdFx0XHRcdHZhciBmb2N1c2VkT3B0aW9uSW5kZXggPSAtMTtcblx0XHRcdFx0b3B0aW9ucy5zb21lKGZ1bmN0aW9uIChvcHRpb24sIGluZGV4KSB7XG5cdFx0XHRcdFx0dmFyIGlzT3B0aW9uRXF1YWwgPSBvcHRpb25bdmFsdWVLZXldID09PSBmb2N1c2VkT3B0aW9uW3ZhbHVlS2V5XTtcblx0XHRcdFx0XHRpZiAoaXNPcHRpb25FcXVhbCkge1xuXHRcdFx0XHRcdFx0Zm9jdXNlZE9wdGlvbkluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBpc09wdGlvbkVxdWFsO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKGZvY3VzZWRPcHRpb25JbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHRyZXR1cm4gZm9jdXNlZE9wdGlvbkluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoIW9wdGlvbnNbaV0uZGlzYWJsZWQpIHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyT3V0ZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJPdXRlcihvcHRpb25zLCB2YWx1ZUFycmF5LCBmb2N1c2VkT3B0aW9uKSB7XG5cdFx0XHR2YXIgX3RoaXM4ID0gdGhpcztcblxuXHRcdFx0dmFyIG1lbnUgPSB0aGlzLnJlbmRlck1lbnUob3B0aW9ucywgdmFsdWVBcnJheSwgZm9jdXNlZE9wdGlvbik7XG5cdFx0XHRpZiAoIW1lbnUpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgcmVmOiBmdW5jdGlvbiByZWYoX3JlZjUpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfdGhpczgubWVudUNvbnRhaW5lciA9IF9yZWY1O1xuXHRcdFx0XHRcdH0sIGNsYXNzTmFtZTogJ1NlbGVjdC1tZW51LW91dGVyJywgc3R5bGU6IHRoaXMucHJvcHMubWVudUNvbnRhaW5lclN0eWxlIH0sXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZTogJ1NlbGVjdC1tZW51Jyxcblx0XHRcdFx0XHRcdGlkOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctbGlzdCcsXG5cdFx0XHRcdFx0XHRvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd25Pbk1lbnUsXG5cdFx0XHRcdFx0XHRvblNjcm9sbDogdGhpcy5oYW5kbGVNZW51U2Nyb2xsLFxuXHRcdFx0XHRcdFx0cmVmOiBmdW5jdGlvbiByZWYoX3JlZjQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzOC5tZW51ID0gX3JlZjQ7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0cm9sZTogJ2xpc3Rib3gnLFxuXHRcdFx0XHRcdFx0c3R5bGU6IHRoaXMucHJvcHMubWVudVN0eWxlLFxuXHRcdFx0XHRcdFx0dGFiSW5kZXg6IC0xXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRtZW51XG5cdFx0XHRcdClcblx0XHRcdCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF90aGlzOSA9IHRoaXM7XG5cblx0XHRcdHZhciB2YWx1ZUFycmF5ID0gdGhpcy5nZXRWYWx1ZUFycmF5KHRoaXMucHJvcHMudmFsdWUpO1xuXHRcdFx0dmFyIG9wdGlvbnMgPSB0aGlzLl92aXNpYmxlT3B0aW9ucyA9IHRoaXMuZmlsdGVyT3B0aW9ucyh0aGlzLnByb3BzLm11bHRpICYmIHRoaXMucHJvcHMucmVtb3ZlU2VsZWN0ZWQgPyB2YWx1ZUFycmF5IDogbnVsbCk7XG5cdFx0XHR2YXIgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5tdWx0aSAmJiAhb3B0aW9ucy5sZW5ndGggJiYgdmFsdWVBcnJheS5sZW5ndGggJiYgIXRoaXMuc3RhdGUuaW5wdXRWYWx1ZSkgaXNPcGVuID0gZmFsc2U7XG5cdFx0XHR2YXIgZm9jdXNlZE9wdGlvbkluZGV4ID0gdGhpcy5nZXRGb2N1c2FibGVPcHRpb25JbmRleCh2YWx1ZUFycmF5WzBdKTtcblxuXHRcdFx0dmFyIGZvY3VzZWRPcHRpb24gPSBudWxsO1xuXHRcdFx0aWYgKGZvY3VzZWRPcHRpb25JbmRleCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb2N1c2VkT3B0aW9uID0gdGhpcy5fZm9jdXNlZE9wdGlvbiA9IG9wdGlvbnNbZm9jdXNlZE9wdGlvbkluZGV4XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvY3VzZWRPcHRpb24gPSB0aGlzLl9mb2N1c2VkT3B0aW9uID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHZhciBjbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCdTZWxlY3QnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwge1xuXHRcdFx0XHQnaGFzLXZhbHVlJzogdmFsdWVBcnJheS5sZW5ndGgsXG5cdFx0XHRcdCdpcy1jbGVhcmFibGUnOiB0aGlzLnByb3BzLmNsZWFyYWJsZSxcblx0XHRcdFx0J2lzLWRpc2FibGVkJzogdGhpcy5wcm9wcy5kaXNhYmxlZCxcblx0XHRcdFx0J2lzLWZvY3VzZWQnOiB0aGlzLnN0YXRlLmlzRm9jdXNlZCxcblx0XHRcdFx0J2lzLWxvYWRpbmcnOiB0aGlzLnByb3BzLmlzTG9hZGluZyxcblx0XHRcdFx0J2lzLW9wZW4nOiBpc09wZW4sXG5cdFx0XHRcdCdpcy1wc2V1ZG8tZm9jdXNlZCc6IHRoaXMuc3RhdGUuaXNQc2V1ZG9Gb2N1c2VkLFxuXHRcdFx0XHQnaXMtc2VhcmNoYWJsZSc6IHRoaXMucHJvcHMuc2VhcmNoYWJsZSxcblx0XHRcdFx0J1NlbGVjdC0tbXVsdGknOiB0aGlzLnByb3BzLm11bHRpLFxuXHRcdFx0XHQnU2VsZWN0LS1ydGwnOiB0aGlzLnByb3BzLnJ0bCxcblx0XHRcdFx0J1NlbGVjdC0tc2luZ2xlJzogIXRoaXMucHJvcHMubXVsdGlcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgcmVtb3ZlTWVzc2FnZSA9IG51bGw7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5tdWx0aSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiB2YWx1ZUFycmF5Lmxlbmd0aCAmJiAhdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICYmIHRoaXMuc3RhdGUuaXNGb2N1c2VkICYmIHRoaXMucHJvcHMuYmFja3NwYWNlUmVtb3Zlcykge1xuXHRcdFx0XHRyZW1vdmVNZXNzYWdlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHRcdHsgaWQ6IHRoaXMuX2luc3RhbmNlUHJlZml4ICsgJy1iYWNrc3BhY2UtcmVtb3ZlLW1lc3NhZ2UnLCBjbGFzc05hbWU6ICdTZWxlY3QtYXJpYS1vbmx5JywgJ2FyaWEtbGl2ZSc6ICdhc3NlcnRpdmUnIH0sXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5iYWNrc3BhY2VUb1JlbW92ZU1lc3NhZ2UucmVwbGFjZSgne2xhYmVsfScsIHZhbHVlQXJyYXlbdmFsdWVBcnJheS5sZW5ndGggLSAxXVt0aGlzLnByb3BzLmxhYmVsS2V5XSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyByZWY6IGZ1bmN0aW9uIHJlZihfcmVmNykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF90aGlzOS53cmFwcGVyID0gX3JlZjc7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0XHRzdHlsZTogdGhpcy5wcm9wcy53cmFwcGVyU3R5bGUgfSxcblx0XHRcdFx0dGhpcy5yZW5kZXJIaWRkZW5GaWVsZCh2YWx1ZUFycmF5KSxcblx0XHRcdFx0X3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyByZWY6IGZ1bmN0aW9uIHJlZihfcmVmNikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX3RoaXM5LmNvbnRyb2wgPSBfcmVmNjtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU6ICdTZWxlY3QtY29udHJvbCcsXG5cdFx0XHRcdFx0XHRvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcblx0XHRcdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bixcblx0XHRcdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG5cdFx0XHRcdFx0XHRvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUsXG5cdFx0XHRcdFx0XHRvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcblx0XHRcdFx0XHRcdHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdTZWxlY3QtbXVsdGktdmFsdWUtd3JhcHBlcicsIGlkOiB0aGlzLl9pbnN0YW5jZVByZWZpeCArICctdmFsdWUnIH0sXG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlclZhbHVlKHZhbHVlQXJyYXksIGlzT3BlbiksXG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlcklucHV0KHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb25JbmRleClcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHJlbW92ZU1lc3NhZ2UsXG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJMb2FkaW5nKCksXG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJDbGVhcigpLFxuXHRcdFx0XHRcdHRoaXMucmVuZGVyQXJyb3coKVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRpc09wZW4gPyB0aGlzLnJlbmRlck91dGVyKG9wdGlvbnMsIHZhbHVlQXJyYXksIGZvY3VzZWRPcHRpb24pIDogbnVsbFxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gU2VsZWN0O1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuU2VsZWN0LnByb3BUeXBlcyA9IHtcblx0J2FyaWEtZGVzY3JpYmVkYnknOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gaHRtbCBpZChzKSBvZiBlbGVtZW50KHMpIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gZGVzY3JpYmUgdGhpcyBpbnB1dCAoZm9yIGFzc2lzdGl2ZSB0ZWNoKVxuXHQnYXJpYS1sYWJlbCc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBhcmlhIGxhYmVsIChmb3IgYXNzaXN0aXZlIHRlY2gpXG5cdCdhcmlhLWxhYmVsbGVkYnknOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gaHRtbCBpZCBvZiBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIGxhYmVsIChmb3IgYXNzaXN0aXZlIHRlY2gpXG5cdGFycm93UmVuZGVyZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gY3JlYXRlIHRoZSBkcm9wLWRvd24gY2FyZXQgZWxlbWVudFxuXHRhdXRvQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBhdXRvbWF0aWNhbGx5IGJsdXIgdGhlIGNvbXBvbmVudCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZFxuXHRhdXRvRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gYXV0b2ZvY3VzIHRoZSBjb21wb25lbnQgb24gbW91bnRcblx0YXV0b2ZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGRlcHJlY2F0ZWQ7IHVzZSBhdXRvRm9jdXMgaW5zdGVhZFxuXHRhdXRvc2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyB3aGV0aGVyIHRvIGVuYWJsZSBhdXRvc2l6aW5nIG9yIG5vdFxuXHRiYWNrc3BhY2VSZW1vdmVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgYmFja3NwYWNlIHJlbW92ZXMgYW4gaXRlbSBpZiB0aGVyZSBpcyBubyB0ZXh0IGlucHV0XG5cdGJhY2tzcGFjZVRvUmVtb3ZlTWVzc2FnZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIG1lc3NhZ2UgdG8gdXNlIGZvciBzY3JlZW5yZWFkZXJzIHRvIHByZXNzIGJhY2tzcGFjZSB0byByZW1vdmUgdGhlIGN1cnJlbnQgaXRlbSAtIHtsYWJlbH0gaXMgcmVwbGFjZWQgd2l0aCB0aGUgaXRlbSBsYWJlbFxuXHRjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBjbGFzc05hbWUgZm9yIHRoZSBvdXRlciBlbGVtZW50XG5cdGNsZWFyQWxsVGV4dDogc3RyaW5nT3JOb2RlLCAvLyB0aXRsZSBmb3IgdGhlIFwiY2xlYXJcIiBjb250cm9sIHdoZW4gbXVsdGk6IHRydWVcblx0Y2xlYXJSZW5kZXJlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBjcmVhdGUgY2xlYXJhYmxlIHggZWxlbWVudFxuXHRjbGVhclZhbHVlVGV4dDogc3RyaW5nT3JOb2RlLCAvLyB0aXRsZSBmb3IgdGhlIFwiY2xlYXJcIiBjb250cm9sXG5cdGNsZWFyYWJsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBzaG91bGQgaXQgYmUgcG9zc2libGUgdG8gcmVzZXQgdmFsdWVcblx0Y2xvc2VPblNlbGVjdDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyB3aGV0aGVyIHRvIGNsb3NlIHRoZSBtZW51IHdoZW4gYSB2YWx1ZSBpcyBzZWxlY3RlZFxuXHRkZWxldGVSZW1vdmVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgZGVsZXRlIHJlbW92ZXMgYW4gaXRlbSBpZiB0aGVyZSBpcyBubyB0ZXh0IGlucHV0XG5cdGRlbGltaXRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGRlbGltaXRlciB0byB1c2UgdG8gam9pbiBtdWx0aXBsZSB2YWx1ZXMgZm9yIHRoZSBoaWRkZW4gZmllbGQgdmFsdWVcblx0ZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gd2hldGhlciB0aGUgU2VsZWN0IGlzIGRpc2FibGVkIG9yIG5vdFxuXHRlc2NhcGVDbGVhcnNWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyB3aGV0aGVyIGVzY2FwZSBjbGVhcnMgdGhlIHZhbHVlIHdoZW4gdGhlIG1lbnUgaXMgY2xvc2VkXG5cdGZpbHRlck9wdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBtZXRob2QgdG8gZmlsdGVyIGEgc2luZ2xlIG9wdGlvbiAob3B0aW9uLCBmaWx0ZXJTdHJpbmcpXG5cdGZpbHRlck9wdGlvbnM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LCAvLyBib29sZWFuIHRvIGVuYWJsZSBkZWZhdWx0IGZpbHRlcmluZyBvciBmdW5jdGlvbiB0byBmaWx0ZXIgdGhlIG9wdGlvbnMgYXJyYXkgKFtvcHRpb25zXSwgZmlsdGVyU3RyaW5nLCBbdmFsdWVzXSlcblx0aWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBodG1sIGlkIHRvIHNldCBvbiB0aGUgaW5wdXQgZWxlbWVudCBmb3IgYWNjZXNzaWJpbGl0eSBvciB0ZXN0c1xuXHRpZ25vcmVBY2NlbnRzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgdG8gc3RyaXAgZGlhY3JpdGljcyB3aGVuIGZpbHRlcmluZ1xuXHRpZ25vcmVDYXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgdG8gcGVyZm9ybSBjYXNlLWluc2Vuc2l0aXZlIGZpbHRlcmluZ1xuXHRpbnB1dFByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gY3VzdG9tIGF0dHJpYnV0ZXMgZm9yIHRoZSBJbnB1dFxuXHRpbnB1dFJlbmRlcmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIHJldHVybnMgYSBjdXN0b20gaW5wdXQgY29tcG9uZW50XG5cdGluc3RhbmNlSWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBzZXQgdGhlIGNvbXBvbmVudHMgaW5zdGFuY2VJZFxuXHRpc0xvYWRpbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gd2hldGhlciB0aGUgU2VsZWN0IGlzIGxvYWRpbmcgZXh0ZXJuYWxseSBvciBub3QgKHN1Y2ggYXMgb3B0aW9ucyBiZWluZyBsb2FkZWQpXG5cdGpvaW5WYWx1ZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gam9pbnMgbXVsdGlwbGUgdmFsdWVzIGludG8gYSBzaW5nbGUgZm9ybSBmaWVsZCB3aXRoIHRoZSBkZWxpbWl0ZXIgKGxlZ2FjeSBtb2RlKVxuXHRsYWJlbEtleTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIHBhdGggb2YgdGhlIGxhYmVsIHZhbHVlIGluIG9wdGlvbiBvYmplY3RzXG5cdG1hdGNoUG9zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gKGFueXxzdGFydCkgbWF0Y2ggdGhlIHN0YXJ0IG9yIGVudGlyZSBzdHJpbmcgd2hlbiBmaWx0ZXJpbmdcblx0bWF0Y2hQcm9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gKGFueXxsYWJlbHx2YWx1ZSkgd2hpY2ggb3B0aW9uIHByb3BlcnR5IHRvIGZpbHRlciBvblxuXHRtZW51QnVmZmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgLy8gb3B0aW9uYWwgYnVmZmVyIChpbiBweCkgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydCBhbmQgdGhlIGJvdHRvbSBvZiB0aGUgbWVudVxuXHRtZW51Q29udGFpbmVyU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBvcHRpb25hbCBzdHlsZSB0byBhcHBseSB0byB0aGUgbWVudSBjb250YWluZXJcblx0bWVudVJlbmRlcmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIHJlbmRlcnMgYSBjdXN0b20gbWVudSB3aXRoIG9wdGlvbnNcblx0bWVudVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gb3B0aW9uYWwgc3R5bGUgdG8gYXBwbHkgdG8gdGhlIG1lbnVcblx0bXVsdGk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gbXVsdGktdmFsdWUgaW5wdXRcblx0bmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGdlbmVyYXRlcyBhIGhpZGRlbiA8aW5wdXQgLz4gdGFnIHdpdGggdGhpcyBmaWVsZCBuYW1lIGZvciBodG1sIGZvcm1zXG5cdG5vUmVzdWx0c1RleHQ6IHN0cmluZ09yTm9kZSwgLy8gcGxhY2Vob2xkZXIgZGlzcGxheWVkIHdoZW4gdGhlcmUgYXJlIG5vIG1hdGNoaW5nIHNlYXJjaCByZXN1bHRzXG5cdG9uQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBvbkJsdXIgaGFuZGxlcjogZnVuY3Rpb24gKGV2ZW50KSB7fVxuXHRvbkJsdXJSZXNldHNJbnB1dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyB3aGV0aGVyIGlucHV0IGlzIGNsZWFyZWQgb24gYmx1clxuXHRvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBvbkNoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbiAobmV3VmFsdWUpIHt9XG5cdG9uQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gZmlyZXMgd2hlbiB0aGUgbWVudSBpcyBjbG9zZWRcblx0b25DbG9zZVJlc2V0c0lucHV0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHdoZXRoZXIgaW5wdXQgaXMgY2xlYXJlZCB3aGVuIG1lbnUgaXMgY2xvc2VkIHRocm91Z2ggdGhlIGFycm93XG5cdG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25Gb2N1cyBoYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHt9XG5cdG9uSW5wdXRDaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25JbnB1dENoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbiAoaW5wdXRWYWx1ZSkge31cblx0b25JbnB1dEtleURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gaW5wdXQga2V5RG93biBoYW5kbGVyOiBmdW5jdGlvbiAoZXZlbnQpIHt9XG5cdG9uTWVudVNjcm9sbFRvQm90dG9tOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIGZpcmVzIHdoZW4gdGhlIG1lbnUgaXMgc2Nyb2xsZWQgdG8gdGhlIGJvdHRvbTsgY2FuIGJlIHVzZWQgdG8gcGFnaW5hdGUgb3B0aW9uc1xuXHRvbk9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gZmlyZXMgd2hlbiB0aGUgbWVudSBpcyBvcGVuZWRcblx0b25TZWxlY3RSZXNldHNJbnB1dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyB3aGV0aGVyIGlucHV0IGlzIGNsZWFyZWQgb24gc2VsZWN0ICh3b3JrcyBvbmx5IGZvciBtdWx0aXNlbGVjdClcblx0b25WYWx1ZUNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG9uQ2xpY2sgaGFuZGxlciBmb3IgdmFsdWUgbGFiZWxzOiBmdW5jdGlvbiAodmFsdWUsIGV2ZW50KSB7fVxuXHRvcGVuT25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBib29sZWFuIHRvIGNvbnRyb2wgb3BlbmluZyB0aGUgbWVudSB3aGVuIHRoZSBjb250cm9sIGlzIGNsaWNrZWRcblx0b3Blbk9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gYWx3YXlzIG9wZW4gb3B0aW9ucyBtZW51IG9uIGZvY3VzXG5cdG9wdGlvbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGFkZGl0aW9uYWwgY2xhc3MoZXMpIHRvIGFwcGx5IHRvIHRoZSA8T3B0aW9uIC8+IGVsZW1lbnRzXG5cdG9wdGlvbkNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBvcHRpb24gY29tcG9uZW50IHRvIHJlbmRlciBpbiBkcm9wZG93blxuXHRvcHRpb25SZW5kZXJlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBvcHRpb25SZW5kZXJlcjogZnVuY3Rpb24gKG9wdGlvbikge31cblx0b3B0aW9uczogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheSwgLy8gYXJyYXkgb2Ygb3B0aW9uc1xuXHRwYWdlU2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIC8vIG51bWJlciBvZiBlbnRyaWVzIHRvIHBhZ2Ugd2hlbiB1c2luZyBwYWdlIHVwL2Rvd24ga2V5c1xuXHRwbGFjZWhvbGRlcjogc3RyaW5nT3JOb2RlLCAvLyBmaWVsZCBwbGFjZWhvbGRlciwgZGlzcGxheWVkIHdoZW4gdGhlcmUncyBubyB2YWx1ZVxuXHRyZW1vdmVTZWxlY3RlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyB3aGV0aGVyIHRoZSBzZWxlY3RlZCBvcHRpb24gaXMgcmVtb3ZlZCBmcm9tIHRoZSBkcm9wZG93biBvbiBtdWx0aSBzZWxlY3RzXG5cdHJlcXVpcmVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGFwcGxpZXMgSFRNTDUgcmVxdWlyZWQgYXR0cmlidXRlIHdoZW4gbmVlZGVkXG5cdHJlc2V0VmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LCAvLyB2YWx1ZSB0byB1c2Ugd2hlbiB5b3UgY2xlYXIgdGhlIGNvbnRyb2xcblx0cnRsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIHNldCB0byB0cnVlIGluIG9yZGVyIHRvIHVzZSByZWFjdC1zZWxlY3QgaW4gcmlnaHQtdG8tbGVmdCBkaXJlY3Rpb25cblx0c2Nyb2xsTWVudUludG9WaWV3OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIC8vIGJvb2xlYW4gdG8gZW5hYmxlIHRoZSB2aWV3cG9ydCB0byBzaGlmdCBzbyB0aGF0IHRoZSBmdWxsIG1lbnUgZnVsbHkgdmlzaWJsZSB3aGVuIGVuZ2FnZWRcblx0c2VhcmNoYWJsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyB3aGV0aGVyIHRvIGVuYWJsZSBzZWFyY2hpbmcgZmVhdHVyZSBvciBub3Rcblx0c2ltcGxlVmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gcGFzcyB0aGUgdmFsdWUgdG8gb25DaGFuZ2UgYXMgYSBzaW1wbGUgdmFsdWUgKGxlZ2FjeSBwcmUgMS4wIG1vZGUpLCBkZWZhdWx0cyB0byBmYWxzZVxuXHRzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIC8vIG9wdGlvbmFsIHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBjb250cm9sXG5cdHRhYkluZGV4OiBzdHJpbmdPck51bWJlciwgLy8gb3B0aW9uYWwgdGFiIGluZGV4IG9mIHRoZSBjb250cm9sXG5cdHRhYlNlbGVjdHNWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyB3aGV0aGVyIHRvIHRyZWF0IHRhYmJpbmcgb3V0IHdoaWxlIGZvY3VzZWQgdG8gYmUgdmFsdWUgc2VsZWN0aW9uXG5cdHRyaW1GaWx0ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gd2hldGhlciB0byB0cmltIHdoaXRlc3BhY2UgYXJvdW5kIGZpbHRlciB2YWx1ZVxuXHR2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksIC8vIGluaXRpYWwgZmllbGQgdmFsdWVcblx0dmFsdWVDb21wb25lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gdmFsdWUgY29tcG9uZW50IHRvIHJlbmRlclxuXHR2YWx1ZUtleTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIHBhdGggb2YgdGhlIGxhYmVsIHZhbHVlIGluIG9wdGlvbiBvYmplY3RzXG5cdHZhbHVlUmVuZGVyZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gdmFsdWVSZW5kZXJlcjogZnVuY3Rpb24gKG9wdGlvbikge31cblx0d3JhcHBlclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCAvLyBvcHRpb25hbCBzdHlsZSB0byBhcHBseSB0byB0aGUgY29tcG9uZW50IHdyYXBwZXJcbn07XG5cblNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG5cdGFycm93UmVuZGVyZXI6IF9kZWZhdWx0QXJyb3dSZW5kZXJlcjIuZGVmYXVsdCxcblx0YXV0b3NpemU6IHRydWUsXG5cdGJhY2tzcGFjZVJlbW92ZXM6IHRydWUsXG5cdGJhY2tzcGFjZVRvUmVtb3ZlTWVzc2FnZTogJ1ByZXNzIGJhY2tzcGFjZSB0byByZW1vdmUge2xhYmVsfScsXG5cdGNsZWFyYWJsZTogdHJ1ZSxcblx0Y2xlYXJBbGxUZXh0OiAnQ2xlYXIgYWxsJyxcblx0Y2xlYXJSZW5kZXJlcjogX2RlZmF1bHRDbGVhclJlbmRlcmVyMi5kZWZhdWx0LFxuXHRjbGVhclZhbHVlVGV4dDogJ0NsZWFyIHZhbHVlJyxcblx0Y2xvc2VPblNlbGVjdDogdHJ1ZSxcblx0ZGVsZXRlUmVtb3ZlczogdHJ1ZSxcblx0ZGVsaW1pdGVyOiAnLCcsXG5cdGRpc2FibGVkOiBmYWxzZSxcblx0ZXNjYXBlQ2xlYXJzVmFsdWU6IHRydWUsXG5cdGZpbHRlck9wdGlvbnM6IF9kZWZhdWx0RmlsdGVyT3B0aW9uczIuZGVmYXVsdCxcblx0aWdub3JlQWNjZW50czogdHJ1ZSxcblx0aWdub3JlQ2FzZTogdHJ1ZSxcblx0aW5wdXRQcm9wczoge30sXG5cdGlzTG9hZGluZzogZmFsc2UsXG5cdGpvaW5WYWx1ZXM6IGZhbHNlLFxuXHRsYWJlbEtleTogJ2xhYmVsJyxcblx0bWF0Y2hQb3M6ICdhbnknLFxuXHRtYXRjaFByb3A6ICdhbnknLFxuXHRtZW51QnVmZmVyOiAwLFxuXHRtZW51UmVuZGVyZXI6IF9kZWZhdWx0TWVudVJlbmRlcmVyMi5kZWZhdWx0LFxuXHRtdWx0aTogZmFsc2UsXG5cdG5vUmVzdWx0c1RleHQ6ICdObyByZXN1bHRzIGZvdW5kJyxcblx0b25CbHVyUmVzZXRzSW5wdXQ6IHRydWUsXG5cdG9uQ2xvc2VSZXNldHNJbnB1dDogdHJ1ZSxcblx0b25TZWxlY3RSZXNldHNJbnB1dDogdHJ1ZSxcblx0b3Blbk9uQ2xpY2s6IHRydWUsXG5cdG9wdGlvbkNvbXBvbmVudDogX09wdGlvbjIuZGVmYXVsdCxcblx0cGFnZVNpemU6IDUsXG5cdHBsYWNlaG9sZGVyOiAnU2VsZWN0Li4uJyxcblx0cmVtb3ZlU2VsZWN0ZWQ6IHRydWUsXG5cdHJlcXVpcmVkOiBmYWxzZSxcblx0cnRsOiBmYWxzZSxcblx0c2Nyb2xsTWVudUludG9WaWV3OiB0cnVlLFxuXHRzZWFyY2hhYmxlOiB0cnVlLFxuXHRzaW1wbGVWYWx1ZTogZmFsc2UsXG5cdHRhYlNlbGVjdHNWYWx1ZTogdHJ1ZSxcblx0dHJpbUZpbHRlcjogdHJ1ZSxcblx0dmFsdWVDb21wb25lbnQ6IF9WYWx1ZTIuZGVmYXVsdCxcblx0dmFsdWVLZXk6ICd2YWx1ZSdcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNlbGVjdDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgc2l6ZXJTdHlsZSA9IHtcblx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdHRvcDogMCxcblx0bGVmdDogMCxcblx0dmlzaWJpbGl0eTogJ2hpZGRlbicsXG5cdGhlaWdodDogMCxcblx0b3ZlcmZsb3c6ICdzY3JvbGwnLFxuXHR3aGl0ZVNwYWNlOiAncHJlJ1xufTtcblxudmFyIElOUFVUX1BST1BTX0JMQUNLTElTVCA9IFsnZXh0cmFXaWR0aCcsICdpbmplY3RTdHlsZXMnLCAnaW5wdXRDbGFzc05hbWUnLCAnaW5wdXRSZWYnLCAnaW5wdXRTdHlsZScsICdtaW5XaWR0aCcsICdvbkF1dG9zaXplJywgJ3BsYWNlaG9sZGVySXNNaW5XaWR0aCddO1xuXG52YXIgY2xlYW5JbnB1dFByb3BzID0gZnVuY3Rpb24gY2xlYW5JbnB1dFByb3BzKGlucHV0UHJvcHMpIHtcblx0SU5QVVRfUFJPUFNfQkxBQ0tMSVNULmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG5cdFx0cmV0dXJuIGRlbGV0ZSBpbnB1dFByb3BzW2ZpZWxkXTtcblx0fSk7XG5cdHJldHVybiBpbnB1dFByb3BzO1xufTtcblxudmFyIGNvcHlTdHlsZXMgPSBmdW5jdGlvbiBjb3B5U3R5bGVzKHN0eWxlcywgbm9kZSkge1xuXHRub2RlLnN0eWxlLmZvbnRTaXplID0gc3R5bGVzLmZvbnRTaXplO1xuXHRub2RlLnN0eWxlLmZvbnRGYW1pbHkgPSBzdHlsZXMuZm9udEZhbWlseTtcblx0bm9kZS5zdHlsZS5mb250V2VpZ2h0ID0gc3R5bGVzLmZvbnRXZWlnaHQ7XG5cdG5vZGUuc3R5bGUuZm9udFN0eWxlID0gc3R5bGVzLmZvbnRTdHlsZTtcblx0bm9kZS5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gc3R5bGVzLmxldHRlclNwYWNpbmc7XG5cdG5vZGUuc3R5bGUudGV4dFRyYW5zZm9ybSA9IHN0eWxlcy50ZXh0VHJhbnNmb3JtO1xufTtcblxudmFyIGlzSUUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yID8gL01TSUUgfFRyaWRlbnRcXC98RWRnZVxcLy8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgOiBmYWxzZTtcblxudmFyIGdlbmVyYXRlSWQgPSBmdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuXHQvLyB3ZSBvbmx5IG5lZWQgYW4gYXV0by1nZW5lcmF0ZWQgSUQgZm9yIHN0eWxlc2hlZXQgaW5qZWN0aW9uLCB3aGljaCBpcyBvbmx5XG5cdC8vIHVzZWQgZm9yIElFLiBzbyBpZiB0aGUgYnJvd3NlciBpcyBub3QgSUUsIHRoaXMgc2hvdWxkIHJldHVybiB1bmRlZmluZWQuXG5cdHJldHVybiBpc0lFID8gJ18nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDEyKSA6IHVuZGVmaW5lZDtcbn07XG5cbnZhciBBdXRvc2l6ZUlucHV0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcblx0X2luaGVyaXRzKEF1dG9zaXplSW5wdXQsIF9Db21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIEF1dG9zaXplSW5wdXQocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXV0b3NpemVJbnB1dCk7XG5cblx0XHR2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQXV0b3NpemVJbnB1dC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEF1dG9zaXplSW5wdXQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRfdGhpcy5pbnB1dFJlZiA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0X3RoaXMuaW5wdXQgPSBlbDtcblx0XHRcdGlmICh0eXBlb2YgX3RoaXMucHJvcHMuaW5wdXRSZWYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0X3RoaXMucHJvcHMuaW5wdXRSZWYoZWwpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRfdGhpcy5wbGFjZUhvbGRlclNpemVyUmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5wbGFjZUhvbGRlclNpemVyID0gZWw7XG5cdFx0fTtcblxuXHRcdF90aGlzLnNpemVyUmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5zaXplciA9IGVsO1xuXHRcdH07XG5cblx0XHRfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0V2lkdGg6IHByb3BzLm1pbldpZHRoLFxuXHRcdFx0aW5wdXRJZDogcHJvcHMuaWQgfHwgZ2VuZXJhdGVJZCgpXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQXV0b3NpemVJbnB1dCwgW3tcblx0XHRrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0dGhpcy5tb3VudGVkID0gdHJ1ZTtcblx0XHRcdHRoaXMuY29weUlucHV0U3R5bGVzKCk7XG5cdFx0XHR0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcblx0XHRcdHZhciBpZCA9IG5leHRQcm9wcy5pZDtcblxuXHRcdFx0aWYgKGlkICE9PSB0aGlzLnByb3BzLmlkKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBpbnB1dElkOiBpZCB8fCBnZW5lcmF0ZUlkKCkgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0XHRpZiAocHJldlN0YXRlLmlucHV0V2lkdGggIT09IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25BdXRvc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25BdXRvc2l6ZSh0aGlzLnN0YXRlLmlucHV0V2lkdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdFx0dGhpcy5tb3VudGVkID0gZmFsc2U7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnY29weUlucHV0U3R5bGVzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29weUlucHV0U3R5bGVzKCkge1xuXHRcdFx0aWYgKCF0aGlzLm1vdW50ZWQgfHwgIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBpbnB1dFN0eWxlcyA9IHRoaXMuaW5wdXQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5pbnB1dCk7XG5cdFx0XHRpZiAoIWlucHV0U3R5bGVzKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvcHlTdHlsZXMoaW5wdXRTdHlsZXMsIHRoaXMuc2l6ZXIpO1xuXHRcdFx0aWYgKHRoaXMucGxhY2VIb2xkZXJTaXplcikge1xuXHRcdFx0XHRjb3B5U3R5bGVzKGlucHV0U3R5bGVzLCB0aGlzLnBsYWNlSG9sZGVyU2l6ZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3VwZGF0ZUlucHV0V2lkdGgnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVJbnB1dFdpZHRoKCkge1xuXHRcdFx0aWYgKCF0aGlzLm1vdW50ZWQgfHwgIXRoaXMuc2l6ZXIgfHwgdHlwZW9mIHRoaXMuc2l6ZXIuc2Nyb2xsV2lkdGggPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBuZXdJbnB1dFdpZHRoID0gdm9pZCAwO1xuXHRcdFx0aWYgKHRoaXMucHJvcHMucGxhY2Vob2xkZXIgJiYgKCF0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy5wbGFjZWhvbGRlcklzTWluV2lkdGgpKSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSBNYXRoLm1heCh0aGlzLnNpemVyLnNjcm9sbFdpZHRoLCB0aGlzLnBsYWNlSG9sZGVyU2l6ZXIuc2Nyb2xsV2lkdGgpICsgMjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnNpemVyLnNjcm9sbFdpZHRoICsgMjtcblx0XHRcdH1cblx0XHRcdC8vIGFkZCBleHRyYVdpZHRoIHRvIHRoZSBkZXRlY3RlZCB3aWR0aC4gZm9yIG51bWJlciB0eXBlcywgdGhpcyBkZWZhdWx0cyB0byAxNiB0byBhbGxvdyBmb3IgdGhlIHN0ZXBwZXIgVUlcblx0XHRcdHZhciBleHRyYVdpZHRoID0gdGhpcy5wcm9wcy50eXBlID09PSAnbnVtYmVyJyAmJiB0aGlzLnByb3BzLmV4dHJhV2lkdGggPT09IHVuZGVmaW5lZCA/IDE2IDogcGFyc2VJbnQodGhpcy5wcm9wcy5leHRyYVdpZHRoKSB8fCAwO1xuXHRcdFx0bmV3SW5wdXRXaWR0aCArPSBleHRyYVdpZHRoO1xuXHRcdFx0aWYgKG5ld0lucHV0V2lkdGggPCB0aGlzLnByb3BzLm1pbldpZHRoKSB7XG5cdFx0XHRcdG5ld0lucHV0V2lkdGggPSB0aGlzLnByb3BzLm1pbldpZHRoO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG5ld0lucHV0V2lkdGggIT09IHRoaXMuc3RhdGUuaW5wdXRXaWR0aCkge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRpbnB1dFdpZHRoOiBuZXdJbnB1dFdpZHRoXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2dldElucHV0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5pbnB1dDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb2N1cycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2JsdXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuXHRcdFx0dGhpcy5pbnB1dC5ibHVyKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnc2VsZWN0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KCkge1xuXHRcdFx0dGhpcy5pbnB1dC5zZWxlY3QoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJTdHlsZXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdHlsZXMoKSB7XG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBpbmplY3RzIHN0eWxlcyB0byBoaWRlIElFJ3MgY2xlYXIgaW5kaWNhdG9yLCB3aGljaCBtZXNzZXNcblx0XHRcdC8vIHdpdGggaW5wdXQgc2l6ZSBkZXRlY3Rpb24uIHRoZSBzdHlsZXNoZWV0IGlzIG9ubHkgaW5qZWN0ZWQgd2hlbiB0aGVcblx0XHRcdC8vIGJyb3dzZXIgaXMgSUUsIGFuZCBjYW4gYWxzbyBiZSBkaXNhYmxlZCBieSB0aGUgYGluamVjdFN0eWxlc2AgcHJvcC5cblx0XHRcdHZhciBpbmplY3RTdHlsZXMgPSB0aGlzLnByb3BzLmluamVjdFN0eWxlcztcblxuXHRcdFx0cmV0dXJuIGlzSUUgJiYgaW5qZWN0U3R5bGVzID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuXHRcdFx0XHRcdF9faHRtbDogJ2lucHV0IycgKyB0aGlzLnN0YXRlLmlucHV0SWQgKyAnOjotbXMtY2xlYXIge2Rpc3BsYXk6IG5vbmU7fSdcblx0XHRcdFx0fSB9KSA6IG51bGw7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIHNpemVyVmFsdWUgPSBbdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsIHRoaXMucHJvcHMudmFsdWUsICcnXS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkge1xuXHRcdFx0XHRpZiAocHJldmlvdXNWYWx1ZSAhPT0gbnVsbCAmJiBwcmV2aW91c1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJldmlvdXNWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gY3VycmVudFZhbHVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZhciB3cmFwcGVyU3R5bGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcy5zdHlsZSk7XG5cdFx0XHRpZiAoIXdyYXBwZXJTdHlsZS5kaXNwbGF5KSB3cmFwcGVyU3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuXG5cdFx0XHR2YXIgaW5wdXRTdHlsZSA9IF9leHRlbmRzKHtcblx0XHRcdFx0Ym94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuXHRcdFx0XHR3aWR0aDogdGhpcy5zdGF0ZS5pbnB1dFdpZHRoICsgJ3B4J1xuXHRcdFx0fSwgdGhpcy5wcm9wcy5pbnB1dFN0eWxlKTtcblxuXHRcdFx0dmFyIGlucHV0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcy5wcm9wcywgW10pO1xuXG5cdFx0XHRjbGVhbklucHV0UHJvcHMoaW5wdXRQcm9wcyk7XG5cdFx0XHRpbnB1dFByb3BzLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuaW5wdXRDbGFzc05hbWU7XG5cdFx0XHRpbnB1dFByb3BzLmlkID0gdGhpcy5zdGF0ZS5pbnB1dElkO1xuXHRcdFx0aW5wdXRQcm9wcy5zdHlsZSA9IGlucHV0U3R5bGU7XG5cblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSwgc3R5bGU6IHdyYXBwZXJTdHlsZSB9LFxuXHRcdFx0XHR0aGlzLnJlbmRlclN0eWxlcygpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7fSwgaW5wdXRQcm9wcywgeyByZWY6IHRoaXMuaW5wdXRSZWYgfSkpLFxuXHRcdFx0XHRfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogdGhpcy5zaXplclJlZiwgc3R5bGU6IHNpemVyU3R5bGUgfSxcblx0XHRcdFx0XHRzaXplclZhbHVlXG5cdFx0XHRcdCksXG5cdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXIgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IHJlZjogdGhpcy5wbGFjZUhvbGRlclNpemVyUmVmLCBzdHlsZTogc2l6ZXJTdHlsZSB9LFxuXHRcdFx0XHRcdHRoaXMucHJvcHMucGxhY2Vob2xkZXJcblx0XHRcdFx0KSA6IG51bGxcblx0XHRcdCk7XG5cdFx0fVxuXHR9XSk7XG5cblx0cmV0dXJuIEF1dG9zaXplSW5wdXQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5BdXRvc2l6ZUlucHV0LnByb3BUeXBlcyA9IHtcblx0Y2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgb3V0ZXIgZWxlbWVudFxuXHRkZWZhdWx0VmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LCAvLyBkZWZhdWx0IGZpZWxkIHZhbHVlXG5cdGV4dHJhV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFsvLyBhZGRpdGlvbmFsIHdpZHRoIGZvciBpbnB1dCBlbGVtZW50XG5cdF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuXHRpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIC8vIGlkIHRvIHVzZSBmb3IgdGhlIGlucHV0LCBjYW4gYmUgc2V0IGZvciBjb25zaXN0ZW50IHNuYXBzaG90c1xuXHRpbmplY3RTdHlsZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gaW5qZWN0IHRoZSBjdXN0b20gc3R5bGVzaGVldCB0byBoaWRlIGNsZWFyIFVJLCBkZWZhdWx0cyB0byB0cnVlXG5cdGlucHV0Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gY2xhc3NOYW1lIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRpbnB1dFJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyByZWYgY2FsbGJhY2sgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdGlucHV0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBjc3Mgc3R5bGVzIGZvciB0aGUgaW5wdXQgZWxlbWVudFxuXHRtaW5XaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoWy8vIG1pbmltdW0gd2lkdGggZm9yIGlucHV0IGVsZW1lbnRcblx0X3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG5cdG9uQXV0b3NpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25BdXRvc2l6ZSBoYW5kbGVyOiBmdW5jdGlvbihuZXdXaWR0aCkge31cblx0b25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYywgLy8gb25DaGFuZ2UgaGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHt9XG5cdHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gcGxhY2Vob2xkZXIgdGV4dFxuXHRwbGFjZWhvbGRlcklzTWluV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gZG9uJ3QgY29sbGFwc2Ugc2l6ZSB0byBsZXNzIHRoYW4gdGhlIHBsYWNlaG9sZGVyXG5cdHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgLy8gY3NzIHN0eWxlcyBmb3IgdGhlIG91dGVyIGVsZW1lbnRcblx0dmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55IC8vIGZpZWxkIHZhbHVlXG59O1xuQXV0b3NpemVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdG1pbldpZHRoOiAxLFxuXHRpbmplY3RTdHlsZXM6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEF1dG9zaXplSW5wdXQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgYXJyb3dSZW5kZXJlciA9IGZ1bmN0aW9uIGFycm93UmVuZGVyZXIoX3JlZikge1xuXHR2YXIgb25Nb3VzZURvd24gPSBfcmVmLm9uTW91c2VEb3duO1xuXG5cdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcblx0XHRjbGFzc05hbWU6ICdTZWxlY3QtYXJyb3cnLFxuXHRcdG9uTW91c2VEb3duOiBvbk1vdXNlRG93blxuXHR9KTtcbn07XG5cbmFycm93UmVuZGVyZXIucHJvcFR5cGVzID0ge1xuXHRvbk1vdXNlRG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBhcnJvd1JlbmRlcmVyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY2xlYXJSZW5kZXJlciA9IGZ1bmN0aW9uIGNsZWFyUmVuZGVyZXIoKSB7XG5cdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcblx0XHRjbGFzc05hbWU6ICdTZWxlY3QtY2xlYXInLFxuXHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogJyZ0aW1lczsnIH1cblx0fSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjbGVhclJlbmRlcmVyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zdHJpcERpYWNyaXRpY3MgPSByZXF1aXJlKCcuL3N0cmlwRGlhY3JpdGljcycpO1xuXG52YXIgX3N0cmlwRGlhY3JpdGljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpcERpYWNyaXRpY3MpO1xuXG52YXIgX3RyaW0gPSByZXF1aXJlKCcuL3RyaW0nKTtcblxudmFyIF90cmltMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyaW0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQodmFsdWUpIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09ICcnO1xufTtcblxudmFyIGZpbHRlck9wdGlvbnMgPSBmdW5jdGlvbiBmaWx0ZXJPcHRpb25zKG9wdGlvbnMsIGZpbHRlclZhbHVlLCBleGNsdWRlT3B0aW9ucywgcHJvcHMpIHtcblx0aWYgKHByb3BzLmlnbm9yZUFjY2VudHMpIHtcblx0XHRmaWx0ZXJWYWx1ZSA9ICgwLCBfc3RyaXBEaWFjcml0aWNzMi5kZWZhdWx0KShmaWx0ZXJWYWx1ZSk7XG5cdH1cblxuXHRpZiAocHJvcHMuaWdub3JlQ2FzZSkge1xuXHRcdGZpbHRlclZhbHVlID0gZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKTtcblx0fVxuXG5cdGlmIChwcm9wcy50cmltRmlsdGVyKSB7XG5cdFx0ZmlsdGVyVmFsdWUgPSAoMCwgX3RyaW0yLmRlZmF1bHQpKGZpbHRlclZhbHVlKTtcblx0fVxuXG5cdGlmIChleGNsdWRlT3B0aW9ucykgZXhjbHVkZU9wdGlvbnMgPSBleGNsdWRlT3B0aW9ucy5tYXAoZnVuY3Rpb24gKGkpIHtcblx0XHRyZXR1cm4gaVtwcm9wcy52YWx1ZUtleV07XG5cdH0pO1xuXG5cdHJldHVybiBvcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XG5cdFx0aWYgKGV4Y2x1ZGVPcHRpb25zICYmIGV4Y2x1ZGVPcHRpb25zLmluZGV4T2Yob3B0aW9uW3Byb3BzLnZhbHVlS2V5XSkgPiAtMSkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmIChwcm9wcy5maWx0ZXJPcHRpb24pIHJldHVybiBwcm9wcy5maWx0ZXJPcHRpb24uY2FsbCh1bmRlZmluZWQsIG9wdGlvbiwgZmlsdGVyVmFsdWUpO1xuXHRcdGlmICghZmlsdGVyVmFsdWUpIHJldHVybiB0cnVlO1xuXG5cdFx0dmFyIHZhbHVlID0gb3B0aW9uW3Byb3BzLnZhbHVlS2V5XTtcblx0XHR2YXIgbGFiZWwgPSBvcHRpb25bcHJvcHMubGFiZWxLZXldO1xuXHRcdHZhciBoYXNWYWx1ZSA9IGlzVmFsaWQodmFsdWUpO1xuXHRcdHZhciBoYXNMYWJlbCA9IGlzVmFsaWQobGFiZWwpO1xuXG5cdFx0aWYgKCFoYXNWYWx1ZSAmJiAhaGFzTGFiZWwpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgdmFsdWVUZXN0ID0gaGFzVmFsdWUgPyBTdHJpbmcodmFsdWUpIDogbnVsbDtcblx0XHR2YXIgbGFiZWxUZXN0ID0gaGFzTGFiZWwgPyBTdHJpbmcobGFiZWwpIDogbnVsbDtcblxuXHRcdGlmIChwcm9wcy5pZ25vcmVBY2NlbnRzKSB7XG5cdFx0XHRpZiAodmFsdWVUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJykgdmFsdWVUZXN0ID0gKDAsIF9zdHJpcERpYWNyaXRpY3MyLmRlZmF1bHQpKHZhbHVlVGVzdCk7XG5cdFx0XHRpZiAobGFiZWxUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJykgbGFiZWxUZXN0ID0gKDAsIF9zdHJpcERpYWNyaXRpY3MyLmRlZmF1bHQpKGxhYmVsVGVzdCk7XG5cdFx0fVxuXG5cdFx0aWYgKHByb3BzLmlnbm9yZUNhc2UpIHtcblx0XHRcdGlmICh2YWx1ZVRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAnbGFiZWwnKSB2YWx1ZVRlc3QgPSB2YWx1ZVRlc3QudG9Mb3dlckNhc2UoKTtcblx0XHRcdGlmIChsYWJlbFRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAndmFsdWUnKSBsYWJlbFRlc3QgPSBsYWJlbFRlc3QudG9Mb3dlckNhc2UoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcHJvcHMubWF0Y2hQb3MgPT09ICdzdGFydCcgPyB2YWx1ZVRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAnbGFiZWwnICYmIHZhbHVlVGVzdC5zdWJzdHIoMCwgZmlsdGVyVmFsdWUubGVuZ3RoKSA9PT0gZmlsdGVyVmFsdWUgfHwgbGFiZWxUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ3ZhbHVlJyAmJiBsYWJlbFRlc3Quc3Vic3RyKDAsIGZpbHRlclZhbHVlLmxlbmd0aCkgPT09IGZpbHRlclZhbHVlIDogdmFsdWVUZXN0ICYmIHByb3BzLm1hdGNoUHJvcCAhPT0gJ2xhYmVsJyAmJiB2YWx1ZVRlc3QuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPj0gMCB8fCBsYWJlbFRlc3QgJiYgcHJvcHMubWF0Y2hQcm9wICE9PSAndmFsdWUnICYmIGxhYmVsVGVzdC5pbmRleE9mKGZpbHRlclZhbHVlKSA+PSAwO1xuXHR9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZpbHRlck9wdGlvbnM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xudmFyIG1hcCA9IFt7ICdiYXNlJzogJ0EnLCAnbGV0dGVycyc6IC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyB9LCB7ICdiYXNlJzogJ0FBJywgJ2xldHRlcnMnOiAvW1xcdUE3MzJdL2cgfSwgeyAnYmFzZSc6ICdBRScsICdsZXR0ZXJzJzogL1tcXHUwMEM2XFx1MDFGQ1xcdTAxRTJdL2cgfSwgeyAnYmFzZSc6ICdBTycsICdsZXR0ZXJzJzogL1tcXHVBNzM0XS9nIH0sIHsgJ2Jhc2UnOiAnQVUnLCAnbGV0dGVycyc6IC9bXFx1QTczNl0vZyB9LCB7ICdiYXNlJzogJ0FWJywgJ2xldHRlcnMnOiAvW1xcdUE3MzhcXHVBNzNBXS9nIH0sIHsgJ2Jhc2UnOiAnQVknLCAnbGV0dGVycyc6IC9bXFx1QTczQ10vZyB9LCB7ICdiYXNlJzogJ0InLCAnbGV0dGVycyc6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nIH0sIHsgJ2Jhc2UnOiAnQycsICdsZXR0ZXJzJzogL1tcXHUwMDQzXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDBDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VdL2cgfSwgeyAnYmFzZSc6ICdEJywgJ2xldHRlcnMnOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nIH0sIHsgJ2Jhc2UnOiAnRFonLCAnbGV0dGVycyc6IC9bXFx1MDFGMVxcdTAxQzRdL2cgfSwgeyAnYmFzZSc6ICdEeicsICdsZXR0ZXJzJzogL1tcXHUwMUYyXFx1MDFDNV0vZyB9LCB7ICdiYXNlJzogJ0UnLCAnbGV0dGVycyc6IC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nIH0sIHsgJ2Jhc2UnOiAnRicsICdsZXR0ZXJzJzogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2cgfSwgeyAnYmFzZSc6ICdHJywgJ2xldHRlcnMnOiAvW1xcdTAwNDdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RV0vZyB9LCB7ICdiYXNlJzogJ0gnLCAnbGV0dGVycyc6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2cgfSwgeyAnYmFzZSc6ICdJJywgJ2xldHRlcnMnOiAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nIH0sIHsgJ2Jhc2UnOiAnSicsICdsZXR0ZXJzJzogL1tcXHUwMDRBXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OF0vZyB9LCB7ICdiYXNlJzogJ0snLCAnbGV0dGVycyc6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2cgfSwgeyAnYmFzZSc6ICdMJywgJ2xldHRlcnMnOiAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyB9LCB7ICdiYXNlJzogJ0xKJywgJ2xldHRlcnMnOiAvW1xcdTAxQzddL2cgfSwgeyAnYmFzZSc6ICdMaicsICdsZXR0ZXJzJzogL1tcXHUwMUM4XS9nIH0sIHsgJ2Jhc2UnOiAnTScsICdsZXR0ZXJzJzogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyB9LCB7ICdiYXNlJzogJ04nLCAnbGV0dGVycyc6IC9bXFx1MDA0RVxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHUwMEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNF0vZyB9LCB7ICdiYXNlJzogJ05KJywgJ2xldHRlcnMnOiAvW1xcdTAxQ0FdL2cgfSwgeyAnYmFzZSc6ICdOaicsICdsZXR0ZXJzJzogL1tcXHUwMUNCXS9nIH0sIHsgJ2Jhc2UnOiAnTycsICdsZXR0ZXJzJzogL1tcXHUwMDRGXFx1MjRDNFxcdUZGMkZcXHUwMEQyXFx1MDBEM1xcdTAwRDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx1MDBENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxcdTAwRDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx1MDBEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXS9nIH0sIHsgJ2Jhc2UnOiAnT0knLCAnbGV0dGVycyc6IC9bXFx1MDFBMl0vZyB9LCB7ICdiYXNlJzogJ09PJywgJ2xldHRlcnMnOiAvW1xcdUE3NEVdL2cgfSwgeyAnYmFzZSc6ICdPVScsICdsZXR0ZXJzJzogL1tcXHUwMjIyXS9nIH0sIHsgJ2Jhc2UnOiAnUCcsICdsZXR0ZXJzJzogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nIH0sIHsgJ2Jhc2UnOiAnUScsICdsZXR0ZXJzJzogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2cgfSwgeyAnYmFzZSc6ICdSJywgJ2xldHRlcnMnOiAvW1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXS9nIH0sIHsgJ2Jhc2UnOiAnUycsICdsZXR0ZXJzJzogL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyB9LCB7ICdiYXNlJzogJ1QnLCAnbGV0dGVycyc6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nIH0sIHsgJ2Jhc2UnOiAnVFonLCAnbGV0dGVycyc6IC9bXFx1QTcyOF0vZyB9LCB7ICdiYXNlJzogJ1UnLCAnbGV0dGVycyc6IC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyB9LCB7ICdiYXNlJzogJ1YnLCAnbGV0dGVycyc6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2cgfSwgeyAnYmFzZSc6ICdWWScsICdsZXR0ZXJzJzogL1tcXHVBNzYwXS9nIH0sIHsgJ2Jhc2UnOiAnVycsICdsZXR0ZXJzJzogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nIH0sIHsgJ2Jhc2UnOiAnWCcsICdsZXR0ZXJzJzogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyB9LCB7ICdiYXNlJzogJ1knLCAnbGV0dGVycyc6IC9bXFx1MDA1OVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxcdTAwRERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXS9nIH0sIHsgJ2Jhc2UnOiAnWicsICdsZXR0ZXJzJzogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyB9LCB7ICdiYXNlJzogJ2EnLCAnbGV0dGVycyc6IC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2cgfSwgeyAnYmFzZSc6ICdhYScsICdsZXR0ZXJzJzogL1tcXHVBNzMzXS9nIH0sIHsgJ2Jhc2UnOiAnYWUnLCAnbGV0dGVycyc6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nIH0sIHsgJ2Jhc2UnOiAnYW8nLCAnbGV0dGVycyc6IC9bXFx1QTczNV0vZyB9LCB7ICdiYXNlJzogJ2F1JywgJ2xldHRlcnMnOiAvW1xcdUE3MzddL2cgfSwgeyAnYmFzZSc6ICdhdicsICdsZXR0ZXJzJzogL1tcXHVBNzM5XFx1QTczQl0vZyB9LCB7ICdiYXNlJzogJ2F5JywgJ2xldHRlcnMnOiAvW1xcdUE3M0RdL2cgfSwgeyAnYmFzZSc6ICdiJywgJ2xldHRlcnMnOiAvW1xcdTAwNjJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M10vZyB9LCB7ICdiYXNlJzogJ2MnLCAnbGV0dGVycyc6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyB9LCB7ICdiYXNlJzogJ2QnLCAnbGV0dGVycyc6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2cgfSwgeyAnYmFzZSc6ICdkeicsICdsZXR0ZXJzJzogL1tcXHUwMUYzXFx1MDFDNl0vZyB9LCB7ICdiYXNlJzogJ2UnLCAnbGV0dGVycyc6IC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyB9LCB7ICdiYXNlJzogJ2YnLCAnbGV0dGVycyc6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nIH0sIHsgJ2Jhc2UnOiAnZycsICdsZXR0ZXJzJzogL1tcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZdL2cgfSwgeyAnYmFzZSc6ICdoJywgJ2xldHRlcnMnOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyB9LCB7ICdiYXNlJzogJ2h2JywgJ2xldHRlcnMnOiAvW1xcdTAxOTVdL2cgfSwgeyAnYmFzZSc6ICdpJywgJ2xldHRlcnMnOiAvW1xcdTAwNjlcXHUyNEQ4XFx1RkY0OVxcdTAwRUNcXHUwMEVEXFx1MDBFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxcdTAwRUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXS9nIH0sIHsgJ2Jhc2UnOiAnaicsICdsZXR0ZXJzJzogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2cgfSwgeyAnYmFzZSc6ICdrJywgJ2xldHRlcnMnOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nIH0sIHsgJ2Jhc2UnOiAnbCcsICdsZXR0ZXJzJzogL1tcXHUwMDZDXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XS9nIH0sIHsgJ2Jhc2UnOiAnbGonLCAnbGV0dGVycyc6IC9bXFx1MDFDOV0vZyB9LCB7ICdiYXNlJzogJ20nLCAnbGV0dGVycyc6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2cgfSwgeyAnYmFzZSc6ICduJywgJ2xldHRlcnMnOiAvW1xcdTAwNkVcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx1MDBGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XS9nIH0sIHsgJ2Jhc2UnOiAnbmonLCAnbGV0dGVycyc6IC9bXFx1MDFDQ10vZyB9LCB7ICdiYXNlJzogJ28nLCAnbGV0dGVycyc6IC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyB9LCB7ICdiYXNlJzogJ29pJywgJ2xldHRlcnMnOiAvW1xcdTAxQTNdL2cgfSwgeyAnYmFzZSc6ICdvdScsICdsZXR0ZXJzJzogL1tcXHUwMjIzXS9nIH0sIHsgJ2Jhc2UnOiAnb28nLCAnbGV0dGVycyc6IC9bXFx1QTc0Rl0vZyB9LCB7ICdiYXNlJzogJ3AnLCAnbGV0dGVycyc6IC9bXFx1MDA3MFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NV0vZyB9LCB7ICdiYXNlJzogJ3EnLCAnbGV0dGVycyc6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nIH0sIHsgJ2Jhc2UnOiAncicsICdsZXR0ZXJzJzogL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyB9LCB7ICdiYXNlJzogJ3MnLCAnbGV0dGVycyc6IC9bXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXS9nIH0sIHsgJ2Jhc2UnOiAndCcsICdsZXR0ZXJzJzogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nIH0sIHsgJ2Jhc2UnOiAndHonLCAnbGV0dGVycyc6IC9bXFx1QTcyOV0vZyB9LCB7ICdiYXNlJzogJ3UnLCAnbGV0dGVycyc6IC9bXFx1MDA3NVxcdTI0RTRcXHVGRjU1XFx1MDBGOVxcdTAwRkFcXHUwMEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHUwMEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OV0vZyB9LCB7ICdiYXNlJzogJ3YnLCAnbGV0dGVycyc6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2cgfSwgeyAnYmFzZSc6ICd2eScsICdsZXR0ZXJzJzogL1tcXHVBNzYxXS9nIH0sIHsgJ2Jhc2UnOiAndycsICdsZXR0ZXJzJzogL1tcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M10vZyB9LCB7ICdiYXNlJzogJ3gnLCAnbGV0dGVycyc6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2cgfSwgeyAnYmFzZSc6ICd5JywgJ2xldHRlcnMnOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2cgfSwgeyAnYmFzZSc6ICd6JywgJ2xldHRlcnMnOiAvW1xcdTAwN0FcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXS9nIH1dO1xuXG52YXIgc3RyaXBEaWFjcml0aWNzID0gZnVuY3Rpb24gc3RyaXBEaWFjcml0aWNzKHN0cikge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG1hcC5sZW5ndGg7IGkrKykge1xuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKG1hcFtpXS5sZXR0ZXJzLCBtYXBbaV0uYmFzZSk7XG5cdH1cblx0cmV0dXJuIHN0cjtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHN0cmlwRGlhY3JpdGljczsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgdHJpbSA9IGZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJpbTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbWVudVJlbmRlcmVyID0gZnVuY3Rpb24gbWVudVJlbmRlcmVyKF9yZWYpIHtcblx0dmFyIGZvY3VzZWRPcHRpb24gPSBfcmVmLmZvY3VzZWRPcHRpb24sXG5cdCAgICBmb2N1c09wdGlvbiA9IF9yZWYuZm9jdXNPcHRpb24sXG5cdCAgICBpbnB1dFZhbHVlID0gX3JlZi5pbnB1dFZhbHVlLFxuXHQgICAgaW5zdGFuY2VQcmVmaXggPSBfcmVmLmluc3RhbmNlUHJlZml4LFxuXHQgICAgb25Gb2N1cyA9IF9yZWYub25Gb2N1cyxcblx0ICAgIG9uT3B0aW9uUmVmID0gX3JlZi5vbk9wdGlvblJlZixcblx0ICAgIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcblx0ICAgIG9wdGlvbkNsYXNzTmFtZSA9IF9yZWYub3B0aW9uQ2xhc3NOYW1lLFxuXHQgICAgb3B0aW9uQ29tcG9uZW50ID0gX3JlZi5vcHRpb25Db21wb25lbnQsXG5cdCAgICBvcHRpb25SZW5kZXJlciA9IF9yZWYub3B0aW9uUmVuZGVyZXIsXG5cdCAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuXHQgICAgcmVtb3ZlVmFsdWUgPSBfcmVmLnJlbW92ZVZhbHVlLFxuXHQgICAgc2VsZWN0VmFsdWUgPSBfcmVmLnNlbGVjdFZhbHVlLFxuXHQgICAgdmFsdWVBcnJheSA9IF9yZWYudmFsdWVBcnJheSxcblx0ICAgIHZhbHVlS2V5ID0gX3JlZi52YWx1ZUtleTtcblxuXHR2YXIgT3B0aW9uID0gb3B0aW9uQ29tcG9uZW50O1xuXG5cdHJldHVybiBvcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpKSB7XG5cdFx0dmFyIGlzU2VsZWN0ZWQgPSB2YWx1ZUFycmF5ICYmIHZhbHVlQXJyYXkuc29tZShmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIHhbdmFsdWVLZXldID09PSBvcHRpb25bdmFsdWVLZXldO1xuXHRcdH0pO1xuXHRcdHZhciBpc0ZvY3VzZWQgPSBvcHRpb24gPT09IGZvY3VzZWRPcHRpb247XG5cdFx0dmFyIG9wdGlvbkNsYXNzID0gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KShvcHRpb25DbGFzc05hbWUsIHtcblx0XHRcdCdTZWxlY3Qtb3B0aW9uJzogdHJ1ZSxcblx0XHRcdCdpcy1zZWxlY3RlZCc6IGlzU2VsZWN0ZWQsXG5cdFx0XHQnaXMtZm9jdXNlZCc6IGlzRm9jdXNlZCxcblx0XHRcdCdpcy1kaXNhYmxlZCc6IG9wdGlvbi5kaXNhYmxlZFxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0T3B0aW9uLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc05hbWU6IG9wdGlvbkNsYXNzLFxuXHRcdFx0XHRmb2N1c09wdGlvbjogZm9jdXNPcHRpb24sXG5cdFx0XHRcdGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG5cdFx0XHRcdGluc3RhbmNlUHJlZml4OiBpbnN0YW5jZVByZWZpeCxcblx0XHRcdFx0aXNEaXNhYmxlZDogb3B0aW9uLmRpc2FibGVkLFxuXHRcdFx0XHRpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcblx0XHRcdFx0aXNTZWxlY3RlZDogaXNTZWxlY3RlZCxcblx0XHRcdFx0a2V5OiAnb3B0aW9uLScgKyBpICsgJy0nICsgb3B0aW9uW3ZhbHVlS2V5XSxcblx0XHRcdFx0b25Gb2N1czogb25Gb2N1cyxcblx0XHRcdFx0b25TZWxlY3Q6IG9uU2VsZWN0LFxuXHRcdFx0XHRvcHRpb246IG9wdGlvbixcblx0XHRcdFx0b3B0aW9uSW5kZXg6IGksXG5cdFx0XHRcdHJlZjogZnVuY3Rpb24gcmVmKF9yZWYyKSB7XG5cdFx0XHRcdFx0b25PcHRpb25SZWYoX3JlZjIsIGlzRm9jdXNlZCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlbW92ZVZhbHVlOiByZW1vdmVWYWx1ZSxcblx0XHRcdFx0c2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlXG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9uUmVuZGVyZXIob3B0aW9uLCBpLCBpbnB1dFZhbHVlKVxuXHRcdCk7XG5cdH0pO1xufTtcblxubWVudVJlbmRlcmVyLnByb3BUeXBlcyA9IHtcblx0Zm9jdXNPcHRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0Zm9jdXNlZE9wdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG5cdGlucHV0VmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuXHRpbnN0YW5jZVByZWZpeDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG5cdG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0b25PcHRpb25SZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0b25TZWxlY3Q6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcblx0b3B0aW9uQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcblx0b3B0aW9uQ29tcG9uZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdG9wdGlvblJlbmRlcmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdG9wdGlvbnM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXksXG5cdHJlbW92ZVZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdHNlbGVjdFZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG5cdHZhbHVlQXJyYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXksXG5cdHZhbHVlS2V5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbWVudVJlbmRlcmVyOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfYmxvY2tFdmVudCA9IHJlcXVpcmUoJy4vdXRpbHMvYmxvY2tFdmVudCcpO1xuXG52YXIgX2Jsb2NrRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmxvY2tFdmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE9wdGlvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhPcHRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIE9wdGlvbihwcm9wcykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPcHRpb24pO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE9wdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9wdGlvbikpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzLmhhbmRsZU1vdXNlRG93biA9IF90aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gX3RoaXMuaGFuZGxlTW91c2VFbnRlci5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVNb3VzZU1vdmUgPSBfdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IF90aGlzLmhhbmRsZVRvdWNoU3RhcnQuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBfdGhpcy5oYW5kbGVUb3VjaEVuZC5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaE1vdmUgPSBfdGhpcy5oYW5kbGVUb3VjaE1vdmUuYmluZChfdGhpcyk7XG5cdFx0X3RoaXMub25Gb2N1cyA9IF90aGlzLm9uRm9jdXMuYmluZChfdGhpcyk7XG5cdFx0cmV0dXJuIF90aGlzO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKE9wdGlvbiwgW3tcblx0XHRrZXk6ICdoYW5kbGVNb3VzZURvd24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5vcHRpb24sIGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNb3VzZUVudGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VFbnRlcihldmVudCkge1xuXHRcdFx0dGhpcy5vbkZvY3VzKGV2ZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVNb3VzZU1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcblx0XHRcdHRoaXMub25Gb2N1cyhldmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnaGFuZGxlVG91Y2hFbmQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChldmVudCkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHZpZXcgaXMgYmVpbmcgZHJhZ2dlZCwgSW4gdGhpcyBjYXNlXG5cdFx0XHQvLyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgdGhlIGNsaWNrIGV2ZW50IChiZWNhdXNlIHRoZSB1c2VyIG9ubHkgd2FudHMgdG8gc2Nyb2xsKVxuXHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHJldHVybjtcblxuXHRcdFx0dGhpcy5oYW5kbGVNb3VzZURvd24oZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoTW92ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZSgpIHtcblx0XHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkXG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaFN0YXJ0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydCgpIHtcblx0XHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBub3QgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ29uRm9jdXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvbkZvY3VzKGV2ZW50KSB7XG5cdFx0XHRpZiAoIXRoaXMucHJvcHMuaXNGb2N1c2VkKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25Gb2N1cyh0aGlzLnByb3BzLm9wdGlvbiwgZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIG9wdGlvbiA9IF9wcm9wcy5vcHRpb24sXG5cdFx0XHQgICAgaW5zdGFuY2VQcmVmaXggPSBfcHJvcHMuaW5zdGFuY2VQcmVmaXgsXG5cdFx0XHQgICAgb3B0aW9uSW5kZXggPSBfcHJvcHMub3B0aW9uSW5kZXg7XG5cblx0XHRcdHZhciBjbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBvcHRpb24uY2xhc3NOYW1lKTtcblxuXHRcdFx0cmV0dXJuIG9wdGlvbi5kaXNhYmxlZCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0XHRvbk1vdXNlRG93bjogX2Jsb2NrRXZlbnQyLmRlZmF1bHQsXG5cdFx0XHRcdFx0b25DbGljazogX2Jsb2NrRXZlbnQyLmRlZmF1bHQgfSxcblx0XHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdFx0KSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0XHRzdHlsZTogb3B0aW9uLnN0eWxlLFxuXHRcdFx0XHRcdHJvbGU6ICdvcHRpb24nLFxuXHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogb3B0aW9uLmxhYmVsLFxuXHRcdFx0XHRcdG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bixcblx0XHRcdFx0XHRvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcblx0XHRcdFx0XHRvbk1vdXNlTW92ZTogdGhpcy5oYW5kbGVNb3VzZU1vdmUsXG5cdFx0XHRcdFx0b25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG5cdFx0XHRcdFx0b25Ub3VjaE1vdmU6IHRoaXMuaGFuZGxlVG91Y2hNb3ZlLFxuXHRcdFx0XHRcdG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG5cdFx0XHRcdFx0aWQ6IGluc3RhbmNlUHJlZml4ICsgJy1vcHRpb24tJyArIG9wdGlvbkluZGV4LFxuXHRcdFx0XHRcdHRpdGxlOiBvcHRpb24udGl0bGUgfSxcblx0XHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gT3B0aW9uO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuT3B0aW9uLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcblx0Y2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gY2xhc3NOYW1lIChiYXNlZCBvbiBtb3VzZSBwb3NpdGlvbilcblx0aW5zdGFuY2VQcmVmaXg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsIC8vIHVuaXF1ZSBwcmVmaXggZm9yIHRoZSBpZHMgKHVzZWQgZm9yIGFyaWEpXG5cdGlzRGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gdGhlIG9wdGlvbiBpcyBkaXNhYmxlZFxuXHRpc0ZvY3VzZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gdGhlIG9wdGlvbiBpcyBmb2N1c2VkXG5cdGlzU2VsZWN0ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gdGhlIG9wdGlvbiBpcyBzZWxlY3RlZFxuXHRvbkZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG1ldGhvZCB0byBoYW5kbGUgbW91c2VFbnRlciBvbiBvcHRpb24gZWxlbWVudFxuXHRvblNlbGVjdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIGNsaWNrIG9uIG9wdGlvbiBlbGVtZW50XG5cdG9uVW5mb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIG1vdXNlTGVhdmUgb24gb3B0aW9uIGVsZW1lbnRcblx0b3B0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLCAvLyBvYmplY3QgdGhhdCBpcyBiYXNlIGZvciB0aGF0IG9wdGlvblxuXHRvcHRpb25JbmRleDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIgLy8gaW5kZXggb2YgdGhlIG9wdGlvbiwgdXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgaWRzIGZvciBhcmlhXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBPcHRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdGlmIChldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0EnIHx8ICEoJ2hyZWYnIGluIGV2ZW50LnRhcmdldCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKGV2ZW50LnRhcmdldC50YXJnZXQpIHtcblx0XHR3aW5kb3cub3BlbihldmVudC50YXJnZXQuaHJlZiwgZXZlbnQudGFyZ2V0LnRhcmdldCk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBldmVudC50YXJnZXQuaHJlZjtcblx0fVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBWYWx1ZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhWYWx1ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gVmFsdWUocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWUpO1xuXG5cdFx0dmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFZhbHVlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVmFsdWUpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0XHRfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBfdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZChfdGhpcyk7XG5cdFx0X3RoaXMub25SZW1vdmUgPSBfdGhpcy5vblJlbW92ZS5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaEVuZFJlbW92ZSA9IF90aGlzLmhhbmRsZVRvdWNoRW5kUmVtb3ZlLmJpbmQoX3RoaXMpO1xuXHRcdF90aGlzLmhhbmRsZVRvdWNoTW92ZSA9IF90aGlzLmhhbmRsZVRvdWNoTW92ZS5iaW5kKF90aGlzKTtcblx0XHRfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gX3RoaXMuaGFuZGxlVG91Y2hTdGFydC5iaW5kKF90aGlzKTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoVmFsdWUsIFt7XG5cdFx0a2V5OiAnaGFuZGxlTW91c2VEb3duJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG5cdFx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLnZhbHVlLCBldmVudCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnByb3BzLnZhbHVlLmhyZWYpIHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnb25SZW1vdmUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBvblJlbW92ZShldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0dGhpcy5wcm9wcy5vblJlbW92ZSh0aGlzLnByb3BzLnZhbHVlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaEVuZFJlbW92ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kUmVtb3ZlKGV2ZW50KSB7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkLCBJbiB0aGlzIGNhc2Vcblx0XHRcdC8vIHdlIGRvbid0IHdhbnQgdG8gZmlyZSB0aGUgY2xpY2sgZXZlbnQgKGJlY2F1c2UgdGhlIHVzZXIgb25seSB3YW50cyB0byBzY3JvbGwpXG5cdFx0XHRpZiAodGhpcy5kcmFnZ2luZykgcmV0dXJuO1xuXG5cdFx0XHQvLyBGaXJlIHRoZSBtb3VzZSBldmVudHNcblx0XHRcdHRoaXMub25SZW1vdmUoZXZlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2hhbmRsZVRvdWNoTW92ZScsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZSgpIHtcblx0XHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBiZWluZyBkcmFnZ2VkXG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdoYW5kbGVUb3VjaFN0YXJ0Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydCgpIHtcblx0XHRcdC8vIFNldCBhIGZsYWcgdGhhdCB0aGUgdmlldyBpcyBub3QgYmVpbmcgZHJhZ2dlZFxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlclJlbW92ZUljb24nLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSZW1vdmVJY29uKCkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgIXRoaXMucHJvcHMub25SZW1vdmUpIHJldHVybjtcblx0XHRcdHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J3NwYW4nLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ1NlbGVjdC12YWx1ZS1pY29uJyxcblx0XHRcdFx0XHQnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG5cdFx0XHRcdFx0b25Nb3VzZURvd246IHRoaXMub25SZW1vdmUsXG5cdFx0XHRcdFx0b25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFJlbW92ZSxcblx0XHRcdFx0XHRvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcblx0XHRcdFx0XHRvblRvdWNoTW92ZTogdGhpcy5oYW5kbGVUb3VjaE1vdmUgfSxcblx0XHRcdFx0J1xceEQ3J1xuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXJMYWJlbCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxhYmVsKCkge1xuXHRcdFx0dmFyIGNsYXNzTmFtZSA9ICdTZWxlY3QtdmFsdWUtbGFiZWwnO1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMub25DbGljayB8fCB0aGlzLnByb3BzLnZhbHVlLmhyZWYgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2EnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBocmVmOiB0aGlzLnByb3BzLnZhbHVlLmhyZWYsIHRhcmdldDogdGhpcy5wcm9wcy52YWx1ZS50YXJnZXQsIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93biwgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVNb3VzZURvd24gfSxcblx0XHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdFx0KSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnc3BhbicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHJvbGU6ICdvcHRpb24nLCAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJywgaWQ6IHRoaXMucHJvcHMuaWQgfSxcblx0XHRcdFx0dGhpcy5wcm9wcy5jaGlsZHJlblxuXHRcdFx0KTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHRyZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgnU2VsZWN0LXZhbHVlJywgdGhpcy5wcm9wcy52YWx1ZS5kaXNhYmxlZCA/ICdTZWxlY3QtdmFsdWUtZGlzYWJsZWQnIDogJycsIHRoaXMucHJvcHMudmFsdWUuY2xhc3NOYW1lKSxcblx0XHRcdFx0XHRzdHlsZTogdGhpcy5wcm9wcy52YWx1ZS5zdHlsZSxcblx0XHRcdFx0XHR0aXRsZTogdGhpcy5wcm9wcy52YWx1ZS50aXRsZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aGlzLnJlbmRlclJlbW92ZUljb24oKSxcblx0XHRcdFx0dGhpcy5yZW5kZXJMYWJlbCgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBWYWx1ZTtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblZhbHVlLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcblx0ZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCwgLy8gZGlzYWJsZWQgcHJvcCBwYXNzZWQgdG8gUmVhY3RTZWxlY3Rcblx0aWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBVbmlxdWUgaWQgZm9yIHRoZSB2YWx1ZSAtIHVzZWQgZm9yIGFyaWFcblx0b25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBtZXRob2QgdG8gaGFuZGxlIGNsaWNrIG9uIHZhbHVlIGxhYmVsXG5cdG9uUmVtb3ZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIG1ldGhvZCB0byBoYW5kbGUgcmVtb3ZhbCBvZiB0aGUgdmFsdWVcblx0dmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQgLy8gdGhlIG9wdGlvbiBvYmplY3QgZm9yIHRoaXMgdmFsdWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFZhbHVlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==