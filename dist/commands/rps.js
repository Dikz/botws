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
Object.defineProperty(exports, "__esModule", { value: true });
function randomIndex(array) {
    return Math.round(Math.random() * (array.length - 1) + 0);
}
function run(client, msg, args) {
    return __awaiter(this, void 0, void 0, function* () {
        const option = args[0] ? args[0].toLowerCase() : '';
        const options = ['pedra', 'papel', 'tesoura'];
        const icons = new Map([['pedra', '✊🏼'], ['papel', '✋🏼'], ['tesoura', '✌🏼']]);
        if (!option)
            return client.sendText(msg.from, 'Você precisa informar: *pedra, papel ou tesoura*\n_Assim por exemplo:_ /rps papel');
        if (!options.some((value) => option === value))
            return client.sendText(msg.from, 'Opção invalida! Informe: *pedra, papel ou tesoura*\n_Assim por exemplo:_ /rps papel');
        const botOption = randomIndex(options);
        const stringResult = `${icons.get(option)} *x* ${icons.get(options[botOption])}\n`;
        console.log(`${msg.sender.pushname} ::> ${option} x ${options[botOption]}`);
        if (option === 'pedra' && options[botOption] === 'pedra') {
            return client.reply(msg.from, `${stringResult}🤷🏼‍♂ *Empate!*`, msg);
        }
        if (option === 'pedra' && options[botOption] === 'papel') {
            return client.reply(msg.from, `${stringResult}Papel embrulha pedra\n🛑 *Você perdeu!*`, msg);
        }
        if (option === 'pedra' && options[botOption] === 'tesoura') {
            return client.reply(msg.from, `${stringResult}Pedra esmaga tesoura\n✅ *Você venceu!*`, msg);
        }
        if (option === 'papel' && options[botOption] === 'papel') {
            return client.reply(msg.from, `${stringResult}🤷🏼‍♂ *Empate!*`, msg);
        }
        if (option === 'papel' && options[botOption] === 'pedra') {
            return client.reply(msg.from, `${stringResult}Papel embrulha pedra\n✅ *Você venceu!*`, msg);
        }
        if (option === 'papel' && options[botOption] === 'tesoura') {
            return client.reply(msg.from, `${stringResult}Tesoura corta papel\n🛑 *Você perdeu!*`, msg);
        }
        if (option === 'tesoura' && options[botOption] === 'tesoura') {
            return client.reply(msg.from, `${stringResult}🤷🏼‍♂ *Empate!*`, msg);
        }
        if (option === 'tesoura' && options[botOption] === 'papel') {
            return client.reply(msg.from, `${stringResult}Tesoura corta papel\n🛑 *Você perdeu!*`, msg);
        }
        if (option === 'tesoura' && options[botOption] === 'pedra') {
            return client.reply(msg.from, `${stringResult}Pedra esmaga tesoura\n🛑 *Você perdeu!*`, msg);
        }
    });
}
exports.run = run;
exports.help = {
    "name": "rpc"
};
