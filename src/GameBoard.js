import { markGridSpotHit, markGridSpotMissed } from "./DOMInteractions";
import Ship from "./ship";


export default class GameBoard{
    constructor(){
        this.ships=[]
        this.shipCoordinates=[]
        this.missedShots=[]
        this.board=[[0,1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8,9]]
        this.allAvailableSpots=[]
    }

    placeShip(num, startPoint, orientation){
        let ship = new Ship(num)
        let shipCoordinates=[]
        let x= startPoint[0]
        let y= startPoint[1]
        shipCoordinates.push(startPoint)
        if(orientation=="Horizontal"){
            let shipLength= ship.length-1
            for(let i=x+1; shipLength >0; i++){
                let nextCoordinate= [i, y]
                shipCoordinates.push(nextCoordinate)
                shipLength--
            }
        }
        else if(orientation=="Vertical"){
            let shipLength= ship.length-1
            for(let i=y+1; shipLength >0; i++){
                let nextCoordinate= [x, i]
                shipCoordinates.push(nextCoordinate)
                shipLength--
            }
        }
        this.shipCoordinates.push(shipCoordinates)
        this.ships.push(ship)
        return 
    }

    receiveAttack(coordinates){
        let xAxis= coordinates[0]
        let yAxis= coordinates[1]
        let allShipCoordinates= this.shipCoordinates
        let shipHit=null
        allShipCoordinates.forEach(ship=>{
            ship.forEach(point=>{
                if(point[0]== xAxis && point[1]==yAxis){
                    shipHit=allShipCoordinates.indexOf(ship)
                    return 
                }
                return
            })
            return
        })
        if(shipHit==null){
            this.missedShots.push(coordinates)
            markGridSpotMissed(this.missedShots[this.missedShots.length-1])
            return 
        }else{
            this.ships[shipHit].hit(coordinates)
            this.ships[shipHit].isSunk()
            return
        } 
    }

    allShipsSunk(){
        let allShips=this.ships
        let sunkShips=allShips.filter(ship=>{
            if(ship.isDestroyed){
                return ship
            }
        })
        if(sunkShips.length == allShips.length){
            return true
        }
        else return false
    }

    getAllPositions=function(){
        let allXAxis= this.board[0]
        let allYAxis= this.board[1].reverse()
        let newPair
        let currentX=allXAxis[0]
        let currentY=allYAxis[allYAxis.length-1]
        allYAxis.forEach(YPoint=>{
            for(let i=0; i<10; i++){
                newPair=[allXAxis[i], YPoint]
                this.allAvailableSpots.push(newPair)
            }
        })
    }
}

