/*
 * @Author: why
 * @Date: 2020-06-12 18:32:59
 * @LastEditTime: 2020-06-18 10:56:17
 * @LastEditors: why
 * @Description: why
 * @FilePath: /个人练习/koa/src/router/user/index.js
 */ 
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
export default {
  addUser:async function(ctx,next){
    console.log(ctx.request.body)
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
  }
}