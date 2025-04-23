import { OpenWork, OpenWorkConfig } from 'node-easywechat'
import type { ApplicationService } from '@adonisjs/core/types'
import RedisCacher from './redis_cache.js'
import logger from '@adonisjs/core/services/logger'
export class OpenWorkApp {
  declare client
  declare app
  constructor(application: ApplicationService) {
    const options = {
      ...application.config.get('easywechat.openWork'),
    } as OpenWorkConfig
    const app = new OpenWork(options)
    app.setCache(new RedisCacher())
    const client = app.getClient()
    client.setLogger((type, req, code, res) => {
      if (type === 'after') {
        logger.info('easychat openWork: \n req = %o \n code = %d \nres = %o', req, code, res?.data)
      }
    })
    this.app = app
    this.client = client
  }
}
