import { Message } from 'sulla-hotfix'
import Bot from '../base/Bot'

function randomIndex(array: string[]) {
  return Math.round(Math.random() * (array.length - 1) + 0);
}

export async function run(client: Bot, msg: Message, args: string[]) {
  const option = args[0] ? args[0].toLowerCase() : ''
  const options: string[] = ['pedra', 'papel', 'tesoura']
  const icons: Map<string, string> = new Map([['pedra', '✊🏼'], ['papel', '✋🏼'], ['tesoura', '✌🏼']])

  if (!option) return client.sendText(msg.from, 'Você precisa informar: *pedra, papel ou tesoura*\n_Assim por exemplo:_ /rps papel')

  if(!options.some((value) => option === value)) return client.sendText(msg.from, 'Opção invalida! Informe: *pedra, papel ou tesoura*\n_Assim por exemplo:_ /rps papel')

  const botOption = randomIndex(options)

  const stringResult: string = `${icons.get(option)} *x* ${icons.get(options[botOption])}\n`

  console.log(`${msg.sender.pushname} ::> ${option} x ${options[botOption]}`)

  if(option === 'pedra' && options[botOption] === 'pedra') {
    return client.reply(
      msg.from,
      `${stringResult}🤷🏼‍♂ *Empate!*`,
      msg
    )
  }
  if(option === 'pedra' && options[botOption] === 'papel') {
    return client.reply(
      msg.from,
      `${stringResult}Papel embrulha pedra\n🛑 *Você perdeu!*`,
      msg
    )
  }
  if(option === 'pedra' && options[botOption] === 'tesoura') {
    return client.reply(
      msg.from,
      `${stringResult}Pedra esmaga tesoura\n✅ *Você venceu!*`,
      msg
    )
  }

  if(option === 'papel' && options[botOption] === 'papel') {
    return client.reply(
      msg.from,
      `${stringResult}🤷🏼‍♂ *Empate!*`,
      msg
    )
  }
  if(option === 'papel' && options[botOption] === 'pedra') {
    return client.reply(
      msg.from,
      `${stringResult}Papel embrulha pedra\n✅ *Você venceu!*`,
      msg
    )
  }
  if(option === 'papel' && options[botOption] === 'tesoura') {
    return client.reply(
      msg.from,
      `${stringResult}Tesoura corta papel\n🛑 *Você perdeu!*`,
      msg
    )
  }

  if(option === 'tesoura' && options[botOption] === 'tesoura') {
    return client.reply(
      msg.from,
      `${stringResult}🤷🏼‍♂ *Empate!*`,
      msg
    )
  }
  if(option === 'tesoura' && options[botOption] === 'papel') {
    return client.reply(
      msg.from,
      `${stringResult}Tesoura corta papel\n🛑 *Você perdeu!*`,
      msg
    )
  }
  if(option === 'tesoura' && options[botOption] === 'pedra') {
    return client.reply(
      msg.from,
      `${stringResult}Pedra esmaga tesoura\n🛑 *Você perdeu!*`,
      msg
    )
  }


}

export const help = {
  "name": "rpc"
}
