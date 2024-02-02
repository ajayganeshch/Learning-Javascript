import "core-js/stable";
import "regenerator-runtime/runtime"; // for async await

import * as model from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";
import bookmarksView from "./views/bookmarksView";
import addRecipeView from "./views/addRecipeView";

import { FORM_CLOSE } from "./config";

// if (module.hot) {
//   module.hot.accept();
// }

// Load Recipe
const controlRecipes = async function () {
  try {
    let id = window.location.hash.slice(1);

    if (!id) return;

    // Spinner For Loading
    recipeView.renderSpinner();

    // Results View Update (mark)
    resultsView.update(model.getSearchResultsPage(model.state.search.page));

    // Render Bookmarks
    bookmarksView.update(model.state.bookmarks);

    // Loading recipe
    await model.loadRecipe(id);

    //Render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.log(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // Get Search Query
    let query = searchView.getQuery();

    if (!query) return;

    // Load Results
    await model.loadSearchResults(query);

    showResults();
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  showResults(goToPage);
};

const showResults = function (goToPage = 1) {
  // Results Display
  resultsView.render(model.getSearchResultsPage(goToPage));

  // Page Numbers
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe View
  recipeView.update(model.state.recipe);
};

const controlManageBookmarks = function () {
  // Add/remove Bookmark
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }

  // Update Recipe View
  recipeView.update(model.state.recipe);

  // Render Bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show spinner
    addRecipeView.renderSpinner();

    // Upload recipe
    await model.uploadRecipe(newRecipe);

    // console.log(model.state.recipe);

    // Render Recipe
    recipeView.render(model.state.recipe);

    // Success Message
    addRecipeView.renderMessage();

    // Render Bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change id in URL
    window.history.pushState(null, "", `#${model.state.recipe.id}`);

    // Reload Page , because to clear the form
    location.reload();

    // Close form window
    // setTimeout(function () {
    //   addRecipeView.toggleWindow();
    // }, FORM_CLOSE * 1000);
  } catch (err) {
    console.error(err, "🌋⚡");
    addRecipeView.renderError(err);
  }
};

const initial = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  searchView.addHandlerRender(controlSearchResults);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlManageBookmarks);
  paginationView.addHandlerRender(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

initial();
