var mongoose =  require('mongoose') ;
var Schema = mongoose.Schema ;


var sampleSchema = new Schema({
        age : Number ,
        gender : String ,
        temperature : Number ,
        date : String ,
        score : Number ,
        result : String
}) ;


var Sample  = mongoose.model('samples' , sampleSchema) ;

module.exports = Sample ;
