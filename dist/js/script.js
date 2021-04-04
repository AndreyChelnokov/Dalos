document.addEventListener('DOMContentLoaded', () => {

    // Меню в шапке
    function openMenu () {
        let menu = document.querySelector('.main-menu-js');
        let btn = document.querySelector('.burget-menu-js');
        let close = document.querySelector('.close-menu-js');

        btn.addEventListener('click', () => {
            menu.classList.add('open')
        })
        close.addEventListener('click', () => {
            menu.classList.remove('open')
        })

        
        // Скрыть блок с категориями, по клику вне блока
        let btnCategories = $(".btn-categories"); // указываем кнопку
        let categories = $(".main-menu-js");
	
        $(document).mouseup(function (e) { // событие клика по веб-документу
            if ( ! btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
                // если клик был не по нашему блоку
                ! categories.is(e.target) && categories.has(e.target).length === 0
                // и не по его дочерним элементам
                ) {
                menu.classList.remove('open')
            }
        });

        
    }
    openMenu();




    // Кнопка ПОКАЗАТЬ ВЕСЬ ТЕКС\
    function openText(){
        const textContent = document.querySelector('.about__content-text');
        const textBtn = document.querySelector('.about__content-btn');
        const textFooter = document.querySelector('.about__content-footer');

        textBtn.addEventListener('click', () => {
            textContent.classList.add('open');
            textFooter.classList.add('open');
            textBtn.classList.add('close');
        })
    }
    if(document.querySelector('.about__content-btn')){
        openText();
    }
    


    // Карта
    let imgMap = document.querySelector('.map-img-js');
    function openMap(){
        imgMap.addEventListener('click', () => {
            document.querySelector('#map').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11433.150590761332!2d30.045216123161932!3d59.56450002645345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46961b03436bae1f%3A0x3fb90c902d84e136!2z0YPQuy4gMTIwLdC5INCT0LDRgtGH0LjQvdGB0LrQvtC5INCU0LjQstC40LfQuNC4LCAx0LQsINCT0LDRgtGH0LjQvdCwLCDQm9C10L3QuNC90LPRgNCw0LTRgdC60LDRjyDQvtCx0LsuLCAxODgzMDE!5e0!3m2!1sru!2sru!4v1606123701835!5m2!1sru!2sru" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
        })
    }
    if(imgMap){
        openMap();
    }




    // fag-btn-js
    function accardion(){
        let item = document.querySelectorAll('.fag-item-js');
        item.forEach( elem => {
            let btn = elem.querySelector('.fag-btn-js');
            let content = elem.querySelector('.fag-content-js');

            btn.addEventListener('click', () => {
                content.classList.toggle('open');
            })
        })
    }
    accardion();









    // Табы
    function tabClick(){
        let tabContainer = document.querySelectorAll('.tab__container');
        tabContainer.forEach( item => {
            let btnContainer = item.querySelector('.tab__btns');
            let btnAll = item.querySelectorAll('.tab__btn');
            let contentContainer = item.querySelector('.tab__contents');
            let contentAll = item.querySelectorAll('.tab__content');

            btnAll.forEach( (item, i) => {
                item.addEventListener('click', () => {
                    btnRemoveActive(btnAll, i);
                    contentRemoveActive(contentAll, i);
                })
            });

            
            btnRemoveActive(btnAll);
            contentRemoveActive(contentAll);
        })
    }
    if(document.querySelectorAll('.tab__container')){
        tabClick();
    }
    // Убираем активный класс у таба и добавляем его
    function btnRemoveActive(btnAll, i = 0){
        btnAll.forEach( item => {
            item.classList.remove('active');
        });
        btnAll[i].classList.add('active');
    }
    // Убираем активный класс у контента и добавляем его
    function contentRemoveActive(contentAll, i = 0){
        contentAll.forEach( item => {
            item.classList.remove('active');
        });
        contentAll[i].classList.add('active');
    }





    // Клики по схеме
    let btns = document.querySelectorAll('.principle-btns-js>div');
    let contents = document.querySelectorAll('.principle-text-js>div');

    btns.forEach( (elem, i) => {
        elem.addEventListener('click', () => {
            openeElem(i);
        })
    })


    // Функция скрываем все и показываем 1
    function openeElem(num = 2){
        contents.forEach( (elem, i) => {
            elem.classList.add('none');
            elem.classList.remove('block');
            if(i == num){
                elem.classList.remove('none');
                elem.classList.add('block');
            }
        })
        btns.forEach( (elem, i) => {
            elem.classList.remove('active');
            if(i == num){
                elem.classList.add('active');
            }
        })
    }


    openeElem();

})






// Главный слайдер в шапке
$(document).ready(function(){
    let mainSlider = $("#main-slider");
    mainSlider.owlCarousel(
        {
            margin:0,
            items: 1,
            nav: false,
            loop: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,

        }
    );
});