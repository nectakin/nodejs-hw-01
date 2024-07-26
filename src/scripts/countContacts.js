
import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () =>
  JSON.parse(await fs.readFile(PATH_DB)).length;

console.log(await countContacts());
