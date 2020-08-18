/*
 * @Author: why
 * @Date: 2020-05-11 15:53:03
 * @LastEditTime: 2020-05-13 20:31:17
 * @LastEditors: why
 * @Description: why
 * @FilePath: /个人练习/koa/src/index.js
 */
require("@babel/register");
import Koa  from 'koa'
import body  from 'koa-body'
// import body  from 'koa-bodyparser'
import logger from 'koa-logger'
import cors from 'koa2-cors'
import router from './router'
const path = require('path');
const koaStatic = require('koa-static');
const jwtAuth = require("koa-jwt");
const serect = 'why';  //密钥，不能丢
// 实例化koa
const app = new Koa()
app.use(logger())
app.use(cors())
app.use(koaStatic(path.join(__dirname,'public'),{
  gzip: true,
	buffer: true,
	dynamic: true
}));
app.use(jwtAuth({
  secret: serect
}).unless({
   path: [/\/addUser/, /\/login/, /\/get_article/, /\/get_detail/, /\/getUser/, /\/get_all_article/]
}));
// app.use(body())
app.use(body({
  multipart:true,  //设置true表示支持文件
  formidable:{
      uploadDir: path.join(__dirname,'./public/upload'), //设置图片上传的目录
      keepExtensions: true, //图片上传后不改变扩展名
      maxFieldsSize: 2 * 1024 * 1024
  }
}))
app.use(router.routes()).use(router.allowedMethods())
// 监听端口并启动
app.listen(3300, () => {
  console.log(`Server running on http://localhost:3300`)
})
app.on('error', (error, ctx) => {
  // 项目启动错误
  ctx.body = error;
})
export default app