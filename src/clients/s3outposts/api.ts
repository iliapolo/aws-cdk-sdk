import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class S3OutpostsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createEndpoint(input: shapes.S3OutpostsCreateEndpointRequest): S3OutpostsCreateEndpoint {
    return new S3OutpostsCreateEndpoint(this, 'CreateEndpoint', this.__resources, input);
  }

  public deleteEndpoint(input: shapes.S3OutpostsDeleteEndpointRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEndpoint',
        service: 'S3Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('S3Outposts.DeleteEndpoint'),
        parameters: {
          EndpointId: input.endpointId,
          OutpostId: input.outpostId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteEndpoint', props);
  }

  public listEndpoints(input: shapes.S3OutpostsListEndpointsRequest): S3OutpostsListEndpoints {
    return new S3OutpostsListEndpoints(this, 'ListEndpoints', this.__resources, input);
  }

}

export class S3OutpostsCreateEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3OutpostsCreateEndpointRequest) {
    super(scope, id);
  }

  public get endpointArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEndpoint',
        service: 'S3Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('S3Outposts.CreateEndpoint.EndpointArn'),
        outputPath: 'EndpointArn',
        parameters: {
          OutpostId: this.input.outpostId,
          SubnetId: this.input.subnetId,
          SecurityGroupId: this.input.securityGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEndpoint.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class S3OutpostsListEndpoints extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.S3OutpostsListEndpointsRequest) {
    super(scope, id);
  }

  public get endpoints(): shapes.S3OutpostsEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpoints',
        service: 'S3Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('S3Outposts.ListEndpoints.Endpoints'),
        outputPath: 'Endpoints',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpoints.Endpoints', props);
    return resource.getResponseField('Endpoints') as unknown as shapes.S3OutpostsEndpoint[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listEndpoints',
        service: 'S3Outposts',
        physicalResourceId: cr.PhysicalResourceId.of('S3Outposts.ListEndpoints.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListEndpoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

