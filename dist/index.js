'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _events = require('events');

var _arrayUniq = require('array-uniq');

var _arrayUniq2 = _interopRequireDefault(_arrayUniq);

var _arrayDiffer = require('array-differ');

var _arrayDiffer2 = _interopRequireDefault(_arrayDiffer);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var Pageres = (function () {
	/**
  * Initialize a new Pageres
  *
  * @param {Object} options
  * @api public
  */

	function Pageres(options) {
		_classCallCheck(this, Pageres);

		this.options = (0, _objectAssign2['default'])({}, options);
		this.options.filename = this.options.filename || '<%= url %>-<%= size %><%= crop %>';
		this.options.format = this.options.format || 'png';
		this.options.script = this.options.script || false;

		this.stats = {};
		this.items = [];
		this.sizes = [];
		this.urls = [];
	}

	/**
  * Get or set page to capture
  *
  * @param {String} url
  * @param {Array} sizes
  * @param {Object} options
  * @api public
  */

	_createClass(Pageres, [{
		key: 'src',
		value: function src(url, sizes, options) {
			if (!arguments.length) {
				return this._src;
			}

			this._src = this._src || [];
			this._src.push({ url: url, sizes: sizes, options: options });

			return this;
		}

		/**
   * Get or set the destination directory
   *
   * @param {String} dir
   * @api public
   */

	}, {
		key: 'dest',
		value: function dest(dir) {
			if (!arguments.length) {
				return this._dest;
			}

			this._dest = dir;
			return this;
		}

		/**
   * Run pageres
   *
   * @api public
   */

	}, {
		key: 'run',
		value: function run() {
			return _regeneratorRuntime.async(function run$(context$2$0) {
				var _this = this;

				while (1) switch (context$2$0.prev = context$2$0.next) {
					case 0:
						context$2$0.next = 2;
						return _regeneratorRuntime.awrap(_Promise.all(this.src().map(function (src) {
							var options = (0, _objectAssign2['default'])({}, _this.options, src.options);
							var sizes = (0, _arrayUniq2['default'])(src.sizes.filter(/./.test, /^\d{3,4}x\d{3,4}$/i));
							var keywords = (0, _arrayDiffer2['default'])(src.sizes, sizes);

							if (!src.url) {
								throw new Error('URL required');
							}

							_this.urls.push(src.url);

							if (!sizes.length && keywords.indexOf('w3counter') !== -1) {
								return _this.resolution(src.url, options);
							}

							if (keywords.length) {
								return _this.viewport({ url: src.url, sizes: sizes, keywords: keywords }, options);
							}

							var _iteratorNormalCompletion = true;
							var _didIteratorError = false;
							var _iteratorError = undefined;

							try {
								for (var _iterator = _getIterator(sizes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									var size = _step.value;

									_this.sizes.push(size);
									_this.items.push(_this.create(src.url, size, options));
								}
							} catch (err) {
								_didIteratorError = true;
								_iteratorError = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion && _iterator['return']) {
										_iterator['return']();
									}
								} finally {
									if (_didIteratorError) {
										throw _iteratorError;
									}
								}
							}
						})));

					case 2:

						this.stats.urls = (0, _arrayUniq2['default'])(this.urls).length;
						this.stats.sizes = (0, _arrayUniq2['default'])(this.sizes).length;
						this.stats.screenshots = this.items.length;

						if (this.dest()) {
							context$2$0.next = 7;
							break;
						}

						return context$2$0.abrupt('return', this.items);

					case 7:
						context$2$0.next = 9;
						return _regeneratorRuntime.awrap(this.save(this.items));

					case 9:
						return context$2$0.abrupt('return', this.items);

					case 10:
					case 'end':
						return context$2$0.stop();
				}
			}, null, this);
		}
	}]);

	return Pageres;
})();

exports['default'] = Pageres;

(0, _objectAssign2['default'])(Pageres.prototype, _events.EventEmitter.prototype);
(0, _objectAssign2['default'])(Pageres.prototype, require('./util'));
module.exports = exports['default'];