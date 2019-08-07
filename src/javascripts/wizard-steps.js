class WizardSteps {
  /**
   * The constructor
   * 
   * @param {{ element: string, events: { onBeforeProceed: ((currentStepIndex: number) => true) | ((currentStepIndex: number) => false), onAfterProceed: (currentStepIndex: number), onBeforeBack: ((currentStepIndex: number) => true) | ((currentStepIndex: number) => false), onAfterBack: (currentStepIndex: number) } }} options
   *
   * @property {string} options.element The selector for the wizard element
   * @property {string} options.events.onBeforeProceed The callback called before going to next step. To continue must return true if success, false if not
   * @property {string} options.events.onAfterProceed The callback called after going to next step.
   * @property {string} options.events.onBeforeBack The callback called before going to previous step. To continue must return true if success, false if not
   * @property {string} options.events.onAfterBack The callback called after going to previous step.
   */
  constructor(options = {}) {
    this._options = Object.assign({
      element: '.wizard-steps',
      events: {
        onBeforeProceed: (currentStepIndex) => (true || false),
        onBeforeProceedToStep: {},
        onAfterProceed: (currentStepIndex) => {},
        onAfterProceedToStep: {},
        onBeforeBack: (currentStepIndex) => true,
        onBeforeBackToStep: {},
        onAfterBack: (currentStepIndex) => {},
        onAfterBackToStep: {},
        onBeforeGoToStep: {},
        onAfterGoToStep: {}
      },
      buttons: {
        classShow: '',
        classHide: 'invisible-step-button',
        back: {
          hideOnFirstStep: true
        },
        next: {
          hideOnLastStep: true
        }
      }
    }, options);

    this._options.buttons.classShow = this._options.buttons.classShow || '';
    this._options.buttons.classHide = this._options.buttons.classHide || '';
    
    
    this._wizardStepContainer = document.querySelector(this._options.element);

    if (this._wizardStepContainer == undefined) {
      console.error("Can't find the specified element");
    } else {
      this._wizardStepsHeaderTabs = this._wizardStepContainer.querySelectorAll('.wizard-steps-header .wizard-step-header-tab');
      this._wizardSteps = this._wizardStepContainer.querySelectorAll('.wizard-step');
      this._stepActive = this._wizardStepContainer.querySelector('.wizard-step.active');
      this._buttonBack = this._wizardStepContainer.querySelector('.btn-back');
      this._buttonNext = this._wizardStepContainer.querySelector('.btn-next');
      this._currentStepIndex = [].indexOf.call(this._wizardSteps, this._stepActive);
      this._currentStepIndex = this._currentStepIndex == -1 ? 0 : this._currentStepIndex;

      if (this._options.buttons.back.hideOnFirstStep && this._currentStepIndex == 0) {
        this._hideButton(this._buttonBack);
      } else if (this._options.buttons.next.hideOnLastStep && this._currentStepIndex == (this._wizardSteps.length - 1)) {
        this._hideButton(this._buttonNext);
      }

      this._registerEvents();
    }
  }

  show() {
    this._wizardStepContainer.style.display = '';
  }

  hide() {
    this._wizardStepContainer.style.display = 'none';
  }

  destroy() {
    this._wizardStepContainer.remove();
  }

  /**
   * Callback for the onBeforeProceed event
   * 
   * @param {(stepIndex: number) => boolean} callback - The callback. Must return true or false.
   */
  onBeforeProceed(callback) {
    this._options.events.onBeforeProceed = callback;
  }

  /**
   * Callback for the onBeforeProceedToStep event
   * 
   * @param {string | number} step The step index or his selector
   * @param {(step?: string | number) => boolean} callback The callback. Must return true or false.
   */
  onBeforeProceedToStep(step, callback) {
    this._options.events.onBeforeProceedToStep[step] = callback;
  }

  /**
   * Callback for the onAfterProceed event
   * 
   * @param {(stepIndex: number) => void} callback - The callback.
   */
  onAfterProceed(callback) {
    this._options.events.onAfterProceed = callback;
  }

  /**
   * Callback for the onAfterOroceedToStep event
   * 
   * @param {string | number} step The step index or his selector
   * @param {(stepIndex: number) => void} callback The callback
   */
  onAfterProceedToStep(step, callback) {
    this._options.events.onAfterProceedToStep[step] = callback;
  }

  /**
   * Callback for the onBeforeBack event
   * 
   * @param {(stepIndex: number) => boolean} callback - The callback. Must return true or false.
   */
  onBeforeBack(callback) {
    this._options.events.onBeforeBack = callback;
  }

  /**
   * Callback for the onBeforeBackToStep event
   * 
   * @param {string | number} step The step index or his selector
   * @param {(step?: string | number) => boolean} callback The callback. Must return true or false.
   */
  onBeforeBackToStep(step, callback) {
    this._options.events.onBeforeBackToStep[step] = callback;
  }

  /**
   * Callback for the onAfterBack event
   * 
   * @param {(stepIndex: number) => void} callback - The callback.
   */
  onAfterBack(callback) {
    this._options.events.onAfterBack = callback;
  }

  /**
   * Callback for the onAfterBackToStep event
   * 
   * @param {string | number} step The step index or his selector
   * @param {(stepIndex: number) => void} callback The callback
   */
  onAfterBackToStep(step, callback) {
    this._options.events.onAfterBackToStep[step] = callback;
  }

  /**
   * Callback for the onBeforeGoToStep event
   * 
   * @param {string | number} step The step index or his selector
   * @param {(stepIndex: number) => boolean} callback The callback. Must return true or false.
   */
  onBeforeGoToStep(step, callback) {
    this._options.events.onBeforeGoToStep[step] = callback;
  }

  /**
   * Callback for the onAfterGoToStep event
   * 
   * @param {string | number} step The step index or his selector
   * @param {(stepIndex: number) => void} callback The callback
   */
  onAfterGoToStep(step, callback) {
    this._options.events.onAfterGoToStep[step] = callback;
  }

  goToNextStep() {

    if (this._currentStepIndex < (this._wizardSteps.length - 1)) {
      this.goToStep(this._currentStepIndex + 1);
    }
  }

  goToPreviousStep() {

    if (this._currentStepIndex > 0) {
      this.goToStep(this._currentStepIndex - 1);
    }
  }

  goToStep(stepIndex) {
    let canContinue = true;

    if (this._options.events.onBeforeGoToStep[stepIndex])
      canContinue = this._options.events.onBeforeGoToStep[stepIndex](this._currentStepIndex, stepIndex);

    if (canContinue) {
      this._toggleStep(this._currentStepIndex);
      this._toggleStep(stepIndex);

      if (this._options.events.onAfterGoToStep[stepIndex])
        this._options.events.onAfterGoToStep[stepIndex](this._currentStepIndex, stepIndex);

      this._currentStepIndex = stepIndex;

      this._disableButtonBackIfFirstStepOrEnableIfNot();
      this._disableButtonNextIfFirstStepOrEnableIfNot();
    }
  }

  _disableButtonBackIfFirstStepOrEnableIfNot() {
    if (this._currentStepIndex == 0 && this._options.buttons.back.hideOnFirstStep) {
      this._hideButton(this._buttonBack);
    } else {
      this._showButton(this._buttonBack)
    }
  }

  _disableButtonNextIfFirstStepOrEnableIfNot() {
    if (this._currentStepIndex == (this._wizardSteps.length - 1) && this._options.buttons.next.hideOnLastStep) {
      this._hideButton(this._buttonNext);
    } else {
      this._showButton(this._buttonNext);
    }
  }

  _showButton(button) {
    if (this._options.buttons.classHide.trim() != '')
      button.classList.remove(this._options.buttons.classHide);

    if (this._options.buttons.classShow.trim() != '')
      button.classList.add(this._options.buttons.classShow);
  }

  _hideButton(button) {
    if (this._options.buttons.classHide.trim() != '')
      button.classList.add(this._options.buttons.classHide);

    if (this._options.buttons.classShow.trim() != '')
      button.classList.remove(this._options.buttons.classShow);
  }

  _toggleStep(index) {

    if (index >= 0) {
      // Header is not required
      if (this._wizardStepsHeaderTabs.length > 0) {
        if (index < this._wizardStepsHeaderTabs.length) {
          this._wizardStepsHeaderTabs[index].classList.toggle('active');
        } else {
          this._wizardStepsHeaderTabs[this._wizardStepsHeaderTabs.length - 1].classList.toggle('active');
        }
      }

      this._wizardSteps[index].classList.toggle('active');
    }
  }

  _registerEvents() {
    if (this._buttonBack != undefined) {
      this._buttonBack.addEventListener('click', (e) => {
        e.preventDefault();

        let onBeforeBackFn = this._options.events.onBeforeBack;
        let onBeforeBackToStepFn = this._options.events.onBeforeBackToStep[this._currentStepIndex - 1];

        this._executeBeforeEventsCallbacks('back', onBeforeBackFn, onBeforeBackToStepFn);

      }, false)
    }
  
    if (this._buttonNext != undefined) {
      this._buttonNext.addEventListener('click', (e) => {
        e.preventDefault();

        let onBeforeProceedFn = this._options.events.onBeforeProceed;
        let onBeforeProceedToStepFn = this._options.events.onBeforeProceedToStep[this._currentStepIndex + 1];

        this._executeBeforeEventsCallbacks('next', onBeforeProceedFn, onBeforeProceedToStepFn);
      }, false)
    }
  }

  _executeBeforeEventsCallbacks(stepType, firstCallback, secondCallback) {
    firstCallback = firstCallback || (() => true);
    secondCallback = secondCallback || (() => true);

    let oldIndex = this._currentStepIndex;
    let newIndex = stepType == 'next' ? (this._currentStepIndex + 1) : (this._currentStepIndex - 1);
    let canContinue = true;

    if(this._isAsyncFunction(firstCallback)) {
      firstCallback(oldIndex, newIndex).then((firstCallbackResponse) => {
        canContinue = firstCallbackResponse;

        if (canContinue) {
          if (this._isAsyncFunction(secondCallback)) {
            secondCallback(oldIndex, newIndex).then((secondCallbackResponse) => {
              canContinue = secondCallbackResponse;

              this._continueToStepIfCan(stepType, canContinue);
            })
          } else {
            canContinue = secondCallback(oldIndex, newIndex);

            this._continueToStepIfCan(stepType, canContinue);
          }
        }
      })
    } else {
      canContinue = firstCallback(oldIndex, newIndex);

      if (canContinue) {
        if (this._isAsyncFunction(secondCallback)) {
          secondCallback(oldIndex, newIndex).then((secondCallbackResponse) => {
            canContinue = secondCallbackResponse;

            this._continueToStepIfCan(stepType, canContinue);
          })
        } else {
          canContinue = secondCallback(oldIndex, newIndex);

          this._continueToStepIfCan(stepType, canContinue);
        }
      }
    }
  }

  _continueToStepIfCan(stepType, canContinue) {
    stepType == 'next' ? 
      this._continueToNextStepIfCan(canContinue) : 
      this._continueToBackStepIfCan(canContinue);
  }

  _isAsyncFunction(fn) {
    return fn.constructor.name == 'AsyncFunction';
  }

  /**
   * Checks if can go to the next step. If can, then go, otherwise not.
   * 
   * @param {boolean} canContinue - Tells if can proceed to the next step
   */
  _continueToNextStepIfCan(canContinue) {
    if (canContinue) {
      this.goToNextStep();

      this._options.events.onAfterProceed(this._currentStepIndex - 1, this._currentStepIndex);

      if (this._options.events.onAfterProceedToStep[this._currentStepIndex] != undefined)
        this._options.events.onAfterProceedToStep[this._currentStepIndex](this._currentStepIndex - 1, this._currentStepIndex);
    }
  }

  /**
   * Checks if can go to the previous step. If can, then go, otherwise not.
   * 
   * @param {boolean} canContinue - Tells if can proceed to the previous step
   */
  _continueToBackStepIfCan(canContinue) {
    if (canContinue) {
      this.goToPreviousStep();

      this._options.events.onAfterBack(this._currentStepIndex + 1, this._currentStepIndex);

      if (this._options.events.onAfterBackToStep[this._currentStepIndex] != undefined)
        this._options.events.onAfterBackToStep[this._currentStepIndex](this._currentStepIndex + 1, this._currentStepIndex);
    }
  }
}

export { WizardSteps }