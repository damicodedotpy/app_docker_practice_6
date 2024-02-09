const { Schema, model } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const schema = new Schema({
    name: {
        type: String,
        required: true,
        max: 50
    },
    lastname: {
        type: String,
        max: 50
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},
{
    versionKey: false
});


schema.plugin(paginate);

module.exports = model('User', schema, "users");