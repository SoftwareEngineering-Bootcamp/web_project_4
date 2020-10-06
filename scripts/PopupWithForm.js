import Popup from "./Popup.js";
//import UserInfo from './UserInfo';

import { nameInput, descriptionInput, cardNameInput, cardUrlInput, profileName, profileDescription } from './utils';

export default class PopupWithForm extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._forms = document.querySelector('.popup');
  }

  close() {
    super.close();
    this._forms.reset();
  }

  _getInputValues() {
    this._formInput = this._popupElement.querySelectorAll('.form__input');

    if(popupSelector === document.querySelector('.popup_type_add-card')) {
      this._formInput = (event) => { // can I do this ?
        event.preventDefault();
        profileName.textContent = nameInput.value;
        profileDescription.textContent = descriptionInput.value;
      }
    }
    if(popupSelector === document.querySelector('.popup_type_add-profile')) {
      this._formInput = (event) => {
        event.preventDefault();
        //to we get any input for add card popup from here?
      }
    }

    return this._formInput;
  }

  setEventListeners() {
    //add the submit handler for the forms
    this._popupElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._getInputValues
    });

    this.setEventListeners(); //call from parent class
  }
}
