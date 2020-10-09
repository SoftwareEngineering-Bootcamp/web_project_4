import { profileName, profileDescription } from './utils';

export default class UserInfo {
  constructor(name, job) {
    this._name = document.querySelector(name).value;
    this._job = document.querySelector(job).value;
    this._profileName = profileName;
    this._profileDescription = profileDescription;
  }

  getUserInfo() {
    this._userDetails = {
      name: this._name,
      job: this._job
    }

    return this._userDetails;
  }

  setUserInfo() {
    this._profileName.textContent = this._userDetails.name;
    this._profileDescription.textContent = this._userDetails.job;
  }
}
