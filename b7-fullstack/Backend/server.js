import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log("play with server ")
    res.send("Server is runing")
})
//jokes list

const jokes = [
    {
        id:1,
        title:"Why don’t scientists" ,
        content:"make good friends?"
    },
    {
        id:2,
        title:"its ok" ,
        content:"no its not ok?"
    },
    {
        id:3,
        title:"Why don’t Doctor" ,
        content:"make good Friends in this world ?"
    },
]
app.get("/api/jokes",(req,res)=>{ 
    res.json(jokes);
    console.log(jokes)
    
})

const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`)
})