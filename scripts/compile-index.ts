import * as fs from 'fs';

const clients: string[] = fs.readdirSync(`${__dirname}/../src/clients`);

// index.ts only contains submodule exports so its a simple copy/paste
fs.copyFileSync(`${__dirname}/../src/index.ts`, `${__dirname}/../lib/index.d.ts`)

// js file is a little trickier
const js = [
  `"use strict"`,
  `Object.defineProperty(exports, "__esModule", { value: true });`,
]

for (const client of clients) {
  js.push(`exports.${client} = require("./clients/${client}");`);
}

fs.writeFileSync(`${__dirname}/../lib/index.js`, js.join('\n'));