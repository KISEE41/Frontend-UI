const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');

const body = document.getElementsByTagName('body')[0];

const XS_nav = document.getElementsByClassName('XS-header__main')[0];

hamburgerBtn.addEventListener('click', () => {
    body.style.overflow = 'hidden';
    body.style.height = '100vh';

    XS_nav.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    body.style.overflow = 'scroll';
    body.style.height = '100%';

    XS_nav.style.display = 'none';
});