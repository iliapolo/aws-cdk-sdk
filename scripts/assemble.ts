import * as fs from 'fs';

const clients: string[] = fs.readdirSync(`${__dirname}/../src/clients`);

// apart from the types, all clients are identical so we just pick the first one
// for all the common assembly properties
const assembly = JSON.parse(fs.readFileSync(`${__dirname}/../src/clients/${clients[0]}/.jsii`, 'utf-8'));

// reset types since they need to be requalified
assembly.types = {};

// reset submodules since they are missing
assembly.submodules = {};


function requalify(fqn: string, client: string) {
  const parts = fqn.split('.');
  const assemblyName = parts[0];
  const typeName = parts[1];
  const namespace = client;
  return [
    assemblyName,
    namespace,
    typeName,
  ].join('.')
}

for (let i = 0; i < clients.length; i++) {

  const client = clients[i];
  const clientAssembly = JSON.parse(fs.readFileSync(`${__dirname}/../src/clients/${client}/.jsii`, 'utf-8'), (key, value) => {
    return key === 'fqn' && value.startsWith(assembly.name) ? requalify(value, client) : value;
  });
  const clientTypes = clientAssembly.types;

  for (const [fqn, type] of Object.entries(clientTypes)) {
    const requalified = requalify(fqn, client);
    type['fqn'] = requalified;
    type['namespace'] = client;
    assembly.types[requalified] = type;
    assembly.submodules[`${assembly.name}.${client}`] = {
      locationInModule: {
        filename: "src/index.ts",
        line: i + 1
      }
    }
  }
}

fs.writeFileSync(`${__dirname}/../.jsii`, JSON.stringify(assembly, null, 2));