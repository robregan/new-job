const mongoose = require('mongoose');

const HitSchema = mongoose.Schema({
    userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",    
    },
    companyName: {
        type: String,
        required: [true, 'Please add a Company name']
    },
    contactEmail: {
        type: String,
        required: [true, 'Please add a contact email'],
        unique: true,
    },
    jobTitle: {
        type: String,
        required: [true, 'Please add a title']
    },
    companySite: {
        type: String,
        required: [true, 'Please add a company site']
    },
    applied: { 
     type: Boolean, required: true, default: false 
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Hit', HitSchema)