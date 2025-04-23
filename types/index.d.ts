import {
  ChannelConfig,
  MiniAppConfig,
  OfficialAccountConfig,
  OpenPlatformConfig,
  OpenWorkConfig,
  PayConfig,
  WorkConfig,
} from 'node-easywechat'

export declare interface EasychatConfig {
  work: WorkConfig
  officialAccount: OfficialAccountConfig
  miniapp: MiniAppConfig
  channel: ChannelConfig
  pay: PayConfig
  openPlatform: OpenPlatformConfig
  openWork: OpenWorkConfig
}

export declare function defineConfig(config: EasychatConfig): EasychatConfig
