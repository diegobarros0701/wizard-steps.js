# Wizard Steps
JS library to provide a wizard form, like the one below:


## Usage
```javascript
var wizard = new WizardSteps({
  element: '.my-wizard'
})
```
## Options
The available options, with the default values, are shown below:
```javascript
new WizardSteps({
  element: '.wizard-steps', // The CSS selector for the wizard element
  events: { // Explained in the next section
    onBeforeProceed: function(currentStepIndex) {
      return true;
    },
    onAfterProceed: function(currentStepIndex) {
    },
    onBeforeBack: function(currentStepIndex) {
      return true;
    },
    onAfterBack: function(currentStepIndex) {
    },
  }
})
```
After instantiate you can change **only the events**:
```javascript
var wizard = new WizardSteps();

wizard.element = '.my-wizard'; // Will not work
wizard.onBeforeProceed = myFunction1(currentStepIndex);
wizard.onAfterProceed = myFunction2(currentStepIndex);
wizard.onBeforeBack = myFunction3(currentStepIndex);
wizard.onAfterBack = myFunction4(currentStepIndex);
```
## Events

#### onBeforeProceed(currentStepIndex)
Called before going to the next step

#### onAfterProceed(currentStepIndex)
Called after going to the next step

#### onBeforeBackcurrentStepIndex)
Called before going to the previous step

#### onAfterBack(currentStepIndex)
Called after going to the previous step
