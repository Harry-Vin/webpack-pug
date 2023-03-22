# webpack-pug

#### 介绍
使用webpack构建pug多页面项目框架

#### 软件架构
* [webpack](https://webpack.js.org)
    > 一个构建工具
* [pug](https://pugjs.org)
    > 一个模板引擎

## 使用说明

#### 1.下载本模板到本地

#### 2.安装依赖
```bash
$ yarn install
```
#### 3.开发
```bash
$ yarn run dev
```
#### 3.发布
```bash
$ yarn run build
```

## 备注
项目默认会读取 **src/pug** 目录及其子目录下的所有的pug模板并解析其依赖，如需更改目录请查看 **config/builder.config.js 文件**