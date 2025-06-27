import { OpenPlatform, OpenPlatformConfig } from 'node-easywechat'
import type { ApplicationService } from '@adonisjs/core/types'
import RedisCacher from './redis_cache.js'
import logger from '@adonisjs/core/services/logger'
export class OpenPlatformApp {
  declare client
  declare app
  constructor(application: ApplicationService) {
    const options = {
      ...application.config.get('easywechat.openPlatform'),
    } as OpenPlatformConfig
    const app = new OpenPlatform(options)
    app.setCache(new RedisCacher())
    const client = app.getClient()
    client.setLogger((type, req, code, res) => {
      if (res?.data?.errcode !== 0) {
        logger.error(
          'easychat openPlatform: \n type = %s req = %o \n code = %d \nres = %o',
          type,
          req,
          code,
          res
        )
      } else {
        logger.info(
          'easychat openPlatform: \n type = %s req = %o \n code = %d \nres = %o',
          type,
          req,
          code,
          res?.data
        )
      }
    })
    this.app = app
    this.client = client
  }
}
