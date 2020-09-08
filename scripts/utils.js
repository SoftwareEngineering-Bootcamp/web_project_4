export const imageOpenModal = document.querySelector('.popup_type_image');
export const imagePopup = imageOpenModal.querySelector('.popup__image');
export const imageCaptionPopup = imageOpenModal.querySelector('.popup__image-caption');


const handleEscKeyPress = ({keyCode}) => {
  const openedModal = document.querySelector('.popup_open');

  if(keyCode === 27) {
    handleCloseModal(openedModal);
  }
};
export const handleOpenModal = (modal) => {
  modal.classList.add('popup_open');
  //add listener to hide a popup form with ESC key
  document.addEventListener("keydown", handleEscKeyPress);
};
export const handleCloseModal = (modal) => {
  modal.classList.remove('popup_open');
  // remove listerners on window for ESC key
  document.removeEventListener("keydown", handleEscKeyPress);
};
