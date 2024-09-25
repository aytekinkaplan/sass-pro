// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js", // Giriş dosyası
  output: [
    {
      file: "dist/bundle.cjs.js", // Çıkış dosyası (CommonJS formatı)
      format: "cjs",
      sourcemap: true, // Hata ayıklama için kaynak haritası
    },
    {
      file: "dist/bundle.esm.js", // Çıkış dosyası (ESM formatı)
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Node modüllerini çözmek için
    commonjs(), // CommonJS modüllerini ES6'ya dönüştürmek için
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }), // Babel dönüştürme
    terser(), // Kodun minimize edilmesi
  ],
};
