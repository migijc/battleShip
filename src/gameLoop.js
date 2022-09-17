import players from "./players";
import { currentPlayer } from "./players";
import { renderComputerBoard, renderPlayerBoard, setPlayerShips } from "./DOMInteractions"
let gameBody=document.body.querySelector("#gameBody")
let computerSide=document.body.querySelector(".computerSide")
players[1].board.placeShip(5, [2,1], "Vertical")
    players[1].board.placeShip(4, [2,6], "Vertical")
    players[1].board.placeShip(3, [4,4], "Horizontal")
    players[1].board.placeShip(2, [8, 7], "Horizontal")
    players[1].board.placeShip(1, [0, 9], "Vertical")

    // players[0].board.placeShip(5, [3, 3], "Vertical")
    // players[0].board.placeShip(4, [6, 0], "Vertical")
    // players[0].board.placeShip(3, [0, 0], "Vertical")
    // players[0].board.placeShip(2, [8, 9], "Vertical")
    // players[0].board.placeShip(1, [0, 9], "Vertical")
    renderComputerBoard()
    // gameBody.removeChild(computerSide)
    renderPlayerBoard()
    setPlayerShips()
    console.log(players)



let gameLoop = () => {
    if(players[1].board.allShipsSunk()==true || players[0].board.allShipsSunk()==true){
        alert("gameOver")
        return
    }
    let a = new Promise((resolve)=>{
        document.querySelectorAll("#computerBoard > .gridCell").forEach(spot=>{
            spot.addEventListener("click", (e)=>{
                let attack=[+e.target.dataset.coordinates[0],+e.target.dataset.coordinates[2]]
                resolve(attack)
            })  
        })
    })
    a.then(
        (attack)=>{
            players[0].attack(attack)
            setTimeout(()=>{
                players[1].attack()
                gameLoop()
            }, 1200)
            
        }
    )
}
// gameLoop()






export default gameLoop