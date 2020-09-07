const ESC_KEYCODE = 27;
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
const imagePopup = imageOpenModal.querySelector('.popup__image');
const imageCaptionPopup = imageOpenModal.querySelector('.popup__image-caption');

/*functions*/

//function to add a card to gallery
const getCardElements = (data)=> {
  const cardElement = cardTemplate.cloneNode(true);
  const cardLikeButton = cardElement.querySelector('.element__like');
  const deleteCard = cardElement.querySelector('.element__delete');
  const expandCard = cardElement.querySelector('.element__photo');

  cardElement.querySelector('.element__name').textContent = data.name;
  expandCard.style.backgroundImage = `url("${data.link}")`;

  //cardList.prepend(cardElement);

  //change like button style on click
  cardLikeButton.addEventListener('click', changeLikeButton);
  //delete card from gallery
  deleteCard.addEventListener("click", removeCard);
  //expand card on full screen
  expandCard.addEventListener("click", () => handleExpandImage(data));

  return cardElement;
};
//open modal on click
const handleOpenModal = (modal) => {
  modal.classList.add('popup_open');
  //add listener to hide a popup form with ESC key
  document.addEventListener("keyup", handleEscKeyPress, true);
};
//close modal on click
const handleCloseModal = (modal) => {
  modal.classList.remove('popup_open');
  // remove listerners on window for ESC key
  document.removeEventListener("keyup", handleEscKeyPress, true);
}

const renderCard = (data, wrap) => {
  wrap.prepend(getCardElements(data));
};

//expand card on full screen
const handleExpandImage = (data) => {
  imagePopup.src = data.link;
  imagePopup.alt = `place-${data.name}`;
  imageCaptionPopup.textContent = data.name;
  handleOpenModal(imageOpenModal);
};
//handle Escape keydown
const handleEscKeyPress = (event) => {
  event.preventDefault();
  const openedModal = document.querySelector('.popup__open');

  if(event.which === ESC_KEYCODE) {
    handleCloseModal(openedModal);
  }
};
//change like button state on click
const changeLikeButton = (event) => {
  event.target.classList.toggle('element__like_active');
};
//delete an element from gallery
const removeCard = (event) => {
  event.target.closest('.element__item').remove();
};
//save user input on edit profile
const editFormSubmitHandler = (event) => {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  handleCloseModal(editProfileModal);
};
//save user input on edit profile
const cardFormSubmitHandler = (event) => {
  event.preventDefault();

  renderCard({
    name: cardNameInput.value,
    link: cardUrlInput.value
  }, cardList);
  addForm.reset();
  handleCloseModal(addCardModal);
}
/* handle user interactions */

addCardModal.addEventListener('submit', cardFormSubmitHandler);
editProfileModal.addEventListener('submit', editFormSubmitHandler);

addCardButton.addEventListener('click', () => {
  handleOpenModal(addCardModal);
});
editProfileButton.addEventListener('click', () => {
  //copy profile-name and profile-description into form fields
  if(!editProfileModal.classList.contains('popup_open')) {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
  }
  handleOpenModal(editProfileModal);
});

addCardModal.addEventListener('click', (event) => {

  if(event.target.classList.contains('popup') || event.target.classList.contains('form__close-button')) {
    handleCloseModal(addCardModal);
  }
});
editProfileModal.addEventListener('click', () => {
  if(event.target.classList.contains('popup') || event.target.classList.contains('form__close-button')) {
    handleCloseModal(editProfileModal);
  }
});
imageOpenModal.addEventListener('click', () => {
  if(event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
    handleCloseModal(imageOpenModal);
  }
});


//render first 6 cards to gallery
initialCards.forEach((data) => {
  renderCard(data, cardList);
});
