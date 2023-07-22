const os = require("os");

// info about current user

// console.log(os.userInfo());

//Uptime

// console.log(os.uptime());

// console.log(`The system uptime is ${os.uptime()} seconds`);

const currOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currOS);
