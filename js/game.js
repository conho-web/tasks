'use strict'

const playground = document.querySelector('#playground');
let checkStep = 0;
const pixel = document.querySelectorAll('.pixel');
const btn = document.querySelector('button');
let iAmWinner = false;

btn.addEventListener('click', () => {
    iAmWinner = false
    checkStep = 0;
    for (let clear of pixel) {
        clear.innerHTML = ""
        clear.style.backgroundColor = "yellowgreen"
    }
})

const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const isWinner = () => {
    for (let win of winner) {
        if (pixel[win[0]].innerHTML === pixel[win[1]].innerHTML && pixel[win[1]].innerHTML === pixel[win[2]].innerHTML && pixel[win[0]].innerHTML !== '') {
            pixel[win[0]].style.backgroundColor = 'red'
            pixel[win[1]].style.backgroundColor = 'red'
            pixel[win[2]].style.backgroundColor = 'red'
            return true
        }
    }
}

playground.addEventListener('click', (e) => {
    if (iAmWinner) return
    if (e.target.innerHTML) return
    if (checkStep === 9) return
    checkStep += 1;
    e.target.innerHTML = checkStep % 2 ? 'X' : 'O'
    if (checkStep >= 5 && checkStep < 10) {
        iAmWinner = isWinner();
    }
})