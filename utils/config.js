// import { IS_PROD } from '~/utils/constants'

export default {
  HOTFIX: {
    PROD: {
      token: 'Y7tqEzZOg62tKLqbI7jq',
      projectId: 'FNmbApEVFH0WuWTiv4Jc'
    },
    DEV: {
      token: 'Y7tqEzZOg62tKLqbI7jq',
      projectId: 'FNmbApEVFH0WuWTiv4Jc'
    }
  },
  LOGSNAG: {
    apiBaseUrl: 'https://api.logsnag.com/v1',
    apiKey: process.env.LOGSNAG_API_KEY,
    projectId: 'portfolio'
  }
}
