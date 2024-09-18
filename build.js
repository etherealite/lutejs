import * as esbuild from 'esbuild';
import * as glob from "glob"



const options = {
  entryPoints: glob.sync('src/entrypoints/*.js'),
  format: 'esm',
  bundle: true,
  platform: 'browser',
  target: 'esnext',
  minify: false,
  sourcemap: 'linked',
  outdir: `dist/`,
  external: ['jquery'],
};

console.log(options)



const build = async () => await esbuild.build(options);

await build();