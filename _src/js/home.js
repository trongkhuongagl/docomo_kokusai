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
