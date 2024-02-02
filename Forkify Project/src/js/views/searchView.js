class SearchView {
  _parentElement = document.querySelector(".search");

  getQuery() {
    let query = this._parentElement.querySelector(".search__field").value;
    this._clearInput();

    return query;
  }

  addHandlerRender(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }
}

export default new SearchView();
