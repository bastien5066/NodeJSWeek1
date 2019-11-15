const http = require('http')
const serverExported = require('./handles');
const server = http.createServer(serverExported);
server.listen(8080)