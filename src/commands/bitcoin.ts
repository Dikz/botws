import { Message } from 'sulla-hotfix'
import Bot from '../base/Bot'
import axios from 'axios'

export async function run(client: Bot, msg: Message, args: string[]) {
  const res = await axios('https://api.hgbrasil.com/finance')
  const bitcoin: number = res.data.results.currencies.BTC.sell

  client.reply(msg.from, `R$ ${bitcoin.toFixed(2)}`, msg)
}

export const help = {
  "name": "bitcoin"
}
