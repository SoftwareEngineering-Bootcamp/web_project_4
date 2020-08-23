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
const cardNameInput = document.querySelector('.form__input_type_card-title');
const cardUrlInput = document.querySelector('.form__input_type_card-url');

//other DOM elements
const addForm = document.forms.add;
const cardTemplate = document.querySelector('.element').content.querySelector('.element__item');
const cardList = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

/*functions*/

//open a hidden content in HTML (edit-profile, add-card and expand-a-card)
function openForm(modal) {
  modal.classList.add('popup_open');
  //add listener to hide a popup form by clicking on overlay
  modal.addEventListener('click', (event) => {
    if(event.target === modal) {
      event.target.classList.remove('popup_open');
    }
  });
  //add listener to hide a popup form with ESC key
  window.addEventListener("keydown", (evt) => {
    if(evt.key === "Escape") {
      closeForm(modal);
    }
  });
}
//hide or close a hidden content in HTML (edit-profile, add-card and expand-a-card)
function closeForm(modal) {
  modal.classList.remove('popup_open');
  // remove listerners on overlay
  modal.removeEventListener('click', (event) => {
    event.preventDefault();
  });
  // remove listerners on window for ESC key
  window.removeEventListener("keydown", (evt) => {
    if(evt.key === "Escape") {
      return;
    }
  });
}
//change like button state on click
function changeLikeButton(event) {
  event.classList.toggle('element__like_active');
}
//delete an element from gallery
function removeCard(card) {
  card.remove();
}
//save user input on edit profile
function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeForm(editProfileModal);
}
//function to add a card to gallery
function addCard(cardTitle, cardLink) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardLikeButton = cardElement.querySelector('.element__like');
  const deleteCard = cardElement.querySelector('.element__delete');
  const expandCard = cardElement.querySelector('.element__photo');

  cardElement.querySelector('.element__name').textContent = cardTitle;
  cardElement.querySelector('.element__photo').style.backgroundImage = `url("${cardLink}")`;

  cardList.prepend(cardElement);

  //change like button style on click
  cardLikeButton.addEventListener('click', () => {
    changeLikeButton(cardLikeButton);
  });

  //delete card from gallery
  deleteCard.addEventListener("click", () => {
    removeCard(cardElement);
  });

  //expand card on full screen
  expandCard.addEventListener("click", () => {
    const imagePopup = imageOpenModal.querySelector('.popup__image');
    const imageCaptionPopup = imageOpenModal.querySelector('.popup__image-caption');

    imagePopup.src = cardLink;
    imagePopup.alt = cardTitle;
    imageCaptionPopup.textContent = cardTitle;
    openForm(imageOpenModal);
    // close popup image
    closePopupImage.addEventListener('click', () => {
      closeForm(imageOpenModal);
    });
  });

  closeForm(addCardModal);
}

/* handle user interactions */


/* JS code for profile edit */
editProfileButton.addEventListener('click', () => {
  //copy profile-name and profile-description into form fields
  if(!editProfileModal.classList.contains('popup_open')) {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
  openForm(editProfileModal);
});

closeEditProfile.addEventListener('click', () => {
  closeForm(editProfileModal);
});

editProfileModal.addEventListener('submit', formSubmitHandler);
/* End of JS code for profile edit */


/* JS Code for add button */
addCardButton.addEventListener('click', () => {
  openForm(addCardModal);
});

closeAddCardForm.addEventListener('click', () => {
  addForm.reset();
  closeForm(addCardModal);
});

//initial values of cards in gallery
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

//add first 6 and base cards to gallery
initialCards.forEach((data) => {
  addCard(data.name, data.link);
});

//save card user edited when clcik on create button
addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  addCard(cardNameInput.value, cardUrlInput.value);
  addForm.reset();
});
