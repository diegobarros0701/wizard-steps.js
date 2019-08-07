(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: WizardSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_wizard_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/wizard-steps */ \"./src/stylesheets/wizard-steps.scss\");\n/* harmony import */ var _stylesheets_wizard_steps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_wizard_steps__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _javascripts_wizard_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascripts/wizard-steps */ \"./src/javascripts/wizard-steps.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"WizardSteps\", function() { return _javascripts_wizard_steps__WEBPACK_IMPORTED_MODULE_1__[\"WizardSteps\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/javascripts/wizard-steps.js":
/*!*****************************************!*\
  !*** ./src/javascripts/wizard-steps.js ***!
  \*****************************************/
/*! exports provided: WizardSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WizardSteps\", function() { return WizardSteps; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar WizardSteps =\n/*#__PURE__*/\nfunction () {\n  /**\n   * The constructor\n   * \n   * @param {{ element: string, events: { onBeforeProceed: ((currentStepIndex: number) => true) | ((currentStepIndex: number) => false), onAfterProceed: (currentStepIndex: number), onBeforeBack: ((currentStepIndex: number) => true) | ((currentStepIndex: number) => false), onAfterBack: (currentStepIndex: number) } }} options\n   *\n   * @property {string} options.element The selector for the wizard element\n   * @property {string} options.events.onBeforeProceed The callback called before going to next step. To continue must return true if success, false if not\n   * @property {string} options.events.onAfterProceed The callback called after going to next step.\n   * @property {string} options.events.onBeforeBack The callback called before going to previous step. To continue must return true if success, false if not\n   * @property {string} options.events.onAfterBack The callback called after going to previous step.\n   */\n  function WizardSteps() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, WizardSteps);\n\n    this._options = Object.assign({\n      element: '.wizard-steps',\n      events: {\n        onBeforeProceed: function onBeforeProceed(currentStepIndex) {\n          return  true || false;\n        },\n        onBeforeProceedToStep: {},\n        onAfterProceed: function onAfterProceed(currentStepIndex) {},\n        onAfterProceedToStep: {},\n        onBeforeBack: function onBeforeBack(currentStepIndex) {\n          return true;\n        },\n        onBeforeBackToStep: {},\n        onAfterBack: function onAfterBack(currentStepIndex) {},\n        onAfterBackToStep: {},\n        onBeforeGoToStep: {},\n        onAfterGoToStep: {}\n      },\n      buttons: {\n        classShow: '',\n        classHide: 'invisible-step-button',\n        back: {\n          hideOnFirstStep: true\n        },\n        next: {\n          hideOnLastStep: true\n        }\n      }\n    }, options);\n    this._options.buttons.classShow = this._options.buttons.classShow || '';\n    this._options.buttons.classHide = this._options.buttons.classHide || '';\n    this._wizardStepContainer = document.querySelector(this._options.element);\n\n    if (this._wizardStepContainer == undefined) {\n      console.error(\"Can't find the specified element\");\n    } else {\n      this._wizardStepsHeaderTabs = this._wizardStepContainer.querySelectorAll('.wizard-steps-header .wizard-step-header-tab');\n      this._wizardSteps = this._wizardStepContainer.querySelectorAll('.wizard-step');\n      this._stepActive = this._wizardStepContainer.querySelector('.wizard-step.active');\n      this._buttonBack = this._wizardStepContainer.querySelector('.btn-back');\n      this._buttonNext = this._wizardStepContainer.querySelector('.btn-next');\n      this._currentStepIndex = [].indexOf.call(this._wizardSteps, this._stepActive);\n      this._currentStepIndex = this._currentStepIndex == -1 ? 0 : this._currentStepIndex;\n\n      if (this._options.buttons.back.hideOnFirstStep && this._currentStepIndex == 0) {\n        this._hideButton(this._buttonBack);\n      } else if (this._options.buttons.next.hideOnLastStep && this._currentStepIndex == this._wizardSteps.length - 1) {\n        this._hideButton(this._buttonNext);\n      }\n\n      this._registerEvents();\n    }\n  }\n\n  _createClass(WizardSteps, [{\n    key: \"show\",\n    value: function show() {\n      this._wizardStepContainer.style.display = '';\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this._wizardStepContainer.style.display = 'none';\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this._wizardStepContainer.remove();\n    }\n    /**\n     * Callback for the onBeforeProceed event\n     * \n     * @param {(stepIndex: number) => boolean} callback - The callback. Must return true or false.\n     */\n\n  }, {\n    key: \"onBeforeProceed\",\n    value: function onBeforeProceed(callback) {\n      this._options.events.onBeforeProceed = callback;\n    }\n    /**\n     * Callback for the onBeforeProceedToStep event\n     * \n     * @param {string | number} step The step index or his selector\n     * @param {(step?: string | number) => boolean} callback The callback. Must return true or false.\n     */\n\n  }, {\n    key: \"onBeforeProceedToStep\",\n    value: function onBeforeProceedToStep(step, callback) {\n      this._options.events.onBeforeProceedToStep[step] = callback;\n    }\n    /**\n     * Callback for the onAfterProceed event\n     * \n     * @param {(stepIndex: number) => void} callback - The callback.\n     */\n\n  }, {\n    key: \"onAfterProceed\",\n    value: function onAfterProceed(callback) {\n      this._options.events.onAfterProceed = callback;\n    }\n    /**\n     * Callback for the onAfterOroceedToStep event\n     * \n     * @param {string | number} step The step index or his selector\n     * @param {(stepIndex: number) => void} callback The callback\n     */\n\n  }, {\n    key: \"onAfterProceedToStep\",\n    value: function onAfterProceedToStep(step, callback) {\n      this._options.events.onAfterProceedToStep[step] = callback;\n    }\n    /**\n     * Callback for the onBeforeBack event\n     * \n     * @param {(stepIndex: number) => boolean} callback - The callback. Must return true or false.\n     */\n\n  }, {\n    key: \"onBeforeBack\",\n    value: function onBeforeBack(callback) {\n      this._options.events.onBeforeBack = callback;\n    }\n    /**\n     * Callback for the onBeforeBackToStep event\n     * \n     * @param {string | number} step The step index or his selector\n     * @param {(step?: string | number) => boolean} callback The callback. Must return true or false.\n     */\n\n  }, {\n    key: \"onBeforeBackToStep\",\n    value: function onBeforeBackToStep(step, callback) {\n      this._options.events.onBeforeBackToStep[step] = callback;\n    }\n    /**\n     * Callback for the onAfterBack event\n     * \n     * @param {(stepIndex: number) => void} callback - The callback.\n     */\n\n  }, {\n    key: \"onAfterBack\",\n    value: function onAfterBack(callback) {\n      this._options.events.onAfterBack = callback;\n    }\n    /**\n     * Callback for the onAfterBackToStep event\n     * \n     * @param {string | number} step The step index or his selector\n     * @param {(stepIndex: number) => void} callback The callback\n     */\n\n  }, {\n    key: \"onAfterBackToStep\",\n    value: function onAfterBackToStep(step, callback) {\n      this._options.events.onAfterBackToStep[step] = callback;\n    }\n    /**\n     * Callback for the onBeforeGoToStep event\n     * \n     * @param {string | number} step The step index or his selector\n     * @param {(stepIndex: number) => boolean} callback The callback. Must return true or false.\n     */\n\n  }, {\n    key: \"onBeforeGoToStep\",\n    value: function onBeforeGoToStep(step, callback) {\n      this._options.events.onBeforeGoToStep[step] = callback;\n    }\n    /**\n     * Callback for the onAfterGoToStep event\n     * \n     * @param {string | number} step The step index or his selector\n     * @param {(stepIndex: number) => void} callback The callback\n     */\n\n  }, {\n    key: \"onAfterGoToStep\",\n    value: function onAfterGoToStep(step, callback) {\n      this._options.events.onAfterGoToStep[step] = callback;\n    }\n  }, {\n    key: \"goToNextStep\",\n    value: function goToNextStep() {\n      if (this._currentStepIndex < this._wizardSteps.length - 1) {\n        this.goToStep(this._currentStepIndex + 1);\n      }\n    }\n  }, {\n    key: \"goToPreviousStep\",\n    value: function goToPreviousStep() {\n      if (this._currentStepIndex > 0) {\n        this.goToStep(this._currentStepIndex - 1);\n      }\n    }\n  }, {\n    key: \"goToStep\",\n    value: function goToStep(stepIndex) {\n      var canContinue = true;\n      if (this._options.events.onBeforeGoToStep[stepIndex]) canContinue = this._options.events.onBeforeGoToStep[stepIndex](this._currentStepIndex, stepIndex);\n\n      if (canContinue) {\n        this._toggleStep(this._currentStepIndex);\n\n        this._toggleStep(stepIndex);\n\n        if (this._options.events.onAfterGoToStep[stepIndex]) this._options.events.onAfterGoToStep[stepIndex](this._currentStepIndex, stepIndex);\n        this._currentStepIndex = stepIndex;\n\n        this._disableButtonBackIfFirstStepOrEnableIfNot();\n\n        this._disableButtonNextIfFirstStepOrEnableIfNot();\n      }\n    }\n  }, {\n    key: \"_disableButtonBackIfFirstStepOrEnableIfNot\",\n    value: function _disableButtonBackIfFirstStepOrEnableIfNot() {\n      if (this._currentStepIndex == 0 && this._options.buttons.back.hideOnFirstStep) {\n        this._hideButton(this._buttonBack);\n      } else {\n        this._showButton(this._buttonBack);\n      }\n    }\n  }, {\n    key: \"_disableButtonNextIfFirstStepOrEnableIfNot\",\n    value: function _disableButtonNextIfFirstStepOrEnableIfNot() {\n      if (this._currentStepIndex == this._wizardSteps.length - 1 && this._options.buttons.next.hideOnLastStep) {\n        this._hideButton(this._buttonNext);\n      } else {\n        this._showButton(this._buttonNext);\n      }\n    }\n  }, {\n    key: \"_showButton\",\n    value: function _showButton(button) {\n      if (this._options.buttons.classHide.trim() != '') button.classList.remove(this._options.buttons.classHide);\n      if (this._options.buttons.classShow.trim() != '') button.classList.add(this._options.buttons.classShow);\n    }\n  }, {\n    key: \"_hideButton\",\n    value: function _hideButton(button) {\n      if (this._options.buttons.classHide.trim() != '') button.classList.add(this._options.buttons.classHide);\n      if (this._options.buttons.classShow.trim() != '') button.classList.remove(this._options.buttons.classShow);\n    }\n  }, {\n    key: \"_toggleStep\",\n    value: function _toggleStep(index) {\n      // Header is not required\n      if (this._wizardStepsHeaderTabs.length > 0) {\n        if (index < this._wizardStepsHeaderTabs.length) {\n          this._wizardStepsHeaderTabs[index].classList.toggle('active');\n        } else {\n          this._wizardStepsHeaderTabs[this._wizardStepsHeaderTabs.length - 1].classList.toggle('active');\n        }\n      }\n\n      this._wizardSteps[index].classList.toggle('active');\n    }\n  }, {\n    key: \"_registerEvents\",\n    value: function _registerEvents() {\n      var _this = this;\n\n      if (this._buttonBack != undefined) {\n        this._buttonBack.addEventListener('click', function (e) {\n          e.preventDefault();\n          var onBeforeBackFn = _this._options.events.onBeforeBack;\n          var onBeforeBackToStepFn = _this._options.events.onBeforeBackToStep[_this._currentStepIndex - 1];\n\n          _this._executeBeforeEventsCallbacks('back', onBeforeBackFn, onBeforeBackToStepFn);\n        }, false);\n      }\n\n      if (this._buttonNext != undefined) {\n        this._buttonNext.addEventListener('click', function (e) {\n          e.preventDefault();\n          var onBeforeProceedFn = _this._options.events.onBeforeProceed;\n          var onBeforeProceedToStepFn = _this._options.events.onBeforeProceedToStep[_this._currentStepIndex + 1];\n\n          _this._executeBeforeEventsCallbacks('next', onBeforeProceedFn, onBeforeProceedToStepFn);\n        }, false);\n      }\n    }\n  }, {\n    key: \"_executeBeforeEventsCallbacks\",\n    value: function _executeBeforeEventsCallbacks(stepType, firstCallback, secondCallback) {\n      var _this2 = this;\n\n      firstCallback = firstCallback || function () {\n        return true;\n      };\n\n      secondCallback = secondCallback || function () {\n        return true;\n      };\n\n      var oldIndex = this._currentStepIndex;\n      var newIndex = stepType == 'next' ? this._currentStepIndex + 1 : this._currentStepIndex - 1;\n      var canContinue = true;\n\n      if (this._isAsyncFunction(firstCallback)) {\n        firstCallback(oldIndex, newIndex).then(function (firstCallbackResponse) {\n          canContinue = firstCallbackResponse;\n\n          if (canContinue) {\n            if (_this2._isAsyncFunction(secondCallback)) {\n              secondCallback(oldIndex, newIndex).then(function (secondCallbackResponse) {\n                canContinue = secondCallbackResponse;\n\n                _this2._continueToStepIfCan(stepType, canContinue);\n              });\n            } else {\n              canContinue = secondCallback(oldIndex, newIndex);\n\n              _this2._continueToStepIfCan(stepType, canContinue);\n            }\n          }\n        });\n      } else {\n        canContinue = firstCallback(oldIndex, newIndex);\n\n        if (canContinue) {\n          if (this._isAsyncFunction(secondCallback)) {\n            secondCallback(oldIndex, newIndex).then(function (secondCallbackResponse) {\n              canContinue = secondCallbackResponse;\n\n              _this2._continueToStepIfCan(stepType, canContinue);\n            });\n          } else {\n            canContinue = secondCallback(oldIndex, newIndex);\n\n            this._continueToStepIfCan(stepType, canContinue);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"_continueToStepIfCan\",\n    value: function _continueToStepIfCan(stepType, canContinue) {\n      stepType == 'next' ? this._continueToNextStepIfCan(canContinue) : this._continueToBackStepIfCan(canContinue);\n    }\n  }, {\n    key: \"_isAsyncFunction\",\n    value: function _isAsyncFunction(fn) {\n      return fn.constructor.name == 'AsyncFunction';\n    }\n    /**\n     * Checks if can go to the next step. If can, then go, otherwise not.\n     * \n     * @param {boolean} canContinue - Tells if can proceed to the next step\n     */\n\n  }, {\n    key: \"_continueToNextStepIfCan\",\n    value: function _continueToNextStepIfCan(canContinue) {\n      if (canContinue) {\n        this.goToNextStep();\n\n        this._options.events.onAfterProceed(this._currentStepIndex - 1, this._currentStepIndex);\n\n        if (this._options.events.onAfterProceedToStep[this._currentStepIndex] != undefined) this._options.events.onAfterProceedToStep[this._currentStepIndex](this._currentStepIndex - 1, this._currentStepIndex);\n      }\n    }\n    /**\n     * Checks if can go to the previous step. If can, then go, otherwise not.\n     * \n     * @param {boolean} canContinue - Tells if can proceed to the previous step\n     */\n\n  }, {\n    key: \"_continueToBackStepIfCan\",\n    value: function _continueToBackStepIfCan(canContinue) {\n      if (canContinue) {\n        this.goToPreviousStep();\n\n        this._options.events.onAfterBack(this._currentStepIndex + 1, this._currentStepIndex);\n\n        if (this._options.events.onAfterBackToStep[this._currentStepIndex] != undefined) this._options.events.onAfterBackToStep[this._currentStepIndex](this._currentStepIndex + 1, this._currentStepIndex);\n      }\n    }\n  }]);\n\n  return WizardSteps;\n}();\n\n\n\n//# sourceURL=webpack:///./src/javascripts/wizard-steps.js?");

/***/ }),

/***/ "./src/stylesheets/wizard-steps.scss":
/*!*******************************************!*\
  !*** ./src/stylesheets/wizard-steps.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/stylesheets/wizard-steps.scss?");

/***/ })

/******/ });
});