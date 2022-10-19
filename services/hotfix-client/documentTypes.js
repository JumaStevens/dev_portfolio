import { defineDocumentType, markdownParser, jsonParser } from '~/services/hotfix'

export const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: 'beta/docs.md',
  fields: {
    title: {
      type: 'string'
    }
  },
  parser: markdownParser
}))

export const IndexHero = defineDocumentType(() => ({
  name: 'IndexHero',
  filePathPattern: 'beta/index-hero.json',
  fields: {
    title: {
      type: 'string'
    }
  },
  parser: jsonParser
}))

export const IndexWorkflowCode1 = defineDocumentType(() => ({
  name: 'IndexWorkflowCode1',
  filePathPattern: 'beta/index/workflow-code-1.md',
  parser: markdownParser
}))

export const IndexWorkflowCode2 = defineDocumentType(() => ({
  name: 'IndexWorkflowCode2',
  filePathPattern: 'beta/index/workflow-code-2.md',
  parser: markdownParser
}))

export const IndexWorkflowCode3 = defineDocumentType(() => ({
  name: 'IndexWorkflowCode3',
  filePathPattern: 'beta/index/workflow-code-3.md',
  parser: markdownParser
}))
