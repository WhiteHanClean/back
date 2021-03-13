const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {router} = require('./routes/api')

app.use(bodyParser.json());
app.use(router);

const PORT = 7473;



app.listen(PORT, () => {
    console.log(`Приложение запаущено на ${PORT} порту`);
});
 
