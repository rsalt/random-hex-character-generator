var expect = require('expect');
var server = require('../server');

describe('Random Hax', () => {
    it('should exist', () => {
        var num = 10;
        var hexString = server.RandomHax(num);
        expect(hexString).toBeTruthy();
    })
});