/*
 * @Author: why
 * @Date: 2020-05-13 15:42:01
 * @LastEditTime: 2020-05-14 17:27:48
 * @LastEditors: why
 * @Description: why
 * @FilePath: /个人练习/koa/src/router/article/index.js
 */
import { article } from '../../dataBases/mysql'
import moment  from 'moment'
import isOk from '../../utils/checkSuccess'
export default {
  get_article:async function(ctx,next){
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
  },
  add_artircle:async function(ctx,next){
    let data = null
    try {
      console.log(ctx.request.body)
      data =  await article.create(ctx.request.body)
    } catch (error) {
      console.log(error)
    } 
    let info = isOk(data)
    ctx.body = info
  },
}