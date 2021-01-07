///tailwindcss 的配置文档 可以了解配置文档的全部信息
// https://tailwindcss.com/docs/configuration

module.exports = {
  ///通过purge配置 会在生产中删除所有未使用的CSS
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



