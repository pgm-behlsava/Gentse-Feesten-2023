export {buildEventsUI, generateRandomEvents, generateHTMLForSearch}

function buildEventsUI($element, events) {
  renderPagination(events);

  if (!$element.classList.contains("layout-list")) {
    $element.innerHTML = generateHTMLForEvents(events);
  } else {
    $element.innerHTML = generateHTMLListForEvents(events);
  }
}

function generateRandomEvents(events) {
  const randomEvents = [];

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * events.length);
    let randomEvent = events[randomIndex];
    
    randomEvents.push(randomEvent);
  }
  return randomEvents;
}

function generateHTMLForEvents(events) {
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

    if (event.image !== null && event.image.thumb !== null) {
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
          <li class="event-list-item flex">
            <a href="detail.html">
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

function renderPagination(events) {
  const $pageContainer = document.getElementById('page-container');

  if (events.length !== 0 && $pageContainer) {
    const numberOfPages = Math.ceil(events.length / 24);

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