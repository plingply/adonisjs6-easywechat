import { MiniApp, MiniAppConfig } from 'node-easywechat'
import type { ApplicationService } from '@adonisjs/core/types'
import RedisCacher from './redis_cache.js'
import logger from '@adonisjs/core/services/logger'
export class MiniAppApp {
  declare client
  declare app
  constructor(application: ApplicationService) {
    const options = {
      ...application.config.get('easywechat.miniapp'),
    } as MiniAppConfig
    const app = new MiniApp(options)
    app.setCache(new RedisCacher())
    const client = app.getClient()
    client.setLogger((type, req, code, res) => {
      if (type === 'after') {
        if (res?.data?.errcode !== 0) {
          logger.error('easychat miniapp: \n type = %s \n code = %d \nres = %o', type, code, res)
        }
      }
    })
    this.app = app
    this.client = client
  }
}
