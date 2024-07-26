
import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB));

  fs.writeFile(
    PATH_DB,
    JSON.stringify([...contacts, createFakeContact()], null, 2),
  );
};

addOneContact();
