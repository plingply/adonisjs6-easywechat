import app from '@adonisjs/core/services/app'
import { ChannelApp } from '../src/channel_app.js'
let Channel: ChannelApp
await app.booted(async () => {
  Channel = await app.container.make('easywechat.channel')
})
export { Channel as default }
