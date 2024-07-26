
import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () =>
  JSON.parse(await fs.readFile(PATH_DB));

console.log(await getAllContacts());
