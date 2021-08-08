import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class S3OutpostsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createEndpoint(input: shapes.S3OutpostsCreateEndpointRequest): S3OutpostsResponsesCreateEndpoint {
    return new S3OutpostsResponsesCreateEndpoint(this, this.__resources, input);
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

  public listEndpoints(input: shapes.S3OutpostsListEndpointsRequest): S3OutpostsResponsesListEndpoints {
    return new S3OutpostsResponsesListEndpoints(this, this.__resources, input);
  }

}

export class S3OutpostsResponsesCreateEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3OutpostsCreateEndpointRequest) {
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
          OutpostId: this.__input.outpostId,
          SubnetId: this.__input.subnetId,
          SecurityGroupId: this.__input.securityGroupId,
          AccessType: this.__input.accessType,
          CustomerOwnedIpv4Pool: this.__input.customerOwnedIpv4Pool,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEndpoint.EndpointArn', props);
    return resource.getResponseField('EndpointArn') as unknown as string;
  }

}

export class S3OutpostsResponsesListEndpoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.S3OutpostsListEndpointsRequest) {
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpoints.Endpoints', props);
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
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListEndpoints.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

