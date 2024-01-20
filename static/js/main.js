import { animateRandomHeaderLogo } from "./header.js";
import { addClass, removeClass } from "./helpers/class.js";
import { generateRandomNumber } from "./helpers/randomNumber.js";
import { fetchData } from "./handlers/dataHandler.js";
import { buildEventsUI, generateRandomEvents } from "./rendering/rendering.js";
export { $openMenuButton, $closeMenuButton, $hamburgerMenu, $campaignLogo, $headerLogo, registerListeners, animateRandomCampaignLogo, eventsAPI, categoriesAPI, newsAPI }

const eventsAPI = "https://www.pgm.gent/data/gentsefeesten/events_500.json";
const categoriesAPI = "https://www.pgm.gent/data/gentsefeesten/categories.json";
const newsAPI = "https://www.pgm.gent/data/gentsefeesten/news.json";

const $headerLogo = document.querySelectorAll(".logo-container img");
const $campaignLogo = document.querySelectorAll(".campaign-logo-container img");
const $openMenuButton = document.querySelector(".hamburger-icon--header");
const $closeMenuButton = document.querySelector(".hamburger-icon-close");
const $hamburgerMenu = document.getElementById("hamburger-menu");
const $eventList = document.getElementById("event-list");

let events;

function animateRandomCampaignLogo($elements, number) {
  $elements.forEach(($element) => {
    if (number < 0.16)
      $element.setAttribute(
        "src",
        "static/img/Logos/Gentse Feesten Logos/campagne-1-G.png"
      );
    else if (number >= 0.16 && number < 0.32)
      $element.setAttribute(
        "src",
        "static/img/Logos/Gentse Feesten Logos/campagne-2-E.png"
      );
    else if (number >= 0.32 && number < 0.48)
      $element.setAttribute(
        "src",
        "static/img/Logos/Gentse Feesten Logos/campagne-3-N.png"
      );
    else if (number >= 0.48 && number < 0.64)
      $element.setAttribute(
        "src",
        "static/img/Logos/Gentse Feesten Logos/campagne-4-T.png"
      );
    else if (number >= 0.64 && number < 0.8)
      $element.setAttribute(
        "src",
        "static/img/Logos/Gentse Feesten Logos/campagne-5-S.png"
      );
    else
      $element.setAttribute(
        "src",
        "static/img/Logos/Gentse Feesten Logos/campagne-6-E.png"
      );
  });
}

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
  if ($eventList) buildEventsUI($eventList, generateRandomEvents(events));
  registerListeners();
}

initialize();
