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
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//functions to toggle classes
function toggleForm(modal) {
  modal.classList.toggle('popup_open');
}

function changeLikeButton(event) {
  event.classList.toggle('element__like_active');
}

//delete an element
function deleteCard(card) {
  card.remove();
}

/* JS code for profile edit */
//function to open both edit profile popup and add card popup

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  toggleForm(editProfileModal);
  console.log("save profile");
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


console.log(initialCards[0]);

//replace first card with the one added by user
addCardButton.addEventListener('click', function changeFirstCard(event) {
  event.preventDefault();

  toggleForm(addCardModal);
  if(initialCards.length !== 0 && addCardModal.classList.contains('popup_open')) {
    initialCards[0].name = cardNameInput.value;
    initialCards[0].link = cardUrlInput.value;
  }

  cardNameInput.value = "";
  cardUrlInput.value = "";
  console.log(initialCards[0]);
});



/* Animations on button clicks */
