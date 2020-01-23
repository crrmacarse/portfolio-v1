import { join, resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const entry = join(process.cwd(), '/src/index.tsx')

export const moduleResolver = {
    modules: [
      'node_modules',
      resolve(__dirname, '..', 'src'),
    ],
  extensions: [".ts", ".tsx", '.js'],
}

export const rules = [
  {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
          {
              loader: "ts-loader"
          }
      ]
  },
  {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
  {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader"
  },
  {
      test: /\.(png|jpg|jpeg|gif|svg|ico|pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    },
]

export const plugins = [
  new HtmlWebpackPlugin({
      template: join(process.cwd(), '/src/index.html'),
      inject: 'body',
  }),
  new CleanWebpackPlugin(),
]