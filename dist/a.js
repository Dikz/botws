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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sulla_hotfix_1 = require("sulla-hotfix");
const axios_1 = __importDefault(require("axios"));
const prefix = '/';
function start(client) {
    client.onMessage((message) => __awaiter(this, void 0, void 0, function* () {
        console.log(`${message.chat.name}> ${message.sender.shortName}: ${message.body}`);
        if (!message.body.startsWith(prefix))
            return;
        const command = String(message.body).replace(prefix, '');
        console.log(command);
        if (command === 'dollar') {
            const res = yield axios_1.default('https://api.hgbrasil.com/finance');
            const dollar = res.data.results.currencies.USD.sell;
            console.log(res.data.currencies);
            console.log(dollar);
            client.reply(message.from, `R$${dollar.toFixed(2)}`, message);
            // client.sendText(message.from, `R$${dollar}`)
        }
    }));
}
sulla_hotfix_1.create('session', {
    headless: false
}, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36')
    .then((client) => start(client));
