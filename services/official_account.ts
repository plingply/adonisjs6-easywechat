import app from '@adonisjs/core/services/app'
import { OfficialAccountApp } from '../src/official_account_app.js'
let OfficialAccount: OfficialAccountApp
await app.booted(async () => {
  OfficialAccount = await app.container.make('easywechat.officialAccount')
})
export { OfficialAccount as default }
