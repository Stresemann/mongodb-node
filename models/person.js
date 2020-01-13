const mongoose = require("mongoose");
var Schema = new mongoose.Schema({
    name: {type:String, required:true},
    age: {type: Number, required: true},
    gender: {type: String, enum: ['Male', 'Female', 'Other']}
}, { timestamps: true});

Schema.statics.addPerson = async function(person){
    var Person = new this(person);
    let filter = {"name": person.name};
    var result =  await Person.save(person, (data, res) => {
        console.log(data, res, "YES")
    });
    // let result = await Person.update(filter, {$set: person}, true);
    return result;
}

Schema.statics.listPersons = async function(){
    return await this.find();
}

Schema.statics.findByName = async function(name) {
    return await this.find({'name': name})
}

module.exports = mongoose.model('person', Schema);