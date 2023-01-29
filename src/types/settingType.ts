export interface WebConfig {
  prefixCls: string | undefined;
  defaultRouter: string,
  colorMode: ColorModeType,
}

export type MenuConfig =  {
  width: string | number;
}
export interface CacheProps {
  cacheCipher: {key: string; iv: string},
  cacheTimeOut: number
}
export enum ColorModeType {
  light = 'light',
  dark = 'dark'
}
