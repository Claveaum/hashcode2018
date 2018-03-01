/* eslint-env mocha */

const assert = require('assert')
const distance = require('./distance')

describe('distance', function () {
  it('distances', function () {
    assert.deepEqual(
      distance(),
      undefined)
  })
})
