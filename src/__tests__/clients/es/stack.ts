import * as es from '@aws-cdk/aws-elasticsearch';
import { App, Stack, CfnOutput } from '@aws-cdk/core';
import { EsClient } from '../../../clients/es';

export function createStack(): Stack {

  const app = new App();
  const stack = new Stack(app, 'aws-cdk-sdk-es');

  const domain = new es.Domain(stack, 'Domain', {
    version: es.ElasticsearchVersion.V7_10,
  });

  const client = new EsClient(stack, 'Client', [domain.domainArn]);

  new CfnOutput(stack, 'DomainEndpoint', {
    value: client.describeElasticsearchDomain({ domainName: domain.domainName }).domainStatus.endpoint,
  });

  return stack;
}