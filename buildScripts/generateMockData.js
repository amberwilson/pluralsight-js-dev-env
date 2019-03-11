/*  This script generates mock data for local development.
    This way you don't have to point to an actual API,
    but you can enjoy realistic, but randomized data,
    and rapid page loads du to local, static data.
 */

 /* eslint-disable no-console */

import chalk from 'chalk';
import faker from 'faker';
import fs from 'fs';
import jsf from 'json-schema-faker';

import { schema } from './mockDataSchema';

jsf.extend('faker', () => faker);

jsf.resolve(schema).then(sample => {
  const json = JSON.stringify(sample);
  fs.writeFile('./src/api/db.json', json, (err) => {
    if (err) {
      return console.log(chalk.red(err));
    } else {
      console.log(chalk.green('Mock data generated'));
    }
  });
 });
