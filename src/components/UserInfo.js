export default class UserInfo {
  constructor(name, job) {
    this._name = name.value;
    this._job = job.value;
  }

  getUserInfo() {
    this._userDetails = {
      name: this._name,
      job: this._job
    }

    return this._userDetails;
  }

  setUserInfo(name, job) {
    this._userDetails = { name, job };
  }
}
