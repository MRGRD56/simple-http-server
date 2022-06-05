const http = require('http');

const ANY_HOST = '0.0.0.0';
const LOCALHOST = 'localhost';

const argv = process.argv.slice(2);

const args = {
    port: argv[0],
    host: argv[1],
    responseBody: argv[2],
    responseStatus: argv[3]
};

const port = args.port ? Number.parseInt(args.port) : 9999;
const host = args.host || ANY_HOST;
const responseBody = args.responseBody || 'Hello, world!';
const responseStatus = args.responseStatus ? Number.parseInt(args.responseStatus) : 200;

const server = http.createServer((req, res) => {
    res.writeHead(responseStatus, {
        'X-Made-By': 'MRGRD56'
    });
    res.end(responseBody);
});

server.listen(port, host, () => {
    const accessibleHost = host === ANY_HOST ? LOCALHOST : host;
    console.log(`The server is running on http://${accessibleHost}:${port}`);
});
