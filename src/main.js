const menu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav2');

menu.addEventListener('click', () => {
    if (nav.style.display == 'flex') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'flex';
    }
    console.log('CLICKED');
}); 
