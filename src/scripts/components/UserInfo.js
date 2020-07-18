import { profileNameInput, profileAboutMeInput } from '../utils/constants.js';

export default class UserInfo {
    constructor({ nameSelector, aboutSelector, avatarSelector}) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);
        this._avatar = document.querySelector(avatarSelector);
    }
    
    getUserInfo() {
       profileNameInput.value = this._name.textContent;
       profileAboutMeInput.value = this._about.textContent;
    }
    
    setUserAvatar({avatar}) {
        this._avatar.src = avatar;
  }

    setUserInfo({name, about}) {
        this._name.textContent = name;
        this._about.textContent = about;
    }
    
}