const fs = require("fs")





fs.mkdir('aa', { recursive: true }, (err) => {
  if (err) throw err;

  // 默认情况下将创建或覆盖目标文件。
  fs.copyFile(`01.txt`, "aa/02.txt", (err) => {
    if (err) throw err;
    console.log('源文件已拷贝到目标文件');
  });
});



      // fs.rename(VideoOldName, VideoNewName, (err) => {
      //   if(err){
      //     console.log(`${VideoOldName}重命名失败: `, err)
      //   }
      // });    