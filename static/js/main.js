(() => {
  const $headerLogo = document.querySelectorAll(".logo-container img");
  const $campaignLogo = document.querySelectorAll(
    ".campaign-logo-container img"
  );
  const $openMenuButton = document.querySelector(".hamburger-icon--header");
  const $closeMenuButton = document.querySelector(".hamburger-icon-close");
  const $hamburgerMenu = document.getElementById("hamburger-menu");
  const $eventList = document.getElementById("event-list");

  let events;

  function animateRandomHeaderLogo($elements, number) {
    $elements.forEach(($element) => {
      if (number < 0.16)
        $element.setAttribute(
          "src",
          "static/img/Logos/Gentse Feesten Logos/GF-logo-2023-1-G.svg"
        );
      else if (number >= 0.16 && number < 0.32)
        $element.setAttribute(
          "src",
          "static/img/Logos/Gentse Feesten Logos/GF-logo-2023-2-E.svg"
        );
      else if (number >= 0.32 && number < 0.48)
        $element.setAttribute(
          "src",
          "static/img/Logos/Gentse Feesten Logos/GF-logo-2023-3-N.svg"
        );
      else if (number >= 0.48 && number < 0.64)
        $element.setAttribute(
          "src",
          "static/img/Logos/Gentse Feesten Logos/GF-logo-2023-4-T.svg"
        );
      else if (number >= 0.64 && number < 0.8)
        $element.setAttribute(
          "src",
          "static/img/Logos/Gentse Feesten Logos/GF-logo-2023-5-S.svg"
        );
      else
        $element.setAttribute(
          "src",
          "static/img/Logos/Gentse Feesten Logos/GF-logo-2023-6-E.svg"
        );
    });
  }

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

  function generateRandomNumber() {
    return Number(Math.random()).toFixed(2);
  }

  function openHamburgerMenu($element) {
    $element.classList.add("active");
  }

  function closeHamburgerMenu($element) {
    $element.classList.remove("active");
  }

  function registerListeners() {
    $openMenuButton.addEventListener("click", () => {
      openHamburgerMenu($hamburgerMenu);
    });
    $closeMenuButton.addEventListener("click", () => {
      closeHamburgerMenu($hamburgerMenu);
    });
  }

  async function getEvents(url) {
    let events = await fetchData(url);
    return events;
  }

  function buildEventsUI(events) {
    $eventList.innerHTML = generateHTMLForEvents(events);
  }

  function generateHTMLForEvents(events) {
    let html = "";
    let abbrev;
    const randomEvents = [];

    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * events.length);
      const randomEvent = events[randomIndex];
      randomEvents.push(randomEvent);
    }

    randomEvents.forEach((event) => {

      switch (event.day_of_week) {
        case "Maandag":
          abbrev = "Ma";
          break;
        case "Dinsdag":
          abbrev = "Di";
          break;
        case "Woensdag":
          abbrev = "Wo";
          break;
        case "Donderdag":
          abbrev = "Do";
          break;
        case "Vrijdag":
          abbrev = "Vr";
          break;
        case "Zaterdag":
          abbrev = "Za";
          break;
        case "Zondag":
          abbrev = "Zo";
          break;
      }

      if (event.image !== null && event.image.thumb !== null) {
        html += `
          <li class="event-item">
            <a href="detail.html">
              <div class="event-thumbnail">
                <span class="event-date">${abbrev} ${event.day} juli</span>
                <img src="${event.image.thumb}" alt="Optreden GF">
                <h3 class="event-title">${event.title}</h3>
              </div>
              <div class="event-info">
                <p class="event-location">${event.location}</p>
                <p class="event-start">${event.start}</p>
              </div>
            </a>
          </li>
        `;
      }
    });
    return html;
  }

  async function initialize() {
    addEventListener("load", (event) => {
      event.preventDefault();
      const randomNumber = generateRandomNumber();
      animateRandomHeaderLogo($headerLogo, randomNumber);
      animateRandomCampaignLogo($campaignLogo, randomNumber);
    });

    events = await getEvents(
      "https://www.pgm.gent/data/gentsefeesten/events_500.json"
    );
    buildEventsUI(events);
    registerListeners();
  }

  initialize();
})();
