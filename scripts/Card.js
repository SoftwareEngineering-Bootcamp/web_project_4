export default class Card {
  constructor({name, link, handleCardClick}, cardSelector) {
    this._title = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector('.element').
          content.querySelector('.element__item').cloneNode(true);

          return cardElement;
  }

  _changeLikeButton() {
    this._likeButton.classList.toggle('element__like_active');
  }

  _removeCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    //change like button style on click
    this._likeButton.addEventListener('click', () => this._changeLikeButton());
    //delete card from gallery
    this._deleteButton.addEventListener("click", () => this._removeCard());
    //expand card on full screen
    this._cardImage.addEventListener("click", () => this._handleCardClick());
  }

  getCardElements() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__photo');
    this._cardTitle = this._element.querySelector('.element__name');
    this._likeButton = this._element.querySelector('.element__like');
    this._deleteButton = this._element.querySelector('.element__delete');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._cardTitle.textContent = this._title;

    this._setEventListeners();

    return this._element;
  };
}

