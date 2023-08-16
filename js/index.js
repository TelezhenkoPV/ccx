$(document).ready(function () {
  const mainLogo = document.getElementById('mainLogo');
  const rect1 = document.querySelector('.rect-1');
  const rect2 = document.querySelector('.rect-2');
  const rect3 = document.querySelector('.rect-3');
  const intoText = document.querySelector('.into-text');
  const tabs = document.querySelector('.tabs');
  const logoGroup = document.querySelector('.logo-group');
  const phoneMediaQuery = window.matchMedia('(max-width: 767px)');
  var isBottom35 = false;

  mainLogo.addEventListener('click', function () {
    document.querySelectorAll(".tabs_heading").forEach(function (element) {
      if (isBottom35) {
        element.style.bottom = '-50%';
        element.style.opacity = '0';
        element.style.transform = 'translateY(50%)';
      } else {
        element.style.bottom = '35%';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });

    isBottom35 = !isBottom35;
  });

  phoneMediaQuery.addEventListener('change', onPhoneScreenChange);

  onPhoneScreenChange(phoneMediaQuery);

  $(".image-inner").on("click", function () {
    var isActive = $(this).hasClass("active");

    $(".tabs_link, .tabs_content").removeClass("active");

    if (!isActive) {
      $(this).next(".tabs_content").addClass("active");
    }
    updateLogoGroupDisplay();
  });

  $(document).ready(function () {
    $(".tabs_link, .tabs_content").removeClass("active");

    updateLogoGroupDisplay();

    $(".tabs_link").on("click", function () {

      var isActive = $(this).hasClass("active");

      $(".tabs_link, .tabs_content").removeClass("active");

      if (!isActive) {
        $(this).addClass("active");
        $(this).next(".tabs_content").addClass("active");
      } else {
        $(this).removeClass("active");
      }

      updateLogoGroupDisplay();
    });
  });

  setTimeout(function () {
    mainLogo.style.opacity = "1";
  }, 1000);

  intoText.style.display = 'none';

  setTimeout(function () {
    for (let i = 0; i < document.getElementsByClassName('rectangle').length; i++) {

      document.getElementsByClassName('rectangle')[i].style.transform = 'translateX(0)';
    }
  }, 200);

  $(".main-wrapper").on("click", () => expandRectangles(phoneMediaQuery.matches));

  window.addEventListener('load', function () {
    const elements = document.getElementsByClassName('rectangle');
    const delay = 500;
    let currentDelay = delay;

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.transitionDelay = currentDelay + 'ms';
      currentDelay += delay;
    }

    setTimeout(function () {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.transform = 'translateX(0)';
      }

      intoText.style.transform = 'translateY(100%)';
      intoText.style.opacity = '0';
      intoText.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
      intoText.style.transitionDelay = currentDelay + 'ms';

      setTimeout(function () {
        intoText.style.transform = 'translateY(0)';
        intoText.style.opacity = '1';
        intoText.style.transitionDelay = '0';
      }, 100);
    }, delay);

    tabs.addEventListener('click', function () {
      hasActiveElement();
    });
  });

  function expandRectangles(isMobile) {
    const elements = document.getElementsByClassName('rectangle');
    const delay = 200;

    for (var i = 0; i < elements.length; i++) {
      setTimeout(function (index) {
        if (isMobile) {
          elements[index].style.width = '100%';
        } else {
          elements[index].style.height = '100%';
        }
      }, delay * i, i);
    }
  }

  function updateLogoGroupDisplay() {
    const hasActiveTab = $(".tabs .active").length > 0;

    if (hasActiveTab) {
      $(".logo-group").hide();
    } else {
      $(".logo-group").show();
    }
  }

  function onPhoneScreenChange(event) {
    let isClicked = false;

    if (event.matches) {
      rect1.style.height = '50px';
      rect2.style.height = '50px';
      rect3.style.height = '50px';

      mainLogo.addEventListener('click', function () {
        if (!isClicked) {
          rect1.style.width = '95%';
          rect2.style.width = '95%';
          rect3.style.width = '95%';

          rect1.style.transition = '1s';
          rect2.style.transition = '1.5s';
          rect3.style.transition = '2s';

          intoText.style.display = 'block';
          intoText.style.transform = 'translateY(200px)';
          intoText.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
          intoText.style.opacity = '0';
          setTimeout(function () {
            intoText.style.transform = 'translateY(0)';
            intoText.style.opacity = '1';
            smoothHeightTransition(intoText, 'auto', 100);

            hasActiveElement();
          }, 100);
        } else {
          rect1.style.width = '50px';
          rect2.style.width = '50px';
          rect3.style.width = '50px';

          intoText.style.transform = 'translateY(100%)';
          intoText.style.transition = 'none';
          intoText.style.height = '0';
          intoText.style.opacity = '0';
          tabs.classList.remove('align-inherit');
        }

        isClicked = !isClicked;
      });

      tabs.addEventListener('click', function () {

        hasActiveElement();
      });

      mainLogo.addEventListener('click', function () {
        document.querySelectorAll(".tabs_heading").forEach(function (element) {
          if (isBottom35) {
            element.style.bottom = '25%';
            element.style.opacity = '0';
            element.style.transform = 'translateX(100%)';
          } else {
            element.style.bottom = '25%';
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
          }
        });

        isBottom35 = !isBottom35;
      });
    } else {
      rect1.style.width = '100px';
      rect2.style.width = '100px';
      rect3.style.width = '100px';

      mainLogo.addEventListener('click', function () {
        if (!isClicked) {
          rect1.style.height = '100%';
          rect2.style.height = '100%';
          rect3.style.height = '100%';

          // Set different transition durations for each element
          rect1.style.transition = '1s';
          rect2.style.transition = '1.5s';
          rect3.style.transition = '2s';

          intoText.style.display = 'block';
          intoText.style.transform = 'translateY(200px)';
          intoText.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
          intoText.style.opacity = '0';
          setTimeout(function () {
            intoText.style.transform = 'translateY(0)';
            intoText.style.opacity = '1';
            smoothHeightTransition(intoText, 'auto', 100);
            hasActiveElement();
          }, 100);
        } else {
          rect1.style.height = '50px';
          rect2.style.height = '50px';
          rect3.style.height = '50px';

          intoText.style.transform = 'translateY(100%)';
          intoText.style.transition = 'none';
          intoText.style.height = '0';
          intoText.style.opacity = '0';
          tabs.classList.remove('align-inherit');
        }

        isClicked = !isClicked;
      });

      tabs.addEventListener('click', function () {
        hasActiveElement();
      });
    }
  }

  function smoothHeightTransition(element, height, transitionDuration) {
    element.style.transition = 'height ' + transitionDuration + 'ms ease-in-out';
    element.style.height = height;
  }

  function hasActiveElement() {
    const activeElement = tabs.querySelector('.active');

    if (activeElement) {
      tabs.classList.add('align-inherit');
      logoGroup.style.opacity = '0';
      logoGroup.style.visibility = "hidden"
    } else {
      tabs.classList.remove('align-inherit');
      logoGroup.style.opacity = '1';
      logoGroup.style.visibility = "visible"
    }
  }
})
