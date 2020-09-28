class Section {
  constructor({item, renderer}, cardSelector) {
    this._renderedElements = item;
    this._renderer = renderer;
    this._card = cardSelector;
  }
}
