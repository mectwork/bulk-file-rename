let fs = require("fs");
let path = require("path");
let glob = require("glob");

glob("./images/*.*", function (error, files) {
  let count = 0;
  files.forEach(function (file) {
    let dir = path.dirname(file);
    let filename = path.basename(file);
    fs.renameSync(file, dir + "/" + filename.toLowerCase());
    count++;
  });
  console.log(count + " files processed");
});
