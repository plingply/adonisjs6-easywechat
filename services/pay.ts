import app from '@adonisjs/core/services/app'
import { PayApp } from '../src/pay_app.js'
let Pay: PayApp
await app.booted(async () => {
  Pay = await app.container.make('easywechat.pay')
})
export { Pay as default }
