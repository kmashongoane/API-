import express from 'express';
import { createContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

// Route to create a new contact
router.post('/contacts', createContact);

// Route to get all contacts
router.get('/contacts', getContacts);

export default router;
