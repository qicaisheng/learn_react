 module.exports = {
     entry: './src/index.js',
     resolve: {
         extensions: ['', '.js', '.jsx']
     },
     output: {
         path: './bin',
         filename: 'bundle.js'
     },
     module: {
         loaders: [
             {   test: /\.js|jsx$/,
                 exclude: /node_modules/,
                 loader: "babel-loader",
                 query:
                 {
                     presets:['react' ,'es2015']
                 }
             }
         ]
     }
 };
