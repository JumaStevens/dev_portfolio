import MarkdownIt from 'markdown-it'
import highlightjs from 'markdown-it-highlightjs'
import 'highlight.js/styles/paraiso-dark.css'

const md = new MarkdownIt().use(highlightjs)

export const markdownParser = (data) => {
  return md.render(data)
}
