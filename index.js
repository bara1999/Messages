const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const MesRoutes = require("./app/controllers/messages");

app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/masseges", MesRoutes);

app.get("/", (request, response) => {
  return response.status(200).send("hello world!");
});

app.listen(3001, () => {
  console.log("the app is running on port 3001");
});
