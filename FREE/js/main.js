(function () {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelector('.button__modal-open');
    const modalForm = document.querySelector('.modal__form'); // Добавим форму для проверки кликов

    modalButton.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();
        document.body.classList.add('body--opened-modal');
    }

    function closeModal(e) {
        const target = e.target;

        // Закрывать модальное окно только при клике на фон (сам элемент .modal) или крестик
        if (target === modal || target.closest('.modal__cancel')) {
            document.body.classList.remove('body--opened-modal');
        }
    }
    //

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)



    const slider = document.querySelector('.modal__slider')
    const sliderButton = document.querySelector('.button__slider-open')

    sliderButton.addEventListener('click', openSlider)
    slider.addEventListener('click', closeSlideropenSlider)

    function openSlider(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-slider')
    }

    function closeSlideropenSlider(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.close') || target.classList.contains('modal__slider')) {
            document.body.classList.remove('body--opened-slider')
        }

    }

})()