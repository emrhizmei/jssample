// let btn = document.getElementById('button')

// console.log(btn)
// btn.addEventListener('click', function() {
//     let Name = prompt("What is your name?")
//     console.log(Name)
//     alert(Name)
// })

// let Name = "Em"
// let age = 16

// console.log(Name)
// console.log(age)

// Name = "Emrhiz"
// console.log("hello " + Name)

// age = 17
// console.log("hi" , age)
// console.log("hi " + Name + " Your age is " + age)
// console.log(`hi  ${Name}, Your age is  ${age}`)

// const pi = 3.14
// console.log(pi)

// // pi = 4.3
// // console.log(pi)

// var color = "blue"
// console.log(color)

// color = "red"
// console.log(color)

let colors = ["Blue" , "Green", "red"]
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
console.log(`The colors are: ${colors[0]}, ${colors[1]}, ${colors[2]} `)

colors[1]= "pink"

console.log(`The colors are: ${colors[0]}, ${colors[1]}, ${colors[2]} `)
let p = document.getElementById('paragraph')
console.log(p)
p.innerText= `The colors are: ${colors[0]}, ${colors[1]}, ${colors[2]}`

let btn = document.getElementById('button')
 btn.addEventListener('click', function() {
    colors[1]= "green"
    p.innerText= `The colors are: ${colors[0]}, ${colors[1]}, ${colors[2]}`
    p.style.color="green"
    p.style.backgroundColor="lightblue"

    let box = document.getElementsByClassName('box')
    box[0].style.backgroundColor = colors[0]
    box[1].style.backgroundColor = colors[1]
    box[2].style.backgroundColor = colors [2]
 })

