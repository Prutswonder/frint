this["FrintReact"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() { module.exports = this["PropTypes"]; }());

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMountableComponent = __webpack_require__(7);

var _getMountableComponent2 = _interopRequireDefault(_getMountableComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  setData: function setData(key, value) {
    this.component.setState(_defineProperty({}, key, value));
  },
  setDataWithCallback: function setDataWithCallback(key, value, cb) {
    this.component.setState(_defineProperty({}, key, value), cb);
  },
  getData: function getData(key) {
    return this.component.state[key];
  },
  getProps: function getProps() {
    return this.component.props;
  },
  getProp: function getProp(key) {
    return this.component.props[key];
  },

  getMountableComponent: _getMountableComponent2.default
};
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _render = __webpack_require__(10);

var _render2 = _interopRequireDefault(_render);

var _streamProps = __webpack_require__(12);

var _streamProps2 = _interopRequireDefault(_streamProps);

var _isObservable = __webpack_require__(14);

var _isObservable2 = _interopRequireDefault(_isObservable);

var _getMountableComponent = __webpack_require__(7);

var _getMountableComponent2 = _interopRequireDefault(_getMountableComponent);

var _observe = __webpack_require__(15);

var _observe2 = _interopRequireDefault(_observe);

var _Region = __webpack_require__(18);

var _Region2 = _interopRequireDefault(_Region);

var _Provider = __webpack_require__(8);

var _Provider2 = _interopRequireDefault(_Provider);

var _Region3 = __webpack_require__(20);

var _Region4 = _interopRequireDefault(_Region3);

var _ReactHandler = __webpack_require__(2);

var _ReactHandler2 = _interopRequireDefault(_ReactHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  render: _render2.default,
  streamProps: _streamProps2.default,
  isObservable: _isObservable2.default,

  getMountableComponent: _getMountableComponent2.default,
  observe: _observe2.default,
  Region: _Region2.default,
  Provider: _Provider2.default,

  RegionService: _Region4.default,

  ReactHandler: _ReactHandler2.default
};
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function() { module.exports = this["_"]; }());

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function() { module.exports = this["Rx"]; }());

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMountableComponent;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Provider = __webpack_require__(8);

var _Provider2 = _interopRequireDefault(_Provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
function getMountableComponent(app) {
  var Component = app.get('component');
  var providerProps = { app: app };
  var ComponentInProvider = function ComponentInProvider(componentProps) {
    return _react2.default.createElement(
      _Provider2.default,
      providerProps,
      _react2.default.createElement(Component, componentProps)
    );
  };

  return function (props) {
    return _react2.default.createElement(ComponentInProvider, props);
  };
}
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies */


var Provider = function (_Component) {
  _inherits(Provider, _Component);

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        app: this.app
      };
    }
  }]);

  function Provider(props, context) {
    _classCallCheck(this, Provider);

    var _this = _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).call(this, props, context));

    _this.app = props.app;
    return _this;
  }

  _createClass(Provider, [{
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return Provider;
}(_react.Component);

Provider.propTypes = {
  app: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.element.isRequired
};
Provider.childContextTypes = {
  app: _propTypes2.default.object.isRequired
};
exports.default = Provider;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = composeHandlers;

var _DefaultHandler = __webpack_require__(16);

var _DefaultHandler2 = _interopRequireDefault(_DefaultHandler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ = __webpack_require__(3);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(app, node) {
  var MountableComponent = _2.default.getMountableComponent(app);

  return _reactDom2.default.render(_react2.default.createElement(MountableComponent, null), node);
} /* eslint-disable import/no-extraneous-dependencies */
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _streamProps = __webpack_require__(13);

var _streamProps2 = _interopRequireDefault(_streamProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _streamProps2.default;
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports.default = streamProps;

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _rxjs = __webpack_require__(5);

var _isObservable = __webpack_require__(6);

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObservable = __webpack_require__(6);

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _isObservable2.default;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = observe;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _composeHandlers = __webpack_require__(9);

var _composeHandlers2 = _interopRequireDefault(_composeHandlers);

var _ObserveHandler = __webpack_require__(17);

var _ObserveHandler2 = _interopRequireDefault(_ObserveHandler);

var _ReactHandler = __webpack_require__(2);

var _ReactHandler2 = _interopRequireDefault(_ReactHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies */


function observe(fn) {
  return function (Component) {
    var WrappedComponent = function (_React$Component) {
      _inherits(WrappedComponent, _React$Component);

      function WrappedComponent() {
        var _ref;

        _classCallCheck(this, WrappedComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).call.apply(_ref, [this].concat(args)));

        _this._handler = (0, _composeHandlers2.default)(_ReactHandler2.default, _ObserveHandler2.default, {
          component: _this,
          getProps$: fn
        });

        _this.state = _this._handler.getInitialData();
        return _this;
      }

      _createClass(WrappedComponent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this._handler.app = this.context.app;
          this._handler.beforeMount();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this._handler.beforeDestroy();
        }
      }, {
        key: 'render',
        value: function render() {
          var computedProps = this.state.computedProps;


          return _react2.default.createElement(Component, _extends({}, computedProps, this.props));
        }
      }]);

      return WrappedComponent;
    }(_react2.default.Component);

    WrappedComponent.displayName = typeof Component.displayName !== 'undefined' ? 'observe(' + Component.displayName + ')' : 'observe';
    WrappedComponent.contextTypes = {
      app: _propTypes2.default.object.isRequired
    };


    return WrappedComponent;
  };
}
module.exports = exports['default'];

/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _composeHandlers = __webpack_require__(9);

var _composeHandlers2 = _interopRequireDefault(_composeHandlers);

var _RegionHandler = __webpack_require__(19);

var _RegionHandler2 = _interopRequireDefault(_RegionHandler);

var _ReactHandler = __webpack_require__(2);

var _ReactHandler2 = _interopRequireDefault(_ReactHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console, no-underscore-dangle, import/no-extraneous-dependencies */


var Region = function (_React$Component) {
  _inherits(Region, _React$Component);

  function Region() {
    var _ref;

    _classCallCheck(this, Region);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Region.__proto__ || Object.getPrototypeOf(Region)).call.apply(_ref, [this].concat(args)));

    _this._handler = (0, _composeHandlers2.default)(_ReactHandler2.default, _RegionHandler2.default, {
      component: _this
    });

    _this.state = _this._handler.getInitialData();
    return _this;
  }

  _createClass(Region, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this._handler.shouldUpdate(nextProps, nextState);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._handler.app = this.context.app;
      this._handler.beforeMount();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this._handler.afterUpdate(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._handler.beforeDestroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var listForRendering = this.state.listForRendering;


      if (listForRendering.length === 0) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        listForRendering.map(function (item) {
          var Component = item.Component,
              name = item.name;


          return _react2.default.createElement(Component, { key: 'app-' + name });
        })
      );
    }
  }]);

  return Region;
}(_react2.default.Component);

Region.propTypes = {
  name: _propTypes2.default.string.isRequired,
  uniqueKey: _propTypes2.default.string,
  data: _propTypes2.default.any
};
Region.contextTypes = {
  app: _propTypes2.default.object
};
exports.default = Region;
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RegionService = __webpack_require__(21);

var _RegionService2 = _interopRequireDefault(_RegionService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RegionService2.default;
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _rxjs = __webpack_require__(5);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

/***/ })
/******/ ]);