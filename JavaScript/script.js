// Dark Mode 
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
function toggleTheme() {
    body.classList.toggle('dark-mode');

    // 3. Save the user's preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = 'Light Mode'; // Update button text
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = 'Dark Mode'; // Update button text
    }
}
themeToggleBtn.addEventListener('click', toggleTheme);
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
