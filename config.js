'use strict'

module.exports = {
    name: 'cac-chaos-monkey',
    version: '1.0.0',
    env: process.env.NODE_ENV || 'development',
    log: {
      enabled: process.env.LOGFILE_ENABLED || false,
      path: process.env.MQTT_ENABLED || '/tmp/cac-chaos-monkey.log'
    },
    // Comma separated list of hosts to test.
    hosts: process.env.HOSTS || 'localhost:3000,localhost:3001',
    path: process.env.DEFAULT_PATH || '/internal/kill',
    // Upper bound for the random timeout in milliseconds (default 3000).
    random_upper: process.env.DEFAULT_UPPER || 3000,
    // Lower bound for the random timeout in milliseconds (default 3000).
    random_lower: process.env.DEFAULT_UPPER || 1000,
}
