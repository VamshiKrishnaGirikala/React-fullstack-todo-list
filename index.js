var express=require("express"),
    app=express(),
    port=process.env.PORT||3000;
var bodyparser=require("body-parser");
var todoRoutes=require("./routes/todos");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/views"));


app.get('/',function(req,res){
    res.sendFile("index.html");
});
app.use('/api/todos',todoRoutes)




app.listen(port,function(){
    console.log("server running at 3000");
})
