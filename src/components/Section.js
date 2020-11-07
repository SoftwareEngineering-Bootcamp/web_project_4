export default class Section {
  constructor({item, renderer}, cardContainerSelector) {
    this._renderedElements = item;
    this._renderer = renderer;
    //stores a public method that renders all elements on the page
    this._container = document.querySelector(`.${cardContainerSelector}`);
  }
  //render each element on a page
  rendererItems() {
    this._renderedElements.forEach(item => this._renderer(item));
  }

  //takes a DOM element and adds it to the container
  addItem(item) {
    this._container.append(item);
  }
}

