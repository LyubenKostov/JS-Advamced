const lookupChar = require ('./03.charLookup');
const { assert } = require ('chai');

describe('Test function lookupChar', () => {
    it('Return char and index', () => {
        assert(lookupChar('Love', 1) === 'o');
    });
    it('Return char and index', () => {
        assert(lookupChar('L', 0) === 'L');
    });
    it('Index over the string length', () => {
        assert(lookupChar('Love', 10) === 'Incorrect index');
    });
    it('Negative string index', () => {
        assert(lookupChar('love', -1) === 'Incorrect index');
    });

    it('Empty string is input', () => {
        assert(lookupChar('', 0) === 'Incorrect index');
    });

    it('Return undefined if the first param is not a string', () => {
        assert(lookupChar(100, 10) === undefined);
    });
    it('Return undefined with string first param and decimal second', () => {
        assert(lookupChar('Love', 10.5) === undefined);
    });
    it('Return undefined with wrong param type', () => {
        assert(lookupChar(10, '10.5') === undefined);
    });
})