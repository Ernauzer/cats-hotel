$(document).ready(function () {
  $(".hamburger_link").click(function (e) {
    e.preventDefault();
    $(".nav").toggleClass("menu_active").slideToggle(500);
    $(".hamburger_link").toggleClass("active");

    $("nav").hasClass("menu_active")
      ? $("body").attr("style", "overflow: hidden")
      : $("body").removeAttr("style", "overflow: hidden");
  });

  $(".rooms_btn_filter").click((e) => {
    e.preventDefault();
    $(".filter_wrapper").toggleClass("filter_wrapper_active");

    $(".filter_wrapper").hasClass("filter_wrapper_active")
      ? $("body").attr("style", "overflow: hidden")
      : $("body").removeAttr("style", "overflow: hidden");
  });

  $(".btn_pop-up").click((e) => {
    e.preventDefault();
    $(".pop-up_wrapper").addClass("pop-up_wrapper_active");
    $(".pop-up_wrapper").hasClass("pop-up_wrapper_active")
      ? $("body").attr("style", "overflow: hidden")
      : $("body").removeAttr("style", "overflow: hidden");
  });

  function openPopUp(selectorClick, selector, newClass) {
    $(`${selectorClick}`).click((e) => {
      e.preventDefault();
      $(`${selector}`).removeClass(`${newClass}`);
      $("body").removeAttr("style", "overflow: hidden");
    });
  }

  $(function () {
    var owl = $(".rooms_slider.owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      dotClass: "dots_custom",
      navClass: ["prev", "next"],
      navText: " ",
      responsive: {
        1366: {
          nav: true,
          navText: [" "],
        },
      },
    });
  });

  $(".comment_slider.owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dotClass: "dots_custom",
    navClass: ["prev", "next"],
    navText: " ",
    nav: false,
    responsive: {
      768: {
        dots: true,
        autoWidth: true,
        items: 2,
      },
      1366: {
        autoWidth: true,
        items: 2,
        nav: true,
      },
      2020: {
        items: 4,
        nav: true,
      },
    },
  });

  openPopUp(".clouse_btn", ".filter_wrapper", "filter_wrapper_active");
  openPopUp(
    ".pop-up_conteiner .clouse_btn",
    ".pop-up_wrapper",
    "pop-up_wrapper_active"
  );

});
