import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ApiGatewayManagementApiClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public deleteConnection(input: shapes.ApiGatewayManagementApiDeleteConnectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'ApiGatewayManagementApi',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayManagementApi.DeleteConnection'),
        parameters: {
          ConnectionId: input.connectionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConnection', props);
  }

  public fetchConnection(input: shapes.ApiGatewayManagementApiGetConnectionRequest): ApiGatewayManagementApiResponsesFetchConnection {
    return new ApiGatewayManagementApiResponsesFetchConnection(this, this.__resources, input);
  }

  public postToConnection(input: shapes.ApiGatewayManagementApiPostToConnectionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'postToConnection',
        service: 'ApiGatewayManagementApi',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayManagementApi.PostToConnection'),
        parameters: {
          Data: {
          },
          ConnectionId: input.connectionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'PostToConnection', props);
  }

}

export class ApiGatewayManagementApiResponsesFetchConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayManagementApiGetConnectionRequest) {
  }

  public get connectedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'ApiGatewayManagementApi',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayManagementApi.GetConnection.ConnectedAt'),
        outputPath: 'ConnectedAt',
        parameters: {
          ConnectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.ConnectedAt', props);
    return resource.getResponseField('ConnectedAt') as unknown as string;
  }

  public get identity(): ApiGatewayManagementApiResponsesFetchConnectionIdentity {
    return new ApiGatewayManagementApiResponsesFetchConnectionIdentity(this.__scope, this.__resources, this.__input);
  }

  public get lastActiveAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'ApiGatewayManagementApi',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayManagementApi.GetConnection.LastActiveAt'),
        outputPath: 'LastActiveAt',
        parameters: {
          ConnectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.LastActiveAt', props);
    return resource.getResponseField('LastActiveAt') as unknown as string;
  }

}

export class ApiGatewayManagementApiResponsesFetchConnectionIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ApiGatewayManagementApiGetConnectionRequest) {
  }

  public get sourceIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'ApiGatewayManagementApi',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayManagementApi.GetConnection.Identity.SourceIp'),
        outputPath: 'Identity.SourceIp',
        parameters: {
          ConnectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Identity.SourceIp', props);
    return resource.getResponseField('Identity.SourceIp') as unknown as string;
  }

  public get userAgent(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'ApiGatewayManagementApi',
        physicalResourceId: cr.PhysicalResourceId.of('ApiGatewayManagementApi.GetConnection.Identity.UserAgent'),
        outputPath: 'Identity.UserAgent',
        parameters: {
          ConnectionId: this.__input.connectionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Identity.UserAgent', props);
    return resource.getResponseField('Identity.UserAgent') as unknown as string;
  }

}

