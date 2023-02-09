let sliderStyle = document
  .querySelector("input:checked + label")
  .innerText.toLowerCase();
let sliderContainer = document.querySelector(".slider-container");

window.addEventListener("click", (e) => {
  if (e.target.name == "option") {
    sliderStyle = e.target.id;
  }
  if (sliderStyle == "fade") {
    // console.log(`fade true`);
    document.styleSheets[2].cssRules[3].style.removeProperty("transform");
    //give these to imges
    document.styleSheets[2].cssRules[3].style.setProperty(
      "position",
      "absolute"
    );
    sliderContainer.style.display = "block";
    sliderContainer.style.overflow = "auto";
    activeate(slide);
  } else if (sliderStyle == "slide") {
    //give these to container
    sliderContainer.style.display = "flex";
    sliderContainer.style.overflow = "hidden";
    document.styleSheets[2].cssRules[3].style.removeProperty("position");
    imgs.forEach((e) => {
      e.style.opacity = 1;
    });
    activeate(slide);
  }
});

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
  if (sliderStyle == "fade") {
    console.log(`fade true`);
    //give these to imges
    document.styleSheets[2].cssRules[3].style.setProperty(
      "position",
      "absolute"
    );
  } else if (sliderStyle == "slide") {
    //give these to container
    sliderContainer.style.display = "flex";
    sliderContainer.style.overflow = "hidden";
  }
  activeate(slide);
};
function activeate(id) {
  if (sliderStyle == "fade") {
    imgs.forEach((e, i) => {
      if (i === id) {
        e.style.opacity = 1;
      } else {
        e.style.opacity = 0;
      }
    });
  } else if (sliderStyle == "slide") {
    document.styleSheets[2].cssRules[3].style.setProperty(
      "transform",
      `translatex(-${slide * 800}px)`
    );
  }
  indicators.forEach((e, i) => {
    if (i === id) {
      e.className = "active";
      imgs[i].classList.add("active");
    } else {
      e.classList.remove("active");
      imgs[i].classList.remove("active");
    }
  });

  if (sliderStyle == "fade") {
    slideNumber.innerHTML = `Fade #${id + 1}`;
  } else if (sliderStyle == "slide") {
    slideNumber.innerHTML = `Slide #${id + 1}`;
  }
}

next.addEventListener("click", () => {
  if (slide + 1 < imgs.length) {
    slide++;
    activeate(slide);
    // console.log(slide);
    prev.classList.remove("disabled");
    if (slide + 1 == imgs.length && sliderStyle == "slide") {
      next.classList.add("disabled");
    }
  } else {
    slide = 0;
    activeate(slide);
  }
});
prev.addEventListener("click", () => {
  if (slide > 0) {
    slide--;
    activeate(slide);
    next.classList.remove("disabled");
    if (slide == 0 && sliderStyle == "slide") {
      prev.classList.add("disabled");
    }
  } else {
    if (sliderStyle == "slide") {
    } else {
      slide = 4;
      activeate(slide);
    }
  }
});

indicators.forEach((e, i) => {
  e.addEventListener("click", () => {
    slide = i;
    activeate(i);
  });
});
