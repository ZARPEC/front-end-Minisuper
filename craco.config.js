// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Añade el html-loader a las reglas de Webpack
      webpackConfig.module.rules.push({
        test: /\.html$/, // Expresión regular para identificar archivos HTML
        use: [
          {
            loader: "html-loader", // Utiliza el loader de HTML
          },
        ],
      });

      // Devuelve la configuración extendida de Webpack
      return webpackConfig;
    },
  },
};
