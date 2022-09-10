import swc from "rollup-plugin-swc";
import pkJson from "./package.json";
import swcConfig from "../../.swcrc.json"
import typescript from '@rollup/plugin-typescript';

export default {
    input: './index.ts',
    output: {
      file: pkJson.module,
      format: 'esm'
    },
    plugins: [
      swc({
        ...swcConfig,
      }),
      typescript()
    ]
  };