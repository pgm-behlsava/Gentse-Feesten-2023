(() => {
  const $logoContainer = document.querySelectorAll(".logo-container img");
  const $campaignLogoContainer = document.querySelectorAll(
    ".campaign-logo-container img"
  );

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

  addEventListener("load", event => {
    event.preventDefault();
    const randomNumber = Number(Math.random()).toFixed(2);
    animateRandomHeaderLogo($logoContainer, randomNumber);
    animateRandomCampaignLogo($campaignLogoContainer, randomNumber);
  });
})();
