// const validURL = require('../src/js/validUrl')

import {validURL} from '../src/js/validUrl'


describe('testing validURL function', () => {
    test('Should be valid url 1', () => {
        expect(validURL('https://www.ufc.com/')).toBeTruthy();
    })
})

describe('testing validURL function', () => {
    test('Should be valid url 2', () => {
        expect(validURL('https://www.udacity.com/')).toBeTruthy();
    })
})

describe('testing validURL function', () => {
    test('Should be invalid url', () => {
        expect(validURL('h6ttps://www.udacity.com/')).toBeFalsy();
    })
})