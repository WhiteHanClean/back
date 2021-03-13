const express = require('express');
const router = express.Router();

const { getNews, createNews, getOneNews } = require('../controllers/news')

router.get('/news', getNews );

router.post('/create-news', createNews );

router.get('/news/:id',getOneNews ) // params id 

exports.router = router;