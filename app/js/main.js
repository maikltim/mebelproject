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
});