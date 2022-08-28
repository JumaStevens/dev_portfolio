import { LogSnag } from 'logsnag'
import config from '../utils/config'

const logsnag = new LogSnag({
  token: config.LOGSNAG.apiKey,
  project: config.LOGSNAG.projectId
})

export const onContactUs = (description) => logsnag.publish({
  channel: 'contact-us',
  event: 'Support Message',
  description,
  icon: '🎗',
  notify: true
})
