let body = document.body;

// Start ToTop Button
let toTopBtn = document.querySelector(".toTop");
let resumeSection = document.querySelector(".resume");
// End ToTop Button

// Start Setting box
let settingBox = document.querySelector(".setting-box");
let settingBoxBtn = document.querySelector(".setting-box .setting-icon");

settingBoxBtn.onclick = (_) => {
  settingBox.classList.toggle("active");
};

// Start Change Color Theme
let colorTheme = document.querySelectorAll(
  ".setting-box .controls .color-theme div"
);

function color_theme() {
  colorTheme.forEach((ele) => {
    ele.classList.remove("active");
    this.classList.add("active");
  });
}

colorTheme.forEach((el) => {
  el.addEventListener("click", color_theme);
  el.addEventListener("click", function () {
    this.classList.contains("light")
      ? body.classList.add("light")
      : body.classList.remove("light");
  });
});
// End Change Color Theme

// End Setting box

// Start progress Skills
let progressSection = document.querySelectorAll("aside > div");
let progressSkill = document.querySelectorAll(".prog span");
// End progress Skills

// Start Animation Page
let animationBtn = document.querySelector(".setting-box .controls input");
let resumeCards = document.querySelectorAll(".resume .content .card");

animationBtn.onclick = (_) => {
  if (animationBtn.checked) {
    body.classList.add("no-animation");
  } else {
    body.classList.remove("no-animation");
  }
};
// End Animation Page

window.onscroll = (_) => {
  // progress Skills
  progressSection.forEach((el) => {
    if (window.scrollY >= el.offsetTop - 300) {
      progressSkill.forEach((el) => {
        el.style.width = el.dataset.prog;
      });
    }
  });

  // To Top Button
  if (window.scrollY >= resumeSection.offsetTop - 300) {
    toTopBtn.style.opacity = "1";
    toTopBtn.style.visibility = "visible";
  } else {
    toTopBtn.style.opacity = "0";
    toTopBtn.style.visibility = "hidden";
  }

  // Start Animation
  if (document.body.classList !== "no-animation") {
    resumeCards.forEach((el) => {
      if (window.scrollY >= el.offsetTop - 400) {
        el.style.cssText = `transform: translateX(0%)`;
      } else {
        el.style.cssText = `transform: translateX(inherit)`;
      }
    });
  }
};
