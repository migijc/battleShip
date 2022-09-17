import GameBoard from "./src/GameBoard";

//tests Gameboard objects
test("Gameboard.placeShip(4, [0,0], `Horizontal`", ()=>{
    let testBoard=new GameBoard()
    testBoard.placeShip(4,[0,0], "Horizontal")
    expect(testBoard.ships[0].length).toBe(4)
    expect(testBoard.shipCoordinates[0][0].toString()).toBe("0,0")
})

test("Gameboard.placeShip(4, [0,0], `Vertical `", ()=>{
    let testBoard=new GameBoard()
    testBoard.placeShip(3,[3,1], "Vertical")
    expect(testBoard.ships[0].length).toBe(3)
    expect(testBoard.shipCoordinates[0][2].toString()).toBe("3,3")
})

test("shipsCoordinates[1] length is >1", ()=>{
    let testBoard=new GameBoard()
    testBoard.placeShip(4,[0,0], "Horizontal")
    testBoard.placeShip(4,[4,4], "Horizontal")
    testBoard.shipCoordinates[1]
    expect(testBoard.shipCoordinates[1].length).toBe(4)
})


test("recieveAttack determines if and which ship was hit", ()=>{
    let board= new GameBoard()
    board.placeShip(4, [0,0], "Horizontal")
    board.placeShip(3, [2,1], "Vertical")
    board.receiveAttack([2,5])
    board.receiveAttack([0,9])
    board.receiveAttack([0,0])
    expect(board.missedShots.length).toBe(2)
    expect(board.missedShots[0]).toEqual([2,5])
    expect(board.ships[0].positionsHit.length).toBe(1)
    expect(board.ships[0].positionsHit[0]).toEqual([0,0])

    board.receiveAttack([2,3])
    expect(board.ships[1].positionsHit.length).toBe(1)
})

test("allShipsSunk() to return true",()=>{
    let testBoard=new GameBoard()
    testBoard.placeShip(4, [0,0], "Horizontal")

    expect(typeof testBoard.allShipsSunk()).toBe("boolean")
    expect(testBoard.allShipsSunk()).toBe(false)
    
    testBoard.receiveAttack([0,0])
    testBoard.receiveAttack([1,0])
    testBoard.receiveAttack([2,0])
    testBoard.receiveAttack([3,0])
    expect(testBoard.ships[0].isDestroyed).toBe(true)
    expect(testBoard.allShipsSunk()).toBe(true)

    testBoard.placeShip(3, [5,0], "Horizontal")
    expect(testBoard.allShipsSunk()).toBe(false)
    
    testBoard.receiveAttack([5,0])
    testBoard.receiveAttack([6,0])
    testBoard.receiveAttack([7,0])
    expect(testBoard.allShipsSunk()).toBe(true)
})

test("board.getAllPositions() is called, board.allAvailableSpots.length==100", ()=>{
    let testBoard= new GameBoard()
    testBoard.getAllPositions()
    expect(testBoard.allAvailableSpots.length).toBe(100)
})

