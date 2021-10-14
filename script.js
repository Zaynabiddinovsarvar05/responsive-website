window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    menuToggle.classList.toggle('active');
    document.querySelector('.div').classList.toggle('fff')
}
toggleMenu();