

const express = require('express');
const app = express();

app.post('/create',(req,res,next)=> {
            let datetime = new Date();
            let date = ("0" + datetime.getDate()).slice(-2);
            
            let month = ("0" + (datetime.getMonth() + 1)).slice(-2);
            let year = datetime.getFullYear();
            let hours = datetime.getHours();
            let minutes = datetime.getMinutes();
            let seconds = datetime.getSeconds();

            // Date & time in YYYY-MM-DD HH:MM:SS format
            console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);   
            let datetimefinal= year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
            
            let fs = require('fs');
            let result = fs.createWriteStream('current date-time.txt');
            result.write(`${datetimefinal}`);
        });



app.listen(process.env.PORT||8000);