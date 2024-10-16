import Contact from '../models/contact.js'; // Ensure the file extension is included

// Create a new contact
export const createContact = async (req, res) => {
    const { id, name, contact_number, current_date } = req.body;

    try {
        const newContact = new Contact({ id, name, contact_number, current_date });
        await newContact.save();
        res.status(200).json({ message: 'Contacts Saved successfully', statusCode: 201 });
    } catch (error) {
        res.status(400).json({ message: 'Error creating contact', error });
    }
};

// Get all contacts
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contacts', error });
    }
};

// Export the functions
export default {
    createContact,
    getContacts,
};
