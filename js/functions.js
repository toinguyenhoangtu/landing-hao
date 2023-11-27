
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $(document).on("click", function (e) {
    const $openDropdown = $('.js-dropdown-menu')
    if ($(e.target).is(".js-dropdown-button") === false) {
      if ($openDropdown.hasClass('open')) {
        $openDropdown.removeClass('open');
      }
    }
  });

  // dropdown
  function openDropdown() {

    const dropdown = $('.js-dropdown');

    dropdown.each(function (index, item) {
      const dropdownBtn = $(this).find('.js-dropdown-button'),
        dropdownMenu = $(this).find('.js-dropdown-menu'),
        dropdownItem = $(this).find('.js-dropdown-item');

      dropdownBtn.click(function () {
        dropdownMenu.removeClass('open');
        dropdownMenu.addClass('open');
      });

      dropdownItem.click(function (event) {

        const thisVal = $(this).text();

        event.preventDefault();

        dropdownBtn.text(thisVal);

        dropdownItem.removeClass('active');
        $(this).addClass('active');
      });
    });
  }

  //click product memory buttons

  function clickProductMemory() {
    const memoryContainers = $('.js-product-memory-list');

    memoryContainers.each(function (index, item) {
      const btnMemory = $(this).find('.js-product-memory-item');

      btnMemory.click(function () {
        btnMemory.removeClass('active');
        $(this).addClass('active');
      });
    });
  };

  // click view more button
  $(".js-view-more-button").click(function() {
    var buttonText = $(".hidden-content").is(":visible") ? "Xem thêm" : "Thu gọn";
    $(".hidden-content").slideToggle();
    $(".js-view-more-button").text(buttonText);
  });

  const init = function () {
    openDropdown();
    clickProductMemory();
  }();

});