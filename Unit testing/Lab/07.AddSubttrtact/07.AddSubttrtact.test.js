const { createCalculator } = require('./07.AddSubttrtact');
const { assert } = require('chai');

describe('Test createCalculator function', () => {
    let calculation;
    beforeEach(function () {
        calculation = createCalculator();
            });
    it("Should return 0 for get;", () => {
        assert.equal(calculation.get(), 0);
    });
    it('Should return 2 after add(1); add(1);', () => {
        calculation.add(1);
        calculation.add(1);
        assert.equal(calculation.get(), 2);
    });
    it('Should return -2 after subtract(1); subtract(1);', () => {
        calculation.subtract(1);
        calculation.subtract(1);
        assert.equal(calculation.get(), -2);
    });
    it('Should return 0 after add(1); subtract(1);', () => {
        calculation.add(1);
        calculation.subtract(1);
        assert.equal(calculation.get(), 0);
    });
    it('Should return 3.3 after add(1.1); add(2.2);', () => {
        calculation.add(1.1);
        calculation.add(2.2);
        assert.equal(calculation.get(), (1.1 + 2.2));
    });
    it('Should return 0 after add(1.1); subtract(1.1);', () => {
        calculation.add(1.1);
        calculation.subtract(1.1);
        assert.equal(calculation.get(), (1.1 - 1.1));
    });
    it('Should return NaN with string add(\'test\');', () => {
        calculation.add('a');
        assert.isNaN(calculation.get())
    });
    it('Should return NaN with string subtract(\'test\');', () => {
        calculation.subtract('a');
        assert.isNaN(calculation.get())
    });
});