
window.onload = function () {
    
let dropdownMenu = document.querySelector('.dropdown-menu');
let navbar = document.querySelector('.navbar');
let dropDownClick = () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    navbar.style.height = dropdownMenu.style.display === 'block' ? '400px': 'auto'
}
let dropDownButton = document.getElementById('dropdown-button');
if(dropDownButton) {
    dropDownButton.addEventListener('click', dropDownClick);
}
}