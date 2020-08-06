const path = require('path')
const fs = require('fs')
const formidable = require('formidable')
import moment from 'moment'
export default {
  upload: async function (ctx, next) {
    // let result = ctx.request.files.file
    console.log(ctx.request.files)
    const data = ctx.request.files.file;
    const imgPathName = data.path.split('\\').pop()
    ctx.body = {
      url: `http://localhost:3300/upload/${imgPathName}`,
      creat_time:moment().format('YYYY-MM-DD HH:mm:ss')
    }
  },
}

// router.post('/upload', (ctx, next) => {
//   let form = new formidable.IncomingForm();
//   form.hash = "md5";
//   form.multiples = false; //默认只能上传一个文件,更多form的配置参考node-formidable
//   form.maxFileSize = 2 * 1024 * 1024; //设置文件最大不超过2M
//   function formImage() {
//     return new Promise((resolve, reject) => {
//       form.parse(ctx.req, async function (err, fields, files) { //注意：跟express有差异，这里要传入ctx.req
//         let file = files[XXX]; //XXX是form-data的key , 一般为file，也可以自定义一个，可以用来校验
//         if (file) {
//           let flag = await Util.checkFile(file.type); //校验文件的大小和类型，我这里限制的是图片文件类型，校验文件的函数这里就不写了，可以根据实际的业务场景来写
//           if (flag) { //文件校验通过
//             const oldpath = files[memberId].path; //系统缓存上传的文件地址
//             const dir = path.join(__dirname, `../static/upload/${XXX}`);
//             const fileFormat = file.name.split('.');
//             file.name = `${file.hash}_${Date.now()}.${fileFormat[fileFormat.length - 1]}`; //通过file.hash加时间戳生成文件名
//             const newpath = `static/upload/${XXX}/${file.name}`;
//             if (!fs.existsSync(dir)) { //先判断文件夹名是否存在，不存在则生成根据XXX生成对应的文件夹
//               fs.mkdirSync(dir);
//             }
//             //如果是非WINDOWS系统，可以用fs.renameSync()来实现，这里为了兼容用了node的pipe来实现
//             let readStream = fs.createReadStream(oldpath);
//             let writeStream = fs.createWriteStream(newpath);
//             readStream.pipe(writeStream); //这里文件已经上传成功
//             resolve(ctx.origin + "/" + newpath) //返回完整的文件地址 http://localhost:3000/static/upload/XXX/123456.jpg
//           } else { //文件校验失败
//             reject(null)
//           }
//         } else {
//           reject(null)
//         }
//       })
//     })
//   }
// })