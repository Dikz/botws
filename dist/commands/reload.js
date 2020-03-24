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
const reloadCmd_1 = __importDefault(require("../utils/reloadCmd"));
function run(client, msg, args) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(args)
        const command = args[0];
        if (!command)
            return client.sendText(msg.from, 'Informe um comando para dar reload!');
        reloadCmd_1.default(client, command);
        client.reply(msg.from, `✅ Comando *${command}* regarregado!`, msg);
    });
}
exports.run = run;
exports.help = {
    name: "reload"
};
