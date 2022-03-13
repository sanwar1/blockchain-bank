const mongoose = require('mongoose')
// const validator = require('validator')
// const Joi = require('joi')

const logsSchema = new mongoose.Schema(
  {
    requestTimestamp: Date,
    logType: {
      type: String,
      enum: ['HTTP', 'ERR']
    },
    hostname: String,
    requestIP: String,
    username: String,
    requestMethod: String,
    statusCode: Number,
    requestPath: String,
    responseLength: Number,
    responseTime: Number,
    errorMessage: String
  },
  { timestamps: true }
)

const Logs = mongoose.model('Logs', logsSchema)

// function validateLogs(log) {
//   const schema = Joi.object({
//     requestTimestamp: Joi.date().timestamp(),
//     logType: Joi.any().valid('HTTP', 'ERR').required(),
//     hostname: Joi.string().required().allow(''),
//     requestIP: Joi.string(),
//     username: Joi.string().required(),
//     requestMethod: Joi.string().required(),
//     statusCode: Joi.number().integer(),
//     requestPath: Joi.string().required(),
//     responseLength: Joi.number().integer(),
//     responseTime: Joi.number().integer()
//   }).options({ abortEarly: false })
//   return schema.validate(log)
// }

// module.exports = { Logs, validateLogs }
module.exports = Logs
