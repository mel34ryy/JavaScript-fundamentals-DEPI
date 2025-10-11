const navLinks = document.querySelectorAll(".navbar .nav-item .nav-link");
const linksText = ["About Us", "Our Products", "We Supply", "Contact Us"];

navLinks.forEach((link, index) => {
  link.textContent = linksText[index];
  link.style =
    "text-decoration: none; color: #fff; font-size: 16px; font-weight: 400;";
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  navText: [
    '<i class="bi bi-chevron-left"></i>',
    '<i class="bi bi-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

var btn = document.querySelector(".top");

window.onscroll = function () {
  document.documentElement.scrollTop > 400
    ? btn.classList.add("show")
    : btn.classList.remove("show");
};

btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const fName = document.getElementById("name");
const fEmail = document.getElementById("mail");
const fPhone = document.getElementById("phone");
const fSubject = document.getElementById("subject");
const fMessage = document.getElementById("message");

fName.addEventListener("change", (e) => {
  console.log(e.target.value);
});

fEmail.addEventListener("change", (e) => {
  console.log(e.target.value);
});

fPhone.addEventListener("change", (e) => {
  console.log(e.target.value);
});

fSubject.addEventListener("change", (e) => {
  console.log(e.target.value);
});

fMessage.addEventListener("change", (e) => {
  console.log(e.target.value);
});
