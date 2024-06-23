document.addEventListener('DOMContentLoaded', () => {
    // Update the footer with the current year and last modified date
    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    footer.innerHTML = `
        <p>&copy; ${currentYear} Temple Tour. All rights reserved.</p>
        <p>Last updated: ${lastModified}</p>
        <p>Contact: info@templetour.com</p>
    `;

    // Hamburger menu functionality
    const nav = document.querySelector('nav ul');
    const hamburgerButton = document.createElement('button');
    hamburgerButton.innerHTML = '☰'; // Hamburger menu icon
    hamburgerButton.classList.add('hamburger');

    // Add the hamburger button to the header
    const header = document.querySelector('header');
    header.insertBefore(hamburgerButton, nav);

    // Toggle navigation menu visibility
    hamburgerButton.addEventListener('click', () => {
        if (nav.style.display === 'flex' || nav.style.display === '') {
            nav.style.display = 'none';
            hamburgerButton.innerHTML = '☰';
        } else {
            nav.style.display = 'flex';
            hamburgerButton.innerHTML = '✖'; // 'X' icon to close
        }
    });

    // Ensure the menu is appropriately displayed on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 600) {
            nav.style.display = 'flex';
            hamburgerButton.style.display = 'none';
        } else {
            nav.style.display = 'none';
            hamburgerButton.style.display = 'block';
            hamburgerButton.innerHTML = '☰';
        }
    });

    // Initial check on page load
    if (window.innerWidth >= 600) {
        nav.style.display = 'flex';
        hamburgerButton.style.display = 'none';
    } else {
        nav.style.display = 'none';
        hamburgerButton.style.display = 'block';
    }
});

