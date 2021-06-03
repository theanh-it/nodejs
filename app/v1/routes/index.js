var route = require("express").Router();

route.get("", (request, response)=>{
    return response.json({
        status: 200,
        message: "welcome v1!"
    })
});
route.use("/category", require("./category"));

module.exports = route;