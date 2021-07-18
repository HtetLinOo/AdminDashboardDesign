$(".show-sidebar-btn").click(function() {
    // $(".sidebar").toggleClass("open");
    $(".sidebar").animate({ marginLeft: 0 });
})
$(".hide-sidebar-btn").click(function() {

    $(".sidebar").animate({ marginLeft: "-100%" });
})
$(function() {
    $('[data-toggle="popover"]').popover()
})