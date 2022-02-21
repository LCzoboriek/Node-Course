var person = {
    name: 'Susan',
    age: 26
}

var personJson = JSON.stringify(person);
console.log(personJson);

var personObj = JSON.parse(personJson);
console.log(`${personObj.name} is ${personObj.age}`);