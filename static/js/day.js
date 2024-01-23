import { fetchData } from "./handlers/dataHandler.js";
import { addClass, removeClass } from "./helpers/class.js";
import { filterDataByDay } from "./helpers/filter.js";
import { eventsAPI, categoriesAPI } from "./main.js";
import { buildEventsSpotlightUI, generateRandomEvents, buildFilterUI, buildEventsByCategoryUI } from "./rendering/rendering.js";

let url = new URL(location.href);
let params = new URLSearchParams(location.search);
let search = params.get('day');
let events = await fetchData(eventsAPI);
let categories = await fetchData(categoriesAPI);
let randomEvents;
let filteredEvents;

const $eventSpotlight = document.getElementById('event-spotlight');
const $dayItems = document.getElementsByClassName('day-item');
const $filterBody = document.getElementById('filter-body');
const $categoryContainer = document.getElementById('category-container');
const $gridButton = document.getElementById('btn-grid');
const $listButton = document.getElementById('btn-list');
const $eventsContainers = document.getElementsByClassName('events-container');

function searchByDay() {
  params = new URLSearchParams(location.search);
  search = params.get('day');

  if (search) {
    for (const $element of $dayItems) {
      if ($element.getAttribute('href').includes(search)) {
        addClass($element, 'current');
      }
    }
  } else {
    params.set('day', '14');
    search = params.get('day');
    url.search = params.toString();
    location.href = `${location.href}${url.search}`;
    for (const $element of $dayItems) {
      if ($element.getAttribute('href').includes(search)) {
        addClass($element, 'current');
      }
    }
  }

  filteredEvents = filterDataByDay(events, search);
  filteredEvents = filteredEvents.sort((a, b) => a.sort_key - b.sort_key);
  randomEvents = generateRandomEvents(filteredEvents, 3);

  buildEventsSpotlightUI($eventSpotlight, randomEvents);
  buildEventsByCategoryUI($categoryContainer, filteredEvents, categories);
  buildFilterUI($filterBody, categories);
}

function registerListeners() {
  $gridButton.addEventListener('click', () => {
    for (const $eventsContainer of $eventsContainers) {
      removeClass($eventsContainer, 'layout-list');
      // buildEventsByCategoryUI($eventsContainer, filteredEvents, categories);
    }
    addClass($gridButton, 'active');
    removeClass($listButton, 'active');
  });

  $listButton.addEventListener('click', () => {
    for (const $eventsContainer of $eventsContainers) {
      addClass($eventsContainer, 'layout-list');
      // buildEventsByCategoryUI($eventsContainer, filteredEvents, categories);
    }
    addClass($listButton, 'active');
    removeClass($gridButton, 'active');
  });
}

function initialize() {
  categories = categories.sort();
  searchByDay();
  registerListeners();
}

initialize();