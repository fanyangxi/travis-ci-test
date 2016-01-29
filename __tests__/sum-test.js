jest.dontMock('../src/sum');

describe('testing sum', function () {
	var sum = require('../src/sum');
	it('adds 1 + 2 equal 3', function() {
		expect(sum(1, 2)).toBe(3);
	});
});