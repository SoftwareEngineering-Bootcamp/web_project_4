import "../page/index.css";
import yosemiteImage from "../images/element_yosemite.png";
import lakeLouiseImage from "../images/element_lake-louise.png"
import baldMountainsImage from "../images/element_bald-mountains.png";
import latemarImage from "../images/element_latemar.png";
import vanoiseParkImage from "../images/element_vanoise.png";
import lagoDiBraiesImage from "../images/element_lago-di-braies.png";

import Card from './Card';
import FormValidator from './FormValidator';
import Section from './Section.js';
import UserInfo from './UserInfo';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

import * as constant from './utils';


// import {imageOpenModal, handleOpenModal, handleCloseModal} from './utils.js';

//initial values of cards in gallery
const initialCards = [
  { name: "Yosemite Valley", link: yosemiteImage },
  { name: "Lake Louise", link: lakeLouiseImage },
  { name: "Bald Mountains", link: baldMountainsImage },
  { name: "Latemar", link: latemarImage  },
  { name: "Vanoise National Park", link: vanoiseParkImage },
  { name: "Lago di Braies", link: lagoDiBraiesImage }
];

//instances of form validator
const addCardValidator = new FormValidator(constant.defaultSettings, constant.addCardForm);
const editFormValidator = new FormValidator(constant.defaultSettings, constant.editProfileForm);

addCardValidator.enableValidation();
editFormValidator.enableValidation();

//instance of section class
const defaultCardList = new Section({
  item: initialCards,
  renderer: () => {
    //create instances of card
    const card = new Card(
      {
        data: initialCards,
        handleCardClick: () => {
          imageOpenModal.open(link, name);
        }
      }, '.element'
    );

    const cardElement = card.getCardElements();
    defaulCardList.addItem(cardElement);
  },
},  'element__list');

defaultCardList.rendererItems();

/* this section needs to be completed */
//edit-profile form
const editProfileModal = new PopupWithForm('.popup_type_edit-profile');
editProfileModal.setEventListeners();

//add-card to gallery
const addCardModal = new PopupWithForm('.popup_type_add-card');
addCardModal.setEventListeners();

//preview a photo
const imageOpenModal = new PopupWithImage('.popup_type_image');
imageOpenModal.setEventListeners();


