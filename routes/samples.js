var express = require('express') ;
var router  = express.Router() ;

var Sample  = require('../model/sample_schema') ;
var Phone  = require('../model/Phone') ;

router.get('/' , (req, res) =>{

    res.send('Covid Samples Page') ;

});

router.get('/all'  ,  (req, res) =>{

        Sample.find({} , (err, results) =>{
            if(err){
                res.send(err) ;
            }else{
                //console.log(results) ;
                res.json(results);
            }
        }) ;

})  ;


router.post('/new' , validate ,  (req, res) =>{

        Sample.create(req.body , (err , result) =>{

            if(err){
                res.status('403').json('Error') ;
            }else{

                //console.log(result) ;
                res.json(result) ;

            }

        })

})  ;



router.post('/test'  ,  (req, res) =>{

    let todayDate = new Date().toISOString().slice(0,10) ;
    req.body['date'] = todayDate ;

    console.log(req.body) ;

    //res.status('400').json('Error') ;

    res.status('200').json(req.body) ;

})  ;


function validate(req, res , next){

    let {age , gender ,  temperature , score , result } = req.body ;

    console.log(req.body) ;

    let todayDate = new Date().toISOString().slice(0,10) ;

    let c1 = age >0  && age<=120 ;
    let c2 = gender==='Male' ||  gender==='Female' ;
    let c3 = temperature >=90  &&   temperature <=110 ;
    let c4 = score>=0  ;
    let c5 = result==='Positive' ||  result==='Negative' ;


    req.body['date'] = todayDate ;

    let trt = c1 && c2 && c3 && c4 && c5 ;

    if(trt){
        next() ;
    }

    else{
        res.status('400').json('Please enter valid data') ;
    }



}


module.exports = router ;
