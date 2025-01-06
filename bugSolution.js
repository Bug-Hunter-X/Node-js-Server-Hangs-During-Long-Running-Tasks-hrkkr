const http = require('http');

const server = http.createServer((req, res) => {
  let counter = 0;
  function incrementCounter() {
    counter++;
    if (counter < 10000000) {
      process.nextTick(incrementCounter); // or setImmediate(incrementCounter);
    } else {
      res.end('done');
    }
  }
  incrementCounter();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});