import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { IOptions } from "./types/types";

export function buildDevServer(options: IOptions): DevServerConfiguration {
  return {
    port: options.port ?? 5000,
    open: true,
  };
}
