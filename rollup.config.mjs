
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from "@rollup/plugin-terser";
import path from 'path';
import os from "os";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  input: path.join(__dirname, 'client/index.jsx'),
  output: {
    dir: path.join(__dirname, 'public/dist'),
    format: 'es',
    chunkFileNames: 'r_[hash].js',
    entryFileNames: 'bundle.min.js',
    preserveModules: true,
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        './node_modules/rumious-babel-preset/index.js',
      ],
    }),
    terser({
      
      maxWorkers: {
        value: os.cpus().length || 1,
      }
    })
  ],
};
