/*
 * @Author: why
 * @Date: 2020-05-13 15:42:01
 * @LastEditTime: 2020-05-14 17:27:48
 * @LastEditors: why
 * @Description: why
 * @FilePath: /个人练习/koa/src/router/article/index.js
 */
import { article } from '../../dataBases/mysql'
export default {
  getArticle:async function(ctx,next){
    let data = await article.findAll({
      where:{
        id:15
      }
    })
    ctx.body = {
      code:200,
      data:data,
      meg:'success'
    }
  }
}