const fsPromises = require('fs').promises
const path = require('path')

// fs.readFile(path.join(__dirname, 'files', 'text.txt'), 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data);
// })

// fs.writeFile(path.join(__dirname, 'files', 'test.txt'), 'this is new', (err) => {
//     if (err) throw err
//     console.log('create file complete');
//     fs.appendFile(path.join(__dirname, 'files', 'test.txt'), '\n\n Yes tnq', err => {
//         if (err) throw err
//         console.log('modify complete');
//         fs.rename(path.join(__dirname, 'files', 'test.txt'), path.join(__dirname, 'files', 'tested.txt'), (e) => {
//             if (e) throw e
//             console.log('rename complete');
//         })
//     })
// })

const fileOpration = async () => {
    try {
        await fsPromises.writeFile(path.join(__dirname, 'files', 'text.txt'), 'Hi im mazi')
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'text.txt'),'utf-8')
        await fsPromises.unlink(path.join(__dirname, 'files', 'text.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWriter.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWriter.txt'), '\nHello im Dave.')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWriter.txt'),path.join(__dirname, 'files', 'promiseComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'),'utf-8')
        console.log(newData);
    } catch (error) {
        console.error(error)
    }
}
fileOpration()

process.on('uncaughtException', err => {
    console.log(`This is a err : ${err}`);
    process.exit(1)
})