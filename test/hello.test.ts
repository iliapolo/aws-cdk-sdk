import * as elastic from '@aws-cdk/aws-elasticsearch';
import * as cdk from '@aws-cdk/core';
import * as csdk from '../src';

test('hello', () => {

  const app = new cdk.App({ outdir: `${__dirname}/cdk.out` });
  const stack = new cdk.Stack(app, 'ElasticDomain');

  const domain = new elastic.Domain(stack, 'Domain', {
    version: elastic.ElasticsearchVersion.V7_7,
  });

  const domainRuntime = new csdk.ElasticsearchService(stack, 'ES', [domain.domainArn]);

  const value = domainRuntime.describeElasticsearchDomain(
    { domainName: domain.domainName },
  ).domainStatus.elasticsearchClusterConfig.instanceType;

  new cdk.CfnOutput(stack, 'Output', {
    value: value as unknown as string,
  });

  app.synth();

});