import './css/reset.css'
import './css/index.css'
import desolateForest from './assets/desolate_forest.webp'
import city from './assets/city.jpg'
// import urban from './assets/urban.jpg'
import airplane from './assets/airplane.jpg'

import greyArrow from './assets/left-arrow-grey.png'
import blueArrow from './assets/left-arrow-blue.png'

function animateElement(
    element,
    animation,
    duration,
    easeing = 'ease-in-out',
    direction = 'normal',
    delay = 0,
) {
    let keyFrames = []
    if (animation === 'slide-in-from-left') {
        keyFrames = [
            {
                transform:
                    'translateX(-1000px) translateY(800px) rotate(-100deg)',
                opacity: 0,
            },
            {
                transform: 'translateX(0) translateY(0) rotate(-20deg)',
                opacity: 1,
            },
        ]
    } else if (animation === 'slide-out-to-right') {
        keyFrames = [
            {
                // transform:
                // 'translateX(-1000px) translateY(800px) rotate(-100deg)',
                opacity: 1,
            },
            {
                transform:
                    'translateX(1000px) translateY(800px) rotate(100deg)',
                opacity: 0,
            },
        ]
    }

    element.animate(keyFrames, {
        duration,
        easeing,
        direction,
        delay,
    })
}

const imageSlider = document.querySelector('.img-slider')
const leftArrowDiv = document.querySelector('#left-arrow-img-div')
const rightArrowDiv = document.querySelector('#right-arrow-img-div')

// document.querySelector('.left-img-div').style.backgroundImage = `url(${city})`
// document.querySelector(
//     '.center-img-div',
// ).style.backgroundImage = `url(${airplane})`

const images = [city, airplane, desolateForest]
let counter = 0

const leftImgDiv = document.querySelector('.left-img-div')
const centerImgDiv = document.querySelector('.center-img-div')
const rightImgDiv = document.querySelector('.right-img-div')

leftImgDiv.style.backgroundImage = `url(${images.at(counter)})`
centerImgDiv.style.backgroundImage = `url(${images.at(counter + 1)})`
rightImgDiv.style.backgroundImage = `url(${images.at(counter + 2)})`

function next() {
    counter += 1

    if (counter === images.length) counter = 0

    const leftImgDiv = document.querySelector('.left-img-div')
    const centerImgDiv = document.querySelector('.center-img-div')
    const rightImgDiv = document.querySelector('.right-img-div')

    const rightDivs = document.querySelectorAll('.right-img-div')
    for (let i = 0; i < rightDivs.length; i += 1) {
        if (i > 0) {
            setTimeout(() => {
                rightDivs[i].remove()
            }, 1000)
        }
    }

    const newLeftImgDiv = document.createElement('div')
    newLeftImgDiv.style.backgroundImage = `url(${images.at(counter)})`
    newLeftImgDiv.classList.add('img-div')
    newLeftImgDiv.classList.add('left-img-div')
    newLeftImgDiv.classList.add('slide-in-from-right')
    imageSlider.appendChild(newLeftImgDiv)

    leftImgDiv.classList.remove('left-img-div')
    leftImgDiv.classList.add('center-img-div')
    // leftImgDiv.style.backgroundImage = `url(${images.at(counter + 2)})`

    centerImgDiv.classList.remove('center-img-div')
    centerImgDiv.classList.add('right-img-div')
    // leftImgDiv.style.backgroundImage = `url(${images.at(counter + 1)})`

    setTimeout(() => {
        rightImgDiv.remove()
    }, 1000)

    animateElement(
        rightImgDiv,
        'slide-out-to-right',
        1100,
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    )
}

// function next() {
//     const leftDiv = document.createElement('div')
//     leftDiv.classList.add('img-div')
//     leftDiv.classList.add('from-invisible-to-left')
//     leftDiv.style.backgroundImage = `url(${airplane})`
//     imageSlider.appendChild(leftDiv)

//     const centerDiv = document.createElement('div')
//     centerDiv.classList.add('img-div')
//     centerDiv.classList.add('from-left-to-center')
//     centerDiv.style.backgroundImage = `url(${city})`
//     imageSlider.appendChild(centerDiv)

//     const rightDiv = document.createElement('div')
//     rightDiv.classList.add('img-div')
//     rightDiv.classList.add('from-center-to-right')
//     rightDiv.style.backgroundImage = `url(${city})`
//     imageSlider.appendChild(rightDiv)

//     const disappearingDiv = document.createElement('div')
//     disappearingDiv.classList.add('img-div')
//     disappearingDiv.classList.add('from-right-to-invisible')
//     disappearingDiv.style.backgroundImage = `url(${airplane})`
//     disappearingDiv.addEventListener('animationend', () => {
//         disappearingDiv.remove()
//     })
//     imageSlider.appendChild(disappearingDiv)

//     rightArrowDiv.addEventListener('click', () => {
//         leftDiv.remove()
//         centerDiv.remove()
//         rightDiv.remove()
//     })
// }

leftArrowDiv.style.backgroundImage = `url(${greyArrow})`
rightArrowDiv.style.backgroundImage = `url(${greyArrow})`

leftArrowDiv.addEventListener('mouseenter', () => {
    leftArrowDiv.style.background = `url(${blueArrow})`
})

rightArrowDiv.addEventListener('click', () => {
    next()
})

leftArrowDiv.addEventListener('mouseleave', () => {
    leftArrowDiv.style.background = `url(${greyArrow})`
})

rightArrowDiv.addEventListener('mouseenter', () => {
    rightArrowDiv.style.background = `url(${blueArrow})`
})

rightArrowDiv.addEventListener('mouseleave', () => {
    rightArrowDiv.style.background = `url(${greyArrow})`
})

setTimeout(() => {
    imageSlider.classList.remove('preload')
}, 100)
