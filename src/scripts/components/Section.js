export default class Section {
    constructor({ items, renderer}, containerSelector) {
        this._initialArray = items;
        this._renderer = renderer; // renderer is a function
        this._container = document.querySelector(containerSelector);
    }
    
    renderItems() {
        this._initialArray.forEach((item) => {
            this._renderer(item); // call renderer() and pass item to it
        });
    }

    addItem(element) {
        this._container.prepend(element);
    }
    
}