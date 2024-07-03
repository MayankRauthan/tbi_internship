document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function slideInTextBlock() {
    const textBlock = document.getElementById('textBlock');
    if (isInViewport(textBlock)) {
        textBlock.classList.add('show');
        window.removeEventListener('scroll', slideInTextBlock);
    }
}


window.addEventListener('scroll', slideInTextBlock);
slideInTextBlock();