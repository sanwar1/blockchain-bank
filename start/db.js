const mongoose = require('mongoose')
const log = require('../util/logger')
const db = 'mongodb://localhost:27017/bcBank'

async function connectAtlas() {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    log.highlight('MongoDB Atlas connected!')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

module.exports = connectAtlas
