import Events from 'events';
import CliConfig from './cliConfig.js';
import SocketClient from './socket.js';
import TerminalController from './terminalController.js';

const [nodePath, filePath, ...commands] = process.argv;
const config = CliConfig.parseArguments(commands);
const componentEmitter = new Events();
const socketClient = new SocketClient(config)
await socketClient.initialize()
//const controller = new TerminalController();
//await controller.initializeTable(componentEmitter);