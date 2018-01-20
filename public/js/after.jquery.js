//
// lazyloader
$(function() {
    $('.lazy').lazy({

    });
});


//
// smooth scroll
smoothScroll.init({
    speed: 1000,
    easing: "easeOutQuad",
    offset: 0,
    updateURL: false
});

//
// feather
$("a.feather").featherlightGallery({
    closeIcon: null,
    openSpeed: 250,
    closeSpeed: 250,
    closeOnClick: "anywhere",
    previousIcon: "&#9664;",
    nextIcon: "&#9654;",
    galleryFadeIn: 250,
    galleryFadeOut: 250
});

//
// hamburger
$(".siteMapBtn").click(function() {
    $(".siteMapNav").toggle("display")
}),
function() {
    "use strict";

    function d(a) {
        a.addEventListener("click", function(a) {
            a.preventDefault(), this.classList.contains("is-active") === !0 ? this.classList.remove("is-active") : this.classList.add("is-active")
        })
    }
    for (var a = document.querySelectorAll(".c-hamburger"), b = a.length - 1; b >= 0; b--) {
        var c = a[b];
        d(c)
    }
}();


//
// other funcs
function topUp() {
    $('.fa-angle-up').addClass('topUp');
    $('.fa-angle-up').removeClass('topUp2');
}
function topDn() {
    $('.fa-angle-up').addClass('topUp2');
    $('.fa-angle-up').removeClass('topUp');
}
function nextRight() {
    $('.fa-angle-double-right').addClass('nextRight');
    $('.fa-angle-double-right').removeClass('nextRight2');
}
function nextRightDel() {
    $('.fa-angle-double-right').addClass('nextRight2');
    $('.fa-angle-double-right').removeClass('nextRight');
}
function nextLeft() {
    $('.fa-angle-double-left').addClass('nextLeft');
    $('.fa-angle-double-left').removeClass('nextLeft2');
}
function nextLeftDel() {
    $('.fa-angle-double-left').addClass('nextLeft2');
    $('.fa-angle-double-left').removeClass('nextLeft');
}
function addTooltip() {
    $('.copied').removeClass('tooltip');
}
function removeTooltip() {
    $('.copied').addClass('tooltip');
}