const grow = x => x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([4, 4, 4, 4]));
