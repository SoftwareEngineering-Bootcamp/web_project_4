/*JS code for profile edit*/
let editProfile = document.querySelector('.profile__edit');

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

  // call the same function to close the edit form
  toggleForm();
  /* End of JS code for profile edit */
})


/* JS Code for add button */

let element = document.querySelector('.element__details');

let addButton = container.querySelector('.add-button');
/* function to add elements to the gallery */
function addPhoto() {
  let photo = document.querySelector('.element__photo');
  let place = document.querySelector('.element__name');

  photoContainer.insertAdjacentHTML('beforend', `
    <img src="#" alt="" class="element__photo">
    <div class="element__details">
      <h2 class="element__name"></h2>
      <button class="element__like"></button>
    </div>`)
  ;

  /* reset fields to be able to add another picture without having to delete the previous one */
  photo.value = "";
  place.value = "";
}

addButton.addEventListener('click', addPhoto);








