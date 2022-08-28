import { IS_PROD } from './constants'

export default {
  LOGSNAG: {
    apiKey: 'e547b59ce2b34400987643de7f13043f',
    projectId: IS_PROD ? 'hotfix-cms' : 'hotfix-cms-dev'
  }
}
