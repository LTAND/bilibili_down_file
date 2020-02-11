const fs = require("fs")
const path = require("path");

// // 方法一
// const str1 = fs.readFileSync("74592164.info",'utf-8').toString();
// console.log(JSON.parse(str1));

// 方法二
// let str2 = ""
// fs.readFile("./74592164/74592164.dvi", 'utf-8', function (data, err) {
//   if (err) { console.log(err) }
//   console.log(JSON.parse(data))
// })



function doRun(){
  fs.readdir(pathName, "utf-8", function (err, files) {
    let VideoDdirs = files.filter(d => { return d.search(/74592164.dvi|cover.jpg|desktop.ini/) })

    fs.mkdir(`${pathName}_2`, { recursive: true }, (err) => {
      for (let i = 0; i < VideoDdirs.length; i++) {

        let VideoInfoPath = `${pathName}/${VideoDdirs[i]}/${pathName}.info` // 74592164/3/74592164.info
        let VideoTitleName = (JSON.parse(fs.readFileSync(VideoInfoPath, 'utf-8').toString())).PartName // 02.项目概述-电商后台管理系统的功能划分

        let VideoOldName = `${pathName}/${VideoDdirs[i]}/${pathName}_${i + 1}_0.flv`        // 74592164/3/74592164_2_0.flv
        let VideoNewName = `${pathName}_2/${VideoTitleName}_${i + 1}_0.mp4` // 74592164/3/02.项目概述-电商后台管理系统的功能划分.flv

        // 默认情况下将创建或覆盖目标文件。
        fs.copyFile(VideoOldName, VideoNewName, (err) => {
          if (err) {
            console.log(VideoOldName + '拷贝失败', err);
          }
        });
      }
    });

    console.log(`重命名完成`);
  })
}

let pathName = "74592164";

doRun(pathName)

