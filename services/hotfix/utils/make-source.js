import { isEmpty } from 'lodash'
import API from '~/services/hotfix/services/api'
import { LocalCache } from '~/services/hotfix/cache'

const localCache = new LocalCache()

const processData = ({ data, parser }) => {
  const docSnapshot = () => {
    return {
      ...data,
      data: () => parser(data.data),
      exists: () => !isEmpty(data)
    }
  }
  const querySnapshot = () => {
    const forEachData = data.map(
      (d) => ({ ...d, data: () => parser(d.data) })
    )
    return {
      forEach: (cb) => forEachData.forEach(cb),
      exists: () => forEachData.length > 0,
      docs: forEachData
    }
  }
  return Array.isArray(data)
    ? querySnapshot()
    : docSnapshot()
}

const fetchData = async ({ accessToken, projectId, path, fields }) => {
  const options = {
    accessToken,
    projectId,
    path,
    fields
  }
  const res = await API.cdnGetContent(options)
  const data = res.status === 200 && res.data.status === 'success'
    ? res.data.data
    : null
  return data
}

const processArgs = (args) => {
  const documentTypeDefs = args.documentTypes.map((arg) => {
    const documentType = arg.documentType()
    return {
      name: documentType.name,
      accessToken: args.accessToken,
      projectId: args.projectId,
      path: documentType.filePathPattern,
      parser: documentType.parser,
      fields: documentType.fields
    }
  })
  return {
    documentTypeDefs
  }
}

const onFetchData = async (def) => {
  // const cachedData = localCache.get(def.path)
  // if (cachedData) {
  //   return processData({
  //     data: cachedData,
  //     parser: def.parser
  //   })
  // }
  const fetchedData = await fetchData({
    accessToken: def.accessToken,
    projectId: def.projectId,
    path: def.path,
    fields: def.fields
  })
  // localCache.set(def.path, fetchedData)
  return processData({
    data: fetchedData,
    parser: def.parser
  })
}

export const makeSource = (args) => {
  const { documentTypeDefs } = processArgs(args)
  const documentTypeDefsMap = new Map(
    documentTypeDefs.map((def) => {
      return [
        def.name,
        {
          fetchData: async () => await onFetchData(def)
        }
      ]
    })
  )
  return documentTypeDefsMap
}
