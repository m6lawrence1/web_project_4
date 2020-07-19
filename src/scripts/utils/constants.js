//containers
const cardListSection = ".elements__container";
const avatarPopup = document.querySelector('.popup_type_avatar');
const avatarForm = avatarPopup.querySelector('.form');
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const profileForm = editProfilePopup.querySelector('.form');
const addCardPopup = document.querySelector('.popup_type_add-place');
const addCardForm = addCardPopup.querySelector('.form');
//form
const profileNameInput = document.querySelector('.form__input_type_name');
const profileAboutMeInput = document.querySelector('.form__input_type_about');
//buttons
const editAvatarButton = document.querySelector('.button__avatar');
const editProfileButton = document.querySelector('.button__edit');
const addCardButton = document.querySelector('.button__add');
const EscapeKey = 27;

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


export { cardListSection, 
         editAvatarButton,
         avatarForm,
         profileForm, 
         addCardForm, 
         editProfileButton, 
         addCardButton,  
         settings, 
         initialCards, 
         formList,
         profileNameInput,
         profileAboutMeInput,
         EscapeKey
}
