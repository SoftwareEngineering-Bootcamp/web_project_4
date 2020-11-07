import Api from '../components/Api';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import Section from '../components/Section';
import UserInfo from '../components/UserInfo';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';
import { defaultSettings, profileConfig, cardsConfig, popupConfig, initialCards, popupEditAvatar, popupDeleteCard,
  descriptionInput, nameInput, likeButton, submitButton } from '../utils/constants';

import  "./index.css";

/** TODO
 *  Code popup to confirm card deletion
 *  Show numbers of likes on each cards of the page
 *
 */

const loading = (isLoading) => {
  if(isLoading) {
    submitButton.textContent = "Saving...";
  } else {
    submitButton.textContent = "Save";
  }
}

const creating = (isCreating) => {
  if(isCreating) {
    submitButton.textContent = "Creating...";
  } else {
    submitButton.textContent = "Create";
  }
}

const deleting = (isDeleting) => {
  if(isDeleting) {
    submitButton.textContent = "Deleting...";
  } else {
    submitButton.textContent = "Deleted!";
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
        creating(true);
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
          imageOpenModal.open(data.name, data.link)
        },
        handleDeleteClick: (cardId) => {
          //open form to ask user's confirmation to delete card
          deleteCardModal.open(cardId);
          popupDeleteCard.querySelector('.form__submit').textContent = "Yes";
          //handle click on submit button
          deleteCardModal.setSubmitHandler(() => {
            deleting(true);
            //remove the card
            api.removeCard(cardId)
              .then(() => {
                card.deleteCard();
                deleting(false);
                deleteCardModal.close();
              })
              .catch(err => console.log(err));
          });
        },
        handleLikeClick: (cardId) => {
          const isLiked = card.querySelector('.element__like').classList.contains('element__like_active');
          console.log(isLiked)
          if(isLiked) {
            card.querySelector('.element__like').classList.remove('element__like_active');
            api.removeCardLike(cardId)
              .then(res => card.likesCount(res.likes.length))
              .catch(err => console.log(err))
          } else {
            card.querySelector('.element__like').classList.add('element__like_active');
            api.addCardLike(cardId)
              .then(res => card.likesCount(res.likes.length))
              .catch(err => console.log(err))
          }
        }
      }, userData._id, cardsConfig.cardSelector);

      defaultCardList.addItem(card.getCardElements());
      creating(false);

      const profile = new UserInfo({
        userNameSelector: profileConfig.profileName,
        userDescriptionSelector: profileConfig.profileDescription
      });
      //set user infos(name and job) on profile section on page launch
      profile.setUserInfo({userName: userData.name, userDescription: userData.about});
      popupEditAvatar.src = userData.avatar;

      //edit-profile form
      const editProfileModal = new PopupWithForm({
        popupSelector: popupConfig.editFormModal,
        handleFormSubmit: (data) => {
          loading(true);
          api.getUserInfo({name: data.name, about: data.about})
            .then(() => {
              profile.setUserInfo({userName: data.name, userDescription: data.about});
              console.log(profile);
              loading(false);
            })
            .then(() => {
              // loading(false);
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
    loading(true);
    api.setUserAvatar({
      avatar: data.src
    })
      .then(res => {
        loading(false);
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
