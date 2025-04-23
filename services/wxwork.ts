import app from '@adonisjs/core/services/app'
import { WorkApp } from '../src/work_app.js'
let WxWork: WorkApp
await app.booted(async () => {
  WxWork = await app.container.make('easywechat.work')
})
export { WxWork as default }
