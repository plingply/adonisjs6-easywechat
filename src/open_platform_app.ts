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
      if (type === 'before') {
        logger.info(
          'easychat open_platform: \n type = %s code = %d \n req = %o \n ',
          type,
          code,
          req
        )
      }

      if (type === 'after') {
        if (res?.data?.errcode !== 0) {
          logger.error(
            'easychat open_platform: \n type = %s \n code = %d \nres = %o',
            type,
            code,
            res
          )
        } else {
          logger.info(
            'easychat open_platform: \n type = %s \n code = %d \nres = %o',
            type,
            code,
            res?.data
          )
        }
      }
    })
    this.app = app
    this.client = client
  }
}
