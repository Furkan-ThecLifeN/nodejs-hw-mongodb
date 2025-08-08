import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// contacts.json dosyasının tam yolu
const contactsPath = path.resolve('./src/data/contacts.json');

let contacts = [];

// Dosyayı senkron olarak oku ve JSON'a parse et
try {
  const data = fs.readFileSync(contactsPath, 'utf-8');
  contacts = JSON.parse(data);
} catch (error) {
  console.error('Error reading contacts.json:', error);
}

router.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
});

router.get('/:contactId', (req, res) => {
  const { contactId } = req.params;
  const contact = contacts.find(c => c._id === contactId);

  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
});

export default router;
