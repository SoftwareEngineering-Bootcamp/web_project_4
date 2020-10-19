import { profileName, profileDescription } from '../utils/utils';

export default class UserInfo {
  constructor(name, job) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() {
    return this._userDetails = {
      name: this._name.textContent,
      job: this._job.textContent
    }
  }

  setUserInfo(name, job) {
    this._userDetails = { name, job };

    profileName.textContent = this._userDetails.name;
    profileDescription.textContent = this._userDetails.job;
  }
}
