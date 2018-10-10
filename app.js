'use strict'

const config   = require('./config')
const bunyan   = require('bunyan')
const request  = require('request')

// Create logger.
global.log = new bunyan({name: config.name});

// Create log file if needed
if (config.log.enabled) {
  global.log.addStream({
    name: config.name,
    path: config.log.path
  });
}

const hosts = config.hosts.split(',')
const hostIndex = random_index()
const delay = random_delay()

function random_delay() {
  return Math.floor(Math.random() * (config.random_upper - config.random_lower)) + config.random_lower
}

function random_index() {
  return Math.floor(Math.random() * hosts.length)
}

function kill (host, path) {
  // Kill service
  const url = 'http://' + host + path
  console.log(url)
  request.get(url, function (error, response, body) {
    console.log('statusCode:', response && response.statusCode)
    console.log('Killed '+ host)
    // Generate new timeout for the next kill.
    const newDelay = random_delay()
    const newHostIndex = random_index()
    setTimeout(kill, newDelay, hosts[newHostIndex], config.path);
  })
}

console.log('The following hosts will be tested: ' + hosts)
setTimeout(kill, delay, hosts[hostIndex], config.path);
