let path = require('path');

let conf = {
  entry: './src/index.js',
  output: {
    // path: './dist/', - заменяем на абсолютный путь возвращаемый модулем path
    path: path.resolve(__dirname, '.dist'),
    filename: 'main.js',
    // publickPath: 'dist/'
  }
}
module.exports = conf; // можно записать вместо "let conf" >> "module.exports" сразу
