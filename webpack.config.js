const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = () => { 
const env = dotenv.config().parsed
return {
    entry: {
      cart: "./assets/js/cart.js",
      store_stripe: './assets/js/store_stripe.js'
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "assets/js/dist")
    },
    mode: "development",
    plugins: [
      new webpack.DefinePlugin({'process.env.API_KEY': JSON.stringify(env.API_KEY)})
    ]
  }
}