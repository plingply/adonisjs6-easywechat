import type { ApplicationService } from '@adonisjs/core/types'
import { WorkApp } from '../src/work_app.js'
import { OfficialAccountApp } from '../src/official_account_app.js'
import { MiniAppApp } from '../src/mini_app_app.js'
import { PayApp } from '../src/pay_app.js'
import { OpenPlatformApp } from '../src/open_platform_app.js'
import { OpenWorkApp } from '../src/open_work_app.js'
import { ChannelApp } from '../src/channel_app.js'

export default class EasywechatProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    // 企业微信
    this.app.container.singleton('easywechat.work', () => new WorkApp(this.app))
    // 公众号
    this.app.container.singleton(
      'easywechat.officialAccount',
      () => new OfficialAccountApp(this.app)
    )
    // 小程序
    this.app.container.singleton('easywechat.miniapp', () => new MiniAppApp(this.app))
    // 微信支付
    this.app.container.singleton('easywechat.pay', () => new PayApp(this.app))
    // 开放平台
    this.app.container.singleton('easywechat.openPlatform', () => new OpenPlatformApp(this.app))
    // 企业微信开放平台
    this.app.container.singleton('easywechat.openWork', () => new OpenWorkApp(this.app))
    // 视频号
    this.app.container.singleton('easywechat.channel', () => new ChannelApp(this.app))
  }

  /**
   * The container bindings have booted
   */
  async boot() {}

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}

declare module '@adonisjs/core/types' {
  interface ContainerBindings {
    'easywechat.work': WorkApp
    'easywechat.officialAccount': OfficialAccountApp
    'easywechat.miniapp': MiniAppApp
    'easywechat.pay': PayApp
    'easywechat.openPlatform': OpenPlatformApp
    'easywechat.openWork': OpenWorkApp
    'easywechat.channel': ChannelApp
  }
}
