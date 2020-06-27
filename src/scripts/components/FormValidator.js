export default class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
	   }
    
    _hideInputError(inputElement, errorElement) {
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = '';
    }
    
    _showInputError(inputElement, errorMessage, errorElement) {
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.classList.add(this._settings.errorClass);
        errorElement.textContent = errorMessage; 
    }
    
    /*Check if all input fields are valid (for enabling button) */
    _hasInvalidInput(inputList) {
        //The some() method tests whether at least one element in the array passes the test implemented by the provided function.
        const inputsInvalid = inputList.some((input) => !input.validity.valid);
        return !inputsInvalid;
    }
    
    _toggleButtonState(buttonElement, inputList) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.remove(this._settings.inactiveButtonClass);
            buttonElement.removeAttribute('disabled', false);
            
        } else {
            buttonElement.classList.add(this._settings.inactiveButtonClass);
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
        const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
        this._setEventListeners(buttonElement, inputList);
        
    }
    
    resetErrorMsgsOnPopup(formElement) {
        const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));
        const buttonElement = formElement.querySelector(this._settings.submitButtonSelector);
        //reset button state if user entered valid inputs and closed the popup without submitting and opens the popup again.
        this._toggleButtonState(buttonElement, inputList);
        inputList.forEach((inputElement) => {
            const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
            //clear any error messages if a user enters invalid input and closes popup and then opens the popup again.
            this._hideInputError(inputElement, errorElement); 
        }); 
        
    }      
}