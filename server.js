const expressApp = require('express')();
const articleRouter = require('./routes/articles')

expressApp.set('view engine','ejs');

expressApp.use('/articles', articleRouter);

expressApp.get('/', (req, res)=>{

    const articles = [{
        title : 'Test title',
        createdAt : new Date(),
        description : 'Test description'
    },
    {
        title : 'Test title',
        createdAt : new Date(),
        description : 'Test description'
    }
    ]
    res.render('index',{articles : articles});
})
expressApp.listen(5000);