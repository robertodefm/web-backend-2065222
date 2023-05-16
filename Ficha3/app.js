var myLogModule = require('./Log.js');

// myLogModule.info('Node.js started');

var person = require('./Person.js');
var person1 = new person('James', 'Bond');



// console.log(person1.fullName());

var arrayUtils = require('./ArrayUtils.js');

console.log(arrayUtils.concatenate([0,1,2,3],[4,5]))

var object= {
    name:"Roberto"
};

function Person(firstname){
    this.firstname = firstname;
}

var p = new Person("David");
var x = 0;
//p.benfica