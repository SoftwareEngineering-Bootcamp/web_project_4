import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector('.popup__image');
    this._popupCaption = document.querySelector('.popup__image-caption');
  }

  open(title, link) {
    this._popupImage.src = link;
    this.__popupImage.setAttribute('alt', title);
    this._popupCaption.textContent = title;
    super.open();
  }

  close() {
    this._popupImage.src = "";
    this.__popupImage.setAttribute('alt', "");
    this._popupCaption.textContent = "";
    super.close();
  }

  setEventListeners() {
    super.setEventListeners(); //call from parent class
  }
}

