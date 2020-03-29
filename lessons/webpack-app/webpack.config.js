const path = require("path"); // добавляем стандартную функцию вебпака превращающую локальные пути до файлов в полные
const HTMLPlugin = require("html-webpack-plugin"); // подключаем html-webpack-plugin который нужен для сборки из js в html
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.[chunkhash].js", //название итового файла + хэш (при каждой сборке будет создаваться новый файл с уникальным хэшем)
    path: path.resolve(__dirname, "public")
    // вызываем метод у функции path и добавляем название итоговой папки
  },
  devServer: {
    port: 3000 // назначаем порт для сервера на котором будет запускаться приложение
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
};
