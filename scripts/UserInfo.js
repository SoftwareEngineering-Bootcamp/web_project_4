import { nameInput, descriptionInput, profileName, profileDescription } from './utils';

export default class UserInfo {
  constructor(name, job) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() {
    let userDetails = {
      name: nameInput,
      job: descriptionInput
    }

    return userDetails;
  }

  setUserInfo() {
    profileName.textContent = this.userDetails.name;
    profileDescription.textContent = this.userDetails.job;
  }
}
