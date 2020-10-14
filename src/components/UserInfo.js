import { descriptionInput, nameInput, profileName, profileDescription } from '../utils/utils';

export default class UserInfo {
  constructor(name, job) {
    this._name = name.value;
    this._job = job.value;
    this._profileName = profileName;
    this._profileDescription = profileDescription;
  }

  getUserInfo() {
    this._userDetails = {
      name: this._name,
      job: this._job
    }

    descriptionInput.value = this._profileDescription.textContent;
    nameInput.value = this._profileName.textContent;

    return this._userDetails;
  }

  setUserInfo(name, job) {
    this._userDetails = { name, job };

    this._profileName.textContent = this._userDetails.name.value;
    this._profileDescription.textContent = this._userDetails.job.value;
  }
}
