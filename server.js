var express= require("express"),
    app = express();

app.set('view engine', 'pug');
app.use(express.static('views/public/dist'));

app.get('/', (req, res) => {
    res.render('public/index.pug');
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('The page you try to reach is not available.');
});

app.listen(3000, ()=> {
    console.log('listen on 3000');
});