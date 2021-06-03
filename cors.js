var fs          = require("fs");
const {cors}    = require("./config.json");

module.exports = (request, response, next)=>{
    //var ip = request.headers['X-Forwarded-For'] || request.connection.remoteAddress;
    //console.log("[cors.js]: Authorization ",request.get("authorization"));
    //console.log("[cors.js]: ", request.ip, request.ips, ip );
    if(!request.header("Origin")) return next();
    else if(cors[request.header("Origin")]){
        response.header('Access-Control-Allow-Origin', request.header("Origin"));
        response.header('Access-Control-Allow-Methods', '*');
        response.header('Access-Control-Allow-Headers', '*');
        return next();
    }else return response.json({
        status:400,
        message:"Không có quyền truy cập!"
    });
}