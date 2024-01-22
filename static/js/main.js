import { animateRandomHeaderLogo, animateRandomCampaignLogo } from "./logos.js";
import { addClass, removeClass } from "./helpers/class.js";
import { generateRandomNumber } from "./helpers/numbers.js";
import { fetchData } from "./handlers/dataHandler.js";
import { buildEventsUI, buildNewsUI, generateRandomEvents } from "./rendering/rendering.js";
export { $openMenuButton, $closeMenuButton, $hamburgerMenu, $campaignLogo, $headerLogo, registerListeners, animateRandomCampaignLogo, eventsAPI, newsAPI, categoriesAPI }

const eventsAPI = "https://www.pgm.gent/data/gentsefeesten/events.json";
const categoriesAPI = "https://www.pgm.gent/data/gentsefeesten/categories.json";
const newsAPI = "https://www.pgm.gent/data/gentsefeesten/news.json";

const $headerLogo = document.querySelectorAll('.logo-container img');
const $campaignLogo = document.querySelectorAll('.campaign-logo-container img');
const $openMenuButton = document.querySelector('.hamburger-icon--header');
const $closeMenuButton = document.querySelector('.hamburger-icon-close');
const $hamburgerMenu = document.getElementById('hamburger-menu');
const $eventList = document.getElementById('home-event-list');
const $newsList = document.getElementById('home-news-list');

let events;
let news;

function registerListeners() {
  $openMenuButton.addEventListener("click", () => {
    addClass($hamburgerMenu, "active");
    addClass(document.body, "no-scroll");
  });
  $closeMenuButton.addEventListener("click", () => {
    removeClass($hamburgerMenu, "active");
    removeClass(document.body, "no-scroll");
  });
}



async function initialize() {
  addEventListener("load", (event) => {
    event.preventDefault();
    const randomNumber = generateRandomNumber();
    animateRandomHeaderLogo($headerLogo, randomNumber);
    animateRandomCampaignLogo($campaignLogo, randomNumber);
  });

  events = await fetchData(eventsAPI);
  news = await fetchData(newsAPI);
  
  if ($eventList) buildEventsUI($eventList, generateRandomEvents(events, 8));
  if ($newsList) buildNewsUI($newsList, news);
  registerListeners();
}

initialize();
