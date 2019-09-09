'use strict'

const express = require('express');
const npm = require('npm');


const app = express();
const port = 8000;

app.get('/query_events_load', (req, res) => {
  npm.load({}, err => {
    if (err) { console.table(err); }
    npm.commands.run(['easygraphql-load-tester']);
    res.send('Running query_events_load')
  });
});

app.listen(port, () => {
  console.log('API load tests server is live on: ' + port);
});
