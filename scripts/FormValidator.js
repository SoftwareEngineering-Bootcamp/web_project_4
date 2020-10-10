export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = document.querySelector(formElement);
  }

  _showErrorMessage() {
    const error = this._formElement.querySelector(`#${this._settings.inputSelector.id}-error`);
    console.log("1: "+ error);

    error.textContent = this._settings.inputSelector.validationMessage;
    console.log("2: " + error);
    error.classList.add(this._settings.errorClass);
    this._settings.inputSelector.classList.add(this._settings.inputErrorClass);
  }
  _hideErrorMessage() {
    const error = this._formElement.querySelector(`#${this._settings.inputSelector.id}-error`);

    console.log("3: "+ error);
    error.textContent = "";
    console.log("4: " + error);

    error.classList.remove(this._settings.errorClass);
    this._settings.inputSelector.classList.remove(this._settings.inputErrorClass);
  }
  _checkInputValidity(input) {
    if(input.validity.valid) {
      this._hideErrorMessage();
    } else {
      this._showErrorMessage();
    }
  }
  _toggleButtonState(inputs, button) {
    const isValid = inputs.every((input) => input.validity.valid);

    if(isValid) {
      button.classList.remove(this._settings.inactiveButtonClass);
      button.classList.remove('form__submit_disabled');
    } else {
      button.classList.add(this._settings.inactiveButtonClass);
      button.classList.add('form__submit_disabled');
    }
  }
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    const button = this._formElement.querySelector(this._settings.submitButtonSelector);

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(inputList, button);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

