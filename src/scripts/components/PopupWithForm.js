import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(callback, popupSelector) {
        super(popupSelector);
        this._callback = callback;
        this._form = this._modal.querySelector('.form');
    }
    
    _getInputValues(){
        const data = Object.fromEntries(new FormData(this._form));
        return data;
    }
    
    close() {
        this._form.reset();
        super.close();   
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._callback(this._getInputValues(evt));
            this.close();
            evt.stopPropagation();
    });
  }
}