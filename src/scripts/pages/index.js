import '../../pages/index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {cardListSection, 
        profileForm, 
        addCardForm, 
        editProfileButton, 
        addCardButton, 
        settings, 
        initialCards, 
        formList } 
from '../utils/constants.js';
/*********************** 
        Handlers 
***********************/
function handleCardClick(data) {
  imagePopup.open(data);
}

function renderCard(cardItem) {
  const card = new Card(
      {...cardItem, popup: imagePopup, handleCardClick}, '#element'
  );
  return card.generateCard();
}

function addCardFormSubmitHandler(evt){
    //call renderCard function to pass through evt data to create new card
    cardsList.addItem(renderCard(evt));
}

function profileFormSubmitHandler(name, about){
    profileContent.setUserInfo(name, about);
}
/*********************** 
    Class Instances 
***********************/
//Set Profile Info
const profileContent = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about-me'
});

//Initiate Edit Profile Form 
const editProfileFormPopup = new PopupWithForm(
  profileFormSubmitHandler,
  '.popup_type_edit-profile',
);

//Initiate Add Card Form 
const addCardFormPopup = new PopupWithForm(
  addCardFormSubmitHandler,
  '.popup_type_add-place',
);

//Set Image Popup
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

//initialize card list
const cardsList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
        const card = renderCard(cardItem);
        // Insert the markup on the page
        // using the addItem() method of the Section() class
        cardsList.addItem(card);
    },
  },
  cardListSection
);
cardsList.renderItems();

//Form Validation
formList.forEach((formElement) => {
    const newFormValidator = new FormValidator(settings, formElement);
    newFormValidator.enableValidation();
});

const formResetErrors = new FormValidator(settings);
/*********************** 
    Event Listeners 
***********************/
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