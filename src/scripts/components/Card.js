export default class Card {
    constructor({_id, name, link, likes, owner, handleCardClick, handleDeleteClick, userId, userLikedCard, handleCardLikeBtnClick}, cardTemplateSelector,){
        this._name = name;
        this._link = link;
        this._id = _id;
        this._likes = likes;
        this._owner = owner._id;
        this._user = userId;
        this._userLikedCard = userLikedCard;
        this._card = document.querySelector(cardTemplateSelector);
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleCardLikeBtnClick = handleCardLikeBtnClick;
        
    }
    
    id(){
        this._id;
    }
    
    _getTemplate() {
        const cardTemplate = this._card.content.querySelector('.element').cloneNode(true);
        return cardTemplate;
    }
    
    _likeCard(likes) {
        this.likes = likes;
        this._cardElement.querySelector('.element__likes').textContent = likes.length;
        this._cardElement.querySelector(".button__like").classList.toggle('button__like_status_selected');
    }
    
    
    _handleCardLikeClick(likeButton) {
        this._handleCardLikeBtnClick({
            cardIsLiked: !likeButton.classList.contains(
                'button__like_status_selected',
            ),
            _id: this._id,}).then((likes) => {
            this._likeCard(likes);
        });
    }
    
    _setEventListeners() {
        this._cardElement.querySelector('.button__delete').addEventListener('click', () => {
        const cardItem = this._cardElement.querySelector('.button__delete').closest('.element');
        this._handleDeleteClick(cardItem);
        });
        this._cardElement.querySelector('.element__image').addEventListener('click', () => this._handleCardClick({
            name: this._name,
            link: this._link
        }));
        const likeButton = this._cardElement.querySelector('.button__like');
        likeButton.addEventListener('click', () => this._handleCardLikeClick(likeButton),
        );
    }
    
    generateCard() {
        this._cardElement = this._getTemplate();
        this._cardImage = this._cardElement.querySelector('.element__image');
        this._cardImage.style.backgroundImage = `url(${this._link})`;
        this._cardElement.querySelector('.element__image').alt = this._name;
        this._cardElement.querySelector('.element__title').textContent = this._name;
        this._cardElement.querySelector('.element__likes').textContent = this._likes.length;
        
        if (this._owner === this._user) {
            this._cardElement.querySelector('.button__delete').classList.remove('button__delete_hidden');
        }
        
        if (this._userLikedCard) {
            this._cardElement.querySelector('.button__like').classList.add('button__like_status_selected');
        }
        
        this._setEventListeners();

        return this._cardElement;
  }
        
}