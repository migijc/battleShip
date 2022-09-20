import players from "./players";
import { currentPlayer } from "./players";
import { renderComputerBoard, renderPlayerBoard, setPlayerShips, getPlayerName } from "./DOMInteractions"
let gameBody=document.body.querySelector("#gameBody")
let computerSide=document.body.querySelector(".computerSide")

    renderComputerBoard()
    renderPlayerBoard()
    getPlayerName()
    setPlayerShips()
    gameBody.style.visibility="hidden"
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