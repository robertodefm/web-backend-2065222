
function Person(firstName,lastName){
    this.firstName=firstName,
    this.lastName=lastName;
}

Person.prototype.greet= function(){
    console.log("Hello "+this.firstName + " " + this.lastName+". Idade: " + this.age)
};

Person.prototype.age= 0;

module.exports=Person;