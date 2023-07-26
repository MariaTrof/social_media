import webpack from "webpack";
import path from "path";
import { BuildWebpackConfig } from "./config/build/BuildWebpackConfig";
import { BuildEnv, BuildPath } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDev = mode === "development";
  const config: webpack.Configuration = BuildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
  return config;
};
