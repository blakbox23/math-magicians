import operate from './operate';

test('adds 1+1 to equal 2', ()=>{
    expect(operate(1, 1, "+")).toBe("2");
});
test('adds 2-1 to equal 1', ()=>{
    expect(operate(2, 1, "-")).toBe("1");
});
test('adds 12÷2 to equal 6', ()=>{
    expect(operate(12, 2, "÷")).toBe("6");
});