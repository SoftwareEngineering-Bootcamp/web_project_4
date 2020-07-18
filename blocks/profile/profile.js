//hold profile edit button
let editProfile = document.querySelector('.profile__edit');

//hold close button class
let closeEditProfile = document.querySelector('.form__close-button');

let formPopup = document.querySelector('.form');
let formEdit = document.querySelector('.form__edit');
let nameInput = document.querySelector('.form__input-name');
let descriptionInput = document.querySelector('.form__input-description');
let name = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');


/* function to open profile edit form */
function toggleForm() {
  formPopup.classList.toggle('form__open');
}

editProfile.addEventListener('click', toggleForm);
closeEditProfile.addEventListener('click', toggleForm);

formEdit.addEventListener('submit', function(e) {
  e.preventDefault();

  name.textContent = nameInput.value;
  description.textContent = descriptionInput.value;

  //close the edit form
  toggleForm();
})

