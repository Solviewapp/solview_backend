const express = require('express');
const http = require("http");
const fileupload = require("express-fileupload");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./src/routes');
const app = express();
const bannerController = require('./src/controllers/banner');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(fileupload());


mongoose.connect("mongodb://localhost:27017/solv", { useNewUrlParser: true, }).then(() => {
  console.log('Database is connected')
}, err => {
  console.log('Can not connect to the database' + err)
})
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + "/files"));

app.use('/trade', routes.trade);
app.use('/dashboard', routes.dashboard);
app.use('/banner', routes.banner);
app.use('/staking', routes.staking);
app.use('/user', routes.user);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.post("/file", async (req, res) => {
  const newpath = __dirname + "/files/"
  const file = req.files.file
  const filename = req.body.fileName

  await file.mv(`${newpath}${filename}`, async (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    else {
      await bannerController.insertData(req, res);
    }
  });
});


const server = http.createServer(app);

server.listen(process.env.SERVER_PORT, () => console.log(`Listening on port ${process.env.SERVER_PORT}`));