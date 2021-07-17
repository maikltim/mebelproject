$(function() {
//icon-search
$('#search').on('click', function(){
    $(".menu-item").addClass('hide-item');
    $(".header__search-form").addClass("active");
    $(".close").addClass("active");
    $("#search").hide();
})
    $('.close').on('click', function(){
        $(".menu-item").removeClass("hide-item");
        $(".header__search-form").removeClass("active");
        $(".close").removeClass("active");
        $("#search").show();
    })

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header__top-inner");
        header.classList.toggle("sticky", window.scrollY > 0)
      })

      //slider

      $(".slider__inner").slick({
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
         // autoplay: true
      });

      //load more

      $("#loadmore").on('click', function() {
          $('#boxs .box:hidden').slice(0, 4).slideDown()
          if(($('#boxs .box:hidden')).length == 0) {
              $('#loadmore').fadeOut('slow')
          }
      })


      // collection 
      $(".collections__inner").slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
       autoplay: false,
    });
});