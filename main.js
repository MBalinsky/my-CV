const btnUp = {
    element: document.querySelector('.wrap'),
    show(){
        this.element.classList.add('show');
    },
    unShow(){
        this.element.classList.remove('show');
    },
    btnUpEvent(){
       window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        scrollY > 300 ? this.show() : this.unShow()
       }),
    this.element.onclick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
        })
    }
    }
}

btnUp.btnUpEvent()

// burger 

const body = document.body;
const burger = document.querySelector('.header__burger');
const burgerLines = document.querySelectorAll('.burger__line');
const popup = document.querySelector('.popup');
const popupMenu = document.querySelector('.popup__menu');
const menu = document.querySelector('#b');

burger.addEventListener('click', showPopup);

function showPopup(){
    burgerLines.forEach(el => {
        el.classList.toggle('active')
    })
    popup.classList.toggle('active');
    popupMenu.classList.toggle('active');
    body.classList.toggle('noscroll');
    menu.classList.toggle('active');
    popupMenu.appendChild(menu);
}

document.querySelectorAll('.navigation__link').forEach((el) => {
    el.addEventListener('click', (e) => {
        if(e.target.classList.contains('navigation__link')){
            burgerLines.forEach(el => {
                el.classList.remove('active');
            })
            popup.classList.remove('active');
            popupMenu.classList.remove('active');
            body.classList.remove('noscroll');
            menu.classList.remove('active');
        }
    })
})

popup.addEventListener('click', unShowBurger)

function unShowBurger(e){
    if(!e.target.classList.contains('navigation__link')){
        burgerLines.forEach(el => {
            el.classList.remove('active');
        })
        popup.classList.remove('active');
        popupMenu.classList.remove('active');
        body.classList.remove('noscroll');
        menu.classList.remove('active');
    }
}

















// function showPopup(){
//     if(!popup.classList.contains('active')){
//     burgerLines.forEach(el => {
//         el.classList.add('active');
//     })
//     popup.classList.add('active');
//     popupMenu.classList.add('active');
//     document.body.classList.add('noscroll');
//     menu.classList.add('active')
//     popupMenu.appendChild(menu);
//     }  else {
//         burgerLines.forEach(el => {
//             el.classList.remove('active');
//         })
//         popup.classList.remove('active');
//         document.body.classList.remove('noscroll')
//         popupMenu.classList.remove('active');
//         menu.classList.remove('active')
//         popupMenu.removeChild(menu);
//         document.querySelector('nav').appendChild(menu)
//     }
// }    

// document.querySelectorAll('.navigation__link').forEach((el) => {
//     el.addEventListener('click', (e) => {
//         if(e.target.classList.contains('navigation__link')){
//             burgerLines.forEach(el => {
//                 el.classList.remove('active');
//             })
//             popup.classList.remove('active');
//             document.body.style.overflow = 'visible';
//             popupMenu.classList.remove('active');
//             menu.classList.remove('active')
//             document.querySelector('nav').appendChild(menu)
//         }
//     })
// })


   