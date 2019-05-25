const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({

    title: {
        type: String,
        required: true
    }
},
    {timestamps: true}
);

module.exports = mongoose.model('Country', countrySchema);
