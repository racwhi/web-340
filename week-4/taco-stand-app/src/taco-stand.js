/**
 * Author: Rachel White
 * Date:11/17/2024
 * File Name: taco-stand.js
 * Description: Taco stand js file for methods
 */

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
class TacoStandEmitter extends EventEmitter {
  // Method to serve a customer
  serveCustomer(customer) {
    this.emit("serve", customer);
  }

  // Method to prepare a taco
  prepareTaco(taco) {
    this.emit("prepare", taco);
  }

  // Method to handle a rush
  handleRush(rush) {
    this.emit("rush", rush);
  }
}

// Export the TacoStandEmitter class
module.exports = TacoStandEmitter;
