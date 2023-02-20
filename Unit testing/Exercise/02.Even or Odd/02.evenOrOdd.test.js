const isOddOrEven = require('./02.evenOrOdd.js');
const { assert } = require('chai');

describe('isOddOrEven function tests', () => {
    // Invalid input tests
    it('should return undefined is param is number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });
    it('should return undefined is param is object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('should return undefined if the param is array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('should return undefined when the param is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined)
    });
    it('should return undefined when the param is null', () => {
        assert.equal(isOddOrEven(null), undefined)
    });
    //Valid input tests
    it('should return even', () => {
        assert.equal(isOddOrEven('Hi'), 'even')
    });
    it('should return odd', () => {
        assert.equal(isOddOrEven('Hello'), 'odd')
    });
});
