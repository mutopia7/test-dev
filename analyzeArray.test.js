const analyzeArray = require('./analyzeArray')

describe('analyzeArray function', () => {
    test('work with positive number', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 })
    });

    test('work with negative and positive numbers', () => {
        expect(analyzeArray([1,-8,3,-4,-2,16])).toEqual({ average: 1, min: -8, max: 16, length: 6 })
    });

})

