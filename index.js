var express = require('express') ;
var server  = express() ;

var bodyParser =  require('body-parser') ;
var cors = require('cors') ;

var path = require('path') ;

var PORT = process.env.PORT ||  3000 ;

server.use(bodyParser.json()) ;
server.use(bodyParser.urlencoded()) ;
server.use(cors()) ;

var db = require('./db') ;

var sample_routes = require('./routes/samples') ;

server.use('/samples' ,  sample_routes) ;

//server.get('/' , (req, res)=> res.json('Index Page')) ;

//Serving Static Files


if (process.env.NODE_ENV === 'production') {


    server.use(express.static('interface/dist/interface' , {redirect: false})) ;

    server.get('*' ,(req, res) =>{

        let str = 'interface/dist/interface' ;

        var options = {
            root : path.join(__dirname + 'interface/dist/interface')
        } ;

        //res.sendFile('index.html' , options) ;
        res.sendFile(path.resolve(str + '/index.html')) ;

    })  ;


}


/*

server.use(express.static('interface/dist/interface')) ;

server.get('*' ,(req, res) =>{

    var options = {
        root : path.join(__dirname + 'interface/dist/interface')
    } ;

    res.sendFile('index.html' , options) ;

})  ;



 */



server.listen(PORT ,  ()=>{
    console.log('Server running on port ' + PORT ) ;
})  ;
