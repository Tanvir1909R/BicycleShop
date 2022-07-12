// dependency
const ex = require('express')
const app = ex();
const bicycles = require('./data/data.json')
app.set('view engine','ejs')
app.use(ex.static('public'))

//server
app.get('/',(req, res)=>{
    return res.render('bicycles',{
        bicycles
    })
})
app.get('/bicycle',(req,res)=>{
    const bicycle = bicycles.find((b)=> b.id === req.query.id)
    console.log(bicycle);
   return res.render("overview",{
    bicycle
   })
})

//server port
app.listen('5000')

