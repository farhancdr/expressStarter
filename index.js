import Express from 'express'
const app = Express();
const port = 3000;  
app.get("/",(req, res)=>{
    res.send("Hello world")
})
app.listen(process.env.PORT || port,()=>console.log("Listening on port "+port))