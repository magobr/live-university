const express = require('express');

const getRoutes = express.Router();

getRoutes.get('/', (req, res)=>{
    res.render('pages/home/index');
});

module.exports = getRoutes;