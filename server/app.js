const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config()

//ROUTES
app.use('/reddit',require('./routes/reddit'));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`))


