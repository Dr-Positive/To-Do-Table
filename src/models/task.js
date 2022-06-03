const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
    id: {type: String, required: true, unique: true},
    taskName: {type: String, required: true, unique: true},
    taskTheme: {type: String, required: false, unique: true},
    status: {type: String, required: true},
    date: {type: String, required: true},
    details: {type: String, required: false},
    owner: {type: String, required: false}
})

module.exports = model('Task', schema )
