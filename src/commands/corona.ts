import { Whatsapp, Message } from 'sulla-hotfix'
import axios from 'axios'

export async function run(client: Whatsapp, msg: Message, args: string[]) {
  const code = args[0]

  if (code) {
    if (code.length !== 2) return client.sendText(msg.from, 'O codigo deve ter 2 digitos')

    const response = await axios(`https://thevirustracker.com/free-api?countryTotal=${code}`)
    const data = response.data.countrydata[0]

    const arrayInfo = [
      { key: "Total de Casos", info: data.total_cases },
      { key: "Casos Ativos", info: data.total_active_cases },
      { key: "Casos de Hoje", info: data.total_new_cases_today },
      { key: "Casos Serios", info: data.total_serious_cases },
      { key: "Recuperações", info: data.total_recovered },
      { key: "Total de Mortes", info: data.total_deaths },
      { key: "Mortes hoje", info: data.total_new_deaths_today },
    ]

    let textInfo: string = `👾 *Status Corona*\n[${data.info.title}]\n\n`

    arrayInfo.map(data => {
      textInfo += `${data.key}: ${data.info}\n`
    })

    client.sendText(msg.from, textInfo)
  } else {
    const response = await axios('https://thevirustracker.com/free-api?global=stats')
    const data = response.data.results[0]

    const arrayInfo = [
      { key: "Total de Casos", info: data.total_cases },
      { key: "Casos Ativos", info: data.total_active_cases },
      { key: "Casos de Hoje", info: data.total_new_cases_today },
      { key: "Casos Serios", info: data.total_serious_cases },
      { key: "Recuperações", info: data.total_recovered },
      { key: "Total de Mortes", info: data.total_deaths },
      { key: "Mortes hoje", info: data.total_new_deaths_today },
    ]

    let textInfo: string = '👾 *Status Corona*\n\n'

    arrayInfo.map(data => {
      textInfo += `${data.key}: ${data.info}\n`
    })

    client.sendText(msg.from, textInfo)
  }
}

export const help = {
  name: "corona"
}
