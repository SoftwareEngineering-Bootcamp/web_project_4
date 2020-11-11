import Api from '../components/Api';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Section from '../components/Section';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';
import {
  defaultSettings, profileConfig, cardsConfig, popupConfig, avatarImage, avatarPicInput, avatarEditButton,
  descriptionInput, nameInput, submitAvatar, submitCard, submitEdit, projectId
} from '../utils/constants';

import  "./index.css";


// delete a card
const deleteCardModal = new PopupWithForm({
  popupSelector: popupConfig.deleteCard
});
//preview a photo
const imageOpenModal = new PopupWithImage(popupConfig.expandImageModal);

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-5",
  headers: {
    authorization: projectId,
    "Content-Type": "application/json"
  }
});

api.getAppInfo()
  .then(([userData, initialCards]) => {
    //instance of section class
    const defaultCardList = new Section({
      item: initialCards,
      renderer: addingCardToPage
      },
      cardsConfig.placesWrap
    )
    //render cards to the page
    defaultCardList.rendererItems();

    //click on add button to add cards to the page
    const addCardModal = new PopupWithForm({
      popupSelector: popupConfig.addCardFormModal,
      handleFormSubmit: (data) => {
        submitCard.textContent = "Creating...";
        api.addCard(data)
          .then(data => {
            submitCard.textContent = "Create";
            //instance of card
            addingCardToPage(data);
            addCardModal.close();
          })
          .catch(err => console.log(err))
      }
    });
    addCardModal.setEventListeners();
    document.querySelector('.add-button').addEventListener('click', () => addCardModal.open());

    function addingCardToPage(data) {
      const card = new Card({
        data,
        handleCardClick: () => {
          imageOpenModal.open(data.name, data.link)
        },
        handleDeleteClick: (cardId) => {
          //open form to ask user's confirmation to delete card
          deleteCardModal.open(cardId);
          //handle click on submit button
          deleteCardModal.setSubmitHandler(() => {
            //remove the card
            api.removeCard(cardId)
              .then(() => {
                card.deleteCard();
                deleteCardModal.close();
              })
              .catch(err => console.log(err));
          });
        },
        handleLikeClick: (cardId) => {
          const isLiked = card._element.querySelector('.element__like').classList.contains('element__like_active');
          if(isLiked) {
            card._element.querySelector('.element__like').classList.remove('element__like_active');
            api.removeCardLike(cardId)
              .then(res => card.likesCount(res.likes.length))
              .catch(err => console.log(err))
          } else {
            card._element.querySelector('.element__like').classList.add('element__like_active');
            api.addCardLike(cardId)
              .then(res => {
                return card.likesCount(res.likes.length)
              })
              .catch(err => console.log(err))
          }
        }
      }, userData._id, cardsConfig.cardSelector);

      defaultCardList.addItem(card.getCardElements());
    }

    const profile = new UserInfo({
      userNameSelector: profileConfig.profileName,
      userDescriptionSelector: profileConfig.profileDescription
    });
    //set user infos(name and job) on profile section on page launch
    profile.setUserInfo({userName: userData.name, userDescription: userData.about});

    //edit-profile form
    const editProfileModal = new PopupWithForm({
      popupSelector: popupConfig.editFormModal,
      handleFormSubmit: (data) => {
        submitEdit.textContent = "Saving...";
        api.setUserInfos({
          name: data.name,
          about: data.about
        })
          .then(() => {
            submitEdit.textContent = "Save";
            profile.setUserInfo({
              userName: data.name,
              userDescription: data.about
            });
          })
          .then(() => {
            editProfileModal.close();
          })
          .catch(err => console.log(err))
      }
    });

    // add listeners for edit-icon
    document.querySelector('.profile__edit').addEventListener('click', () => {
      editProfileModal.open();
      const userInfos = profile.getUserInfo();
      nameInput.value = userInfos.userName;
      descriptionInput.value = userInfos.userDescription;
    });
    editProfileModal.setEventListeners();

    //retrieve user avatar
    avatarImage.src = userData.avatar;
  })
  .catch(err => console.log(err));


// edit profile avatar
const editAvatar = new PopupWithForm({
  popupSelector: popupConfig.editAvatarModal,
  handleFormSubmit: (data) => {
    submitAvatar.textContent = "Saving...";
    api.setUserAvatar({
      avatar: data.link
    })
      .then(() => {
        submitAvatar.textContent = "Save";
        avatarImage.src = data.link;
        editAvatar.close();
      })
      .catch(err => console.log(err));
  }
});

// event listeners to open avatar changing modal
avatarEditButton.addEventListener('click', () => {
  avatarPicInput.value = avatarImage.src;
  editAvatar.open();
});


//instances of form validator for edit-profile and add-card
const addCardValidator = new FormValidator(defaultSettings, '.form_add-card');
const editAvatarValidator = new FormValidator(defaultSettings, '.form_edit-avatar');
const editFormValidator = new FormValidator(defaultSettings, '.form_edit-profile');

//set event listeners on popups
editAvatar.setEventListeners();
deleteCardModal.setEventListeners();
imageOpenModal.setEventListeners();

//validate forms (edit-profile and add-card)
addCardValidator.enableValidation();
editAvatarValidator.enableValidation();
editFormValidator.enableValidation();
