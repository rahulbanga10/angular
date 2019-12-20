const express= require('express');
const router= express.Router();

const mongoose=require('mongoose');
const Video=require('../models/videos');


const db="mongodb://localhost:27017/VideoPlayer";
let tableA,schemaA;
mongoose.Promise=global.Promise;




const db1=mongoose.connect(db,function(err,db1){
  if(err){console.error("Error!"+err);}else{console.log("Successful db connection");
   }
});

var dbe = mongoose.connection;

const Schema= mongoose.Schema;

 const tableASchema= new Schema(
  { key:String,
    col1:String,
    col2:String,
    col3:String,
    col4:String,
    col5:String,
    col6:String,
    col7:String,
    col8:String,
    col9:String
},
{ versionKey: false }
 );

 const tableBSchema= new Schema(
  {key1:String,
   Kol1:String,
   Kol2:String,
   Kol3:String},
{ versionKey: false }
 );

 const tableCSchema= new Schema(
  { Name:String,
    Phone:String,
    Father_Name:String,
    Address:String,
    Nick_Name:String},
{ versionKey: false }
 );

let selection;

 router.get('/table/:tname',function(req,res){
  getTab(req.params.tname);
  console.log('Get Request for All tableA');
  tableA.find({}).exec(function(err,tableA){ if(err){console.log('Error retirieving videos');}else{
   console.log(tableA);
    res.json(tableA);
  }})
});

router.get('/table/:tname/:id',function(req,res){
  getTable(req.params.tname,req.params.id);
  console.log('Get Request for asdf All tableA');
  tableA.find(this.selection).exec(function(err,tableA){ if(err){console.log('Error retirieving videos');}else{
    res.json(tableA);
  }})
});

router.delete('/table/:tname/:id',function(req,res){
  getTable(req.params.tname,req.params.id);
  tableA.deleteOne(this.selection,function(err,deletedVideo){
    if(err){console.log('Error in deleting video');}else{
      console.log(deletedVideo);
      res.json(deletedVideo);
    }
  })
  });


router.put('/table/:tname/:id',function(req,res){
  getTable(req.params.tname,req.params.id);
  console.log(this.selection);
  tableA.update(this.selection,{$set:req.body},function(err,updatedVideo){
    if(err){console.log('Error in updating video');}else{ console.log(updatedVideo);res.json(updatedVideo);}
  })
 //console.log("See me"+ JSON.stringify(req.body));
  // tableA.findByIdAndUpdate(req.body._id,
   //  {$set: JSON.stringify(req.body) },
    // {new:true},
     //function(err,updatedVideo){
      // if(err){console.log('Error in updating video');}else{ res.json(updatedVideo);}
     //})
})


router.post('/table/:tname/AddData',function(req,res){
console.log("Add Record");
var tableAInsert=new tableA(req.body);
tableAInsert.save(function(err,insertedVideo){
     if(err){console.log("this is erro while inserting data"+err);}else{
       res.status(201).json(insertedVideo);
     }
   });
 }
)





function getTab(tableName){
  console.log(tableName);
  switch(tableName){
    case 'tableA':
      schemaA=tableASchema;
      break;
      case 'tableB':
        schemaA=tableBSchema;
        break;
        case 'tableC':
    schemaA=tableCSchema;
        break;
    }
  tableA=mongoose.model(tableName,schemaA,tableName);
}


function getTable(tableName,keyValue){
console.log(tableName);
switch(tableName){
case 'tableA':
  this.selection={"key":keyValue};
  schemaA=tableASchema;
  break;
  case 'tableB':
    this.selection={"key1":keyValue};
    schemaA=tableBSchema;
    break;
    case 'tableC':
    this.selection={"Name":keyValue};
    schemaA=tableCSchema;
    break;
}
tableA=mongoose.model(tableName,schemaA,tableName);
}

router.get('/video',function(req,res){

  console.log('Get Request for All Videos');
  Video.find({}).exec(function(err,video){ if(err){console.log('Error retirieving videos');}else{
    res.json(video);
  }})
});

router.get('/video/:id',function(req,res){

  console.log('Get Request for All Videos');
  Video.findById(req.params.id).exec(function(err,video){ if(err){console.log('Error retirieving videos');}else{
    res.json(video);
  }})
});

router.post('/video',function(req,res){
  postVideo=new Video();
  postVideo.title=req.body.title;
  postVideo.url=req.body.url;
  postVideo.description=req.body.description;
  postVideo.save(function(err,insertedVideo){
    if(err){console.log("this is erro while inserting data"+err);}else{
      res.json(insertedVideo);
    }
  });
}
);


router.delete('/video/:id',function(req,res){
Video.findByIdAndRemove(req.params.id,function(err,deletedVideo){
  if(err){console.log('Error in deleting video');}else{
    res.json(deletedVideo);
  }
})
});
module.exports= router;
