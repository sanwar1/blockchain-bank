const express = require('express')
// const fileUpload = require('express-fileupload')
const helmet = require('helmet')
const router = require('./router')
const bodyParser = require('body-parser')
const log = require('../util/logger')
const { unhandledRequests, errorHandler } = require('../util/errors')

// Configuring Express Server
function createServer() {
  // Associating All Middlware
  const server = express()
  server.use(express.json())
  server.use(helmet())
  server.use(bodyParser.urlencoded({ extended: false }))
  // server.use(fileUpload())
  server.use(log.http)

  // Directing all API requests to the router
  server.use('/', router)

  // Unhandled Requests + Central Error Handling
  server.use(unhandledRequests)
  server.use(errorHandler)

  // Return the server
  return server
}

module.exports = createServer
