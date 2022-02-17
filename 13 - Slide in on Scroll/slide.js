function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');
const checkSlide = e => {
    sliderImages.forEach(item => {
        const slideInAt = (window.scrollY + window.innerHeight) - item.height / 2;
        const imageButtom = item.offsetTop + item.height;
        const isHalfShown = slideInAt > item.offsetTop;
        const isNotScrolledPast = window.scrollY < imageButtom;
        if (isHalfShown && isNotScrolledPast){
            item.classList.add('active');
        }
        else{
            item.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));