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
    Containers 
******************/
//Profile
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const profileForm = editProfilePopup.querySelector('.form');
//Card
const addCardPopup = document.querySelector('.popup_type_add-place');
const addCardForm = addCardPopup.querySelector('.form');
const cardTemplate = document.querySelector("#element").content;
const cardsContainer = document.querySelector(".elements__container"); //get card elements container to add to
//Img
const imgCardPopup = document.querySelector('.popup_type_image');
const popupImage = document.querySelector(".popup__image");
const popupImageLabel = document.querySelector(".popup__image-label");
/*********************** 
        Buttons 
***********************/
//Profile
const editProfileButton = document.querySelector('.button__edit');
const editProfileClosePopupButton = editProfilePopup.querySelector('.popup__close-button');
//Card
const addCardButton = document.querySelector('.button__add');
const addCardClosePopupButton = addCardPopup.querySelector(".popup__close-button");
//Img
const imgCardClosePopupButton = imgCardPopup.querySelector(".popup__close-button");
/*********************** 
    Form Fields 
***********************/
//Profile
const profileName = document.querySelector('.profile__name');
const profileAboutMe = document.querySelector('.profile__about-me');
const profileNameInput = document.querySelector('.form__input_type_name'); 
const profileAboutMeInput = document.querySelector('.form__input_type_about');
//Card
const formToJSON = elements => [].reduce.call(elements, (data, element) => { 
  data[element.name] = element.value;
  return data;
}, {}); //create object for the input values from the card form.

//popup handler to toggle class to open/close modal
function popupHandler(modal){
    modal.classList.toggle('popup_opened');
}

function profileFormSubmitHandler(evt){
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileAboutMe.textContent = profileAboutMeInput.value;
    popupHandler(editProfilePopup);
}

function addCardFormSubmitHandler(evt){
    evt.preventDefault();
    // Call our function to get the form data.
    const data = formToJSON(addCardForm.elements);
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
profileForm.addEventListener('submit', profileFormSubmitHandler);
addCardForm.addEventListener('submit', addCardFormSubmitHandler);

editProfileButton.addEventListener('click', (evt) => {
    popupHandler(editProfilePopup);
});
editProfileClosePopupButton.addEventListener('click', (evt) => {
    popupHandler(editProfilePopup);
});
addCardButton.addEventListener('click', (evt) => {
   popupHandler(addCardPopup);
});
addCardClosePopupButton.addEventListener('click', (evt) => {
   popupHandler(addCardPopup);
});
imgCardClosePopupButton.addEventListener('click', (evt) => {
   popupHandler(imgCardPopup);
});



function createCard(card){
    
    // clone the content of the template tag
    const cardElement = cardTemplate.cloneNode(true);
      
    // queryselectors to add img, title, and eventlisteners too
    const cardImage = cardElement.querySelector(".element__image");
    const cardTitle = cardElement.querySelector(".element__title");
    const cardLikeButton = cardElement.querySelector(".button__like");
    const cardDeleteButton = cardElement.querySelector(".button__delete");
    
    //add img and title
    cardImage.style.backgroundImage = `url(${card.link})`;
    cardTitle.textContent = card.name;
      
    //add eventlisteners
    cardLikeButton.addEventListener("click", (evt) => { 
        cardLikeButton.closest(".button__like").classList.toggle('button__like_status_selected');
    });
    cardDeleteButton.addEventListener("click", (evt) => {
        cardDeleteButton.closest(".element").remove();
    });
    cardImage.addEventListener("click", (evt) => { 
        popupImage.src = card.link;
        popupImage.alt = card.name;
        popupImageLabel.textContent = card.name;
        popupHandler(imgCardPopup);
    });
    return cardElement;
}


initialCards.forEach(card => { 
    renderCard(card);
  });


function renderCard(card){
    //add the card element to the DOM, call createCard function
    cardsContainer.prepend(createCard(card)); 
}




