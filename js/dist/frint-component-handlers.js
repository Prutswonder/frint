this["FrintComponentHandlers"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ObserveHandler = __webpack_require__(1);

var _ObserveHandler2 = _interopRequireDefault(_ObserveHandler);

var _RegionHandler = __webpack_require__(2);

var _RegionHandler2 = _interopRequireDefault(_RegionHandler);

var _RegionService = __webpack_require__(4);

var _RegionService2 = _interopRequireDefault(_RegionService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  ObserveHandler: _ObserveHandler2.default,
  RegionHandler: _RegionHandler2.default,
  RegionService: _RegionService2.default
};
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  getProps$: null,
  getInitialData: function getInitialData() {
    return {
      computedProps: {}
    };
  },
  beforeMount: function beforeMount() {
    var _this = this;

    if (typeof this.getProps$ !== 'function') {
      return;
    }

    this._subscription = this.getProps$(this.app).subscribe(function (props) {
      _this.setData('computedProps', props);
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(3);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getInitialData: function getInitialData() {
    return {
      list: [], // array of apps ==> { name, instance }
      listForRendering: [] // array of {name, Component} objects
    };
  },
  sendProps: function sendProps(appInstance, props) {
    var regionService = appInstance.get(appInstance.options.providerNames.region);

    if (!regionService) {
      return;
    }

    regionService.emit(props);
  },
  beforeMount: function beforeMount() {
    var _this = this;

    var rootApp = !this.app ? window.app // @TODO: can we avoid globals?
    : this.app.getRootApp();

    if (!rootApp) {
      return;
    }

    this.rootApp = rootApp;
    var apps$ = rootApp.getApps$(this.getProp('name'), this.getProp('uniqueKey'));

    this._subscription = apps$.subscribe({
      next: function next(list) {
        _this.setDataWithCallback('list', list, function () {
          _this.getData('list').forEach(function (item) {
            var appName = item.name,
                appWeight = item.weight,
                multi = item.multi;

            var isPresent = _this.getData('listForRendering').some(function (w) {
              return w.name === appName;
            });

            // @TODO: take care of removal in streamed list too?

            if (isPresent) {
              return;
            }

            var regionArgs = _this.getProp('uniqueKey') ? [_this.getProp('name'), _this.getProp('uniqueKey')] : [_this.getProp('name')];

            if (_this.getProp('uniqueKey') && !rootApp.hasAppInstance.apply(rootApp, [appName].concat(regionArgs))) {
              rootApp.instantiateApp.apply(rootApp, [appName].concat(regionArgs));
            }

            var appInstance = rootApp.getAppInstance.apply(rootApp, [appName].concat(regionArgs));
            if (appInstance) {
              _this.sendProps(appInstance, {
                name: _this.getProp('name'),
                uniqueKey: _this.getProp('uniqueKey'),
                data: _this.getProp('data')
              });
            }

            _this.setData('listForRendering', _this.getData('listForRendering').concat({
              name: appName,
              weight: appWeight,
              instance: appInstance,
              multi: multi,
              Component: _this.getMountableComponent(appInstance)
            }).sort(function (a, b) {
              return a.weight - b.weight;
            }));
          });
        });
      },
      error: function error(err) {
        console.warn('Subscription error for <Region name="' + _this.name + '" />:', err);
      }
    });
  },
  shouldUpdate: function shouldUpdate(nextProps, nextData) {
    var shouldUpdate = !_lodash2.default.isEqual(this.getProps(), nextProps);

    if (!shouldUpdate) {
      var listForRendering = nextData.listForRendering;

      shouldUpdate = shouldUpdate || this.getData('listForRendering').length !== listForRendering.length;
      shouldUpdate = shouldUpdate || _lodash2.default.zipWith(this.getData('listForRendering'), listForRendering, function (a, b) {
        return a.name === b.name;
      }).some(function (value) {
        return !value;
      });
    }

    return shouldUpdate;
  },
  afterUpdate: function afterUpdate() {
    var _this2 = this;

    var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var _ref = newProps || {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? this.getProp('name') : _ref$name,
        _ref$uniqueKey = _ref.uniqueKey,
        uniqueKey = _ref$uniqueKey === undefined ? this.getProp('uniqueKey') : _ref$uniqueKey,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? this.getProp('data') : _ref$data;

    this.getData('listForRendering').filter(function (item) {
      return item.instance;
    }).forEach(function (item) {
      return _this2.sendProps(item.instance, {
        name: name,
        uniqueKey: uniqueKey,
        data: data
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    var _this3 = this;

    if (this._subscription) {
      this._subscription.unsubscribe();
    }

    if (this.rootApp) {
      this.getData('listForRendering').filter(function (item) {
        return item.multi;
      }).forEach(function (item) {
        _this3.rootApp.destroyApp(item.name, _this3.getProp('name'), _this3.getProp('uniqueKey'));
      });
    }
  }
}; /* global window */
/* eslint-disable no-console */

module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function() { module.exports = this["_"]; }());

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rxjs = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegionService = function () {
  function RegionService() {
    _classCallCheck(this, RegionService);

    this.props$ = new _rxjs.BehaviorSubject({});
  }

  _createClass(RegionService, [{
    key: 'emit',
    value: function emit() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.props$.next(props);
    }

    // @TODO: support synchronous versions
    // getName() {}
    // getKey() {}

  }, {
    key: 'getProps$',
    value: function getProps$() {
      return this.props$;
    }
  }, {
    key: 'getData$',
    value: function getData$() {
      return this.props$.map(function (props) {
        return props.data;
      });
    }
  }]);

  return RegionService;
}();

exports.default = RegionService;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function() { module.exports = this["Rx"]; }());

/***/ })
/******/ ]);