import { eventsAPI } from "./main.js";
import { fetchData } from "./handlers/dataHandler.js";
import { filterDataByKeyword } from "./helpers/filter.js";
import { addClass, removeClass } from "./helpers/class.js";
import { buildEventsUI, generateHTMLForSearch } from "./rendering/rendering.js";

let params = new URLSearchParams(location.search);
let search = params.get('search');
let events = await fetchData(eventsAPI);
let filteredEvents;

const $searchBar = document.getElementById('input-search');
const $searchButton = document.getElementById('btn-search');
const $searchBarResults = document.getElementById('searchbar-results');
const $resultContainer = document.getElementById('search-results');
const $gridButton = document.getElementById('btn-grid');
const $listButton = document.getElementById('btn-list');

async function handleSearch() {
  params = new URLSearchParams(location.search);
  search = params.get('search');
  if (search) {
    $searchBar.value = search;
    filteredEvents = filterDataByKeyword(events, search);
    generateHTMLForSearch($searchBarResults, filteredEvents, search);
    buildEventsUI($resultContainer, filteredEvents);
  } else {
    $resultContainer.innerHTML = `<h1>Vul een zoekterm in.</h1>`;
  }
}

function registerListeners() {
  $searchButton.addEventListener('submit', () => {
    handleSearch();
  });

  $gridButton.addEventListener('click', () => {
    removeClass($resultContainer, 'layout-list');
    addClass($gridButton, 'active');
    removeClass($listButton, 'active');
    handleSearch();
  });

  $listButton.addEventListener('click', () => {
    addClass($resultContainer, 'layout-list');
    addClass($listButton, 'active');
    removeClass($gridButton, 'active');
    handleSearch();
  });
}

function initialize() {
  handleSearch();
  registerListeners();
}

initialize();