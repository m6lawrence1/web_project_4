export default class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers; 
  }
    
    getAppInfo(){
        return Promise.all([this.getInitialCards(), this.getUserProfile()])
    }
    
    getInitialCards() {
        return fetch(this.baseUrl + '/cards', {
            headers: this.headers
        })
            .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        })
    }
    
    getUserProfile(){
        return fetch(this.baseUrl + '/users/me', {
            headers: this.headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch((err) => {
          console.log(err);
        });
        
    }
    
    setUserAvatar({avatar}){
        console.log(avatar);
        return fetch(this.baseUrl + '/users/me/avatar', {
            headers: this.headers,
            method: "PATCH",
            body: JSON.stringify({avatar})
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch((err) => {
          console.log(err);
        });
    }
    
    setUserProfile({name, about}) {
        return fetch(this.baseUrl + '/users/me', {
            headers: this.headers,
            method: "PATCH",
            body: JSON.stringify({name, about})
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch((err) => {
          console.log(err);
        });
        
    }
    
    addCard(cardInfo) {
        return fetch(this.baseUrl + '/cards', {
            headers: this.headers,
            method: "POST",
            body: JSON.stringify(cardInfo)
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch((err) => {
          console.log(err);
        });
        
    }
    
    deleteCard({_id}){
        return fetch(this.baseUrl + '/cards/' + _id, {
            headers: this.headers,
            method: "DELETE"
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch((err) => {
          console.log(err);
        });
        
    }
    
    addLike({_id}){
        return fetch(this.baseUrl + '/cards/likes/' + _id, {
            headers: this.headers,
            method: "PUT"
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch((err) => {
          console.log(err);
        });
        
    }
    
    removeLike({_id}){
        return fetch(this.baseUrl + '/cards/likes/' + _id, {
            headers: this.headers,
            method: "DELETE"
        })
        .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch((err) => {
          console.log(err);
        });
        
    }

}





