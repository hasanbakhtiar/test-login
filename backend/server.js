const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());


// Routers
const authRoute = require('./routers/auth');
app.use('/',authRoute);

const productRoute = require('./routers/product');
app.use('/product',productRoute);

const sequelize = require('./config/sequelize');
// require('./models/product');
// require('./models/user');

// (async () => {
//   await sequelize.sync({ force: true });
//   console.log("sync is successfully");
// })();



app.listen(3000, () => {
    console.log("Express server running on port 3000");
})