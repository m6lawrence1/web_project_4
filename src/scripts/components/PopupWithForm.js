import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(callback, popupSelector) {
        super(popupSelector);
        this._callback = callback;
        this._form = this._modal.querySelector('.form');
    }
    
    _getInputValues(evt){
        evt.preventDefault();
        const data = Object.fromEntries(new FormData(this._form));
        
        this._callback(data);
        this.close();
    }
    
    close() {
        this._form.reset();
        super.close();   
    }
    
    setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => this._getInputValues(evt));
  }
}