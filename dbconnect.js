/*const express=require('express');
const mongoose=require('mongoose');
const app=express();
mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1:27017/testdb",{useNewUrlparser:true, useUnifiedTopology:true})
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));
 const userList=new mongoose.Schema({
    _id:Number,
     name:String,
    phone:Number,
   email:String
 })

const User=new mongoose.model("User",userList);
/*const user1=new User({
    _id:1,
    name:"Sai",
    phone:123456,
    email:"sai@gmail.com"
});
user1.save();
*/
/*const createUser = async () =>
{
    try{
        const user1=new User(
            {
                _id:1,
                name:"Sai",
                phone:123456,
                email:"sai@gmail.com",
                age:20
            });
            const result=await user1.save();
            console.log(result);
        }
        catch(err)
        {
            console.log(err);
        }
}
createUser();
app.listen(2000,()=>{
    console.log("Server started..")
})
*/
const express=require('express');
const mongoose=require('mongoose');
const app=express();
mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1:27017/testdb",{useNewUrlparser:true, useUnifiedTopology:true})
.then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));
 const userList=new mongoose.Schema({
    _id:Number,
     name:String,
    phone:Number,
   email:String
 })

 const User=new mongoose.model("User",userList);
/*const user1=new User({
     _id:1,
     name:"Sai",
    phone:123456,
     email:"sai@gmail.com"
 });
 user1.save();*/
const createUser=async(_id,name,phone,email)=>{
    try{
        const user1=new User({
            _id:_id,
            name:name,
            phone:phone,
            email:email
        });
        const result=await user1.save();
        //console.log(result);
          }catch(err){
            console.log(err);
          }
}
const createUsers=async()=>{
    try{
        const user2=new User({
            _id:4,
            name:"shilpa",
            phone:98745,
            email:"shilpa@gmail.com",
            
        });
        const user3=new User({
            _id:5,
            name:"shiva",
            phone:34745,
            email:"shiva@gmail.com",
        })
        const result=await User.insertMany([user2,user3]);
        console.log(result);
          }catch(err){
            console.log(err);
          }
}
//createUsers();

//createUser();
const readUsers=async()=>
{
    try{
        const result=await User.find();
        console.log(result);
        return result;
    }
    catch(err)
    {
        console.log(err);
    }
    }

//readUsers();
const updateUser=async(_id)=>
{
    try{
        const result=await User.updateOne({_id},{$set:{email:"sai123@gmail.com"}})
        console.log(result);

    }catch(err)
    {
        console.log(err);
    }
}
//updateUser(2)
const deleteUser=async(_id)=>
{
    try{
        const result=await User.deleteOne({_id});
        console.log(result);

    }
    catch(err){
        console.log(err);
    }
}
//deleteUser(1);
/*app.listen(2000,()=>{
    console.log("Server started..")
})*/

module.exports.readUsers=readUsers;
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;
module.exports.createUser = createUser;