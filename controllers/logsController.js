const Logs = require('../models/logsModel')
// const createError = require('http-errors')

function addLogs(logTransport) {
  try {
    let systemLog = new Logs(logTransport)
    systemLog.save()
  } catch (error) {
    console.log(error)
  }
}

module.exports = addLogs
