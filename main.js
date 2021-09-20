class Rotate {

    constructor(config) {

        this.rotate = document.querySelectorAll(config.el)

        // console.log(this.rotate);

        for (let i = 0; i < this.rotate.length; i++) {

            this.rotate[i].addEventListener('mousemove', this.getRotate)
            this.rotate[i].addEventListener('mouseout', this.rotateNone)

        }


        // this.rotate.addEventListener('mouseout', ()=> this.getRotateNone())


    }

    getRotate(e) {
        this.halfHeight = this.offsetHeight / 2

        this.style.transform = `rotateX(${-(e.offsetY - this.halfHeight) / 7}deg) rotateY(${(e.offsetX - this.halfHeight) / 7}deg)`
    }

    rotateNone() {
        this.style.transform = 'rotate(0)'
    }

}

const card = new Rotate({
    el: '.comics__card-img'
})
const card2 = new Rotate({
    el: '.films__image'
})
const card3 = new Rotate({
    el: '.series__image'
})

let headerContentTitle = document.querySelector('.content__title')
let headerContentTitleSpan = document.querySelector('.content__title_span')
let headerContentTxt = document.querySelector('.content__txt')
let headerContentBanner = document.querySelector('.content__banner')

headerContentTitle.style.opacity = '1'
headerContentTitleSpan.style.opacity = '1'
headerContentTxt.style.opacity = '1'
headerContentBanner.style.transform = 'translateY(0)'




class Paralax {
    constructor(obj) {
        this.gameSection = document.querySelector(obj.gameSec)
        this.gameImage = this.gameSection.querySelector('.game__img')
        this.gameTitle = this.gameSection.querySelector('.game__desc-title')
        this.gameTxt = this.gameSection.querySelector('.game__desc-txt')
        this.gameLinks = this.gameSection.querySelector('.game__links')

        window.addEventListener('scroll', () => {
            if(pageYOffset >= (this.gameSection.offsetTop - this.gameSection.offsetHeight)){
                this.gameImage.style.transform = 'translateX(0%)'
                this.gameTitle.style.transform = 'translateX(0%)'
                this.gameTxt.style.transform = 'translateX(0%)'
                this.gameLinks.style.transform = 'translateX(0%)'
            }
        })
    }
}


const game = new Paralax({
    gameSec: '.game'
})

class Paralax2 {
    constructor(obj) {
        this.infoSection = document.querySelector(obj.infoSec)
        this.infoImage = this.infoSection.querySelector('.info__img')
        this.infoTitle = this.infoSection.querySelector('.info__dsec-title')
        this.infoTxt = this.infoSection.querySelector('.info__desc-txt')

        
        window.addEventListener('scroll', () => {
            if(pageYOffset >= (this.infoSection.offsetTop - this.infoSection.offsetHeight)){
                this.infoImage.style.transform = 'translateX(0%)'
                this.infoTitle.style.transform = 'translateX(0%)'
                this.infoTxt.style.transform = 'translateX(0%)'
            }
        })
    }
}


const info = new Paralax2({
    infoSec: '.info'
})



let navMenu = document.querySelector('.nav__menu')
let navBurger = document.querySelector('.nav__burger')
let navClose = document.querySelector('.nav__burgerClose')
let body = document.querySelector('body')

navMenu.addEventListener('click', function () {
    navBurger.style.transform = 'translateY(0)'
    body.style.overflow = 'hidden'
})
navClose.addEventListener('click', function() {
    navBurger.style.transform = 'translateY(-100%)'
    body.style.overflow = 'unset'
})