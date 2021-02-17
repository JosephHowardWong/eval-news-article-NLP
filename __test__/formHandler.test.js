// const {rankScore, analyzePage, fetchInfo} = require('../src/js/formHandler')
import {rankScore, analyzePage, fetchInfo} from '../src/js/formHandler'


describe('testing sentiment rankScore function', () => {
    test('sentiment score is correctly ranked test #1', () => {
        expect(rankScore('P+')).toBe('STRONG POSITIVE')
    })
})


describe('testing sentiment rankScore function', () => {
    test('sentiment score is correctly ranked test #2', () => {
        expect(rankScore('NEU')).toBe('NEUTRAL')
    })
})

// P+: strong positive
// P: positive
// NEU: neutral
// N: negative
// N+: strong negative
// NONE: without sentiment

describe('testing function analyzePage is defined', () => {
    test('ensure analyzePage function exists', () => {
        expect(analyzePage).toBeDefined();
    }) 
})        

describe('testing function fetchInfo is defined', () => {
    test('ensure fetchInfo function exists', () => {
        expect(fetchInfo).toBeDefined();
    // expect(fetchInfo('http://localhost:8080/getSentiment', {urlUser})).toEqual()
    })
})