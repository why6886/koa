const jwt = require('jsonwebtoken');
const serect = 'why';  //密钥，不能丢
module.exports = (userinfo) => { //创建token并导出
  const token = jwt.sign({
    user: userinfo.userName,
    id: userinfo.id
  }, serect, {expiresIn: '1h'});
  return token;
};