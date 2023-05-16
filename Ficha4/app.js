var personTest={
    name:"Roberto",
    age:27,
    gender:"Male"
}

// console.log(person);
// console.log(JSON.stringify(person));

var string='{"name":"Ana", "age":"38", "gender":"F"}';
var personObj = JSON.parse(string);
// console.log(personObj);

var Person = require("./person");

var p1 = new Person("John", "Doe");
// p1.greet();


var p2 = new Person("Roberto","Moniz");
var p3 = new Person("Saul","Pinto");

p2.age=27;

p2.greet();

// console.log(p2.__proto__);
// console.log(p2.__proto__==p3.__proto__);

var Emitter=require("./emitter");

var emitter=new Emitter();

var config=require("./config");

emitter.on(config.events.LOGIN,function(){
    console.log("LOGIN 1");
});

emitter.on(config.events.LOGIN,function(){
    console.log("LOGIN 2");
});

emitter.emit(config.events.LOGIN);


