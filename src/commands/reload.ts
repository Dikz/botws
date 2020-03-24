import { Message } from 'sulla-hotfix'
import Bot from '../base/Bot'
import reloadCmd from '../utils/reloadCmd'

export async function run(client: Bot, msg: Message, args: string[]) {
  // console.log(args)
  const command = args[0]
  if (!command) return client.sendText(msg.from, 'Informe um comando para dar reload!')

  reloadCmd(client, command)

  client.reply(msg.from, `✅ Comando *${command}* regarregado!`, msg)
}

export const help = {
  name: "reload"
}
