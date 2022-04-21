const switchButton = document.querySelector(".switch-button");
const video = document.querySelector(".video-container");

switchButton.addEventListener("click", function() {
    if (!switchButton.classList.contains("slide")) {
        switchButton.classList.add("slide");
        video.pause();
    } else {
        switchButton.classList.remove("slide");
        video.play();
    }
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
});