export const LocalCache = class LocalCache {
  #cacheMap = null

  constructor() {
    this.#cacheMap = new Map()
  }

  get(key) {
    return this.#cacheMap.get(key)
  }

  set(key, value) {
    this.#cacheMap.set(key, value)
  }
}
