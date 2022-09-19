import GameBoard from "./GameBoard";
import {placeComputerShipImg} from "./DOMInteractions"

let player = {
    name:"Human",
    board: new GameBoard(),
    attack: (coordinates)=>{
        computer.board.receiveAttack(coordinates)
        currentPlayer=players[1]
    },

    getAllPlayerShips(){
        let allSpots=[]
        let playersGridSpots=document.querySelectorAll("#playerBoard > .gridCell")
        playersGridSpots.forEach(spot=>{
            players[0].board.shipCoordinates.forEach(ship => {
                ship.forEach(coordinate => {
                    if (spot.dataset.coordinates == coordinate.toString()) {
                        allSpots.push(coordinate)
                    }
                })
            })
        })
        return allSpots
    },

    getAllOpenSpots(){
        let allShips= player.getAllPlayerShips()
        for(let i=0; i<allShips.length; i++){
            player.board.allAvailableSpots=player.board.allAvailableSpots.filter(spot=>{
                if(spot.toString()!==allShips[i].toString()){
                    return spot
                }
            })
        }
        return player.board.allAvailableSpots
    }
}

let computer = {
    name:"Computer",
    board: new GameBoard(),
    attack: ()=>{
        let randomAvailableSpotIndex=Math.floor(Math.random()*computer.board.allAvailableSpots.length)
        let currentShot=computer.board.allAvailableSpots[randomAvailableSpotIndex]
        player.board.receiveAttack(currentShot)
        computer.removeFromAvailableShots(currentShot)
        currentPlayer=players[0]
    },

    removeFromAvailableShots(coordinates){
        computer.board.allAvailableSpots=computer.board.allAvailableSpots.filter(availableSpot =>{
            if(availableSpot.toString() !== coordinates.toString()){
                return availableSpot
            }
        })
    },

    placeRandomShip(currentLength){
        let actual=currentLength
        let shipAxis=["Horizontal", "Vertical"]
        currentLength=currentLength||5
        if(actual ==0){
            return
        } else {
            let currentShipAxis= shipAxis[Math.floor(Math.random()*2)]
            let arrayOfAllCoordinates=[]
            if(computer.board.shipCoordinates.length > 0){
                computer.board.shipCoordinates.forEach(ship=>{
                    ship.forEach(coordinate=>{
                        arrayOfAllCoordinates.push(coordinate)
                    })
                })
                arrayOfAllCoordinates=arrayOfAllCoordinates.map(set=>{
                    return set.toString()
                })
            }
            let openPosition=[]
            let realOpen=[]
            if(currentShipAxis=="Horizontal"){
                openPosition=computer.board.allAvailableSpots.filter(spot=>{
                    if((spot[0]+currentLength)< 11 && computer.isShipsIntersecting(currentLength, spot, currentShipAxis, arrayOfAllCoordinates)==false){
                        computer.isShipsIntersecting(currentLength, spot, currentShipAxis, arrayOfAllCoordinates)
                        return spot
                    }
                })
            }
            else{
                if(currentShipAxis=="Vertical"){
                    openPosition=computer.board.allAvailableSpots.filter(spot=>{
                        if((spot[1]+currentLength)< 11 && computer.isShipsIntersecting(currentLength, spot, currentShipAxis, arrayOfAllCoordinates)==false){
                            return spot
                        }
                    })
                }
            } 
            let gridSpot= openPosition[Math.floor(Math.random() * openPosition.length)]
            let domSpot=document.querySelector(`#computerBoard > [data-coordinates= "${gridSpot[0]},${gridSpot[1]}"]`)
            placeComputerShipImg( domSpot, currentLength, currentShipAxis)
            computer.board.placeShip(currentLength, gridSpot, currentShipAxis)
            return computer.placeRandomShip(currentLength-1)
        }

    },
    findNextCoordinates(length, coordinates, orientation){
        let nextCoordinates=[]
        let start=1
        if(orientation== "Horizontal"){
            while(nextCoordinates.length < length){
                nextCoordinates.push([coordinates[0]+1, coordinates[1]])
            }
            return nextCoordinates
        }
        else{
            if(orientation== "Vertical"){
                while(nextCoordinates.length < length-1){
                    nextCoordinates.push([coordinates[0], coordinates[1]+ start++].toString())
                }
                return nextCoordinates
            }
        }
    },

    isShipsIntersecting(length, spot, axis, coordinates){
        let nextInLine=computer.findNextCoordinates(length, spot, axis)
        let returnAnswer= false
        coordinates.forEach(set=>{
            if(nextInLine.includes(set)){
                returnAnswer= true
            }
        })
        return returnAnswer
    },

    displaySunkShips(ships){
        computer.board.ships.forEach(ship=>{
            if(ship.isSunk()==true){
                let index= computer.board.ships.indexOf(ship)
                let start=computer.board.shipCoordinates[index][0]
                let sunkShip=document.querySelector(`#computerBoard > [data-coordinates = "${start[0]},${start[1]}"]`)
                let img=sunkShip.childNodes[0]
                img.style.visibility="visible"
            }
        })
    }
}

let players=[player, computer]
let currentPlayer=players[0]

players.forEach(player=>{
    player.board.getAllPositions()
})
export default players
export {currentPlayer}