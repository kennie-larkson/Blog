const expressApp = require('express')();
const articleRouter = require('./routes/articles')

expressApp.set('view engine','ejs');

expressApp.use('/articles', articleRouter);

expressApp.get('/', (req, res)=>{
    res.render('index');
})
expressApp.listen(5000);