const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  let counter = 0;
  const intervalId = setInterval(() => {
    counter++;
    if (counter === 10000000) {
      clearInterval(intervalId);
      res.end('done');
    }
  }, 0);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});