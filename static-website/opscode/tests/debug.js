'use strict'

const assert = require('assert')

const https = require('https')

function debugCode () {
  getStatusOfSite('https://google.com').then(
    statusCode => assert.strictEqual(statusCode, 333, 'Expected Status Code 333 but got:' + statusCode)
  )
}

function getStatusOfSite (url) {
  return new Promise((resolve) => {
    var req = https.request(url, (res) => {
      resolve(res.statusCode)
    })
    req.end()
  })
}

// debugCode()
