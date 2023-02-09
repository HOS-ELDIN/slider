let slideNumber = document.getElementById("slide-number"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  indicatorsContainer = document.querySelector(".indicators ul"),
  imgs = document.querySelectorAll(".slider-container img"),
  slide = 2;

//create indicators
imgs.forEach((e, i) => {
  let ind = document.createElement("li");
  ind.appendChild(document.createTextNode(i + 1));
  indicatorsContainer.appendChild(ind);
});

let indicators = document.querySelectorAll(".indicators ul li");

window.onload = () => {
  activeate(slide);
};

function activeate(id) {
  imgs.forEach((e, i) => {
    if (i === id) {
      e.style.opacity = 1;
    } else {
      e.style.opacity = 0;
    }
  });
  indicators.forEach((e, i) => {
    if (i === id) {
      e.className = "active";
    } else {
      e.classList.remove("active");
    }
  });
  slideNumber.innerHTML = `slide #${id + 1}`;
}

next.addEventListener("click", () => {
  if (slide + 1 < imgs.length) {
    slide++;
    activeate(slide);
  } else {
    slide = 0
    activeate(slide)
  }
});
prev.addEventListener("click", () => {
  if (slide > 0) {
    slide--;
    activeate(slide);
  } else {
    slide = 4
    activeate(slide)
  }
});

indicators.forEach((e, i) => {
  e.addEventListener("click", () => {
    slide = i;
    activeate(i);
  });
});
