//wrappers
const addCardModal = document.querySelector('.popup_type_add-card');
const editProfileModal = document.querySelector('.popup_type_edit-profile');
const imageOpenModal = document.querySelector('.popup_type_image');

//open buttons
const addCardButton = document.querySelector('.add-button');
const editProfileButton = document.querySelector('.profile__edit');
const expandPhoto = document.querySelector('.element__photo');

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

//functions

//function to add animation on button click
function animateButton() {

}

function changeLikeButton(event) {
  event.classList.toggle('element__like_active');
}
//delete an element from gallery
function deleteCard(card) {
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

//open hidden content in HTML
function toggleForm(modal) {
  modal.classList.toggle('popup_open');
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

//initial values of gallery
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
  const cardElement = cardTemplate.cloneNode(true);

  const cardLikeButton = cardElement.querySelector('.element__like');
  const cardDeleteButton = cardElement.querySelector('.element__delete');
  //create card
  const cardImage = cardElement.querySelector('.element__photo');
  const cardName = cardElement.querySelector('.element__name');

  cardName.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`; //cardImage.src = data.link;
  cardImage.style.backgroundSize = "cover";

  //change like button style on click
  cardLikeButton.addEventListener('click', () => {
    changeLikeButton(cardLikeButton);
  });

  //delete a card on click
  cardDeleteButton.addEventListener('click', () => {
    deleteCard(cardElement);
  });

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

//function to add a card to gallery
function addCard(cardTitle, cardLink) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.element__name').textContent = cardTitle;
  cardElement.querySelector('.element__photo').style.backgroundImage = `url("${cardLink}")`;
  cardElement.querySelector('.element__photo').style.backgroundSize = "cover";

  cardList.prepend(cardElement);
}

//save card user edited when clcik on create button
addCardSubmitButton.addEventListener("click", event => {
  event.preventDefault();
  console.log("event" + event);

  const cardTitle = document.querySelector('.form__input_type_card-title')
  const cardLink = document.querySelector('.form__input_type_card-url');

  addCard(cardTitle.value, cardLink.value);

  cardTitle.value = "";
  cardLink.value = "";

  toggleForm(addCardModal);
});
