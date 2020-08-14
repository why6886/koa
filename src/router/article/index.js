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
    const info = {
      page:Number(ctx.request.body.page),
      size:Number(ctx.request.body.size)
    }
    console.log(ctx.header, ctx.header.authentication)
    let data = await article.findAll({
      limit: info.size, // 每页多少条
      offset: info.size*(info.page-1)
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
  get_detail:async function(ctx,next){
    console.log(ctx.request.body.id)
    let data = null
    try {
      data = await article.findOne({
        where:{id:ctx.request.body.id}
      })
    } catch (error) {
      
    }
    let info = isOk(data)
    ctx.body = info
  },
}