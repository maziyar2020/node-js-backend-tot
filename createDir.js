const fs = require("fs")

if (!fs.existsSync('./file')) {
    fs.mkdir('./file', err => {
        if (err) throw err
        console.log('directory created');
    })
}

if (fs.existsSync('./file')) {
    fs.rmdir('./file', err => {
        if (err) throw err
        console.log('directory Removed');
    })
}