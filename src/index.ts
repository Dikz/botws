import * as dotenv from 'dotenv'
dotenv.config()
import { create } from 'sulla-hotfix'
import Bot from './base/Bot'

import loadCmds from './utils/loadCmds'
// import config from '../config.json'
const prefix = process.env.PREFIX

async function start(client: Bot) {
  client.commands = new Map()
  loadCmds(client)

  client.onMessage(message => {
    if (!message.body.startsWith(prefix)) return
    let content = message.body.split(' ')
    let args = content.slice(1)
    const command = content[0].toLowerCase()

    let commandfile = client.commands.get(command.slice(prefix.length))

    if (commandfile) commandfile.run(client, message, args)
  })

  const battery = await client.getBatteryLevel()
  console.log(battery)
}

create('session', {
  headless: Boolean(process.env.HEADLESS) ? Boolean(process.env.HEADLESS) : false
}, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36')
.then((client: Bot) => {
  start(client)
})
