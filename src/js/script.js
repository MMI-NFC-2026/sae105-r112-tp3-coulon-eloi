// *** CAROUSEL ***
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel) {
    prevButton.addEventListener("click", () => {
        const scrollAmount = carousel.querySelector(".carousel__item").clientWidth;
        carousel.scrollBy({left: -scrollAmount, behavior: "smooth"});
    });

    nextButton.addEventListener("click", () => {
        const scrollAmount = carousel.querySelector(".carousel__item").clientWidth;
        carousel.scrollBy({left: scrollAmount, behavior: "smooth"});
    });
}





// TODO
