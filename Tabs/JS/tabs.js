const about = document.querySelector(".about");
const buttons = document.querySelectorAll(".tab-button");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // Remove Selected From Other Buttons
        buttons.forEach(function (button) {
            button.classList.remove("active");
        });
        e.target.classList.add("active");
        // Hide Other Articles
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});