import app from '@adonisjs/core/services/app'
import { OpenWorkApp } from '../src/open_work_app.js'
let OpenWork: OpenWorkApp
await app.booted(async () => {
  OpenWork = await app.container.make('easywechat.openWork')
})
export { OpenWork as default }
