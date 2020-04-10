// Find popup and buttons in the DOM
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector(".button__edit");
let closePopupButton = document.querySelector(".popup__close-button");

// popup handler to toggle class to view and close modal
function popupHandler() {
    popup.classList.toggle("popup_opened");
}

// Connect the handler to the buttons:
// it will watch the click event
openPopupButton.addEventListener("click", popupHandler);
closePopupButton.addEventListener("click", popupHandler);


// Let's find the form in the DOM
let formElement = document.querySelector('.form');

// Next is the form submit handler, though
// it won't submit anywhere just yet
function formSubmitHandler (evt) {
    
    evt.preventDefault(); // This line stops the browser from submitting the form in the default way.
                                                // Having done so, we can define our own way of submitting the form.
                                                // We'll explain it in more detail later.
    // Let's find the form fields in the DOM
    let nameInput = formElement.querySelector('.form__input_type_name'); 
    let jobInput = formElement.querySelector('.form__input_type_about'); 
    
    // Get the values of each field from the corresponding value property
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    // Select elements where the field values will be entered
    let name = document.querySelector('.profile__name'); 
    let job = document.querySelector('.profile__about-me');
    
    //Alert messages for missing fields
    //Thank you I added required attribute to the inputs :).
    if (nameValue.length===0){
        alert('Name field is required');
    } 
    else if (jobValue.length===0){
        alert("About Me field is required");
    } 
    else {
        // Insert new values using the textContent property of the querySelector() method
        name.textContent = nameValue;
        job.textContent = jobValue;
        popup.classList.toggle("popup_opened");
    };    
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', formSubmitHandler);