const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
    id: {type: String, required: true, unique: true},
    task: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    status: {type: String, required: true, unique: true},
    date: {type: Date, default: Date.now },
    details: {type: String, required: true, unique: true},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Tasks', schema )
