export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add('popup_open');
    this.setEventListeners();
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_open');
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    console.log(4);
    if(event.which === '27') {
      this.close();
    }
  }

  setEventListeners() {
    console.log(1);
    this._popupElement.addEventListener('click', (event) => {
      console.log(2);
      if(event.target.classList.contains('popup') || event.target.classList.contains('form__close-button')) {
        console.log(3);
        this.close();
      }
    });
  }
}

