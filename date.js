var day = ['monday', 'tuesday', 'wednesday', 'thirsday', 'friday'];
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var today = new Date();
var date = today.getDate();

for(i in day){
    for (j in hour){
        if((date !== day[i]) || (date.getHours() !== hour[j])) {
            console.log('Come back later' + i)
        }
    }
}