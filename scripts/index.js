import FormValidator from './FormValidator.js';
import Card from './Card.js';
import {imageOpenModal, handleOpenModal, handleCloseModal} from './utils.js';

const defaultSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

//wrappers
const addCardModal = document.querySelector('.popup_type_add-card');
const editProfileModal = document.querySelector('.popup_type_edit-profile');
const addCardForm = addCardModal.querySelector('.popup__form');
const editProfileForm = editProfileModal.querySelector('.popup__form');

//instances of form validator
const addCardValidator = new FormValidator(defaultSettings, addCardForm);
const editFormValidator = new FormValidator(defaultSettings, editProfileForm);

addCardValidator.enableValidation();
editFormValidator.enableValidation();

//initial values of cards in gallery
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
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];


//open form buttons
const addCardButton = document.querySelector('.add-button');
const editProfileButton = document.querySelector('.profile__edit');

//form inputs
const nameInput = document.querySelector('.form__input_type_name');
const descriptionInput = document.querySelector('.form__input_type_description');
const cardNameInput = document.querySelector('.form__input_type_card-title');
const cardUrlInput = document.querySelector('.form__input_type_card-url');

//other DOM elements
const addForm = document.forms.add;
const cardList = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

/*functions*/

//save user input on edit profile
const editFormSubmitHandler = (event) => {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  handleCloseModal(editProfileModal);
};
//save user input on edit profile
const cardFormSubmitHandler = (event) => {
  event.preventDefault();
  const addedCard = new Card(
    {name: cardNameInput.value,
    link: cardUrlInput.value}, '.element');

  cardList.prepend(addedCard.getCardElements());
  addForm.reset();
  handleCloseModal(addCardModal);
}

/* handle user interactions */

addCardModal.addEventListener('submit', cardFormSubmitHandler);
editProfileModal.addEventListener('submit', editFormSubmitHandler);

addCardButton.addEventListener('click', () => {
  handleOpenModal(addCardModal);
});
editProfileButton.addEventListener('click', () => {
  //copy profile-name and profile-description into form fields
  if(!editProfileModal.classList.contains('popup_open')) {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
  handleOpenModal(editProfileModal);
});

//close modal with click on overlay or close button
addCardModal.addEventListener('click', (event) => {
  if(event.target.classList.contains('popup') || event.target.classList.contains('form__close-button')) {
    handleCloseModal(addCardModal);
  }
});
editProfileModal.addEventListener('click', (event) => {
  if(event.target.classList.contains('popup') || event.target.classList.contains('form__close-button')) {
    handleCloseModal(editProfileModal);
  }
});
imageOpenModal.addEventListener('click', (event) => {
  if(event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
    handleCloseModal(imageOpenModal);
  }
});


//create instances for each of thef first 6 cards and render them to gallery
initialCards.forEach((data) => {
  const initialCard = new Card(
    {name: data.name,
    link: data.link}, '.element');

  cardList.prepend(initialCard.getCardElements());
});
