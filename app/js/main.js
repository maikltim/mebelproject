$(function () {
    // icon search
    $("#search").on('click', function () {
      $(".menu-item").addClass("hide-item");
      $(".header__search-form").addClass("active");
      $(".close").addClass("active");
      $("#search").hide();
    });
    $(".close").on('click', function () {
      $(".menu-item").removeClass("hide-item");
      $(".header__search-form").removeClass("active");
      $(".close").removeClass("active");
      $("#search").show();
    });
  
    // Sticky scroll header
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header__top-inner");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  
    // Slider
    $(".slider__inner").slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true
    });
  
    // Load more
    $("#loadMore").on('click', function () {
      $("#boxs .box:hidden").slice(0, 4).slideDown();
      if ($("#boxs .box:hidden").length == 0) {
        $("#loadMore").fadeOut("slow");
      }
    });
  
    $("#newItemsLoadMore").on('click', function () {
      $("#newBoxs .newBox:hidden").slice(0, 4).slideDown();
      if ($("#newBoxs .newBox:hidden").length == 0) {
        $("#newItemsLoadMore").fadeOut("slow");
      }
    });
  
    // Collections Slider
    $(".collections__inner").slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
    });
  
    // Hamburger
    $(".hamburger").on('click', function () {
      $(this).toggleClass('on')
      $(".header__top").toggleClass("off");
      $(".sales-leaders__discount").toggleClass("off");
      $(".new-items__discount").toggleClass("off");
      $(".slick-arrow").toggleClass("off");
    })
  
    // Sidebar
    $('ul.main-menu li').on('click', function (e) {
      e.preventDefault();
  
      if ($(this).siblings('li').find('ul.sidebar__submenu:visible').length) {
        $('ul.sidebar__submenu').slideUp('normal');
      }
      $(this).find('ul.sidebar__submenu').slideToggle('normal');
    });
  
    var t1 = new TimelineMax({ paused: true });
  
    t1.to(".menu", 0.3, {
      autoAlpha: 1,
    });
  
    t1.staggerFrom(
      '.main-menu li a:not(.sidebar__submenu li a)',
      1,
      {
        opacity: 0,
        y: 10,
        ease: Power3.easeInOut
      },
      0.1
    );
  
    t1.from(".sidebar__submenu", 0.3, {
      autoAlpha: 0,
    });
    
    t1.reverse();
  
    $(document).on('click', '.menu-btn', function () {
      t1.reversed(!t1.reversed());
    });
  
      $(document).on('click', '.close-menu', function () {
      t1.reversed(!t1.reversed());
    });
  });