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
import upload from './upload'
const router = new Router()
router.post('/get_article',article.get_article)
router.post('/add_artircle',article.add_artircle)
router.post('/addUser',user.addUser)
router.post('/login',user.login)
router.post('/get_detail',article.get_detail)
router.post('/upload',upload.upload)


export default router

