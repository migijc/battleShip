
import gameLoop from "./gameLoop"
import players from "./players"
import { currentPlayer } from "./players"
import human5Vertical from "./img/human/human5Vertical.png"
import human4Vertical from "./img/human/human4Vertical.png"
import human3Vertical from "./img/human/human3Vertical.png"
import human2Vertical from "./img/human/human2Vertical.png"
import human1Ship from "./img/human/human1.png"
import logo from "./img/BS.png"
document.querySelector("#bsLogo").src=logo


let renderComputerBoard = () => {
    let allSpots = players[1].board.allAvailableSpots
    let computerGrid = document.getElementById("computerBoard")
    let shipOnSpot = (newSpot) => {
        players[1].board.shipCoordinates.forEach(ship => {
            ship.forEach(coordinate => {
                if (newSpot.classList[1] == coordinate.toString()) {
                    
                }
            })
        })
    }
    allSpots.forEach(spot => {
        let newGridPoint = document.createElement("div")
        newGridPoint.setAttribute("data-coordinates", `${spot}`)
        newGridPoint.classList.add("gridCell", (`${spot}`))
        shipOnSpot(newGridPoint)
        newGridPoint.classList.remove(`${spot}`)
        computerGrid.appendChild(newGridPoint)
    })
}

let renderPlayerBoard = () => {
    let allSpots = players[0].board.allAvailableSpots
    let playerGrid = document.getElementById("playerBoard")
    allSpots.forEach(spot => {
        let newGridPoint = document.createElement("div")
        newGridPoint.classList.add("gridCell", (`${spot}`))
        newGridPoint.classList.remove(`${spot}`)
        newGridPoint.setAttribute("data-coordinates", `${spot}`)
        playerGrid.appendChild(newGridPoint)
    })
}

let markGridSpotHit=(hitSpot)=>{
    let spotHit
    if(currentPlayer.name=="Human"){
        spotHit=Array.from(document.querySelectorAll("#computerBoard > .gridCell"))
    } else {
        spotHit=Array.from(document.querySelectorAll("#playerBoard > .gridCell"))
    }
    spotHit=spotHit.filter(spot=>{
        if(spot.dataset.coordinates== hitSpot.toString()){
            spot.style.backgroundColor="#29be6085"
            return spot
        }
    })
}

let markGridSpotMissed=(missedSpot)=>{
    let spotHit
    if(currentPlayer.name=="Human"){
        spotHit=Array.from(document.querySelectorAll("#computerBoard > .gridCell"))
    } else {
        spotHit=Array.from(document.querySelectorAll("#playerBoard > .gridCell"))
    }
    spotHit=spotHit.filter(spot=>{
        if(spot.dataset.coordinates== missedSpot.toString()){
            spot.style.backgroundColor="#be3c2985"
            return spot
        }
    })
}

let changeOrientationButton=document.createElement("button")
changeOrientationButton.classList.add("orientationButton")
changeOrientationButton.textContent="Rotate"
let playerShipsDiv=document.querySelector(".playerShips")
let gameBody=document.querySelector("#gameBody")
let computerSide=document.body.querySelector(".computerSide")

let setPlayerShips= (start, length)=>{
    start=start||0
    length=length||5
    if(start == playerShips.length){
        // gameBody.append(computerSide)
        playerShipsDiv.style.visibility="hidden"
        return gameLoop()
    }
    else{ 
        let ship=playerShips[start][0]
        playerShipsDiv=document.querySelector(".playerShips")
        ship.classList.add(`humanShip${start}`, "shipDisplayed", "toBePlaced")
        ship.setAttribute("draggable", "true")
        ship.setAttribute("data-length", `${length}`)
        ship.style.cursor="move"
        playerShipsDiv.append(ship, changeOrientationButton)
        let playersGridSpots=document.querySelectorAll("#playerBoard > .gridCell")
        onDrag(ship)
        let finalCoordinates = new Promise(resolve=>{
            playersGridSpots.forEach(spot=>{
                spot.addEventListener("dragend", ()=>{
                    ship.style.visibility="visible"
                    resolve(spot)
                })
            })
        }).then(
            resolve=>{
                let allSpots=players[1].board.allAvailableSpots
                playerShipsDiv.removeChild(changeOrientationButton)
                allSpots.forEach(spot=>{
                    let gridSpot=document.querySelector(`[data-coordinates = "${spot.toString()}"]`)
                    gridSpot.classList.remove("spotAvailable")
                    gridSpot.classList.remove("spotTaken")

                })
                resolve.classList.remove("potentialSpot")
                ship.classList.remove("currentDrag", "toBePlaced")
                ship.setAttribute("draggable", "false")
                let attack=([+resolve.dataset.coordinates[0], +resolve.dataset.coordinates[2]])
                if(Array.from(ship.classList).includes("rotated")){
                    players[0].board.placeShip(length, attack, 'Horizontal')
                }
                else{
                    players[0].board.placeShip(length, attack, 'Vertical')
                }
                return setPlayerShips(start+1, length-1)
            }
        )
    }
}


function onDrag(ship){
    let playersGridSpots=document.querySelectorAll("#playerBoard > .gridCell")
    let availableGridDivs= new Promise(resolve=>{
        let allSpots=players[0].getAllOpenSpots()
        ship.addEventListener("dragstart", (e)=>{
            var possibleSpaces=getAllPossibleCoordinates(+ship.dataset.length, ship)
            e.target.classList.add("currentDrag")
            allSpots.forEach(spot=>{
                let gridSpot=document.querySelector(`[data-coordinates = "${spot.toString()}"]`)
                gridSpot.classList.add("spotAvailable")
            })
            markSpotTaken()
            resolve(possibleSpaces)

        })

    })
    console.log(availableGridDivs)
    availableGridDivs.then(
        resolve=>{
            resolve.forEach(spot=>{
                spot.addEventListener("dragover", (e)=>{
                    e.preventDefault()
                    ship.classList.add("onGrid")
                    e.target.appendChild(document.querySelector(".currentDrag"))
                    let currentShip= document.querySelector(".currentDrag")
                    currentShip.style.visibility="hidden"
                })
                spot.addEventListener("dragenter", (e)=>{
                    if(Array.from(e.target.classList).includes("gridCell")){
                        e.target.classList.add("potentialSpot")
                    }
                })
                spot.addEventListener("dragleave", (e)=>{
                    e.target.classList.remove("potentialSpot")
                })
            }) 
        }
    )
      
}

function markSpotTaken(){
    let playerShips= players[0].getAllPlayerShips()
    playerShips.forEach(ship=>{
        let spot= document.querySelector(`[data-coordinates = "${ship.toString()}"]`)
        spot.classList.add("spotTaken")
    })
}

changeOrientationButton.addEventListener("click", ()=>{
    document.querySelector(".toBePlaced").classList.toggle("rotated")
})

function getAllPossibleCoordinates(length,ship){
    let playerGrid=document.querySelectorAll("#playerBoard > .gridCell")
    let possibleSpots=[]
    if(Array.from(ship.classList).includes("rotated")){
        Array.from(playerGrid).forEach(spot=>{
            if((+spot.dataset.coordinates[0]+length) <= 10){
                possibleSpots.push(spot)
            }
        })
        console.log(possibleSpots)

        return possibleSpots
    }
    else{
        Array.from(playerGrid).forEach(spot=>{
            if((+spot.dataset.coordinates[2]+length <= 10)){
                possibleSpots.push(spot)
            }
        })
        return possibleSpots
    }
}


let human5V=new Image()
human5V.src= human5Vertical
let human4V=new Image()
human4V.src=human4Vertical
let human3V=new Image()
human3V.src=human3Vertical
let human2V=new Image()
human2V.src=human2Vertical
let human1= new Image()
human1.src= human1Ship
let playerShips= [[human5V], [human4V], [human3V], [human2V], [human1]]








 


export { renderComputerBoard, renderPlayerBoard, markGridSpotHit, markGridSpotMissed, setPlayerShips }