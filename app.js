let num = 52
let Name = 'Nikita'
const isProgrammer = true

/* Можем делать:
let $ = 'test'
let $num = 'test'
let num$ = 'test'
let _ = 49
let first_name = 'Alena' // Паскаль кейс BAD!
let firstName = 'Artem' // Кэмо Кейс GOOD! */

/* Запрещенные название переменных
let 42num = '11'
let my-num = 1
let false/const/true/let = 1 */

// Name = 'Maksim'
// isProgrammer = false || Константа не может быть измененной!

// alert(Name) // Проверить что мы делаем на сайте
// console.log(Name) // Вывод в консоль

/*
console.log(num + 10)
console.log(num - 10)
console.log(num * 10)
console.log(num / 10)
console.log(num) 
*/
const resultElement = document.getElementById("result")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const submitbtn = document.getElementById("submit")
const plusbtn = document.getElementById("plus")
const minusbnt = document.getElementById("minus")
const umnbtn = document.getElementById('umnojenie')
const delbtn = document.getElementById('delenie')
const vkbtn = document.getElementById('vk')
const tgbtn = document.getElementById('tg')

vkbtn.onclick = function () {
    window.open('https://vk.com/yanenolik', '_blank')
}

tgbtn.onclick = function () {
    window.open('https://vk.com/yanenolik', '_blank')
}

let sum = Number(input1.value) + Number(input2.value)


umnbtn.onclick = function () {
    sum = Number(input1.value) * Number(input2.value)
    if (sum < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
}

delbtn.onclick = function () {
    sum = Number(input1.value) / Number(input2.value)
}

plusbtn.onclick = function () {
    sum = Number(input1.value) + Number(input2.value)
    if (sum < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
}

minusbnt.onclick = function () {
    sum = Number(input1.value) - Number(input2.value)
    if (sum < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
}

submitbtn.onclick = function () {
    resultElement.textContent = sum
}

/*submitbtn.onclick = function () {
    const sum = Number(input1.value) + Number(input2.value)
    resultElement.textContent = sum
} */



