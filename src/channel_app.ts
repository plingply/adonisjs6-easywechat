import { Channel, ChannelConfig } from 'node-easywechat'
import type { ApplicationService } from '@adonisjs/core/types'
import RedisCacher from './redis_cache.js'
import logger from '@adonisjs/core/services/logger'
export class ChannelApp {
  declare client
  declare app
  constructor(application: ApplicationService) {
    const options = {
      ...application.config.get('easywechat.channel'),
    } as ChannelConfig
    const app = new Channel(options)
    app.setCache(new RedisCacher())
    const client = app.getClient()
    client.setLogger((type, req, code, res) => {
      if (res?.data?.errcode !== 0) {
        logger.error(
          'easychat channel: \n type = %s req = %o \n code = %d \nres = %o',
          type,
          req,
          code,
          res
        )
      } else {
        logger.info(
          'easychat channel: \n type = %s req = %o \n code = %d \nres = %o',
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
