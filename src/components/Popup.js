export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(`.${popupSelector}`);
    this._handleEscClose = this._handleEscClose.bind(this);
  }


  _handleEscClose(event) {
    if(event.which === 27) {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add('popup_open');
    // this.setEventListeners();
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_open');
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (event) => {
      if(event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }

}

