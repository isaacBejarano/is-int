// ALGORITHM

// Number.isInteger() is ES6, doesn't exist in ES5 -> my workaround => isInt(num)
function isInt(x) {
	var num = "" + x * 10; // parse string
	return num[num.length - 1] === "0" ? true : false;
}

// TEST
module.exports = { isInt }; // uncomment to enable JEST
