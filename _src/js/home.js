// Tabs
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.tab_button');
  const contents = document.querySelectorAll('.tab_content');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));
      document.querySelectorAll('.navi_under').forEach(menu => menu.classList.remove('active'));

      // Display corresponding content tab
      button.classList.add('active');
      document.getElementById(button.dataset.tab).classList.add('active');

      // Show the corresponding fixed menu
      const naviId = `navi0${index + 1}`;
      const navi = document.getElementById(naviId);
      if (navi) {
        navi.classList.add('active');
      }

      // Add class to corresponding footer
      const footer = document.querySelector('footer');
      if (footer) {
        footer.classList.remove('is-01', 'is-02', 'is-03');
        const footerClass = `is-0${index + 1}`;
        footer.classList.add(footerClass);
      }
    });
  });
});

// Animation 
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".js-anima-up");
  let delayIndex = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("js-anima-up-on");
          // Uncomment if you only want to run once
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((el) => {
    if (el.classList.contains("js-anima-delay")) {
      el.style.transitionDelay = `${delayIndex * 0.1}s`;
      delayIndex++;
    }
    observer.observe(el);
  });
});


// Navigation Under
document.addEventListener('DOMContentLoaded', () => {
  const naviContainer = document.querySelector('.navi_under_container');
  const triggerElement = document.querySelector('.js_tab_wrap');
  const header = document.querySelector('.header');
  function isInViewport(el, offset = 0) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight - offset && rect.bottom >= offset;
  }

  function toggleNaviContainer() {
    if (!triggerElement || !naviContainer) return;

    const headerHeight = header ? header.offsetHeight : 0;

    if (isInViewport(triggerElement, headerHeight)) {
      naviContainer.classList.add('is-show');
    } else {
      naviContainer.classList.remove('is-show');
    }
  }

  toggleNaviContainer();
  window.addEventListener('scroll', toggleNaviContainer);
  window.addEventListener('resize', toggleNaviContainer);
});

