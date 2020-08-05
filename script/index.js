//wrappers
const addCardModal = document.querySelector('.popup_type_add-card');
const editProfileModal = document.querySelector('.popup_type_edit-profile');
const imageOpenModal = document.querySelector('.popup_type_image');

//open buttons
const addCardButton = document.querySelector('.add-button');
const editProfileButton = document.querySelector('.profile__edit');

//close buttons
const closeAddCardForm = addCardModal.querySelector('.form__close-button');
const closeEditProfile = editProfileModal.querySelector('.form__close-button');
const closePopupImage = imageOpenModal.querySelector('.popup__close');

//form inputs
const nameInput = document.querySelector('.form__input_type_name');
const descriptionInput = document.querySelector('.form__input_type_description');

//other DOM elements
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

/* JS code for profile edit */
//function to open both edit profile popup and add card popup
function toggleForm(modal) {
  modal.classList.toggle('popup_open');
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  toggleForm(editProfileModal);
}

editProfileButton.addEventListener('click', () => {
  //copy profile-name and profile-description into form fields
  if(!editProfileModal.classList.contains('popup_open')) {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
  toggleForm(editProfileModal);
});
closeEditProfile.addEventListener('click', () => {
  toggleForm(editProfileModal);
});

editProfileModal.addEventListener('submit', formSubmitHandler);
/* End of JS code for profile edit */


/* JS Code for add button */

addCardButton.addEventListener('click', () => {
  toggleForm(addCardModal);
});

closeAddCardForm.addEventListener('click', () => {
  toggleForm(addCardModal);
});

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const cardTemplate = document.querySelector('.element').content.querySelector('.element__item');
const cardList = document.querySelector('.elements__list');

initialCards.forEach(data => {
  const cardElement = cardTemplate.cloneNode(true);

  //create card
  const cardImage = cardElement.querySelector('.element__photo');
  const cardName = cardElement.querySelector('.element__name');
  const cardLikeButton = cardElement.querySelector('.element__like');
  const cardDeleteButton = cardElement.querySelector('.element__delete');

  cardName.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;
  //cardImage.src = data.link;
  cardImage.style.backgroundSize = "cover";

  cardLikeButton.addEventListener('click', () => {
    //change like button style on click
  })

  cardDeleteButton.addEventListener('click', () => {
    //delete a card on click
  })


  //open a photo on full-screen on click
  cardImage.addEventListener('click', () => {
    const imagePopup = imageOpenModal.querySelector('.popup__image');
    const imageCaptionPopup = imageOpenModal.querySelector('.popup__image-caption');

    imagePopup.src = data.link;
    imageCaptionPopup.textContent = data.name;
    toggleForm(imageOpenModal);

    // close a popup image
  closePopupImage.addEventListener('click', () => {
    toggleForm(imageOpenModal);
  });
  });


  cardList.prepend(cardElement);
});
