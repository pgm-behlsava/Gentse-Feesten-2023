import { fetchData } from "./handlers/dataHandler.js";
import { addClass } from "./helpers/class.js";
import { filterDataByDay } from "./helpers/filter.js";
import { eventsAPI, categoriesAPI } from "./main.js";
import { buildEventsSpotlightUI, generateRandomEvents, buildFilterUI } from "./rendering/rendering.js";

let params = new URLSearchParams(location.search);
let search = params.get('day');
let events = await fetchData(eventsAPI);
let categories = await fetchData(categoriesAPI);
let randomEvents;
let filteredEvents;

const $eventSpotlight = document.getElementById('event-spotlight');
const $dayItems = document.getElementsByClassName('day-item');
const $filterBody = document.getElementById('filter-body');

function searchByDay() {
  params = new URLSearchParams(location.search);
  search = params.get('day');
  if (search) {
    for (const $element of $dayItems) {
      if ($element.getAttribute('href').includes(search)) {
        addClass($element, 'current');
      }
    }

    filteredEvents = filterDataByDay(events, search);
    randomEvents = generateRandomEvents(filteredEvents, 3);
  } else {
    randomEvents = generateRandomEvents(events, 3);
  }

  buildEventsSpotlightUI($eventSpotlight, randomEvents);
  buildFilterUI($filterBody, categories);
}

function registerListeners() {
  
}

function initialize() {
  categories = categories.sort();
  searchByDay();
  registerListeners();
}

initialize();