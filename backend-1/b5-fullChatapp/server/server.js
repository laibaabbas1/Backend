import express from 'express'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'hhtp'
const app = express();


const server = http.createserver(app);



const io =new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","PUT"],
    },
});
app.use(cors());
io.on("connection",(socket)=>{console.log(`User connected:${socket.id}`);
socket.on('join_room',(room)=>{
    socket.join(room);
    socket.to(room).emit('Recieve_message',{
        author:'system',
        message:   `A user has joined the room `,
        time: new Date().toLocaleTimeString(),
    });
});
socket.on('send__message',(data)=>{
    console.log("send_message data",data);
    socket.to(data.room).emit("receive_message",data);

    });
    socket.on('disconnect',()=>{
        console.log('user disconnected:',socket.id);
    });
});

server.listen(5555,()=>console.log("Server is running on port 5555"));