const path = require('path');
const process = require('process')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const Dotenv = require('dotenv-webpack');
const Dotenv = require('dotenv-webpack');
// require('dotenv').config()


module.exports = (env) => {
  console.log(env)
  return {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        '@organisms': path.resolve(__dirname, 'src/components/organisms/'),
        '@assets': path.resolve(__dirname, "src/components/assets"),
        '@atoms': path.resolve(__dirname, 'src/components/atoms/'),
        '@molecules': path.resolve(__dirname, 'src/components/molecules/'),
        '@organisms': path.resolve(__dirname, 'src/components/organisms/'),
        '@utils': path.resolve(__dirname, 'src/components/utils/'),
        '@types': path.resolve(__dirname, 'src/components/types/'),
        '@media': path.resolve(__dirname, 'src/../assets/'),
        '@App': path.resolve(__dirname, 'src/')
      }

    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            transpileOnly: true,
          },
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.module\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: "[name]__[local]",
                }

              },
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin(),
      new Dotenv({
        path: './.env.development'
      }),
    ],
    devServer: {
      static: './dist',
      hot: true,
      port: 3000,
      historyApiFallback: true 
    },
  };
}
