const fs = require('fs');
const child = require('child_process');

function incrementalCompile() {

  for (const client of fs.readdirSync(`${__dirname}/src/clients`)) {
    console.log(`Compiling ${client}`);
    child.execSync(`yarn compile`, {
      env: {
        ...process.env,
        JSII_PACKAGE_OVERRIDES: `${__dirname}/src/clients/${client}/package.overrides.json`,
        JSII_TSCONFIG_PATH: `${__dirname}/src/clients/${client}/tsconfig.json`,
      },
      shell: true,
    });
    child.execSync(`mv .jsii ${__dirname}/src/clients/${client}/.jsii`)
  }

  console.log('Success');

}

incrementalCompile();
