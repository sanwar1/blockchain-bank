const colors = require('node-color-log')
const onHeaders = require('on-headers')
const addLogs = require('../controllers/logsController')

function http(req, res, next) {
  onHeaders(res, function () {
    // Inside onHeaders.
    if (res.statusCode < 400) {
      let logTransport = {
        requestTimestamp: req.get('Date') || new Date().getTime(),
        logType: 'HTTP',
        hostname: req.hostname || undefined,
        requestIP: req.ip || undefined,
        username: req.get('Username') || undefined,
        requestMethod: req.method,
        statusCode: res.statusCode,
        requestPath: req.originalUrl,
        responseLength: res.getHeaders()['content-length'] || 0,
        responseTime: new Date().getTime() - req.get('Date') || 20,
        errorMessage: ''
      }
      addLogs(logTransport)
      // colors.color('blue').bold().log(logTransport)
    }
  })
  next()
}

function info(message) {
  colors.color('white').log(message)
}

function highlight(message) {
  colors.color('black').bgColor('green').log(message)
}

function debug(message) {
  colors.color('black').bgColor('white').log(message)
}

function warn(message) {
  colors.color('yellow').log(message)
}

function error(err, req, res) {
  onHeaders(res, function () {
    // Inside onHeaders.
    if (res.statusCode >= 400) {
      let logTransport = {
        requestTimestamp: req.get('Date') || new Date().getTime(),
        logType: 'ERR',
        hostname: req.hostname || undefined,
        requestIP: req.ip || undefined,
        username: req.get('Username') || undefined,
        requestMethod: req.method,
        statusCode: res.statusCode,
        requestPath: req.originalUrl,
        responseLength: res.getHeaders()['content-length'] || 0,
        responseTime: new Date().getTime() - req.get('Date') || 20,
        errorMessage: err.message
      }
      addLogs(logTransport)
      // colors.color('red').bold().log(logTransport)
    }
  })
  // colors.color('red').bold().log(message)
}

module.exports = {
  http,
  info,
  highlight,
  debug,
  warn,
  error
}
