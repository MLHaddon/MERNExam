const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const app = express();
require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/pet.routes')(app);
app.listen(port, () => {
  console.log(`=============================================
        Server listening on port ${port}.`);
})