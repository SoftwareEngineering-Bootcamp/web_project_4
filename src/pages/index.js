import  "./index.css";
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Section from '../components/Section';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';
import { initialCards, defaultSettings } from '../utils/utils';


//instances of form validator for edit-profile and add-card
const addCardValidator = new FormValidator(defaultSettings, '.form_add-card');
const editFormValidator = new FormValidator(defaultSettings, '.form_edit-profile');

//preview a photo
const imageOpenModal = new PopupWithImage('.popup_type_image');

//instance of section class
const defaultCardList = new Section(
  {
    item: initialCards,
    renderer: (item) => {
      const card = item
        ? new Card({name, link, handleCardClick: () => imageOpenModal.open(name, link)},'.element')
        : new Card({
            name: title,
            link: imageLink,
            handleCardClick: () => imageOpenModal.open(title, imageLink)
          },
          '.element'
        );
      // //create instances of card
      // const card = new Card(
      //   {
      //     name,
      //     link,
      //     handleCardClick: () => imageOpenModal.open(name, link)
      //   },
      //   '.element'
      // );

      const cardElement = card.getCardElements();
      defaultCardList.addItem(cardElement);
    },
  },
  '.elements__list'
);

//add-card to gallery form
const addCardModal = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  handleFormSubmit: ({title, imageLink}) => {
    // const cardElement = addedCard.getCardElements();
    // defaultCardList.addItem(cardElement);
  }
});

const profile = new UserInfo(".form__input_type_name", ".form__input_type_description");
profile.getUserInfo();

//edit-profile form
const editProfileModal = new PopupWithForm({
  popupSelector: ".popup_type_edit-profile",
  handleFormSubmit: () => {
    profile.setUserInfo();
  },
});

// add listeners for edit-icon and add-icon
document.querySelector('.add-button').addEventListener('click', () => addCardModal.open());
document.querySelector('.profile__edit').addEventListener('click', () => editProfileModal.open());

//render cards to the page
defaultCardList.rendererItems();

//set event listeners on popup
addCardModal.setEventListeners();
editProfileModal.setEventListeners();
imageOpenModal.setEventListeners();

//validate forms (edit-profile and add-card)
addCardValidator.enableValidation();
editFormValidator.enableValidation();
