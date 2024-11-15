const EventEmitter = require("events");
const emitter = new EventEmitter();

let counter = 1; // Start the counter at 1 for the first 8 seconds

setInterval(() => {
    emitter.emit("eightSeconds");
  }, 8000);
  
emitter.on("eightSeconds", () => {
    console.log(`${counter * 8} seconds have passed.`);
    counter++;
  });
  
  