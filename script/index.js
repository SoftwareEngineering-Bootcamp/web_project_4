/*JS code for profile edit*/
let editProfile = document.querySelector('.profile__edit');
let closeEditProfile = document.querySelector('.form__close-button');
let formPopup = document.querySelector('.form');
let formEdit = document.querySelector('.form__edit');
let nameInput = document.querySelector('.form__input-name');
let descriptionInput = document.querySelector('.form__input-description');
let name = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');
let overlay = document.querySelector('.overlay');

/* function to apply overlay effect to the page when editing profile */
function toggleOverlay() {
  overlay.classList.toggle('overlay__open')
}

/* function to open profile edit form */
function toggleForm() {
  formPopup.classList.toggle('form__open');
  nameInput.value = name.textContent;
  descriptionInput.value = description.textContent;
}

editProfile.addEventListener('click', toggleOverlay);

editProfile.addEventListener('click', toggleForm);
closeEditProfile.addEventListener('click', toggleForm);

closeEditProfile.addEventListener('click', toggleOverlay);

formEdit.addEventListener('submit', function(e) {
  e.preventDefault();

  name.textContent = nameInput.value;
  description.textContent = descriptionInput.value;

  // call the same function used to open the form, to close it
  toggleForm();

  //hide overlay effect after form is closed
  toggleOverlay();
  /* End of JS code for profile edit */
})


/* JS Code for add button

let element = document.querySelector('.element__item');
let addButton = container.querySelector('.add-button');

/* function to open file upload when user click on add-button
function toggleAddButton() {
  addButton.classList.toggle('element__item')
}

/* function to add elements to the gallery
function addPhoto() {
  let photo = document.querySelector('.element__photo');
  let place = document.querySelector('.element__name');

  element.insertAdjacentHTML('beforend', `
    <form>
      <li class="element__item">
        <input type="file" name="fileUpload" value="fileUpload" class="fileUpload">
        <label for="fileUpload">Select Photo</label>
        <br><input type="image" src="" alt="user-image" class="element__photo">
        <div class="element__details">
          <h2 class="element__name">Yosemite Valley</h2>
          <button class="element__like"></button>
        </div>
      </li>
      <button type="submit" class="form__submit">Submit</button>
    </form>`)
  ;

  /* reset fields to be able to add another picture without having to delete the previous one
  photo.value = "";
  place.value = "";
}

addButton.addEventListener('click', toggleAddButton);*/
