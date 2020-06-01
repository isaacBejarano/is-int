let { isInt } = require("../is-int.js");

describe("isInt()", () => {
	it("checks an 'integer' by returning a boolean", () => {
		expect(isInt(0)).toBe(true);
		expect(isInt(5.5)).toBe(false);
	});

	it("coherces 'bolean' and truthy values to 'true'", () => {
		expect(isInt(true)).toBeTruthy(); // 1
		expect(isInt(false)).toBeTruthy(); // 0
		expect(isInt(null)).toBeTruthy(); // 0
		expect(isInt("")).toBeTruthy(); // "0"
	});

	it("coherces 'string' and falsy values to 'false'", () => {
    expect(isInt(undefined)).toBeFalsy();
    expect(isInt(NaN)).toBeFalsy();
		expect(isInt("string")).toBeFalsy();
	});
});
