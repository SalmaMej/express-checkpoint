const express = require('express');
const path = require('path')

// const date = require('./date')

const app = express();



app.use(date =(req,res,next)=>{
    let newdate=new Date()
    let hours=newdate.getHours()
    let day=newdate.getDay()
    if((hours<9 && hours>17) || ((day==6 || day==0))){
        res.send('<h1><center>We are closed</center></h1><p><center>We work from MONDAY to FRIDAY, from 9am to 5pm</center></p>')
    } else {
        next()
    }
});


app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home.html'))
})


const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))