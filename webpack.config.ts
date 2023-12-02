import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { IMode, IOptions } from "./config/build/types/types";
import path from "path";


interface IEnv {
  mode: IMode
  port: number
}

export default (env: IEnv) => {

  const options: IOptions = {
    port: env.port,
    isDev: env.mode === 'development',
    isProd: env.mode === 'production',
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html")
    }
  }

  const config: webpack.Configuration = buildWebpack(options);

  return config;
};
