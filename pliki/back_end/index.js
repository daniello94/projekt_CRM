require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const clientRouter= require("./app/routes/clientRouter");
const clientApi = require("./app/api/clientApi");
const userApiRouter = require("./app/api/userApi")

const config = {
    origin: 'http://' + process.env.DB_HOST
}

// console.log(config.origin);
app.use(express.json());
app.use(cors());

app.use("/client",clientRouter);
app.use("/api/client", clientApi)
app.use("/api/user",userApiRouter)


app.get('/', cors(config), function (req, res) {
    res.status(219).json('Projekt CRM')
})
app.listen(process.env.PORT, function () {
    console.log(`Serwer na porcie ${process.env.PORT} działą poprawnie`);
})