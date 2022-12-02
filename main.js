const http = require('http')
const port = 4001

const server = http.createServer(function (req, res) {
   res.end('Hello world!')
})

server.listen(port, function (error) {
   if (error){
      console.log('Something went wrong', error)
   } else {
      console.log('Server listening on port ' + port)
   }
})
