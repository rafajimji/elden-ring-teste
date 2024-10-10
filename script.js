window.onscroll = function() {
    var button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
};


document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});