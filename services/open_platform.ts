import app from '@adonisjs/core/services/app'
import { OpenPlatformApp } from '../src/open_platform_app.js'
let OpenPlatform: OpenPlatformApp
await app.booted(async () => {
  OpenPlatform = await app.container.make('easywechat.openPlatform')
})
export { OpenPlatform as default }
