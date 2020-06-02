import {Command} from '@oclif/command'
import {lorem} from './lorem'

class LoremCli extends Command {
  static description = 'generate placeholder text'

  static args = [
    {
      name: 'paragraphs',
      required: false,
      description: 'number of paragraphs (150 max)',
      default: 1,
    },
  ]

  async run() {
    const {args} = this.parse(LoremCli)

    if (args.paragraphs > 150) {
      console.log('that seems excessive')
    } else {
      const targetParagraphs = lorem.slice(0, args.paragraphs)
      const textStr = targetParagraphs.join(`
`)
      console.log(textStr)
    }
  }
}

export = LoremCli
