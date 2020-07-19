import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(callback, popupSelector, buttonLoadText) {
        super(popupSelector);
        this._callback = callback;
        this._form = this._modal.querySelector('.form');
        this._button = this._form.querySelector(".form__submit-button");
        this._buttonText = this._button.textContent;
        this._buttonLoadText = buttonLoadText;
    }
    
    _getInputValues(){
        const values = { ...this._callBackParameters };
        const data = Object.fromEntries(new FormData(this._form));
        Object.assign(data, values);
        return data;     
    }
    
    open(callBackParameters) {
        this._callBackParameters = callBackParameters || {};
        super.open();
    }
    
    close() {
        this._form.reset();
        super.close();
    }
    
    rendering(isLoading) {
        if (isLoading) {
            this._button.textContent =  this._buttonLoadText;
        } else {
            this._button.textContent = this._buttonText;
        }
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._callback(this._getInputValues(evt));
            this.rendering(true);
            evt.stopPropagation();
    });
  }
}