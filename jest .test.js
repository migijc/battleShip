import hey from "./src/index"

test("expect 'hey'", ()=>{
    expect(hey()).toBe("hey")
})