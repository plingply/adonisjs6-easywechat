import cache from '@adonisjs/cache/services/main'
import { CacheInterface } from 'node-easywechat'

export default class RedisCacher extends CacheInterface {
  async get(id: any) {
    return await cache.get({
      key: id,
    })
  }

  async has(id: any) {
    return await cache.has({
      key: id,
    })
  }

  async set(id: any, data = null, lifeTime = 0) {
    const hourse = 60 * 60
    await cache.set({
      key: id,
      value: data,
      ttl: Number.parseInt(String(lifeTime / hourse)) + 'h',
    })
    return true
  }

  async delete(id: any) {
    await cache.delete({
      key: id,
    })
    return true
  }
}
