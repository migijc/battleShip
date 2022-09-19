import { markGridSpotHit } from "./DOMInteractions"
export default class Ship{
    constructor(length){
        this.length=length
        this.positionsHit=[]
        this.isDestroyed=false
        this.axis=null
    }

    hit=(position)=>{
        this.positionsHit.push(position)
        markGridSpotHit(this.positionsHit[this.positionsHit.length-1])
        return 
    }

    isSunk(){
            let positionsHitLength=this.positionsHit.length
            let shipLength=this.length
            if(positionsHitLength==shipLength){
                return this.isDestroyed=true
            }
            else return false 
    }
}

