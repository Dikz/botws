import { Whatsapp, Message } from 'sulla-hotfix'
import axios from 'axios'

export async function run(client: Whatsapp, msg: Message, args: string[]) {
  const res = await axios('https://api.hgbrasil.com/finance')
  const dollar: number = res.data.results.currencies.USD.sell

  client.reply(msg.from, `R$ ${dollar.toFixed(2)}`, msg)
}

export const help = {
  name: "dollar"
}
