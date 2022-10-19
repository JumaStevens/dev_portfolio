import { Hotfix } from '~/services/hotfix/client.js'
import CONFIG from '~/utils/config'
import { IS_PROD } from '~/utils/constants'
import { markdownParser, jsonParser } from '~/services/hotfix'

const config = IS_PROD ? CONFIG.HOTFIX.PROD : CONFIG.HOTFIX.DEV

export const hotfix = new Hotfix({
  accessToken: config.token,
  projectId: config.projectId
})

export const parseMarkdown = markdownParser

export const parseJSON = jsonParser
