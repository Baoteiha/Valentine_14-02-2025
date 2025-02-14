document.querySelector(".heart").addEventListener("click", function () {
    this.classList.add("spin-out"); // Add animation

    setTimeout(() => {
        window.location.href = "valentine-message.html"; // Redirect after animation
    }, 1000);
});

$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

