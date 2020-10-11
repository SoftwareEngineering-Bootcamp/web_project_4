export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = document.querySelector(form);
  }

  _showErrorMessage(input) {
    const error = this._form.querySelector(`#${input.id}-error`);

    error.textContent = input.validationMessage;
    error.classList.add(this._settings.errorClass);
    input.classList.add(this._settings.inputErrorClass);
  }
  _hideErrorMessage(input) {
    const error = this._form.querySelector(`#${input.id}-error`);

    error.textContent = "";
    input.classList.remove(this._settings.inputErrorClass);
    error.classList.remove(this._settings.errorClass);
  }
  _checkInputValidity(input) {
    if(input.validity.valid) {
      this._hideErrorMessage(input);
    } else {
      this._showErrorMessage(input);
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
    const inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    const button = this._form.querySelector(this._settings.submitButtonSelector);

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(inputList, button);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

