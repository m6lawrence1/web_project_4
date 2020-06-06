class FormValidator {
    constructor(settings, formElement) {
        this._formSelector = settings.formSelector
		this._inputSelector = settings.inputSelector;
		this._submitButtonSelector = settings.submitButtonSelector;
		this._inactiveButtonClass = settings.inactiveButtonClass;
		this._inputErrorClass = settings.inputErrorClass;
		this._errorClass = settings.errorClass;
        this._formElement = formElement;
	   }
    
    _hideInputError(inputElement, errorElement) {
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }
    
    _showInputError(inputElement, errorMessage, errorElement) {
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = errorMessage; 
    }
    
    
    /*Check if all input fields are valid (for enabling button) */
    _hasInvalidInput(inputList) {
        //The some() method tests whether at least one element in the array passes the test implemented by the provided function.
        const inputsInvalid = inputList.some((input) => !input.validity.valid);
        return !inputsInvalid;
    }
    
    
    _toggleButtonState(buttonElement, inputList) {
        console.log(this._hasInvalidInput(inputList));
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute('disabled', false);
            
        } else {
            buttonElement.classList.add(this._inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
            
        }
    }
    
    
    _isValid(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        if (!inputElement.validity.valid) {
            // The parameter of showInputError() is now a form, containing a field to be checked
            this._showInputError(inputElement, inputElement.validationMessage, errorElement);     
        } else {
            // The same for hideInputError(), it's parameter is now a form, containing a field to be checked
            this._hideInputError(inputElement, errorElement);     
        }
    }
    
    _setEventListeners(buttonElement, inputList) {
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this._toggleButtonState(buttonElement, inputList);
            });
        });
    }
    
    enableValidation() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._setEventListeners(buttonElement, inputList);
        
    }
    
    resetErrorMsgsOnPopup() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        //reset button state if user entered valid inputs and closed the popup without submitting and opens the popup again.
        this._toggleButtonState(buttonElement, inputList);
        inputList.forEach((inputElement) => {
            const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
            //clear any error messages if a user enters invalid input and closes popup and then opens the popup again.
            this._hideInputError(inputElement, errorElement); 
        }); 
        
    }      
}

//
///*Show Error*/
//const showInputError = (formElement, inputElement, errorMessage, settings) => {
//    // Find the error message element
//    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//    inputElement.classList.add(settings.inputErrorClass);
//    errorElement.classList.add(settings.errorClass);
//    errorElement.textContent = errorMessage;
//};
///*Hide Error*/
//const hideInputError = (formElement, inputElement, settings) => {
//    // Find the error message element
//    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//    inputElement.classList.remove(settings.inputErrorClass);
//    errorElement.classList.remove(settings.errorClass);
//    errorElement.textContent = "";
//};
//
///*Check inputs validity*/
//const isValid = (formElement, inputElement, settings) => {
//    if (!inputElement.validity.valid) {
//        // The parameter of showInputError() is now a form, containing a field to be checked
//        showInputError(formElement, inputElement, inputElement.validationMessage, settings);     
//    } else {
//        // The same for hideInputError(), it's parameter is now a form, containing a field to be checked
//        hideInputError(formElement, inputElement, settings);     
//    }
//};
//
///*Check if all input fields are valid (for enabling button) */
//const hasInvalidInput = (inputList) => {
//    //The some() method tests whether at least one element in the array passes the test implemented by the provided function.
//    return inputList.some((inputElement) => {
//        // return true if any of the inputElements is not valid
//        return !inputElement.validity.valid;
//    });
//};
//
///* Toggle submit button based on validity of form */
//const toggleButtonState = (inputList, buttonElement, settings) => {
//    if (hasInvalidInput(inputList)) {
//      buttonElement.classList.add(settings.inactiveButtonClass);
//      buttonElement.setAttribute('disabled', true);
//  } else {
//      buttonElement.classList.remove(settings.inactiveButtonClass);
//      buttonElement.removeAttribute('disabled', false);
//  }
//};
//
///* Find all fields in form */
//const setEventListeners = (formElement, settings) => { 
//    // make an array from them using the Array.from() method
//    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
//    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
//    // here, to check the button state in the very beginning
//    toggleButtonState(inputList, buttonElement, settings);
//    inputList.forEach((inputElement) => {
//        // add the input event handler to each field 
//        inputElement.addEventListener("input", () => {
//        // Call the isValid() function inside the callback,
//        // and pass the form and the element to be checked to it
//        isValid(formElement, inputElement, settings);
//        toggleButtonState(inputList, buttonElement, settings);
//    });
//      
//  });
//};
//
///* Validate all forms */
//const enableValidation = (settings) => {
//    // find all forms with the specified class in DOM, and
//    // make an array from them using the Array.from() method
//    const formList = Array.from(document.querySelectorAll(settings.formSelector));
//    // Iterate over the resulting array
//    formList.forEach((formElement) => {
//        formElement.addEventListener("submit", (evt) => {
//        // Cancel default behavior for each form
//        evt.preventDefault();
//    });
//        
//        
//    // Call the setEventListeners() function for each form,
//    // taking form element and settings as arguments
//    setEventListeners(formElement, settings);
//  });
//};
//
//
//// validate once popup is open to clear any previous error messages if a user entered invalid input and closed popup and then opens it again.
//const resetErrorMsgsOnPopup = (formElement, settings) => {
//    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
//    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
//    //reset button state if user entered valid inputs and closed the popup without submitting and opens the popup again.
//    toggleButtonState(inputList, buttonElement, settings);
//    inputList.forEach((inputElement) => {
//        //clear any error messages if a user enters invalid input and closes popup and then opens the popup again.
//        hideInputError(formElement, inputElement, settings); 
//    }); 
//};


export default FormValidator;