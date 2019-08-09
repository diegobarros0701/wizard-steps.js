# Wizard Steps
JS library to provide a wizard, like the one below:  
  
![Example of a form wizard](https://i.imgur.com/TiIotVa.png)

## Usage
  
Import the following files:
  * dist/wizard-steps.min.css **(This one is just the styles needed for the plugin works correctly)**
  * dist/wizard-steps.min.js  
  
If you want the default style of the plugin, you will need this HTML structure:
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

If you don't, this is the required HTML:
```html
<div id="my-wizard" class="wizard-steps">

  <div class="wizard-step active">
    <h4>Step 1</h4>
  </div>
  <div class="wizard-step">
    <h4>Step 2</h4>
  </div>
        ...
        ...
        ...

  <button class="btn-back">Back</button>
  <button class="btn-next">Confirm</button>
</div
```

Then do that in your javascript:
```javascript
var wizard = new WizardSteps(); // Will search for .wizard-steps by default

// or

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
Like the **wizard-steps-footer** case, the **wizard-steps-body** is optional to, but you still need the elements with the **wizard-step** class for the steps, otherwise will not work.  

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
  },
  buttons: {
    classShow: '',
    classHide: 'insivible-step-button',
    back: {
      hideOnFirstStep: true
    },
    next: {
      hideOnLastStep: true
    }
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

## Methods

| Method | Description |
| ------ | ------ |
| show() | Show the wizard element |
| hide() | Hide the wizard element |
| destroy() | Destroy the wizard element |

## Events

**Important:** All the events callbacks can be **asynchronous**.

| Event | Description |
| ----- | ----- |
| [onBeforeProceed](#onbeforeproceedcallbackoldindex-newindex--boolean) | Called before going to the next step. Must return **true** to continue or **false** to not. |
| [onBeforeProceedToStep](#onbeforeproceedtostepstepindex-callbackoldindex-newindex--boolean) | Called before going to the specified step index. Must return **true** to continue or **false** to not. |
| [onAfterProceed](#onafterproceedcallbackoldindex-newindex--void) | Called after going to the next step. |
| [onAfterProceedToStep](#onafterproceedtostepstepindex-callbackoldindex-newindex--void) | Called after going to the sepecified step. |
| [onBeforeBack](#onbeforebackcallbackoldindex-newindex--boolean) | Called before back to the previous step. Must return **true** to continue or **false** to not. |
| [onBeforeBackToStep](#onbeforebacktostepstepindex-callbackoldindex-newindex--boolean) | Called before back to the specified step. Must return **true** to continue or **false** to not. |
| [onAfterBack](#onafterbackcallbackoldindex-newindex--void) | Called after back to the previous step. |
| [onAfterBackToStep](#onafterbacktostepstepindex-callbackoldindex-newindex--void) | Called after back to the specified step. |
| [onBeforeGoToStep](#onbeforegotostepstepindex-callbackoldindex-newindex--boolean) | Called before going to the specified step. Unlike the **onBeforeProceed** this will called no matter if it's going backwards or forwards. Must return **true** to continue or **false** to not. |
| [onAfterGoToStep](#onaftergotostepstepindex-callbackoldindex-newindex--void) | Called after going to the specified step. Unlike the **onAfterProceed** this will called no matter if it's going backwards or forwards. |
| [onBeforeLeaveStep](#onbeforeleavestepstepindex-callbackoldindex-newindex--boolean)| Called before leaving the specified step. . Must return **true** to continue or **false** to not. |

#### `onBeforeProceed(callback(oldIndex, newIndex) : boolean)`

```javascript
onBeforeProceed(function(oldIndex, newIndex) {
  console.log('You are in: ', oldIndex);
  console.log('You are going to: ', newIndex);

  return true;
})
```

#### `onBeforeProceedToStep(stepIndex, callback(oldIndex, newIndex) : boolean)`

```javascript
onBeforeProceedToStep(2, function(oldIndex, newIndex) {
  console.log('You are in: ', oldIndex);
  console.log('You are going to: ', newIndex);

  return true;
})
```

#### `onAfterProceed(callback(oldIndex, newIndex) : void)`

```javascript
onAfterProceed(function(oldIndex, newIndex) {
  console.log('You came from: ', oldIndex);
  console.log('You are in: ', newIndex);
})
```

#### `onAfterProceedToStep(stepIndex, callback(oldIndex, newIndex) : void)`

```javascript
onAfterProceedToStep(3, function(oldIndex, newIndex) {
  console.log('You came from: ', oldIndex);
  console.log('You are in: ', newIndex);
})
```

#### `onBeforeBack(callback(oldIndex, newIndex) : boolean)`

```javascript
onBeforeBack(function(oldIndex, newIndex) {
  console.log('You are in: ', oldIndex);
  console.log('You are going to: ', newIndex);

  return true;
})
```

#### `onBeforeBackToStep(stepIndex, callback(oldIndex, newIndex) : boolean)`

```javascript
onBeforeBackToStep(0, function(oldIndex, newIndex) {
  console.log('You are in: ', oldIndex);
  console.log('You are going to: ', newIndex);

  return true;
})
```

#### `onAfterBack(callback(oldIndex, newIndex) : void)`

```javascript
onAfterBack(function(oldIndex, newIndex) {
  console.log('You came from: ', oldIndex);
  console.log('You are in: ', newIndex);
})
```

#### `onAfterBackToStep(stepIndex, callback(oldIndex, newIndex) : void)`

```javascript
onAfterBackToStep(1, function(oldIndex, newIndex) {
  console.log('You came from: ', oldIndex);
  console.log('You are in: ', newIndex);
})
```

#### `onBeforeGoToStep(stepIndex, callback(oldIndex, newIndex) : boolean)`

```javascript
onBeforeGoToStep(1, function(oldIndex, newIndex) {
  console.log('You are in: ', oldIndex);
  console.log('You are going to: ', newIndex);

  return true;
})
```

#### `onAfterGoToStep(stepIndex, callback(oldIndex, newIndex) : void)`

```javascript
onAfterGoToStep(1, function(oldIndex, newIndex) {
  console.log('You came from: ', oldIndex);
  console.log('You are in: ', newIndex);
})
```

#### `onBeforeLeaveStep(stepIndex, callback(oldIndex, newIndex) : boolean)`

```javascript
onBeforeLeaveStep(1, function(oldIndex, newIndex) {
  console.log('You are in: ', oldIndex);
  console.log('You are going to: ', newIndex);

  return true;
})
```