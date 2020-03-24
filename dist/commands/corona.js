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
const axios_1 = __importDefault(require("axios"));
function run(client, msg, args) {
    return __awaiter(this, void 0, void 0, function* () {
        const code = args[0];
        if (code) {
            if (code.length !== 2)
                return client.sendText(msg.from, 'O codigo deve ter 2 digitos');
            const response = yield axios_1.default(`https://thevirustracker.com/free-api?countryTotal=${code}`);
            const data = response.data.countrydata[0];
            const arrayInfo = [
                { key: "Total de Casos", info: data.total_cases },
                { key: "Casos Ativos", info: data.total_active_cases },
                { key: "Casos de Hoje", info: data.total_new_cases_today },
                { key: "Casos Serios", info: data.total_serious_cases },
                { key: "Recuperações", info: data.total_recovered },
                { key: "Total de Mortes", info: data.total_deaths },
                { key: "Mortes hoje", info: data.total_new_deaths_today },
            ];
            let textInfo = `👾 *Status Corona*\n[${data.info.title}]\n\n`;
            arrayInfo.map(data => {
                textInfo += `${data.key}: ${data.info}\n`;
            });
            client.sendText(msg.from, textInfo);
        }
        else {
            const response = yield axios_1.default('https://thevirustracker.com/free-api?global=stats');
            const data = response.data.results[0];
            const arrayInfo = [
                { key: "Total de Casos", info: data.total_cases },
                { key: "Casos Ativos", info: data.total_active_cases },
                { key: "Casos de Hoje", info: data.total_new_cases_today },
                { key: "Casos Serios", info: data.total_serious_cases },
                { key: "Recuperações", info: data.total_recovered },
                { key: "Total de Mortes", info: data.total_deaths },
                { key: "Mortes hoje", info: data.total_new_deaths_today },
            ];
            let textInfo = '👾 *Status Corona*\n\n';
            arrayInfo.map(data => {
                textInfo += `${data.key}: ${data.info}\n`;
            });
            client.sendText(msg.from, textInfo);
        }
    });
}
exports.run = run;
exports.help = {
    name: "corona"
};
