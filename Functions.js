// long way
// function isEven(x) {
// 	if (x % 2 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	} 
// }

// faster way
function isEven(x){
	return x % 2 === 0;
}

// takes a single numeric argument and returns the factorial of that number
// factorial is: 4! is 4 x 3 x 2 x 1
// 6! is 6 x 5 x 4 x 3 x 2 x 1
// 0! is 1

function factorial(x) {
	var result = 1;
	for(var i = 1; i <= x; i++) {
		result *= i;
 	}
	return result;
}

