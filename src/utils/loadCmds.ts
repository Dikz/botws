import Bot from '../base/Bot'
import fs from 'fs'
import path from 'path'

export default (bot: Bot) => {
  fs.readdir(path.resolve(__dirname, '..', 'commands'), (err, files) => {
    if (err) console.log(err)

    let cmdFiles = files.filter(f => f.split('.').pop() === 'js')
    if (cmdFiles.length <= 0) {
      console.log('🔴 Comandos não encontrados.')
      return
    }

    cmdFiles.forEach((file, i) => {
      let props = require(path.resolve(__dirname, '..', 'commands', `${file}`))
      console.log(`📦 ${file} carregado!`)
      bot.commands.set(props.help.name, props)
    })

    console.log(`📦 Total de ${cmdFiles.length} comandos carregados com sucesso!`)
  })
}
