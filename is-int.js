// ALGORITHM
function isInt(num) {
	num = num * 10;
	num = "" + num; // parse string
	return num[num.length - 1] === "0" ? true : false;
}

// TEST
// module.exports = { isInt }; // uncomment to enable JEST
