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

export default FormValidator;