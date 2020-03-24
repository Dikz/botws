import { Whatsapp } from 'sulla-hotfix'

class Bot extends Whatsapp {
  commands: Map<any, any>
  constructor(page) {
    super(page)
    this.commands = new Map()
  }
}

export default Bot
