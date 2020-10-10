import Popup from "./Popup.js";
import { descriptionInput, nameInput, profileName, profileDescription } from './utils';

export default class PopupWithForm extends Popup{
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._addForm = document.querySelector('.form_edit-profile');
    this._editForm = document.querySelector('.form_add-card');
  }

  _getTemplate() {
    const cardElement = document.querySelector('.element').
          content.querySelector('.element__item').cloneNode(true);

          return cardElement;
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

  _getInputValues() {
    this._formInput = this._popupElement.querySelectorAll('.form__input');

    //get the imputs as an array
    this._inputs = {};
    this._formInput.forEach(
      (input) => (this._inputs[input.name] = input.value)
    );

    return this._inputs;
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
  generateForm() {
    this._element = this._getTemplate;
    this.setEventListeners;

    return this._element;
  }
}
