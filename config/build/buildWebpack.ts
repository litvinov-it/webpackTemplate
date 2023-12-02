import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { IOptions } from "./types/types";

export function buildWebpack(options: IOptions): webpack.Configuration {
    const {isDev, paths} = options

    return {
        mode: isDev ? 'development' : 'production',

        performance: {
          hints: false,
          maxEntrypointSize: 512000,
          maxAssetSize: 512000
        },

        entry: paths.entry,

        output: {
          path: paths.output,
          filename: "[name].[contenthash].js",
          clean: true,
        },

        plugins: buildPlugins(options),
        
        module: {
          rules: buildLoaders(options),
        },

        resolve: buildResolvers(options),
        
        devServer: isDev ? buildDevServer(options) : undefined
      };
}