const express = require('express');
const path = require('path');
const hbs = require('hbs');
const weather = require('./utils/weather');
const getCoordinates = require('./utils/coordinates')

const app = express();
const port = process.env.PORT || 3000

var viewsPath = path.join(__dirname,'../templates/views')
var partialsPath = path.join(__dirname,'../templates/partials')

hbs.registerPartials(partialsPath)

const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath))

app.set('views',viewsPath)
app.set('view engine','hbs');
app.get('/weather',(req,res) => {
    if(!req.query.address){
        return res.send({
            error:'no address is provided'
        })
    }
    getCoordinates(req.query.address,(error,lon,lat)=>{
        if(error)
        {
            console.log(error);
           return res.send({
                error
            })
        }
        else{
            weather(lon,lat,(error,temp,name)=>{
                if(error)
                {
                    return res.send({
                        error
                    })
                }
                res.send({
                    location:name,
                    temp
                });
            })
        }

    })

})

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Subhash'
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:'subhash',
        title:'About me'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'this is some helpful text.',
        title:'Help',
        name:'Subhash'
    })
})
app.get('/product',(req,res)=>{
    console.log(req.query);
    if(!req.query.search){
        return res.send({
            errorMessage:'please provide a search term '
        })
    }
    res.send({
        product:[]
    })
})
app.get('/help/*',(req,res)=>{
    res.render('error',{
        title:'404',
        name:'subhash',
        errorMessage:'Help article not found'
    })
})
app.get('*',(req,res)=>{
    res.render ('error',{
        title:'404',
        name:'subhash',
        errorMessage:'Page not found'
    })
})

app.listen(port,()=>{
    console.log('the server is started on port 3000')
})


