// 1. Navbar Toggle Logic
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Changes menu icon to 'X'
    navbar.classList.toggle('active'); // Opens the navbar
};

// 2. Typing Animation Logic
const typed = new Typed('.multiple-text', {
    strings: [
        'Software Developer', 
        'Frontend Developer', 
        'Software Engineer', 
        'Web Developer'
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    smartBackspace: false // This prevents the "pulling" animation
});

// 3. Remove menu when clicking a link (Auto-close)
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const themeIcon = document.querySelector('#theme-icon');

themeIcon.onclick = () => {
    // 1. Toggle the class on the body
    document.body.classList.toggle('light-mode');

    // 2. Change the icon between moon and sun
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    }

    // 3. Optional: Save preference to local storage so it stays on refresh
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
};

// Check for saved theme on page load
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.replace('bx-moon', 'bx-sun');
}

function openModal(url, type) {
    const modal = document.getElementById('videoModal');
    const modalBody = document.getElementById('modalBody');

    if (type === 'video') {
        modalBody.innerHTML = `
            <video width="100%" controls autoplay playsinline preload="auto">
                <source src="${url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>`;
    }
    modal.style.display = "block";
}