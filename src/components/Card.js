export default class Card {
  constructor({data, handleCardClick, handleDeleteClick, handleLikeClick}, userId, cardSelector) {
    this._title = data.name;
    this._link = data.link;
    this._id = data._id;
    this._owner = data.owner;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._userId = userId;
    this._cardSelector = cardSelector;
  }

  id() {
    return this._id;
  }

  _getTemplate() {
    const cardElement = document.querySelector('.element').
          content.querySelector('.element__item').cloneNode(true);

          return cardElement;
  }

  _renderLikes() {
    if(this._likes.some((like) => like._id === this._userId)) {
      this._element.querySelector('.element__like').classList.add('element__like_active');
    }
  }

  likesCount(countLike) {
    this._element.querySelector('.element__like_count').textContent = countLike;
  }

  _showTrashIcon() {
    // check that data.owner.userId = userId to handle showing delete button on card owner only
    if(this._owner._id == this._userId) {
      this._element.querySelector('.element__delete').classList.add('element__delete_show');
    }
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    //handle like button on click
    this._element.querySelector('.element__like').addEventListener('click', () => this._handleLikeClick(this.id()));
    //delete a card from gallery
    this._element.querySelector('.element__delete').addEventListener("click", () => this._handleDeleteClick(this.id()));
    //expand a card on full screen
    this._element.querySelector('.element__photo').addEventListener("click", () => this._handleCardClick());
  }

  getCardElements() {
    this._element = this._getTemplate();

    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._title;
    this._element.querySelector('.element__name').textContent = this._title;

    this.likesCount(this._likes.length);
    this._renderLikes();
    this._showTrashIcon();

    this._setEventListeners();

    return this._element;
  };
}

