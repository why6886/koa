/*
 * @Author: why
 * @Date: 2020-05-13 11:12:23
 * @LastEditTime: 2020-06-12 18:39:53
 * @LastEditors: why
 * @Description: why
 * @FilePath: /个人练习/koa/src/router/index.js
 */
import Router from 'koa-router'
import article from './article'
import user from './user'
const router = new Router()

router.get('/',article.getArticle)
router.post('/addUser',user.addUser)


export default router

