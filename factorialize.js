function factorialize(value) {
    if (value === 0 || value === 1) {
        console.log(1);
    }
    for (let i = value-1; i > 1; i--) {
        value *= i;
        console.log(value);
    }
}
factorialize(5);