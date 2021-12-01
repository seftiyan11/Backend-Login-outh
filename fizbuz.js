var http = require('http')
 
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    for (var i = 1; i <= 15; i ++) { // // 3 input tested // 15 inputnya ini.
        response.write(i % 15 == 0 ? "FizzBuzz\n" :
                       i %  3 == 0 ? "Fizz\n" :
                       i %  5 == 0 ? "Buzz\n" :
                       i.toString() + "\n")
    }
    response.end()
    process.exit()
}).listen(9000)
console.log(`Server berjalan pada port 9000`);
