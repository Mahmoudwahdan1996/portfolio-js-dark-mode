const navMenu = document.getElementById("nav-menu");
const navTtogggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navTtogggle) {
  navTtogggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((n) => n.addEventListener("click", linkAction));

// ============ accordion list skills ============

const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => el.addEventListener("click", toggleSkills));

// ============ Qualification  ============

const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabcontent) => {
      tabcontent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");
    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

// ============ services  ============

const modalViews = document.querySelectorAll(".services__modal");
const modalButton = document.querySelectorAll(".services__button");
const modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalButton.forEach((modalbtn, index) => {
  modalbtn.addEventListener("click", () => {
    modal(index);
  });
});

modalClose.forEach((modalbtn) => {
  modalbtn.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/* ================== swipper portfolio ====================== */

let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* ================== swipper testimonial ====================== */

let swipperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute("id");

    const link = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav =document.getElementById("header");
    if(this.scrollY >= 80){
        nav.classList.add("scroll-header");
    }else{
        nav.classList.remove("scroll-header");
    }
}

window.addEventListener('scroll', scrollHeader);


/*==================== DARK LIGHT THEME ====================*/ 


const themeButton =document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const currenTheme =()=>document.body.classList.contains(darkTheme)? "dark" : "light";
const currentIcon =()=>themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun" ;


 const selectedTheme =localStorage.getItem("selected-theme");
const selectedIcon =localStorage.getItem("selected-icon");

if(selectedTheme){
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click" , ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme" ,currenTheme());
    localStorage.setItem("selected-icon" ,currentIcon());    
})