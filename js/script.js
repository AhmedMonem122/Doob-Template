"use strict";

// Selected Elements
const toggleMenu = document.querySelector(".toggle-menu");
const ulMenu = document.querySelector(".ul-menu");
const hero = document.querySelector(".hero");
const hiddenImages = document.querySelectorAll(".image-hide");
const showMoreLessBtn = document.querySelector(".show-more-less");
const slidesContainer = document.querySelector(".blog-stories");
const slides = document.querySelectorAll(".blog-box");
const prevButton = document.querySelector(".fa-arrow-left-long");
const nextButton = document.querySelector(".fa-arrow-right-long");
const showMoreBlogsBtn = document.querySelector(".blog-btn");
const hiddenBlogs = document.querySelectorAll(".hidden-blogs");
const toggleSpan = document.querySelector(".toggle-span");
const slidesWrapper = document.querySelector(".slides-wrapper");

// Toggle Menu
toggleMenu.addEventListener("click", function () {
  ulMenu.classList.toggle("nav-hidden");
  hero.classList.toggle("move-down");
  toggleSpan.classList.toggle("cross-menu");
});

// Show More/Less button
showMoreLessBtn.addEventListener("click", function () {
  hiddenImages.forEach((img) => img.classList.toggle("hidden"));

  hiddenImages.forEach((img) => img.classList.toggle("show"));
  // console.log(hiddenImages.forEach((img) => img.classList.contains("hidden")));

  // if (
  //   hiddenImages.forEach((img) => {
  //     return img.classList.contains("show");
  //   })
  // )
  //   showMoreLessBtn.innerHTML = "Show Less.";
  // else if (
  //   hiddenImages.forEach((img) => {
  //     return img.classList.contains("hidden");
  //   })
  // )
  //   showMoreLessBtn.innerHTML = "Show More.";

  hiddenImages.forEach((img) => {
    if (img.classList.contains("show"))
      showMoreLessBtn.innerHTML = "Show Less.";
    else showMoreLessBtn.innerHTML = "Show More.";
  });
});

// Slider
// There is also some bugs, I haven't learnt yet how to fix them
let curSlide = 0;
let seconds = 4;

const goToSlide = function () {
  switch (curSlide) {
    case 0:
      slidesContainer.style.transform = `translateX(${(curSlide += -1167)}px)`;
      break;
    case -1167:
      slidesContainer.style.transform = `translateX(${(curSlide = 0)})`;
      break;
  }
  slidesContainer.style.transition = "0.3s";
};

nextButton.addEventListener("click", goToSlide);

prevButton.addEventListener("click", goToSlide);

let slidesIntervalID = false;
const ticker = function () {
  slidesIntervalID = setInterval(goToSlide, seconds * 1000);
};

const noMediaSlide = function () {
  if (window.matchMedia("(max-width: 991px)").matches)
    clearInterval(slidesIntervalID);
  else ticker();
};

noMediaSlide();

slidesWrapper.addEventListener("mouseover", function () {
  clearInterval(slidesIntervalID);
});

slidesWrapper.addEventListener("mouseout", noMediaSlide);

// Show More/Less Stories Button
showMoreBlogsBtn.addEventListener("click", function () {
  hiddenBlogs.forEach((blog) => blog.classList.toggle("hide-blogs"));
  hiddenBlogs.forEach((blog) => blog.classList.toggle("show-blogs"));

  hiddenBlogs.forEach((blog) => {
    if (blog.classList.contains("show-blogs"))
      showMoreBlogsBtn.innerHTML = "Show Less Stories.";
    else showMoreBlogsBtn.innerHTML = "Show More Stories.";
  });
});
