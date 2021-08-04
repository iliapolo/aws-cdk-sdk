const fs = require('fs');
const child = require('child_process');

function incrementalCompile() {

  // backup tsconfig and manifest
  child.execSync(`mv tsconfig.json tsconfig.json.orig`);
  child.execSync(`mv package.json package.json.orig`);

  try {
    for (const client of fs.readdirSync(`${__dirname}/src/clients`)) {
      console.log(`Compiling ${client}`);

      // overriding tsconfig and manifest to only compile the current client
      const tsConfig = JSON.parse(fs.readFileSync(`${__dirname}/tsconfig.json.orig`, 'utf-8'));
      tsConfig.include = [`src/clients/${client}/*.ts`]

      const manifest = JSON.parse(fs.readFileSync(`${__dirname}/package.json.orig`, 'utf-8'));
      manifest.main = `lib/clients/${client}/index.js`;
      manifest.types= `lib/clients/${client}/index.d.ts`;

      fs.writeFileSync('tsconfig.json', JSON.stringify(tsConfig, null, 2));
      fs.writeFileSync('package.json', JSON.stringify(manifest, null, 2));

      child.execSync(`yarn compile`, {
        env: {
          ...process.env,
          JSII_TSCONFIG_PATH: `${__dirname}/tsconfig.json`,
        }
      });
      child.execSync(`mv .jsii ${__dirname}/src/clients/${client}/.jsii`)
    }

    console.log('Success');
  } finally {
    // restore original files
    child.execSync(`mv tsconfig.json.orig tsconfig.json`);
    child.execSync(`mv package.json.orig package.json`);
  }
}

incrementalCompile();
