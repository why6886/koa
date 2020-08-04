/*
 * @Author: why
 * @Date: 2020-06-13 17:59:52
 * @LastEditTime: 2020-06-18 10:58:49
 * @LastEditors: why
 * @Description: why
 * @FilePath: /个人练习/koa/src/utils/checkSuccess.js
 */ 
function checkSuccess(val){
  let obj = {
    code:'',
    data:'',
    mes:''
  }
  if(val) {
    obj = {
      code:200,
      data:val,
      mes:"success"
    }
  } else {
    obj = {
      code:500,
      data:{},
      mes:"error"
    }
  }
  return obj
}
export default  checkSuccess 