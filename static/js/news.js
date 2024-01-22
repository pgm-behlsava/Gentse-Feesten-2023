import { fetchData } from "./handlers/dataHandler.js";
import { newsAPI } from "./main.js";
import { buildNewsUI } from "./rendering/rendering.js";

let news = await fetchData(newsAPI);

const $newsList = document.getElementById('news-list');

function initialize() {
  buildNewsUI($newsList, news);
}

initialize();