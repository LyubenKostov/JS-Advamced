const mathEnforcer = require('./04.mathEnforcer');
const { assert } = require('chai');

describe('', () => {
    describe('Add five function test', () => {
        //Test with incorrect input
        it('Should return undefined with string', () => {
            assert(mathEnforcer.addFive('TEST') === undefined);
        });
        it('Should return undefined with object', () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });
        it('Should return undefined with array', () => {
            assert(mathEnforcer.addFive([]) === undefined);
        });
        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });
        //With correct input
        it('Positive integer num + 5 ', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });
        it('Negative num + 5 ', () => {
            assert(mathEnforcer.addFive(-5) === 0);
        });
        it('Decimal num + 5 ', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });
    });
    describe('Subtract ten function tes', () => {
        //Test with incorrect input
        it('Should return undefined with string', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined);
        });
        it('Should return undefined with object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });
        it('Should return undefined with array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined);
        });
        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });
        //With correct input
        it('Positive integer num - 10 ', () => {
            assert(mathEnforcer.subtractTen(5) === -5);
        });
        it('Negative num -10 ', () => {
            assert(mathEnforcer.subtractTen(-5) === -15);
        });
        it('Decimal num -10 ', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        });
    });
    describe('Sum of two numbers function test', () => {
        // Test with correct inputs
        it('Two positive numbers', () => {
            assert(mathEnforcer.sum(10, 20) === 30);
        });
        it('Two negative numbers', () => {
            assert(mathEnforcer.sum(-10, -2.5) === -12.5);
        });
        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(1.5, 2.5) === 4);
        });

        // Test with incorrect input
        it('First param string second num', () => {
            assert(mathEnforcer.sum('10', 20) === undefined);
        });
        it('First param num second str', () => {
            assert(mathEnforcer.sum(20, '20') === undefined);
        });
    });
})