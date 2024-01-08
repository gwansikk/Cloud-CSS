import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import terser from '@rollup/plugin-terser';
import path from 'path';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        entries: [
          { find: '@', replacement: path.resolve(__dirname, 'src') },
          { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
          { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
          { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
          { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
          { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
          { find: '@type', replacement: path.resolve(__dirname, 'src/types') },
          { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
        ],
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    external: ['react', 'react-dom', 'emotion'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/types.d.ts', format: 'esm' }],
    plugins: [
      alias({
        entries: [
          { find: '@', replacement: path.resolve(__dirname, 'src') },
          { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
          { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
          { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
          { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
          { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
          { find: '@type', replacement: path.resolve(__dirname, 'src/types') },
          { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
        ],
      }),
      dts.default(),
    ],
  },
];
