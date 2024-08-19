// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'hello world'


// 변수선언
var myVariable
// 값 할당
myVariable = 10
// 출력
// console.log(myVariable)

// ES6이전
var myV1 = 1
myV1 = 10
var myV1 = 11

// 변경가능
let myV2 = 2
myV2 = 20
// let myV2 = 22

// 변경불가 상수
const myV3 = 3
// myV3 = 30
// const myV3 = 33

// console.log(myV1, myV2, myV3)

// let a = 'ai'
// let b = 10
// let c = true
// let d = [1, 2, 3, 4, 'five', true]
// let e = {
//     'a': 10,
// }

// // console.log(a, b, c, d, e)

// d.push(10)
// console.log(d)

// let myVarA = '10'
// let myVarB = 10
// // console.log(myVarA == myVarB)
// // console.log(myVarA === myVarB)

// // let iceCream = 'chocolate'
// // if (iceCream === 'chocolate') {
// //     alert('I Love Choco')
// // } else if (iceCream === 'vanila') {
// //     console.log('vanillla')
// // } else {
// //     console.log(':(')
// // }

// console.log('while')

// let i = 0
// while (i < 5) {
//     console.log(i)
//     // i += 1
//     i++
// }

// console.log('for')
// for (let i=0 ; i<5 ; i++) {}


let myImage = document.querySelector('img')
myImage.addEventListener('click', function(e){
    let src = myImage.getAttribute('src')

    if (src==='images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/gr.jpg')
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }

})

//비동기
// console.log('hi')
// setTimeout(function(){console.log('1234')}, 1000)
// // console.log('bye')


// // 비동기1 promise
// const URL = 'https://jsonplaceholder.typicode.com/todos/1'
// fetch(URL)
//     .then(response => response.json())
//     .then(json => console.log(json))

// console.log('after fetch')

// //비동기  2 (async await)
// async function fetchAndPrint() {
//     let res  = fetch(URL)
//     console.log(res)
// }
// fetchAndPrint()


let liList = document.querySelectorAll('li')

console.log(liList)

liList.forEach(function(li){
    li.style.color = 'red'
    li.style.backgroundColor = 'green'
})


liList.forEach(function(li){
    li.addEventListener('click', function(e){
        console.log(e.target)
    })
})