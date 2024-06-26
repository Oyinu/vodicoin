function toggleMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

const sr = ScrollReveal (
    {
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    }
);

sr.reveal('.hero-text', {delay:200, origin:'top'});

const si = ScrollReveal (
    {
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    }
);

si.reveal('.hero-img', {delay:200, origin:'top'});