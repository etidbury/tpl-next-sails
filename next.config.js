// next.config.js
//const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const { EnvironmentPlugin } = require("webpack");
const path = require("path");
const glob = require("glob");
const isProd = process.env.NODE_ENV === "production";
const withProgressBar = require('next-progressbar');

module.exports = withProgressBar({
  distDir: ".next",
  //,assetPrefix: isProd ? 'https://cdn.mydomain.com' : ''

  webpack: (config, { dev }) => {
    const prod = !dev;

    process.chdir(__dirname);
    require("dotenv").config();
    //config.plugins.push(new IgnorePlugin(/^\.\/locale$/, /moment$/));

    /* if (dev) {
             config.module.rules.push({
                 test: /\.(jsx?|gql|graphql)$/,
                 loader: 'eslint-loader',
                 exclude: ['/node_modules/', '/.next/', '/helper_scripts/'],
                 enforce: 'pre'
             });
         }*/

    config.plugins.push(new EnvironmentPlugin(["NODE_ENV", "API_BASE_URL"]));



    
    /*if (process.env.ANALYZE_BUILD) {
            config.plugins.push(
                new BundleAnalyzerPlugin({
                    analyzerMode: 'server',
                    analyzerPort: 8888,
                    openAnalyzer: true
                })
            );
        }*/

  

   //config.resolve.alias = {
    //  react: "preact-compat/dist/preact-compat",
    //  "react-dom": "preact-compat/dist/preact-compat"
    //};


    config.module.rules.push(
       {
                 test: /\.less$/,
                 use: ['babel-loader?compact=false', 'raw-loader', 'postcss-loader',
                     { loader: 'less-loader',
                         options: {
                             includePaths: ['styles', 'node_modules']
                                 .map((d) => path.join(__dirname, d))
                                 .map((g) => glob.sync(g))
                                 .reduce((a, c) => a.concat(c), [])
                                 ,javascriptEnabled: true 
                         }
                     }
                 ]
             },
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["styles","scss", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );

    config.devtool = "source-map";

    return config;
  }
});
