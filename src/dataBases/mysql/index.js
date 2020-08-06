/*
 * @Author: why
 * @Date: 2020-05-13 11:46:40
 * @LastEditTime: 2020-06-13 17:39:23
 * @LastEditors: why
 * @Description: why
 * @FilePath: /个人练习/koa/src/dataBases/mysql/index.js
 */
const { Sequelize } = require('sequelize')
import connfig from './config'
const mysql  = new Sequelize(connfig.DATABASE, connfig.USERNAME, connfig.PASSWORD, {
  dialect: 'mysql',
  host: connfig.HOST,
})
mysql
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err);
  });

  const article = mysql.define('article', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      title: Sequelize.STRING(80),
      describe: Sequelize.STRING(200),
      content: Sequelize.TEXT,
      creat_time: Sequelize.STRING(30),
    }, 
    {
      freezeTableName:true ,
      timestamps: false
    })
    const user = mysql.define('user', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      userName: Sequelize.STRING(45),
      email: Sequelize.STRING(45),
      password: Sequelize.STRING(45),
      subscribeList: Sequelize.STRING(300),
      creat_time: Sequelize.STRING(20),
      gender: Sequelize.STRING(10),
    }, 
    {
      freezeTableName:true ,
      timestamps: false
    })
  
module.exports = {
  article,
  user
}