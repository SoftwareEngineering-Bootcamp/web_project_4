import Popup from "./Popup";

export default class PopupWithForm extends Popup{
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = document.forms[0];
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners(); //call from parent class

    //add the submit handler for the forms
    this._popupElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  _getInputValues() {
    this._inputList = this._popupElement.querySelectorAll(".form__input");

    this._formInputs = {};
    this._inputList.forEach(
      (input) => (this._formInputs[input.name] = input.value)
    );

    return this._formInputs;
  }
}
