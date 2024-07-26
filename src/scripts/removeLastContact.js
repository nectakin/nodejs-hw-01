
import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB));

  if (!contacts.length) return;

  contacts.pop();

  await fs.writeFile(PATH_DB, JSON.stringify(contacts));
};

removeLastContact();
