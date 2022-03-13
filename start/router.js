// Express Router Configuration
const express = require('express')
const router = express.Router()

// Routes: Generic
router.get('/', (req, res) => {
  res.status(200).send(`Hello World!`)
})

module.exports = router
