
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

import fs from 'fs/promises';

const generateContacts = async (number) => {
  const newItemsToPush = [];
  for (let i = 0; i < number; i++) {
    newItemsToPush.push(createFakeContact());
  }

  const contacts = JSON.parse(await fs.readFile(PATH_DB));

  fs.writeFile(
    PATH_DB,
    JSON.stringify([...contacts, ...newItemsToPush], null, 2),
  );
};

generateContacts(5);
