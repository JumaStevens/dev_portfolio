import { makeSource } from '~/services/hotfix/utils/make-source'

export const Hotfix = class Hotfix {
  #source = null

  constructor({ token, projectId, documentTypes }) {
    this.#source = makeSource({
      accessToken: token,
      projectId,
      documentTypes
    })
  }

  content(documentType) {
    const def = this.#source.get(documentType)
    return {
      fetchData: def.fetchData
    }
  }
}
