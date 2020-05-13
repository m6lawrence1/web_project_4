const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active"
};
// find all forms with the specified class in DOM, and
// make an array from them using the Array.from() method
const formList = Array.from(document.querySelectorAll(settings.formSelector));


/*Show Error*/
const showInputError = (formElement, inputElement, errorMessage, settings) => {
    // Find the error message element
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.classList.add(settings.errorClass);
    errorElement.textContent = errorMessage;
};
/*Hide Error*/
const hideInputError = (formElement, inputElement, settings) => {
    // Find the error message element
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = "";
};

/*Check inputs validity*/
const isValid = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
        // The parameter of showInputError() is now a form, containing a field to be checked
        showInputError(formElement, inputElement, inputElement.validationMessage, settings);     
    } else {
        // The same for hideInputError(), it's parameter is now a form, containing a field to be checked
        hideInputError(formElement, inputElement, settings);     
    }
};

/*Check if all input fields are valid (for enabling button) */
const hasInvalidInput = (inputList) => {
    //The some() method tests whether at least one element in the array passes the test implemented by the provided function.
    return inputList.some((inputElement) => {
        // return true if any of the inputElements is not valid
        return !inputElement.validity.valid;
    });
};

/* Toggle submit button based on validity of form */
const toggleButtonState = (inputList, buttonElement, settings) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(settings.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
  } else {
      buttonElement.classList.remove(settings.inactiveButtonClass);
      buttonElement.removeAttribute('disabled', false);
  }
};

/* Find all fields in form */
const setEventListeners = (formElement, settings) => { 
    // make an array from them using the Array.from() method
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    // here, to check the button state in the very beginning
    toggleButtonState(inputList, buttonElement, settings);
    inputList.forEach((inputElement) => {
        // add the input event handler to each field 
        inputElement.addEventListener("input", () => {
        // Call the isValid() function inside the callback,
        // and pass the form and the element to be checked to it
        isValid(formElement, inputElement, settings);
        toggleButtonState(inputList, buttonElement, settings);
    });
      
  });
};

/* Validate all forms */
const enableValidation = (settings) => {
  // Iterate over the resulting array
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      // Cancel default behavior for each form
      evt.preventDefault();
    });
    // Call the setEventListeners() function for each form,
    // taking form element and settings as arguments
    setEventListeners(formElement, settings);
  });
};


// validate once popup is open to clear any previous error messages if a user entered invalid input and closed popup and then opens it again.
const resetErrorMsgsOnPopup = (settings) => {
    formList.forEach((formElement) => {
        const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
        const buttonElement = formElement.querySelector(settings.submitButtonSelector);
        //reset button state if user entered valid inputs and closed the popup without submitting and opens the popup again.
        toggleButtonState(inputList, buttonElement, settings);
        inputList.forEach((inputElement) => {
            //clear any error messages if a user enters invalid input and closes popup and then opens the popup again.
            hideInputError(formElement, inputElement, settings); 
        });
    });  
};

enableValidation(settings);