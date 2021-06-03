var sharp       = require("sharp");
module.exports  = {
    image: async (data,{width,path})=>{
        await sharp(data).metadata().then(info=>{
            if(info.width > width) return sharp(data).resize({ width: 800 }).jpeg().toFile(path);
            else sharp(data).resize().jpeg().toFile(path);
        });
        return true;
    }
}