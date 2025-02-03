// Открытие модального окна
const modalSlider = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const openModalBtn_1 = document.getElementById("openModal-1");
const closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => {
    modalSlider.style.display = "block";
    showSlide(currentSlide);
});
openModalBtn_1.addEventListener("click", () => {
    modalSlider.style.display = "block";
    showSlide(currentSlide);
});

closeModalBtn.addEventListener("click", () => {
    modalSlider.style.display = "none";
});

// Закрытие модального окна при клике вне его
window.addEventListener("click", (event) => {
    if (event.target === modalSlider) {
        modalSlider.style.display = "none";
    }
});

// Логика слайдера
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
    slides.forEach((slide) => (slide.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));

    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;

    slides[currentSlide].style.display = "block";
    dots[currentSlide].classList.add("active");
}

// Переключение слайдов
document.querySelector(".prev").addEventListener("click", () => {
    showSlide(--currentSlide);
});

document.querySelector(".next").addEventListener("click", () => {
    showSlide(++currentSlide);
});

// Переключение по кружочкам
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Инициализация первого слайда
showSlide(currentSlide);