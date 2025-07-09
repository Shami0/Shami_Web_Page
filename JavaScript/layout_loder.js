function includeHTML(id, file) {
    fetch(file)
        .then((res) => {
            if (!res.ok) throw new Error(`Could not load ${file}`);
            return res.text();
        })
        .then((data) => {
            document.getElementById(id).innerHTML = data;
        })
        .catch((err) => console.error(err));
}

document.addEventListener("DOMContentLoaded", () => {
    includeHTML("header", "header.html");
    includeHTML("footer", "footer.html");
});
