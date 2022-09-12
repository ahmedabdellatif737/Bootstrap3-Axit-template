$(function() {
    "use strict";
    $(window).scroll(function() {
        var navbar = $(".navbar");
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }
    });
    //Deal With Nabbar Links
    $(".navbar-nav li>").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    // Deal with Tabs
    $(".tabs-switch li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".tabs .tabs-content > div").hide();
        $("." + $(this).data("class")).show();
    });
});