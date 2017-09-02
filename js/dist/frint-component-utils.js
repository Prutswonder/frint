this["FrintComponentUtils"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-unused-vars */
/* istanbul ignore next */
exports.default = {
  // options
  app: null,
  component: null,

  // lifecycle: creation
  initialize: function initialize() {},
  beforeDestroy: function beforeDestroy() {},


  // data
  getInitialData: function getInitialData() {
    return {};
  },
  setData: function setData(key, value) {},
  setDataWithCallback: function setDataWithCallback(key, value, cb) {
    this.setData(key, value);
    cb();
  },
  getData: function getData(key) {},


  // props
  getProp: function getProp(key) {},
  getProps: function getProps() {},


  // lifecycle: mounting
  beforeMount: function beforeMount() {},
  afterMount: function afterMount() {},


  // lifecycle: re-rendering
  beforeUpdate: function beforeUpdate() {},
  shouldUpdate: function shouldUpdate(nextProps, nextData) {},
  afterUpdate: function afterUpdate() {},


  // other
  getMountableComponent: function getMountableComponent(app) {
    return app.get('component');
  }
};
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObservable;
function isObservable(obj) {
  if (obj && typeof obj.subscribe === 'function') {
    return true;
  }

  return false;
}
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _composeHandlers = __webpack_require__(3);

var _composeHandlers2 = _interopRequireDefault(_composeHandlers);

var _DefaultHandler = __webpack_require__(0);

var _DefaultHandler2 = _interopRequireDefault(_DefaultHandler);

var _isObservable = __webpack_require__(1);

var _isObservable2 = _interopRequireDefault(_isObservable);

var _streamProps = __webpack_require__(4);

var _streamProps2 = _interopRequireDefault(_streamProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  composeHandlers: _composeHandlers2.default,
  DefaultHandler: _DefaultHandler2.default,
  isObservable: _isObservable2.default,
  streamProps: _streamProps2.default
};
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = composeHandlers;

var _DefaultHandler = __webpack_require__(0);

var _DefaultHandler2 = _interopRequireDefault(_DefaultHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Handler() {
  var _this = this;

  for (var _len = arguments.length, handlers = Array(_len), _key = 0; _key < _len; _key++) {
    handlers[_key] = arguments[_key];
  }

  [_DefaultHandler2.default].concat(handlers).forEach(function (options) {
    Object.keys(options).forEach(function (k) {
      _this[k] = options[k];

      if (typeof options[k] === 'function') {
        _this[k] = _this[k].bind(_this);
      }
    });
  });
}

function composeHandlers() {
  for (var _len2 = arguments.length, handlers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    handlers[_key2] = arguments[_key2];
  }

  return new (Function.prototype.bind.apply(Handler, [null].concat(handlers)))();
}
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = streamProps;

var _lodash = __webpack_require__(5);

var _lodash2 = _interopRequireDefault(_lodash);

var _rxjs = __webpack_require__(6);

var _isObservable = __webpack_require__(1);

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Streamer = function () {
  function Streamer() {
    var defaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Streamer);

    this._observables = [_rxjs.Observable.of(defaults)];
  }

  _createClass(Streamer, [{
    key: '_push',
    value: function _push(observable) {
      this._observables.push(observable);
    }
  }, {
    key: 'set',
    value: function set(value) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // (key, value)
      if (typeof value === 'string') {
        return this.setKey(value, args[0]);
      }

      // (plainObject)
      if (_lodash2.default.isPlainObject(value)) {
        return this.setPlainObject(value);
      }

      // (observable$, ...mapperFns)
      if ((0, _isObservable2.default)(value)) {
        return this.setObservable.apply(this, [value].concat(args));
      }

      return this;
    }
  }, {
    key: 'setKey',
    value: function setKey(key, value) {
      this._push(_rxjs.Observable.of(_defineProperty({}, key, value)));

      return this;
    }
  }, {
    key: 'setPlainObject',
    value: function setPlainObject(object) {
      this._push(_rxjs.Observable.of(object));

      return this;
    }
  }, {
    key: 'setObservable',
    value: function setObservable(object$) {
      var mappedObject$ = object$;

      for (var _len2 = arguments.length, mappers = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        mappers[_key2 - 1] = arguments[_key2];
      }

      mappers.forEach(function (mapperFn) {
        mappedObject$ = mappedObject$.concatMap(function (object) {
          var result = mapperFn(object);

          if ((0, _isObservable2.default)(result)) {
            return result;
          }

          return _rxjs.Observable.of(result);
        });
      });

      this._push(mappedObject$);

      return this;
    }
  }, {
    key: 'setDispatch',
    value: function setDispatch(actions, store) {
      var object = {};

      Object.keys(actions).forEach(function (propKey) {
        var actionFn = actions[propKey];

        object[propKey] = function () {
          return store.dispatch(actionFn.apply(undefined, arguments));
        };
      });

      this._push(_rxjs.Observable.of(object));

      return this;
    }
  }, {
    key: 'get$',
    value: function get$() {
      return _rxjs.Observable.merge.apply(_rxjs.Observable, _toConsumableArray(this._observables)).scan(function (props, emitted) {
        return _extends({}, props, emitted);
      });
    }
  }]);

  return Streamer;
}();

function streamProps() {
  var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new Streamer(defaultProps);
}
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function() { module.exports = this["_"]; }());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

(function() { module.exports = this["Rx"]; }());

/***/ })
/******/ ]);