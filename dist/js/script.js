//Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

//Klik diluar  Hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark mood toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});


// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// sertifikat

document.getElementById('showCertificate').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag

    document.getElementById('certificateSection').classList.remove('hidden');

    // Scroll ke bawah
    document.getElementById('certificateSection').scrollIntoView({ behavior: 'smooth' });
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