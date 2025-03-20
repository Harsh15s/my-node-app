// test/app.test.js
const assert = require('chai').assert;
const app = require('../app'); // Import the app file

describe('My Node.js App', function() {
  describe('add()', function() {
    it('should return 3 when adding 1 and 2', function() {
      const result = app.add(1, 2);
      assert.strictEqual(result, 3);
    });

    it('should return -1 when adding 1 and -2', function() {
      const result = app.add(1, -2);
      assert.strictEqual(result, -1);
    });

    it('should return 0 when adding 0 and 0', function() {
      const result = app.add(0, 0);
      assert.strictEqual(result, 0);
    });
  });
});

