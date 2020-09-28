class PopupWithForm  {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(link, caption) {
    this._popupElement.querySelector('.popup__image').src = link;
    this._popupElement.querySelector('.popup__image-caption').textContent = caption;
    super.open();
  }
}
