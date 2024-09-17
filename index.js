
console.log('My first app');

console.log("=============== Built in Module - OS =======================");
const os = require('os');

// return the cpu architecture
console.log(`Arch             : ${os.arch()}`);

// Returns an array containing information about the computer's CPUs
console.log("CPU information  :" , os.cpus());

// It returns the amount of free system memory in bytes
console.log("Free memory      : ", os.freemem());

// It return total amount of system memory in bytes
console.log("Total memory     : ", os.totalmem());

// It returns hostname of system
console.log("Hostname         : ", os.hostname());

// It returns the platform of os
console.log('operating system platform : ', os.platform());

// It returns the operating systems release.
console.log('OS release       : ', os.release());

// It return operating system name
console.log("Operating system name     : ", os.type());

// Returns the uptime of the operating system, in seconds
console.log("Uptime of OS     :", os.uptime());

// Returns information about the current user
console.log("Current user information  :", os.userInfo());


console.log("=============== Global objects =======================");
console.log("Global  :",global);
console.log("Console :",console);
console.log("Process :",process);
console.log(`File Name      : ${__filename}`);
console.log(`Directory Name : ${__dirname}`);
console.log("Module  :",module);
