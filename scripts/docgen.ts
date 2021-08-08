import * as fs from 'fs';
import * as docgen from 'jsii-docgen';

async function main() {

  const clients: string[] = fs.readdirSync(`${__dirname}/../src/clients`);

  const docs = await docgen.Documentation.forProject(`${__dirname}/../`);

  for (const client of clients) {
    const reference = docs.render({ submodule: client, readme: false });
    fs.writeFileSync(`${__dirname}/../src/clients/${client}/README.md`, reference.render());
  }

}

void main();