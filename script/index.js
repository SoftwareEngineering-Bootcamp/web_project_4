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
const addCardSubmitButton = document.querySelector('.form__submit_add-card');
const cardTemplate = document.querySelector('.element').content.querySelector('.element__item');
const cardList = document.querySelector('.elements__list');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

/*functions*/

//open/hide a hidden content in HTML (edit-profile, add-card and expand-a-card)
function toggleForm(modal) {
  modal.classList.toggle('popup_open');
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
  toggleForm(editProfileModal);
  console.log("save profile");
}
//function to add a card to gallery
function addCard(cardTitle, cardLink) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardLikeButton = cardElement.querySelector('.element__like');
  const deleteCard = cardElement.querySelector('.element__delete');
  const expandCard = cardElement.querySelector('.element__photo');

  cardElement.querySelector('.element__name').textContent = cardTitle;
  cardElement.querySelector('.element__photo').style.backgroundImage = `url("${cardLink}")`;
  cardElement.querySelector('.element__photo').style.backgroundSize = "cover";

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
    imageCaptionPopup.textContent = cardTitle;
    toggleForm(imageOpenModal);

    // close popup image
    closePopupImage.addEventListener('click', () => {
      toggleForm(imageOpenModal);
    });
  });

  toggleForm(addCardModal);
}

/* handle user interactions */

/* JS code for profile edit */
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
initialCards.forEach(data => {
  addCard(data.name, data.link);
});

//save card user edited when clcik on create button
addCardSubmitButton.addEventListener("click", event => {
  event.preventDefault();
  const cardTitle = document.querySelector('.form__input_type_card-title')
  const cardLink = document.querySelector('.form__input_type_card-url');

  addCard(cardTitle.value, cardLink.value);
  cardTitle.value = "";
  cardLink.value = "";
});
