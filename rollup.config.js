import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'index.next.js',
  plugins: [
    resolve({
      jsnext: true
    })
  ],
  targets: [
    {
      dest: 'index.js',
      format: 'umd',
      moduleName: 'bianco'
    }
  ]
}