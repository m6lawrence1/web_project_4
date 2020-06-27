import { profileNameInput, profileAboutMeInput } from '../utils/constants.js';

export default class UserInfo {
    constructor({ nameSelector, aboutSelector}) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(aboutSelector);
    }
    
    getUserInfo() {
       profileNameInput.value = this._name.textContent;
       profileAboutMeInput.value = this._about.textContent;
    }

    setUserInfo({name, about}) {
        this._name.textContent = name;
        this._about.textContent = about;
    }
    
}