const card = $(".perspective__3d");

$('body').on('mousemove', (e) => {
    let vertical = -($(window).innerWidth() / 300 - e.pageX) / 70, horizontal = ($(window).innerHeight() / 2 - e.pageY) / 70;

    card.attr("style", "transform: rotateY(" + vertical + "deg) rotate(" + horizontal + "deg)")
});