# Wizard Steps
JS library to provide a wizard, like the one below:


## Usage
First you need this HTML code in your page:
```html
<div id="my-wizard" class="wizard-steps">
  <div class="wizard-steps-header">
    <ul>
      <li class="wizard-step-header-tab active">
        <span>Tab 1</span>
      </li>
      <li class="wizard-step-header-tab">
        <span>Tab 2</span>
      </li>
              ...
              ...
              ...
    </ul>
  </div>
  <div class="wizard-steps-body">
    <div class="wizard-step active">
      <h4>Step 1 content</h4>
    </div>
    <div class="wizard-step">
      <h4>Step 2 content</h4>
    </div>
              ...
              ...
              ...
  </div>

  <div class="wizard-steps-footer">
    <button class="btn-back">Back</button>
    <button class="btn-next">Confirm</button>
  </div>
</div>
```

Then do that in your javascript:
```javascript
var wizard = new WizardSteps({
  element: '#my-wizard'
})
```

## Notes
About the HTML code, the elements with these classes are optionals:  
  * wizard-steps-header
  * wizard-steps-body
  * wizard-steps-footer
  
Despite the element with the **wizard-steps-footer** class is optional, you still need the elements with the classes **btn-back** and **btn-next** for walk through the wizard.  
Like the **wizard-steps-footer** case, the **wizard-steps-body** is optional to, but you still need the elements with the **wizard-step** class, otherwise will not work.  
  
It's a good practice to follow the structure of the example, but you are free to customize by your own.  
That being said, you can do that in your HTML:
```html
<div id="my-wizard">
  <div class="wizard-step">
    <h4>Step 1</h4>
  </div>
  <div class="wizard-step">
    <h4>Step 2</h4>
  </div>
        ...
        ...
        ...
</div>
```

And then, in your javascript:
```javascript
var wizard = new WizardSteps({
  element: '#my-wizard'
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

wizard.element = '#my-wizard'; // Will not work
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
