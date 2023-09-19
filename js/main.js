// NAVBAR =================================================
const btNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".navbar");

btNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// ON SCROLL NAVBAR ============================================
const navEl = document.querySelector(".s2");
const obs1 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");

    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs1.observe(navEl);

// Comming Soon Countdown Start =================================
var countDownDate = new Date("Jun 10, 2023 00:00:00").getTime();
var x = setInterval(function () {
  let currentDate = new Date().getTime(); /* current date function is hear */
  let timebetween = currentDate - countDownDate;

  let days = Math.floor(timebetween / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timebetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timebetween % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timebetween % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("munites").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

// sliderBox ========================================
$("#slide-box").slick({
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 3,
  arrows: false /*btn*/,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// COUNTER ON SCROLL ===============================
const sectionHeroEl = document.querySelector(".bg-counter");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      // COUNTER
      const counters = document.querySelectorAll(".counter-inr");

      counters.forEach((counter) => {
        counter.innerHTML = 0;

        const updateCounter = () => {
          const targetCount = +counter.getAttribute("data-target");

          const startingCount = Number(counter.innerHTML);

          const incr = targetCount / 100;

          if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 30);
          } else {
            counter.innerHTML = targetCount;
          }
        };

        updateCounter();
      });
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
