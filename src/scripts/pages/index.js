import '../../pages/index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {cardListSection,
        avatarForm,
        editAvatarButton,
        profileForm, 
        addCardForm, 
        editProfileButton, 
        addCardButton,   
        settings, 
        formList } 
from '../utils/constants.js';

//API 
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-1",
  headers: {
    authorization: "59b76db9-8593-4042-9d89-647c9c96a94c",
    "Content-Type": "application/json"
  }
});

/*********************** 
        Handlers 
***********************/
function handleCardClick(data) {
  imagePopup.open(data);
}

function handleCardLikeBtnClick({ cardIsLiked, _id }) {
    return api.updateLike({cardIsLiked, _id}).then((card) => {
        return card.likes;
    }); 
}

function addCardFormSubmitHandler(evt){
    api.addCard({name: evt.name, link: evt.link,})
    .then((card) => {
        //when I removed evt I got errors saying owner was not defined so I change it from "evt" to "card" 
        cardsList.addItem(renderCard({...card, owner: card.owner._id, likes: card.likes, _id: card._id, handleDeleteClick: () =>
        deleteCardFormPopup.open({ _id: cardItem._id })}));
        addCardFormPopup.close();
        addCardFormPopup.rendering(false);
    })
}

function avatarFormSubmitHandler(evt){
    api.setUserAvatar({avatar: evt.link})
    .then((link) => {
        profileContent.setUserAvatar({avatar: link.avatar});
        editAvatarFormPopup.close();
        editAvatarFormPopup.rendering(false);
    })
}

function renderCard(cardItem, userId) {
    const userLikedCard = cardItem.likes
    .map((usersLiked) => usersLiked._id)
    .includes(userId);
    const card = new Card(
      {...cardItem, popup: imagePopup, handleCardClick, handleDeleteClick: (item) => {       
        deleteCardFormPopup.open({ _id: card._id, element: item}, )
        }, userLikedCard, userId, handleCardLikeBtnClick} , '#element'
    );
    //sorry I think I had misunderstood what you originally stated about the shared variables. I was able to find a simple way to remove the element and using "item" now. I did ask for help and it seems like some other people did use shared variable.  
    return card.generateCard();
}

function deleteCardFormSubmitHandler(cardItem){
    return api.deleteCard({_id: cardItem._id}).then(() => {
        cardItem.element.remove();
        deleteCardFormPopup.close();
        deleteCardFormPopup.rendering(false);
  });
}

function profileFormSubmitHandler(evt){
    api.setUserProfile({name: evt.name, about: evt.about})
        .then(() => {
        profileContent.setUserInfo(evt);
        editProfileFormPopup.close(); 
        editProfileFormPopup.rendering(false);
    })
}
/*********************** 
    Class Instances 
***********************/
 //Set Profile Info
const profileContent = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about-me',
  avatarSelector: '.profile__avatar',
});

//Initiate Edit Profile Form 
const editAvatarFormPopup = new PopupWithForm(
  avatarFormSubmitHandler,
  '.popup_type_avatar', 'Saving...',
);

//Initiate Delete Card Form 
const deleteCardFormPopup = new PopupWithForm(
    deleteCardFormSubmitHandler, 
  '.popup_type_delete', 'Deleting...'
);

//Initiate Edit Profile Form 
const editProfileFormPopup = new PopupWithForm(
  profileFormSubmitHandler,
  '.popup_type_edit-profile','Saving...'
);

//Initiate Add Card Form 
const addCardFormPopup = new PopupWithForm(
  addCardFormSubmitHandler,
  '.popup_type_add-place', 'Saving...'
);

//Set Image Popup
const imagePopup = new PopupWithImage('.popup_type_image');

// create section
const cardsList = new Section({
  items: [], renderer: () => {
  }
}, cardListSection);

api.getAppInfo().then(([initialCards, userProfile]) => {
    const userId = userProfile._id;
    //initialize card list
    initialCards.forEach((cardItem) => {
        cardsList.addItem(renderCard(cardItem, userId));
    })
    //get profile info
    profileContent.setUserInfo({name: userProfile.name, about: userProfile.about})
    profileContent.setUserAvatar({avatar: userProfile.avatar,})
})

//Form Validation
formList.forEach((formElement) => {
    const newFormValidator = new FormValidator(settings, formElement);
    newFormValidator.enableValidation();
});

const formResetErrors = new FormValidator(settings);
/*********************** 
    Event Listeners 
***********************/
deleteCardFormPopup.setEventListeners();
imagePopup.setEventListeners();
editAvatarFormPopup.setEventListeners();
editAvatarButton.addEventListener("click", () =>{
    editAvatarFormPopup.open();
    formResetErrors.resetErrorMsgsOnPopup(avatarForm);
});

editProfileFormPopup.setEventListeners();
editProfileButton.addEventListener("click", () => {
    profileContent.getUserInfo();
    editProfileFormPopup.open(); 
    formResetErrors.resetErrorMsgsOnPopup(profileForm);
});

addCardFormPopup.setEventListeners();
addCardButton.addEventListener("click", () => {
    addCardFormPopup.open();
    formResetErrors.resetErrorMsgsOnPopup(addCardForm);
});