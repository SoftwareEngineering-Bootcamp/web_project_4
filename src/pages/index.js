import  "./index.css";
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Section from '../components/Section';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';
import { initialCards, defaultSettings, descriptionInput, nameInput, profileName, profileDescription } from '../utils/utils';


//instances of form validator for edit-profile and add-card
const addCardValidator = new FormValidator(defaultSettings, '.form_add-card');
const editFormValidator = new FormValidator(defaultSettings, '.form_edit-profile');

//preview a photo
const imageOpenModal = new PopupWithImage('.popup_type_image');

//instances of card
const addCard = ({name, link}) => {
  const card = new Card(
    { name,
      link,
      handleCardClick: () => imageOpenModal.open(name, link)
    },
    '.element'
  );

  const cardElement = card.getCardElements();
  defaultCardList.addItem(cardElement);
}

//instance of section class
const defaultCardList = new Section(
  {
    item: initialCards,
    renderer: ({name, link}) => addCard({name, link})
  },
  '.elements__list'
);

//add-card to gallery form
const addCardModal = new PopupWithForm({
  popupSelector: ".popup_type_add-card",
  handleFormSubmit: ({name, link}) => addCard({name, link})
});

const profile = new UserInfo(profileName, profileDescription);

//edit-profile form
const editProfileModal = new PopupWithForm({
  popupSelector: ".popup_type_edit-profile",
  handleFormSubmit: () => {
    profile.setUserInfo(nameInput, descriptionInput);

    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
  }
});

// add listeners for edit-icon and add-icon
document.querySelector('.add-button').addEventListener('click', () => addCardModal.open());
document.querySelector('.profile__edit').addEventListener('click', () => {
  editProfileModal.open();
  profile.getUserInfo();

  const userInfos = profile.getUserInfo();
  nameInput.value = userInfos.name;
  descriptionInput.value = userInfos.job;
});

//render cards to the page
defaultCardList.rendererItems();

//set event listeners on popup
addCardModal.setEventListeners();
editProfileModal.setEventListeners();
imageOpenModal.setEventListeners();

//validate forms (edit-profile and add-card)
addCardValidator.enableValidation();
editFormValidator.enableValidation();
