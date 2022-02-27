const express=require("express");
const port=8000;
const app = express();
const path=require('path');

const bp=require('body-parser');
const req = require("express/lib/request");

app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('assets'));
app.set('view engine', 'ejs');

 var createList=
     [
         {name:"rohan",
          phone:"32432424"},
          {name:"rohan",
          phone:"32432424"},
          {name:"rohan",
          phone:"32432424"}
    ]

app.get('/',function(req ,res){
    console.log(req.body);
    return res.render('home',{title:"mycontactList",contact_list:createList});
})
app.get('/practice',function(req ,res){
   
    return res.render('practice',{title:"my page"});
})
app.get('/delete-contact/', function(req,res){
    console.log(req.query.phone);
    let phonenum=req.query.phone;
   // return res.render('hone');
   let contactIndex=createList.findIndex(contact=>contact.phone==phonenum);
   if(contactIndex!=-1){
       createList.splice(contactIndex,1);
   }
   return res.redirect('back');
    
}) 

app.post('/create-contact',function(req ,res){
    createList.push({
        name:req.body.name,
        phone:req.body.phone
    })
    return res.redirect('/');
})


app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("my dear friend server is up at the port",port);
})
 