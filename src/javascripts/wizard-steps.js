class WizardSteps {
  /**
   * The constructor
   * 
   * @param {{ element: string, events: { onConfirm: (() => true) | (() => false), onBack: (() => true) | (() => false) } }} options
   *
   * @property {string} options.element The selector for the wizard element
   * @property {string} options.events.onConfirm The callback called before going to next step. To continue must return true if success, false if not
   * @property {string} options.events.onBack The callback called before going to previous step. To continue must return true if success, false if not
   */
  constructor(options = {}) {
    this._options = Object.assign({
      element: '.wizard-steps',
      events: {
        onConfirm: () => true,
        onBack: () => true
      }
    }, options);
    
    
    this._wizardStepContainer = document.querySelector(this._options.element);

    if (this._wizardStepContainer == undefined) {
      console.error("Can't find the specified element");
    } else {
      this._wizardSteps = this._wizardStepContainer.querySelectorAll('.wizard-step');
      this._stepActive = this._wizardStepContainer.querySelector('.wizard-step.active');
      this._buttonBack = document.querySelector('.btn-back');
      this._buttonNext = document.querySelector('.btn-next');
      this._currentStepIndex = [].indexOf.call(this._wizardSteps, this._stepActive);

      this._registerEvents();
    }
  }
  
  /**
   * Setter to update options.events.onConfirm
   * 
   * @param {(() => true) | (() => false)} callback - Callback to options.event.onConfirm, must return true or false
   */
  set onConfirm(callback) {
    this._options.events.onConfirm = callback;
  }

  /**
   * Setter to update options.events.onBack
   * 
   * @param {(() => true) | (() => false)} callback - The callback. Must return true or false
   */
  set onBack(callback) {
    this._options.events.onBack = callback;
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
    this._wizardSteps[index].classList.toggle('active');
  }

  _registerEvents() {
    if (this._buttonBack != undefined) {
      this._buttonBack.addEventListener('click', (e) => {
        e.preventDefault();
  
        let callbackResponse = this._options.events.onBack(this._currentStepIndex);
        
        if (callbackResponse == true) {
          this.goToPreviousStep();
        }
      }, false)
    }
  
    if (this._buttonNext != undefined) {
      this._buttonNext.addEventListener('click', (e) => {
        e.preventDefault();
  
        let callbackResponse = this._options.events.onConfirm(this._currentStepIndex);

        if (callbackResponse) {
          this.goToNextStep();
        }
      }, false)
    }
  }
}

export { WizardSteps }