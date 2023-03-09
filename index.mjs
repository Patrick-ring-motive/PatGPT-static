import http from 'http';
import fileFromRequest from './static-files.mjs';

http.createServer(onRequest).listen(3000);

async function onRequest(req, res) {

  if (req.url == '/ping') {
    res.statusCode = 200;
    return res.end();
  }

  return fileFromRequest(req, res);
}


