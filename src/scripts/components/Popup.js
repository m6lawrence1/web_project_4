import {EscapeKey} from "../utils/constants.js"

export default class Popup {
    constructor(modal){
        this._modal = document.querySelector(modal);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
        
    open(){
        this._modal.classList.add('popup_opened'); 
        document.addEventListener("keydown", this._handleEscClose)

    }
    close(){
        this._modal.classList.remove('popup_opened');
        document.removeEventListener("keydown", this._handleEscClose)
    }

    _handleEscClose(evt){
        if (evt.keyCode == EscapeKey) { //thank you for the explanation :) 
            this.close();
        }
    }
    
    handleOverlayClose(evt){
        if (evt.target.classList.contains('popup')) {
            this.close();
            evt.preventDefault();
        }
    }

    setEventListeners(){
        const closeButton = this._modal.querySelector('.popup__close-button');
        closeButton.addEventListener('click', () => this.close());
        this._modal.addEventListener('click', (evt) => this.handleOverlayClose(evt));

    }
          
}

