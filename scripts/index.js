import  "./index.css";
import Card from './Card';
import FormValidator from './FormValidator';
import Section from './Section';
import UserInfo from './UserInfo';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import { defaultSettings } from './utils';

import yosemiteImage from "../images/element_yosemite.png";
import lakeLouiseImage from "../images/element_lake-louise.png"
import baldMountainsImage from "../images/element_bald-mountains.png";
import latemarImage from "../images/element_latemar.png";
import vanoiseParkImage from "../images/element_vanoise.png";
import lagoDiBraiesImage from "../images/element_lago-di-braies.png";


//initial values of cards in gallery
const initialCards = [
  { name: "Yosemite Valley", link: yosemiteImage },
  { name: "Lake Louise", link: lakeLouiseImage },
  { name: "Bald Mountains", link: baldMountainsImage },
  { name: "Latemar", link: latemarImage  },
  { name: "Vanoise National Park", link: vanoiseParkImage },
  { name: "Lago di Braies", link: lagoDiBraiesImage }
];

//instances of form validator for edit-profile and add-card
const addCardValidator = new FormValidator(defaultSettings, '.form_add-card');
const editFormValidator = new FormValidator(defaultSettings, '.form_edit-profile');

//preview a photo
const imageOpenModal = new PopupWithImage('.popup_type_image');

//instance of section class
const defaultCardList = new Section(
  {
    item: initialCards,
    renderer: ({name, link}) => {
      //create instances of card
      const card = new Card(
        {
          name,
          link,
          handleCardClick: () => imageOpenModal.open(name, link)
        },
        '.element'
      );

      const cardElement = card.getCardElements();
      defaultCardList.addItem(cardElement);
    },
  },
  '.elements__list'
);

//add-card to gallery form
const addCardModal = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  handleFormSubmit: ({name, link}) => {
    const addedCard = new Card(
    {
      name,
      link,
      handleCardClick: () => imageOpenModal.open(name, link)
    },
    '.element');

    const cardElement = addedCard.getCardElements();
    defaultCardList.addItem(cardElement);
  }
});

//edit-profile form
const editProfileModal = new PopupWithForm({
  popupSelector: '.popup_type_edit-profile',
  handleFormSubmit: () => {
    const profile = new UserInfo(
      { nameInput: '.form__input_type_name' },
      { descriptionInput: 'form__input_type_description' }
    );
    profile.getUserInfo();
    profile.setUserInfo();
  }
});

// add listeners for edit-icon and add-icon
document.querySelector('.profile__edit').addEventListener('click', () => editProfileModal.open());
document.querySelector('.add-button').addEventListener('click', () => addCardModal.open());

//render cards to the page
defaultCardList.rendererItems();

//set event listeners on popup
editProfileModal.setEventListeners();
addCardModal.setEventListeners();
imageOpenModal.setEventListeners();

//validate forms (edit-profile and add-card)
addCardValidator.enableValidation();
editFormValidator.enableValidation();
