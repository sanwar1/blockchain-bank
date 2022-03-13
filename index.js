// Import DB Connection
const connectAtlas = require('./start/db')

// Import Server Configuration
const createServer = require('./start/server')
const app = createServer()
const process = require('process')
const port = process.env.PORT

// Import custom logger
const log = require('./util/logger')

// Start the Application
app.listen(port, async () => {
  log.highlight(`App is now running at http://localhost:${port}`)
  // Connect to DB
  log.highlight(`Connecting to MongoDB Atlas...`)
  connectAtlas()
})
