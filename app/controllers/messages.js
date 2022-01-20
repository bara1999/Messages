var express = require("express");
var MessageRoutes = express.Router();
var MessagesService = require("../services/message");
const messagesObj = new MessagesService();

MessageRoutes.get("/getAllMessages", (req, res) => {
  return res.status(200).send(messagesObj.getAllMessages());
});

MessageRoutes.post("/addNewMessage", (req, res) => {
    console.log("request body value", req.body);
    const body = req.body;
    const resp = messagesObj.addNewMessage(
      body.name,
      body.content,
      body.date
    );
    res.status(200).send(resp);
  });

module.exports = MessageRoutes;
