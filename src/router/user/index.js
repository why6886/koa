/*
 * @Author: why
 * @Date: 2020-05-13 15:42:01
 * @LastEditTime: 2020-05-14 17:27:48
 * @LastEditors: why
 * @Description: why
 * @FilePath: /个人练习/koa/src/router/article/index.js
 */
import { user } from '../../dataBases/mysql'
import moment  from 'moment'
import isOk from '../../utils/checkSuccess'
import token from '../../utils/token'
export default {
  addUser:async function(ctx,next){
    let creat_time ={
      creat_time:moment().format('YYYY-MM-DD HH:mm:ss'),
      subscribeList:'[]'
    } 
    let parmas = Object.assign(ctx.request.body,creat_time)
    let data = null 
    try {
      data =  await user.create(parmas)
    } catch (error) {
      console.log(error)
    } 
    let info = isOk(data)
    ctx.body = info
  },
  getUser:async function(ctx,next){
    let data = null 
    try {
      data =  await user.findAll({
        where: {
          id: ctx.request.body.user_id
        }
      })
    } catch (error) {
      console.log(error)
    }
    console.log( ctx.request.body.user_id, data)
    let info = isOk(data)
    ctx.body = info
  },
  login:async function(ctx,next){
    console.log(ctx.request.body)
    let data = null 
    try {
      data =  await user.findOne({
        where: { userName: ctx.request.body.userName}
      })
    } catch (error) {
      console.log(error)
    } 
    let info = isOk(data)
    console.log(info.code === 200,'info',token(info.data))
    if(info.code === 200 && data.password === ctx.request.body.password) {
      ctx.body = {
        code:200,
        data:{
          id:info.data.id,
          email:info.data.email,
          userName: info.data.userName,
          token:token(info.data)
        },
        mes:"success"
      }
    }
    else {
      ctx.body = {
        code: 500,
        mes:'密码错误'
      }
    }
    
  }
}