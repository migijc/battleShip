import css from "./style.css"
import gameLoop from "./gameLoop"
import players from "./players"

// console.log(players[1].board.allShipsSunk())


let playerPoints = document.querySelectorAll("#playerBoard  > .gridCell")
// players[1].board.placeShip(5, [0,0], "Horizontal")
players[1].placeRandomShip(5)


// gameLoop()
