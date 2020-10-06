const addCardModal = document.querySelector('.popup_type_add-card');
const editProfileModal = document.querySelector('.popup_type_edit-profile');
const imageOpenModal = document.querySelector('.popup_type_image');

export const imagePopup = imageOpenModal.querySelector('.popup__image');
export const imageCaption = imageOpenModal.querySelector('.popup__image-caption');

//wrappers
export const addCardForm = addCardModal.querySelector('.popup__form');
export const editProfileForm = editProfileModal.querySelector('.popup__form');


// form buttons
export const addCardButton = document.querySelector('.add-button');
export const editProfileButton = document.querySelector('.profile__edit');

// form inputs
export const nameInput = document.querySelector('.form__input_type_name');
export const descriptionInput = document.querySelector('.form__input_type_description');
export const cardNameInput = document.querySelector('.form__input_type_card-title');
export const cardUrlInput = document.querySelector('.form__input_type_card-url');

//other DOM elements
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');

export const defaultSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};
