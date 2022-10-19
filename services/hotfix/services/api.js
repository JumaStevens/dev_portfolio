import axios from 'axios'
import { API_BASE_URL } from '~/utils/constants'

const client = {
  public: axios.create({
    baseURL: API_BASE_URL,
  })
}

export default class API {
  static cdnGetContent = async (options) => {
    return await client.public({
      method: 'get',
      url: `/beta/cdn/${options.projectId}`,
      params: {
        ...options
      }
    })
  }
}
