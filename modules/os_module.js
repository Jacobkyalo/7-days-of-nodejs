const os = require("os");
const process = require("process");

// console.log(os);
console.log(os.EOL);
console.log(os.arch());
console.log(os.constants);
console.log(os.cpus());
console.log(os.devNull);
console.log(os.endianness());
console.log(os.freemem());
console.log(os.getPriority());
console.log(os.homedir().toString());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
// console.log(os.setPriority([pid, ]priority))
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.version());
console.log(os.machine());
console.log(process.arch);
console.log(process.platform);
