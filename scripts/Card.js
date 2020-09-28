import {handleOpenModal, imageOpenModal, imagePopup, imageCaptionPopup} from './utils.js';


class Card {
  constructor({data, handleCardClick}, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardTemplate = document.querySelector(cardTemplateSelector)
        .content.querySelector('.element__item');
  }

  _changeLikeButton(event) {
    event.target.classList.toggle('element__like_active');
  }

  _removeCard(event) {
    event.target.closest('.element__item').remove();
  }

  _handleExpandImage() {
    imagePopup.src = this._link;
    imagePopup.alt = `place-${this._name}`;
    imageCaptionPopup.textContent = this._name;
    handleOpenModal(imageOpenModal);
  }

  _addEventListeners() {
    const cardLikeButton = this._card.querySelector('.element__like');
    const deleteCard = this._card.querySelector('.element__delete');
    const expandCard = this._card.querySelector('.element__photo');

    //change like button style on click
    cardLikeButton.addEventListener('click', this._changeLikeButton);
    //delete card from gallery
    deleteCard.addEventListener("click", this._removeCard);
    //expand card on full screen
    expandCard.addEventListener("click", () => this._handleExpandImage());
  }

  getCardElements() {
    this._card = this._cardTemplate.cloneNode(true);
    const expandCard = this._card.querySelector('.element__photo');

    this._card.querySelector('.element__name').textContent = this._name;
    expandCard.style.backgroundImage = `url("${this._link}")`;

    this._addEventListeners();
    return this._card;
  };
}

export default Card;
