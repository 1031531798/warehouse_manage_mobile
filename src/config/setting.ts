import { WebConfig, CacheProps, ColorModeType } from '@/types/settingType';
const webSettings: WebConfig = {
  prefixCls: process.env.REACT_APP_PREFIXCLS,
  colorMode: ColorModeType.light,
  defaultRouter: '/home',
}
const cacheSettings: CacheProps = {
  cacheCipher: {
    key: '_11111000001111@',
    iv: '@11111000001111_',
  },
  cacheTimeOut: 60 * 60 * 24 * 7
}
export {
  webSettings,
  cacheSettings
}
