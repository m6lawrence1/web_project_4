export default class Popup {
    constructor(modal){
        this._modal = document.querySelector(modal);
    }
        
    open(){
        this._modal.classList.add('popup_opened'); 
        document.addEventListener("keydown", this._handleEscClose.bind(this))

    }
    close(){
        this._modal.classList.remove('popup_opened');
        document.removeEventListener("keydown", this._handleEscClose.bind(this))
    }

    _handleEscClose(){
        if (event.keyCode == 27) {
            this.close();
        }
    }
    
    handleOverlayClose(evt){
        if (evt.target.classList.contains('popup')) {
            this.close();
            evt.preventDefault();
        }
    }

    setEventListeners(){
        const closeButton = this._modal.querySelector('.popup__close-button');
        closeButton.addEventListener('click', () => this.close());
        this._modal.addEventListener('click', (evt) => this.handleOverlayClose(evt));

    }
          
}

