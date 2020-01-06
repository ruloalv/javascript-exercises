function add (a, b) {
	if (!inNaN(a) && !isNaN(b)){
		return (a+b);
	};
}

function subtract (a, b) {
	if (!inNaN(a) && !isNaN(b)){
		return (a-b);
	};
}

function sum (...array) {
	return array.reduce((a,b) => a+b, 0);
}

function multiply (...array) {
	return array.reduce((a,b) => a*b, 1);
}

function power(n, p) {
	let pot = 1;
	for (let i=0, i<p, i++) {
		pot *= n;
	}

	return pot;
}

function factorial(n) {
	let fact = 1;
	for (let i = n, i>1, i--){
		fact *= i;
	}
	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}