"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerTwitch"],{

/***/ "./node_modules/react-player/lazy/players/Twitch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lazy/players/Twitch.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./node_modules/react-player/lazy/utils.js\");\n\nvar _patterns = __webpack_require__(/*! ../patterns */ \"./node_modules/react-player/lazy/patterns.js\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { \"default\": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj[\"default\"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar SDK_URL = 'https://player.twitch.tv/js/embed/v1.js';\nvar SDK_GLOBAL = 'Twitch';\nvar PLAYER_ID_PREFIX = 'twitch-player-';\n\nvar Twitch = /*#__PURE__*/function (_Component) {\n  _inherits(Twitch, _Component);\n\n  var _super = _createSuper(Twitch);\n\n  function Twitch() {\n    var _this;\n\n    _classCallCheck(this, Twitch);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"callPlayer\", _utils.callPlayer);\n\n    _defineProperty(_assertThisInitialized(_this), \"playerID\", _this.props.config.playerId || \"\".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));\n\n    _defineProperty(_assertThisInitialized(_this), \"mute\", function () {\n      _this.callPlayer('setMuted', true);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"unmute\", function () {\n      _this.callPlayer('setMuted', false);\n    });\n\n    return _this;\n  }\n\n  _createClass(Twitch, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.onMount && this.props.onMount(this);\n    }\n  }, {\n    key: \"load\",\n    value: function load(url, isReady) {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          playsinline = _this$props.playsinline,\n          onError = _this$props.onError,\n          config = _this$props.config,\n          controls = _this$props.controls;\n\n      var isChannel = _patterns.MATCH_URL_TWITCH_CHANNEL.test(url);\n\n      var id = isChannel ? url.match(_patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(_patterns.MATCH_URL_TWITCH_VIDEO)[1];\n\n      if (isReady) {\n        if (isChannel) {\n          this.player.setChannel(id);\n        } else {\n          this.player.setVideo('v' + id);\n        }\n\n        return;\n      }\n\n      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Twitch) {\n        _this2.player = new Twitch.Player(_this2.playerID, _objectSpread({\n          video: isChannel ? '' : id,\n          channel: isChannel ? id : '',\n          height: '100%',\n          width: '100%',\n          playsinline: playsinline,\n          autoplay: _this2.props.playing,\n          muted: _this2.props.muted,\n          // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859\n          controls: isChannel ? true : controls,\n          time: (0, _utils.parseStartTime)(url)\n        }, config.options));\n        var _Twitch$Player = Twitch.Player,\n            READY = _Twitch$Player.READY,\n            PLAYING = _Twitch$Player.PLAYING,\n            PAUSE = _Twitch$Player.PAUSE,\n            ENDED = _Twitch$Player.ENDED,\n            ONLINE = _Twitch$Player.ONLINE,\n            OFFLINE = _Twitch$Player.OFFLINE,\n            SEEK = _Twitch$Player.SEEK;\n\n        _this2.player.addEventListener(READY, _this2.props.onReady);\n\n        _this2.player.addEventListener(PLAYING, _this2.props.onPlay);\n\n        _this2.player.addEventListener(PAUSE, _this2.props.onPause);\n\n        _this2.player.addEventListener(ENDED, _this2.props.onEnded);\n\n        _this2.player.addEventListener(SEEK, _this2.props.onSeek); // Prevent weird isLoading behaviour when streams are offline\n\n\n        _this2.player.addEventListener(ONLINE, _this2.props.onLoaded);\n\n        _this2.player.addEventListener(OFFLINE, _this2.props.onLoaded);\n      }, onError);\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      this.callPlayer('play');\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.callPlayer('pause');\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.callPlayer('pause');\n    }\n  }, {\n    key: \"seekTo\",\n    value: function seekTo(seconds) {\n      this.callPlayer('seek', seconds);\n    }\n  }, {\n    key: \"setVolume\",\n    value: function setVolume(fraction) {\n      this.callPlayer('setVolume', fraction);\n    }\n  }, {\n    key: \"getDuration\",\n    value: function getDuration() {\n      return this.callPlayer('getDuration');\n    }\n  }, {\n    key: \"getCurrentTime\",\n    value: function getCurrentTime() {\n      return this.callPlayer('getCurrentTime');\n    }\n  }, {\n    key: \"getSecondsLoaded\",\n    value: function getSecondsLoaded() {\n      return null;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var style = {\n        width: '100%',\n        height: '100%'\n      };\n      return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n        style: style,\n        id: this.playerID\n      });\n    }\n  }]);\n\n  return Twitch;\n}(_react.Component);\n\nexports[\"default\"] = Twitch;\n\n_defineProperty(Twitch, \"displayName\", 'Twitch');\n\n_defineProperty(Twitch, \"canPlay\", _patterns.canPlay.twitch);\n\n_defineProperty(Twitch, \"loopOnEnded\", true);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xhenkvcGxheWVycy9Ud2l0Y2guanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsd0JBQXdCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXBXLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFrQjs7QUFFbEIscUNBQXFDLG1CQUFPLENBQUMsNENBQU87O0FBRXBELGFBQWEsbUJBQU8sQ0FBQywyREFBVTs7QUFFL0IsZ0JBQWdCLG1CQUFPLENBQUMsaUVBQWE7O0FBRXJDLHNDQUFzQyxnREFBZ0QsMkJBQTJCLGlFQUFpRSxpQkFBaUI7O0FBRW5NLHdDQUF3Qyw2QkFBNkIsY0FBYyw4RUFBOEUsU0FBUyxvQkFBb0Isd0NBQXdDLCtCQUErQix5QkFBeUIsaUJBQWlCLHNGQUFzRix1QkFBdUIsc0RBQXNELHFGQUFxRixzQ0FBc0MsNENBQTRDLE9BQU8sOEJBQThCLHlCQUF5QixhQUFhLDBCQUEwQjs7QUFFOXRCLDJDQUEyQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw4REFBOEQsaUVBQWlFLEdBQUcsa0NBQWtDOztBQUV2VSxpQ0FBaUMsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLHVEQUF1RCw0Q0FBNEMsS0FBSyw2Q0FBNkMsNkVBQTZFLE9BQU8saURBQWlELG1GQUFtRixPQUFPOztBQUV0Z0Isa0RBQWtELDBDQUEwQzs7QUFFNUYsNENBQTRDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQ7O0FBRS9QLDhEQUE4RCxzRUFBc0UsOERBQThEOztBQUVsTSwyQ0FBMkMsK0RBQStELDZFQUE2RSx5RUFBeUUsZUFBZSx1REFBdUQsR0FBRzs7QUFFelUsaUNBQWlDLDRFQUE0RSxpQkFBaUIsYUFBYTs7QUFFM0ksaUNBQWlDLDZEQUE2RCx5Q0FBeUMsOENBQThDLGlDQUFpQyxtREFBbUQsMkRBQTJELE9BQU8seUNBQXlDOztBQUVwWCxrREFBa0QsMEVBQTBFLGVBQWU7O0FBRTNJLHdDQUF3Qyx1QkFBdUIseUZBQXlGOztBQUV4Six1Q0FBdUMsd0VBQXdFLDBDQUEwQyw4Q0FBOEMsTUFBTSx1RUFBdUUsSUFBSSxlQUFlLFlBQVk7O0FBRW5ULDhCQUE4QixnR0FBZ0csbURBQW1EOztBQUVqTCw0Q0FBNEMsa0JBQWtCLGtDQUFrQyxvRUFBb0UsS0FBSyxPQUFPLG9CQUFvQjs7QUFFcE07QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3RUFBd0UsYUFBYTtBQUNyRjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG1FQUFtRTs7O0FBR25FOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELGtCQUFrQjs7QUFFbEI7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9sYXp5L3BsYXllcnMvVHdpdGNoLmpzPzU1MWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcblxudmFyIF9wYXR0ZXJucyA9IHJlcXVpcmUoXCIuLi9wYXR0ZXJuc1wiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBTREtfVVJMID0gJ2h0dHBzOi8vcGxheWVyLnR3aXRjaC50di9qcy9lbWJlZC92MS5qcyc7XG52YXIgU0RLX0dMT0JBTCA9ICdUd2l0Y2gnO1xudmFyIFBMQVlFUl9JRF9QUkVGSVggPSAndHdpdGNoLXBsYXllci0nO1xuXG52YXIgVHdpdGNoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUd2l0Y2gsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoVHdpdGNoKTtcblxuICBmdW5jdGlvbiBUd2l0Y2goKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3aXRjaCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNhbGxQbGF5ZXJcIiwgX3V0aWxzLmNhbGxQbGF5ZXIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInBsYXllcklEXCIsIF90aGlzLnByb3BzLmNvbmZpZy5wbGF5ZXJJZCB8fCBcIlwiLmNvbmNhdChQTEFZRVJfSURfUFJFRklYKS5jb25jYXQoKDAsIF91dGlscy5yYW5kb21TdHJpbmcpKCkpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJtdXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNhbGxQbGF5ZXIoJ3NldE11dGVkJywgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidW5tdXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNhbGxQbGF5ZXIoJ3NldE11dGVkJywgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFR3aXRjaCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTW91bnQgJiYgdGhpcy5wcm9wcy5vbk1vdW50KHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQodXJsLCBpc1JlYWR5KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwbGF5c2lubGluZSA9IF90aGlzJHByb3BzLnBsYXlzaW5saW5lLFxuICAgICAgICAgIG9uRXJyb3IgPSBfdGhpcyRwcm9wcy5vbkVycm9yLFxuICAgICAgICAgIGNvbmZpZyA9IF90aGlzJHByb3BzLmNvbmZpZyxcbiAgICAgICAgICBjb250cm9scyA9IF90aGlzJHByb3BzLmNvbnRyb2xzO1xuXG4gICAgICB2YXIgaXNDaGFubmVsID0gX3BhdHRlcm5zLk1BVENIX1VSTF9UV0lUQ0hfQ0hBTk5FTC50ZXN0KHVybCk7XG5cbiAgICAgIHZhciBpZCA9IGlzQ2hhbm5lbCA/IHVybC5tYXRjaChfcGF0dGVybnMuTUFUQ0hfVVJMX1RXSVRDSF9DSEFOTkVMKVsxXSA6IHVybC5tYXRjaChfcGF0dGVybnMuTUFUQ0hfVVJMX1RXSVRDSF9WSURFTylbMV07XG5cbiAgICAgIGlmIChpc1JlYWR5KSB7XG4gICAgICAgIGlmIChpc0NoYW5uZWwpIHtcbiAgICAgICAgICB0aGlzLnBsYXllci5zZXRDaGFubmVsKGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBsYXllci5zZXRWaWRlbygndicgKyBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgICgwLCBfdXRpbHMuZ2V0U0RLKShTREtfVVJMLCBTREtfR0xPQkFMKS50aGVuKGZ1bmN0aW9uIChUd2l0Y2gpIHtcbiAgICAgICAgX3RoaXMyLnBsYXllciA9IG5ldyBUd2l0Y2guUGxheWVyKF90aGlzMi5wbGF5ZXJJRCwgX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgdmlkZW86IGlzQ2hhbm5lbCA/ICcnIDogaWQsXG4gICAgICAgICAgY2hhbm5lbDogaXNDaGFubmVsID8gaWQgOiAnJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIHBsYXlzaW5saW5lOiBwbGF5c2lubGluZSxcbiAgICAgICAgICBhdXRvcGxheTogX3RoaXMyLnByb3BzLnBsYXlpbmcsXG4gICAgICAgICAgbXV0ZWQ6IF90aGlzMi5wcm9wcy5tdXRlZCxcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vQ29va1BldGUvcmVhY3QtcGxheWVyL2lzc3Vlcy83MzMjaXNzdWVjb21tZW50LTU0OTA4NTg1OVxuICAgICAgICAgIGNvbnRyb2xzOiBpc0NoYW5uZWwgPyB0cnVlIDogY29udHJvbHMsXG4gICAgICAgICAgdGltZTogKDAsIF91dGlscy5wYXJzZVN0YXJ0VGltZSkodXJsKVxuICAgICAgICB9LCBjb25maWcub3B0aW9ucykpO1xuICAgICAgICB2YXIgX1R3aXRjaCRQbGF5ZXIgPSBUd2l0Y2guUGxheWVyLFxuICAgICAgICAgICAgUkVBRFkgPSBfVHdpdGNoJFBsYXllci5SRUFEWSxcbiAgICAgICAgICAgIFBMQVlJTkcgPSBfVHdpdGNoJFBsYXllci5QTEFZSU5HLFxuICAgICAgICAgICAgUEFVU0UgPSBfVHdpdGNoJFBsYXllci5QQVVTRSxcbiAgICAgICAgICAgIEVOREVEID0gX1R3aXRjaCRQbGF5ZXIuRU5ERUQsXG4gICAgICAgICAgICBPTkxJTkUgPSBfVHdpdGNoJFBsYXllci5PTkxJTkUsXG4gICAgICAgICAgICBPRkZMSU5FID0gX1R3aXRjaCRQbGF5ZXIuT0ZGTElORSxcbiAgICAgICAgICAgIFNFRUsgPSBfVHdpdGNoJFBsYXllci5TRUVLO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihSRUFEWSwgX3RoaXMyLnByb3BzLm9uUmVhZHkpO1xuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihQTEFZSU5HLCBfdGhpczIucHJvcHMub25QbGF5KTtcblxuICAgICAgICBfdGhpczIucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoUEFVU0UsIF90aGlzMi5wcm9wcy5vblBhdXNlKTtcblxuICAgICAgICBfdGhpczIucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoRU5ERUQsIF90aGlzMi5wcm9wcy5vbkVuZGVkKTtcblxuICAgICAgICBfdGhpczIucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoU0VFSywgX3RoaXMyLnByb3BzLm9uU2Vlayk7IC8vIFByZXZlbnQgd2VpcmQgaXNMb2FkaW5nIGJlaGF2aW91ciB3aGVuIHN0cmVhbXMgYXJlIG9mZmxpbmVcblxuXG4gICAgICAgIF90aGlzMi5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihPTkxJTkUsIF90aGlzMi5wcm9wcy5vbkxvYWRlZCk7XG5cbiAgICAgICAgX3RoaXMyLnBsYXllci5hZGRFdmVudExpc3RlbmVyKE9GRkxJTkUsIF90aGlzMi5wcm9wcy5vbkxvYWRlZCk7XG4gICAgICB9LCBvbkVycm9yKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdwbGF5Jyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhdXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdwYXVzZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3BhdXNlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNlZWtUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWVrVG8oc2Vjb25kcykge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdzZWVrJywgc2Vjb25kcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZvbHVtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2V0Vm9sdW1lJywgZnJhY3Rpb24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXREdXJhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoJ2dldER1cmF0aW9uJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEN1cnJlbnRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbFBsYXllcignZ2V0Q3VycmVudFRpbWUnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2Vjb25kc0xvYWRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGlkOiB0aGlzLnBsYXllcklEXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHdpdGNoO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUd2l0Y2g7XG5cbl9kZWZpbmVQcm9wZXJ0eShUd2l0Y2gsIFwiZGlzcGxheU5hbWVcIiwgJ1R3aXRjaCcpO1xuXG5fZGVmaW5lUHJvcGVydHkoVHdpdGNoLCBcImNhblBsYXlcIiwgX3BhdHRlcm5zLmNhblBsYXkudHdpdGNoKTtcblxuX2RlZmluZVByb3BlcnR5KFR3aXRjaCwgXCJsb29wT25FbmRlZFwiLCB0cnVlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-player/lazy/players/Twitch.js\n");

/***/ })

}]);