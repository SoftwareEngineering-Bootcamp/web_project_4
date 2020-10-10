import Popup from "./Popup";
import { descriptionInput, nameInput, profileName, profileDescription } from './utils';

export default class PopupWithForm extends Popup{
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._addForm = document.querySelector('.form_edit-profile');
    this._editForm = document.querySelector('.form_add-card');
  }

  open() {
    super.open();
    //populate imput values
    descriptionInput.value = profileDescription.textContent;
    nameInput.value = profileName.textContent;
  }

  close() {
    super.close();
    this._addForm.reset();
    this._editForm.reset();
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
