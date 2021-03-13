const {dataBaseNews} = require('../dataBase/db');
exports.getNews = async(request, response) => {
    try {
        const lang = request.headers.language;
        const filterNews = dataBaseNews.filter( (n) => {
            return n.lang === lang;
        });
        console.log(lang);

        response.status(200).json(filterNews);
    }catch(e){
        response.status(500).json(e.message);
    }
}
exports.createNews =  async (req, res) => {
    try {
        const news =req.body;
        news.date = new Date();
        dataBaseNews.push(news);
        res.status(201).json({
            message: 'новость создана',
            allNews : dataBaseNews
        });
    } catch (e){

    }
}
exports.getOneNews = async (req, res) => {
    try{
        console.log('получение id', req.params);
        const news = dataBaseNews.find(news => news.id === req.params.id);

        if(!news){
            return res.status(404).json('новость не найдена');
        }
        res.status(200).json(news);
    }catch(e){
        console.error(e.message);
        res.status(500).json('сервер упал');
    }
}