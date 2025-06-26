// 1. Select the button and the body
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 2. Function to toggle dark mode
function toggleTheme() {
    body.classList.toggle('dark-mode');

    // 3. Save the user's preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = 'Toggle Light Mode'; // Update button text
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = 'Toggle Dark Mode'; // Update button text
    }
}

// 4. Add a click event listener to the button
themeToggleBtn.addEventListener('click', toggleTheme);

// 5. Check for saved preference on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Toggle Light Mode';
    } else {
        // By default, it's light mode, so we don't need to do anything
        // unless you want to explicitly set it.
        themeToggleBtn.textContent = 'Toggle Dark Mode';
    }
});
