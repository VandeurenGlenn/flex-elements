import autoExports from "rollup-plugin-auto-exports";
import typescript from "@rollup/plugin-typescript";
import { glob } from "fs/promises";

const input = await Array.fromAsync(glob("src/**/*.ts"));

console.log("Input files:", input);
export default {
  input,
  output: {
    dir: "exports",
    format: "esm",
  },
  plugins: [typescript(), autoExports()],
};
