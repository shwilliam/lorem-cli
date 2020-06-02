import {Command} from '@oclif/command'
import {write as copyToClipboard} from 'clipboardy'
import {joinWithNewline} from './utils'
import {lorem} from './lorem'

class LoremCli extends Command {
  static description = "generate and copy 'lorem ipsum' placeholder text"

  static args = [
    {
      name: 'paragraphs',
      required: false,
      description: 'number of paragraphs (1-150)',
      default: 1,
    },
  ]

  async run() {
    const {args} = this.parse(LoremCli)
    const {paragraphs} = args

    if (paragraphs > 150) this.error(new Error('that seems excessive'))

    const targetParagraphs = lorem.slice(0, paragraphs)
    const textStr = joinWithNewline(targetParagraphs)

    this.log(textStr)

    try {
      await copyToClipboard(textStr)
      this.log('\x1b[32m', '(copied to clipboard)')
    } catch (error) {
      this.warn('(unable to access clipboard)')
    }

    this.exit()
  }
}

export = LoremCli
