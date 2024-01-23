export {animateRandomCampaignLogo, animateRandomHeaderLogo};

const url = new URL(location.href);

function animateRandomHeaderLogo($elements, number) {
  
  if (url.pathname !== '/opdracht-2-gentse-feesten-pgm-behlsava/events/day.html') {
    $elements.forEach(($element) => {
      if (number < 0.16)
        $element.setAttribute(
          "src",
          "static/img/logos/GF-logo-2023-1-G.svg"
        );
      else if (number >= 0.16 && number < 0.32)
        $element.setAttribute(
          "src",
          "static/img/logos/GF-logo-2023-2-E.svg"
        );
      else if (number >= 0.32 && number < 0.48)
        $element.setAttribute(
          "src",
          "static/img/logos/GF-logo-2023-3-N.svg"
        );
      else if (number >= 0.48 && number < 0.64)
        $element.setAttribute(
          "src",
          "static/img/logos/GF-logo-2023-4-T.svg"
        );
      else if (number >= 0.64 && number < 0.8)
        $element.setAttribute(
          "src",
          "static/img/logos/GF-logo-2023-5-S.svg"
        );
      else
        $element.setAttribute(
          "src",
          "static/img/logos/GF-logo-2023-6-E.svg"
        );
    });
  } 

  else {
    
    $elements.forEach(($element) => {
      if (number < 0.16)
        $element.setAttribute(
          "src",
          "../static/img/logos/GF-logo-2023-1-G.svg"
        );
      else if (number >= 0.16 && number < 0.32)
        $element.setAttribute(
          "src",
          "../static/img/logos/GF-logo-2023-2-E.svg"
        );
      else if (number >= 0.32 && number < 0.48)
        $element.setAttribute(
          "src",
          "../static/img/logos/GF-logo-2023-3-N.svg"
        );
      else if (number >= 0.48 && number < 0.64)
        $element.setAttribute(
          "src",
          "../static/img/logos/GF-logo-2023-4-T.svg"
        );
      else if (number >= 0.64 && number < 0.8)
        $element.setAttribute(
          "src",
          "../static/img/logos/GF-logo-2023-5-S.svg"
        );
      else
        $element.setAttribute(
          "src",
          "../static/img/logos/GF-logo-2023-6-E.svg"
        );
    });
  }
  
}

function animateRandomCampaignLogo($elements, number) {

  if (url.pathname !== '/opdracht-2-gentse-feesten-pgm-behlsava/events/day.html') {
    $elements.forEach(($element) => {
      if (number < 0.16)
        $element.setAttribute(
          "src",
          "static/img/logos/campaign-logos/campagne-1-G.png"
        );
      else if (number >= 0.16 && number < 0.32)
        $element.setAttribute(
          "src",
          "static/img/logos/campaign-logos/campagne-2-E.png"
        );
      else if (number >= 0.32 && number < 0.48)
        $element.setAttribute(
          "src",
          "static/img/logos/campaign-logos/campagne-3-N.png"
        );
      else if (number >= 0.48 && number < 0.64)
        $element.setAttribute(
          "src",
          "static/img/logos/campaign-logos/campagne-4-T.png"
        );
      else if (number >= 0.64 && number < 0.8)
        $element.setAttribute(
          "src",
          "static/img/logos/campaign-logos/campagne-5-S.png"
        );
      else
        $element.setAttribute(
          "src",
          "static/img/logos/campaign-logos/campagne-6-E.png"
        );
    });
  } 
  else {
    
    $elements.forEach(($element) => {
      if (number < 0.16)
        $element.setAttribute(
          "src",
          "../static/img/logos/campaign-logos/campagne-1-G.png"
        );
      else if (number >= 0.16 && number < 0.32)
        $element.setAttribute(
          "src",
          "../static/img/logos/campaign-logos/campagne-2-E.png"
        );
      else if (number >= 0.32 && number < 0.48)
        $element.setAttribute(
          "src",
          "../static/img/logos/campaign-logos/campagne-3-N.png"
        );
      else if (number >= 0.48 && number < 0.64)
        $element.setAttribute(
          "src",
          "../static/img/logos/campaign-logos/campagne-4-T.png"
        );
      else if (number >= 0.64 && number < 0.8)
        $element.setAttribute(
          "src",
          "../static/img/logos/campaign-logos/campagne-5-S.png"
        );
      else
        $element.setAttribute(
          "src",
          "../static/img/logos/campaign-logos/campagne-6-E.png"
        );
    });
  }
  
}