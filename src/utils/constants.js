import yosemiteImage from "../images/element_yosemite.png";
import lakeLouiseImage from "../images/element_lake-louise.png"
import baldMountainsImage from "../images/element_bald-mountains.png";
import latemarImage from "../images/element_latemar.png";
import vanoiseParkImage from "../images/element_vanoise.png";
import lagoDiBraiesImage from "../images/element_lago-di-braies.png";


//initial values of cards in gallery
export const initialCards = [
  { name: "Yosemite Valley", link: yosemiteImage },
  { name: "Lake Louise", link: lakeLouiseImage },
  { name: "Bald Mountains", link: baldMountainsImage },
  { name: "Latemar", link: latemarImage  },
  { name: "Vanoise National Park", link: vanoiseParkImage },
  { name: "Lago di Braies", link: lagoDiBraiesImage }
];

export const defaultSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

export const popupConfig = {
  addCardFormModal: 'popup_type_add-card',
  editAvatarModal: 'popup_type_edit-avatar',
  editFormModal: 'popup_type_edit-profile',
  expandImageModal: 'popup_type_image',
  deleteCard: 'popup_type_delete'
};

export const profileConfig = {
  profileName: 'profile__name',
  profileDescription: 'profile__description'
};

export const cardsConfig = {
  placesWrap: 'elements__list',
  cardSelector: '.element'
};

export const nameInput = document.querySelector('.form__input_type_name');
export const descriptionInput = document.querySelector('.form__input_type_description');
export const likeButton = document.querySelector('.element__like');
export const submitButton = document.querySelector('.form__submit');

export const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
export const popupDeleteCard = document.querySelector('.popup_type_delete');

