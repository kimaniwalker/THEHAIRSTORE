const mysql = require('mysql');
import { config } from '../index';


const pool = mysql.createPool(config.db);

let products = {};

products.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM products`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};

products.allHairAccessories = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM products WHERE itemCategory = 'Hair Accessories'`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};

products.allBundles = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM products WHERE itemCategory = 'Bundle Deals'`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};

products.allLwHair = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM products WHERE itemCategory = 'Loose Wave'`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};

products.allDwHair = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM products WHERE itemCategory = 'Deep Wave'`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};

products.allBwHair = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM products WHERE itemCategory = 'Body Wave'`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};

products.allStraight = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM products WHERE itemCategory = 'Brazilian'`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};

products.allLashes = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM products WHERE itemCategory = 'Lashes'`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};
products.allCosmetics = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM products WHERE itemCategory = 'Cosmetics'`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};






products.one = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM products WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

products.insert = (id,itemName,itemCategory,itemDescription,itemPrice,itemImage,_created) => {


    return new Promise((resolve, reject) => {

        pool.query(`INSERT INTO products SET ?`, [id,itemName,itemCategory,itemDescription,itemPrice,itemImage,_created ] ,(err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve ({id: results.insertId});
        })

    })
}

products.update = ({ id,itemName,itemCategory,itemDescription,itemPrice,itemImage}) => {


    return new Promise((resolve, reject) => {

        pool.query(`UPDATE products SET id = ?,itemName = ?,itemCategory = ?,itemDescription = ?,itemPrice = ?,itemImage = ? `, [id,itemName,itemCategory,itemDescription,itemPrice,itemImage], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

module.exports = products;

//all one insert update delete