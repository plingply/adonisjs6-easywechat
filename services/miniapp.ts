import app from '@adonisjs/core/services/app'
import { MiniAppApp } from '../src/mini_app_app.js'
let MiniApp: MiniAppApp
await app.booted(async () => {
  MiniApp = await app.container.make('easywechat.miniapp')
})
export { MiniApp as default }
