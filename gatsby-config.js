const lessToJson = require('less-to-json');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: lessToJson('./src/styles/vars.less'),
        },
      },
    },
  ],
};
