const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const web3 = require('web3-utils')

  if (req.query !== {} && req.query.val) {
    var dec_value = req.query.val;
    const weiValue = web3.toWei(dec_value);
    const hexValue = web3.toHex(weiValue);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "code": 200, "message": "Success", "data": hexValue }));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "code": 500, "message": "Invalid request." }));
  }
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});