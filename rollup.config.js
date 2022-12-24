import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import clear from 'rollup-plugin-clear'
import scss from 'rollup-plugin-scss'

export default async function config () {
  return {
    input: 'src/import.js',
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      vue(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true
          },
          include: null
        }
      }),
      scss(),
      clear({
        targets: ['./dist']
      })
    ]
  }
}
