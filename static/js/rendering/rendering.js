import { filterDataByCategory } from "../helpers/filter.js";
import { transformCategoryStringForID } from "../helpers/strings.js";
export {buildEventsUI, buildEventsSpotlightUI, buildNewsUI, buildFilterUI, buildEventsByCategoryUI, generateRandomEvents, generateHTMLForSearch}

const url = new URL(location.href);

function buildEventsUI($element, events) {
  renderPagination(events);

  if (!$element.classList.contains("layout-list")) {
    $element.innerHTML = generateHTMLForEvents(events);
  } else {
    $element.innerHTML = generateHTMLListForEvents(events);
  }
}

function buildEventsSpotlightUI($element, events) {
  $element.innerHTML = generateHTMLForEvents(events);
}

function buildNewsUI($element, news) {
  renderPagination(news);
  if ($element.getAttribute('id') === 'home-news-list') {
    $element.innerHTML = generateHTMLForHomePageNews(news);
  }
  if ($element.getAttribute('id') === 'news-list') {
    $element.innerHTML = generateHTMLForNewsPage(news);
  }
}

function buildFilterUI($element, filter) {
  $element.innerHTML = generateHTMLForCategories(filter);
}

function buildEventsByCategoryUI($element, events, categories) {
  if (!$element.classList.contains("layout-list")) {
    $element.innerHTML = generateHTMLForEventsByCategory(events, categories);
  } else {
    $element.innerHTML = generateHTMLListForEventsByCategory(events, categories);
  }
  
}

function generateRandomEvents(events, numberOfEvents) {
  const randomEvents = [];

  for (let i = 0; i < numberOfEvents; i++) {
    const randomIndex = Math.floor(Math.random() * events.length);
    let randomEvent = events[randomIndex];
    
    randomEvents.push(randomEvent);
  }
  return randomEvents;
}

function generateHTMLForEvents(events) {
  let html = "";
  let abbreviation;

  if (url.pathname !== '/events/day.html') {
    const slicedEvents = events.slice(0, 24);

    slicedEvents.forEach((event) => {
      switch (event.day_of_week) {
        case "Maandag":
          abbreviation = "Ma";
          break;
        case "Dinsdag":
          abbreviation = "Di";
          break;
        case "Woensdag":
          abbreviation = "Wo";
          break;
        case "Donderdag":
          abbreviation = "Do";
          break;
        case "Vrijdag":
          abbreviation = "Vr";
          break;
        case "Zaterdag":
          abbreviation = "Za";
          break;
        case "Zondag":
          abbreviation = "Zo";
          break;
      }
  
      if (event.image !== null && event.image.full !== null && event.image.thumb !== null) {
        html += `
            <li class="event-item">
              <a href="detail.html">
                <div class="event-card">
                  <div class="event-thumbnail">
                    <span class="event-date">${abbreviation} ${event.day} juli</span>
                    <img src="${event.image.thumb}" alt="Optreden GF">
                    <div class="event-info">
                      <h3 class="event-title">${event.title}</h3>
                      <p class="event-location">${event.location}</p>
                      <p class="event-start">${event.start}</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          `;
      } else {
        html += `
            <li class="event-item">
              <a href="detail.html">
                <div class="event-card">
                  <div class="event-thumbnail">
                    <span class="event-date">${abbreviation} ${event.day} juli</span>
                    <img src="static/img/placeholder.jpg" alt="Optreden GF">
                    <div class="event-info">
                      <h3 class="event-title">${event.title}</h3>
                      <p class="event-location">${event.location}</p>
                      <p class="event-start">${event.start}</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          `;
      }
    });
  } else {
    events.forEach((event) => {
  
      if (event.image !== null && event.image.full !== null && event.image.thumb !== null) {
        html += `
            <li class="event-item">
              <a href="detail.html">
                <div class="event-card">
                  <div class="event-thumbnail">
                    <img src="${event.image.thumb}" alt="Optreden GF">
                    <div class="event-info">
                      <h3 class="event-title">${event.title}</h3>
                      <p class="event-location">${event.location}</p>
                      <p class="event-start">${event.start}</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          `;
      } else {
        html += `
            <li class="event-item">
              <a href="detail.html">
                <div class="event-card">
                  <div class="event-thumbnail">
                    <img src="../static/img/placeholder.jpg" alt="Optreden GF">
                    <div class="event-info">
                      <h3 class="event-title">${event.title}</h3>
                      <p class="event-location">${event.location}</p>
                      <p class="event-start">${event.start}</p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          `;
      }
    });
  }
  
  return html;
}

function generateHTMLListForEvents(events) {
  let html = "";
  let abbreviation;

  const slicedEvents = events.slice(0, 24);

  slicedEvents.forEach((event) => {
    switch (event.day_of_week) {
      case "Maandag":
        abbreviation = "Ma";
        break;
      case "Dinsdag":
        abbreviation = "Di";
        break;
      case "Woensdag":
        abbreviation = "Wo";
        break;
      case "Donderdag":
        abbreviation = "Do";
        break;
      case "Vrijdag":
        abbreviation = "Vr";
        break;
      case "Zaterdag":
        abbreviation = "Za";
        break;
      case "Zondag":
        abbreviation = "Zo";
        break;
    }

    html += `
          <li class="flex">
            <a href="detail.html" class="event-list-item flex">
              <div class="event-list-date flex">
                <p class="event-list-day">${abbreviation} ${event.day} juli</p>
                <p class="event-list-start">${event.start}</p> 
              </div>
              <h3 class="event-list-title">${event.title}</h3>   
              <p class="event-list-location">${event.location}</p>
            </a>
          </li>
        `;
  });
  return html;
}

function generateHTMLForHomePageNews(news) {
  let html = "";
  const slicedNews = news.slice(0, 3);

  slicedNews.forEach((item, index) => {
    html += `
      <li id="news-item-${index + 1}">
        <a href="news.html">
          <h2>${item.title}</h2>
          <figure class="news-item-arrow">
            <img src="static/img/icons/arrow-right-long.svg" alt="arrow-right">
          </figure>
        </a>
      </li>
    `;
  });

  html += `
    <img src="${slicedNews[0].picture.large}" alt="GF" class="home-news-image">
  `;

  return html;
}

function generateHTMLForNewsPage(news) {
  let html = "";
  const slicedNews = news.slice(0, 8);

  slicedNews.forEach(item => {
    html += `
      <li>
        <a href="#" class="news-item flex">
          <section class="news-item-desc flex flex--col">
            <h2>${item.title}</h2>
            <figure class="news-item-arrow">
              <img src="static/img/icons/arrow-right-long.svg" alt="arrow-right">
            </figure>
          </section>
          <figure class="news-item-image">
            <img src="${item.picture.large}" alt="GF">
          </figure>
        </a>
      </li>
    `;
  });

  return html;
}

function generateHTMLForCategories(categories) {
  let html = "";
  let id;

  if (url.search) {
    categories.forEach(category => {
      id = transformCategoryStringForID(category);
      
      html += `
        <a href="${url.origin}/events/day.html${url.search}#${id}" class="filter-body-item flex flex--center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M29.85 9.66C28.14-.6 30.89 1.86 20.39.23c-2.1-.32-4.12-.19-5.73 1.42-4.52 4.5-9.02 9.03-13.54 13.52-1.37 1.36-1.57 2.63-.09 4.08 3.17 3.11 6.28 6.28 9.42 9.42 1.55 1.56 2.99 1.72 4.65.01 4.21-4.33 8.5-8.57 12.78-12.83 1.44-1.44 2.35-3.07 2.09-4.89-.05-.63-.05-.98-.11-1.32Zm-8.71 1.98c-2.13-.08-3.02-1.33-3.04-3.1-.01-1.88 1.22-3.04 3.03-2.95 1.71.09 2.98 1.09 2.9 3.09-.08 1.93-1.15 2.85-2.89 2.95Z"/></svg>
          <p>${category}</p>
        </a>
      `;
    });
  } else {
    categories.forEach(category => {
      id = transformCategoryStringForID(category);
      
      html += `
        <a href="${url.origin}/events/day.html#${id}" class="filter-body-item flex flex--center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M29.85 9.66C28.14-.6 30.89 1.86 20.39.23c-2.1-.32-4.12-.19-5.73 1.42-4.52 4.5-9.02 9.03-13.54 13.52-1.37 1.36-1.57 2.63-.09 4.08 3.17 3.11 6.28 6.28 9.42 9.42 1.55 1.56 2.99 1.72 4.65.01 4.21-4.33 8.5-8.57 12.78-12.83 1.44-1.44 2.35-3.07 2.09-4.89-.05-.63-.05-.98-.11-1.32Zm-8.71 1.98c-2.13-.08-3.02-1.33-3.04-3.1-.01-1.88 1.22-3.04 3.03-2.95 1.71.09 2.98 1.09 2.9 3.09-.08 1.93-1.15 2.85-2.89 2.95Z"/></svg>
          <p>${category}</p>
        </a>
      `;
    });
  }

  return html;
}

function generateHTMLForEventsByCategory(events, categories) {
  let html = "";
  let id;
  let filteredEvents;
  
  categories.forEach(category => {
    id = transformCategoryStringForID(category);
    filteredEvents = filterDataByCategory(events, category);

    html += `
      <li>
        <h1 id="${id}">${category}</h1>
        <ul class="events-container">
    `;

    for (const event of filteredEvents) {
      if (event.image !== null && event.image.full !== null && event.image.thumb !== null) {
        html += `
          <li class="event-item">
            <a href="detail.html">
              <div class="event-card">
                <div class="event-thumbnail">
                  <img src="${event.image.thumb}" alt="Optreden GF">
                  <div class="event-info">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-location">${event.location}</p>
                    <p class="event-start">${event.start}</p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        `;
      } else {
        html += `
          <li class="event-item">
            <a href="detail.html">
              <div class="event-card">
                <div class="event-thumbnail">
                  <img src="../static/img/placeholder.jpg" alt="Optreden GF">
                  <div class="event-info">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-location">${event.location}</p>
                    <p class="event-start">${event.start}</p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        `;
      }
    }

    html += `
      </ul>
      </li>
    `;
  });

  return html;
}

function generateHTMLListForEventsByCategory(events, categories) {
  let html = "";
  let id;
  let filteredEvents;
  
  categories.forEach(category => {
    id = transformCategoryStringForID(category);
    filteredEvents = filterDataByCategory(events, category);

    html += `
      <li>
        <h1 id="${id}">${category}</h1>
        <ul class="events-container">
    `;

    for (const event of filteredEvents) {
      html += `
        <li class="flex">
          <a href="detail.html" class="event-list-item flex">
            <div class="event-list-date flex">
              <p class="event-list-start">${event.start}</p> 
            </div>
            <h3 class="event-list-title">${event.title}</h3>   
            <p class="event-list-location">${event.location}</p>
          </a>
        </li>
      `;
    }

    html += `
      </ul>
      </li>
    `;
  });

  return html;
}

function renderPagination(data) {
  const $pageContainer = document.getElementById('page-container');

  if (data.length !== 0 && $pageContainer) {
    const numberOfPages = Math.ceil(data.length / 24);

      for (let i = 1; i < numberOfPages + 1; i++) {
        if ($pageContainer.children.length === numberOfPages) break;
        
        if (i < 10) {
          $pageContainer.innerHTML += `
            <li class="flex flex--center page-number"><span>${i.toString().padStart(2, '0')}</span></li>
          `;
        } else {
          $pageContainer.innerHTML += `
            <li class="flex flex--center page-number"><span>${i}</span></li>
          `;
        }
      }
  }
}

function generateHTMLForSearch($element, data, query) {
  $element.innerHTML = `
      <p><strong>${data.length} resultaten</strong> voor "${query}"</p>
    `;
}