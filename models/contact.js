import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    contact_number: { type: String, required: true },
    current_date: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
