let newdate=new Date()
let hours=newdate.getHours()
let day=newdate.getDay()


function date(req,res,next) {
    if((hours<9|| hours>17)&&((day==6 || day==0))){
        res.send('closed')
    } else {
        next()
    }
}

module.exports = date;