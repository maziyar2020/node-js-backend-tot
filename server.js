const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'text.txt'), 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data);
})

fs.writeFile(path.join(__dirname, 'files', 'test.txt'), 'this is new', (err) => {
    if (err) throw err
    console.log('create file complete');
    fs.appendFile(path.join(__dirname, 'files', 'test.txt'), '\n\n Yes tnq', err => {
        if (err) throw err
        console.log('modify complete');
        fs.rename(path.join(__dirname, 'files', 'test.txt'), path.join(__dirname, 'files', 'tested.txt'), (e) => {
            if (e) throw e
            console.log('rename complete');
        })
    })
})

process.on('uncaughtException', err => {
    console.log(`This is a err : ${err}`);
    process.exit(1)
})