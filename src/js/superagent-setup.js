import request from 'superagent-use'

var prefix;
if (DEV) prefix = require('superagent-prefix')('http://localhost:3000');
else prefix = require('superagent-prefix')('/api');

request.use(prefix)
request.use(req => req.type('form'))
request.use(req => req.set('Authorization', authToken))

window.request = request
