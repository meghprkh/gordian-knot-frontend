import request from 'superagent-use'

var prefix;
if (DEV) prefix = require('superagent-prefix')('http://localhost:3000/api');
else prefix = require('superagent-prefix')('/api');

request.use(prefix)
request.use(req => req.type('form'))
request.use(req => authToken && req.set('Authorization', authToken))

window.request = request
