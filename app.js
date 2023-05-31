let babae = document.getElementById('babae');

babae.addEventListener('animationend', function() {
babae.classList.remove('fade-in');
babae.classList.add('fade-out');
});

let headline1 = document.getElementById('headline1');

headline1.addEventListener('animationend', function() {
headline1.classList.remove('slide-in-left');
headline1.classList.add('minimize');
});

function reload() {
    location.reload();
}