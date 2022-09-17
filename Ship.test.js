import Ship from "./src/ship"

//tests Ship Objects
test  ("Ship Object.length=4",()=>{
    expect(new Ship(4).length).toEqual(4)
    expect(new Ship(3).length).toEqual(3)
})

test("ship.hit inludes 44 when hit(44) is called", ()=>{
    let testShip=new Ship(4)
    testShip.hit(44)
    expect(testShip.positionsHit).toContain(44)
})

test("ship.isDestroyed = true if positionsHit.length== ship.length", ()=>{
    let testShip1= new Ship(4)
    testShip1.hit(22)
    testShip1.hit(22)
    testShip1.hit(22)
    testShip1.hit(22)
    testShip1.isSunk()

    expect(testShip1.isDestroyed).toBe(true)
})





