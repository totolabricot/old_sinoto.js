const exec = require('child_process').exec;
const fs = require('fs');

const runProcessing = () => {
  const cmd = 'processing-java --sketch=`pwd`/osc_listen/osc_listen.pde --run';
  exec(cmd);
};

module.exports = {
  runProcessing
}
