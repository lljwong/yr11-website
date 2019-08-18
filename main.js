var text = document.getElementById('text')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) { 
    var offset = window.pageYOffset;
    scroll = offset;
    text.style.top = -scroll / 0.3 + 'px';
});



const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

var scrolldown = document.getElementById('scrolldown')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) { 
    var offset = window.pageYOffset;
    scroll = offset;
    scrolldown.style.top = -scroll / 0.2 + 'px';
});
