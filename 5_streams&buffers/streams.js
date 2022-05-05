const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });

const writeStream = fs.createWriteStream('./docs/blog3_copy2.txt');

// readStream.on('data', (chunk) => {
//     console.log('--------New chunk received--------');
//     console.log('--------New chunk received--------');
//     console.log('--------New chunk received--------');
//     console.log('--------New chunk received--------');
//     console.log('--------New chunk received--------');

//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk);
// });

// piping

readStream.pipe(writeStream);