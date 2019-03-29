'use strict'
const {
  pkg,
  deploy,
  remove
} = require('serverless-components')
const assert = require('assert')

const https = require('https')
const url = require('url')

step('Page contains <content>', async (content) => {
  assert.strictEqual('Exists', (await text(contains(content)).exists()).description)
})

step('Install Gauge by following the installation from <content>', async function (content) {
  let statusCode = await getStatusOfSite(content)
  assert.strictEqual(statusCode, 200, 'Expected Status Code 200 but got: ' + statusCode)
})

function getStatusOfSite (url) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const req = https.request(url, (res) => {
          resolve(res.statusCode)
        })
        req.end()
      }, 1000)
    } catch (e) {
      reject(e)
    }
  })
}

/*
function withServerlessFileObject() {
    const serverlessFileObject = {
        type: 'my-app',
        version: '0.1.0',
        components: {
            myRole: {
                type: 'tests-integration-iam-mock',
                inputs: {
                    name: 'my-role-name',
                    service: 'my.function.service'
                }
            }
        }
    }

    console.log('Deploying service...')
    await deploy({
        serverlessFileObject
    })
    console.log('Re-deploying service...')
    await deploy({
        serverlessFileObject
    })
    console.log('Removing service...')
    await remove({
        serverlessFileObject
    })
}

Promise.resolve()
    .then(withProjectPath)
*/
