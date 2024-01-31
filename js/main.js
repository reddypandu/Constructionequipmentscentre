(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $("#date").datetimepicker({
    format: "L",
  });
  $("#time").datetimepicker({
    format: "LT",
  });

  // Service carousel
  $(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    loop: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Pricing carousel
  $(".pricing-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 4,
      },
    },
  });
  $(".pricing-carousell").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    loop: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 4,
      },
      576: {
        items: 4,
      },
      768: {
        items: 4,
      },
      992: {
        items: 4,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    items: 1,
  });
})(jQuery);

//when scroll>100 then navabar fixed to top
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
  }
});

// loader
var loader = function () {
  // Show loader
  $("#ftco-loader").addClass("show");

  // Hide loader after document is fully loaded
  window.onload = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1000);
  };
};

loader();
/**
 * filter function
 */
// const addEventOnElem = function (elem, type, callback) {
//   if (elem.length > 1) {
//     for (let i = 0; i < elem.length; i++) {
//       elem[i].addEventListener(type, callback);
//     }
//   } else {
//     elem.addEventListener(type, callback);
//   }
// };

// const filterBtns = document.querySelectorAll("[data-filter-btn]");
// const filterItems = document.querySelectorAll("[data-filter]");

// let lastClickedFilterBtn = filterBtns[0];

// const filter = function () {
//   lastClickedFilterBtn.classList.remove("active");
//   this.classList.add("active");
//   lastClickedFilterBtn = this;

//   for (let i = 0; i < filterItems.length; i++) {
//     if (
//       this.dataset.filterBtn === filterItems[i].dataset.filter ||
//       this.dataset.filterBtn === "all"
//     ) {
//       filterItems[i].style.display = "block";
//       filterItems[i].classList.add("active");
//     } else {
//       filterItems[i].style.display = "none";
//       filterItems[i].classList.remove("active");
//     }
//   }
// };
// // Call filter function with the first filter button to show details of the first item
// filter.call(filterBtns[0]);

// // Optionally, you can set the initial state of the filter items
// for (let i = 1; i < filterItems.length; i++) {
//   filterItems[i].style.display = "none";
//   filterItems[i].classList.remove("active");
// }
// addEventOnElem(filterBtns, "click", filter);
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
