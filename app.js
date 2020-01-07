require('./db');
const Person = require('./models/person');

const init = async function(name) {
    const data = {
        name: name,
        age: 24,
        gender: "Female"
    }
    console.log("adding data");
    
    await Person.addPerson(data);
}
// init();

const test = async function(){
    return await Person.findByName("Jane Doe");
}

const addPerson = async function(name){
    return await init(name);
}

exports.test = test;
exports.addPerson = addPerson;