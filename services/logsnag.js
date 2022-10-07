import config from '~/utils/config'
import axios from 'axios'

const {
  apiBaseUrl,
  apiKey,
  projectId
} = config.LOGSNAG

const client = axios.create({
  baseURL: apiBaseUrl
})

client.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${apiKey}`
  return config
})

export const onContact = async (description) => await client({
  method: 'post',
  url: '/log',
  data: {
    project: projectId,
    channel: 'contact',
    event: 'Contact Message',
    description,
    icon: '💰',
    notify: true
  }
})
