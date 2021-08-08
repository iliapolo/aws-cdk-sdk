
import { synth } from '../cdk';
import { createStack } from './stack';

test('snapshot', () => {
  expect(synth(createStack())).toMatchSnapshot();
});
