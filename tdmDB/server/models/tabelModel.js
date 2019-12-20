const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const tableASchema= new Schema({
  "key":String,
  "col1":String,
  "col2":String,
  "col3":String
});

module.exports=mongoose.model('tableA',tableASchema,'tableA');
