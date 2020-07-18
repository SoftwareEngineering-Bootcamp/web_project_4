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



//let content = document.querySelector('.content');


/*let profileInfo = container.querySelector('.profile__info');

let addButton = container.querySelector('.add-button');

//to hold each element added (photo + place name)
let photoContainer = container.querySelector('.element__container');


/* function to close the form */


/* function to edit user profile */


/* function to add elements to the gallery
function addPhoto() {
  let photo = document.querySelector('.element__photo');
  let place = document.querySelector('.element__place');

  photoContainer.insertAdjacentHTML('beforend', `
    <div class="element__container">
      <img src="photo.value" class="element__photo">
      <p class="element__place">${place.value}</p>
      <button class="like-button"><button>
    </div>
  `);

  /* reset fields to be able to add another picture without having to delete the previous one
  photo.value = "";
  place.value = "";
}

addButton.addEventListener('click', addPhoto);*/

