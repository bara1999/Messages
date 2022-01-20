const Message = require("../models/message");
class MessageService {
    #listOfMessages = [];
    addNewMessage = (name, content, date) => {
      const temp = new Message(name, content, date);
      console.log("message Object", temp.getMessage());
      this.#listOfMessages.push(temp.getMessage());
      return this.#listOfMessages;
    };
  
    getAllMessages = () => {
      return this.#listOfMessages;
    };
  }
  
  module.exports = MessageService;
  
