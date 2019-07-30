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
        onBeforeProceed: (currentStepIndex) => true,
        onAfterProceed: (currentStepIndex) => {},
        onBeforeBack: (currentStepIndex) => true,
        onAfterBack: (currentStepIndex) => {},
      }
    }, options);
    
    
    this._wizardStepContainer = document.querySelector(this._options.element);

    if (this._wizardStepContainer == undefined) {
      console.error("Can't find the specified element");
    } else {
      this._wizardStepsHeaderTabs = this._wizardStepContainer.querySelectorAll('.wizard-steps-header .wizard-step-header-tab');
      this._wizardSteps = this._wizardStepContainer.querySelectorAll('.wizard-step');
      this._stepActive = this._wizardStepContainer.querySelector('.wizard-step.active');
      this._buttonBack = document.querySelector('.btn-back');
      this._buttonNext = document.querySelector('.btn-next');
      this._currentStepIndex = [].indexOf.call(this._wizardSteps, this._stepActive);

      this._registerEvents();
    }
  }
  
  /**
   * Setter to update options.events.onBeforeProceed
   * 
   * @param {(() => true) | (() => false)} callback - The callback. Must return true or false.
   */
  set onBeforeProceed(callback) {
    this._options.events.onBeforeProceed = callback;
  }

  /**
   * Setter to update options.events.onAfterProceed
   * 
   * @param {(() => true) | (() => false)} callback - The callback.
   */
  set onAfterProceed(callback) {
    this._options.events.onAfterProceed = callback;
  }

  /**
   * Setter to update options.events.onBeforeBack
   * 
   * @param {(() => true) | (() => false)} callback - The callback. Must return true or false.
   */
  set onBeforeBack(callback) {
    this._options.events.onBeforeBack = callback;
  }

  /**
   * Setter to update options.events.onAfterBack
   * 
   * @param {(() => true) | (() => false)} callback - The callback.
   */
  set onAfterBack(callback) {
    this._options.events.onAfterBack = callback;
  }

  goToNextStep() {

    if (this._currentStepIndex < (this._wizardSteps.length - 1)) {
      this._toggleStep(this._currentStepIndex);
      this._toggleStep(this._currentStepIndex + 1);

      this._currentStepIndex += 1;
    }
  }

  goToPreviousStep() {

    if (this._currentStepIndex > 0) {
      this._toggleStep(this._currentStepIndex);
      this._toggleStep(this._currentStepIndex - 1);

      this._currentStepIndex -= 1;
    }
  }

  goToStep(index) {
    this._toggleStep(this._currentStepIndex);
    this._toggleStep(index);
  }

  _toggleStep(index) {

    // Header is not required
    if (this._wizardStepsHeaderTabs.length > 0)
      this._wizardStepsHeaderTabs[index].classList.toggle('active');

    this._wizardSteps[index].classList.toggle('active');
  }

  _registerEvents() {
    if (this._buttonBack != undefined) {
      this._buttonBack.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (this._options.events.onBeforeBack.constructor.name == 'AsyncFunction') {
          this._options.events.onBeforeBack(this._currentStepIndex).then((canContinue) => {
            this._continueToBackStepIfCan(canContinue)
          })
        } else {
          let canContinue = this._options.events.onBeforeBack(this._currentStepIndex);

          this._continueToBackStepIfCan(canContinue)
        }

      }, false)
    }
  
    if (this._buttonNext != undefined) {
      this._buttonNext.addEventListener('click', (e) => {
        e.preventDefault();

        if (this._options.events.onBeforeProceed.constructor.name == 'AsyncFunction') {
          this._options.events.onBeforeProceed(this._currentStepIndex).then((canContinue) => {
            this._continueToNextStepIfCan(canContinue);
          })
        } else {
          let canContinue = this._options.events.onBeforeProceed(this._currentStepIndex);
          
          this._continueToNextStepIfCan(canContinue);
        }
      }, false)
    }
  }

  /**
   * Checks if can go to the next step. If can, then go, otherwise not.
   * 
   * @param {boolean} canContinue - Tells if can proceed to the next step
   */
  _continueToNextStepIfCan(canContinue) {
    if (canContinue) {
      this.goToNextStep();
      this._options.events.onAfterProceed(this._currentStepIndex);
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
      this._options.events.onAfterBack(this._currentStepIndex);
    }
  }
}

export { WizardSteps }