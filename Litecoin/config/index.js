var rpc = require("json-rpc2");
var localNode = rpc.Client.$create(
  "28332", // RPC_PORT
  "127.0.0.1", // RPC_HOST
  "rpcuser", // RPC_USER
  "pwd" // RPC_PASS
);

module.exports = {
  port: 8080,
  localNode,
  db: "mongodb://localhost:27017/litecoin-db",

  // CRON_SLEEP_TIME: 500,	//if we decrease this to 100ms, cronservice has trouble after some time.
  TX_CRON_TIME: 500, //if we decrease this to 100ms, cronservice has trouble after some time.
};
