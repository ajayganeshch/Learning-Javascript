import View from "./View";
import previewView from "./previewView";

import iconsTemp from "url:../../img/icons.svg";
icons = iconsTemp.split("?")[0];

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = `No recipes found for your query. Please try again!!`;
  _message = ``;

  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
}

export default new ResultsView();
