class Messege {
    #name = "";
    #content = "";
    #date = "";
    constructor(name, content, date) {
        this.#name = name;
        this.#content = content;
        this.#date = date;
    }  
  
    getMessage = () => {
      return {
        name: this.#name,
        content: this.#content,
        date: this.#date,
      };
    };
  }
  
  module.exports = Messege;