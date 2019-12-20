const express= require('express');
const router= express.Router();

const mongoose=require('mongoose');
const Video=require('../models/videos');

const db="mongodb://localhost:27017/VideoPlayer";
 mongoose.Promise=global.Promise;
 mongoose.connect(db,function(err){
   if(err){console.error("Error!"+err);}else{console.log("Successful db connection");}
 });

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

router.put('/video/:id',function(req,res){
  Video.findByIdAndUpdate(req.params.id,
    {$set:{title:req.body.title , url:req.body.url, description:req.body.description}},
    {new:true},
    function(err,updatedVideo){
      if(err){console.log('Error in updating video');}else{ res.json(updatedVideo);}
    })
})

router.delete('/video/:id',function(req,res){
Video.findByIdAndRemove(req.params.id,function(err,deletedVideo){
  if(err){console.log('Error in deleting video');}else{
    res.json(deletedVideo);
  }
})
});
module.exports= router;
