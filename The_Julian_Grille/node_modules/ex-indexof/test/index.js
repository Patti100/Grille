var assert = require('assert');
var exIndexOf = require('..');

describe('ex-indexOf', function () {
    it('should locate substring in multi times', function () {
        assert.equal(exIndexOf('hello, world', 'o'), 4);
        assert.equal(exIndexOf('hello, world', 'o', 1), 8);
        assert.equal(exIndexOf('hello, world', 'o', 2), -1);

        assert.equal(exIndexOf('too simple, too young, sometime naive', 'too'), 0);
        assert.equal(exIndexOf('too simple, too young, sometime naive', 'too', 1), 12);
        assert.equal(exIndexOf('too simple, too young, sometime naive', 'too', 2), -1);
    });

    it('should locate substring in multi times in reverse order', function () {
        assert.equal(exIndexOf('hello, world', 'o', -1), 8);
        assert.equal(exIndexOf('hello, world', 'o', -2), 4);
        assert.equal(exIndexOf('hello, world', 'o', -3), -1);

        assert.equal(exIndexOf('too simple, too young, sometime naive', 'too', -1), 12);
        assert.equal(exIndexOf('too simple, too young, sometime naive', 'too', -2), 0);
        assert.equal(exIndexOf('too simple, too young, sometime naive', 'too', -3), -1);
    });

    it('should shift over previous matching substring when `overlap` is ommited', function () {
        assert.equal(exIndexOf('aoaoao', 'oao', 1), -1);
        assert.equal(exIndexOf('aoaoao', 'oao', 1, true), 3);
    });
});
