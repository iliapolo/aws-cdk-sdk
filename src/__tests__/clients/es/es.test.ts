import { Template } from '@aws-cdk/assertions';
import { createStack } from './stack';

test('snapshot', () => {
  expect(Template.fromStack(createStack())).toMatchSnapshot();

});
