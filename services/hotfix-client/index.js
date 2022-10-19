import { Hotfix } from '~/services/hotfix'
import {
  Docs,
  IndexHero,
  IndexWorkflowCode1,
  IndexWorkflowCode2,
  IndexWorkflowCode3
} from '~/services/hotfix-client/documentTypes'
import CONFIG from '~/utils/config'
import { IS_PROD } from '~/utils/constants'

const config = IS_PROD ? CONFIG.HOTFIX.PROD : CONFIG.HOTFIX.DEV

const hotfix = new Hotfix({
  token: config.token,
  projectId: config.projectId,
  documentTypes: [
    Docs,
    IndexHero,
    IndexWorkflowCode1,
    IndexWorkflowCode2,
    IndexWorkflowCode3
  ]
})

export default hotfix
