// ALGORITHM
function isInt(num) {
	num = num * 10;
	num = "" + num; // parse string
	return num[num.length - 1] === "0" ? true : false;
}

/* NOTE
    When multiplied by 10, last digit in 'integer' is always 0.
    Javascript coherces ("" + 'number') to "string", which is iterable.
    It also coherces 'bolean' and 'truthy' values to integer.  */

// TEST
// module.exports = { isInt }; // uncomment to enable JEST
