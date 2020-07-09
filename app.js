const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Garage!!");
});
 
module.exports.app = app;
