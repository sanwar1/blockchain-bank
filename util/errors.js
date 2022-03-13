const log = require('./logger')
const createError = require('http-errors')

async function unhandledRequests(req, res, next) {
  next(createError.NotFound('This API path does not exist.'))
}

function errorHandler(err, req, res, next) {
  log.error(err, req, res)
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status,
      message: err.message
    }
  })
}

module.exports = { unhandledRequests, errorHandler }
