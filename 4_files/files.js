const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => { 
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line ...');



// writing files

// fs.writeFile('./docs/blog1.txt', 'Hello World', (err) => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'Hello World again', (err) => {
//     console.log('file was written');
// });

// directories

// if (!fs.existsSync('./docs/test')) {

//     fs.mkdir('./docs/test', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('directory was created');
//     });
// }else {
//     fs.rmdir('./docs/test', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('directory was deleted');
//     });
// }

// deleting files

if (fs.existsSync('./docs/test/deleteme.txt')) {
    fs.unlink('./docs/test/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file was deleted');
    });
} else {
    console.log('file does not exist');
}