'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.resolution = resolution;
exports.viewport = viewport;
exports.save = save;
exports.create = create;
exports.successMessage = successMessage;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _easydate = require('easydate');

var _easydate2 = _interopRequireDefault(_easydate);

var _fsWriteStreamAtomic = require('fs-write-stream-atomic');

var _fsWriteStreamAtomic2 = _interopRequireDefault(_fsWriteStreamAtomic);

var _getRes = require('get-res');

var _getRes2 = _interopRequireDefault(_getRes);

var _logSymbols = require('log-symbols');

var _logSymbols2 = _interopRequireDefault(_logSymbols);

var _memoizeAsync = require('memoize-async');

var _memoizeAsync2 = _interopRequireDefault(_memoizeAsync);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _rimraf = require('rimraf');

var _rimraf2 = _interopRequireDefault(_rimraf);

var _screenshotStream = require('screenshot-stream');

var _screenshotStream2 = _interopRequireDefault(_screenshotStream);

var _viewportList = require('viewport-list');

var _viewportList2 = _interopRequireDefault(_viewportList);

var _protocolify = require('protocolify');

var _protocolify2 = _interopRequireDefault(_protocolify);

var _arrayUniq = require('array-uniq');

var _arrayUniq2 = _interopRequireDefault(_arrayUniq);

var _filenamifyUrl = require('filenamify-url');

var _filenamifyUrl2 = _interopRequireDefault(_filenamifyUrl);

var _lodashTemplate = require('lodash.template');

var _lodashTemplate2 = _interopRequireDefault(_lodashTemplate);

var _pify = require('pify');

var _pify2 = _interopRequireDefault(_pify);

var _plur = require('plur');

var _plur2 = _interopRequireDefault(_plur);

/**
 * Fetch ten most popular resolutions
 *
 * @param {String} url
 * @param {Object} options
 * @api private
 */

function resolution(url, options) {
	var items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

	return _regeneratorRuntime.async(function resolution$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return _regeneratorRuntime.awrap((0, _pify2['default'])((0, _memoizeAsync2['default'])(_getRes2['default']))());

			case 2:
				items = context$1$0.sent;
				_iteratorNormalCompletion = true;
				_didIteratorError = false;
				_iteratorError = undefined;
				context$1$0.prev = 6;

				for (_iterator = _getIterator(items); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					item = _step.value;

					this.sizes.push(item.item);
					this.items.push(this.create(url, item.item, options));
				}
				context$1$0.next = 14;
				break;

			case 10:
				context$1$0.prev = 10;
				context$1$0.t0 = context$1$0['catch'](6);
				_didIteratorError = true;
				_iteratorError = context$1$0.t0;

			case 14:
				context$1$0.prev = 14;
				context$1$0.prev = 15;

				if (!_iteratorNormalCompletion && _iterator['return']) {
					_iterator['return']();
				}

			case 17:
				context$1$0.prev = 17;

				if (!_didIteratorError) {
					context$1$0.next = 20;
					break;
				}

				throw _iteratorError;

			case 20:
				return context$1$0.finish(17);

			case 21:
				return context$1$0.finish(14);

			case 22:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this, [[6, 10, 14, 22], [15,, 17, 21]]);
}

/**
 * Fetch keywords
 *
 * @param {Object} obj
 * @param {Object} options
 */

function viewport(obj, options) {
	var items, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, size;

	return _regeneratorRuntime.async(function viewport$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return _regeneratorRuntime.awrap((0, _pify2['default'])((0, _memoizeAsync2['default'])(_viewportList2['default']))(obj.keywords));

			case 2:
				items = context$1$0.sent;
				_iteratorNormalCompletion2 = true;
				_didIteratorError2 = false;
				_iteratorError2 = undefined;
				context$1$0.prev = 6;

				for (_iterator2 = _getIterator(items); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					item = _step2.value;

					this.sizes.push(item.size);
					obj.sizes.push(item.size);
				}

				context$1$0.next = 14;
				break;

			case 10:
				context$1$0.prev = 10;
				context$1$0.t0 = context$1$0['catch'](6);
				_didIteratorError2 = true;
				_iteratorError2 = context$1$0.t0;

			case 14:
				context$1$0.prev = 14;
				context$1$0.prev = 15;

				if (!_iteratorNormalCompletion2 && _iterator2['return']) {
					_iterator2['return']();
				}

			case 17:
				context$1$0.prev = 17;

				if (!_didIteratorError2) {
					context$1$0.next = 20;
					break;
				}

				throw _iteratorError2;

			case 20:
				return context$1$0.finish(17);

			case 21:
				return context$1$0.finish(14);

			case 22:
				_iteratorNormalCompletion3 = true;
				_didIteratorError3 = false;
				_iteratorError3 = undefined;
				context$1$0.prev = 25;
				for (_iterator3 = _getIterator((0, _arrayUniq2['default'])(obj.sizes)); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					size = _step3.value;

					this.items.push(this.create(obj.url, size, options));
				}
				context$1$0.next = 33;
				break;

			case 29:
				context$1$0.prev = 29;
				context$1$0.t1 = context$1$0['catch'](25);
				_didIteratorError3 = true;
				_iteratorError3 = context$1$0.t1;

			case 33:
				context$1$0.prev = 33;
				context$1$0.prev = 34;

				if (!_iteratorNormalCompletion3 && _iterator3['return']) {
					_iterator3['return']();
				}

			case 36:
				context$1$0.prev = 36;

				if (!_didIteratorError3) {
					context$1$0.next = 39;
					break;
				}

				throw _iteratorError3;

			case 39:
				return context$1$0.finish(36);

			case 40:
				return context$1$0.finish(33);

			case 41:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this, [[6, 10, 14, 22], [15,, 17, 21], [25, 29, 33, 41], [34,, 36, 40]]);
}

/**
 * Save an array of streams to files
 *
 * @param {Array} streams
 * @api private
 */

function save(streams) {
	var files, end;
	return _regeneratorRuntime.async(function save$(context$1$0) {
		var _this = this;

		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				end = function end() {
					return _regeneratorRuntime.async(function end$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.next = 2;
								return _regeneratorRuntime.awrap(_Promise.all(files.map(function (file) {
									return (0, _pify2['default'])(_rimraf2['default'])(file);
								})));

							case 2:
								return context$2$0.abrupt('return', context$2$0.sent);

							case 3:
							case 'end':
								return context$2$0.stop();
						}
					}, null, this);
				};

				files = [];

				process.on('SIGINT', function callee$1$0() {
					return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
						while (1) switch (context$2$0.prev = context$2$0.next) {
							case 0:
								context$2$0.t0 = process;
								context$2$0.next = 3;
								return _regeneratorRuntime.awrap(end());

							case 3:
								context$2$0.t1 = context$2$0.sent;
								return context$2$0.abrupt('return', context$2$0.t0.exit.call(context$2$0.t0, context$2$0.t1));

							case 5:
							case 'end':
								return context$2$0.stop();
						}
					}, null, _this);
				});

				context$1$0.next = 5;
				return _regeneratorRuntime.awrap(_Promise.all(streams.map(function (stream) {
					return new _Promise(function callee$2$0(resolve, reject) {
						var dest, write;
						return _regeneratorRuntime.async(function callee$2$0$(context$3$0) {
							while (1) switch (context$3$0.prev = context$3$0.next) {
								case 0:
									context$3$0.next = 2;
									return _regeneratorRuntime.awrap((0, _pify2['default'])(_mkdirp2['default'])(this.dest()));

								case 2:
									dest = _path2['default'].join(this.dest(), stream.filename);
									write = (0, _fsWriteStreamAtomic2['default'])(dest);

									files.push(write.__atomicTmp);

									stream.on('warn', this.emit.bind(this, 'warn'));
									stream.on('token', this.emit.bind(this, 'token'));
									stream.on('error', function (err) {
										return end().then(reject(err));
									});

									write.on('finish', resolve);
									write.on('error', function (err) {
										return end().then(reject(err));
									});

									stream.pipe(write);

								case 11:
								case 'end':
									return context$3$0.stop();
							}
						}, null, _this);
					});
				})));

			case 5:
				return context$1$0.abrupt('return', context$1$0.sent);

			case 6:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

/**
 * Create a pageres stream
 *
 * @param {String} uri
 * @param {String} size
 * @param {Object} options
 * @api private
 */

function create(uri, size, options) {
	var sizes = size.split('x');
	var stream = (0, _screenshotStream2['default'])((0, _protocolify2['default'])(uri), size, options);
	var filename = (0, _lodashTemplate2['default'])(options.filename + '.' + options.format);

	stream.filename = filename({
		crop: options.crop ? '-cropped' : '',
		script: options.script,
		date: (0, _easydate2['default'])('Y-M-d'),
		time: (0, _easydate2['default'])('h-m-s'),
		size: size,
		width: sizes[0],
		height: sizes[1],
		url: (0, _filenamifyUrl2['default'])(uri)
	});

	return stream;
}

/**
 * Success message
 *
 * @api private
 */

function successMessage() {
	var stats = this.stats;
	var screenshots = stats.screenshots;
	var sizes = stats.sizes;
	var urls = stats.urls;

	var words = {
		screenshots: (0, _plur2['default'])('screenshot', screenshots),
		sizes: (0, _plur2['default'])('size', sizes),
		urls: (0, _plur2['default'])('url', urls)
	};

	console.log('\n' + _logSymbols2['default'].success + ' Generated ' + screenshots + ' ' + words.screenshots + ' from ' + urls + ' ' + words.urls + ' and ' + sizes + ' ' + words.sizes);
}