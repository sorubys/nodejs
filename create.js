var fs = require('fs');

fs.appendFile('ukinode.txt', 'Uki is a coding school which provides full time web development course with business skills and communication skills.',
 function (err) {
  if (err) throw err;
  console.log('Saved!');
});
}).listen(8080);
