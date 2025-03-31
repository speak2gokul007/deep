/**
* Template Name: Your Name
* Updated: Jun 29 2024
*/
(function() {
  "use strict";

  /**
   * Initiate typed.js
   */
  const typedElements = document.querySelectorAll('.typed');
  if (typedElements.length) {
    typedElements.forEach(element => {
      let typedStrings = element.getAttribute('data-typed-items');
      typedStrings = typedStrings.split(',');
      new Typed(element, {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true
      });
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function(e) {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }

})();