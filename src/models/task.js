const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
    id: {type: String, required: true, unique: true},
    taskName: {type: String, required: true, unique: true},
    taskTheme: {type: String, required: true, unique: true},
    status: {type: String, required: true},
    date: {type: String, required: true},
    details: {type: String, required: true, unique: true},
    owner: {type: String, required: true}
})

module.exports = model('Task', schema )
