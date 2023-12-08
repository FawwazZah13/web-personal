//Navbar Fixed
window.onscroll = function (){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
}


// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Zoom

function zoomSVG(svgId) {
        // Ambil elemen SVG berdasarkan ID
        var svgElement = document.getElementById(svgId);

        // Periksa apakah elemen SVG sudah di-zoom atau belum
        var isZoomed = svgElement.classList.contains('zoomed');

        // Toggle kelas 'zoomed' untuk merubah tampilan CSS (dengan Tailwind CSS)
        svgElement.classList.toggle('zoomed', !isZoomed);
    }