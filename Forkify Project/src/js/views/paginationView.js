import View from "./View";
import { RESULTS_PER_PAGE } from "../config";

import iconsTemp from "url:../../img/icons.svg";
icons = iconsTemp.split("?")[0];

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerRender(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");

      if (!btn) return;

      let goto = +btn.dataset.goto;

      handler(goto);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / RESULTS_PER_PAGE);

    // On Page 1, There are other pages
    if (currentPage === 1 && numPages > 1) {
      return this._generateMarkupButton(1, currentPage);
    }

    // Last Page
    if (currentPage === numPages && numPages > 1) {
      return this._generateMarkupButton(-1, currentPage);
    }

    // Middle like numPages = 3, and on page 2
    if (currentPage < numPages) {
      return `${this._generateMarkupButton(
        -1,
        currentPage
      )}${this._generateMarkupButton(1, currentPage)}`;
    }

    // Only One Page
    return "";
  }

  _generateMarkupButton(value, currentPage) {
    return `
      <button data-goto="${
        currentPage + value
      }" class="btn--inline pagination__btn--${value === -1 ? "prev" : "next"}">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-${
      value === -1 ? "left" : "right"
    }"></use>
        </svg>
        <span>Page ${currentPage + value}</span>
      </button>
      `;
  }
}

export default new PaginationView();
