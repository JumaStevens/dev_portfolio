import API from '~/services/hotfix/services/api'

const fetchData = async ({ accessToken, projectId, path }) => {
  const options = {
    accessToken,
    projectId,
    path
  }
  const res = await API.cdnGetContent(options)
  const data = res.status === 200 && res.data.status === 'success'
    ? res.data.data
    : null
  return data
}

export const Hotfix = class Hotfix {
  #accessToken = null
  #projectId = null

  constructor({ accessToken, projectId }) {
    this.#accessToken = accessToken
    this.#projectId = projectId
  }

  async fetchData(path) {
    return await fetchData({
      accessToken: this.#accessToken,
      projectId: this.#projectId,
      path
    })
  }
}
