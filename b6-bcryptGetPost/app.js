// import bcrypt from'bcrypt';
// const password = 'Password1';

// console.time('hash')//time taken by hash to generate 

// const hash = await bcrypt.hash(password,13)
// console.timeEnd('hash')

// console.log({
//     password,
//     hash
// })

// const isMatch=await bcrypt.compare('pass',hash)
// console.log(isMatch)   //it will show false bcz pass is not original password its Password1

// const isMatch = await bcrypt.compare('Password1',hash)
// console.log(isMatch)//it will show true bcz we write right password here



//Hashing password in node js and express using bcrypt (bcrypt get and post )

import bcrypt from 'bcrypt'
import express from 'express'

const app =express()
app.use(express.json())
const users =[

]

app.post ('/signup',async (req,res)=>{
    const {username,password,email} = req.body
    const hash = await bcrypt.hash(password,13)
    users.push({
        username,
        password:hash,
        email

    })
    console.log(users)
    res.send('okk')

})


app.post('/login',async (req,res) => {
    const{username,password,email}=req.body
    const user =users.find(u=> u.username === username)
    if (!user){
        res.send("wrong username")
        return
    }
    const isValid = await bcrypt.compare(password,user.password)
    if (!isValid){
        res.send("wrong password")
        return
    }
    if (!email){
        res.send("wrong email")
        return
    }
    //send a authhentication jwt
    res.send('ok')
})


app.listen(6060,()=>console.log('listening on port 6060'))

