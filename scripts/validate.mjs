// Checks plugin.json and mcp.json against the official Agent Plugins schemas (the version in $schema).
import { readFile } from 'node:fs/promises';
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

let failed = false;
for (const file of ['plugin.json', 'mcp.json']) {
  const data = JSON.parse(await readFile(file, 'utf8'));
  const response = await fetch(data.$schema);
  if (!response.ok) throw new Error(`${file}: cannot fetch ${data.$schema} (${response.status})`);
  const ajv = new Ajv2020({ strict: false, allErrors: true });
  addFormats(ajv);
  const validate = ajv.compile(await response.json());
  if (validate(data)) {
    console.log(`${file}: valid against ${data.$schema}`);
  } else {
    failed = true;
    console.error(`${file}: ${JSON.stringify(validate.errors, null, 2)}`);
  }
}
process.exit(failed ? 1 : 0);
