(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["UIElements"] = factory(require("react"));
	else
		root["UIElements"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/ui-rating/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StarRating = undefined;

	var _components = __webpack_require__(2);

	var _components2 = _interopRequireDefault(_components);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.StarRating = _components2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _renderRating = __webpack_require__(3);

	__webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Widget = function (_React$Component) {
	  _inherits(Widget, _React$Component);

	  function Widget(props, context) {
	    _classCallCheck(this, Widget);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Widget).call(this, props, context));

	    _this.renderSteps = function () {
	      var ratingSteps = [];
	      var rating = _this.props.score.earned || _this.props.score;
	      var roundRating = Math.round(rating);
	      var ceilRating = Math.ceil(rating);
	      var total = _this.props.score.total || 5;

	      for (var i = 1; i <= total; i++) {
	        var type = 'empty';

	        if (i <= rating) {
	          type = 'whole';
	        } else if (roundRating == i && roundRating == ceilRating) {
	          type = 'half';
	        }

	        ratingSteps.push({
	          step: i,
	          fill: type,
	          size: _this.props.size,
	          cursor: _this.props.cursor
	        });
	      }
	      return ratingSteps;
	    };

	    _this.onMouseEnter = function (e, index) {
	      e.preventDefault();
	      _this.setState({
	        highlight: index
	      });
	    };

	    _this.onMouseLeave = function (e) {
	      e.preventDefault();
	      _this.setState({
	        highlight: -1
	      });
	    };

	    _this.onMouseClick = function (e, index) {
	      e.preventDefault();
	      if (index === _this.state.selected) {
	        _this.setState({
	          selected: -1
	        }, _this.props.callback(-1));
	      } else {
	        _this.setState({
	          selected: index
	        }, _this.props.callback(index + 1));
	      }
	    };

	    _this.state = {
	      selected: -1,
	      highlight: -1
	    };
	    return _this;
	  }

	  _createClass(Widget, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var ratingSteps = this.renderSteps();
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'ui-rating-widget',
	          style: { height: this.props.size },
	          onMouseLeave: function onMouseLeave(e) {
	            return _this2.onMouseLeave(e);
	          }
	        },
	        _react2.default.createElement(
	          'svg',
	          {
	            version: '1.1', id: 'Layer_1',
	            xmlns: 'http://www.w3.org/2000/svg',
	            xlink: 'http://www.w3.org/1999/xlink',
	            x: '0px', y: '0px',
	            style: { display: 'none' },
	            space: 'preserve'
	          },
	          _react2.default.createElement(
	            'symbol',
	            { id: 'star-empty', viewBox: '25 26 23 22' },
	            _react2.default.createElement('path', { className: 'empty-icon', d: 'M46,34.1c-0.1-0.2-0.3-0.3-0.5-0.3h-6.7l-2.3-6.5c-0.1-0.2-0.3-0.3-0.5-0.3c-0.2,0-0.4,0.1-0.5,0.3l-2.3,6.5 h-6.7c-0.2,0-0.4,0.1-0.5,0.3c0,0.2,0,0.4,0.2,0.5l5.2,4.2l-2.3,6.7c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.4,0.2,0.6,0l6.2-3.7l6.2,3.7 c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.1-0.5l-2.3-6.7l5.2-4.2C46,34.5,46,34.3,46,34.1z' })
	          ),
	          _react2.default.createElement(
	            'symbol',
	            { id: 'star-whole', viewBox: '25 26 23 22' },
	            _react2.default.createElement('path', { className: 'full-icon', d: 'M46.5,34.1c-0.1-0.2-0.3-0.3-0.5-0.3h-6.7L37,27.3c-0.1-0.2-0.3-0.3-0.5-0.3c-0.2,0-0.4,0.1-0.5,0.3l-2.3,6.5 H27c-0.2,0-0.4,0.1-0.5,0.3c0,0.2,0,0.4,0.2,0.5l5.2,4.2l-2.3,6.7c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.4,0.2,0.6,0l6.2-3.7l6.2,3.7 c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.1-0.5L41,38.8l5.2-4.2C46.5,34.5,46.5,34.3,46.5,34.1z' })
	          ),
	          _react2.default.createElement(
	            'symbol',
	            { id: 'star-whole-highlight', viewBox: '25 26 23 22' },
	            _react2.default.createElement('path', { className: 'full-icon highlight', d: 'M46.5,34.1c-0.1-0.2-0.3-0.3-0.5-0.3h-6.7L37,27.3c-0.1-0.2-0.3-0.3-0.5-0.3c-0.2,0-0.4,0.1-0.5,0.3l-2.3,6.5 H27c-0.2,0-0.4,0.1-0.5,0.3c0,0.2,0,0.4,0.2,0.5l5.2,4.2l-2.3,6.7c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.4,0.2,0.6,0l6.2-3.7l6.2,3.7 c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.1-0.5L41,38.8l5.2-4.2C46.5,34.5,46.5,34.3,46.5,34.1z' })
	          ),
	          _react2.default.createElement(
	            'symbol',
	            { id: 'star-half', viewBox: '25 26 23 22' },
	            _react2.default.createElement('path', { className: 'empty-icon', d: 'M46,34.1c-0.1-0.2-0.3-0.3-0.5-0.3h-6.7l-2.3-6.5c-0.1-0.2-0.3-0.3-0.5-0.3c-0.2,0-0.4,0.1-0.5,0.3l-2.3,6.5 h-6.7c-0.2,0-0.4,0.1-0.5,0.3c0,0.2,0,0.4,0.2,0.5l5.2,4.2l-2.3,6.7c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.4,0.2,0.6,0l6.2-3.7l6.2,3.7 c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.1-0.5l-2.3-6.7l5.2-4.2C46,34.5,46,34.3,46,34.1z' }),
	            _react2.default.createElement('path', { className: 'full-icon', d: 'M40.6,38.8' }),
	            _react2.default.createElement('path', { className: 'full-icon', d: 'M35.7,42.9L36,27.1c-0.1-0.2,0-0.1-0.2-0.1s-0.2,0.1-0.3,0.3l-2.3,6.5h-6.7c-0.2,0-0.4,0.1-0.5,0.3 c0,0.2,0,0.4,0.2,0.5l5.2,4.2l-2.3,6.7c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.4,0.2,0.6,0l6.1-3.6' })
	          )
	        ),
	        ratingSteps.map(function (item, index) {
	          return _react2.default.createElement(_renderRating.RenderIcon, _extends({
	            key: index,
	            data: item,
	            index: index,
	            highlight: _this2.state.highlight,
	            selected: _this2.state.selected,
	            onMouseEnter: _this2.onMouseEnter,
	            onMouseClick: _this2.onMouseClick
	          }, _this2.props));
	        })
	      );
	    }
	  }]);

	  return Widget;
	}(_react2.default.Component);

	Widget.propTypes = {
	  score: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.shape({
	    earned: _react.PropTypes.number,
	    total: _react.PropTypes.number
	  })]),
	  disabled: _react.PropTypes.bool,
	  size: _react.PropTypes.string,
	  cursor: _react.PropTypes.string,
	  callback: _react.PropTypes.func
	};

	Widget.defaultProps = {
	  size: '12px',
	  cursor: "auto",
	  disabled: true,
	  score: {
	    earned: 0,
	    total: 5
	  },
	  evalScripts: 'once',
	  callback: function callback() {}
	};

	exports.default = Widget;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RenderIcon = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _doesBrowserSupportSvg = __webpack_require__(6);

	var _svgWidget = __webpack_require__(5);

	var _pngWidget = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RenderIcon = exports.RenderIcon = function RenderIcon(props) {
	  var disabled = props.disabled;
	  var highlight = props.highlight;
	  var index = props.index;
	  var selected = props.selected;

	  var iconType = '#star-empty';

	  if (!disabled) {
	    if (highlight >= index) {
	      iconType = '#star-whole-highlight';
	    } else if (selected >= index && highlight === -1) {
	      iconType = '#star-whole';
	    } else if (selected === -1 && highlight === -1) {
	      iconType = '#star-' + props.data.fill;
	    }
	  } else {
	    iconType = '#star-' + props.data.fill;
	  }

	  if ((0, _doesBrowserSupportSvg.doesBrowserSupportSVG)()) {
	    return _react2.default.createElement(_svgWidget.SVGIcon, _extends({ iconType: iconType }, props));
	  }
	  return _react2.default.createElement(_pngWidget.PNGIcon, _extends({ iconType: iconType }, props));
	};

	RenderIcon.propTypes = {
	  index: _react.PropTypes.number.isRequired,
	  highlight: _react.PropTypes.number,
	  selected: _react.PropTypes.number
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PNGIcon = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var empty_png = __webpack_require__(11);
	var whole_png = __webpack_require__(13);
	var half_png = __webpack_require__(12);

	var PNGIcon = exports.PNGIcon = (_temp = _class = function (_Component) {
	  _inherits(PNGIcon, _Component);

	  function PNGIcon(props, context) {
	    _classCallCheck(this, PNGIcon);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PNGIcon).call(this, props, context));

	    var _this$props = _this.props;
	    var size = _this$props.size;
	    var cursor = _this$props.cursor;

	    var SIZE = size ? size : '16px';
	    var CURSOR = cursor ? cursor : 'auto';

	    _this.state = {
	      pngStyle: {
	        cursor: CURSOR,
	        fontSize: SIZE,
	        width: SIZE,
	        height: SIZE,
	        lineHeight: SIZE,
	        overflow: 'hidden'
	      }
	    };
	    return _this;
	  }

	  _createClass(PNGIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var index = _props.index;
	      var _onMouseEnter = _props.onMouseEnter;
	      var onMouseClick = _props.onMouseClick;

	      var srcFile = empty_png;
	      switch (this.props.data.fill) {
	        case "whole":
	          srcFile = whole_png;
	          break;
	        case "half":
	          srcFile = half_png;
	          break;
	        default:
	          srcFile = empty_png;
	      }

	      return _react2.default.createElement('img', {
	        src: srcFile,
	        style: this.state.pngStyle,
	        onMouseEnter: function onMouseEnter(e) {
	          return _onMouseEnter(e, index);
	        },
	        onClick: function onClick(e) {
	          return onMouseClick(e, index);
	        }
	      });
	    }
	  }]);

	  return PNGIcon;
	}(_react.Component), _class.propTypes = {
	  onMouseEnter: _react.PropTypes.func.isRequired,
	  onMouseClick: _react.PropTypes.func.isRequired,
	  index: _react.PropTypes.number.isRequired,
	  highlight: _react.PropTypes.number.isRequired
	}, _temp);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SVGIcon = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SVGIcon = exports.SVGIcon = (_temp = _class = function (_Component) {
	  _inherits(SVGIcon, _Component);

	  function SVGIcon(props, context) {
	    _classCallCheck(this, SVGIcon);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SVGIcon).call(this, props, context));

	    var _this$props = _this.props;
	    var size = _this$props.size;
	    var cursor = _this$props.cursor;

	    var SIZE = size || '16px';
	    var CURSOR = cursor || 'auto';

	    _this.state = {
	      svgStyle: {
	        cursor: CURSOR,
	        fontSize: SIZE,
	        width: SIZE,
	        height: SIZE,
	        lineHeight: SIZE,
	        overflow: 'hidden'
	      }
	    };
	    return _this;
	  }

	  _createClass(SVGIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var iconType = _props.iconType;
	      var index = _props.index;
	      var onMouseEnter = _props.onMouseEnter;
	      var onMouseClick = _props.onMouseClick;


	      return _react2.default.createElement(
	        'svg',
	        {
	          style: this.state.svgStyle,
	          onMouseOver: function onMouseOver(e) {
	            return onMouseEnter(e, index);
	          },
	          onTouchEnd: function onTouchEnd(e) {
	            return onMouseClick(e, index);
	          },
	          onClick: function onClick(e) {
	            return onMouseClick(e, index);
	          }
	        },
	        _react2.default.createElement('use', { xlinkHref: iconType })
	      );
	    }
	  }]);

	  return SVGIcon;
	}(_react.Component), _class.propTypes = {
	  onMouseEnter: _react.PropTypes.func.isRequired,
	  onMouseClick: _react.PropTypes.func.isRequired,
	  iconType: _react.PropTypes.string.isRequired,
	  index: _react.PropTypes.number.isRequired
	}, _temp);

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.doesBrowserSupportSVG = doesBrowserSupportSVG;
	function doesBrowserSupportSVG() {
	  return typeof document !== 'undefined' && document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1');
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".ui-rating-widget .empty-icon{fill:none;stroke:#464646;stroke-miterlimit:10}.ui-rating-widget .full-icon{fill:#F7941D;stroke:#F7941D;stroke-miterlimit:10}.ui-rating-widget .highlight{fill:#F7941D;stroke:#F7941D}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=compressed!./styles.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js?outputStyle=compressed!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABzUlEQVRYw8WWv0vDQBTHQwkiIh3EP8I/wEE6FqeOUhz6F/RvEHHp39Cx5HdISIopDkWkOHUqGZ2kc2bHDqLvWy5iQ5M0d8n14ME1fff9vPdy73KKIjCCIFBhIhpCwzCMAewo8CiKWpqmfcAwP0b2dwT/gWEuPQACx2kAmMvOvvcPnlahJzP7ZTYAPJOVfXcPPK1CV0b273kB4L+ms+8UwNMqdBqB+75/ToDXsgDgA18uiOu6l5TBja7rA7InEjPYhksOAGctYWsNaEET2mBky/rIevqLA8JrYMVgK6ZpXtCPlUR4aiuwt1WwLKud09tN2RLMnVdh2zY22UICfAHW3k3oOM4pOcwbhM/BKOwEcjihHftcNxya0D60HVVa4NQId6BZ6UzwPK9FCyc1wCfQ4jqYptOpSiIbgQA20OCCY1CfXolWABrcAVD5+jW8gj53ACQwqmETjkQCmNUQwEwkgHWJ+DezIp81F5z6tl0i/kZfs2sY5kVBQqtyAAW3n5g21m3WH8+03av6n3HdkkhwmBH6pGf3YRjmHir4Dz7wzXTCkOf9j5lAAoEqRyk7ypFAepMa81TghRY+0EFyVnkxG1gLDWhVXkxfLm5wFa1fxxAgmqJNi7YAAAAASUVORK5CYII="

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAE4UExURQAAAH9/f5+fn6qqqvidSf9/f/idSf+/P7+/v5+fn/ieSKOjo5+fn6Kiop6env+ZTPqfSZ+fn5mZmfidSZ6envifTP+bVaCgoKGhofaeT5+fn/ifSqCgoJ6enp+fn/meSfedS5+fn/idSP+jSJubm56enqCgoJ+fn/meSvqhSfmdSZ6env+qVfWfTfmdSvKlWemqVZ6enp+fn56envieSp+fn56envifSqCgoJ+fn5+fn6qqqvmeSvidS/ieSPifSqCgoPmfSfigTPmdSf+qVfmeSf+fX6GhoaWlpfidSfaeSp+fn5+fn6CgoPmeSJ+fn56envmeSeyjW/meSfieSfmgSvmfSvmdSJ+fn56envmdSaKioveeTaGhofieSqGhoaGhofmeSp+fn/ieS/meTJ+fn/qeSfmeSWe8OmkAAABldFJOUwACzQzNAsUEBMX9Dv065wpoaArxWigSfEQ6vX6ltzi7RMv5DhK/r36vNOf5Bji9FAy5KPGhg6GdVLsIBrlUy6Wdg3y3DFoINBSVOpWzVt3dsdsOsXpWs+fber9CQlpSSlLV1UpazGAPLQAAARVJREFUOMt90uV2g0AQBeANRUKSxuru7u5N3d3dZ/r+b9Bsl54yA7vzB+bcD1jOuULQ8ZLCPF/P5tx5/0gYwQvCmxHYCJYp/0QEeDUAVwJfnz+hBPCoBQ8K9Ojyhm8FoDI+H1/GAExU0GRsZLtp2h2UzysAkPVn+6pb92S6YVdheCA8U1adqF1FPYCObiG6XD3w0/IjW6M60BgcdmczHrQs/v3GcH8c6F0K9agUBc2kW84cB2usOF4nBUO8mzX8DZMMrHAwz8A6BzMMXHJwxsBJkKcyATil+UVK5W0DuwsKZNIEHPzGdru8r7cgWqt8OT6/dtSSOL4rgwIB+3ib9/7XZCELhwTcXOXooYr3R2TPRTtcVJcfGuyg/F5aeTsAAAAASUVORK5CYII="

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+0lEQVRYw8WVzUoCURTHRSQiwkX0ED1Ai3ApbbyVldkHEgStfIaINj6DS7/KoaigpIVIiCtX4rJVuHaXaGaOEHb+OYJOzujcO3MdOHCZOef/O+fcc++4XAJP6z7igYloCD3d9HYENhd44/ncrSbZGwzreVQf6iUDfRjW0hOgyqvDBLCWXT0bwke6wGRWX9YngHeyqvfr4SNd8MuovmSUAL45Cv9O7/hUA/gggUAfPo7AW3cny1RhoWeSgNaFAny5IG3lcJUq2OimtiJqil2RZTBcZHV1CljfiUEMxUKDtKAJbTDGoDQ4lzjHFNScFSBqYIEJtqubCa7Qi4os+EgSFbAHw3W96510tp2DszKYY1vRudnDkBUlwItgTRzCTnZ/kRzyDsLzYJiehK9saIGm9sl2OGlCe6bj+KmEPRSg2AhXoGnpTmjeHrspMGEDPAEtrovp4/HMQ8dFFThqKjS44H/HMxNcE+0ANLgToOszLJoANLgToP2L2TADMf4Ekixnw9nPCSQQqE0Zsh/YFJ8aF7ytHHjNxKmyV/qbrcOwNksSWpYTIGGfgWCVBmvznz+9w7eJg0ha1tufYlEd+J0gR42HU8NLBd/gA1/dIEY59p/FNXAdAtTGmS8U+CIGsdp2xXk68EKBF3SRLFkO1h7EQgNaloPpz8UNtqL1C6kmJkSv6tImAAAAAElFTkSuQmCC"

/***/ }
/******/ ])
});
;