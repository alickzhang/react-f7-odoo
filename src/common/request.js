import queryString from 'query-string'
import _ from 'lodash'

import config from './config'

let request = {}

request.get = async function(url, params) {
  if (params) {
    url += '?' + queryString.stringify(params)
  }

  // ES6 async
  try {
    const response = await fetch(url)
    const responseJson = await response.json()
    return responseJson
    // return Mock.mock(responseJson)
  } catch(error) {
    console.error(error)
  }

  // ES5 promise
  // return fetch(url)
  //   .then(response => response.json())
  //   .then(response => Mock.mock(response))
}

request.post = function(url, body) {
  const options = _.extend(config.header, {
    body: JSON.stringify(body)
  })

  console.log(options)

  return fetch(url, options)
    .then(response => response.json())
    // .then(response => Mock.mock(response))
}

export default request
