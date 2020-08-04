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
import bodyparser  from 'koa-bodyparser'
import logger from 'koa-logger'
import cors from 'koa2-cors'
import router from './router'
// 实例化koa
const app = new Koa()
app.use(logger())
app.use(cors())
app.use(bodyparser())
app.use(router.routes()).use(router.allowedMethods())
// 监听端口并启动
app.listen(3300, () => {
  console.log(`Server running on http://localhost:3000`)
})
app.on('error', (error, ctx) => {
  // 项目启动错误
  ctx.body = error;
})
export default app