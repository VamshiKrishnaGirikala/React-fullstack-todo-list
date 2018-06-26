var express=require("express"),
    app=express(),
    cors=require("cors"),
    port=8080;
var bodyparser=require("body-parser");
var todoRoutes=require("./routes/todos");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/views"));
app.use(cors({
    origin:'http://localhost:3000',
optionsSuccessStatus:200}))

app.get('/',function(req,res){
    res.sendFile("index.html");
});
app.use('/api/todos',todoRoutes)




app.listen(port,function(){
    console.log("server running at "+ port);
})
