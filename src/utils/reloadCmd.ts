import Bot from '../base/Bot'
import path from 'path'


export default (bot: Bot, command: string) => {
  delete require.cache[require.resolve(path.resolve(__dirname, '..', 'commands', `${command}`))]

  let props = require(path.resolve(__dirname, '..', 'commands', `${command}`))
  console.log(`Comando: ${command} regarregado!`)
  bot.commands.set(command, props)
}
