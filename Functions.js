console.log("isEven()");
// returns True is number is even and False if it is not

function isEven(x) {
	if (x % 2 === 0) {
		return "True";
	} 
}

console.log(isEven(24));

console.log("");
console.log("factorial()");
// takes a single numeric argument and returns the factorial of that number
// factorial is: 4! is 4 x 3 x 2 x 1
// 6! is 6 x 5 x 4 x 3 x 2 x 1
// 0! is 1

//NOT FINISHED
function factorial(x) {
	for(i = x; i > 0; i--) {
		var y = 0;
		y = (i - 1) * i;
	}
	return y;
}

console.log(factorial(4));