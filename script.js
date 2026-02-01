// 1. MODAL LOGIC (Moved outside so HTML onclick can find them)
function openModal(url, type) {
    const modal = document.getElementById('videoModal');
    const modalBody = document.getElementById('modalBody');

    if (type === 'video') {
        // We add 'muted' so browsers don't block the autoplay
        modalBody.innerHTML = `
            <video controls autoplay muted style="width:100%; height:100%; border-radius:10px;">
                <source src="${url}" type="video/mp4">
            </video>`;
    }
    modal.style.display = "flex"; 
}

// 1. Move this to the VERY TOP of script.js
function closeModal() {
    const modal = document.getElementById('videoModal');
    const modalBody = document.getElementById('modalBody');
    if (modal) {
        modal.style.display = "none";
        modalBody.innerHTML = ""; // This stops the video immediately
    }
}

// Close if user clicks the dark background area
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}

// 2. DOM CONTENT LOADED (For UI elements that need to load first)
document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Toggle Logic
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            console.log('Menu icon clicked!'); 
            menuIcon.classList.toggle('bx-x'); // Change menu icon to 'X'
            navbar.classList.toggle('active'); // Toggle the navbar
        };
    } else {
        console.error('Menu icon or navbar not found in the DOM.');
    }

    // Auto-close navbar when clicking any link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.onclick = () => {
            if (navbar) navbar.classList.remove('active'); 
            if (menuIcon) menuIcon.classList.remove('bx-x'); 
        };
    });

    // Typing Animation Logic (Requires Typed.js library in HTML)
    if (document.querySelector('.multiple-text')) {
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
            smartBackspace: false 
        });
    }

    // Theme toggle Logic
    const themeIcon = document.querySelector('#theme-icon');
    if (themeIcon) {
        themeIcon.onclick = () => {
            document.body.classList.toggle('light-mode');

            if (document.body.classList.contains('light-mode')) {
                themeIcon.classList.replace('bx-moon', 'bx-sun'); //
            } else {
                themeIcon.classList.replace('bx-sun', 'bx-moon'); //
            }

            const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme); //
        };
    }

    // Check for saved theme on page load
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        if (themeIcon) themeIcon.classList.replace('bx-moon', 'bx-sun');
    }

    console.log("Script loaded and UI initialized."); 
});

// Add this at the bottom of script.js
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}