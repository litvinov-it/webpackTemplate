import { Configuration } from "webpack";
import { IOptions } from "./types/types";

export function buildResolvers(options: IOptions): Configuration['resolve'] {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
