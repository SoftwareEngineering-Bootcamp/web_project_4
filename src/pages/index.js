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
function addCard() {
  const card = new Card(
    { name,
      link,
      handleCardClick: () => imageOpenModal.open(name, link)
    },
    '.element'
  );

  const cardElement = card.getCardElements();

  return cardElement;
}

//instance of section class
const defaultCardList = new Section(
  {
    item: initialCards,
    renderer: ({name, link}) => {
      //create instances of card
      const card = () => {
        addCard(name, link)
      }

      defaultCardList.addItem(card);
    }
  },
  '.elements__list'
);

//add-card to gallery form
const addCardModal = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  handleFormSubmit: ({title, imageLink}) => {
    const addedCard = () => {
      addCard({name: title}, {link: imageLink})
    }

    defaultCardList.addItem(addedCard);
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
document.querySelector('.profile__edit').addEventListener('click', () => {
  descriptionInput.value = profileDescription.textContent;
  nameInput.value = profileName.textContent;
  editProfileModal.open();
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
