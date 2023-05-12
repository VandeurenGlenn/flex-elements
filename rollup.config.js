import typescript from "@rollup/plugin-typescript";
import { readdir}  from 'fs/promises'
import { join } from 'path'

const input = (await readdir('src')).map(path => {
  return join('./src', path)
})



export default [{
  input,
  output: [{
    format: 'es',
    dir: './exports'
  }],
  plugins: [
    typescript({compilerOptions: { declaration: true, declarationDir: 'exports/types' }})
  ]
}]