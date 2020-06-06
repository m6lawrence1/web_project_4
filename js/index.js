import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { popupHandler } from './utils.js';

/***************** 
 Profile Variables
******************/
//containers
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const profileForm = editProfilePopup.querySelector('.form');
//buttons
const editProfileButton = document.querySelector('.button__edit');
const editProfileClosePopupButton = editProfilePopup.querySelector('.popup__close-button');
//form
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
const profileNameInput = document.querySelector('.form__input_type_name');
const profileAboutMeInput = document.querySelector('.form__input_type_about');
/***************** 
 Card Variables
******************/
//containers
const addCardPopup = document.querySelector('.popup_type_add-place');
const addCardForm = addCardPopup.querySelector('.form');
const cardsContainer = document.querySelector(".elements__container"); 
//buttons
const addCardButton = document.querySelector('.button__add');
const addCardClosePopupButton = addCardPopup.querySelector(".popup__close-button");
//array
const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];
/***********************
 Image Popup Variables
***********************/
//container
const imgCardPopup = document.querySelector('.popup_type_image');
//button
const imgCardClosePopupButton = imgCardPopup.querySelector(".popup__close-button");
/***************** 
 Form Variables
******************/
//object
const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active"
};
//array
const formList = Array.from(document.querySelectorAll(settings.formSelector));

/********************************
    Initialize and Render Cards
*********************************/
function renderCard(card){
    const cardElement = new Card(card, '#element');
    //add the card element to the DOM, call createCard function
    cardsContainer.prepend(cardElement.generateCard()); 
}

initialCards.forEach(card => { 
    renderCard(card);
});
/*******************************
    Initialize Form Validation
********************************/
formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      // Cancel default behavior for each form
      evt.preventDefault();
    });
    const newFormValidator = new FormValidator(settings, formElement);
    newFormValidator.enableValidation();
});

/*********************** 
        Handlers 
***********************/
function profileFormSubmitHandler(evt){
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileAboutMe.textContent = profileAboutMeInput.value;
    popupHandler(editProfilePopup);
}

function addCardFormSubmitHandler(evt){
    evt.preventDefault();
    // Call our function to get the form data.
    const data = Object.fromEntries(new FormData(addCardForm));
    //close the popup 
    popupHandler(addCardPopup);
    //call render function to pass through data to create new card
    renderCard(data);
    //reset the form after submit
    addCardForm.reset(); 
}

/*********************** 
    Event Listeners 
***********************/
//close popups by clicking on overlay
document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains('popup')) {
    popupHandler(evt.target);
    evt.preventDefault();
  }
});
//close popups on escape
document.addEventListener("keydown", (evt) => {
    const popup = document.querySelector('.popup_opened');
    if (evt.key === "Escape" && popup) {
        const popup = document.querySelector('.popup_opened');
        popup.classList.remove('popup_opened');
    }
});
//profile
profileForm.addEventListener('submit', profileFormSubmitHandler);
editProfileButton.addEventListener("click", () => {
    popupHandler(editProfilePopup);
    profileNameInput.value = profileName.innerText;
    profileAboutMeInput.value = profileAboutMe.innerText;
    const formResetErrors = new FormValidator(settings, profileForm);
    formResetErrors.resetErrorMsgsOnPopup();
});
editProfileClosePopupButton.addEventListener('click', () => popupHandler(editProfilePopup));
//card
addCardForm.addEventListener('submit', addCardFormSubmitHandler);
addCardButton.addEventListener("click", () => {
    popupHandler(addCardPopup);
    const formResetErrors = new FormValidator(settings, addCardForm);
    formResetErrors.resetErrorMsgsOnPopup();
});
addCardClosePopupButton.addEventListener("click", () => {
    popupHandler(addCardPopup);
    addCardForm.reset();
});
//img popup
imgCardClosePopupButton.addEventListener("click", () => popupHandler(imgCardPopup));