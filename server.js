const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const files = require(__dirname + '/build/public/hash-manifest.json');


app.get('/bundle*', function (req, res) {
  fs = require('fs');
  fs.readFile(__dirname + '/build/' + files['bundle.js'], 'utf8', function (err, data) {
    res.send(data
             .replace('%%API_ENDPOINT%%', process.env.API_ENDPOINT ||'http://127.0.0.1:8000/')
             .replace('%%ENVIRONMENT%%', process.env.ENVIRONMENT || 'dev')
            );
  });
});

app.use('/', express.static(path.resolve('build')));
app.use('/*', express.static(path.resolve('build/index.html')));



app.listen(PORT, (error) => {
  if (error) throw (error);
  console.info(`==> Server started on ${PORT}`);
});
