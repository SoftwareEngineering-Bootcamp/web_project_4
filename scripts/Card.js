import { cardLikeButton, deleteCard, imagePopup, imageCaption } from './utils.js';


class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).
          content.querySelector('.element__item').cloneNode(true);

          return cardElement;
  }

  _changeLikeButton() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _removeCard() {
    this._element.remove();
    this._element = null;
  }

  _handleExpandImage() {
    imagePopup.src = this._link;
    imagePopup.alt = this._link;
    imageCaption.textContent = this._name;
    //document.addEventListener('keydown', handleEscClose);
  }

  _setEventListeners() {
    //change like button style on click
    this._element.querySelector('.element__like').addEventListener('click', () => this._changeLikeButton());
    //delete card from gallery
    this._element.querySelector('.element__delete').addEventListener("click", () => this._removeCard());
    //expand card on full screen
    this._element.querySelector('.element__photo').addEventListener("click", () => this._handleCardClick());
  }

  getCardElements() {
    this._element = this._getTemplate();

    this._element.querySelector('.element__photo').style.backgroundImage = `url("${this._link}")`;
    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector('.element__photo').setAttribute('alt', this._name);

    this._setEventListeners();

    return this._element;
  };
}

export default Card;
