"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const sulla_hotfix_1 = require("sulla-hotfix");
const loadCmds_1 = __importDefault(require("./utils/loadCmds"));
// import config from '../config.json'
const prefix = process.env.PREFIX;
function start(client) {
    return __awaiter(this, void 0, void 0, function* () {
        client.commands = new Map();
        loadCmds_1.default(client);
        client.onMessage(message => {
            if (!message.body.startsWith(prefix))
                return;
            let content = message.body.split(' ');
            let args = content.slice(1);
            const command = content[0].toLowerCase();
            let commandfile = client.commands.get(command.slice(prefix.length));
            if (commandfile)
                commandfile.run(client, message, args);
        });
        const battery = yield client.getBatteryLevel();
        console.log(battery);
    });
}
sulla_hotfix_1.create('session', {
    headless: Boolean(process.env.HEADLESS) ? Boolean(process.env.HEADLESS) : false
}, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36')
    .then((client) => {
    start(client);
});
