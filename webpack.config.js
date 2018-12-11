const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/*
path.join(参数1，参数2)

将参数1和参数2路径进行合并

*/

//入口 和出口文件的配置
const PATH = {
    app:path.join(__dirname,"./src/index.js"),
    build:path.join(__dirname,"./dist")
}


//webpack的配置
module.exports = {
    entry:{
        app:PATH.app
    },
    output:{
        filename:"[name].js",
        path:PATH.build
    },
    //处理模块   js  css img html
    module:{
        rules:[
            {
              test:/\.js$/, 
              use:{
                  loader:"babel-loader",
                  options:{
                      //遇到ES6的代码 用env   reatc代码  react
                      presets:["@babel/env","@babel/react"]
                  }
              }  
            },
            {
                test:/\.(css|scss)$/,
                /*从右至左  从下至上 */
                use:["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    //使用插件
    plugins:[
        new HtmlWebpackPlugin({
            //模板名称  需要手动创建
            template:"./index.html",
            //打包过后的文件名称
            filename:"index.html",
            date:new Date(),
        })
    ]
}


