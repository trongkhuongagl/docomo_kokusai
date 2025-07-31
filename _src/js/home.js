/*=============================
  Header Scale
===============================*/
document.addEventListener('DOMContentLoaded', function () {
  function handleScrollHeader() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      header.classList.add('is-scale');
    } else {
      header.classList.remove('is-scale');
    }
  }

  window.addEventListener('scroll', handleScrollHeader);
});

/*=============================
  Tabs
===============================*/
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.tab_button');
  const contents = document.querySelectorAll('.tab_content');
  const tabWrap = document.querySelector('.js_tab_wrap');
  const header = document.querySelector('.header');

  function activateTab(tabId) {
    const button = document.querySelector(`.tab_button[data-tab="${tabId}"]`);
    const content = document.getElementById(tabId);
    if (!button || !content) return;

    // Remove all active states
    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(ct => ct.classList.remove('active'));
    document.querySelectorAll('.navi_under').forEach(menu => menu.classList.remove('active'));

    // Activate the target tab and content
    button.classList.add('active');
    content.classList.add('active');

    // Show fixed menu
    const index = Array.from(buttons).indexOf(button);
    const naviId = `navi0${index + 1}`;
    const navi = document.getElementById(naviId);
    if (navi) navi.classList.add('active');

    // Update footer class
    const footer = document.querySelector('footer');
    if (footer) {
      footer.classList.remove('is-01', 'is-02', 'is-03');
      footer.classList.add(`is-0${index + 1}`);
    }

    // Scroll to tabWrap with offset
    const offsetTop = tabWrap.getBoundingClientRect().top + window.scrollY;
    const offset = header ? (header.offsetHeight * 1.3) : 0;
    window.scrollTo({
      top: offsetTop - offset,
      behavior: 'smooth'
    });
  }

  // On click
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.tab;
      history.pushState(null, '', `#${tabId}`);
      activateTab(tabId);
    });
  });

  // On hashchange (handle when URL changes manually)
  window.addEventListener('hashchange', () => {
    const tabId = window.location.hash.replace('#', '');
    if (tabId) {
      activateTab(tabId);
    }
  });

  // On page load with hash
  const initialTab = window.location.hash.replace('#', '');
  if (initialTab) {
    // Slight delay to wait for DOM painting
    setTimeout(() => activateTab(initialTab), 50);
  }
});

/*=============================
  Animation Fade Up
===============================*/
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

/*=============================
  Navigation Under
===============================*/
document.addEventListener('DOMContentLoaded', () => {
  const naviContainer = document.querySelector('.navi_under_container');
  const headerHeight = document.querySelector('.header').offsetHeight;
  let offsetTopMainImage = document.querySelector('#tab1 .js_main_image').offsetTop;
  const tabButtons = document.querySelectorAll('.tab_button');

  if (!naviContainer || !headerHeight || !offsetTopMainImage || !tabButtons) return;

  function toggleNaviContainer() {
    const scrollY = window.scrollY;
    let targetShow = 0;
    
    if (window.innerWidth < 768) {
      targetShow = (scrollY - (headerHeight * 2)) >= offsetTopMainImage;
    } else {
      targetShow = scrollY >= offsetTopMainImage;
    }
    
    if (targetShow) {
      naviContainer.classList.add('is-show');
    } else {
      naviContainer.classList.remove('is-show');
    }
  }

  // Click tab_button
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const mainImages = document.querySelectorAll('.js_main_image');
      const targetImage = mainImages[index];
      if (targetImage) {
        offsetTopMainImage = targetImage.offsetTop;
      }
    });
  });

  toggleNaviContainer();
  window.addEventListener('scroll', toggleNaviContainer);
  window.addEventListener('resize', toggleNaviContainer);
});