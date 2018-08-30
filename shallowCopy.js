var animals = ['ant', 'bison', 'camel', {finger: 12}, 'elephant'];

var fodder = animals.slice(2, 4);
// expected output: Array ["camel", "duck"]

fodder[1].finger = 13;
console.log(animals[3].finger);
