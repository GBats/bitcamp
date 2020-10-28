'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser =require('body-parser')

var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.DB_URI);

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.listen(port, function () {
  console.log('Node.js listening ...');
});

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true})

let urlSchema = new mongoose.Schema({
  original:{type:String, required:true},
  short:{type:Number}
})

let Url = mongoose.model('Url',urlSchema)

let resObj={};
app.post('/api/shorturl/new',(req,res)=>{
  let inputUrl = req.body.url;
  
  let urlRegex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi)
  if(!inputUrl.match(urlRegex)){
    res.json({error:"Invalid URL"})
    return
  }
  
  resObj['origina_url']=req.body.url
  
  let inputShort=1;
  
  Url.findOne({})
  .sort({short:'desc'})
  .exec((error,result)=>{
    if(!error && result != undefined){
      inputShort = result.short+1
    }
    if(!error){
      Url.findOneAndUpdate(
        {original:inputUrl},
        {original:inputUrl,short:inputShort},
        {new:true,upsert:true},
        (error,savedUrl)=>{
          if(!error){
            resObj['short_url']=savedUrl.short
            res.json(resObj)
          }
        }
      )
    }
  })
  
})


app.get('/api/shorturl/:input', (req,res)=>{
  let input = req.params.input;
  Url.findOne({
    short:input
  },(error,result) =>{
    if(!error && result != undefined){
      res.redirect(result.original)
    }else {
      res.json("URL not found")
    }
  })
})