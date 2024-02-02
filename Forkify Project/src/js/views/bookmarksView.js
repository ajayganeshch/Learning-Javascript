import View from "./View";
import previewView from "./previewView";

import iconsTemp from "url:../../img/icons.svg";
icons = iconsTemp.split("?")[0];

class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = `No Bookmarks yet. Find a nice recipe and bookmark it :)`;
  _message = ``;

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
}

export default new BookmarksView();

/* 
<div class="preview__user-generated">
  <svg>
    <use href="${icons}#icon-user"></use>
  </svg>
</div>
*/
