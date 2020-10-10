import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector('.popup__image');
    this._popupCaption = document.querySelector('.popup__image-caption');
  }

  open(name, link) {
    super.open(name, link);
    this._popupImage.src = link;
    this.__popupImage.alt = name;
    this._popupCaption.textContent = name;
  }

  close() {
    super.close();
    this._popupImage.src = "";
    this.__popupImage.alt = "";
    this._popupCaption.textContent = "";
  }

  setEventListeners() {
    super.setEventListeners(); //call from parent class
  }
}

