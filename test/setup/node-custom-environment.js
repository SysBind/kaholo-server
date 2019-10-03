const NodeEnvironment = require('jest-environment-node');
const socket = require('socket.io-client');

 function connectToSocket(url = 'http://localhost:3000/') {
    const io = socket(url);
    return new Promise(resolve => {
        io.on('connect', () => {
            resolve(io);
        });
    });
}

class CustomEnvironment extends NodeEnvironment {

  constructor(config) {
    super(config);
  }

  async setup() {
    this.global.io = await connectToSocket(process.env.WEBSOCKET_URL);
    await super.setup();
  }

  async teardown() {
    await this.global.io.close();
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
  handleTestEvent() {}
}

module.exports = CustomEnvironment;
