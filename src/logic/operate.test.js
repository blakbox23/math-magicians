import operate from './operate';

test('adds 1+1 to equal 2', ()=>{
    expect(operate(1, 1, "+")).toBe("2");
});
test('subtract 2-1 to equal 1', ()=>{
    expect(operate(2, 1, "-")).toBe("1");
});
test('divide 12÷2 to equal 6', ()=>{
    expect(operate(12, 2, "÷")).toBe("6");
});
test('mutiply 12÷0 to return a 0', () => {
    expect(operate(0,7, "÷")).toBe("0")
})
test('mutplication 12 X 3 to equal 36',() => {
    expect(operate(12,3,'x')).toBe("36")
}) 