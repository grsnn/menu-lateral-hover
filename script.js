const iconBars = document.getElementById('iconBars');
const nav = document.getElementById('nav');
const items = document.querySelectorAll('.nav__list--item');

iconBars.addEventListener('click', () => {
    nav.classList.toggle('active');
    iconBars.classList.toggle('active');
})

items.forEach((callback) => {
    callback.addEventListener('click', e => {
        e.preventDefault();
        items.forEach((item) => item.classList.remove('active'));
        callback.classList.add('active');
    });
});

nav.addEventListener('mouseover', () => {
    nav.classList.add('active');
    iconBars.classList.add('active');
})

nav.addEventListener('mouseout', () => {
    nav.classList.remove('active');
    iconBars.classList.remove('active');
})