const express = require('express')
const path = require('path')
const app = express()


const members = [
    {
        id:1,
        name:'John',
        email:'john@gmail.com',
        status:'active'
    },
    {
        id:2,
        name:"jacy",
        email:'jacy@gmail.com',
        status:'active'
    },
    {
        id:3,
        name:'james',
        email:'james@gmail.com',
        status:'active'
    },
]

// gets all member
app.get('/api/members' , (req,res) => res.json(members))

// set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000
app.listen(PORT , ()=> console.log(`server started ${PORT}`))