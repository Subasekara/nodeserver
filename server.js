
const express = require('express');

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

var app = express();

app.set('view-engine','hbs');

app.use(express.static(__dirname + '/public'));
 
app.use((req,res,next)=>{
    var now = new Date().toString();
    console.log(now);
    next();
});


app.get('/',(req,res)=>{

    res.render('index.hbs',{
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        headerTitle: 'HOME',
        Message: 'Welcome Praneeth'
    });
});

app.get('/about',(req, res)=>{
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad',(req,res)=>{
    res.send({
        errormessage: 'Unable to read'
    });
});

app.listen(3000,()=>{
    console.log("Server is up");
});