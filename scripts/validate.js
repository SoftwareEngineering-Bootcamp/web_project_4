function showErrorMessage(input, form, {errorClass, inputErrorClass, ...rest}) {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;

  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
}

function hideErrorMessage(input, form, {errorClass, inputErrorClass, ...rest}) {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = '';

  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
}

function checkInputValidity(input, form, errorClass, inputErrorClass) {
  if(input.validity.valid) {
    hideErrorMessage(input, form, errorClass, inputErrorClass);
  } else {
    showErrorMessage(input, form, errorClass, inputErrorClass);
  }
}

function toggleButtonState(inputs, button, {inactiveButtonClass, ...rest}) {
  const isValid = inputs.every((input) => input.validity.valid);

  if(isValid) {
    button.classList.remove(inactiveButtonClass);
    button.classList.remove('form__submit_disabled');
  } else {
    button.classList.add(inactiveButtonClass);
    button.classList.add('form__submit_disabled');
  }
}

function enableValidation({formSelector, inputSelector, submitButtonSelector,
                          inactiveButtonClass, inputErrorClass, errorClass}) {
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(input, form, errorClass, inputErrorClass);
        toggleButtonState(inputs, button, inactiveButtonClass);
      });
    });
  });
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});
