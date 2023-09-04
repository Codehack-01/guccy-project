var carouselWidth = $('.carouselinner-shop')[0].scroll-Width;
var cardWith = $('.carouselitem-shop').width();

var scrollPosition = 0;
$('.carousel-control-next-shop').on('click', function(){
    if(scrollPosition < (carouselWidth - (cardWidth * 4))){
        console.log('next');
        scrollPosition = scrollPosition + cardWidth;
        $('.carouselinner-shop').animate({scrollLeft:
        scrollPosition},600);
    }
});

$('.carousel-control-prev-shop').on('click', function(){
    if(scrollPosition > 0){
        console.log('next');
        scrollPosition = scrollPosition - cardWidth;
        $('.carouselinner-shop').animate({scrollLeft:
        scrollPosition},600);
    }
});