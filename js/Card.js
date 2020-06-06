import { popupHandler } from './utils.js';

class Card {
    constructor(data, cardTemplateSelector){
        this._name = data.name;
        this._link = data.link;
        this._cardTemplateSelector = cardTemplateSelector;
    }
    
    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardTemplateSelector).content;
        return cardTemplate.querySelector('.element').cloneNode(true);
    }
    
    _likeCard() {
        this._cardElement.querySelector(".button__like").classList.toggle('button__like_status_selected');
    }
    
    _deleteCard() {
        this._cardElement.remove();
    }
    
    _imgPopup() {
        const imgCardPopup = document.querySelector('.popup_type_image');
        const popupImage = imgCardPopup.querySelector(".popup__image");
        const popupImageLabel = imgCardPopup.querySelector(".popup__image-label");
        popupImage.src = this._link;
        popupImage.alt = this._name;
        popupImageLabel.textContent = this._name;
        popupHandler(imgCardPopup);
    }
    
    _setEventListeners() {
        this._cardElement.querySelector('.button__like').addEventListener('click', () => this._likeCard());
        this._cardElement.querySelector('.button__delete').addEventListener('click', () => this._deleteCard());
        this._cardElement.querySelector('.element__image').addEventListener('click', () => this._imgPopup());
    }
    
    generateCard() {
        this._cardElement = this._getTemplate();
        this._cardImage = this._cardElement.querySelector('.element__image');
        this._cardImage.style.backgroundImage = `url(${this._link})`;
        this._cardElement.querySelector('.element__image').alt = this._name;
        this._cardElement.querySelector('.element__title').textContent = this._name;
        this._setEventListeners();

        return this._cardElement;
  }
        
}

export default Card;