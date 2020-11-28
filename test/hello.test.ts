import * as src from '../src';

test('service generator', async () => {

  const es = new src.ServiceGenerator('https://raw.githubusercontent.com/aws/aws-sdk-js/master/apis/es-2015-01-01.normal.json', '/Users/epolon/dev/src/github.com/iliapolo/aws-cdk-sdk/es.d.ts');

  await es.init();
  await es.gen();

});