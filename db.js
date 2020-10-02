var mongoose = require('mongoose') ;

var db ;

function connectDB(){

    if(!db){

        const host = 'mongodb+srv://brad:1234@mytasklist-brad.hvyqj.mongodb.net/mytasklist_brad?retryWrites=true&w=majority' ;

        dbconfig = {
            useNewUrlParser: true ,
            useUnifiedTopology : true
        } ;

        mongoose.connect(host , dbconfig) ;
        db = mongoose.connection ;
        db.on('connected' , ()=>{console.log('Connected to Mongo')}) ;

    }

  return db ;



}


module.exports = connectDB() ;



