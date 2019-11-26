var express = require("express");

var productRouter = express();

productRouter.get("/" ,(request,response)=>{
    response.send("Inside product.js");
})

module.exports = productRouter;