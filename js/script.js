window.addEventListener('DOMContentLoaded', () => {

    hamburger = () => {
        const hamburger = document.querySelector('.hamburger'),
            menu = document.querySelector('.menu'),
            menuItem = document.querySelectorAll('.menu_item');


        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            });
        
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            });
        });
    };

    hamburger();
});