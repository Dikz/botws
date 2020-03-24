import { Message } from 'sulla-hotfix'
import Bot from '../base/Bot'
import axios from 'axios'

export async function run(client: Bot, msg: Message, args: string[]) {
  const user = args[0]
  if (!user) return client.sendText(msg.from, 'Você precisa informar um usuario!')

  const response = await axios(`https://api.github.com/users/${user}`)
  console.log(response.data)
}

export const help = {
  "name": "github"
}
