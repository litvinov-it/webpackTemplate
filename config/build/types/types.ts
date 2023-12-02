interface IPaths {
  html: string;
  entry: string;
  output: string;
}

export type IMode = 'development' | 'production';

export interface IOptions {
  port: number;
  isDev: boolean
  isProd: boolean
  paths: IPaths;
}
