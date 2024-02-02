import iconsTemp from "url:../../img/icons.svg";
icons = iconsTemp.split("?")[0];

export default class View {
  _data;
  render(data, render = true, check = true) {
    if (check) {
      if (!data || (Array.isArray(data) && data.length === 0))
        return this.renderError();
    }

    this._data = data;
    const markUp = this._generateMarkup();

    if (!render) return markUp;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markUp);
  }

  // Cannot Add new elements and also only text and attributes is replaced
  update(data) {
    this._data = data;
    let newMarkUp = this._generateMarkup();

    let newDom = document.createRange().createContextualFragment(newMarkUp);

    let newElements = Array.from(newDom.querySelectorAll("*"));

    let currentElements = Array.from(this._parentElement.querySelectorAll("*"));

    newElements.forEach((newEle, i) => {
      let currEle = currentElements[i];

      // Update Changed Text
      if (
        !newEle.isEqualNode(currEle) &&
        newEle?.firstChild?.nodeValue.trim() !== ""
      ) {
        // console.log(newEle?.firstChild?.nodeValue.trim(), "🌋⚡");
        currEle.textContent = newEle.textContent;
      }

      // Update Changed Attributes

      if (!newEle.isEqualNode(currEle)) {
        Array.from(newEle.attributes).forEach((attr) => {
          currEle.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = ``;
  }

  renderSpinner() {
    const markUp = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markUp);
  }

  renderError(message = this._errorMessage) {
    const markUp = `
    <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markUp);
  }

  renderMessage(message = this._message) {
    const markUp = `
    <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markUp);
  }
}
