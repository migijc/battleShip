import players from "./src/players";
import {currentPlayer} from "./src/players"

test("currentPlayer changes after players attack", ()=>{
    players[0].attack([3,3])
    expect(currentPlayer.name).toBe("Computer")
})

test("if player attacks 3,3 computer missed shots will include[3,3]",()=>{
    expect(players[1].board.missedShots[0]).toEqual([3,3])
})




test("board.availablePositions length < 100", () =>{
    players[1].attack()
    expect(players[1].board.allAvailableSpots.length).toBeLessThan(100)
})