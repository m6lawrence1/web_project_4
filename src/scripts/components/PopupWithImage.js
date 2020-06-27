import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)   
    }
    
    open({name, link}){
        this._modal.querySelector(".popup__image").src = link;
        this._modal.querySelector(".popup__image").alt = name;
        this._modal.querySelector(".popup__image-label").textContent = name;
        
        super.open();
    }
}