// Railway Healthcheck
// This file helps Railway verify that the application is running correctly

const http = require('http');

const options = {
  hostname: 'localhost',
  port: process.env.PORT || 5000,
  path: '/',
  method: 'GET',
  timeout: 2000
};

const req = http.request(options, (res) => {
  console.log(`Healthcheck status: ${res.statusCode}`);
  if (res.statusCode === 200) {
    process.exit(0); // Success
  } else {
    process.exit(1); // Failure
  }
});

req.on('error', (err) => {
  console.log('Healthcheck failed:', err.message);
  process.exit(1); // Failure
});

req.on('timeout', () => {
  console.log('Healthcheck timeout');
  req.destroy();
  process.exit(1); // Failure
});

req.end();