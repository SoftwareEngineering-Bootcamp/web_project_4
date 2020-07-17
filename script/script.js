let content = document.querySelector('.content');

let profileInfo = container.querySelector('.profile__info');

let editButton = container.querySelector('.edit-icon');

let addButton = container.querySelector('.add-button');

//to hold each element added (photo + place name)
let photoContainer = container.querySelector('.element__container');

/* function to edit user profile */
function editProfile() {
  let name = document.querySelector('.profile__name');
  let description = document.querySelector('.profile__description');

  profileInfo.insertAdjacentHTML('beforend', `
    <div" class="profile__info">
      <h2 class="edit-title">Edit Profile</h3>
      <input type="text" class="profile__name" placeholder="Name">
      <input type="text" class="profile__description" placeholder="About Me">
      <button class="save-button">Save</button>
    </div>`);
}

/* function to add elements to the gallery */
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

  /* reset fields to be able to add another picture without having to delete the previous one */
  photo.value = "";
  place.value = "";
}

addButton.addEventListener('click', addPhoto);

