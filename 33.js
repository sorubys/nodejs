var fs = require('fs');

fs.appendFile('ukinode.txt', ' It has two clubs namely Gavel club and Fitness club.Gavel club develops the student communication skills in a formal manner and fitness club improve the fitness of the students and celebrate some festival with uki family.',
 function (err) {
  if (err) throw err;
  console.log('Updated!');
});
