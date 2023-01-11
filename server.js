const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbconnect = require('./dbconnect');

const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
let employees=[
    {
        id:1,name:"Afroz",dept:"CSE",address:"xyz"
    },
    {
        id:2,name:"Nagesh",dept:"IT",address:"xyz123"
    },
    {
        id:3,name:"Sahit",dept:"CSE",address:"abc"
    }
]

app.get('/readUser', async (req, res) => {
    try {
    let result = await dbconnect.readUsers();
    res.json(result);
    } catch(err){ }
})
app.post('/addUser',async(req,res)=>{
    try {
    let result = await dbconnect.createUser(req.body._id,req.body.name,req.body.phone,req.body.email);
    res.json(result);
    } catch(err){ }
})
app.listen(3000, () => { console.log("Server Started...")
})