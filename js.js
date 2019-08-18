var layer1 = document.getElementById('layer1')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 + scroll / 3) + '%';
});

var layer2 = document.getElementById('layer2')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) {
    var offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 + scroll / 3) + '%';
    layer2.style.left = scroll / 30 + '%';
});

var text = document.getElementById('text')
scroll = window.pageYOffset;
document.addEventListener('scroll', function (e) { 
    var offset = window.pageYOffset;
    scroll = offset;
    text.style.top = -scroll / 0.3 + 'px';
});
