import { Message } from 'sulla-hotfix'
import Bot from '../base/Bot'

export async function run(client: Bot, msg: Message, args: string[]) {
  console.log(msg)

  //await client.sendLocation(msg.from, '51.5074', '0.1278',  'LONDON!')
}

module.exports.help = {
  name: "teste"
}
