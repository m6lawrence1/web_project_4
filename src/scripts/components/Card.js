export default class Card {
    constructor({name, link, handleCardClick}, cardTemplateSelector){
        this._name = name;
        this._link = link;
        this._card = document.querySelector(cardTemplateSelector);
        this._handleCardClick = handleCardClick;
    }
    
    _getTemplate() {
        const cardTemplate = this._card.content.querySelector('.element').cloneNode(true);
        return cardTemplate;
    }
    
    _likeCard() {
        this._cardElement.querySelector(".button__like").classList.toggle('button__like_status_selected');
    }
    
    _deleteCard() {
        this._cardElement.remove();
        this._cardElement = null;
    }
    
    _setEventListeners() {
        this._cardElement.querySelector('.button__like').addEventListener('click', () => this._likeCard());
        this._cardElement.querySelector('.button__delete').addEventListener('click', () => this._deleteCard());
        this._cardElement.querySelector('.element__image').addEventListener('click', () => this._handleCardClick({
            name: this._name,
            link: this._link
        }));
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