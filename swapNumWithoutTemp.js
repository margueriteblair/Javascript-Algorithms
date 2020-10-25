function swapNums(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, b);
}
swapNums(10, 5);