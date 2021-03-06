const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


/********* Middleware *********/
// app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/********* Routes + Controllers *********/


/********* Start App *********/
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})