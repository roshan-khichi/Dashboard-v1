const root = document.documentElement;
const sidebarBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("aside");

const dark = document.querySelector('.themes');
const icons = document.querySelectorAll('.link')

sidebarBtn.addEventListener('click', () => {
    document.body.classList.toggle('active');
})


//Change light to dark mode and dark to light mode
dark.addEventListener('click', function () {
    if ((root.style.getPropertyValue('--background-color') === '#ffffff')) {
        root.style.setProperty('--background-color', '#000000');
        root.style.setProperty('--font-color', '#ffffff');

        //table color
        root.style.setProperty('--tabel-background', '#000000');
        root.style.setProperty('--tabel-font-color', '#ffffff');

        //change icon color
        icons.forEach(element => {
            element.style.backgroundColor = '#ffffff';
            element.style.color = '#000000';
        });
    } else {
        root.style.setProperty('--background-color', '#ffffff');
        root.style.setProperty('--font-color', '#000000');
        //tables color
        //table color
        root.style.setProperty('--tabel-background', '#ffffff');
        root.style.setProperty('--tabel-font-color', '#000000');

    }
});