const express = require('express');
const db = require('../config/dbFiles/products');
import logger from '../middleware/winston';


const router = express.Router(); 

router.use(function(req,res,next){
logger.debug(
    '-The IP IS-' + req.ip +
'-Body-' + JSON.stringify(req.body) +
'-Base URL-' + req.baseUrl +
'-HostName-' + req.hostname +
'-Method-' + req.method);
next();
});

router.get('/' , async(req, res, next) =>{
    
try {
    let results = await db.all();
    res.json(results);

} catch(err) {
    console.log(err);
    res.sendStatus(500);
}

});

router.get('/bodywavefrontal' , async(req, res, next) =>{
    
    try {
        let results = await db.allBodyWave();
        res.json(results);
    
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
    
    });

router.get('/:id' , async(req, res, next) =>{
    
    try {
        let results = await db.one(req.params.id);
        res.json(results);
    
    } catch(err) {
        
        console.log(err);
        console.log('test');
        res.sendStatus(500);
    }
    
    });

router.post('/', async(req,res,next) => {
    let insertObject = {
        itemName: req.body.itemName,
        itemCategory: req.body.itemCategory,
        itemDescription: req.body.itemDescription,
        itemPrice: req.body.itemPrice,
        itemImage: req.body.itemImage
    }
    
    try {
        logger.info('Request Object' +  JSON.stringify(insertObject));
        let results = await db.insert(insertObject);
        console.log(results);
        res.status(201).json(results);
      
    } catch(err) {
        logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - `);
        res.status(500).send(err);
    }
})

router.put('/', async(req,res,next) => {
    let insertObject = {
        id: req.body.id,
        itemName: req.body.itemName,
        itemCategory: req.body.itemCategory,
        itemDescription: req.body.itemDescription,
        itemPrice: req.body.itemPrice,
        itemImage: req.body.itemImage
    }

    console.log(insertObject);
    
    logger.info('Request Object' +  JSON.stringify(insertObject));

    try {
        let results = await db.update(insertObject);
        console.log(results);
        res.status(201).json(results);
      
    } catch(err) {
        logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip} - `)
        res.status(500).send(err);
    }
})


module.exports = router;