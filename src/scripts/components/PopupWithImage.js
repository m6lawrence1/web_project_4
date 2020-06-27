import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    
    open({name, link}){
        const popImgSelector = this._modal.querySelector(".popup__image");
        popImgSelector.src = link;
        popImgSelector.alt = name;
        this._modal.querySelector(".popup__image-label").textContent = name;
        
        super.open();
    }
}