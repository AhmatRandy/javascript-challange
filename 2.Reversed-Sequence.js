const reversedSequence = n =>
	[...Array(n)].map((el, index) => index + 1).reverse();

console.log(reversedSequence(5));
