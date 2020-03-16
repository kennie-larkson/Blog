const express = require('express');
const app = express();
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles')

mongoose.connect('mongodb://localhost/myblogDB',{ useNewUrlParser: true,  useUnifiedTopology: true  });

app.set('view engine','ejs');
app.use(express.urlencoded({extended : false}))
app.use('/articles', articleRouter);


app.get('/', (req, res)=>{

    const articles = [{
        title : 'Test title',
        createdAt : new Date(),
        description : 'Test description'
    },
    {
        title : 'Test title2',
        createdAt : new Date(),
        description : 'Test description2'
    }
    ]
    res.render('articles/index',{articles : articles});
})
app.listen(5000);