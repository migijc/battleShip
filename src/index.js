import css from "./style.css"
import gameLoop from "./gameLoop"
import players from "./players"

// console.log(players[1].board.allShipsSunk())


let playerPoints =document.querySelectorAll("#playerBoard  > .gridCell")

// document.body.addEventListener("dragstart", (e)=>{
//     console.log(e)
//     e.target.classList.add("draggable")
// })

// playerPoints.forEach(point=>{
//     point.addEventListener("dragover", (e)=>{
//         let a=document.querySelector(".draggable")
//         a.classList.add("onGrid")
//         e.preventDefault()
//         point.appendChild(a)
//     })
// })

// playerPoints.forEach(point=>{
//     point.addEventListener("dragend", (e)=>{
//         let a=document.querySelector(".draggable")
//         console.log(point)
//         e.preventDefault()
//         point.appendChild(a)      
//     })
// })




// gameLoop()
