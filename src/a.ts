import { create, Whatsapp} from 'sulla-hotfix';
import axios from 'axios'

const prefix: string = '/'

function start(client: Whatsapp) {
  client.onMessage(async message => {

    console.log(`${message.chat.name}> ${message.sender.shortName}: ${message.body}`)

    if (!message.body.startsWith(prefix)) return

    const command = String(message.body).replace(prefix, '')

    console.log(command)

    if (command === 'dollar') {
      const res = await axios('https://api.hgbrasil.com/finance')
      const dollar: number = res.data.results.currencies.USD.sell

      console.log(res.data.currencies)
      console.log(dollar)

      client.reply(message.from, `R$${dollar.toFixed(2)}`, message)
      // client.sendText(message.from, `R$${dollar}`)
    }
  });
}

create('session',
{
  headless: false
},
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36')
.then((client: Whatsapp) => start(client));
