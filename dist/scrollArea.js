(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ScrollArea"] = factory(require("react"));
	else
		root["ScrollArea"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(1);
	
	var _ScrollArea = __webpack_require__(5);
	
	var _ScrollArea2 = _interopRequireDefault(_ScrollArea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ScrollArea2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./scrollArea.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./scrollArea.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".scrollarea-content {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  position: relative;\n}\n.scrollarea-content:focus {\n  outline: 0;\n}\n.scrollarea {\n  position: relative;\n  overflow: hidden;\n}\n.scrollarea .scrollbar-container {\n  position: absolute;\n  background: none;\n  opacity: .1;\n  z-index: 9999;\n  -webkit-transition: all .4s;\n  -moz-transition: all .4s;\n  -ms-transition: all .4s;\n  -o-transition: all .4s;\n  transition: all .4s;\n}\n.scrollarea .scrollbar-container.horizontal {\n  width: 100%;\n  height: 10px;\n  left: 0;\n  bottom: 0;\n}\n.scrollarea .scrollbar-container.horizontal .scrollbar {\n  width: 20px;\n  height: 8px;\n  background: black;\n  margin-top: 1px;\n}\n.scrollarea .scrollbar-container.vertical {\n  width: 10px;\n  height: 100%;\n  right: 0;\n  top: 0;\n}\n.scrollarea .scrollbar-container.vertical .scrollbar {\n  width: 8px;\n  height: 20px;\n  background: black;\n  margin-left: 1px;\n}\n.scrollarea .scrollbar-container:hover {\n  background: gray;\n  opacity: .6 !important;\n}\n.scrollarea .scrollbar-container.active {\n  background: gray;\n  opacity: .6 !important;\n}\n.scrollarea:hover .scrollbar-container {\n  opacity: .3;\n}\n", ""]);
	
	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Scrollbar = __webpack_require__(7);
	
	var _Scrollbar2 = _interopRequireDefault(_Scrollbar);
	
	var _utils = __webpack_require__(33);
	
	var _lineHeight2 = __webpack_require__(34);
	
	var _lineHeight3 = _interopRequireDefault(_lineHeight2);
	
	var _reactMotion = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var eventTypes = {
	    wheel: 'wheel',
	    api: 'api',
	    touch: 'touch',
	    touchEnd: 'touchEnd',
	    mousemove: 'mousemove',
	    keyPress: 'keypress'
	};
	
	var ScrollArea = function (_React$Component) {
	    _inherits(ScrollArea, _React$Component);
	
	    function ScrollArea(props) {
	        _classCallCheck(this, ScrollArea);
	
	        var _this = _possibleConstructorReturn(this, (ScrollArea.__proto__ || Object.getPrototypeOf(ScrollArea)).call(this, props));
	
	        _this.state = {
	            topPosition: 0,
	            leftPosition: 0,
	            realHeight: 0,
	            containerHeight: 0,
	            realWidth: 0,
	            containerWidth: 0
	        };
	
	        _this.scrollArea = {
	            refresh: function refresh() {
	                _this.setSizesToState();
	            },
	            scrollTop: function scrollTop() {
	                _this.scrollTop();
	            },
	            scrollBottom: function scrollBottom() {
	                _this.scrollBottom();
	            },
	            scrollYTo: function scrollYTo(position) {
	                _this.scrollYTo(position);
	            },
	            scrollLeft: function scrollLeft() {
	                _this.scrollLeft();
	            },
	            scrollRight: function scrollRight() {
	                _this.scrollRight();
	            },
	            scrollXTo: function scrollXTo(position) {
	                _this.scrollXTo(position);
	            }
	        };
	
	        _this.evntsPreviousValues = {
	            clientX: 0,
	            clientY: 0,
	            deltaX: 0,
	            deltaY: 0
	        };
	
	        _this.bindedHandleWindowResize = _this.handleWindowResize.bind(_this);
	        return _this;
	    }
	
	    _createClass(ScrollArea, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                scrollArea: this.scrollArea
	            };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.addEventListener("resize", this.bindedHandleWindowResize);
	            }
	            this.lineHeightPx = (0, _lineHeight3.default)((0, _utils.findDOMNode)(this.content));
	            this.setSizesToState();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.removeEventListener("resize", this.bindedHandleWindowResize);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.setSizesToState();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                contentClassName = _props.contentClassName,
	                ownerDocument = _props.ownerDocument;
	
	            var withMotion = this.props.smoothScrolling && (this.state.eventType === eventTypes.wheel || this.state.eventType === eventTypes.api || this.state.eventType === eventTypes.touchEnd || this.state.eventType === eventTypes.keyPress);
	
	            var scrollbarY = this.canScrollY() ? _react2.default.createElement(_Scrollbar2.default, {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realHeight,
	                containerSize: this.state.containerHeight,
	                position: this.state.topPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarYPositionChange.bind(this),
	                containerStyle: this.props.verticalContainerStyle,
	                scrollbarStyle: this.props.verticalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                onFocus: this.focusContent.bind(this),
	                type: 'vertical' }) : null;
	
	            var scrollbarX = this.canScrollX() ? _react2.default.createElement(_Scrollbar2.default, {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realWidth,
	                containerSize: this.state.containerWidth,
	                position: this.state.leftPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarXPositionChange.bind(this),
	                containerStyle: this.props.horizontalContainerStyle,
	                scrollbarStyle: this.props.horizontalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                onFocus: this.focusContent.bind(this),
	                type: 'horizontal' }) : null;
	
	            if (typeof children === 'function') {
	                (0, _utils.warnAboutFunctionChild)();
	                children = children();
	            } else {
	                (0, _utils.warnAboutElementChild)();
	            }
	
	            var classes = 'scrollarea ' + (className || '');
	            var contentClasses = 'scrollarea-content ' + (contentClassName || '');
	
	            var contentStyle = {
	                marginTop: -this.state.topPosition,
	                marginLeft: -this.state.leftPosition
	            };
	            var springifiedContentStyle = withMotion ? (0, _utils.modifyObjValues)(contentStyle, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : contentStyle;
	
	            return _react2.default.createElement(
	                _reactMotion.Motion,
	                { style: springifiedContentStyle },
	                function (style) {
	                    return _react2.default.createElement(
	                        'div',
	                        {
	                            ref: function ref(x) {
	                                return _this2.wrapper = x;
	                            },
	                            className: classes,
	                            style: _this2.props.style,
	                            onWheel: _this2.handleWheel.bind(_this2)
	                        },
	                        _react2.default.createElement(
	                            'div',
	                            {
	                                ref: function ref(x) {
	                                    return _this2.content = x;
	                                },
	                                style: _extends({}, _this2.props.contentStyle, style),
	                                className: contentClasses,
	                                onTouchStart: _this2.handleTouchStart.bind(_this2),
	                                onTouchMove: _this2.handleTouchMove.bind(_this2),
	                                onTouchEnd: _this2.handleTouchEnd.bind(_this2),
	                                onKeyDown: _this2.handleKeyDown.bind(_this2),
	                                tabIndex: _this2.props.focusableTabIndex
	                            },
	                            children
	                        ),
	                        scrollbarY,
	                        scrollbarX
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'setStateFromEvent',
	        value: function setStateFromEvent(newState, eventType) {
	            if (this.props.onScroll) {
	                this.props.onScroll(newState);
	            }
	            this.setState(_extends({}, newState, { eventType: eventType }));
	        }
	    }, {
	        key: 'handleTouchStart',
	        value: function handleTouchStart(e) {
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                var _touches$ = touches[0],
	                    clientX = _touches$.clientX,
	                    clientY = _touches$.clientY;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	            }
	        }
	    }, {
	        key: 'handleTouchMove',
	        value: function handleTouchMove(e) {
	            e.preventDefault();
	            e.stopPropagation();
	
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                var _touches$2 = touches[0],
	                    clientX = _touches$2.clientX,
	                    clientY = _touches$2.clientY;
	
	
	                var deltaY = this.eventPreviousValues.clientY - clientY;
	                var deltaX = this.eventPreviousValues.clientX - clientX;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    deltaY: deltaY,
	                    deltaX: deltaX,
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	
	                this.setStateFromEvent(this.composeNewState(-deltaX, -deltaY));
	            }
	        }
	    }, {
	        key: 'handleTouchEnd',
	        value: function handleTouchEnd(e) {
	            var _eventPreviousValues = this.eventPreviousValues,
	                deltaX = _eventPreviousValues.deltaX,
	                deltaY = _eventPreviousValues.deltaY,
	                timestamp = _eventPreviousValues.timestamp;
	
	            if (typeof deltaX === 'undefined') deltaX = 0;
	            if (typeof deltaY === 'undefined') deltaY = 0;
	            if (Date.now() - timestamp < 200) {
	                this.setStateFromEvent(this.composeNewState(-deltaX * 10, -deltaY * 10), eventTypes.touchEnd);
	            }
	
	            this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                deltaY: 0,
	                deltaX: 0
	            });
	        }
	    }, {
	        key: 'handleScrollbarMove',
	        value: function handleScrollbarMove(deltaY, deltaX) {
	            this.setStateFromEvent(this.composeNewState(deltaX, deltaY));
	        }
	    }, {
	        key: 'handleScrollbarXPositionChange',
	        value: function handleScrollbarXPositionChange(position) {
	            this.scrollXTo(position);
	        }
	    }, {
	        key: 'handleScrollbarYPositionChange',
	        value: function handleScrollbarYPositionChange(position) {
	            this.scrollYTo(position);
	        }
	    }, {
	        key: 'handleWheel',
	        value: function handleWheel(e) {
	            var deltaY = e.deltaY;
	            var deltaX = e.deltaX;
	
	            if (this.props.swapWheelAxes) {
	                var _ref = [deltaX, deltaY];
	                deltaY = _ref[0];
	                deltaX = _ref[1];
	            }
	
	            /*
	             * WheelEvent.deltaMode can differ between browsers and must be normalized
	             * e.deltaMode === 0: The delta values are specified in pixels
	             * e.deltaMode === 1: The delta values are specified in lines
	             * https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode
	             */
	            if (e.deltaMode === 1) {
	                deltaY = deltaY * this.lineHeightPx;
	                deltaX = deltaX * this.lineHeightPx;
	            }
	
	            deltaY = deltaY * this.props.speed;
	            deltaX = deltaX * this.props.speed;
	
	            var newState = this.composeNewState(-deltaX, -deltaY);
	
	            if (newState.topPosition && this.state.topPosition !== newState.topPosition || newState.leftPosition && this.state.leftPosition !== newState.leftPosition || this.props.stopScrollPropagation) {
	                e.preventDefault();
	                e.stopPropagation();
	            }
	
	            this.setStateFromEvent(newState, eventTypes.wheel);
	            this.focusContent();
	        }
	    }, {
	        key: 'handleKeyDown',
	        value: function handleKeyDown(e) {
	            // only handle if scroll area is in focus
	            if (e.target.tagName.toLowerCase() !== 'input') {
	                var deltaY = 0;
	                var deltaX = 0;
	                var _lineHeight = this.lineHeightPx ? this.lineHeightPx : 10;
	
	                switch (e.keyCode) {
	                    case 33:
	                        // page up
	                        deltaY = this.state.containerHeight - _lineHeight;
	                        break;
	                    case 34:
	                        // page down
	                        deltaY = -this.state.containerHeight + _lineHeight;
	                        break;
	                    case 37:
	                        // left
	                        deltaX = _lineHeight;
	                        break;
	                    case 38:
	                        // up
	                        deltaY = _lineHeight;
	                        break;
	                    case 39:
	                        // right
	                        deltaX = -_lineHeight;
	                        break;
	                    case 40:
	                        // down
	                        deltaY = -_lineHeight;
	                        break;
	                }
	
	                // only compose new state if key code matches those above
	                if (deltaY !== 0 || deltaX !== 0) {
	                    var newState = this.composeNewState(deltaX, deltaY);
	
	                    e.preventDefault();
	                    e.stopPropagation();
	
	                    this.setStateFromEvent(newState, eventTypes.keyPress);
	                }
	            }
	        }
	    }, {
	        key: 'handleWindowResize',
	        value: function handleWindowResize() {
	            var newState = this.computeSizes();
	            newState = this.getModifiedPositionsIfNeeded(newState);
	            this.setStateFromEvent(newState);
	        }
	    }, {
	        key: 'composeNewState',
	        value: function composeNewState(deltaX, deltaY) {
	            var newState = this.computeSizes();
	
	            if (this.canScrollY(newState)) {
	                newState.topPosition = this.computeTopPosition(deltaY, newState);
	            } else {
	                newState.topPosition = 0;
	            }
	            if (this.canScrollX(newState)) {
	                newState.leftPosition = this.computeLeftPosition(deltaX, newState);
	            }
	
	            return newState;
	        }
	    }, {
	        key: 'computeTopPosition',
	        value: function computeTopPosition(deltaY, sizes) {
	            var newTopPosition = this.state.topPosition - deltaY;
	            return this.normalizeTopPosition(newTopPosition, sizes);
	        }
	    }, {
	        key: 'computeLeftPosition',
	        value: function computeLeftPosition(deltaX, sizes) {
	            var newLeftPosition = this.state.leftPosition - deltaX;
	            return this.normalizeLeftPosition(newLeftPosition, sizes);
	        }
	    }, {
	        key: 'normalizeTopPosition',
	        value: function normalizeTopPosition(newTopPosition, sizes) {
	            if (newTopPosition > sizes.realHeight - sizes.containerHeight) {
	                newTopPosition = sizes.realHeight - sizes.containerHeight;
	            }
	            if (newTopPosition < 0) {
	                newTopPosition = 0;
	            }
	            return newTopPosition;
	        }
	    }, {
	        key: 'normalizeLeftPosition',
	        value: function normalizeLeftPosition(newLeftPosition, sizes) {
	            if (newLeftPosition > sizes.realWidth - sizes.containerWidth) {
	                newLeftPosition = sizes.realWidth - sizes.containerWidth;
	            } else if (newLeftPosition < 0) {
	                newLeftPosition = 0;
	            }
	
	            return newLeftPosition;
	        }
	    }, {
	        key: 'computeSizes',
	        value: function computeSizes() {
	            var realHeight = this.content.offsetHeight;
	            var containerHeight = this.wrapper.offsetHeight;
	            var realWidth = this.content.offsetWidth;
	            var containerWidth = this.wrapper.offsetWidth;
	
	            return {
	                realHeight: realHeight,
	                containerHeight: containerHeight,
	                realWidth: realWidth,
	                containerWidth: containerWidth
	            };
	        }
	    }, {
	        key: 'setSizesToState',
	        value: function setSizesToState() {
	            var sizes = this.computeSizes();
	            if (sizes.realHeight !== this.state.realHeight || sizes.realWidth !== this.state.realWidth) {
	                this.setStateFromEvent(this.getModifiedPositionsIfNeeded(sizes));
	            }
	        }
	    }, {
	        key: 'scrollTop',
	        value: function scrollTop() {
	            this.scrollYTo(0);
	        }
	    }, {
	        key: 'scrollBottom',
	        value: function scrollBottom() {
	            this.scrollYTo(this.state.realHeight - this.state.containerHeight);
	        }
	    }, {
	        key: 'scrollLeft',
	        value: function scrollLeft() {
	            this.scrollXTo(0);
	        }
	    }, {
	        key: 'scrollRight',
	        value: function scrollRight() {
	            this.scrollXTo(this.state.realWidth - this.state.containerWidth);
	        }
	    }, {
	        key: 'scrollYTo',
	        value: function scrollYTo(topPosition) {
	            if (this.canScrollY()) {
	                var position = this.normalizeTopPosition(topPosition, this.computeSizes());
	                this.setStateFromEvent({ topPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'scrollXTo',
	        value: function scrollXTo(leftPosition) {
	            if (this.canScrollX()) {
	                var position = this.normalizeLeftPosition(leftPosition, this.computeSizes());
	                this.setStateFromEvent({ leftPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'canScrollY',
	        value: function canScrollY() {
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var scrollableY = state.realHeight > state.containerHeight;
	            return scrollableY && this.props.vertical;
	        }
	    }, {
	        key: 'canScrollX',
	        value: function canScrollX() {
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var scrollableX = state.realWidth > state.containerWidth;
	            return scrollableX && this.props.horizontal;
	        }
	    }, {
	        key: 'getModifiedPositionsIfNeeded',
	        value: function getModifiedPositionsIfNeeded(newState) {
	            var bottomPosition = newState.realHeight - newState.containerHeight;
	            if (this.state.topPosition >= bottomPosition) {
	                newState.topPosition = this.canScrollY(newState) ? (0, _utils.positiveOrZero)(bottomPosition) : 0;
	            }
	
	            var rightPosition = newState.realWidth - newState.containerWidth;
	            if (this.state.leftPosition >= rightPosition) {
	                newState.leftPosition = this.canScrollX(newState) ? (0, _utils.positiveOrZero)(rightPosition) : 0;
	            }
	
	            return newState;
	        }
	    }, {
	        key: 'focusContent',
	        value: function focusContent() {
	            if (this.content) {
	                (0, _utils.findDOMNode)(this.content).focus();
	            }
	        }
	    }]);
	
	    return ScrollArea;
	}(_react2.default.Component);
	
	exports.default = ScrollArea;
	
	
	ScrollArea.childContextTypes = {
	    scrollArea: _react2.default.PropTypes.object
	};
	
	ScrollArea.propTypes = {
	    className: _react2.default.PropTypes.string,
	    style: _react2.default.PropTypes.object,
	    speed: _react2.default.PropTypes.number,
	    contentClassName: _react2.default.PropTypes.string,
	    contentStyle: _react2.default.PropTypes.object,
	    vertical: _react2.default.PropTypes.bool,
	    verticalContainerStyle: _react2.default.PropTypes.object,
	    verticalScrollbarStyle: _react2.default.PropTypes.object,
	    horizontal: _react2.default.PropTypes.bool,
	    horizontalContainerStyle: _react2.default.PropTypes.object,
	    horizontalScrollbarStyle: _react2.default.PropTypes.object,
	    onScroll: _react2.default.PropTypes.func,
	    contentWindow: _react2.default.PropTypes.any,
	    ownerDocument: _react2.default.PropTypes.any,
	    smoothScrolling: _react2.default.PropTypes.bool,
	    minScrollSize: _react2.default.PropTypes.number,
	    swapWheelAxes: _react2.default.PropTypes.bool,
	    stopScrollPropagation: _react2.default.PropTypes.bool,
	    focusableTabIndex: _react2.default.PropTypes.number
	};
	
	ScrollArea.defaultProps = {
	    speed: 1,
	    vertical: true,
	    horizontal: true,
	    smoothScrolling: false,
	    swapWheelAxes: false,
	    contentWindow: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object" ? window : undefined,
	    ownerDocument: (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === "object" ? document : undefined,
	    focusableTabIndex: 1
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotion = __webpack_require__(8);
	
	var _utils = __webpack_require__(33);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScrollBar = function (_React$Component) {
	    _inherits(ScrollBar, _React$Component);
	
	    function ScrollBar(props) {
	        _classCallCheck(this, ScrollBar);
	
	        var _this = _possibleConstructorReturn(this, (ScrollBar.__proto__ || Object.getPrototypeOf(ScrollBar)).call(this, props));
	
	        var newState = _this.calculateState(props);
	        _this.state = {
	            position: newState.position,
	            scrollSize: newState.scrollSize,
	            isDragging: false,
	            lastClientPosition: 0
	        };
	
	        if (props.type === 'vertical') {
	            _this.bindedHandleMouseMove = _this.handleMouseMoveForVertical.bind(_this);
	        } else {
	            _this.bindedHandleMouseMove = _this.handleMouseMoveForHorizontal.bind(_this);
	        }
	
	        _this.bindedHandleMouseUp = _this.handleMouseUp.bind(_this);
	        return _this;
	    }
	
	    _createClass(ScrollBar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.addEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.addEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState(this.calculateState(nextProps));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.removeEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.removeEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'calculateFractionalPosition',
	        value: function calculateFractionalPosition(realContentSize, containerSize, contentPosition) {
	            var relativeSize = realContentSize - containerSize;
	
	            return 1 - (relativeSize - contentPosition) / relativeSize;
	        }
	    }, {
	        key: 'calculateState',
	        value: function calculateState(props) {
	            var fractionalPosition = this.calculateFractionalPosition(props.realSize, props.containerSize, props.position);
	            var proportionalToPageScrollSize = props.containerSize * props.containerSize / props.realSize;
	            var scrollSize = proportionalToPageScrollSize < props.minScrollSize ? props.minScrollSize : proportionalToPageScrollSize;
	
	            var scrollPosition = (props.containerSize - scrollSize) * fractionalPosition;
	            return {
	                scrollSize: scrollSize,
	                position: Math.round(scrollPosition)
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props,
	                smoothScrolling = _props.smoothScrolling,
	                isDragging = _props.isDragging,
	                type = _props.type,
	                scrollbarStyle = _props.scrollbarStyle,
	                containerStyle = _props.containerStyle;
	
	            var isVoriziontal = type === 'horizontal';
	            var isVertical = type === 'vertical';
	            var scrollStyles = this.createScrollStyles();
	            var springifiedScrollStyles = smoothScrolling ? (0, _utils.modifyObjValues)(scrollStyles, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : scrollStyles;
	
	            var scrollbarClasses = 'scrollbar-container ' + (isDragging ? 'active' : '') + ' ' + (isVoriziontal ? 'horizontal' : '') + ' ' + (isVertical ? 'vertical' : '');
	
	            return _react2.default.createElement(
	                _reactMotion.Motion,
	                { style: springifiedScrollStyles },
	                function (style) {
	                    return _react2.default.createElement(
	                        'div',
	                        {
	                            className: scrollbarClasses,
	                            style: containerStyle,
	                            onMouseDown: _this2.handleScrollBarContainerClick.bind(_this2),
	                            ref: function ref(x) {
	                                return _this2.scrollbarContainer = x;
	                            }
	                        },
	                        _react2.default.createElement('div', {
	                            className: 'scrollbar',
	                            style: _extends({}, scrollbarStyle, style),
	                            onMouseDown: _this2.handleMouseDown.bind(_this2)
	                        })
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'handleScrollBarContainerClick',
	        value: function handleScrollBarContainerClick(e) {
	            e.preventDefault();
	            var multiplier = this.computeMultiplier();
	            var clientPosition = this.isVertical() ? e.clientY : e.clientX;
	
	            var _scrollbarContainer$g = this.scrollbarContainer.getBoundingClientRect(),
	                top = _scrollbarContainer$g.top,
	                left = _scrollbarContainer$g.left;
	
	            var clientScrollPosition = this.isVertical() ? top : left;
	
	            var position = clientPosition - clientScrollPosition;
	            var proportionalToPageScrollSize = this.props.containerSize * this.props.containerSize / this.props.realSize;
	
	            this.setState({ isDragging: true, lastClientPosition: clientPosition });
	            this.props.onPositionChange((position - proportionalToPageScrollSize / 2) / multiplier);
	        }
	    }, {
	        key: 'handleMouseMoveForHorizontal',
	        value: function handleMouseMoveForHorizontal(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaX = this.state.lastClientPosition - e.clientX;
	                this.setState({ lastClientPosition: e.clientX });
	                this.props.onMove(0, deltaX / multiplier);
	            }
	        }
	    }, {
	        key: 'handleMouseMoveForVertical',
	        value: function handleMouseMoveForVertical(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaY = this.state.lastClientPosition - e.clientY;
	                this.setState({ lastClientPosition: e.clientY });
	                this.props.onMove(deltaY / multiplier, 0);
	            }
	        }
	    }, {
	        key: 'handleMouseDown',
	        value: function handleMouseDown(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            var lastClientPosition = this.isVertical() ? e.clientY : e.clientX;
	            this.setState({ isDragging: true, lastClientPosition: lastClientPosition });
	
	            this.props.onFocus();
	        }
	    }, {
	        key: 'handleMouseUp',
	        value: function handleMouseUp(e) {
	            e.preventDefault();
	            this.setState({ isDragging: false });
	        }
	    }, {
	        key: 'createScrollStyles',
	        value: function createScrollStyles() {
	            if (this.props.type === 'vertical') {
	                return {
	                    height: this.state.scrollSize,
	                    marginTop: this.state.position
	                };
	            } else {
	                return {
	                    width: this.state.scrollSize,
	                    marginLeft: this.state.position
	                };
	            }
	        }
	    }, {
	        key: 'computeMultiplier',
	        value: function computeMultiplier() {
	            return this.props.containerSize / this.props.realSize;
	        }
	    }, {
	        key: 'isVertical',
	        value: function isVertical() {
	            return this.props.type === 'vertical';
	        }
	    }]);
	
	    return ScrollBar;
	}(_react2.default.Component);
	
	ScrollBar.propTypes = {
	    onMove: _react2.default.PropTypes.func,
	    onPositionChange: _react2.default.PropTypes.func,
	    onFocus: _react2.default.PropTypes.func,
	    realSize: _react2.default.PropTypes.number,
	    containerSize: _react2.default.PropTypes.number,
	    position: _react2.default.PropTypes.number,
	    containerStyle: _react2.default.PropTypes.object,
	    scrollbarStyle: _react2.default.PropTypes.object,
	    type: _react2.default.PropTypes.oneOf(['vertical', 'horizontal']),
	    ownerDocument: _react2.default.PropTypes.any,
	    smoothScrolling: _react2.default.PropTypes.bool,
	    minScrollSize: _react2.default.PropTypes.number
	};
	
	ScrollBar.defaultProps = {
	    type: 'vertical',
	    smoothScrolling: false
	};
	exports.default = ScrollBar;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _Motion = __webpack_require__(9);
	
	exports.Motion = _interopRequire(_Motion);
	
	var _StaggeredMotion = __webpack_require__(27);
	
	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);
	
	var _TransitionMotion = __webpack_require__(28);
	
	exports.TransitionMotion = _interopRequire(_TransitionMotion);
	
	var _spring = __webpack_require__(30);
	
	exports.spring = _interopRequire(_spring);
	
	var _presets = __webpack_require__(31);
	
	exports.presets = _interopRequire(_presets);
	
	var _stripStyle = __webpack_require__(11);
	
	exports.stripStyle = _interopRequire(_stripStyle);
	
	// deprecated, dummy warning function
	
	var _reorderKeys = __webpack_require__(32);
	
	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(10);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(11);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(12);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(13);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(15);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(17);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(18);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	var Motion = (function (_React$Component) {
	  _inherits(Motion, _React$Component);
	
	  _createClass(Motion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
	      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      onRest: _propTypes2['default'].func
	    },
	    enumerable: true
	  }]);
	
	  function Motion(props) {
	    var _this = this;
	
	    _classCallCheck(this, Motion);
	
	    _React$Component.call(this, props);
	    this.wasAnimating = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyle = null;
	
	    this.clearUnreadPropStyle = function (destStyle) {
	      var dirty = false;
	      var _state = _this.state;
	      var currentStyle = _state.currentStyle;
	      var currentVelocity = _state.currentVelocity;
	      var lastIdealStyle = _state.lastIdealStyle;
	      var lastIdealVelocity = _state.lastIdealVelocity;
	
	      for (var key in destStyle) {
	        if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	          continue;
	        }
	
	        var styleValue = destStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyle = _extends({}, currentStyle);
	            currentVelocity = _extends({}, currentVelocity);
	            lastIdealStyle = _extends({}, lastIdealStyle);
	            lastIdealVelocity = _extends({}, lastIdealVelocity);
	          }
	
	          currentStyle[key] = styleValue;
	          currentVelocity[key] = 0;
	          lastIdealStyle[key] = styleValue;
	          lastIdealVelocity[key] = 0;
	        }
	      }
	
	      if (dirty) {
	        _this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	      }
	    };
	
	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // check if we need to animate in the first place
	        var propsStyle = _this.props.style;
	        if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	          if (_this.wasAnimating && _this.props.onRest) {
	            _this.props.onRest();
	          }
	
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.wasAnimating = false;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        _this.wasAnimating = true;
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	
	        for (var key in propsStyle) {
	          if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
	            continue;
	          }
	
	          var styleValue = propsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	            for (var i = 0; i < framesToCatchUp; i++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }
	
	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyle: newCurrentStyle,
	          currentVelocity: newCurrentVelocity,
	          lastIdealStyle: newLastIdealStyle,
	          lastIdealVelocity: newLastIdealVelocity
	        });
	
	        _this.unreadPropStyle = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  Motion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;
	
	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  };
	
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	
	  Motion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }
	
	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  Motion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  Motion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return Motion;
	})(_react2['default'].Component);
	
	exports['default'] = Motion;
	module.exports = exports['default'];
	
	// after checking for unreadPropStyle != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	
	
	// currently used to initiate the velocity style object to 0
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mapToZero;
	
	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	
	
	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	
	var reusedTuple = [0, 0];
	
	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;
	
	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }
	
	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}
	
	module.exports = exports["default"];
	// array reference around.

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(16)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function(object) {
	  if (!object) {
	    object = root;
	  }
	  object.requestAnimationFrame = raf
	  object.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	//# sourceMappingURL=performance-now.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	
	
	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;
	
	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	
	    if (currentVelocity[key] !== 0) {
	      return false;
	    }
	
	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(19)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(26)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(20);
	var invariant = __webpack_require__(21);
	var warning = __webpack_require__(22);
	var assign = __webpack_require__(23);
	
	var ReactPropTypesSecret = __webpack_require__(24);
	var checkPropTypes = __webpack_require__(25);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(20);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(21);
	  var warning = __webpack_require__(22);
	  var ReactPropTypesSecret = __webpack_require__(24);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(20);
	var invariant = __webpack_require__(21);
	var ReactPropTypesSecret = __webpack_require__(24);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(10);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(11);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(12);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(13);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(15);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(17);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(18);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}
	
	var StaggeredMotion = (function (_React$Component) {
	  _inherits(StaggeredMotion, _React$Component);
	
	  _createClass(StaggeredMotion, null, [{
	    key: 'propTypes',
	    value: {
	      // TOOD: warn against putting a config in here
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
	      styles: _propTypes2['default'].func.isRequired,
	      children: _propTypes2['default'].func.isRequired
	    },
	    enumerable: true
	  }]);
	
	  function StaggeredMotion(props) {
	    var _this = this;
	
	    _classCallCheck(this, StaggeredMotion);
	
	    _React$Component.call(this, props);
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;
	
	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _state = _this.state;
	      var currentStyles = _state.currentStyles;
	      var currentVelocities = _state.currentVelocities;
	      var lastIdealStyles = _state.lastIdealStyles;
	      var lastIdealVelocities = _state.lastIdealVelocities;
	
	      var someDirty = false;
	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i];
	        var dirty = false;
	
	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }
	
	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              someDirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	          }
	        }
	      }
	
	      if (someDirty) {
	        _this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	      }
	    };
	
	    this.startAnimationIfNecessary = function () {
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        var destStyles = _this.props.styles(_this.state.lastIdealStyles);
	
	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var newLastIdealStyles = [];
	        var newLastIdealVelocities = [];
	        var newCurrentStyles = [];
	        var newCurrentVelocities = [];
	
	        for (var i = 0; i < destStyles.length; i++) {
	          var destStyle = destStyles[i];
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};
	
	          for (var key in destStyle) {
	            if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	              continue;
	            }
	
	            var styleValue = destStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	              var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }
	
	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];
	
	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }
	
	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities
	        });
	
	        _this.unreadPropStyles = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  StaggeredMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	
	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  };
	
	  StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  StaggeredMotion.prototype.render = function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return StaggeredMotion;
	})(_react2['default'].Component);
	
	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];
	
	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400
	
	// after checking for unreadPropStyles != null, we manually go set the
	// non-interpolating values (those that are a number, without a spring
	// config)

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _mapToZero = __webpack_require__(10);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(11);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(12);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _mergeDiff = __webpack_require__(29);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _performanceNow = __webpack_require__(13);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(15);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(17);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(18);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var msPerFrame = 1000 / 60;
	
	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  // Copy the value to a `const` so that Flow understands that the const won't
	  // change and will be non-nullable in the callback below.
	  var cUnreadPropStyles = unreadPropStyles;
	  if (cUnreadPropStyles == null) {
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    for (var j = 0; j < cUnreadPropStyles.length; j++) {
	      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          key: cUnreadPropStyles[j].key,
	          data: cUnreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}
	
	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }
	
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }
	
	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	// core key merging logic
	
	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key
	
	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });
	
	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;
	
	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }
	
	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}
	
	var TransitionMotion = (function (_React$Component) {
	  _inherits(TransitionMotion, _React$Component);
	
	  _createClass(TransitionMotion, null, [{
	    key: 'propTypes',
	    value: {
	      defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
	      })),
	      styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	        key: _propTypes2['default'].string.isRequired,
	        data: _propTypes2['default'].any,
	        style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
	      }))]).isRequired,
	      children: _propTypes2['default'].func.isRequired,
	      willEnter: _propTypes2['default'].func,
	      willLeave: _propTypes2['default'].func,
	      didLeave: _propTypes2['default'].func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      },
	      didLeave: function didLeave() {}
	    },
	    enumerable: true
	  }]);
	
	  function TransitionMotion(props) {
	    var _this = this;
	
	    _classCallCheck(this, TransitionMotion);
	
	    _React$Component.call(this, props);
	    this.unmounting = false;
	    this.animationID = null;
	    this.prevTime = 0;
	    this.accumulatedTime = 0;
	    this.unreadPropStyles = null;
	
	    this.clearUnreadPropStyle = function (unreadPropStyles) {
	      var _mergeAndSync = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, unreadPropStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	      var mergedPropsStyles = _mergeAndSync[0];
	      var currentStyles = _mergeAndSync[1];
	      var currentVelocities = _mergeAndSync[2];
	      var lastIdealStyles = _mergeAndSync[3];
	      var lastIdealVelocities = _mergeAndSync[4];
	
	      for (var i = 0; i < unreadPropStyles.length; i++) {
	        var unreadPropStyle = unreadPropStyles[i].style;
	        var dirty = false;
	
	        for (var key in unreadPropStyle) {
	          if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	            continue;
	          }
	
	          var styleValue = unreadPropStyle[key];
	          if (typeof styleValue === 'number') {
	            if (!dirty) {
	              dirty = true;
	              currentStyles[i] = _extends({}, currentStyles[i]);
	              currentVelocities[i] = _extends({}, currentVelocities[i]);
	              lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	              lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	              mergedPropsStyles[i] = {
	                key: mergedPropsStyles[i].key,
	                data: mergedPropsStyles[i].data,
	                style: _extends({}, mergedPropsStyles[i].style)
	              };
	            }
	            currentStyles[i][key] = styleValue;
	            currentVelocities[i][key] = 0;
	            lastIdealStyles[i][key] = styleValue;
	            lastIdealVelocities[i][key] = 0;
	            mergedPropsStyles[i].style[key] = styleValue;
	          }
	        }
	      }
	
	      // unlike the other 2 components, we can't detect staleness and optionally
	      // opt out of setState here. each style object's data might contain new
	      // stuff we're not/cannot compare
	      _this.setState({
	        currentStyles: currentStyles,
	        currentVelocities: currentVelocities,
	        mergedPropsStyles: mergedPropsStyles,
	        lastIdealStyles: lastIdealStyles,
	        lastIdealVelocities: lastIdealVelocities
	      });
	    };
	
	    this.startAnimationIfNecessary = function () {
	      if (_this.unmounting) {
	        return;
	      }
	
	      // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	      // call cb? No, otherwise accidental parent rerender causes cb trigger
	      _this.animationID = _raf2['default'](function (timestamp) {
	        // https://github.com/chenglou/react-motion/pull/420
	        // > if execution passes the conditional if (this.unmounting), then
	        // executes async defaultRaf and after that component unmounts and after
	        // that the callback of defaultRaf is called, then setState will be called
	        // on unmounted component.
	        if (_this.unmounting) {
	          return;
	        }
	
	        var propStyles = _this.props.styles;
	        var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;
	
	        // check if we need to animate in the first place
	        if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.accumulatedTime = 0;
	          return;
	        }
	
	        var currentTime = timestamp || _performanceNow2['default']();
	        var timeDelta = currentTime - _this.prevTime;
	        _this.prevTime = currentTime;
	        _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	        // more than 10 frames? prolly switched browser tab. Restart
	        if (_this.accumulatedTime > msPerFrame * 10) {
	          _this.accumulatedTime = 0;
	        }
	
	        if (_this.accumulatedTime === 0) {
	          // no need to cancel animationID here; shouldn't have any in flight
	          _this.animationID = null;
	          _this.startAnimationIfNecessary();
	          return;
	        }
	
	        var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	        var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	        var _mergeAndSync2 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	        var newMergedPropsStyles = _mergeAndSync2[0];
	        var newCurrentStyles = _mergeAndSync2[1];
	        var newCurrentVelocities = _mergeAndSync2[2];
	        var newLastIdealStyles = _mergeAndSync2[3];
	        var newLastIdealVelocities = _mergeAndSync2[4];
	
	        for (var i = 0; i < newMergedPropsStyles.length; i++) {
	          var newMergedPropsStyle = newMergedPropsStyles[i].style;
	          var newCurrentStyle = {};
	          var newCurrentVelocity = {};
	          var newLastIdealStyle = {};
	          var newLastIdealVelocity = {};
	
	          for (var key in newMergedPropsStyle) {
	            if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
	              continue;
	            }
	
	            var styleValue = newMergedPropsStyle[key];
	            if (typeof styleValue === 'number') {
	              newCurrentStyle[key] = styleValue;
	              newCurrentVelocity[key] = 0;
	              newLastIdealStyle[key] = styleValue;
	              newLastIdealVelocity[key] = 0;
	            } else {
	              var newLastIdealStyleValue = newLastIdealStyles[i][key];
	              var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	              for (var j = 0; j < framesToCatchUp; j++) {
	                var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	                newLastIdealStyleValue = _stepper[0];
	                newLastIdealVelocityValue = _stepper[1];
	              }
	
	              var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              var nextIdealX = _stepper2[0];
	              var nextIdealV = _stepper2[1];
	
	              newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	              newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	              newLastIdealStyle[key] = newLastIdealStyleValue;
	              newLastIdealVelocity[key] = newLastIdealVelocityValue;
	            }
	          }
	
	          newLastIdealStyles[i] = newLastIdealStyle;
	          newLastIdealVelocities[i] = newLastIdealVelocity;
	          newCurrentStyles[i] = newCurrentStyle;
	          newCurrentVelocities[i] = newCurrentVelocity;
	        }
	
	        _this.animationID = null;
	        // the amount we're looped over above
	        _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	        _this.setState({
	          currentStyles: newCurrentStyles,
	          currentVelocities: newCurrentVelocities,
	          lastIdealStyles: newLastIdealStyles,
	          lastIdealVelocities: newLastIdealVelocities,
	          mergedPropsStyles: newMergedPropsStyles
	        });
	
	        _this.unreadPropStyles = null;
	
	        _this.startAnimationIfNecessary();
	      });
	    };
	
	    this.state = this.defaultState();
	  }
	
	  TransitionMotion.prototype.defaultState = function defaultState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	    var didLeave = _props.didLeave;
	
	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;
	
	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });
	
	    var _mergeAndSync3 = mergeAndSync(
	    // Because this is an old-style createReactClass component, Flow doesn't
	    // understand that the willEnter and willLeave props have default values
	    // and will always be present.
	    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);
	
	    var mergedPropsStyles = _mergeAndSync3[0];
	    var currentStyles = _mergeAndSync3[1];
	    var currentVelocities = _mergeAndSync3[2];
	    var lastIdealStyles = _mergeAndSync3[3];
	    var lastIdealVelocities = _mergeAndSync3[4];
	    // oldLastIdealVelocities really
	
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  };
	
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	
	  TransitionMotion.prototype.componentDidMount = function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  };
	
	  TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    var styles = props.styles;
	    if (typeof styles === 'function') {
	      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = styles;
	    }
	
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  };
	
	  TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unmounting = true;
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  };
	
	  TransitionMotion.prototype.render = function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  };
	
	  return TransitionMotion;
	})(_react2['default'].Component);
	
	exports['default'] = TransitionMotion;
	module.exports = exports['default'];
	
	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function
	
	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives
	
	// it's possible that currentStyle's value is stale: if props is immediately
	// changed from 0 to 400 to spring(0) again, the async currentStyle is still
	// at 0 (didn't have time to tick and interpolate even once). If we naively
	// compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	// In reality currentStyle should be 400

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	
	
	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?
	
	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous
	
	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a
	
	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mergeDiff;
	
	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster
	
	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }
	
	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }
	
	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];
	
	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev
	
	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	          continue;
	        }
	
	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}
	
	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(31);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});
	
	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}
	
	module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = reorderKeys;
	
	var hasWarned = false;
	
	function reorderKeys() {
	  if (process.env.NODE_ENV === 'development') {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.findDOMNode = findDOMNode;
	exports.warnAboutFunctionChild = warnAboutFunctionChild;
	exports.warnAboutElementChild = warnAboutElementChild;
	exports.positiveOrZero = positiveOrZero;
	exports.modifyObjValues = modifyObjValues;
	exports.isReact13 = isReact13;
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var react13 = isReact13(_react2.default);
	var didWarnAboutChild = false;
	
	function findDOMNode(component) {
	    if (!react13) {
	        return component;
	    } else {
	        return _react2.default.findDOMNode(component);
	    }
	}
	
	function warnAboutFunctionChild() {
	    if (didWarnAboutChild || react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.14 and later versions, you no longer need to wrap <ScrollArea> child into a function.');
	}
	
	function warnAboutElementChild() {
	    if (didWarnAboutChild || !react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.13, you need to wrap <ScrollArea> child into a function.');
	}
	
	function positiveOrZero(number) {
	    return number < 0 ? 0 : number;
	}
	
	function modifyObjValues(obj) {
	    var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x) {
	        return x;
	    };
	
	    var modifiedObj = {};
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) modifiedObj[key] = modifier(obj[key]);
	    }
	
	    return modifiedObj;
	}
	
	function isReact13(React) {
	    var version = React.version;
	
	    if (typeof version !== 'string') {
	        return true;
	    }
	
	    var parts = version.split('.');
	    var major = parseInt(parts[0], 10);
	    var minor = parseInt(parts[1], 10);
	
	    return major === 0 && minor === 13;
	}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// Load in dependencies
	var computedStyle = __webpack_require__(35);
	
	/**
	 * Calculate the `line-height` of a given node
	 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
	 * @returns {Number} `line-height` of the element in pixels
	 */
	function lineHeight(node) {
	  // Grab the line-height via style
	  var lnHeightStr = computedStyle(node, 'line-height'),
	      lnHeight = parseFloat(lnHeightStr, 10);
	
	  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
	  if (lnHeightStr === lnHeight + '') {
	    // Save the old lineHeight style and update the em unit to the element
	    var _lnHeightStyle = node.style.lineHeight;
	    node.style.lineHeight = lnHeightStr + 'em';
	
	    // Calculate the em based height
	    lnHeightStr = computedStyle(node, 'line-height');
	    lnHeight = parseFloat(lnHeightStr, 10);
	
	    // Revert the lineHeight style
	    if (_lnHeightStyle) {
	      node.style.lineHeight = _lnHeightStyle;
	    } else {
	      delete node.style.lineHeight;
	    }
	  }
	
	  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
	  // DEV: `em` units are converted to `pt` in IE6
	  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
	  if (lnHeightStr.indexOf('pt') !== -1) {
	    lnHeight *= 4;
	    lnHeight /= 3;
	  } else if (lnHeightStr.indexOf('mm') !== -1) {
	  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
	    lnHeight *= 96;
	    lnHeight /= 25.4;
	  } else if (lnHeightStr.indexOf('cm') !== -1) {
	  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
	    lnHeight *= 96;
	    lnHeight /= 2.54;
	  } else if (lnHeightStr.indexOf('in') !== -1) {
	  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
	    lnHeight *= 96;
	  } else if (lnHeightStr.indexOf('pc') !== -1) {
	  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
	    lnHeight *= 16;
	  }
	
	  // Continue our computation
	  lnHeight = Math.round(lnHeight);
	
	  // If the line-height is "normal", calculate by font-size
	  if (lnHeightStr === 'normal') {
	    // Create a temporary node
	    var nodeName = node.nodeName,
	        _node = document.createElement(nodeName);
	    _node.innerHTML = '&nbsp;';
	
	    // Set the font-size of the element
	    var fontSizeStr = computedStyle(node, 'font-size');
	    _node.style.fontSize = fontSizeStr;
	
	    // Append it to the body
	    var body = document.body;
	    body.appendChild(_node);
	
	    // Assume the line height of the element is the height
	    var height = _node.offsetHeight;
	    lnHeight = height;
	
	    // Remove our child from the DOM
	    body.removeChild(_node);
	  }
	
	  // Return the calculated height
	  return lnHeight;
	}
	
	// Export lineHeight
	module.exports = lineHeight;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// This code has been refactored for 140 bytes
	// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
	var computedStyle = function (el, prop, getComputedStyle) {
	  getComputedStyle = window.getComputedStyle;
	
	  // In one fell swoop
	  return (
	    // If we have getComputedStyle
	    getComputedStyle ?
	      // Query it
	      // TODO: From CSS-Query notes, we might need (node, null) for FF
	      getComputedStyle(el) :
	
	    // Otherwise, we are in IE and use currentStyle
	      el.currentStyle
	  )[
	    // Switch to camelCase for CSSOM
	    // DEV: Grabbed from jQuery
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
	    prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })
	  ];
	};
	
	module.exports = computedStyle;


/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyYWQ5NGNjMWFmOTA0NzdiYTFjZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2Nyb2xsQXJlYVdpdGhDc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlc3Mvc2Nyb2xsQXJlYS5sZXNzP2Y4MDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlc3Mvc2Nyb2xsQXJlYS5sZXNzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TY3JvbGxBcmVhLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2Nyb2xsYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVhY3QtbW90aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9Nb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL21hcFRvWmVyby5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RyaXBTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vcmFmL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmFmL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3Nob3VsZFN0b3BBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9TdGFnZ2VyZWRNb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL1RyYW5zaXRpb25Nb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL21lcmdlRGlmZi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3ByaW5nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9wcmVzZXRzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9yZW9yZGVyS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9saW5lLWhlaWdodC9saWIvbGluZS1oZWlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wdXRlZC1zdHlsZS9kaXN0L2NvbXB1dGVkU3R5bGUuY29tbW9uanMuanMiXSwibmFtZXMiOlsiZXZlbnRUeXBlcyIsIndoZWVsIiwiYXBpIiwidG91Y2giLCJ0b3VjaEVuZCIsIm1vdXNlbW92ZSIsImtleVByZXNzIiwiU2Nyb2xsQXJlYSIsInByb3BzIiwic3RhdGUiLCJ0b3BQb3NpdGlvbiIsImxlZnRQb3NpdGlvbiIsInJlYWxIZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJyZWFsV2lkdGgiLCJjb250YWluZXJXaWR0aCIsInNjcm9sbEFyZWEiLCJyZWZyZXNoIiwic2V0U2l6ZXNUb1N0YXRlIiwic2Nyb2xsVG9wIiwic2Nyb2xsQm90dG9tIiwic2Nyb2xsWVRvIiwicG9zaXRpb24iLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsUmlnaHQiLCJzY3JvbGxYVG8iLCJldm50c1ByZXZpb3VzVmFsdWVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJkZWx0YVgiLCJkZWx0YVkiLCJiaW5kZWRIYW5kbGVXaW5kb3dSZXNpemUiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJiaW5kIiwiY29udGVudFdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW5lSGVpZ2h0UHgiLCJjb250ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiY29udGVudENsYXNzTmFtZSIsIm93bmVyRG9jdW1lbnQiLCJ3aXRoTW90aW9uIiwic21vb3RoU2Nyb2xsaW5nIiwiZXZlbnRUeXBlIiwic2Nyb2xsYmFyWSIsImNhblNjcm9sbFkiLCJoYW5kbGVTY3JvbGxiYXJNb3ZlIiwiaGFuZGxlU2Nyb2xsYmFyWVBvc2l0aW9uQ2hhbmdlIiwidmVydGljYWxDb250YWluZXJTdHlsZSIsInZlcnRpY2FsU2Nyb2xsYmFyU3R5bGUiLCJtaW5TY3JvbGxTaXplIiwiZm9jdXNDb250ZW50Iiwic2Nyb2xsYmFyWCIsImNhblNjcm9sbFgiLCJoYW5kbGVTY3JvbGxiYXJYUG9zaXRpb25DaGFuZ2UiLCJob3Jpem9udGFsQ29udGFpbmVyU3R5bGUiLCJob3Jpem9udGFsU2Nyb2xsYmFyU3R5bGUiLCJjbGFzc2VzIiwiY29udGVudENsYXNzZXMiLCJjb250ZW50U3R5bGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0Iiwic3ByaW5naWZpZWRDb250ZW50U3R5bGUiLCJ4Iiwid3JhcHBlciIsInN0eWxlIiwiaGFuZGxlV2hlZWwiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiaGFuZGxlVG91Y2hNb3ZlIiwiaGFuZGxlVG91Y2hFbmQiLCJoYW5kbGVLZXlEb3duIiwiZm9jdXNhYmxlVGFiSW5kZXgiLCJuZXdTdGF0ZSIsIm9uU2Nyb2xsIiwic2V0U3RhdGUiLCJlIiwidG91Y2hlcyIsImxlbmd0aCIsImV2ZW50UHJldmlvdXNWYWx1ZXMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRTdGF0ZUZyb21FdmVudCIsImNvbXBvc2VOZXdTdGF0ZSIsInN3YXBXaGVlbEF4ZXMiLCJkZWx0YU1vZGUiLCJzcGVlZCIsInN0b3BTY3JvbGxQcm9wYWdhdGlvbiIsInRhcmdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImxpbmVIZWlnaHQiLCJrZXlDb2RlIiwiY29tcHV0ZVNpemVzIiwiZ2V0TW9kaWZpZWRQb3NpdGlvbnNJZk5lZWRlZCIsImNvbXB1dGVUb3BQb3NpdGlvbiIsImNvbXB1dGVMZWZ0UG9zaXRpb24iLCJzaXplcyIsIm5ld1RvcFBvc2l0aW9uIiwibm9ybWFsaXplVG9wUG9zaXRpb24iLCJuZXdMZWZ0UG9zaXRpb24iLCJub3JtYWxpemVMZWZ0UG9zaXRpb24iLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsInNjcm9sbGFibGVZIiwidmVydGljYWwiLCJzY3JvbGxhYmxlWCIsImhvcml6b250YWwiLCJib3R0b21Qb3NpdGlvbiIsInJpZ2h0UG9zaXRpb24iLCJmb2N1cyIsIkNvbXBvbmVudCIsImNoaWxkQ29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJhbnkiLCJkZWZhdWx0UHJvcHMiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJkb2N1bWVudCIsIlNjcm9sbEJhciIsImNhbGN1bGF0ZVN0YXRlIiwic2Nyb2xsU2l6ZSIsImlzRHJhZ2dpbmciLCJsYXN0Q2xpZW50UG9zaXRpb24iLCJ0eXBlIiwiYmluZGVkSGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VNb3ZlRm9yVmVydGljYWwiLCJoYW5kbGVNb3VzZU1vdmVGb3JIb3Jpem9udGFsIiwiYmluZGVkSGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlVXAiLCJuZXh0UHJvcHMiLCJyZWFsQ29udGVudFNpemUiLCJjb250YWluZXJTaXplIiwiY29udGVudFBvc2l0aW9uIiwicmVsYXRpdmVTaXplIiwiZnJhY3Rpb25hbFBvc2l0aW9uIiwiY2FsY3VsYXRlRnJhY3Rpb25hbFBvc2l0aW9uIiwicmVhbFNpemUiLCJwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplIiwic2Nyb2xsUG9zaXRpb24iLCJNYXRoIiwicm91bmQiLCJzY3JvbGxiYXJTdHlsZSIsImNvbnRhaW5lclN0eWxlIiwiaXNWb3JpemlvbnRhbCIsImlzVmVydGljYWwiLCJzY3JvbGxTdHlsZXMiLCJjcmVhdGVTY3JvbGxTdHlsZXMiLCJzcHJpbmdpZmllZFNjcm9sbFN0eWxlcyIsInNjcm9sbGJhckNsYXNzZXMiLCJoYW5kbGVTY3JvbGxCYXJDb250YWluZXJDbGljayIsInNjcm9sbGJhckNvbnRhaW5lciIsImhhbmRsZU1vdXNlRG93biIsIm11bHRpcGxpZXIiLCJjb21wdXRlTXVsdGlwbGllciIsImNsaWVudFBvc2l0aW9uIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImNsaWVudFNjcm9sbFBvc2l0aW9uIiwib25Qb3NpdGlvbkNoYW5nZSIsIm9uTW92ZSIsIm9uRm9jdXMiLCJoZWlnaHQiLCJ3aWR0aCIsIm9uZU9mIiwiZmluZERPTU5vZGUiLCJ3YXJuQWJvdXRGdW5jdGlvbkNoaWxkIiwid2FybkFib3V0RWxlbWVudENoaWxkIiwicG9zaXRpdmVPclplcm8iLCJtb2RpZnlPYmpWYWx1ZXMiLCJpc1JlYWN0MTMiLCJyZWFjdDEzIiwiZGlkV2FybkFib3V0Q2hpbGQiLCJjb21wb25lbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJvYmoiLCJtb2RpZmllciIsIm1vZGlmaWVkT2JqIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJSZWFjdCIsInZlcnNpb24iLCJwYXJ0cyIsInNwbGl0IiwibWFqb3IiLCJwYXJzZUludCIsIm1pbm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxnREFBK0MsY0FBYyxlQUFlLHFCQUFxQix1QkFBdUIsR0FBRyw2QkFBNkIsZUFBZSxHQUFHLGVBQWUsdUJBQXVCLHFCQUFxQixHQUFHLG9DQUFvQyx1QkFBdUIscUJBQXFCLGdCQUFnQixrQkFBa0IsZ0NBQWdDLDZCQUE2Qiw0QkFBNEIsMkJBQTJCLHdCQUF3QixHQUFHLCtDQUErQyxnQkFBZ0IsaUJBQWlCLFlBQVksY0FBYyxHQUFHLDBE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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBNkQ7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXOzs7Ozs7OztBQ3hRQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDOzs7Ozs7O0FDakJBLFVBQVMsSUFBSSxpQ0FBaUMsT0FBTztBQUNyRCxNQUFLLGNBQWMseUJBQXlCLFFBQVEsUUFBUTs7QUFFNUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQzs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCOzs7Ozs7QUMxQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7Ozs7Ozs7QUMvQkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLHNDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQ7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsUUFBUTtBQUNyQixlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWLDhCQUE2QjtBQUM3QixTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULDZCQUE0QjtBQUM1QixRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3aEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Qjs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBIiwiZmlsZSI6IjJhZDk0Y2MxYWY5MDQ3N2JhMWNkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU2Nyb2xsQXJlYVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTY3JvbGxBcmVhXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmFkOTRjYzFhZjkwNDc3YmExY2QiLCJpbXBvcnQgJy4uL2xlc3Mvc2Nyb2xsQXJlYS5sZXNzJztcbmltcG9ydCBTY3JvbGxBcmVhIGZyb20gJy4vU2Nyb2xsQXJlYS5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxBcmVhO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9TY3JvbGxBcmVhV2l0aENzcy5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9zY3JvbGxBcmVhLmxlc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vc2Nyb2xsQXJlYS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9zY3JvbGxBcmVhLmxlc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xlc3Mvc2Nyb2xsQXJlYS5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JvbGxhcmVhLWNvbnRlbnQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zY3JvbGxhcmVhLWNvbnRlbnQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLnNjcm9sbGFyZWEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnNjcm9sbGFyZWEgLnNjcm9sbGJhci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG9wYWNpdHk6IC4xO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIC40cztcXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjRzO1xcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC40cztcXG4gIHRyYW5zaXRpb246IGFsbCAuNHM7XFxufVxcbi5zY3JvbGxhcmVhIC5zY3JvbGxiYXItY29udGFpbmVyLmhvcml6b250YWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4uc2Nyb2xsYXJlYSAuc2Nyb2xsYmFyLWNvbnRhaW5lci5ob3Jpem9udGFsIC5zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4uc2Nyb2xsYXJlYSAuc2Nyb2xsYmFyLWNvbnRhaW5lci52ZXJ0aWNhbCB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG4uc2Nyb2xsYXJlYSAuc2Nyb2xsYmFyLWNvbnRhaW5lci52ZXJ0aWNhbCAuc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XFxufVxcbi5zY3JvbGxhcmVhIC5zY3JvbGxiYXItY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxuICBvcGFjaXR5OiAuNiAhaW1wb3J0YW50O1xcbn1cXG4uc2Nyb2xsYXJlYSAuc2Nyb2xsYmFyLWNvbnRhaW5lci5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogZ3JheTtcXG4gIG9wYWNpdHk6IC42ICFpbXBvcnRhbnQ7XFxufVxcbi5zY3JvbGxhcmVhOmhvdmVyIC5zY3JvbGxiYXItY29udGFpbmVyIHtcXG4gIG9wYWNpdHk6IC4zO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vbGVzcy1sb2FkZXIhLi9zcmMvbGVzcy9zY3JvbGxBcmVhLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHNlbGYubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNjcm9sbEJhciBmcm9tICcuL1Njcm9sbGJhcic7XG5pbXBvcnQge2ZpbmRET01Ob2RlLCB3YXJuQWJvdXRGdW5jdGlvbkNoaWxkLCB3YXJuQWJvdXRFbGVtZW50Q2hpbGQsIHBvc2l0aXZlT3JaZXJvLCBtb2RpZnlPYmpWYWx1ZXN9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IGxpbmVIZWlnaHQgZnJvbSAnbGluZS1oZWlnaHQnO1xuaW1wb3J0IHtNb3Rpb24sIHNwcmluZ30gZnJvbSAncmVhY3QtbW90aW9uJztcblxuY29uc3QgZXZlbnRUeXBlcyA9IHtcbiAgICB3aGVlbDogJ3doZWVsJyxcbiAgICBhcGk6ICdhcGknLFxuICAgIHRvdWNoOiAndG91Y2gnLFxuICAgIHRvdWNoRW5kOiAndG91Y2hFbmQnLFxuICAgIG1vdXNlbW92ZTogJ21vdXNlbW92ZScsXG4gICAga2V5UHJlc3M6ICdrZXlwcmVzcydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvcFBvc2l0aW9uOiAwLFxuICAgICAgICAgICAgbGVmdFBvc2l0aW9uOiAwLFxuICAgICAgICAgICAgcmVhbEhlaWdodDogMCxcbiAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodDogMCxcbiAgICAgICAgICAgIHJlYWxXaWR0aDogMCxcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zY3JvbGxBcmVhID0ge1xuICAgICAgICAgICAgcmVmcmVzaDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2l6ZXNUb1N0YXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxCb3R0b206ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbFlUbzogKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxZVG8ocG9zaXRpb24pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbExlZnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbExlZnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxSaWdodDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsUmlnaHQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxYVG86IChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsWFRvKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmV2bnRzUHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICBjbGllbnRYOiAwLFxuICAgICAgICAgICAgY2xpZW50WTogMCxcbiAgICAgICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgICAgIGRlbHRhWTogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYmluZGVkSGFuZGxlV2luZG93UmVzaXplID0gdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JvbGxBcmVhOiB0aGlzLnNjcm9sbEFyZWFcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250ZW50V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5iaW5kZWRIYW5kbGVXaW5kb3dSZXNpemUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGluZUhlaWdodFB4ID0gbGluZUhlaWdodChmaW5kRE9NTm9kZSh0aGlzLmNvbnRlbnQpKTtcbiAgICAgICAgdGhpcy5zZXRTaXplc1RvU3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jb250ZW50V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5iaW5kZWRIYW5kbGVXaW5kb3dSZXNpemUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnNldFNpemVzVG9TdGF0ZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjaGlsZHJlbiwgY2xhc3NOYW1lLCBjb250ZW50Q2xhc3NOYW1lLCBvd25lckRvY3VtZW50fSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB3aXRoTW90aW9uID0gdGhpcy5wcm9wcy5zbW9vdGhTY3JvbGxpbmcgJiZcbiAgICAgICAgICAgICh0aGlzLnN0YXRlLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlcy53aGVlbCB8fCB0aGlzLnN0YXRlLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlcy5hcGkgfHwgdGhpcy5zdGF0ZS5ldmVudFR5cGUgPT09IGV2ZW50VHlwZXMudG91Y2hFbmQgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZXZlbnRUeXBlID09PSBldmVudFR5cGVzLmtleVByZXNzKTtcblxuICAgICAgICBsZXQgc2Nyb2xsYmFyWSA9IHRoaXMuY2FuU2Nyb2xsWSgpID8gKFxuICAgICAgICAgICAgPFNjcm9sbEJhclxuICAgICAgICAgICAgICAgIG93bmVyRG9jdW1lbnQ9e293bmVyRG9jdW1lbnR9XG4gICAgICAgICAgICAgICAgcmVhbFNpemU9e3RoaXMuc3RhdGUucmVhbEhlaWdodH1cbiAgICAgICAgICAgICAgICBjb250YWluZXJTaXplPXt0aGlzLnN0YXRlLmNvbnRhaW5lckhlaWdodH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17dGhpcy5zdGF0ZS50b3BQb3NpdGlvbn1cbiAgICAgICAgICAgICAgICBvbk1vdmU9e3RoaXMuaGFuZGxlU2Nyb2xsYmFyTW92ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIG9uUG9zaXRpb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2Nyb2xsYmFyWVBvc2l0aW9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU3R5bGU9e3RoaXMucHJvcHMudmVydGljYWxDb250YWluZXJTdHlsZX1cbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJTdHlsZT17dGhpcy5wcm9wcy52ZXJ0aWNhbFNjcm9sbGJhclN0eWxlfVxuICAgICAgICAgICAgICAgIHNtb290aFNjcm9sbGluZz17d2l0aE1vdGlvbn1cbiAgICAgICAgICAgICAgICBtaW5TY3JvbGxTaXplPXt0aGlzLnByb3BzLm1pblNjcm9sbFNpemV9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5mb2N1c0NvbnRlbnQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidmVydGljYWxcIi8+XG4gICAgICAgICkgOiBudWxsO1xuXG4gICAgICAgIGxldCBzY3JvbGxiYXJYID0gdGhpcy5jYW5TY3JvbGxYKCkgPyAoXG4gICAgICAgICAgICA8U2Nyb2xsQmFyXG4gICAgICAgICAgICAgICAgb3duZXJEb2N1bWVudD17b3duZXJEb2N1bWVudH1cbiAgICAgICAgICAgICAgICByZWFsU2l6ZT17dGhpcy5zdGF0ZS5yZWFsV2lkdGh9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2l6ZT17dGhpcy5zdGF0ZS5jb250YWluZXJXaWR0aH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17dGhpcy5zdGF0ZS5sZWZ0UG9zaXRpb259XG4gICAgICAgICAgICAgICAgb25Nb3ZlPXt0aGlzLmhhbmRsZVNjcm9sbGJhck1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBvblBvc2l0aW9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNjcm9sbGJhclhQb3NpdGlvbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlPXt0aGlzLnByb3BzLmhvcml6b250YWxDb250YWluZXJTdHlsZX1cbiAgICAgICAgICAgICAgICBzY3JvbGxiYXJTdHlsZT17dGhpcy5wcm9wcy5ob3Jpem9udGFsU2Nyb2xsYmFyU3R5bGV9XG4gICAgICAgICAgICAgICAgc21vb3RoU2Nyb2xsaW5nPXt3aXRoTW90aW9ufVxuICAgICAgICAgICAgICAgIG1pblNjcm9sbFNpemU9e3RoaXMucHJvcHMubWluU2Nyb2xsU2l6ZX1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmZvY3VzQ29udGVudC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJob3Jpem9udGFsXCIvPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB3YXJuQWJvdXRGdW5jdGlvbkNoaWxkKCk7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YXJuQWJvdXRFbGVtZW50Q2hpbGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbGFzc2VzID0gJ3Njcm9sbGFyZWEgJyArIChjbGFzc05hbWUgfHwgJycpO1xuICAgICAgICBsZXQgY29udGVudENsYXNzZXMgPSAnc2Nyb2xsYXJlYS1jb250ZW50ICcgKyAoY29udGVudENsYXNzTmFtZSB8fCAnJyk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnRTdHlsZSA9IHtcbiAgICAgICAgICAgIG1hcmdpblRvcDogLXRoaXMuc3RhdGUudG9wUG9zaXRpb24sXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAtdGhpcy5zdGF0ZS5sZWZ0UG9zaXRpb25cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHNwcmluZ2lmaWVkQ29udGVudFN0eWxlID0gd2l0aE1vdGlvbiA/IG1vZGlmeU9ialZhbHVlcyhjb250ZW50U3R5bGUsIHggPT4gc3ByaW5nKHgpKSA6IGNvbnRlbnRTdHlsZTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vdGlvbiBzdHlsZT17c3ByaW5naWZpZWRDb250ZW50U3R5bGV9PlxuICAgICAgICAgICAgICAgIHsgc3R5bGUgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt4ID0+IHRoaXMud3JhcHBlciA9IHh9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uV2hlZWw9e3RoaXMuaGFuZGxlV2hlZWwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmNvbnRlbnQgPSB4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnRoaXMucHJvcHMuY29udGVudFN0eWxlLCAuLi5zdHlsZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y29udGVudENsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZVRvdWNoU3RhcnQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoTW92ZT17dGhpcy5oYW5kbGVUb3VjaE1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXt0aGlzLmhhbmRsZVRvdWNoRW5kLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17dGhpcy5wcm9wcy5mb2N1c2FibGVUYWJJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzY3JvbGxiYXJZfVxuICAgICAgICAgICAgICAgICAgICAgICAge3Njcm9sbGJhclh9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvTW90aW9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNldFN0YXRlRnJvbUV2ZW50KG5ld1N0YXRlLCBldmVudFR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TY3JvbGwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TY3JvbGwobmV3U3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLm5ld1N0YXRlLCBldmVudFR5cGV9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgbGV0IHt0b3VjaGVzfSA9IGU7XG4gICAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IHtjbGllbnRYLCBjbGllbnRZfSA9IHRvdWNoZXNbMF07XG4gICAgICAgICAgICB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLFxuICAgICAgICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUb3VjaE1vdmUoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgbGV0IHt0b3VjaGVzfSA9IGU7XG4gICAgICAgIGlmICh0b3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IHtjbGllbnRYLCBjbGllbnRZfSA9IHRvdWNoZXNbMF07XG5cbiAgICAgICAgICAgIGxldCBkZWx0YVkgPSB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMuY2xpZW50WSAtIGNsaWVudFk7XG4gICAgICAgICAgICBsZXQgZGVsdGFYID0gdGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLmNsaWVudFggLSBjbGllbnRYO1xuXG4gICAgICAgICAgICB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLFxuICAgICAgICAgICAgICAgIGRlbHRhWSxcbiAgICAgICAgICAgICAgICBkZWx0YVgsXG4gICAgICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudCh0aGlzLmNvbXBvc2VOZXdTdGF0ZSgtZGVsdGFYLCAtZGVsdGFZKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUb3VjaEVuZChlKSB7XG4gICAgICAgIGxldCB7ZGVsdGFYLCBkZWx0YVksIHRpbWVzdGFtcH0gPSB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXM7XG4gICAgICAgIGlmICh0eXBlb2YgZGVsdGFYID09PSAndW5kZWZpbmVkJykgZGVsdGFYID0gMDtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWx0YVkgPT09ICd1bmRlZmluZWQnKSBkZWx0YVkgPSAwO1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHRpbWVzdGFtcCA8IDIwMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudCh0aGlzLmNvbXBvc2VOZXdTdGF0ZSgtZGVsdGFYICogMTAsIC1kZWx0YVkgKiAxMCksIGV2ZW50VHlwZXMudG91Y2hFbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ldmVudFByZXZpb3VzVmFsdWVzID0ge1xuICAgICAgICAgICAgLi4udGhpcy5ldmVudFByZXZpb3VzVmFsdWVzLFxuICAgICAgICAgICAgZGVsdGFZOiAwLFxuICAgICAgICAgICAgZGVsdGFYOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlU2Nyb2xsYmFyTW92ZShkZWx0YVksIGRlbHRhWCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuY29tcG9zZU5ld1N0YXRlKGRlbHRhWCwgZGVsdGFZKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU2Nyb2xsYmFyWFBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsWFRvKHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTY3JvbGxiYXJZUG9zaXRpb25DaGFuZ2UocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5zY3JvbGxZVG8ocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGhhbmRsZVdoZWVsKGUpIHtcbiAgICAgICAgbGV0IGRlbHRhWSA9IGUuZGVsdGFZO1xuICAgICAgICBsZXQgZGVsdGFYID0gZS5kZWx0YVg7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3dhcFdoZWVsQXhlcykge1xuICAgICAgICAgICAgW2RlbHRhWSwgZGVsdGFYXSA9IFtkZWx0YVgsIGRlbHRhWV07XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBXaGVlbEV2ZW50LmRlbHRhTW9kZSBjYW4gZGlmZmVyIGJldHdlZW4gYnJvd3NlcnMgYW5kIG11c3QgYmUgbm9ybWFsaXplZFxuICAgICAgICAgKiBlLmRlbHRhTW9kZSA9PT0gMDogVGhlIGRlbHRhIHZhbHVlcyBhcmUgc3BlY2lmaWVkIGluIHBpeGVsc1xuICAgICAgICAgKiBlLmRlbHRhTW9kZSA9PT0gMTogVGhlIGRlbHRhIHZhbHVlcyBhcmUgc3BlY2lmaWVkIGluIGxpbmVzXG4gICAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50L2RlbHRhTW9kZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGUuZGVsdGFNb2RlID09PSAxKSB7XG4gICAgICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiB0aGlzLmxpbmVIZWlnaHRQeDtcbiAgICAgICAgICAgIGRlbHRhWCA9IGRlbHRhWCAqIHRoaXMubGluZUhlaWdodFB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsdGFZID0gZGVsdGFZICogdGhpcy5wcm9wcy5zcGVlZDtcbiAgICAgICAgZGVsdGFYID0gZGVsdGFYICogdGhpcy5wcm9wcy5zcGVlZDtcblxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLmNvbXBvc2VOZXdTdGF0ZSgtZGVsdGFYLCAtZGVsdGFZKTtcblxuICAgICAgICBpZiAoKG5ld1N0YXRlLnRvcFBvc2l0aW9uICYmIHRoaXMuc3RhdGUudG9wUG9zaXRpb24gIT09IG5ld1N0YXRlLnRvcFBvc2l0aW9uKSB8fFxuICAgICAgICAgICAgKG5ld1N0YXRlLmxlZnRQb3NpdGlvbiAmJiB0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbiAhPT0gbmV3U3RhdGUubGVmdFBvc2l0aW9uKSB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9wU2Nyb2xsUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KG5ld1N0YXRlLCBldmVudFR5cGVzLndoZWVsKTtcbiAgICAgICAgdGhpcy5mb2N1c0NvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICAgICAgLy8gb25seSBoYW5kbGUgaWYgc2Nyb2xsIGFyZWEgaXMgaW4gZm9jdXNcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgbGV0IGRlbHRhWSA9IDA7XG4gICAgICAgICAgICBsZXQgZGVsdGFYID0gMDtcbiAgICAgICAgICAgIGxldCBsaW5lSGVpZ2h0ID0gdGhpcy5saW5lSGVpZ2h0UHggPyB0aGlzLmxpbmVIZWlnaHRQeCA6IDEwO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzM6IC8vIHBhZ2UgdXBcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFZID0gdGhpcy5zdGF0ZS5jb250YWluZXJIZWlnaHQgLSBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM0OiAvLyBwYWdlIGRvd25cbiAgICAgICAgICAgICAgICAgICAgZGVsdGFZID0gLXRoaXMuc3RhdGUuY29udGFpbmVySGVpZ2h0ICsgbGluZUhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzNzogLy8gbGVmdFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVggPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM4OiAvLyB1cFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVkgPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM5OiAvLyByaWdodFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVggPSAtbGluZUhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDogLy8gZG93blxuICAgICAgICAgICAgICAgICAgICBkZWx0YVkgPSAtbGluZUhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9ubHkgY29tcG9zZSBuZXcgc3RhdGUgaWYga2V5IGNvZGUgbWF0Y2hlcyB0aG9zZSBhYm92ZVxuICAgICAgICAgICAgaWYgKGRlbHRhWSAhPT0gMCB8fCBkZWx0YVggIT09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLmNvbXBvc2VOZXdTdGF0ZShkZWx0YVgsIGRlbHRhWSk7XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQobmV3U3RhdGUsIGV2ZW50VHlwZXMua2V5UHJlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlV2luZG93UmVzaXplKCkge1xuICAgICAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLmNvbXB1dGVTaXplcygpO1xuICAgICAgICBuZXdTdGF0ZSA9IHRoaXMuZ2V0TW9kaWZpZWRQb3NpdGlvbnNJZk5lZWRlZChuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQobmV3U3RhdGUpO1xuICAgIH1cblxuICAgIGNvbXBvc2VOZXdTdGF0ZShkZWx0YVgsIGRlbHRhWSkge1xuICAgICAgICBsZXQgbmV3U3RhdGUgPSB0aGlzLmNvbXB1dGVTaXplcygpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhblNjcm9sbFkobmV3U3RhdGUpKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS50b3BQb3NpdGlvbiA9IHRoaXMuY29tcHV0ZVRvcFBvc2l0aW9uKGRlbHRhWSwgbmV3U3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1N0YXRlLnRvcFBvc2l0aW9uID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYW5TY3JvbGxYKG5ld1N0YXRlKSkge1xuICAgICAgICAgICAgbmV3U3RhdGUubGVmdFBvc2l0aW9uID0gdGhpcy5jb21wdXRlTGVmdFBvc2l0aW9uKGRlbHRhWCwgbmV3U3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH1cblxuICAgIGNvbXB1dGVUb3BQb3NpdGlvbihkZWx0YVksIHNpemVzKSB7XG4gICAgICAgIGxldCBuZXdUb3BQb3NpdGlvbiA9IHRoaXMuc3RhdGUudG9wUG9zaXRpb24gLSBkZWx0YVk7XG4gICAgICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZVRvcFBvc2l0aW9uKG5ld1RvcFBvc2l0aW9uLCBzaXplcyk7XG4gICAgfVxuXG4gICAgY29tcHV0ZUxlZnRQb3NpdGlvbihkZWx0YVgsIHNpemVzKSB7XG4gICAgICAgIGxldCBuZXdMZWZ0UG9zaXRpb24gPSB0aGlzLnN0YXRlLmxlZnRQb3NpdGlvbiAtIGRlbHRhWDtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplTGVmdFBvc2l0aW9uKG5ld0xlZnRQb3NpdGlvbiwgc2l6ZXMpO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZVRvcFBvc2l0aW9uKG5ld1RvcFBvc2l0aW9uLCBzaXplcykge1xuICAgICAgICBpZiAobmV3VG9wUG9zaXRpb24gPiBzaXplcy5yZWFsSGVpZ2h0IC0gc2l6ZXMuY29udGFpbmVySGVpZ2h0KSB7XG4gICAgICAgICAgICBuZXdUb3BQb3NpdGlvbiA9IHNpemVzLnJlYWxIZWlnaHQgLSBzaXplcy5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1RvcFBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgICAgbmV3VG9wUG9zaXRpb24gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdUb3BQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBub3JtYWxpemVMZWZ0UG9zaXRpb24obmV3TGVmdFBvc2l0aW9uLCBzaXplcykge1xuICAgICAgICBpZiAobmV3TGVmdFBvc2l0aW9uID4gc2l6ZXMucmVhbFdpZHRoIC0gc2l6ZXMuY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgICAgIG5ld0xlZnRQb3NpdGlvbiA9IHNpemVzLnJlYWxXaWR0aCAtIHNpemVzLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld0xlZnRQb3NpdGlvbiA8IDApIHtcbiAgICAgICAgICAgIG5ld0xlZnRQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3TGVmdFBvc2l0aW9uO1xuICAgIH1cblxuICAgIGNvbXB1dGVTaXplcygpIHtcbiAgICAgICAgbGV0IHJlYWxIZWlnaHQgPSB0aGlzLmNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgY29udGFpbmVySGVpZ2h0ID0gdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgbGV0IHJlYWxXaWR0aCA9IHRoaXMuY29udGVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IGNvbnRhaW5lcldpZHRoID0gdGhpcy53cmFwcGVyLm9mZnNldFdpZHRoO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFsSGVpZ2h0OiByZWFsSGVpZ2h0LFxuICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0OiBjb250YWluZXJIZWlnaHQsXG4gICAgICAgICAgICByZWFsV2lkdGg6IHJlYWxXaWR0aCxcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiBjb250YWluZXJXaWR0aFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldFNpemVzVG9TdGF0ZSgpIHtcbiAgICAgICAgbGV0IHNpemVzID0gdGhpcy5jb21wdXRlU2l6ZXMoKTtcbiAgICAgICAgaWYgKHNpemVzLnJlYWxIZWlnaHQgIT09IHRoaXMuc3RhdGUucmVhbEhlaWdodCB8fCBzaXplcy5yZWFsV2lkdGggIT09IHRoaXMuc3RhdGUucmVhbFdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuZ2V0TW9kaWZpZWRQb3NpdGlvbnNJZk5lZWRlZChzaXplcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9wKCkge1xuICAgICAgICB0aGlzLnNjcm9sbFlUbygwKTtcbiAgICB9XG5cbiAgICBzY3JvbGxCb3R0b20oKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsWVRvKCh0aGlzLnN0YXRlLnJlYWxIZWlnaHQgLSB0aGlzLnN0YXRlLmNvbnRhaW5lckhlaWdodCkpO1xuICAgIH1cblxuICAgIHNjcm9sbExlZnQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsWFRvKDApO1xuICAgIH1cblxuICAgIHNjcm9sbFJpZ2h0KCkge1xuICAgICAgICB0aGlzLnNjcm9sbFhUbygodGhpcy5zdGF0ZS5yZWFsV2lkdGggLSB0aGlzLnN0YXRlLmNvbnRhaW5lcldpZHRoKSk7XG4gICAgfVxuXG4gICAgc2Nyb2xsWVRvKHRvcFBvc2l0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmNhblNjcm9sbFkoKSkge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemVUb3BQb3NpdGlvbih0b3BQb3NpdGlvbiwgdGhpcy5jb21wdXRlU2l6ZXMoKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHt0b3BQb3NpdGlvbjogcG9zaXRpb259LCBldmVudFR5cGVzLmFwaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxYVG8obGVmdFBvc2l0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmNhblNjcm9sbFgoKSkge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemVMZWZ0UG9zaXRpb24obGVmdFBvc2l0aW9uLCB0aGlzLmNvbXB1dGVTaXplcygpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQoe2xlZnRQb3NpdGlvbjogcG9zaXRpb259LCBldmVudFR5cGVzLmFwaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW5TY3JvbGxZKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xuICAgICAgICBsZXQgc2Nyb2xsYWJsZVkgPSBzdGF0ZS5yZWFsSGVpZ2h0ID4gc3RhdGUuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICByZXR1cm4gc2Nyb2xsYWJsZVkgJiYgdGhpcy5wcm9wcy52ZXJ0aWNhbDtcbiAgICB9XG5cbiAgICBjYW5TY3JvbGxYKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xuICAgICAgICBsZXQgc2Nyb2xsYWJsZVggPSBzdGF0ZS5yZWFsV2lkdGggPiBzdGF0ZS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgcmV0dXJuIHNjcm9sbGFibGVYICYmIHRoaXMucHJvcHMuaG9yaXpvbnRhbDtcbiAgICB9XG5cbiAgICBnZXRNb2RpZmllZFBvc2l0aW9uc0lmTmVlZGVkKG5ld1N0YXRlKSB7XG4gICAgICAgIGxldCBib3R0b21Qb3NpdGlvbiA9IG5ld1N0YXRlLnJlYWxIZWlnaHQgLSBuZXdTdGF0ZS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcFBvc2l0aW9uID49IGJvdHRvbVBvc2l0aW9uKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS50b3BQb3NpdGlvbiA9IHRoaXMuY2FuU2Nyb2xsWShuZXdTdGF0ZSkgPyBwb3NpdGl2ZU9yWmVybyhib3R0b21Qb3NpdGlvbikgOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJpZ2h0UG9zaXRpb24gPSBuZXdTdGF0ZS5yZWFsV2lkdGggLSBuZXdTdGF0ZS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGVmdFBvc2l0aW9uID49IHJpZ2h0UG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLmxlZnRQb3NpdGlvbiA9IHRoaXMuY2FuU2Nyb2xsWChuZXdTdGF0ZSkgPyBwb3NpdGl2ZU9yWmVybyhyaWdodFBvc2l0aW9uKSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgZm9jdXNDb250ZW50KCkge1xuICAgICAgICBpZih0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIGZpbmRET01Ob2RlKHRoaXMuY29udGVudCkuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuU2Nyb2xsQXJlYS5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBzY3JvbGxBcmVhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5TY3JvbGxBcmVhLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc3BlZWQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgY29udGVudENsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250ZW50U3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgdmVydGljYWw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHZlcnRpY2FsQ29udGFpbmVyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgdmVydGljYWxTY3JvbGxiYXJTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBob3Jpem9udGFsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBob3Jpem9udGFsQ29udGFpbmVyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgaG9yaXpvbnRhbFNjcm9sbGJhclN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uU2Nyb2xsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBjb250ZW50V2luZG93OiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICAgIG93bmVyRG9jdW1lbnQ6IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgc21vb3RoU2Nyb2xsaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBtaW5TY3JvbGxTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHN3YXBXaGVlbEF4ZXM6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHN0b3BTY3JvbGxQcm9wYWdhdGlvbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9jdXNhYmxlVGFiSW5kZXg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5cblNjcm9sbEFyZWEuZGVmYXVsdFByb3BzID0ge1xuICAgIHNwZWVkOiAxLFxuICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgc21vb3RoU2Nyb2xsaW5nOiBmYWxzZSxcbiAgICBzd2FwV2hlZWxBeGVzOiBmYWxzZSxcbiAgICBjb250ZW50V2luZG93OiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgPyB3aW5kb3cgOiB1bmRlZmluZWQsXG4gICAgb3duZXJEb2N1bWVudDogKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJvYmplY3RcIikgPyBkb2N1bWVudCA6IHVuZGVmaW5lZCxcbiAgICBmb2N1c2FibGVUYWJJbmRleDogMVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9TY3JvbGxBcmVhLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtNb3Rpb24sIHNwcmluZ30gZnJvbSAncmVhY3QtbW90aW9uJztcbmltcG9ydCB7bW9kaWZ5T2JqVmFsdWVzfSBmcm9tICcuL3V0aWxzJztcblxuY2xhc3MgU2Nyb2xsQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5jYWxjdWxhdGVTdGF0ZShwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3U3RhdGUucG9zaXRpb24sXG4gICAgICAgICAgICBzY3JvbGxTaXplOiBuZXdTdGF0ZS5zY3JvbGxTaXplLFxuICAgICAgICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICBsYXN0Q2xpZW50UG9zaXRpb246IDBcbiAgICAgICAgfTtcblxuICAgICAgICBpZihwcm9wcy50eXBlID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgIHRoaXMuYmluZGVkSGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmVGb3JWZXJ0aWNhbC5iaW5kKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZU1vdmUgPSB0aGlzLmhhbmRsZU1vdXNlTW92ZUZvckhvcml6b250YWwuYmluZCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmluZGVkSGFuZGxlTW91c2VVcCA9IHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuYmluZGVkSGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlVXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuY2FsY3VsYXRlU3RhdGUobmV4dFByb3BzKSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuYmluZGVkSGFuZGxlTW91c2VVcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVGcmFjdGlvbmFsUG9zaXRpb24ocmVhbENvbnRlbnRTaXplLCBjb250YWluZXJTaXplLCBjb250ZW50UG9zaXRpb24pe1xuICAgICAgICBsZXQgcmVsYXRpdmVTaXplID0gcmVhbENvbnRlbnRTaXplIC0gY29udGFpbmVyU2l6ZTtcblxuICAgICAgICByZXR1cm4gMSAtICgocmVsYXRpdmVTaXplIC0gY29udGVudFBvc2l0aW9uKSAvIHJlbGF0aXZlU2l6ZSk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlU3RhdGUocHJvcHMpe1xuICAgICAgICBsZXQgZnJhY3Rpb25hbFBvc2l0aW9uID0gdGhpcy5jYWxjdWxhdGVGcmFjdGlvbmFsUG9zaXRpb24ocHJvcHMucmVhbFNpemUsIHByb3BzLmNvbnRhaW5lclNpemUsIHByb3BzLnBvc2l0aW9uKTtcbiAgICAgICAgbGV0IHByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemUgPSBwcm9wcy5jb250YWluZXJTaXplICogcHJvcHMuY29udGFpbmVyU2l6ZSAvIHByb3BzLnJlYWxTaXplO1xuICAgICAgICBsZXQgc2Nyb2xsU2l6ZSA9IHByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemUgPCBwcm9wcy5taW5TY3JvbGxTaXplID8gcHJvcHMubWluU2Nyb2xsU2l6ZSA6IHByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemU7XG5cbiAgICAgICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gKHByb3BzLmNvbnRhaW5lclNpemUgLSBzY3JvbGxTaXplKSAqIGZyYWN0aW9uYWxQb3NpdGlvbjtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcm9sbFNpemU6IHNjcm9sbFNpemUsXG4gICAgICAgICAgICBwb3NpdGlvbjogTWF0aC5yb3VuZChzY3JvbGxQb3NpdGlvbilcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IHtzbW9vdGhTY3JvbGxpbmcsIGlzRHJhZ2dpbmcsIHR5cGUsIHNjcm9sbGJhclN0eWxlLCBjb250YWluZXJTdHlsZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgaXNWb3JpemlvbnRhbCA9IHR5cGUgPT09ICdob3Jpem9udGFsJztcbiAgICAgICAgbGV0IGlzVmVydGljYWwgPSB0eXBlID09PSAndmVydGljYWwnO1xuICAgICAgICBsZXQgc2Nyb2xsU3R5bGVzID0gdGhpcy5jcmVhdGVTY3JvbGxTdHlsZXMoKTtcbiAgICAgICAgbGV0IHNwcmluZ2lmaWVkU2Nyb2xsU3R5bGVzID0gc21vb3RoU2Nyb2xsaW5nID8gbW9kaWZ5T2JqVmFsdWVzKHNjcm9sbFN0eWxlcywgeCA9PiBzcHJpbmcoeCkpIDogc2Nyb2xsU3R5bGVzO1xuXG4gICAgICAgIGxldCBzY3JvbGxiYXJDbGFzc2VzID0gYHNjcm9sbGJhci1jb250YWluZXIgJHtpc0RyYWdnaW5nID8gJ2FjdGl2ZScgOiAnJ30gJHtpc1Zvcml6aW9udGFsID8gJ2hvcml6b250YWwnIDogJyd9ICR7aXNWZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnJ31gO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW90aW9uIHN0eWxlPXtzcHJpbmdpZmllZFNjcm9sbFN0eWxlc30+XG4gICAgICAgICAgICAgICAgeyBzdHlsZSA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Njcm9sbGJhckNsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y29udGFpbmVyU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVTY3JvbGxCYXJDb250YWluZXJDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsgeCA9PiB0aGlzLnNjcm9sbGJhckNvbnRhaW5lciA9IHggfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi5zY3JvbGxiYXJTdHlsZSwgLi4uc3R5bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvTW90aW9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZVNjcm9sbEJhckNvbnRhaW5lckNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgbXVsdGlwbGllciA9IHRoaXMuY29tcHV0ZU11bHRpcGxpZXIoKTtcbiAgICAgICAgbGV0IGNsaWVudFBvc2l0aW9uID0gdGhpcy5pc1ZlcnRpY2FsKCkgPyBlLmNsaWVudFkgOiBlLmNsaWVudFg7XG4gICAgICAgIGxldCB7IHRvcCwgbGVmdCB9ID0gdGhpcy5zY3JvbGxiYXJDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCBjbGllbnRTY3JvbGxQb3NpdGlvbiA9IHRoaXMuaXNWZXJ0aWNhbCgpID8gdG9wIDogbGVmdDtcblxuICAgICAgICBsZXQgcG9zaXRpb24gPSBjbGllbnRQb3NpdGlvbiAtIGNsaWVudFNjcm9sbFBvc2l0aW9uO1xuICAgICAgICBsZXQgcHJvcG9ydGlvbmFsVG9QYWdlU2Nyb2xsU2l6ZSA9IHRoaXMucHJvcHMuY29udGFpbmVyU2l6ZSAqIHRoaXMucHJvcHMuY29udGFpbmVyU2l6ZSAvIHRoaXMucHJvcHMucmVhbFNpemU7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNEcmFnZ2luZzogdHJ1ZSwgbGFzdENsaWVudFBvc2l0aW9uOiBjbGllbnRQb3NpdGlvbiB9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBvc2l0aW9uQ2hhbmdlKChwb3NpdGlvbiAtIHByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemUgLyAyKSAvIG11bHRpcGxpZXIpO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZUZvckhvcml6b250YWwoZSl7XG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gdGhpcy5jb21wdXRlTXVsdGlwbGllcigpO1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuaXNEcmFnZ2luZyl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgZGVsdGFYID0gdGhpcy5zdGF0ZS5sYXN0Q2xpZW50UG9zaXRpb24gLSBlLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGFzdENsaWVudFBvc2l0aW9uOiBlLmNsaWVudFggfSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uTW92ZSgwLCBkZWx0YVggLyBtdWx0aXBsaWVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlTW92ZUZvclZlcnRpY2FsKGUpe1xuICAgICAgICBsZXQgbXVsdGlwbGllciA9IHRoaXMuY29tcHV0ZU11bHRpcGxpZXIoKTtcblxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzRHJhZ2dpbmcpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGRlbHRhWSA9IHRoaXMuc3RhdGUubGFzdENsaWVudFBvc2l0aW9uIC0gZS5jbGllbnRZO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RDbGllbnRQb3NpdGlvbjogZS5jbGllbnRZIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmUoZGVsdGFZIC8gbXVsdGlwbGllciwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZURvd24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbGV0IGxhc3RDbGllbnRQb3NpdGlvbiA9IHRoaXMuaXNWZXJ0aWNhbCgpID8gZS5jbGllbnRZOiBlLmNsaWVudFg7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzRHJhZ2dpbmc6IHRydWUsIGxhc3RDbGllbnRQb3NpdGlvbjogbGFzdENsaWVudFBvc2l0aW9uIH0pO1xuXG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cygpO1xuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlVXAoZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNEcmFnZ2luZzogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2Nyb2xsU3R5bGVzKCl7XG4gICAgICAgIGlmKHRoaXMucHJvcHMudHlwZSA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5zY3JvbGxTaXplLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdGhpcy5zdGF0ZS5wb3NpdGlvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3RhdGUuc2Nyb2xsU2l6ZSxcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGlzLnN0YXRlLnBvc2l0aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZU11bHRpcGxpZXIoKXtcbiAgICAgICAgcmV0dXJuICh0aGlzLnByb3BzLmNvbnRhaW5lclNpemUpIC8gdGhpcy5wcm9wcy5yZWFsU2l6ZTtcbiAgICB9XG5cbiAgICBpc1ZlcnRpY2FsKCl7XG4gICAgICAgcmV0dXJuIHRoaXMucHJvcHMudHlwZSA9PT0gJ3ZlcnRpY2FsJztcbiAgICB9XG59XG5cblNjcm9sbEJhci5wcm9wVHlwZXMgPSB7XG4gICAgb25Nb3ZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblBvc2l0aW9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICByZWFsU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb250YWluZXJTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHBvc2l0aW9uOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbnRhaW5lclN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHNjcm9sbGJhclN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXSksXG4gICAgb3duZXJEb2N1bWVudDogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBzbW9vdGhTY3JvbGxpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG1pblNjcm9sbFNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5cblNjcm9sbEJhci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZSA6ICd2ZXJ0aWNhbCcsXG4gICAgc21vb3RoU2Nyb2xsaW5nOiBmYWxzZVxufTtcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEJhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9TY3JvbGxiYXIuanN4IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmUob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmpbJ2RlZmF1bHQnXSA6IG9iajsgfVxuXG52YXIgX01vdGlvbiA9IHJlcXVpcmUoJy4vTW90aW9uJyk7XG5cbmV4cG9ydHMuTW90aW9uID0gX2ludGVyb3BSZXF1aXJlKF9Nb3Rpb24pO1xuXG52YXIgX1N0YWdnZXJlZE1vdGlvbiA9IHJlcXVpcmUoJy4vU3RhZ2dlcmVkTW90aW9uJyk7XG5cbmV4cG9ydHMuU3RhZ2dlcmVkTW90aW9uID0gX2ludGVyb3BSZXF1aXJlKF9TdGFnZ2VyZWRNb3Rpb24pO1xuXG52YXIgX1RyYW5zaXRpb25Nb3Rpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb25Nb3Rpb24nKTtcblxuZXhwb3J0cy5UcmFuc2l0aW9uTW90aW9uID0gX2ludGVyb3BSZXF1aXJlKF9UcmFuc2l0aW9uTW90aW9uKTtcblxudmFyIF9zcHJpbmcgPSByZXF1aXJlKCcuL3NwcmluZycpO1xuXG5leHBvcnRzLnNwcmluZyA9IF9pbnRlcm9wUmVxdWlyZShfc3ByaW5nKTtcblxudmFyIF9wcmVzZXRzID0gcmVxdWlyZSgnLi9wcmVzZXRzJyk7XG5cbmV4cG9ydHMucHJlc2V0cyA9IF9pbnRlcm9wUmVxdWlyZShfcHJlc2V0cyk7XG5cbnZhciBfc3RyaXBTdHlsZSA9IHJlcXVpcmUoJy4vc3RyaXBTdHlsZScpO1xuXG5leHBvcnRzLnN0cmlwU3R5bGUgPSBfaW50ZXJvcFJlcXVpcmUoX3N0cmlwU3R5bGUpO1xuXG4vLyBkZXByZWNhdGVkLCBkdW1teSB3YXJuaW5nIGZ1bmN0aW9uXG5cbnZhciBfcmVvcmRlcktleXMgPSByZXF1aXJlKCcuL3Jlb3JkZXJLZXlzJyk7XG5cbmV4cG9ydHMucmVvcmRlcktleXMgPSBfaW50ZXJvcFJlcXVpcmUoX3Jlb3JkZXJLZXlzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbW90aW9uL2xpYi9yZWFjdC1tb3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX21hcFRvWmVybyA9IHJlcXVpcmUoJy4vbWFwVG9aZXJvJyk7XG5cbnZhciBfbWFwVG9aZXJvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFRvWmVybyk7XG5cbnZhciBfc3RyaXBTdHlsZSA9IHJlcXVpcmUoJy4vc3RyaXBTdHlsZScpO1xuXG52YXIgX3N0cmlwU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaXBTdHlsZSk7XG5cbnZhciBfc3RlcHBlcjMgPSByZXF1aXJlKCcuL3N0ZXBwZXInKTtcblxudmFyIF9zdGVwcGVyNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0ZXBwZXIzKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BlcmZvcm1hbmNlTm93KTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxudmFyIF9zaG91bGRTdG9wQW5pbWF0aW9uID0gcmVxdWlyZSgnLi9zaG91bGRTdG9wQW5pbWF0aW9uJyk7XG5cbnZhciBfc2hvdWxkU3RvcEFuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaG91bGRTdG9wQW5pbWF0aW9uKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIG1zUGVyRnJhbWUgPSAxMDAwIC8gNjA7XG5cbnZhciBNb3Rpb24gPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1vdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKE1vdGlvbiwgbnVsbCwgW3tcbiAgICBrZXk6ICdwcm9wVHlwZXMnLFxuICAgIHZhbHVlOiB7XG4gICAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBhIGNvbmZpZyBpbiBoZXJlXG4gICAgICBkZWZhdWx0U3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIpLFxuICAgICAgc3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZlR5cGUoW19wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLCBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdF0pKS5pc1JlcXVpcmVkLFxuICAgICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25SZXN0OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmNcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIE1vdGlvbihwcm9wcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW90aW9uKTtcblxuICAgIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgdGhpcy53YXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICB0aGlzLnByZXZUaW1lID0gMDtcbiAgICB0aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgdGhpcy51bnJlYWRQcm9wU3R5bGUgPSBudWxsO1xuXG4gICAgdGhpcy5jbGVhclVucmVhZFByb3BTdHlsZSA9IGZ1bmN0aW9uIChkZXN0U3R5bGUpIHtcbiAgICAgIHZhciBkaXJ0eSA9IGZhbHNlO1xuICAgICAgdmFyIF9zdGF0ZSA9IF90aGlzLnN0YXRlO1xuICAgICAgdmFyIGN1cnJlbnRTdHlsZSA9IF9zdGF0ZS5jdXJyZW50U3R5bGU7XG4gICAgICB2YXIgY3VycmVudFZlbG9jaXR5ID0gX3N0YXRlLmN1cnJlbnRWZWxvY2l0eTtcbiAgICAgIHZhciBsYXN0SWRlYWxTdHlsZSA9IF9zdGF0ZS5sYXN0SWRlYWxTdHlsZTtcbiAgICAgIHZhciBsYXN0SWRlYWxWZWxvY2l0eSA9IF9zdGF0ZS5sYXN0SWRlYWxWZWxvY2l0eTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIGRlc3RTdHlsZSkge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZXN0U3R5bGUsIGtleSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdHlsZVZhbHVlID0gZGVzdFN0eWxlW2tleV07XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBpZiAoIWRpcnR5KSB7XG4gICAgICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50U3R5bGUgPSBfZXh0ZW5kcyh7fSwgY3VycmVudFN0eWxlKTtcbiAgICAgICAgICAgIGN1cnJlbnRWZWxvY2l0eSA9IF9leHRlbmRzKHt9LCBjdXJyZW50VmVsb2NpdHkpO1xuICAgICAgICAgICAgbGFzdElkZWFsU3R5bGUgPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsU3R5bGUpO1xuICAgICAgICAgICAgbGFzdElkZWFsVmVsb2NpdHkgPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsVmVsb2NpdHkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN1cnJlbnRTdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICBjdXJyZW50VmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgICAgbGFzdElkZWFsU3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgbGFzdElkZWFsVmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpcnR5KSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgY3VycmVudFN0eWxlOiBjdXJyZW50U3R5bGUsIGN1cnJlbnRWZWxvY2l0eTogY3VycmVudFZlbG9jaXR5LCBsYXN0SWRlYWxTdHlsZTogbGFzdElkZWFsU3R5bGUsIGxhc3RJZGVhbFZlbG9jaXR5OiBsYXN0SWRlYWxWZWxvY2l0eSB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVE9ETzogd2hlbiBjb25maWcgaXMge2E6IDEwfSBhbmQgZGVzdCBpcyB7YTogMTB9IGRvIHdlIHJhZiBvbmNlIGFuZFxuICAgICAgLy8gY2FsbCBjYj8gTm8sIG90aGVyd2lzZSBhY2NpZGVudGFsIHBhcmVudCByZXJlbmRlciBjYXVzZXMgY2IgdHJpZ2dlclxuICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBfcmFmMlsnZGVmYXVsdCddKGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBhbmltYXRlIGluIHRoZSBmaXJzdCBwbGFjZVxuICAgICAgICB2YXIgcHJvcHNTdHlsZSA9IF90aGlzLnByb3BzLnN0eWxlO1xuICAgICAgICBpZiAoX3Nob3VsZFN0b3BBbmltYXRpb24yWydkZWZhdWx0J10oX3RoaXMuc3RhdGUuY3VycmVudFN0eWxlLCBwcm9wc1N0eWxlLCBfdGhpcy5zdGF0ZS5jdXJyZW50VmVsb2NpdHkpKSB7XG4gICAgICAgICAgaWYgKF90aGlzLndhc0FuaW1hdGluZyAmJiBfdGhpcy5wcm9wcy5vblJlc3QpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uUmVzdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG5vIG5lZWQgdG8gY2FuY2VsIGFuaW1hdGlvbklEIGhlcmU7IHNob3VsZG4ndCBoYXZlIGFueSBpbiBmbGlnaHRcbiAgICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgICAgX3RoaXMud2FzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy53YXNBbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHRpbWVzdGFtcCB8fCBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10oKTtcbiAgICAgICAgdmFyIHRpbWVEZWx0YSA9IGN1cnJlbnRUaW1lIC0gX3RoaXMucHJldlRpbWU7XG4gICAgICAgIF90aGlzLnByZXZUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IF90aGlzLmFjY3VtdWxhdGVkVGltZSArIHRpbWVEZWx0YTtcbiAgICAgICAgLy8gbW9yZSB0aGFuIDEwIGZyYW1lcz8gcHJvbGx5IHN3aXRjaGVkIGJyb3dzZXIgdGFiLiBSZXN0YXJ0XG4gICAgICAgIGlmIChfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPiBtc1BlckZyYW1lICogMTApIHtcbiAgICAgICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLmFjY3VtdWxhdGVkVGltZSA9PT0gMCkge1xuICAgICAgICAgIC8vIG5vIG5lZWQgdG8gY2FuY2VsIGFuaW1hdGlvbklEIGhlcmU7IHNob3VsZG4ndCBoYXZlIGFueSBpbiBmbGlnaHRcbiAgICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgICAgX3RoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXJyZW50RnJhbWVDb21wbGV0aW9uID0gKF90aGlzLmFjY3VtdWxhdGVkVGltZSAtIE1hdGguZmxvb3IoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC8gbXNQZXJGcmFtZSkgKiBtc1BlckZyYW1lKSAvIG1zUGVyRnJhbWU7XG4gICAgICAgIHZhciBmcmFtZXNUb0NhdGNoVXAgPSBNYXRoLmZsb29yKF90aGlzLmFjY3VtdWxhdGVkVGltZSAvIG1zUGVyRnJhbWUpO1xuXG4gICAgICAgIHZhciBuZXdMYXN0SWRlYWxTdHlsZSA9IHt9O1xuICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdHkgPSB7fTtcbiAgICAgICAgdmFyIG5ld0N1cnJlbnRTdHlsZSA9IHt9O1xuICAgICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXR5ID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzU3R5bGUpIHtcbiAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwcm9wc1N0eWxlLCBrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IHByb3BzU3R5bGVba2V5XTtcbiAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBuZXdDdXJyZW50U3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgICBuZXdDdXJyZW50VmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5W2tleV0gPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSA9IF90aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlW2tleV07XG4gICAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSA9IF90aGlzLnN0YXRlLmxhc3RJZGVhbFZlbG9jaXR5W2tleV07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZyYW1lc1RvQ2F0Y2hVcDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBfc3RlcHBlciA9IF9zdGVwcGVyNFsnZGVmYXVsdCddKG1zUGVyRnJhbWUgLyAxMDAwLCBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlLCBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlLCBzdHlsZVZhbHVlLnZhbCwgc3R5bGVWYWx1ZS5zdGlmZm5lc3MsIHN0eWxlVmFsdWUuZGFtcGluZywgc3R5bGVWYWx1ZS5wcmVjaXNpb24pO1xuXG4gICAgICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUgPSBfc3RlcHBlclswXTtcbiAgICAgICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSA9IF9zdGVwcGVyWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX3N0ZXBwZXIyID0gX3N0ZXBwZXI0WydkZWZhdWx0J10obXNQZXJGcmFtZSAvIDEwMDAsIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUsIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUsIHN0eWxlVmFsdWUudmFsLCBzdHlsZVZhbHVlLnN0aWZmbmVzcywgc3R5bGVWYWx1ZS5kYW1waW5nLCBzdHlsZVZhbHVlLnByZWNpc2lvbik7XG5cbiAgICAgICAgICAgIHZhciBuZXh0SWRlYWxYID0gX3N0ZXBwZXIyWzBdO1xuICAgICAgICAgICAgdmFyIG5leHRJZGVhbFYgPSBfc3RlcHBlcjJbMV07XG5cbiAgICAgICAgICAgIG5ld0N1cnJlbnRTdHlsZVtrZXldID0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSArIChuZXh0SWRlYWxYIC0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSkgKiBjdXJyZW50RnJhbWVDb21wbGV0aW9uO1xuICAgICAgICAgICAgbmV3Q3VycmVudFZlbG9jaXR5W2tleV0gPSBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlICsgKG5leHRJZGVhbFYgLSBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlKSAqIGN1cnJlbnRGcmFtZUNvbXBsZXRpb247XG4gICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVtrZXldID0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZTtcbiAgICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5W2tleV0gPSBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICAgICAgLy8gdGhlIGFtb3VudCB3ZSdyZSBsb29wZWQgb3ZlciBhYm92ZVxuICAgICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLT0gZnJhbWVzVG9DYXRjaFVwICogbXNQZXJGcmFtZTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudFN0eWxlOiBuZXdDdXJyZW50U3R5bGUsXG4gICAgICAgICAgY3VycmVudFZlbG9jaXR5OiBuZXdDdXJyZW50VmVsb2NpdHksXG4gICAgICAgICAgbGFzdElkZWFsU3R5bGU6IG5ld0xhc3RJZGVhbFN0eWxlLFxuICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXR5OiBuZXdMYXN0SWRlYWxWZWxvY2l0eVxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy51bnJlYWRQcm9wU3R5bGUgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5kZWZhdWx0U3RhdGUoKTtcbiAgfVxuXG4gIE1vdGlvbi5wcm90b3R5cGUuZGVmYXVsdFN0YXRlID0gZnVuY3Rpb24gZGVmYXVsdFN0YXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWZhdWx0U3R5bGUgPSBfcHJvcHMuZGVmYXVsdFN0eWxlO1xuICAgIHZhciBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcblxuICAgIHZhciBjdXJyZW50U3R5bGUgPSBkZWZhdWx0U3R5bGUgfHwgX3N0cmlwU3R5bGUyWydkZWZhdWx0J10oc3R5bGUpO1xuICAgIHZhciBjdXJyZW50VmVsb2NpdHkgPSBfbWFwVG9aZXJvMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRTdHlsZTogY3VycmVudFN0eWxlLFxuICAgICAgY3VycmVudFZlbG9jaXR5OiBjdXJyZW50VmVsb2NpdHksXG4gICAgICBsYXN0SWRlYWxTdHlsZTogY3VycmVudFN0eWxlLFxuICAgICAgbGFzdElkZWFsVmVsb2NpdHk6IGN1cnJlbnRWZWxvY2l0eVxuICAgIH07XG4gIH07XG5cbiAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IGN1cnJlbnRTdHlsZSdzIHZhbHVlIGlzIHN0YWxlOiBpZiBwcm9wcyBpcyBpbW1lZGlhdGVseVxuICAvLyBjaGFuZ2VkIGZyb20gMCB0byA0MDAgdG8gc3ByaW5nKDApIGFnYWluLCB0aGUgYXN5bmMgY3VycmVudFN0eWxlIGlzIHN0aWxsXG4gIC8vIGF0IDAgKGRpZG4ndCBoYXZlIHRpbWUgdG8gdGljayBhbmQgaW50ZXJwb2xhdGUgZXZlbiBvbmNlKS4gSWYgd2UgbmFpdmVseVxuICAvLyBjb21wYXJlIGN1cnJlbnRTdHlsZSB3aXRoIGRlc3RWYWwgaXQnbGwgYmUgMCA9PT0gMCAobm8gYW5pbWF0aW9uLCBzdG9wKS5cbiAgLy8gSW4gcmVhbGl0eSBjdXJyZW50U3R5bGUgc2hvdWxkIGJlIDQwMFxuXG4gIE1vdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gIH07XG5cbiAgTW90aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIGlmICh0aGlzLnVucmVhZFByb3BTdHlsZSAhPSBudWxsKSB7XG4gICAgICAvLyBwcmV2aW91cyBwcm9wcyBoYXZlbid0IGhhZCB0aGUgY2hhbmNlIHRvIGJlIHNldCB5ZXQ7IHNldCB0aGVtIGhlcmVcbiAgICAgIHRoaXMuY2xlYXJVbnJlYWRQcm9wU3R5bGUodGhpcy51bnJlYWRQcm9wU3R5bGUpO1xuICAgIH1cblxuICAgIHRoaXMudW5yZWFkUHJvcFN0eWxlID0gcHJvcHMuc3R5bGU7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uSUQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcmV2VGltZSA9IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSgpO1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gICAgfVxuICB9O1xuXG4gIE1vdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb25JRCAhPSBudWxsKSB7XG4gICAgICBfcmFmMlsnZGVmYXVsdCddLmNhbmNlbCh0aGlzLmFuaW1hdGlvbklEKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBNb3Rpb24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS5jdXJyZW50U3R5bGUpO1xuICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBNb3Rpb247XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTW90aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8vIGFmdGVyIGNoZWNraW5nIGZvciB1bnJlYWRQcm9wU3R5bGUgIT0gbnVsbCwgd2UgbWFudWFsbHkgZ28gc2V0IHRoZVxuLy8gbm9uLWludGVycG9sYXRpbmcgdmFsdWVzICh0aG9zZSB0aGF0IGFyZSBhIG51bWJlciwgd2l0aG91dCBhIHNwcmluZ1xuLy8gY29uZmlnKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL01vdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcblxuLy8gY3VycmVudGx5IHVzZWQgdG8gaW5pdGlhdGUgdGhlIHZlbG9jaXR5IHN0eWxlIG9iamVjdCB0byAwXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBtYXBUb1plcm87XG5cbmZ1bmN0aW9uIG1hcFRvWmVybyhvYmopIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHJldFtrZXldID0gMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LW1vdGlvbi9saWIvbWFwVG9aZXJvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8vIHR1cm4ge3g6IHt2YWw6IDEsIHN0aWZmbmVzczogMSwgZGFtcGluZzogMn0sIHk6IDJ9IGdlbmVyYXRlZCBieVxuLy8gYHt4OiBzcHJpbmcoMSwge3N0aWZmbmVzczogMSwgZGFtcGluZzogMn0pLCB5OiAyfWAgaW50byB7eDogMSwgeTogMn1cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc3RyaXBTdHlsZTtcblxuZnVuY3Rpb24gc3RyaXBTdHlsZShzdHlsZSkge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBzdHlsZSkge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0eWxlLCBrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmV0W2tleV0gPSB0eXBlb2Ygc3R5bGVba2V5XSA9PT0gJ251bWJlcicgPyBzdHlsZVtrZXldIDogc3R5bGVba2V5XS52YWw7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RyaXBTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5cbi8vIHN0ZXBwZXIgaXMgdXNlZCBhIGxvdC4gU2F2ZXMgYWxsb2NhdGlvbiB0byByZXR1cm4gdGhlIHNhbWUgYXJyYXkgd3JhcHBlci5cbi8vIFRoaXMgaXMgZmluZSBhbmQgZGFuZ2VyLWZyZWUgYWdhaW5zdCBtdXRhdGlvbnMgYmVjYXVzZSB0aGUgY2FsbHNpdGVcbi8vIGltbWVkaWF0ZWx5IGRlc3RydWN0dXJlcyBpdCBhbmQgZ2V0cyB0aGUgbnVtYmVycyBpbnNpZGUgd2l0aG91dCBwYXNzaW5nIHRoZVxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHN0ZXBwZXI7XG5cbnZhciByZXVzZWRUdXBsZSA9IFswLCAwXTtcblxuZnVuY3Rpb24gc3RlcHBlcihzZWNvbmRQZXJGcmFtZSwgeCwgdiwgZGVzdFgsIGssIGIsIHByZWNpc2lvbikge1xuICAvLyBTcHJpbmcgc3RpZmZuZXNzLCBpbiBrZyAvIHNeMlxuXG4gIC8vIGZvciBhbmltYXRpb25zLCBkZXN0WCBpcyByZWFsbHkgc3ByaW5nIGxlbmd0aCAoc3ByaW5nIGF0IHJlc3QpLiBpbml0aWFsXG4gIC8vIHBvc2l0aW9uIGlzIGNvbnNpZGVyZWQgYXMgdGhlIHN0cmV0Y2hlZC9jb21wcmVzc2VkIHBvc2l0aW9uIG9mIGEgc3ByaW5nXG4gIHZhciBGc3ByaW5nID0gLWsgKiAoeCAtIGRlc3RYKTtcblxuICAvLyBEYW1waW5nLCBpbiBrZyAvIHNcbiAgdmFyIEZkYW1wZXIgPSAtYiAqIHY7XG5cbiAgLy8gdXN1YWxseSB3ZSBwdXQgbWFzcyBoZXJlLCBidXQgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcywgc3BlY2lmeWluZyBtYXNzIGlzIGFcbiAgLy8gYml0IHJlZHVuZGFudC4geW91IGNvdWxkIHNpbXBseSBhZGp1c3QgayBhbmQgYiBhY2NvcmRpbmdseVxuICAvLyBsZXQgYSA9IChGc3ByaW5nICsgRmRhbXBlcikgLyBtYXNzO1xuICB2YXIgYSA9IEZzcHJpbmcgKyBGZGFtcGVyO1xuXG4gIHZhciBuZXdWID0gdiArIGEgKiBzZWNvbmRQZXJGcmFtZTtcbiAgdmFyIG5ld1ggPSB4ICsgbmV3ViAqIHNlY29uZFBlckZyYW1lO1xuXG4gIGlmIChNYXRoLmFicyhuZXdWKSA8IHByZWNpc2lvbiAmJiBNYXRoLmFicyhuZXdYIC0gZGVzdFgpIDwgcHJlY2lzaW9uKSB7XG4gICAgcmV1c2VkVHVwbGVbMF0gPSBkZXN0WDtcbiAgICByZXVzZWRUdXBsZVsxXSA9IDA7XG4gICAgcmV0dXJuIHJldXNlZFR1cGxlO1xuICB9XG5cbiAgcmV1c2VkVHVwbGVbMF0gPSBuZXdYO1xuICByZXVzZWRUdXBsZVsxXSA9IG5ld1Y7XG4gIHJldHVybiByZXVzZWRUdXBsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIGFycmF5IHJlZmVyZW5jZSBhcm91bmQuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjcuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWU7XG5cbiAgaWYgKCh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgcGVyZm9ybWFuY2UgIT09IG51bGwpICYmIHBlcmZvcm1hbmNlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2VzcyAhPT0gbnVsbCkgJiYgcHJvY2Vzcy5ocnRpbWUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChnZXROYW5vU2Vjb25kcygpIC0gbG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgfSBlbHNlIGlmIChEYXRlLm5vdykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gRGF0ZS5ub3coKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBEYXRlLm5vdygpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBub3cgPSByZXF1aXJlKCdwZXJmb3JtYW5jZS1ub3cnKVxuICAsIHJvb3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSByb290WydyZXF1ZXN0JyArIHN1ZmZpeF1cbiAgLCBjYWYgPSByb290WydjYW5jZWwnICsgc3VmZml4XSB8fCByb290WydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgIXJhZiAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICByYWYgPSByb290W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdCcgKyBzdWZmaXhdXG4gIGNhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdDYW5jZWwnICsgc3VmZml4XVxuICAgICAgfHwgcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChyb290LCBmbilcbn1cbm1vZHVsZS5leHBvcnRzLmNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICBjYWYuYXBwbHkocm9vdCwgYXJndW1lbnRzKVxufVxubW9kdWxlLmV4cG9ydHMucG9seWZpbGwgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKCFvYmplY3QpIHtcbiAgICBvYmplY3QgPSByb290O1xuICB9XG4gIG9iamVjdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByYWZcbiAgb2JqZWN0LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmFmL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWUsIG1vZHVsZUxvYWRUaW1lLCBub2RlTG9hZFRpbWUsIHVwVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBub2RlTG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIG1vZHVsZUxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgICB1cFRpbWUgPSBwcm9jZXNzLnVwdGltZSgpICogMWU5O1xuICAgIG5vZGVMb2FkVGltZSA9IG1vZHVsZUxvYWRUaW1lIC0gdXBUaW1lO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wZXJmb3JtYW5jZS1ub3cuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmFmL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuXG4vLyB1c2FnZSBhc3N1bXB0aW9uOiBjdXJyZW50U3R5bGUgdmFsdWVzIGhhdmUgYWxyZWFkeSBiZWVuIHJlbmRlcmVkIGJ1dCBpdCBzYXlzXG4vLyBub3RoaW5nIG9mIHdoZXRoZXIgY3VycmVudFN0eWxlIGlzIHN0YWxlIChzZWUgdW5yZWFkUHJvcFN0eWxlKVxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc2hvdWxkU3RvcEFuaW1hdGlvbjtcblxuZnVuY3Rpb24gc2hvdWxkU3RvcEFuaW1hdGlvbihjdXJyZW50U3R5bGUsIHN0eWxlLCBjdXJyZW50VmVsb2NpdHkpIHtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3R5bGUsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50VmVsb2NpdHlba2V5XSAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBzdHlsZVZhbHVlID0gdHlwZW9mIHN0eWxlW2tleV0gPT09ICdudW1iZXInID8gc3R5bGVba2V5XSA6IHN0eWxlW2tleV0udmFsO1xuICAgIC8vIHN0ZXBwZXIgd2lsbCBoYXZlIGFscmVhZHkgdGFrZW4gY2FyZSBvZiByb3VuZGluZyBwcmVjaXNpb24gZXJyb3JzLCBzb1xuICAgIC8vIHdvbid0IGhhdmUgc3VjaCB0aGluZyBhcyAwLjk5OTkgIT09PSAxXG4gICAgaWYgKGN1cnJlbnRTdHlsZVtrZXldICE9PSBzdHlsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL3Nob3VsZFN0b3BBbmltYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJXMgYXQgaW5kZXggJXMuJyxcbiAgICAgICAgICBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlciksXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi93YXJuaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuICB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmICh0eXBlU3BlY3MuaGFzT3duUHJvcGVydHkodHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yLCAnJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgd2FybmluZyhmYWxzZSwgJ0ZhaWxlZCAlcyB0eXBlOiAlcyVzJywgbG9jYXRpb24sIGVycm9yLm1lc3NhZ2UsIHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfbWFwVG9aZXJvID0gcmVxdWlyZSgnLi9tYXBUb1plcm8nKTtcblxudmFyIF9tYXBUb1plcm8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwVG9aZXJvKTtcblxudmFyIF9zdHJpcFN0eWxlID0gcmVxdWlyZSgnLi9zdHJpcFN0eWxlJyk7XG5cbnZhciBfc3RyaXBTdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpcFN0eWxlKTtcblxudmFyIF9zdGVwcGVyMyA9IHJlcXVpcmUoJy4vc3RlcHBlcicpO1xuXG52YXIgX3N0ZXBwZXI0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RlcHBlcjMpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93ID0gcmVxdWlyZSgncGVyZm9ybWFuY2Utbm93Jyk7XG5cbnZhciBfcGVyZm9ybWFuY2VOb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGVyZm9ybWFuY2VOb3cpO1xuXG52YXIgX3JhZiA9IHJlcXVpcmUoJ3JhZicpO1xuXG52YXIgX3JhZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYWYpO1xuXG52YXIgX3Nob3VsZFN0b3BBbmltYXRpb24gPSByZXF1aXJlKCcuL3Nob3VsZFN0b3BBbmltYXRpb24nKTtcblxudmFyIF9zaG91bGRTdG9wQW5pbWF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Nob3VsZFN0b3BBbmltYXRpb24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgbXNQZXJGcmFtZSA9IDEwMDAgLyA2MDtcblxuZnVuY3Rpb24gc2hvdWxkU3RvcEFuaW1hdGlvbkFsbChjdXJyZW50U3R5bGVzLCBzdHlsZXMsIGN1cnJlbnRWZWxvY2l0aWVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICghX3Nob3VsZFN0b3BBbmltYXRpb24yWydkZWZhdWx0J10oY3VycmVudFN0eWxlc1tpXSwgc3R5bGVzW2ldLCBjdXJyZW50VmVsb2NpdGllc1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBTdGFnZ2VyZWRNb3Rpb24gPSAoZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0YWdnZXJlZE1vdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKFN0YWdnZXJlZE1vdGlvbiwgbnVsbCwgW3tcbiAgICBrZXk6ICdwcm9wVHlwZXMnLFxuICAgIHZhbHVlOiB7XG4gICAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBhIGNvbmZpZyBpbiBoZXJlXG4gICAgICBkZWZhdWx0U3R5bGVzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmFycmF5T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3RPZihfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcikpLFxuICAgICAgc3R5bGVzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGNoaWxkcmVuOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9XSk7XG5cbiAgZnVuY3Rpb24gU3RhZ2dlcmVkTW90aW9uKHByb3BzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFnZ2VyZWRNb3Rpb24pO1xuXG4gICAgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICB0aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICB0aGlzLnByZXZUaW1lID0gMDtcbiAgICB0aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgdGhpcy51bnJlYWRQcm9wU3R5bGVzID0gbnVsbDtcblxuICAgIHRoaXMuY2xlYXJVbnJlYWRQcm9wU3R5bGUgPSBmdW5jdGlvbiAodW5yZWFkUHJvcFN0eWxlcykge1xuICAgICAgdmFyIF9zdGF0ZSA9IF90aGlzLnN0YXRlO1xuICAgICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBfc3RhdGUuY3VycmVudFN0eWxlcztcbiAgICAgIHZhciBjdXJyZW50VmVsb2NpdGllcyA9IF9zdGF0ZS5jdXJyZW50VmVsb2NpdGllcztcbiAgICAgIHZhciBsYXN0SWRlYWxTdHlsZXMgPSBfc3RhdGUubGFzdElkZWFsU3R5bGVzO1xuICAgICAgdmFyIGxhc3RJZGVhbFZlbG9jaXRpZXMgPSBfc3RhdGUubGFzdElkZWFsVmVsb2NpdGllcztcblxuICAgICAgdmFyIHNvbWVEaXJ0eSA9IGZhbHNlO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bnJlYWRQcm9wU3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB1bnJlYWRQcm9wU3R5bGUgPSB1bnJlYWRQcm9wU3R5bGVzW2ldO1xuICAgICAgICB2YXIgZGlydHkgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdW5yZWFkUHJvcFN0eWxlKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodW5yZWFkUHJvcFN0eWxlLCBrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IHVucmVhZFByb3BTdHlsZVtrZXldO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmICghZGlydHkpIHtcbiAgICAgICAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgICBzb21lRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgICBjdXJyZW50U3R5bGVzW2ldID0gX2V4dGVuZHMoe30sIGN1cnJlbnRTdHlsZXNbaV0pO1xuICAgICAgICAgICAgICBjdXJyZW50VmVsb2NpdGllc1tpXSA9IF9leHRlbmRzKHt9LCBjdXJyZW50VmVsb2NpdGllc1tpXSk7XG4gICAgICAgICAgICAgIGxhc3RJZGVhbFN0eWxlc1tpXSA9IF9leHRlbmRzKHt9LCBsYXN0SWRlYWxTdHlsZXNbaV0pO1xuICAgICAgICAgICAgICBsYXN0SWRlYWxWZWxvY2l0aWVzW2ldID0gX2V4dGVuZHMoe30sIGxhc3RJZGVhbFZlbG9jaXRpZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFN0eWxlc1tpXVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzW2ldW2tleV0gPSAwO1xuICAgICAgICAgICAgbGFzdElkZWFsU3R5bGVzW2ldW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgICAgbGFzdElkZWFsVmVsb2NpdGllc1tpXVtrZXldID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNvbWVEaXJ0eSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdHlsZXM6IGN1cnJlbnRTdHlsZXMsIGN1cnJlbnRWZWxvY2l0aWVzOiBjdXJyZW50VmVsb2NpdGllcywgbGFzdElkZWFsU3R5bGVzOiBsYXN0SWRlYWxTdHlsZXMsIGxhc3RJZGVhbFZlbG9jaXRpZXM6IGxhc3RJZGVhbFZlbG9jaXRpZXMgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFRPRE86IHdoZW4gY29uZmlnIGlzIHthOiAxMH0gYW5kIGRlc3QgaXMge2E6IDEwfSBkbyB3ZSByYWYgb25jZSBhbmRcbiAgICAgIC8vIGNhbGwgY2I/IE5vLCBvdGhlcndpc2UgYWNjaWRlbnRhbCBwYXJlbnQgcmVyZW5kZXIgY2F1c2VzIGNiIHRyaWdnZXJcbiAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gX3JhZjJbJ2RlZmF1bHQnXShmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBkZXN0U3R5bGVzID0gX3RoaXMucHJvcHMuc3R5bGVzKF90aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlcyk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBhbmltYXRlIGluIHRoZSBmaXJzdCBwbGFjZVxuICAgICAgICBpZiAoc2hvdWxkU3RvcEFuaW1hdGlvbkFsbChfdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGVzLCBkZXN0U3R5bGVzLCBfdGhpcy5zdGF0ZS5jdXJyZW50VmVsb2NpdGllcykpIHtcbiAgICAgICAgICAvLyBubyBuZWVkIHRvIGNhbmNlbCBhbmltYXRpb25JRCBoZXJlOyBzaG91bGRuJ3QgaGF2ZSBhbnkgaW4gZmxpZ2h0XG4gICAgICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gdGltZXN0YW1wIHx8IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSgpO1xuICAgICAgICB2YXIgdGltZURlbHRhID0gY3VycmVudFRpbWUgLSBfdGhpcy5wcmV2VGltZTtcbiAgICAgICAgX3RoaXMucHJldlRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gX3RoaXMuYWNjdW11bGF0ZWRUaW1lICsgdGltZURlbHRhO1xuICAgICAgICAvLyBtb3JlIHRoYW4gMTAgZnJhbWVzPyBwcm9sbHkgc3dpdGNoZWQgYnJvd3NlciB0YWIuIFJlc3RhcnRcbiAgICAgICAgaWYgKF90aGlzLmFjY3VtdWxhdGVkVGltZSA+IG1zUGVyRnJhbWUgKiAxMCkge1xuICAgICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lID09PSAwKSB7XG4gICAgICAgICAgLy8gbm8gbmVlZCB0byBjYW5jZWwgYW5pbWF0aW9uSUQgaGVyZTsgc2hvdWxkbid0IGhhdmUgYW55IGluIGZsaWdodFxuICAgICAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICAgICAgICBfdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRGcmFtZUNvbXBsZXRpb24gPSAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC0gTWF0aC5mbG9vcihfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLyBtc1BlckZyYW1lKSAqIG1zUGVyRnJhbWUpIC8gbXNQZXJGcmFtZTtcbiAgICAgICAgdmFyIGZyYW1lc1RvQ2F0Y2hVcCA9IE1hdGguZmxvb3IoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC8gbXNQZXJGcmFtZSk7XG5cbiAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFN0eWxlcyA9IFtdO1xuICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdGllcyA9IFtdO1xuICAgICAgICB2YXIgbmV3Q3VycmVudFN0eWxlcyA9IFtdO1xuICAgICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXRpZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlc3RTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgZGVzdFN0eWxlID0gZGVzdFN0eWxlc1tpXTtcbiAgICAgICAgICB2YXIgbmV3Q3VycmVudFN0eWxlID0ge307XG4gICAgICAgICAgdmFyIG5ld0N1cnJlbnRWZWxvY2l0eSA9IHt9O1xuICAgICAgICAgIHZhciBuZXdMYXN0SWRlYWxTdHlsZSA9IHt9O1xuICAgICAgICAgIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0eSA9IHt9O1xuXG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGRlc3RTdHlsZSkge1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVzdFN0eWxlLCBrZXkpKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IGRlc3RTdHlsZVtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICBuZXdDdXJyZW50U3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgICAgIG5ld0N1cnJlbnRWZWxvY2l0eVtrZXldID0gMDtcbiAgICAgICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5W2tleV0gPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUgPSBfdGhpcy5zdGF0ZS5sYXN0SWRlYWxTdHlsZXNbaV1ba2V5XTtcbiAgICAgICAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUgPSBfdGhpcy5zdGF0ZS5sYXN0SWRlYWxWZWxvY2l0aWVzW2ldW2tleV07XG4gICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZnJhbWVzVG9DYXRjaFVwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgX3N0ZXBwZXIgPSBfc3RlcHBlcjRbJ2RlZmF1bHQnXShtc1BlckZyYW1lIC8gMTAwMCwgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSwgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSwgc3R5bGVWYWx1ZS52YWwsIHN0eWxlVmFsdWUuc3RpZmZuZXNzLCBzdHlsZVZhbHVlLmRhbXBpbmcsIHN0eWxlVmFsdWUucHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUgPSBfc3RlcHBlclswXTtcbiAgICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlID0gX3N0ZXBwZXJbMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgX3N0ZXBwZXIyID0gX3N0ZXBwZXI0WydkZWZhdWx0J10obXNQZXJGcmFtZSAvIDEwMDAsIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUsIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUsIHN0eWxlVmFsdWUudmFsLCBzdHlsZVZhbHVlLnN0aWZmbmVzcywgc3R5bGVWYWx1ZS5kYW1waW5nLCBzdHlsZVZhbHVlLnByZWNpc2lvbik7XG5cbiAgICAgICAgICAgICAgdmFyIG5leHRJZGVhbFggPSBfc3RlcHBlcjJbMF07XG4gICAgICAgICAgICAgIHZhciBuZXh0SWRlYWxWID0gX3N0ZXBwZXIyWzFdO1xuXG4gICAgICAgICAgICAgIG5ld0N1cnJlbnRTdHlsZVtrZXldID0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSArIChuZXh0SWRlYWxYIC0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSkgKiBjdXJyZW50RnJhbWVDb21wbGV0aW9uO1xuICAgICAgICAgICAgICBuZXdDdXJyZW50VmVsb2NpdHlba2V5XSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUgKyAobmV4dElkZWFsViAtIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUpICogY3VycmVudEZyYW1lQ29tcGxldGlvbjtcbiAgICAgICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVba2V5XSA9IG5ld0xhc3RJZGVhbFN0eWxlVmFsdWU7XG4gICAgICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5W2tleV0gPSBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5ld0N1cnJlbnRTdHlsZXNbaV0gPSBuZXdDdXJyZW50U3R5bGU7XG4gICAgICAgICAgbmV3Q3VycmVudFZlbG9jaXRpZXNbaV0gPSBuZXdDdXJyZW50VmVsb2NpdHk7XG4gICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVzW2ldID0gbmV3TGFzdElkZWFsU3R5bGU7XG4gICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdGllc1tpXSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5O1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgICAvLyB0aGUgYW1vdW50IHdlJ3JlIGxvb3BlZCBvdmVyIGFib3ZlXG4gICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSAtPSBmcmFtZXNUb0NhdGNoVXAgKiBtc1BlckZyYW1lO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50U3R5bGVzOiBuZXdDdXJyZW50U3R5bGVzLFxuICAgICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBuZXdDdXJyZW50VmVsb2NpdGllcyxcbiAgICAgICAgICBsYXN0SWRlYWxTdHlsZXM6IG5ld0xhc3RJZGVhbFN0eWxlcyxcbiAgICAgICAgICBsYXN0SWRlYWxWZWxvY2l0aWVzOiBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLnVucmVhZFByb3BTdHlsZXMgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5kZWZhdWx0U3RhdGUoKTtcbiAgfVxuXG4gIFN0YWdnZXJlZE1vdGlvbi5wcm90b3R5cGUuZGVmYXVsdFN0YXRlID0gZnVuY3Rpb24gZGVmYXVsdFN0YXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWZhdWx0U3R5bGVzID0gX3Byb3BzLmRlZmF1bHRTdHlsZXM7XG4gICAgdmFyIHN0eWxlcyA9IF9wcm9wcy5zdHlsZXM7XG5cbiAgICB2YXIgY3VycmVudFN0eWxlcyA9IGRlZmF1bHRTdHlsZXMgfHwgc3R5bGVzKCkubWFwKF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKTtcbiAgICB2YXIgY3VycmVudFZlbG9jaXRpZXMgPSBjdXJyZW50U3R5bGVzLm1hcChmdW5jdGlvbiAoY3VycmVudFN0eWxlKSB7XG4gICAgICByZXR1cm4gX21hcFRvWmVybzJbJ2RlZmF1bHQnXShjdXJyZW50U3R5bGUpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50U3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgY3VycmVudFZlbG9jaXRpZXM6IGN1cnJlbnRWZWxvY2l0aWVzLFxuICAgICAgbGFzdElkZWFsU3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgbGFzdElkZWFsVmVsb2NpdGllczogY3VycmVudFZlbG9jaXRpZXNcbiAgICB9O1xuICB9O1xuXG4gIFN0YWdnZXJlZE1vdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gIH07XG5cbiAgU3RhZ2dlcmVkTW90aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIGlmICh0aGlzLnVucmVhZFByb3BTdHlsZXMgIT0gbnVsbCkge1xuICAgICAgLy8gcHJldmlvdXMgcHJvcHMgaGF2ZW4ndCBoYWQgdGhlIGNoYW5jZSB0byBiZSBzZXQgeWV0OyBzZXQgdGhlbSBoZXJlXG4gICAgICB0aGlzLmNsZWFyVW5yZWFkUHJvcFN0eWxlKHRoaXMudW5yZWFkUHJvcFN0eWxlcyk7XG4gICAgfVxuXG4gICAgdGhpcy51bnJlYWRQcm9wU3R5bGVzID0gcHJvcHMuc3R5bGVzKHRoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzKTtcbiAgICBpZiAodGhpcy5hbmltYXRpb25JRCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICB9XG4gIH07XG5cbiAgU3RhZ2dlcmVkTW90aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbklEICE9IG51bGwpIHtcbiAgICAgIF9yYWYyWydkZWZhdWx0J10uY2FuY2VsKHRoaXMuYW5pbWF0aW9uSUQpO1xuICAgICAgdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFN0YWdnZXJlZE1vdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMpO1xuICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBTdGFnZ2VyZWRNb3Rpb247XG59KShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3RhZ2dlcmVkTW90aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8vIGl0J3MgcG9zc2libGUgdGhhdCBjdXJyZW50U3R5bGUncyB2YWx1ZSBpcyBzdGFsZTogaWYgcHJvcHMgaXMgaW1tZWRpYXRlbHlcbi8vIGNoYW5nZWQgZnJvbSAwIHRvIDQwMCB0byBzcHJpbmcoMCkgYWdhaW4sIHRoZSBhc3luYyBjdXJyZW50U3R5bGUgaXMgc3RpbGxcbi8vIGF0IDAgKGRpZG4ndCBoYXZlIHRpbWUgdG8gdGljayBhbmQgaW50ZXJwb2xhdGUgZXZlbiBvbmNlKS4gSWYgd2UgbmFpdmVseVxuLy8gY29tcGFyZSBjdXJyZW50U3R5bGUgd2l0aCBkZXN0VmFsIGl0J2xsIGJlIDAgPT09IDAgKG5vIGFuaW1hdGlvbiwgc3RvcCkuXG4vLyBJbiByZWFsaXR5IGN1cnJlbnRTdHlsZSBzaG91bGQgYmUgNDAwXG5cbi8vIGFmdGVyIGNoZWNraW5nIGZvciB1bnJlYWRQcm9wU3R5bGVzICE9IG51bGwsIHdlIG1hbnVhbGx5IGdvIHNldCB0aGVcbi8vIG5vbi1pbnRlcnBvbGF0aW5nIHZhbHVlcyAodGhvc2UgdGhhdCBhcmUgYSBudW1iZXIsIHdpdGhvdXQgYSBzcHJpbmdcbi8vIGNvbmZpZylcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbW90aW9uL2xpYi9TdGFnZ2VyZWRNb3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9tYXBUb1plcm8gPSByZXF1aXJlKCcuL21hcFRvWmVybycpO1xuXG52YXIgX21hcFRvWmVybzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXBUb1plcm8pO1xuXG52YXIgX3N0cmlwU3R5bGUgPSByZXF1aXJlKCcuL3N0cmlwU3R5bGUnKTtcblxudmFyIF9zdHJpcFN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmlwU3R5bGUpO1xuXG52YXIgX3N0ZXBwZXIzID0gcmVxdWlyZSgnLi9zdGVwcGVyJyk7XG5cbnZhciBfc3RlcHBlcjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGVwcGVyMyk7XG5cbnZhciBfbWVyZ2VEaWZmID0gcmVxdWlyZSgnLi9tZXJnZURpZmYnKTtcblxudmFyIF9tZXJnZURpZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2VEaWZmKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BlcmZvcm1hbmNlTm93KTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxudmFyIF9zaG91bGRTdG9wQW5pbWF0aW9uID0gcmVxdWlyZSgnLi9zaG91bGRTdG9wQW5pbWF0aW9uJyk7XG5cbnZhciBfc2hvdWxkU3RvcEFuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaG91bGRTdG9wQW5pbWF0aW9uKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIG1zUGVyRnJhbWUgPSAxMDAwIC8gNjA7XG5cbi8vIHRoZSBjaGlsZHJlbiBmdW5jdGlvbiAmIChwb3RlbnRpYWwpIHN0eWxlcyBmdW5jdGlvbiBhc2tzIGFzIHBhcmFtIGFuXG4vLyBBcnJheTxUcmFuc2l0aW9uUGxhaW5TdHlsZT4sIHdoZXJlIGVhY2ggVHJhbnNpdGlvblBsYWluU3R5bGUgaXMgb2YgdGhlIGZvcm1hdFxuLy8ge2tleTogc3RyaW5nLCBkYXRhPzogYW55LCBzdHlsZTogUGxhaW5TdHlsZX0uIEhvd2V2ZXIsIHRoZSB3YXkgd2Uga2VlcFxuLy8gaW50ZXJuYWwgc3RhdGVzIGRvZXNuJ3QgY29udGFpbiBzdWNoIGEgZGF0YSBzdHJ1Y3R1cmUgKGNoZWNrIHRoZSBzdGF0ZSBhbmRcbi8vIFRyYW5zaXRpb25Nb3Rpb25TdGF0ZSkuIFNvIHdoZW4gY2hpbGRyZW4gZnVuY3Rpb24gYW5kIG90aGVycyBhc2sgZm9yIHN1Y2hcbi8vIGRhdGEgd2UgbmVlZCB0byBnZW5lcmF0ZSB0aGVtIG9uIHRoZSBmbHkgYnkgY29tYmluaW5nIG1lcmdlZFByb3BzU3R5bGVzIGFuZFxuLy8gY3VycmVudFN0eWxlcy9sYXN0SWRlYWxTdHlsZXNcbmZ1bmN0aW9uIHJlaHlkcmF0ZVN0eWxlcyhtZXJnZWRQcm9wc1N0eWxlcywgdW5yZWFkUHJvcFN0eWxlcywgcGxhaW5TdHlsZXMpIHtcbiAgLy8gQ29weSB0aGUgdmFsdWUgdG8gYSBgY29uc3RgIHNvIHRoYXQgRmxvdyB1bmRlcnN0YW5kcyB0aGF0IHRoZSBjb25zdCB3b24ndFxuICAvLyBjaGFuZ2UgYW5kIHdpbGwgYmUgbm9uLW51bGxhYmxlIGluIHRoZSBjYWxsYmFjayBiZWxvdy5cbiAgdmFyIGNVbnJlYWRQcm9wU3R5bGVzID0gdW5yZWFkUHJvcFN0eWxlcztcbiAgaWYgKGNVbnJlYWRQcm9wU3R5bGVzID09IG51bGwpIHtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHNTdHlsZXMubWFwKGZ1bmN0aW9uIChtZXJnZWRQcm9wc1N0eWxlLCBpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IG1lcmdlZFByb3BzU3R5bGUua2V5LFxuICAgICAgICBkYXRhOiBtZXJnZWRQcm9wc1N0eWxlLmRhdGEsXG4gICAgICAgIHN0eWxlOiBwbGFpblN0eWxlc1tpXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbWVyZ2VkUHJvcHNTdHlsZXMubWFwKGZ1bmN0aW9uIChtZXJnZWRQcm9wc1N0eWxlLCBpKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBjVW5yZWFkUHJvcFN0eWxlcy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGNVbnJlYWRQcm9wU3R5bGVzW2pdLmtleSA9PT0gbWVyZ2VkUHJvcHNTdHlsZS5rZXkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXk6IGNVbnJlYWRQcm9wU3R5bGVzW2pdLmtleSxcbiAgICAgICAgICBkYXRhOiBjVW5yZWFkUHJvcFN0eWxlc1tqXS5kYXRhLFxuICAgICAgICAgIHN0eWxlOiBwbGFpblN0eWxlc1tpXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBrZXk6IG1lcmdlZFByb3BzU3R5bGUua2V5LCBkYXRhOiBtZXJnZWRQcm9wc1N0eWxlLmRhdGEsIHN0eWxlOiBwbGFpblN0eWxlc1tpXSB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkU3RvcEFuaW1hdGlvbkFsbChjdXJyZW50U3R5bGVzLCBkZXN0U3R5bGVzLCBjdXJyZW50VmVsb2NpdGllcywgbWVyZ2VkUHJvcHNTdHlsZXMpIHtcbiAgaWYgKG1lcmdlZFByb3BzU3R5bGVzLmxlbmd0aCAhPT0gZGVzdFN0eWxlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1lcmdlZFByb3BzU3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG1lcmdlZFByb3BzU3R5bGVzW2ldLmtleSAhPT0gZGVzdFN0eWxlc1tpXS5rZXkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyB3ZSBoYXZlIHRoZSBpbnZhcmlhbnQgdGhhdCBtZXJnZWRQcm9wc1N0eWxlcyBhbmRcbiAgLy8gY3VycmVudFN0eWxlcy9jdXJyZW50VmVsb2NpdGllcy9sYXN0KiBhcmUgc3luY2VkIGluIHRlcm1zIG9mIGNlbGxzLCBzZWVcbiAgLy8gbWVyZ2VBbmRTeW5jIGNvbW1lbnQgZm9yIG1vcmUgaW5mb1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG1lcmdlZFByb3BzU3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFfc2hvdWxkU3RvcEFuaW1hdGlvbjJbJ2RlZmF1bHQnXShjdXJyZW50U3R5bGVzW2ldLCBkZXN0U3R5bGVzW2ldLnN0eWxlLCBjdXJyZW50VmVsb2NpdGllc1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gY29yZSBrZXkgbWVyZ2luZyBsb2dpY1xuXG4vLyB0aGluZ3MgdG8gZG86IHNheSBwcmV2aW91c2x5IG1lcmdlZCBzdHlsZSBpcyB7YSwgYn0sIGRlc3Qgc3R5bGUgKHByb3ApIGlzIHtiLFxuLy8gY30sIHByZXZpb3VzIGN1cnJlbnQgKGludGVycG9sYXRpbmcpIHN0eWxlIGlzIHthLCBifVxuLy8gKippbnZhcmlhbnQqKjogY3VycmVudFtpXSBjb3JyZXNwb25kcyB0byBtZXJnZWRbaV0gaW4gdGVybXMgb2Yga2V5XG5cbi8vIHN0ZXBzOlxuLy8gdHVybiBtZXJnZWQgc3R5bGUgaW50byB7YT8sIGIsIGN9XG4vLyAgICBhZGQgYywgdmFsdWUgb2YgYyBpcyBkZXN0U3R5bGVzLmNcbi8vICAgIG1heWJlIHJlbW92ZSBhLCBha2EgY2FsbCB3aWxsTGVhdmUoYSksIHRoZW4gbWVyZ2VkIGlzIGVpdGhlciB7YiwgY30gb3Ige2EsIGIsIGN9XG4vLyB0dXJuIGN1cnJlbnQgKGludGVycG9sYXRpbmcpIHN0eWxlIGZyb20ge2EsIGJ9IGludG8ge2E/LCBiLCBjfVxuLy8gICAgbWF5YmUgcmVtb3ZlIGFcbi8vICAgIGNlcnRhaW5seSBhZGQgYywgdmFsdWUgb2YgYyBpcyB3aWxsRW50ZXIoYylcbi8vIGxvb3Agb3ZlciBtZXJnZWQgYW5kIGNvbnN0cnVjdCBuZXcgY3VycmVudFxuLy8gZGVzdCBkb2Vzbid0IGNoYW5nZSwgdGhhdCdzIG93bmVyJ3NcbmZ1bmN0aW9uIG1lcmdlQW5kU3luYyh3aWxsRW50ZXIsIHdpbGxMZWF2ZSwgZGlkTGVhdmUsIG9sZE1lcmdlZFByb3BzU3R5bGVzLCBkZXN0U3R5bGVzLCBvbGRDdXJyZW50U3R5bGVzLCBvbGRDdXJyZW50VmVsb2NpdGllcywgb2xkTGFzdElkZWFsU3R5bGVzLCBvbGRMYXN0SWRlYWxWZWxvY2l0aWVzKSB7XG4gIHZhciBuZXdNZXJnZWRQcm9wc1N0eWxlcyA9IF9tZXJnZURpZmYyWydkZWZhdWx0J10ob2xkTWVyZ2VkUHJvcHNTdHlsZXMsIGRlc3RTdHlsZXMsIGZ1bmN0aW9uIChvbGRJbmRleCwgb2xkTWVyZ2VkUHJvcHNTdHlsZSkge1xuICAgIHZhciBsZWF2aW5nU3R5bGUgPSB3aWxsTGVhdmUob2xkTWVyZ2VkUHJvcHNTdHlsZSk7XG4gICAgaWYgKGxlYXZpbmdTdHlsZSA9PSBudWxsKSB7XG4gICAgICBkaWRMZWF2ZSh7IGtleTogb2xkTWVyZ2VkUHJvcHNTdHlsZS5rZXksIGRhdGE6IG9sZE1lcmdlZFByb3BzU3R5bGUuZGF0YSB9KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoX3Nob3VsZFN0b3BBbmltYXRpb24yWydkZWZhdWx0J10ob2xkQ3VycmVudFN0eWxlc1tvbGRJbmRleF0sIGxlYXZpbmdTdHlsZSwgb2xkQ3VycmVudFZlbG9jaXRpZXNbb2xkSW5kZXhdKSkge1xuICAgICAgZGlkTGVhdmUoeyBrZXk6IG9sZE1lcmdlZFByb3BzU3R5bGUua2V5LCBkYXRhOiBvbGRNZXJnZWRQcm9wc1N0eWxlLmRhdGEgfSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHsga2V5OiBvbGRNZXJnZWRQcm9wc1N0eWxlLmtleSwgZGF0YTogb2xkTWVyZ2VkUHJvcHNTdHlsZS5kYXRhLCBzdHlsZTogbGVhdmluZ1N0eWxlIH07XG4gIH0pO1xuXG4gIHZhciBuZXdDdXJyZW50U3R5bGVzID0gW107XG4gIHZhciBuZXdDdXJyZW50VmVsb2NpdGllcyA9IFtdO1xuICB2YXIgbmV3TGFzdElkZWFsU3R5bGVzID0gW107XG4gIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TWVyZ2VkUHJvcHNTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmV3TWVyZ2VkUHJvcHNTdHlsZUNlbGwgPSBuZXdNZXJnZWRQcm9wc1N0eWxlc1tpXTtcbiAgICB2YXIgZm91bmRPbGRJbmRleCA9IG51bGw7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBvbGRNZXJnZWRQcm9wc1N0eWxlcy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKG9sZE1lcmdlZFByb3BzU3R5bGVzW2pdLmtleSA9PT0gbmV3TWVyZ2VkUHJvcHNTdHlsZUNlbGwua2V5KSB7XG4gICAgICAgIGZvdW5kT2xkSW5kZXggPSBqO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVE9ETzoga2V5IHNlYXJjaCBjb2RlXG4gICAgaWYgKGZvdW5kT2xkSW5kZXggPT0gbnVsbCkge1xuICAgICAgdmFyIHBsYWluU3R5bGUgPSB3aWxsRW50ZXIobmV3TWVyZ2VkUHJvcHNTdHlsZUNlbGwpO1xuICAgICAgbmV3Q3VycmVudFN0eWxlc1tpXSA9IHBsYWluU3R5bGU7XG4gICAgICBuZXdMYXN0SWRlYWxTdHlsZXNbaV0gPSBwbGFpblN0eWxlO1xuXG4gICAgICB2YXIgdmVsb2NpdHkgPSBfbWFwVG9aZXJvMlsnZGVmYXVsdCddKG5ld01lcmdlZFByb3BzU3R5bGVDZWxsLnN0eWxlKTtcbiAgICAgIG5ld0N1cnJlbnRWZWxvY2l0aWVzW2ldID0gdmVsb2NpdHk7XG4gICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzW2ldID0gdmVsb2NpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0N1cnJlbnRTdHlsZXNbaV0gPSBvbGRDdXJyZW50U3R5bGVzW2ZvdW5kT2xkSW5kZXhdO1xuICAgICAgbmV3TGFzdElkZWFsU3R5bGVzW2ldID0gb2xkTGFzdElkZWFsU3R5bGVzW2ZvdW5kT2xkSW5kZXhdO1xuICAgICAgbmV3Q3VycmVudFZlbG9jaXRpZXNbaV0gPSBvbGRDdXJyZW50VmVsb2NpdGllc1tmb3VuZE9sZEluZGV4XTtcbiAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXRpZXNbaV0gPSBvbGRMYXN0SWRlYWxWZWxvY2l0aWVzW2ZvdW5kT2xkSW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbbmV3TWVyZ2VkUHJvcHNTdHlsZXMsIG5ld0N1cnJlbnRTdHlsZXMsIG5ld0N1cnJlbnRWZWxvY2l0aWVzLCBuZXdMYXN0SWRlYWxTdHlsZXMsIG5ld0xhc3RJZGVhbFZlbG9jaXRpZXNdO1xufVxuXG52YXIgVHJhbnNpdGlvbk1vdGlvbiA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhbnNpdGlvbk1vdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgX2NyZWF0ZUNsYXNzKFRyYW5zaXRpb25Nb3Rpb24sIG51bGwsIFt7XG4gICAga2V5OiAncHJvcFR5cGVzJyxcbiAgICB2YWx1ZToge1xuICAgICAgZGVmYXVsdFN0eWxlczogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hcnJheU9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc2hhcGUoe1xuICAgICAgICBrZXk6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIGRhdGE6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYW55LFxuICAgICAgICBzdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3RPZihfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcikuaXNSZXF1aXJlZFxuICAgICAgfSkpLFxuICAgICAgc3R5bGVzOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9uZU9mVHlwZShbX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jLCBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmFycmF5T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zaGFwZSh7XG4gICAgICAgIGtleTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgZGF0YTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hbnksXG4gICAgICAgIHN0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdE9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlciwgX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3RdKSkuaXNSZXF1aXJlZFxuICAgICAgfSkpXSkuaXNSZXF1aXJlZCxcbiAgICAgIGNoaWxkcmVuOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHdpbGxFbnRlcjogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jLFxuICAgICAgd2lsbExlYXZlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMsXG4gICAgICBkaWRMZWF2ZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jXG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH0sIHtcbiAgICBrZXk6ICdkZWZhdWx0UHJvcHMnLFxuICAgIHZhbHVlOiB7XG4gICAgICB3aWxsRW50ZXI6IGZ1bmN0aW9uIHdpbGxFbnRlcihzdHlsZVRoYXRFbnRlcmVkKSB7XG4gICAgICAgIHJldHVybiBfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXShzdHlsZVRoYXRFbnRlcmVkLnN0eWxlKTtcbiAgICAgIH0sXG4gICAgICAvLyByZWNhbGw6IHJldHVybmluZyBudWxsIG1ha2VzIHRoZSBjdXJyZW50IHVubW91bnRpbmcgVHJhbnNpdGlvblN0eWxlXG4gICAgICAvLyBkaXNhcHBlYXIgaW1tZWRpYXRlbHlcbiAgICAgIHdpbGxMZWF2ZTogZnVuY3Rpb24gd2lsbExlYXZlKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICBkaWRMZWF2ZTogZnVuY3Rpb24gZGlkTGVhdmUoKSB7fVxuICAgIH0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9XSk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbk1vdGlvbihwcm9wcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNpdGlvbk1vdGlvbik7XG5cbiAgICBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpO1xuICAgIHRoaXMudW5tb3VudGluZyA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgIHRoaXMucHJldlRpbWUgPSAwO1xuICAgIHRoaXMuYWNjdW11bGF0ZWRUaW1lID0gMDtcbiAgICB0aGlzLnVucmVhZFByb3BTdHlsZXMgPSBudWxsO1xuXG4gICAgdGhpcy5jbGVhclVucmVhZFByb3BTdHlsZSA9IGZ1bmN0aW9uICh1bnJlYWRQcm9wU3R5bGVzKSB7XG4gICAgICB2YXIgX21lcmdlQW5kU3luYyA9IG1lcmdlQW5kU3luYyhfdGhpcy5wcm9wcy53aWxsRW50ZXIsIF90aGlzLnByb3BzLndpbGxMZWF2ZSwgX3RoaXMucHJvcHMuZGlkTGVhdmUsIF90aGlzLnN0YXRlLm1lcmdlZFByb3BzU3R5bGVzLCB1bnJlYWRQcm9wU3R5bGVzLCBfdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGVzLCBfdGhpcy5zdGF0ZS5jdXJyZW50VmVsb2NpdGllcywgX3RoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzLCBfdGhpcy5zdGF0ZS5sYXN0SWRlYWxWZWxvY2l0aWVzKTtcblxuICAgICAgdmFyIG1lcmdlZFByb3BzU3R5bGVzID0gX21lcmdlQW5kU3luY1swXTtcbiAgICAgIHZhciBjdXJyZW50U3R5bGVzID0gX21lcmdlQW5kU3luY1sxXTtcbiAgICAgIHZhciBjdXJyZW50VmVsb2NpdGllcyA9IF9tZXJnZUFuZFN5bmNbMl07XG4gICAgICB2YXIgbGFzdElkZWFsU3R5bGVzID0gX21lcmdlQW5kU3luY1szXTtcbiAgICAgIHZhciBsYXN0SWRlYWxWZWxvY2l0aWVzID0gX21lcmdlQW5kU3luY1s0XTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bnJlYWRQcm9wU3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB1bnJlYWRQcm9wU3R5bGUgPSB1bnJlYWRQcm9wU3R5bGVzW2ldLnN0eWxlO1xuICAgICAgICB2YXIgZGlydHkgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdW5yZWFkUHJvcFN0eWxlKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodW5yZWFkUHJvcFN0eWxlLCBrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IHVucmVhZFByb3BTdHlsZVtrZXldO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmICghZGlydHkpIHtcbiAgICAgICAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgICBjdXJyZW50U3R5bGVzW2ldID0gX2V4dGVuZHMoe30sIGN1cnJlbnRTdHlsZXNbaV0pO1xuICAgICAgICAgICAgICBjdXJyZW50VmVsb2NpdGllc1tpXSA9IF9leHRlbmRzKHt9LCBjdXJyZW50VmVsb2NpdGllc1tpXSk7XG4gICAgICAgICAgICAgIGxhc3RJZGVhbFN0eWxlc1tpXSA9IF9leHRlbmRzKHt9LCBsYXN0SWRlYWxTdHlsZXNbaV0pO1xuICAgICAgICAgICAgICBsYXN0SWRlYWxWZWxvY2l0aWVzW2ldID0gX2V4dGVuZHMoe30sIGxhc3RJZGVhbFZlbG9jaXRpZXNbaV0pO1xuICAgICAgICAgICAgICBtZXJnZWRQcm9wc1N0eWxlc1tpXSA9IHtcbiAgICAgICAgICAgICAgICBrZXk6IG1lcmdlZFByb3BzU3R5bGVzW2ldLmtleSxcbiAgICAgICAgICAgICAgICBkYXRhOiBtZXJnZWRQcm9wc1N0eWxlc1tpXS5kYXRhLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgbWVyZ2VkUHJvcHNTdHlsZXNbaV0uc3R5bGUpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50U3R5bGVzW2ldW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgICAgY3VycmVudFZlbG9jaXRpZXNbaV1ba2V5XSA9IDA7XG4gICAgICAgICAgICBsYXN0SWRlYWxTdHlsZXNbaV1ba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgICBsYXN0SWRlYWxWZWxvY2l0aWVzW2ldW2tleV0gPSAwO1xuICAgICAgICAgICAgbWVyZ2VkUHJvcHNTdHlsZXNbaV0uc3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHVubGlrZSB0aGUgb3RoZXIgMiBjb21wb25lbnRzLCB3ZSBjYW4ndCBkZXRlY3Qgc3RhbGVuZXNzIGFuZCBvcHRpb25hbGx5XG4gICAgICAvLyBvcHQgb3V0IG9mIHNldFN0YXRlIGhlcmUuIGVhY2ggc3R5bGUgb2JqZWN0J3MgZGF0YSBtaWdodCBjb250YWluIG5ld1xuICAgICAgLy8gc3R1ZmYgd2UncmUgbm90L2Nhbm5vdCBjb21wYXJlXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBjdXJyZW50VmVsb2NpdGllcyxcbiAgICAgICAgbWVyZ2VkUHJvcHNTdHlsZXM6IG1lcmdlZFByb3BzU3R5bGVzLFxuICAgICAgICBsYXN0SWRlYWxTdHlsZXM6IGxhc3RJZGVhbFN0eWxlcyxcbiAgICAgICAgbGFzdElkZWFsVmVsb2NpdGllczogbGFzdElkZWFsVmVsb2NpdGllc1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy51bm1vdW50aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogd2hlbiBjb25maWcgaXMge2E6IDEwfSBhbmQgZGVzdCBpcyB7YTogMTB9IGRvIHdlIHJhZiBvbmNlIGFuZFxuICAgICAgLy8gY2FsbCBjYj8gTm8sIG90aGVyd2lzZSBhY2NpZGVudGFsIHBhcmVudCByZXJlbmRlciBjYXVzZXMgY2IgdHJpZ2dlclxuICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBfcmFmMlsnZGVmYXVsdCddKGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2NoZW5nbG91L3JlYWN0LW1vdGlvbi9wdWxsLzQyMFxuICAgICAgICAvLyA+IGlmIGV4ZWN1dGlvbiBwYXNzZXMgdGhlIGNvbmRpdGlvbmFsIGlmICh0aGlzLnVubW91bnRpbmcpLCB0aGVuXG4gICAgICAgIC8vIGV4ZWN1dGVzIGFzeW5jIGRlZmF1bHRSYWYgYW5kIGFmdGVyIHRoYXQgY29tcG9uZW50IHVubW91bnRzIGFuZCBhZnRlclxuICAgICAgICAvLyB0aGF0IHRoZSBjYWxsYmFjayBvZiBkZWZhdWx0UmFmIGlzIGNhbGxlZCwgdGhlbiBzZXRTdGF0ZSB3aWxsIGJlIGNhbGxlZFxuICAgICAgICAvLyBvbiB1bm1vdW50ZWQgY29tcG9uZW50LlxuICAgICAgICBpZiAoX3RoaXMudW5tb3VudGluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9wU3R5bGVzID0gX3RoaXMucHJvcHMuc3R5bGVzO1xuICAgICAgICB2YXIgZGVzdFN0eWxlcyA9IHR5cGVvZiBwcm9wU3R5bGVzID09PSAnZnVuY3Rpb24nID8gcHJvcFN0eWxlcyhyZWh5ZHJhdGVTdHlsZXMoX3RoaXMuc3RhdGUubWVyZ2VkUHJvcHNTdHlsZXMsIF90aGlzLnVucmVhZFByb3BTdHlsZXMsIF90aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlcykpIDogcHJvcFN0eWxlcztcblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIGFuaW1hdGUgaW4gdGhlIGZpcnN0IHBsYWNlXG4gICAgICAgIGlmIChzaG91bGRTdG9wQW5pbWF0aW9uQWxsKF90aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMsIGRlc3RTdHlsZXMsIF90aGlzLnN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzLCBfdGhpcy5zdGF0ZS5tZXJnZWRQcm9wc1N0eWxlcykpIHtcbiAgICAgICAgICAvLyBubyBuZWVkIHRvIGNhbmNlbCBhbmltYXRpb25JRCBoZXJlOyBzaG91bGRuJ3QgaGF2ZSBhbnkgaW4gZmxpZ2h0XG4gICAgICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gdGltZXN0YW1wIHx8IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSgpO1xuICAgICAgICB2YXIgdGltZURlbHRhID0gY3VycmVudFRpbWUgLSBfdGhpcy5wcmV2VGltZTtcbiAgICAgICAgX3RoaXMucHJldlRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gX3RoaXMuYWNjdW11bGF0ZWRUaW1lICsgdGltZURlbHRhO1xuICAgICAgICAvLyBtb3JlIHRoYW4gMTAgZnJhbWVzPyBwcm9sbHkgc3dpdGNoZWQgYnJvd3NlciB0YWIuIFJlc3RhcnRcbiAgICAgICAgaWYgKF90aGlzLmFjY3VtdWxhdGVkVGltZSA+IG1zUGVyRnJhbWUgKiAxMCkge1xuICAgICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lID09PSAwKSB7XG4gICAgICAgICAgLy8gbm8gbmVlZCB0byBjYW5jZWwgYW5pbWF0aW9uSUQgaGVyZTsgc2hvdWxkbid0IGhhdmUgYW55IGluIGZsaWdodFxuICAgICAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICAgICAgICBfdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJlbnRGcmFtZUNvbXBsZXRpb24gPSAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC0gTWF0aC5mbG9vcihfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLyBtc1BlckZyYW1lKSAqIG1zUGVyRnJhbWUpIC8gbXNQZXJGcmFtZTtcbiAgICAgICAgdmFyIGZyYW1lc1RvQ2F0Y2hVcCA9IE1hdGguZmxvb3IoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC8gbXNQZXJGcmFtZSk7XG5cbiAgICAgICAgdmFyIF9tZXJnZUFuZFN5bmMyID0gbWVyZ2VBbmRTeW5jKF90aGlzLnByb3BzLndpbGxFbnRlciwgX3RoaXMucHJvcHMud2lsbExlYXZlLCBfdGhpcy5wcm9wcy5kaWRMZWF2ZSwgX3RoaXMuc3RhdGUubWVyZ2VkUHJvcHNTdHlsZXMsIGRlc3RTdHlsZXMsIF90aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMsIF90aGlzLnN0YXRlLmN1cnJlbnRWZWxvY2l0aWVzLCBfdGhpcy5zdGF0ZS5sYXN0SWRlYWxTdHlsZXMsIF90aGlzLnN0YXRlLmxhc3RJZGVhbFZlbG9jaXRpZXMpO1xuXG4gICAgICAgIHZhciBuZXdNZXJnZWRQcm9wc1N0eWxlcyA9IF9tZXJnZUFuZFN5bmMyWzBdO1xuICAgICAgICB2YXIgbmV3Q3VycmVudFN0eWxlcyA9IF9tZXJnZUFuZFN5bmMyWzFdO1xuICAgICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXRpZXMgPSBfbWVyZ2VBbmRTeW5jMlsyXTtcbiAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFN0eWxlcyA9IF9tZXJnZUFuZFN5bmMyWzNdO1xuICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdGllcyA9IF9tZXJnZUFuZFN5bmMyWzRdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TWVyZ2VkUHJvcHNTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgbmV3TWVyZ2VkUHJvcHNTdHlsZSA9IG5ld01lcmdlZFByb3BzU3R5bGVzW2ldLnN0eWxlO1xuICAgICAgICAgIHZhciBuZXdDdXJyZW50U3R5bGUgPSB7fTtcbiAgICAgICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXR5ID0ge307XG4gICAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFN0eWxlID0ge307XG4gICAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFZlbG9jaXR5ID0ge307XG5cbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gbmV3TWVyZ2VkUHJvcHNTdHlsZSkge1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV3TWVyZ2VkUHJvcHNTdHlsZSwga2V5KSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN0eWxlVmFsdWUgPSBuZXdNZXJnZWRQcm9wc1N0eWxlW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0eWxlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIG5ld0N1cnJlbnRTdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICAgICAgbmV3Q3VycmVudFZlbG9jaXR5W2tleV0gPSAwO1xuICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSA9IG5ld0xhc3RJZGVhbFN0eWxlc1tpXVtrZXldO1xuICAgICAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSA9IG5ld0xhc3RJZGVhbFZlbG9jaXRpZXNbaV1ba2V5XTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmcmFtZXNUb0NhdGNoVXA7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBfc3RlcHBlciA9IF9zdGVwcGVyNFsnZGVmYXVsdCddKG1zUGVyRnJhbWUgLyAxMDAwLCBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlLCBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlLCBzdHlsZVZhbHVlLnZhbCwgc3R5bGVWYWx1ZS5zdGlmZm5lc3MsIHN0eWxlVmFsdWUuZGFtcGluZywgc3R5bGVWYWx1ZS5wcmVjaXNpb24pO1xuXG4gICAgICAgICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSA9IF9zdGVwcGVyWzBdO1xuICAgICAgICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUgPSBfc3RlcHBlclsxXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBfc3RlcHBlcjIgPSBfc3RlcHBlcjRbJ2RlZmF1bHQnXShtc1BlckZyYW1lIC8gMTAwMCwgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSwgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSwgc3R5bGVWYWx1ZS52YWwsIHN0eWxlVmFsdWUuc3RpZmZuZXNzLCBzdHlsZVZhbHVlLmRhbXBpbmcsIHN0eWxlVmFsdWUucHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgICB2YXIgbmV4dElkZWFsWCA9IF9zdGVwcGVyMlswXTtcbiAgICAgICAgICAgICAgdmFyIG5leHRJZGVhbFYgPSBfc3RlcHBlcjJbMV07XG5cbiAgICAgICAgICAgICAgbmV3Q3VycmVudFN0eWxlW2tleV0gPSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlICsgKG5leHRJZGVhbFggLSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlKSAqIGN1cnJlbnRGcmFtZUNvbXBsZXRpb247XG4gICAgICAgICAgICAgIG5ld0N1cnJlbnRWZWxvY2l0eVtrZXldID0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSArIChuZXh0SWRlYWxWIC0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSkgKiBjdXJyZW50RnJhbWVDb21wbGV0aW9uO1xuICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVtrZXldID0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZTtcbiAgICAgICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdHlba2V5XSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVzW2ldID0gbmV3TGFzdElkZWFsU3R5bGU7XG4gICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdGllc1tpXSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5O1xuICAgICAgICAgIG5ld0N1cnJlbnRTdHlsZXNbaV0gPSBuZXdDdXJyZW50U3R5bGU7XG4gICAgICAgICAgbmV3Q3VycmVudFZlbG9jaXRpZXNbaV0gPSBuZXdDdXJyZW50VmVsb2NpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgIC8vIHRoZSBhbW91bnQgd2UncmUgbG9vcGVkIG92ZXIgYWJvdmVcbiAgICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC09IGZyYW1lc1RvQ2F0Y2hVcCAqIG1zUGVyRnJhbWU7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1cnJlbnRTdHlsZXM6IG5ld0N1cnJlbnRTdHlsZXMsXG4gICAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IG5ld0N1cnJlbnRWZWxvY2l0aWVzLFxuICAgICAgICAgIGxhc3RJZGVhbFN0eWxlczogbmV3TGFzdElkZWFsU3R5bGVzLFxuICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXM6IG5ld0xhc3RJZGVhbFZlbG9jaXRpZXMsXG4gICAgICAgICAgbWVyZ2VkUHJvcHNTdHlsZXM6IG5ld01lcmdlZFByb3BzU3R5bGVzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLnVucmVhZFByb3BTdHlsZXMgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5kZWZhdWx0U3RhdGUoKTtcbiAgfVxuXG4gIFRyYW5zaXRpb25Nb3Rpb24ucHJvdG90eXBlLmRlZmF1bHRTdGF0ZSA9IGZ1bmN0aW9uIGRlZmF1bHRTdGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGVmYXVsdFN0eWxlcyA9IF9wcm9wcy5kZWZhdWx0U3R5bGVzO1xuICAgIHZhciBzdHlsZXMgPSBfcHJvcHMuc3R5bGVzO1xuICAgIHZhciB3aWxsRW50ZXIgPSBfcHJvcHMud2lsbEVudGVyO1xuICAgIHZhciB3aWxsTGVhdmUgPSBfcHJvcHMud2lsbExlYXZlO1xuICAgIHZhciBkaWRMZWF2ZSA9IF9wcm9wcy5kaWRMZWF2ZTtcblxuICAgIHZhciBkZXN0U3R5bGVzID0gdHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJyA/IHN0eWxlcyhkZWZhdWx0U3R5bGVzKSA6IHN0eWxlcztcblxuICAgIC8vIHRoaXMgaXMgc3BlY2lhbC4gZm9yIHRoZSBmaXJzdCB0aW1lIGFyb3VuZCwgd2UgZG9uJ3QgaGF2ZSBhIGNvbXBhcmlzb25cbiAgICAvLyBiZXR3ZWVuIGxhc3QgKG5vIGxhc3QpIGFuZCBjdXJyZW50IG1lcmdlZCBwcm9wcy4gd2UnbGwgY29tcHV0ZSBsYXN0IHNvOlxuICAgIC8vIHNheSBkZWZhdWx0IGlzIHthLCBifSBhbmQgc3R5bGVzIChkZXN0IHN0eWxlKSBpcyB7YiwgY30sIHdlJ2xsXG4gICAgLy8gZmFicmljYXRlIGxhc3QgYXMge2EsIGJ9XG4gICAgdmFyIG9sZE1lcmdlZFByb3BzU3R5bGVzID0gdW5kZWZpbmVkO1xuICAgIGlmIChkZWZhdWx0U3R5bGVzID09IG51bGwpIHtcbiAgICAgIG9sZE1lcmdlZFByb3BzU3R5bGVzID0gZGVzdFN0eWxlcztcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkTWVyZ2VkUHJvcHNTdHlsZXMgPSBkZWZhdWx0U3R5bGVzLm1hcChmdW5jdGlvbiAoZGVmYXVsdFN0eWxlQ2VsbCkge1xuICAgICAgICAvLyBUT0RPOiBrZXkgc2VhcmNoIGNvZGVcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXN0U3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGRlc3RTdHlsZXNbaV0ua2V5ID09PSBkZWZhdWx0U3R5bGVDZWxsLmtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlc3RTdHlsZXNbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0U3R5bGVDZWxsO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBvbGRDdXJyZW50U3R5bGVzID0gZGVmYXVsdFN0eWxlcyA9PSBudWxsID8gZGVzdFN0eWxlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXShzLnN0eWxlKTtcbiAgICB9KSA6IGRlZmF1bHRTdHlsZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gX3N0cmlwU3R5bGUyWydkZWZhdWx0J10ocy5zdHlsZSk7XG4gICAgfSk7XG4gICAgdmFyIG9sZEN1cnJlbnRWZWxvY2l0aWVzID0gZGVmYXVsdFN0eWxlcyA9PSBudWxsID8gZGVzdFN0eWxlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBfbWFwVG9aZXJvMlsnZGVmYXVsdCddKHMuc3R5bGUpO1xuICAgIH0pIDogZGVmYXVsdFN0eWxlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBfbWFwVG9aZXJvMlsnZGVmYXVsdCddKHMuc3R5bGUpO1xuICAgIH0pO1xuXG4gICAgdmFyIF9tZXJnZUFuZFN5bmMzID0gbWVyZ2VBbmRTeW5jKFxuICAgIC8vIEJlY2F1c2UgdGhpcyBpcyBhbiBvbGQtc3R5bGUgY3JlYXRlUmVhY3RDbGFzcyBjb21wb25lbnQsIEZsb3cgZG9lc24ndFxuICAgIC8vIHVuZGVyc3RhbmQgdGhhdCB0aGUgd2lsbEVudGVyIGFuZCB3aWxsTGVhdmUgcHJvcHMgaGF2ZSBkZWZhdWx0IHZhbHVlc1xuICAgIC8vIGFuZCB3aWxsIGFsd2F5cyBiZSBwcmVzZW50LlxuICAgIHdpbGxFbnRlciwgd2lsbExlYXZlLCBkaWRMZWF2ZSwgb2xkTWVyZ2VkUHJvcHNTdHlsZXMsIGRlc3RTdHlsZXMsIG9sZEN1cnJlbnRTdHlsZXMsIG9sZEN1cnJlbnRWZWxvY2l0aWVzLCBvbGRDdXJyZW50U3R5bGVzLCAvLyBvbGRMYXN0SWRlYWxTdHlsZXMgcmVhbGx5XG4gICAgb2xkQ3VycmVudFZlbG9jaXRpZXMpO1xuXG4gICAgdmFyIG1lcmdlZFByb3BzU3R5bGVzID0gX21lcmdlQW5kU3luYzNbMF07XG4gICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBfbWVyZ2VBbmRTeW5jM1sxXTtcbiAgICB2YXIgY3VycmVudFZlbG9jaXRpZXMgPSBfbWVyZ2VBbmRTeW5jM1syXTtcbiAgICB2YXIgbGFzdElkZWFsU3R5bGVzID0gX21lcmdlQW5kU3luYzNbM107XG4gICAgdmFyIGxhc3RJZGVhbFZlbG9jaXRpZXMgPSBfbWVyZ2VBbmRTeW5jM1s0XTtcbiAgICAvLyBvbGRMYXN0SWRlYWxWZWxvY2l0aWVzIHJlYWxseVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICBjdXJyZW50VmVsb2NpdGllczogY3VycmVudFZlbG9jaXRpZXMsXG4gICAgICBsYXN0SWRlYWxTdHlsZXM6IGxhc3RJZGVhbFN0eWxlcyxcbiAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXM6IGxhc3RJZGVhbFZlbG9jaXRpZXMsXG4gICAgICBtZXJnZWRQcm9wc1N0eWxlczogbWVyZ2VkUHJvcHNTdHlsZXNcbiAgICB9O1xuICB9O1xuXG4gIC8vIGFmdGVyIGNoZWNraW5nIGZvciB1bnJlYWRQcm9wU3R5bGVzICE9IG51bGwsIHdlIG1hbnVhbGx5IGdvIHNldCB0aGVcbiAgLy8gbm9uLWludGVycG9sYXRpbmcgdmFsdWVzICh0aG9zZSB0aGF0IGFyZSBhIG51bWJlciwgd2l0aG91dCBhIHNwcmluZ1xuICAvLyBjb25maWcpXG5cbiAgVHJhbnNpdGlvbk1vdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbk1vdGlvbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICBpZiAodGhpcy51bnJlYWRQcm9wU3R5bGVzKSB7XG4gICAgICAvLyBwcmV2aW91cyBwcm9wcyBoYXZlbid0IGhhZCB0aGUgY2hhbmNlIHRvIGJlIHNldCB5ZXQ7IHNldCB0aGVtIGhlcmVcbiAgICAgIHRoaXMuY2xlYXJVbnJlYWRQcm9wU3R5bGUodGhpcy51bnJlYWRQcm9wU3R5bGVzKTtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzID0gcHJvcHMuc3R5bGVzO1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnVucmVhZFByb3BTdHlsZXMgPSBzdHlsZXMocmVoeWRyYXRlU3R5bGVzKHRoaXMuc3RhdGUubWVyZ2VkUHJvcHNTdHlsZXMsIHRoaXMudW5yZWFkUHJvcFN0eWxlcywgdGhpcy5zdGF0ZS5sYXN0SWRlYWxTdHlsZXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bnJlYWRQcm9wU3R5bGVzID0gc3R5bGVzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbklEID09IG51bGwpIHtcbiAgICAgIHRoaXMucHJldlRpbWUgPSBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10oKTtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uTW90aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5tb3VudGluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uSUQgIT0gbnVsbCkge1xuICAgICAgX3JhZjJbJ2RlZmF1bHQnXS5jYW5jZWwodGhpcy5hbmltYXRpb25JRCk7XG4gICAgICB0aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbk1vdGlvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBoeWRyYXRlZFN0eWxlcyA9IHJlaHlkcmF0ZVN0eWxlcyh0aGlzLnN0YXRlLm1lcmdlZFByb3BzU3R5bGVzLCB0aGlzLnVucmVhZFByb3BTdHlsZXMsIHRoaXMuc3RhdGUuY3VycmVudFN0eWxlcyk7XG4gICAgdmFyIHJlbmRlcmVkQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuKGh5ZHJhdGVkU3R5bGVzKTtcbiAgICByZXR1cm4gcmVuZGVyZWRDaGlsZHJlbiAmJiBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4ub25seShyZW5kZXJlZENoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbk1vdGlvbjtcbn0pKF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUcmFuc2l0aW9uTW90aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8vIGxpc3Qgb2Ygc3R5bGVzLCBlYWNoIGNvbnRhaW5pbmcgaW50ZXJwb2xhdGluZyB2YWx1ZXMuIFBhcnQgb2Ygd2hhdCdzIHBhc3NlZFxuLy8gdG8gY2hpbGRyZW4gZnVuY3Rpb24uIE5vdGljZSB0aGF0IHRoaXMgaXNcbi8vIEFycmF5PEFjdHVhbEludGVycG9sYXRpbmdTdHlsZU9iamVjdD4sIHdpdGhvdXQgdGhlIHdyYXBwZXIgdGhhdCBpcyB7a2V5OiAuLi4sXG4vLyBkYXRhOiAuLi4gc3R5bGU6IEFjdHVhbEludGVycG9sYXRpbmdTdHlsZU9iamVjdH0uIE9ubHkgbWVyZ2VkUHJvcHNTdHlsZXNcbi8vIGNvbnRhaW5zIHRoZSBrZXkgJiBkYXRhIGluZm8gKHNvIHRoYXQgd2Ugb25seSBoYXZlIGEgc2luZ2xlIHNvdXJjZSBvZiB0cnV0aFxuLy8gZm9yIHRoZXNlLCBhbmQgdG8gc2F2ZSBzcGFjZSkuIENoZWNrIHRoZSBjb21tZW50IGZvciBgcmVoeWRyYXRlU3R5bGVzYCB0b1xuLy8gc2VlIGhvdyB3ZSByZWdlbmVyYXRlIHRoZSBlbnRpcmV0eSBvZiB3aGF0J3MgcGFzc2VkIHRvIGNoaWxkcmVuIGZ1bmN0aW9uXG5cbi8vIHRoZSBhcnJheSB0aGF0IGtlZXBzIHRyYWNrIG9mIGN1cnJlbnRseSByZW5kZXJlZCBzdHVmZiEgSW5jbHVkaW5nIHN0dWZmXG4vLyB0aGF0IHlvdSd2ZSB1bm1vdW50ZWQgYnV0IHRoYXQncyBzdGlsbCBhbmltYXRpbmcuIFRoaXMgaXMgd2hlcmUgaXQgbGl2ZXNcblxuLy8gaXQncyBwb3NzaWJsZSB0aGF0IGN1cnJlbnRTdHlsZSdzIHZhbHVlIGlzIHN0YWxlOiBpZiBwcm9wcyBpcyBpbW1lZGlhdGVseVxuLy8gY2hhbmdlZCBmcm9tIDAgdG8gNDAwIHRvIHNwcmluZygwKSBhZ2FpbiwgdGhlIGFzeW5jIGN1cnJlbnRTdHlsZSBpcyBzdGlsbFxuLy8gYXQgMCAoZGlkbid0IGhhdmUgdGltZSB0byB0aWNrIGFuZCBpbnRlcnBvbGF0ZSBldmVuIG9uY2UpLiBJZiB3ZSBuYWl2ZWx5XG4vLyBjb21wYXJlIGN1cnJlbnRTdHlsZSB3aXRoIGRlc3RWYWwgaXQnbGwgYmUgMCA9PT0gMCAobm8gYW5pbWF0aW9uLCBzdG9wKS5cbi8vIEluIHJlYWxpdHkgY3VycmVudFN0eWxlIHNob3VsZCBiZSA0MDBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbW90aW9uL2xpYi9UcmFuc2l0aW9uTW90aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcblxuLy8gY29yZSBrZXlzIG1lcmdpbmcgYWxnb3JpdGhtLiBJZiBwcmV2aW91cyByZW5kZXIncyBrZXlzIGFyZSBbYSwgYl0sIGFuZCB0aGVcbi8vIG5leHQgcmVuZGVyJ3MgW2MsIGIsIGRdLCB3aGF0J3MgdGhlIGZpbmFsIG1lcmdlZCBrZXlzIGFuZCBvcmRlcmluZz9cblxuLy8gLSBjIGFuZCBhIG11c3QgYm90aCBiZSBiZWZvcmUgYlxuLy8gLSBiIGJlZm9yZSBkXG4vLyAtIG9yZGVyaW5nIGJldHdlZW4gYSBhbmQgYyBhbWJpZ3VvdXNcblxuLy8gdGhpcyByZWR1Y2VzIHRvIG1lcmdpbmcgdHdvIHBhcnRpYWxseSBvcmRlcmVkIGxpc3RzIChlLmcuIGxpc3RzIHdoZXJlIG5vdFxuLy8gZXZlcnkgaXRlbSBoYXMgYSBkZWZpbml0ZSBvcmRlcmluZywgbGlrZSBjb21wYXJpbmcgYSBhbmQgYyBhYm92ZSkuIEZvciB0aGVcbi8vIGFtYmlndW91cyBvcmRlcmluZyB3ZSBkZXRlcm1pbmlzdGljYWxseSBjaG9vc2UgdG8gcGxhY2UgdGhlIG5leHQgcmVuZGVyJ3Ncbi8vIGl0ZW0gYWZ0ZXIgdGhlIHByZXZpb3VzJzsgc28gYyBhZnRlciBhXG5cbi8vIHRoaXMgaXMgY2FsbGVkIGEgdG9wb2xvZ2ljYWwgc29ydGluZy4gRXhjZXB0IHRoZSBleGlzdGluZyBhbGdvcml0aG1zIGRvbid0XG4vLyB3b3JrIHdlbGwgd2l0aCBqcyBiYyBvZiB0aGUgYW1vdW50IG9mIGFsbG9jYXRpb24sIGFuZCBpc24ndCBvcHRpbWl6ZWQgZm9yIG91clxuLy8gY3VycmVudCB1c2UtY2FzZSBiYyB0aGUgcnVudGltZSBpcyBsaW5lYXIgaW4gdGVybXMgb2YgZWRnZXMgKHNlZSB3aWtpIGZvclxuLy8gbWVhbmluZyksIHdoaWNoIGlzIGh1Z2Ugd2hlbiB0d28gbGlzdHMgaGF2ZSBtYW55IGNvbW1vbiBlbGVtZW50c1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbWVyZ2VEaWZmO1xuXG5mdW5jdGlvbiBtZXJnZURpZmYocHJldiwgbmV4dCwgb25SZW1vdmUpIHtcbiAgLy8gYm9va2tlZXBpbmcgZm9yIGVhc2llciBhY2Nlc3Mgb2YgYSBrZXkncyBpbmRleCBiZWxvdy4gVGhpcyBpcyAyIGFsbG9jYXRpb25zICtcbiAgLy8gcG90ZW50aWFsbHkgdHJpZ2dlcmluZyBjaHJvbWUgaGFzaCBtYXAgbW9kZSBmb3Igb2JqcyAoc28gaXQgbWlnaHQgYmUgZmFzdGVyXG5cbiAgdmFyIHByZXZLZXlJbmRleCA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXYubGVuZ3RoOyBpKyspIHtcbiAgICBwcmV2S2V5SW5kZXhbcHJldltpXS5rZXldID0gaTtcbiAgfVxuICB2YXIgbmV4dEtleUluZGV4ID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dC5sZW5ndGg7IGkrKykge1xuICAgIG5leHRLZXlJbmRleFtuZXh0W2ldLmtleV0gPSBpO1xuICB9XG5cbiAgLy8gZmlyc3QsIGFuIG92ZXJseSBlbGFib3JhdGUgd2F5IG9mIG1lcmdpbmcgcHJldiBhbmQgbmV4dCwgZWxpbWluYXRpbmdcbiAgLy8gZHVwbGljYXRlcyAoaW4gdGVybXMgb2Yga2V5cykuIElmIHRoZXJlJ3MgZHVwZSwga2VlcCB0aGUgaXRlbSBpbiBuZXh0KS5cbiAgLy8gVGhpcyB3YXkgb2Ygd3JpdGluZyBpdCBzYXZlcyBhbGxvY2F0aW9uc1xuICB2YXIgcmV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dC5sZW5ndGg7IGkrKykge1xuICAgIHJldFtpXSA9IG5leHRbaV07XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmV2Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dEtleUluZGV4LCBwcmV2W2ldLmtleSkpIHtcbiAgICAgIC8vIHRoaXMgaXMgY2FsbGVkIG15IFRNJ3MgYG1lcmdlQW5kU3luY2AsIHdoaWNoIGNhbGxzIHdpbGxMZWF2ZS4gV2UgZG9uJ3RcbiAgICAgIC8vIG1lcmdlIGluIGtleXMgdGhhdCB0aGUgdXNlciBkZXNpcmVzIHRvIGtpbGxcbiAgICAgIHZhciBmaWxsID0gb25SZW1vdmUoaSwgcHJldltpXSk7XG4gICAgICBpZiAoZmlsbCAhPSBudWxsKSB7XG4gICAgICAgIHJldC5wdXNoKGZpbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG5vdyBhbGwgdGhlIGl0ZW1zIGFsbCBwcmVzZW50LiBDb3JlIHNvcnRpbmcgbG9naWMgdG8gaGF2ZSB0aGUgcmlnaHQgb3JkZXJcbiAgcmV0dXJuIHJldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIG5leHRPcmRlckEgPSBuZXh0S2V5SW5kZXhbYS5rZXldO1xuICAgIHZhciBuZXh0T3JkZXJCID0gbmV4dEtleUluZGV4W2Iua2V5XTtcbiAgICB2YXIgcHJldk9yZGVyQSA9IHByZXZLZXlJbmRleFthLmtleV07XG4gICAgdmFyIHByZXZPcmRlckIgPSBwcmV2S2V5SW5kZXhbYi5rZXldO1xuXG4gICAgaWYgKG5leHRPcmRlckEgIT0gbnVsbCAmJiBuZXh0T3JkZXJCICE9IG51bGwpIHtcbiAgICAgIC8vIGJvdGgga2V5cyBpbiBuZXh0XG4gICAgICByZXR1cm4gbmV4dEtleUluZGV4W2Eua2V5XSAtIG5leHRLZXlJbmRleFtiLmtleV07XG4gICAgfSBlbHNlIGlmIChwcmV2T3JkZXJBICE9IG51bGwgJiYgcHJldk9yZGVyQiAhPSBudWxsKSB7XG4gICAgICAvLyBib3RoIGtleXMgaW4gcHJldlxuICAgICAgcmV0dXJuIHByZXZLZXlJbmRleFthLmtleV0gLSBwcmV2S2V5SW5kZXhbYi5rZXldO1xuICAgIH0gZWxzZSBpZiAobmV4dE9yZGVyQSAhPSBudWxsKSB7XG4gICAgICAvLyBrZXkgYSBpbiBuZXh0LCBrZXkgYiBpbiBwcmV2XG5cbiAgICAgIC8vIGhvdyB0byBkZXRlcm1pbmUgdGhlIG9yZGVyIGJldHdlZW4gYSBhbmQgYj8gV2UgZmluZCBhIFwicGl2b3RcIiAodGVybVxuICAgICAgLy8gYWJ1c2UpLCBhIGtleSBwcmVzZW50IGluIGJvdGggcHJldiBhbmQgbmV4dCwgdGhhdCBpcyBzYW5kd2ljaGVkIGJldHdlZW5cbiAgICAgIC8vIGEgYW5kIGIuIEluIHRoZSBjb250ZXh0IG9mIG91ciBhYm92ZSBleGFtcGxlLCBpZiB3ZSdyZSBjb21wYXJpbmcgYSBhbmRcbiAgICAgIC8vIGQsIGIncyAodGhlIG9ubHkpIHBpdm90XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBpdm90ID0gbmV4dFtpXS5rZXk7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByZXZLZXlJbmRleCwgcGl2b3QpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dE9yZGVyQSA8IG5leHRLZXlJbmRleFtwaXZvdF0gJiYgcHJldk9yZGVyQiA+IHByZXZLZXlJbmRleFtwaXZvdF0pIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dE9yZGVyQSA+IG5leHRLZXlJbmRleFtwaXZvdF0gJiYgcHJldk9yZGVyQiA8IHByZXZLZXlJbmRleFtwaXZvdF0pIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gcGx1Z2dhYmxlLiBkZWZhdWx0IHRvOiBuZXh0IGJpZ2dlciB0aGFuIHByZXZcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICAvLyBwcmV2T3JkZXJBLCBuZXh0T3JkZXJCXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGl2b3QgPSBuZXh0W2ldLmtleTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByZXZLZXlJbmRleCwgcGl2b3QpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRPcmRlckIgPCBuZXh0S2V5SW5kZXhbcGl2b3RdICYmIHByZXZPcmRlckEgPiBwcmV2S2V5SW5kZXhbcGl2b3RdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIGlmIChuZXh0T3JkZXJCID4gbmV4dEtleUluZGV4W3Bpdm90XSAmJiBwcmV2T3JkZXJBIDwgcHJldktleUluZGV4W3Bpdm90XSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBsdWdnYWJsZS4gZGVmYXVsdCB0bzogbmV4dCBiaWdnZXIgdGhhbiBwcmV2XG4gICAgcmV0dXJuIC0xO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyB0byBsb29wIHRocm91Z2ggYW5kIGZpbmQgYSBrZXkncyBpbmRleCBlYWNoIHRpbWUpLCBidXQgSSBubyBsb25nZXIgY2FyZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL21lcmdlRGlmZi5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBzcHJpbmc7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9wcmVzZXRzID0gcmVxdWlyZSgnLi9wcmVzZXRzJyk7XG5cbnZhciBfcHJlc2V0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRzKTtcblxudmFyIGRlZmF1bHRDb25maWcgPSBfZXh0ZW5kcyh7fSwgX3ByZXNldHMyWydkZWZhdWx0J10ubm9Xb2JibGUsIHtcbiAgcHJlY2lzaW9uOiAwLjAxXG59KTtcblxuZnVuY3Rpb24gc3ByaW5nKHZhbCwgY29uZmlnKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgZGVmYXVsdENvbmZpZywgY29uZmlnLCB7IHZhbDogdmFsIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbW90aW9uL2xpYi9zcHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XG4gIG5vV29iYmxlOiB7IHN0aWZmbmVzczogMTcwLCBkYW1waW5nOiAyNiB9LCAvLyB0aGUgZGVmYXVsdCwgaWYgbm90aGluZyBwcm92aWRlZFxuICBnZW50bGU6IHsgc3RpZmZuZXNzOiAxMjAsIGRhbXBpbmc6IDE0IH0sXG4gIHdvYmJseTogeyBzdGlmZm5lc3M6IDE4MCwgZGFtcGluZzogMTIgfSxcbiAgc3RpZmY6IHsgc3RpZmZuZXNzOiAyMTAsIGRhbXBpbmc6IDIwIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL3ByZXNldHMuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlb3JkZXJLZXlzO1xuXG52YXIgaGFzV2FybmVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHJlb3JkZXJLZXlzKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAoIWhhc1dhcm5lZCkge1xuICAgICAgaGFzV2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2ByZW9yZGVyS2V5c2AgaGFzIGJlZW4gcmVtb3ZlZCwgc2luY2UgaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZCBmb3IgVHJhbnNpdGlvbk1vdGlvblxcJ3MgbmV3IHN0eWxlcyBhcnJheSBBUEkuJyk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL3Jlb3JkZXJLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCByZWFjdDEzID0gaXNSZWFjdDEzKFJlYWN0KTtcbnZhciBkaWRXYXJuQWJvdXRDaGlsZCA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZERPTU5vZGUoY29tcG9uZW50KXtcbiAgICBpZighcmVhY3QxMyl7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBSZWFjdC5maW5kRE9NTm9kZShjb21wb25lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5BYm91dEZ1bmN0aW9uQ2hpbGQoKSB7XG4gICAgaWYgKGRpZFdhcm5BYm91dENoaWxkIHx8IHJlYWN0MTMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaWRXYXJuQWJvdXRDaGlsZCA9IHRydWU7XG4gICAgY29uc29sZS5lcnJvcignV2l0aCBSZWFjdCAwLjE0IGFuZCBsYXRlciB2ZXJzaW9ucywgeW91IG5vIGxvbmdlciBuZWVkIHRvIHdyYXAgPFNjcm9sbEFyZWE+IGNoaWxkIGludG8gYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG5leHBvcnQgZnVuY3Rpb24gd2FybkFib3V0RWxlbWVudENoaWxkKCkge1xuICAgIGlmIChkaWRXYXJuQWJvdXRDaGlsZCB8fCAhcmVhY3QxMykge1xuICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaWRXYXJuQWJvdXRDaGlsZCA9IHRydWU7XG4gICAgY29uc29sZS5lcnJvciggJ1dpdGggUmVhY3QgMC4xMywgeW91IG5lZWQgdG8gd3JhcCA8U2Nyb2xsQXJlYT4gY2hpbGQgaW50byBhIGZ1bmN0aW9uLicgKTtcbiAgfVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpdmVPclplcm8obnVtYmVyKXtcbiAgICByZXR1cm4gbnVtYmVyIDwgMCA/IDAgOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2RpZnlPYmpWYWx1ZXMgKG9iaiwgbW9kaWZpZXIgPSB4ID0+IHgpe1xuICAgIGxldCBtb2RpZmllZE9iaiA9IHt9O1xuICAgIGZvcihsZXQga2V5IGluIG9iail7XG4gICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSBtb2RpZmllZE9ialtrZXldID0gbW9kaWZpZXIob2JqW2tleV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbW9kaWZpZWRPYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWN0MTMoUmVhY3QpIHtcbiAgICBjb25zdCB7IHZlcnNpb24gfSA9IFJlYWN0O1xuICAgIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcGFydHMgPSB2ZXJzaW9uLnNwbGl0KCcuJyk7XG4gICAgY29uc3QgbWFqb3IgPSBwYXJzZUludChwYXJ0c1swXSwgMTApO1xuICAgIGNvbnN0IG1pbm9yID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKTtcblxuICAgIHJldHVybiBtYWpvciA9PT0gMCAmJiBtaW5vciA9PT0gMTM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMuanMiLCIvLyBMb2FkIGluIGRlcGVuZGVuY2llc1xudmFyIGNvbXB1dGVkU3R5bGUgPSByZXF1aXJlKCdjb21wdXRlZC1zdHlsZScpO1xuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgYGxpbmUtaGVpZ2h0YCBvZiBhIGdpdmVuIG5vZGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgRWxlbWVudCB0byBjYWxjdWxhdGUgbGluZSBoZWlnaHQgb2YuIE11c3QgYmUgaW4gdGhlIERPTS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGBsaW5lLWhlaWdodGAgb2YgdGhlIGVsZW1lbnQgaW4gcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIGxpbmVIZWlnaHQobm9kZSkge1xuICAvLyBHcmFiIHRoZSBsaW5lLWhlaWdodCB2aWEgc3R5bGVcbiAgdmFyIGxuSGVpZ2h0U3RyID0gY29tcHV0ZWRTdHlsZShub2RlLCAnbGluZS1oZWlnaHQnKSxcbiAgICAgIGxuSGVpZ2h0ID0gcGFyc2VGbG9hdChsbkhlaWdodFN0ciwgMTApO1xuXG4gIC8vIElmIHRoZSBsaW5lSGVpZ2h0IGRpZCBub3QgY29udGFpbiBhIHVuaXQgKGkuZS4gaXQgd2FzIG51bWVyaWMpLCBjb252ZXJ0IGl0IHRvIGVtcyAoZS5nLiAnMi4zJyA9PT0gJzIuM2VtJylcbiAgaWYgKGxuSGVpZ2h0U3RyID09PSBsbkhlaWdodCArICcnKSB7XG4gICAgLy8gU2F2ZSB0aGUgb2xkIGxpbmVIZWlnaHQgc3R5bGUgYW5kIHVwZGF0ZSB0aGUgZW0gdW5pdCB0byB0aGUgZWxlbWVudFxuICAgIHZhciBfbG5IZWlnaHRTdHlsZSA9IG5vZGUuc3R5bGUubGluZUhlaWdodDtcbiAgICBub2RlLnN0eWxlLmxpbmVIZWlnaHQgPSBsbkhlaWdodFN0ciArICdlbSc7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGVtIGJhc2VkIGhlaWdodFxuICAgIGxuSGVpZ2h0U3RyID0gY29tcHV0ZWRTdHlsZShub2RlLCAnbGluZS1oZWlnaHQnKTtcbiAgICBsbkhlaWdodCA9IHBhcnNlRmxvYXQobG5IZWlnaHRTdHIsIDEwKTtcblxuICAgIC8vIFJldmVydCB0aGUgbGluZUhlaWdodCBzdHlsZVxuICAgIGlmIChfbG5IZWlnaHRTdHlsZSkge1xuICAgICAgbm9kZS5zdHlsZS5saW5lSGVpZ2h0ID0gX2xuSGVpZ2h0U3R5bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBub2RlLnN0eWxlLmxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYHB0YCwgY29udmVydCBpdCB0byBwaXhlbHMgKDRweCBmb3IgM3B0KVxuICAvLyBERVY6IGBlbWAgdW5pdHMgYXJlIGNvbnZlcnRlZCB0byBgcHRgIGluIElFNlxuICAvLyBDb252ZXJzaW9uIHJhdGlvIGZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2xlbmd0aFxuICBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZigncHQnKSAhPT0gLTEpIHtcbiAgICBsbkhlaWdodCAqPSA0O1xuICAgIGxuSGVpZ2h0IC89IDM7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignbW0nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgbW1gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMjUuNG1tKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICAgIGxuSGVpZ2h0IC89IDI1LjQ7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignY20nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgY21gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMi41NGNtKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICAgIGxuSGVpZ2h0IC89IDIuNTQ7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignaW4nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgaW5gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMWluKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICB9IGVsc2UgaWYgKGxuSGVpZ2h0U3RyLmluZGV4T2YoJ3BjJykgIT09IC0xKSB7XG4gIC8vIE90aGVyd2lzZSwgaWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYHBjYCwgY29udmVydCBpdCB0byBwaXhlbHMgKDEycHQgZm9yIDFwYylcbiAgICBsbkhlaWdodCAqPSAxNjtcbiAgfVxuXG4gIC8vIENvbnRpbnVlIG91ciBjb21wdXRhdGlvblxuICBsbkhlaWdodCA9IE1hdGgucm91bmQobG5IZWlnaHQpO1xuXG4gIC8vIElmIHRoZSBsaW5lLWhlaWdodCBpcyBcIm5vcm1hbFwiLCBjYWxjdWxhdGUgYnkgZm9udC1zaXplXG4gIGlmIChsbkhlaWdodFN0ciA9PT0gJ25vcm1hbCcpIHtcbiAgICAvLyBDcmVhdGUgYSB0ZW1wb3Jhcnkgbm9kZVxuICAgIHZhciBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWUsXG4gICAgICAgIF9ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgX25vZGUuaW5uZXJIVE1MID0gJyZuYnNwOyc7XG5cbiAgICAvLyBTZXQgdGhlIGZvbnQtc2l6ZSBvZiB0aGUgZWxlbWVudFxuICAgIHZhciBmb250U2l6ZVN0ciA9IGNvbXB1dGVkU3R5bGUobm9kZSwgJ2ZvbnQtc2l6ZScpO1xuICAgIF9ub2RlLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVTdHI7XG5cbiAgICAvLyBBcHBlbmQgaXQgdG8gdGhlIGJvZHlcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChfbm9kZSk7XG5cbiAgICAvLyBBc3N1bWUgdGhlIGxpbmUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGlzIHRoZSBoZWlnaHRcbiAgICB2YXIgaGVpZ2h0ID0gX25vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIGxuSGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgLy8gUmVtb3ZlIG91ciBjaGlsZCBmcm9tIHRoZSBET01cbiAgICBib2R5LnJlbW92ZUNoaWxkKF9ub2RlKTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgY2FsY3VsYXRlZCBoZWlnaHRcbiAgcmV0dXJuIGxuSGVpZ2h0O1xufVxuXG4vLyBFeHBvcnQgbGluZUhlaWdodFxubW9kdWxlLmV4cG9ydHMgPSBsaW5lSGVpZ2h0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9saW5lLWhlaWdodC9saWIvbGluZS1oZWlnaHQuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoaXMgY29kZSBoYXMgYmVlbiByZWZhY3RvcmVkIGZvciAxNDAgYnl0ZXNcbi8vIFlvdSBjYW4gc2VlIHRoZSBvcmlnaW5hbCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vdHdvbGZzb24vY29tcHV0ZWRTdHlsZS9ibG9iLzA0Y2QxZGEyZTMwZmE0NTg0NGY5NWY1Y2IxYWM4OThlOWI5ZWYwNTAvbGliL2NvbXB1dGVkU3R5bGUuanNcbnZhciBjb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gKGVsLCBwcm9wLCBnZXRDb21wdXRlZFN0eWxlKSB7XG4gIGdldENvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZTtcblxuICAvLyBJbiBvbmUgZmVsbCBzd29vcFxuICByZXR1cm4gKFxuICAgIC8vIElmIHdlIGhhdmUgZ2V0Q29tcHV0ZWRTdHlsZVxuICAgIGdldENvbXB1dGVkU3R5bGUgP1xuICAgICAgLy8gUXVlcnkgaXRcbiAgICAgIC8vIFRPRE86IEZyb20gQ1NTLVF1ZXJ5IG5vdGVzLCB3ZSBtaWdodCBuZWVkIChub2RlLCBudWxsKSBmb3IgRkZcbiAgICAgIGdldENvbXB1dGVkU3R5bGUoZWwpIDpcblxuICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIGluIElFIGFuZCB1c2UgY3VycmVudFN0eWxlXG4gICAgICBlbC5jdXJyZW50U3R5bGVcbiAgKVtcbiAgICAvLyBTd2l0Y2ggdG8gY2FtZWxDYXNlIGZvciBDU1NPTVxuICAgIC8vIERFVjogR3JhYmJlZCBmcm9tIGpRdWVyeVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvMS45LXN0YWJsZS9zcmMvY3NzLmpzI0wxOTEtTDE5NFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvMS45LXN0YWJsZS9zcmMvY29yZS5qcyNMNTkzLUw1OTdcbiAgICBwcm9wLnJlcGxhY2UoLy0oXFx3KS9naSwgZnVuY3Rpb24gKHdvcmQsIGxldHRlcikge1xuICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgIH0pXG4gIF07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXB1dGVkU3R5bGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29tcHV0ZWQtc3R5bGUvZGlzdC9jb21wdXRlZFN0eWxlLmNvbW1vbmpzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9