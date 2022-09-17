import GameBoard from "./GameBoard";

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
}

let players=[player, computer]
let currentPlayer=players[0]

players.forEach(player=>{
    player.board.getAllPositions()
})
export default players
export {currentPlayer}