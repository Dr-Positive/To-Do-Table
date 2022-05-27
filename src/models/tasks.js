const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
    id: {type: String, required: true, unique: true},
    task: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    status: {type: String, required: true, unique: true},
    date: {type: String, required: true, unique: true},
    details: {type: String, required: true, unique: true}
})
module.exports = model('Tasks', schema )
