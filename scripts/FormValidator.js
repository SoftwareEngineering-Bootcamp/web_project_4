class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }

  _showErrorMessage() {
    const error = this._formElement.querySelector(`#${input.id}-error`);

    error.textContent = input.validationMessage;
    error.classList.add(this._settings.errorClass);
    input.classList.add(this._settings.inputErrorClass);
  }
  _hideErrorMessage() {
    const error = this._formElement.querySelector(`#${input.id}-error`);

    error.textContent = '';
    error.classList.remove(this._settings.errorClass);
    input.classList.remove(this._settings.inputErrorClass);
  }
  _checkInputValidity(form, input, errorClass, inputErrorClass) {
    if(input.validity.valid) {
      this._hideErrorMessage();
    } else {
      this._showErrorMessage();
    }
  }
  _toggleButtonState(inputs, button, inactiveButtonClass) {
    const isValid = inputs.every((input) => input.validity.valid);

    if(isValid) {
      button.classList.remove(inactiveButtonClass);
      button.classList.remove('form__submit_disabled');
    } else {
      button.classList.add(inactiveButtonClass);
      button.classList.add('form__submit_disabled');
    }
  }
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    const button = this._formElement.querySelector(this._settings.submitButtonSelector);

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity();
        thi._toggleButtonState();
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

export default FormValidator;
