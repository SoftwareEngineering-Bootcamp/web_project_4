import Api from '../components/Api';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Section from '../components/Section';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';
import { defaultSettings, profileConfig, cardsConfig, popupConfig, initialCards,
  popupAddCard, popupEditAvatar, popupEditProfile, popupImage, popupDeleteCard, descriptionInput, nameInput, likeButton } from '../utils/constants';

import  "./index.css";

/** TODO
 *  Code popup to confirm card deletion
 *  Show numbers of likes on each cards of the page
 *
 */

const loadingCard = (isLoading, popup) => {
  if(isLoading) {
    popup.querySelector('.form__submit').textContent = "Saving...";
  } else {
    popup.querySelector('.form__submit').textContent = "Save";
  }
}

const creatingCard = (isCreating, popup) => {
  if(isCreating) {
    popup.querySelector('.form__submit').textContent = "Creating...";
  } else {
    popup.querySelector('.form__submit').textContent = "Create";
  }
}

const deletingCard = (isDeleting, popup) => {
  if(isDeleting) {
    popup.querySelector('.form__submit').textContent = "Deleting...";
  } else {
    popup.querySelector('.form__submit').textContent = "Deleted!";
  }
}

// delete a card
const deleteCardModal = new PopupWithForm({
  popupSelector: popupConfig.deleteCard
});
//preview a photo
const imageOpenModal = new PopupWithImage(popupConfig.expandImageModal);

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-5",
  headers: {
    authorization: "a0a03679-4255-43a8-85cb-b4bca24b592e",
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
    );

    //render cards to the page
    defaultCardList.rendererItems();

    //click on add button to add cards to the page
    const addCardModal = new PopupWithForm({
      popupSelector: popupConfig.addCardFormModal,
      handleFormSubmit: (data) => {
        creatingCard(true,popupAddCard);
        api.addCard(data)
          .then(data => {
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
          imageOpenModal.open(data)
        },
        handleDeleteClick: (cardId) => {
          //open form to ask user's confirmation to delete card
          deleteCardModal.open(cardId);
          popupDeleteCard.querySelector('.form__submit').textContent = "Yes";
          //handle click on submit button
          deleteCardModal.setSubmitHandler(() => {
            deletingCard(true, popupDeleteCard);
            //remove the card
            api.removeCard(cardId)
              .then(() => {
                card.deleteCard();
                deletingCard(false, popupDeleteCard);
                deleteCardModal.close();
              })
              .catch(err => console.log(err));
          });
        },
        handleLikeClick: (cardId) => {
          if(cardId.likeButton.classList.contains('element__like_active')) {
            cardId.likeButton.classList.remove('element__like_active');
            api.removeCardLike(cardId)
              .then(res => card.likesCount(res.likes.length))
              .catch(err => console.log(err))
          } else {
            cardId.likeButton.classList.add('element__like_active');
            api.addCardLike(cardId)
              .then(res => card.likesCount(res.likes.length))
              .catch(err => console.log(err))
          }
        }
      }, userData._id, cardsConfig.cardSelector);

      defaultCardList.addItem(card.getCardElements());
      creatingCard(false, popupAddCard);

      const profile = new UserInfo({
        userNameSelector: profileConfig.profileName,
        userDescriptionSelector: profileConfig.profileDescription
      });
      profile.setUserInfo({userName: userData.name, userDescription: userData.about});
      popupEditAvatar.src = userData.avatar;

      //edit-profile form
      const editProfileModal = new PopupWithForm({
        popupSelector: popupConfig.editFormModal,
        handleFormSubmit: (data) => {
          loadingCard(true, popupEditProfile)
          // profile.setUserInfo(data)
           api.getUserInfo()
            .then(res => {
              profile.setUserInfo({userName: data.name, userDescription: data.about});
            })
            .then(res => {
              loadingCard(false, popupEditProfile);
              editProfileModal.close();
            })
            .catch(err => console.log(err))
        }
      });

      // add listeners for edit-icon
      document.querySelector('.profile__edit').addEventListener('click', () => {
        editProfileModal.open();
        const userInfos = profile.getUserInfo();
        nameInput.value = userInfos.name;
        descriptionInput.value = userInfos.job;
      });
      editProfileModal.setEventListeners();
    }
  })
  .catch(err => console.log(err));

const avatarEditButton = document.querySelector('.profile__photo_edit');
function toggleAvatarEdit() {
  avatarEditButton.classList.toggle('popup_open');
}


// edit profile avatar
const editAvatar = new PopupWithForm({
  popupSelector: popupConfig.editAvatarModal,
  handleFormSubmit: (data) => {
    loadingCard(true, popupEditAvatar);
    api.setUserAvatar({
      avatar: data.src
    })
      .then(res => {
        loadingCard(false, popupEditAvatar);
        editAvatar.src = res.avatar;
        editAvatar.close();
      })
      .catch(err => console.log(err))
  }
});
// event listeners to open modal for avatar changing
document.querySelector('.profile__photo_edit').addEventListener('click', () => {
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
