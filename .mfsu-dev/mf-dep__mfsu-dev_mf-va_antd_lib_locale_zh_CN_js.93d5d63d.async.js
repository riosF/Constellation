(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['mf-dep__mfsu-dev_mf-va_antd_lib_locale_zh_CN_js'],
  {
    /***/ './.mfsu-dev/mf-va_antd_lib_locale_zh_CN.js':
      /*!**************************************************!*\
  !*** ./.mfsu-dev/mf-va_antd_lib_locale_zh_CN.js ***!
  \**************************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Users_wangmengyue_Documents_GitHub_Constellation_node_modules_antd_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./node_modules/antd/lib/locale/zh_CN */ './node_modules/antd/lib/locale/zh_CN.js',
          );

        /* harmony default export */ __webpack_exports__['default'] =
          _Users_wangmengyue_Documents_GitHub_Constellation_node_modules_antd_lib_locale_zh_CN__WEBPACK_IMPORTED_MODULE_0__.default;

        /***/
      },

    /***/ './node_modules/@babel/runtime/helpers/extends.js':
      /*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
      /***/ function (module) {
        function _extends() {
          (module.exports = _extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }

              return target;
            }),
            (module.exports.__esModule = true),
            (module.exports.default = module.exports);
          return _extends.apply(this, arguments);
        }

        (module.exports = _extends),
          (module.exports.__esModule = true),
          (module.exports.default = module.exports);

        /***/
      },

    /***/ './node_modules/@babel/runtime/helpers/interopRequireDefault.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
      /***/ function (module) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        (module.exports = _interopRequireDefault),
          (module.exports.__esModule = true),
          (module.exports.default = module.exports);

        /***/
      },

    /***/ './node_modules/antd/lib/calendar/locale/zh_CN.js':
      /*!********************************************************!*\
  !*** ./node_modules/antd/lib/calendar/locale/zh_CN.js ***!
  \********************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js',
        );

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = void 0;

        var _zh_CN = _interopRequireDefault(
          __webpack_require__(
            /*! ../../date-picker/locale/zh_CN */ './node_modules/antd/lib/date-picker/locale/zh_CN.js',
          ),
        );

        var _default = _zh_CN['default'];
        exports.default = _default;

        /***/
      },

    /***/ './node_modules/antd/lib/date-picker/locale/zh_CN.js':
      /*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/locale/zh_CN.js ***!
  \***********************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js',
        );

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(
          __webpack_require__(
            /*! @babel/runtime/helpers/extends */ './node_modules/@babel/runtime/helpers/extends.js',
          ),
        );

        var _zh_CN = _interopRequireDefault(
          __webpack_require__(
            /*! rc-picker/lib/locale/zh_CN */ './node_modules/rc-picker/lib/locale/zh_CN.js',
          ),
        );

        var _zh_CN2 = _interopRequireDefault(
          __webpack_require__(
            /*! ../../time-picker/locale/zh_CN */ './node_modules/antd/lib/time-picker/locale/zh_CN.js',
          ),
        );

        // ???????????????????????? Locale
        var locale = {
          lang: (0, _extends2['default'])(
            {
              placeholder: '???????????????',
              yearPlaceholder: '???????????????',
              quarterPlaceholder: '???????????????',
              monthPlaceholder: '???????????????',
              weekPlaceholder: '????????????',
              rangePlaceholder: ['????????????', '????????????'],
              rangeYearPlaceholder: ['????????????', '????????????'],
              rangeMonthPlaceholder: ['????????????', '????????????'],
              rangeWeekPlaceholder: ['?????????', '?????????'],
            },
            _zh_CN['default'],
          ),
          timePickerLocale: (0, _extends2['default'])({}, _zh_CN2['default']),
        }; // should add whitespace between char in Button

        locale.lang.ok = '??????'; // All settings at:
        // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

        var _default = locale;
        exports.default = _default;

        /***/
      },

    /***/ './node_modules/antd/lib/locale/zh_CN.js':
      /*!***********************************************!*\
  !*** ./node_modules/antd/lib/locale/zh_CN.js ***!
  \***********************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        'use strict';

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ './node_modules/@babel/runtime/helpers/interopRequireDefault.js',
        );

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = void 0;

        var _zh_CN = _interopRequireDefault(
          __webpack_require__(
            /*! rc-pagination/lib/locale/zh_CN */ './node_modules/rc-pagination/lib/locale/zh_CN.js',
          ),
        );

        var _zh_CN2 = _interopRequireDefault(
          __webpack_require__(
            /*! ../date-picker/locale/zh_CN */ './node_modules/antd/lib/date-picker/locale/zh_CN.js',
          ),
        );

        var _zh_CN3 = _interopRequireDefault(
          __webpack_require__(
            /*! ../time-picker/locale/zh_CN */ './node_modules/antd/lib/time-picker/locale/zh_CN.js',
          ),
        );

        var _zh_CN4 = _interopRequireDefault(
          __webpack_require__(
            /*! ../calendar/locale/zh_CN */ './node_modules/antd/lib/calendar/locale/zh_CN.js',
          ),
        );

        /* eslint-disable no-template-curly-in-string */
        var typeTemplate = '${label}?????????????????????${type}';
        var localeValues = {
          locale: 'zh-cn',
          Pagination: _zh_CN['default'],
          DatePicker: _zh_CN2['default'],
          TimePicker: _zh_CN3['default'],
          Calendar: _zh_CN4['default'],
          // locales for all components
          global: {
            placeholder: '?????????',
          },
          Table: {
            filterTitle: '??????',
            filterConfirm: '??????',
            filterReset: '??????',
            filterEmptyText: '????????????',
            filterCheckall: '??????',
            filterSearchPlaceholder: '?????????????????????',
            selectAll: '????????????',
            selectInvert: '????????????',
            selectNone: '????????????',
            selectionAll: '????????????',
            sortTitle: '??????',
            expand: '?????????',
            collapse: '?????????',
            triggerDesc: '????????????',
            triggerAsc: '????????????',
            cancelSort: '????????????',
          },
          Modal: {
            okText: '??????',
            cancelText: '??????',
            justOkText: '?????????',
          },
          Popconfirm: {
            cancelText: '??????',
            okText: '??????',
          },
          Transfer: {
            searchPlaceholder: '?????????????????????',
            itemUnit: '???',
            itemsUnit: '???',
            remove: '??????',
            selectCurrent: '????????????',
            removeCurrent: '????????????',
            selectAll: '????????????',
            removeAll: '????????????',
            selectInvert: '????????????',
          },
          Upload: {
            uploading: '???????????????',
            removeFile: '????????????',
            uploadError: '????????????',
            previewFile: '????????????',
            downloadFile: '????????????',
          },
          Empty: {
            description: '????????????',
          },
          Icon: {
            icon: '??????',
          },
          Text: {
            edit: '??????',
            copy: '??????',
            copied: '????????????',
            expand: '??????',
          },
          PageHeader: {
            back: '??????',
          },
          Form: {
            optional: '????????????',
            defaultValidateMessages: {
              default: '??????????????????${label}',
              required: '?????????${label}',
              enum: '${label}?????????????????????[${enum}]',
              whitespace: '${label}??????????????????',
              date: {
                format: '${label}??????????????????',
                parse: '${label}?????????????????????',
                invalid: '${label}?????????????????????',
              },
              types: {
                string: typeTemplate,
                method: typeTemplate,
                array: typeTemplate,
                object: typeTemplate,
                number: typeTemplate,
                date: typeTemplate,
                boolean: typeTemplate,
                integer: typeTemplate,
                float: typeTemplate,
                regexp: typeTemplate,
                email: typeTemplate,
                url: typeTemplate,
                hex: typeTemplate,
              },
              string: {
                len: '${label}??????${len}?????????',
                min: '${label}??????${min}?????????',
                max: '${label}??????${max}?????????',
                range: '${label}??????${min}-${max}????????????',
              },
              number: {
                len: '${label}????????????${len}',
                min: '${label}????????????${min}',
                max: '${label}????????????${max}',
                range: '${label}??????${min}-${max}??????',
              },
              array: {
                len: '??????${len}???${label}',
                min: '??????${min}???${label}',
                max: '??????${max}???${label}',
                range: '${label}????????????${min}-${max}??????',
              },
              pattern: {
                mismatch: '${label}??????????????????${pattern}',
              },
            },
          },
          Image: {
            preview: '??????',
          },
        };
        var _default = localeValues;
        exports.default = _default;

        /***/
      },

    /***/ './node_modules/antd/lib/time-picker/locale/zh_CN.js':
      /*!***********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/locale/zh_CN.js ***!
  \***********************************************************/
      /***/ function (__unused_webpack_module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = void 0;
        var locale = {
          placeholder: '???????????????',
          rangePlaceholder: ['????????????', '????????????'],
        };
        var _default = locale;
        exports.default = _default;

        /***/
      },

    /***/ './node_modules/rc-pagination/lib/locale/zh_CN.js':
      /*!********************************************************!*\
  !*** ./node_modules/rc-pagination/lib/locale/zh_CN.js ***!
  \********************************************************/
      /***/ function (__unused_webpack_module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = void 0;
        var _default = {
          // Options.jsx
          items_per_page: '???/???',
          jump_to: '??????',
          jump_to_confirm: '??????',
          page: '???',
          // Pagination.jsx
          prev_page: '?????????',
          next_page: '?????????',
          prev_5: '?????? 5 ???',
          next_5: '?????? 5 ???',
          prev_3: '?????? 3 ???',
          next_3: '?????? 3 ???',
          page_size: '??????',
        };
        exports.default = _default;

        /***/
      },

    /***/ './node_modules/rc-picker/lib/locale/zh_CN.js':
      /*!****************************************************!*\
  !*** ./node_modules/rc-picker/lib/locale/zh_CN.js ***!
  \****************************************************/
      /***/ function (__unused_webpack_module, exports) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.default = void 0;
        var locale = {
          locale: 'zh_CN',
          today: '??????',
          now: '??????',
          backToToday: '????????????',
          ok: '??????',
          timeSelect: '????????????',
          dateSelect: '????????????',
          weekSelect: '?????????',
          clear: '??????',
          month: '???',
          year: '???',
          previousMonth: '????????? (????????????)',
          nextMonth: '????????? (????????????)',
          monthSelect: '????????????',
          yearSelect: '????????????',
          decadeSelect: '????????????',
          yearFormat: 'YYYY???',
          dayFormat: 'D???',
          dateFormat: 'YYYY???M???D???',
          dateTimeFormat: 'YYYY???M???D??? HH???mm???ss???',
          previousYear: '????????? (Control??????????????????)',
          nextYear: '????????? (Control??????????????????)',
          previousDecade: '????????????',
          nextDecade: '????????????',
          previousCentury: '????????????',
          nextCentury: '????????????',
        };
        var _default = locale;
        exports.default = _default;

        /***/
      },
  },
]);
