var didScroll;
var linkScroll = false;
var lastScrollTop = 0;
var delta = 5;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > 300 ){
        $('#main_menu').removeClass('normal').addClass('top_menu');
    }
    else {
        $('#main_menu').removeClass('top_menu').addClass('normal')
    }
    
    lastScrollTop = st;
}