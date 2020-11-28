import * as src from '../src';

test('service generator', async () => {

  const cloudfront = new src.ServiceGenerator();

  await cloudfront.tscExperiment();

});