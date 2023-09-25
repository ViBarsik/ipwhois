export type AppConfig = {
  ipInfoSource: string;
  cacheTime: number;
  ipInfoCachePath: string;
};

export const appConfig: AppConfig = {
  ipInfoSource: 'http://ipwho.is',
  cacheTime: 60,
  ipInfoCachePath: './ipDataCache',
};
