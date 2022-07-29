function getRandomInt() {
    const min = 0;
    const max = 100000;
    return Math.floor(Math.random() * (max - min)) + min;
}

export { getRandomInt }