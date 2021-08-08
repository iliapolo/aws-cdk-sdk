import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeStarconnectionsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createConnection(input: shapes.CodeStarconnectionsCreateConnectionInput): CodeStarconnectionsResponsesCreateConnection {
    return new CodeStarconnectionsResponsesCreateConnection(this, this.__resources, input);
  }

  public createHost(input: shapes.CodeStarconnectionsCreateHostInput): CodeStarconnectionsResponsesCreateHost {
    return new CodeStarconnectionsResponsesCreateHost(this, this.__resources, input);
  }

  public deleteConnection(input: shapes.CodeStarconnectionsDeleteConnectionInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnection',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.DeleteConnection'),
        parameters: {
          ConnectionArn: input.connectionArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConnection', props);
  }

  public deleteHost(input: shapes.CodeStarconnectionsDeleteHostInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.DeleteHost'),
        parameters: {
          HostArn: input.hostArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteHost', props);
  }

  public fetchConnection(input: shapes.CodeStarconnectionsGetConnectionInput): CodeStarconnectionsResponsesFetchConnection {
    return new CodeStarconnectionsResponsesFetchConnection(this, this.__resources, input);
  }

  public fetchHost(input: shapes.CodeStarconnectionsGetHostInput): CodeStarconnectionsResponsesFetchHost {
    return new CodeStarconnectionsResponsesFetchHost(this, this.__resources, input);
  }

  public listConnections(input: shapes.CodeStarconnectionsListConnectionsInput): CodeStarconnectionsResponsesListConnections {
    return new CodeStarconnectionsResponsesListConnections(this, this.__resources, input);
  }

  public listHosts(input: shapes.CodeStarconnectionsListHostsInput): CodeStarconnectionsResponsesListHosts {
    return new CodeStarconnectionsResponsesListHosts(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeStarconnectionsListTagsForResourceInput): CodeStarconnectionsResponsesListTagsForResource {
    return new CodeStarconnectionsResponsesListTagsForResource(this, this.__resources, input);
  }

  public tagResource(input: shapes.CodeStarconnectionsTagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.CodeStarconnectionsUntagResourceInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateHost(input: shapes.CodeStarconnectionsUpdateHostInput): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.UpdateHost'),
        parameters: {
          HostArn: input.hostArn,
          ProviderEndpoint: input.providerEndpoint,
          VpcConfiguration: {
            VpcId: input.vpcConfiguration?.vpcId,
            SubnetIds: input.vpcConfiguration?.subnetIds,
            SecurityGroupIds: input.vpcConfiguration?.securityGroupIds,
            TlsCertificate: input.vpcConfiguration?.tlsCertificate,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateHost', props);
  }

}

export class CodeStarconnectionsResponsesCreateConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarconnectionsCreateConnectionInput) {
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.CreateConnection.ConnectionArn'),
        outputPath: 'ConnectionArn',
        parameters: {
          ProviderType: this.__input.providerType,
          ConnectionName: this.__input.connectionName,
          Tags: this.__input.tags,
          HostArn: this.__input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.ConnectionArn', props);
    return resource.getResponseField('ConnectionArn') as unknown as string;
  }

  public get tags(): shapes.CodeStarconnectionsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnection',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.CreateConnection.Tags'),
        outputPath: 'Tags',
        parameters: {
          ProviderType: this.__input.providerType,
          ConnectionName: this.__input.connectionName,
          Tags: this.__input.tags,
          HostArn: this.__input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnection.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.CodeStarconnectionsTag[];
  }

}

export class CodeStarconnectionsResponsesCreateHost {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarconnectionsCreateHostInput) {
  }

  public get hostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.CreateHost.HostArn'),
        outputPath: 'HostArn',
        parameters: {
          Name: this.__input.name,
          ProviderType: this.__input.providerType,
          ProviderEndpoint: this.__input.providerEndpoint,
          VpcConfiguration: {
            VpcId: this.__input.vpcConfiguration?.vpcId,
            SubnetIds: this.__input.vpcConfiguration?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfiguration?.securityGroupIds,
            TlsCertificate: this.__input.vpcConfiguration?.tlsCertificate,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHost.HostArn', props);
    return resource.getResponseField('HostArn') as unknown as string;
  }

  public get tags(): shapes.CodeStarconnectionsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.CreateHost.Tags'),
        outputPath: 'Tags',
        parameters: {
          Name: this.__input.name,
          ProviderType: this.__input.providerType,
          ProviderEndpoint: this.__input.providerEndpoint,
          VpcConfiguration: {
            VpcId: this.__input.vpcConfiguration?.vpcId,
            SubnetIds: this.__input.vpcConfiguration?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfiguration?.securityGroupIds,
            TlsCertificate: this.__input.vpcConfiguration?.tlsCertificate,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateHost.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.CodeStarconnectionsTag[];
  }

}

export class CodeStarconnectionsResponsesFetchConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarconnectionsGetConnectionInput) {
  }

  public get connection(): CodeStarconnectionsResponsesFetchConnectionConnection {
    return new CodeStarconnectionsResponsesFetchConnectionConnection(this.__scope, this.__resources, this.__input);
  }

}

export class CodeStarconnectionsResponsesFetchConnectionConnection {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarconnectionsGetConnectionInput) {
  }

  public get connectionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetConnection.Connection.ConnectionName'),
        outputPath: 'Connection.ConnectionName',
        parameters: {
          ConnectionArn: this.__input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.ConnectionName', props);
    return resource.getResponseField('Connection.ConnectionName') as unknown as string;
  }

  public get connectionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetConnection.Connection.ConnectionArn'),
        outputPath: 'Connection.ConnectionArn',
        parameters: {
          ConnectionArn: this.__input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.ConnectionArn', props);
    return resource.getResponseField('Connection.ConnectionArn') as unknown as string;
  }

  public get providerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetConnection.Connection.ProviderType'),
        outputPath: 'Connection.ProviderType',
        parameters: {
          ConnectionArn: this.__input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.ProviderType', props);
    return resource.getResponseField('Connection.ProviderType') as unknown as string;
  }

  public get ownerAccountId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetConnection.Connection.OwnerAccountId'),
        outputPath: 'Connection.OwnerAccountId',
        parameters: {
          ConnectionArn: this.__input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.OwnerAccountId', props);
    return resource.getResponseField('Connection.OwnerAccountId') as unknown as string;
  }

  public get connectionStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetConnection.Connection.ConnectionStatus'),
        outputPath: 'Connection.ConnectionStatus',
        parameters: {
          ConnectionArn: this.__input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.ConnectionStatus', props);
    return resource.getResponseField('Connection.ConnectionStatus') as unknown as string;
  }

  public get hostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getConnection',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetConnection.Connection.HostArn'),
        outputPath: 'Connection.HostArn',
        parameters: {
          ConnectionArn: this.__input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetConnection.Connection.HostArn', props);
    return resource.getResponseField('Connection.HostArn') as unknown as string;
  }

}

export class CodeStarconnectionsResponsesFetchHost {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarconnectionsGetHostInput) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetHost.Name'),
        outputPath: 'Name',
        parameters: {
          HostArn: this.__input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHost.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetHost.Status'),
        outputPath: 'Status',
        parameters: {
          HostArn: this.__input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHost.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get providerType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetHost.ProviderType'),
        outputPath: 'ProviderType',
        parameters: {
          HostArn: this.__input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHost.ProviderType', props);
    return resource.getResponseField('ProviderType') as unknown as string;
  }

  public get providerEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetHost.ProviderEndpoint'),
        outputPath: 'ProviderEndpoint',
        parameters: {
          HostArn: this.__input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHost.ProviderEndpoint', props);
    return resource.getResponseField('ProviderEndpoint') as unknown as string;
  }

  public get vpcConfiguration(): CodeStarconnectionsResponsesFetchHostVpcConfiguration {
    return new CodeStarconnectionsResponsesFetchHostVpcConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class CodeStarconnectionsResponsesFetchHostVpcConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarconnectionsGetHostInput) {
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetHost.VpcConfiguration.VpcId'),
        outputPath: 'VpcConfiguration.VpcId',
        parameters: {
          HostArn: this.__input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHost.VpcConfiguration.VpcId', props);
    return resource.getResponseField('VpcConfiguration.VpcId') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetHost.VpcConfiguration.SubnetIds'),
        outputPath: 'VpcConfiguration.SubnetIds',
        parameters: {
          HostArn: this.__input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHost.VpcConfiguration.SubnetIds', props);
    return resource.getResponseField('VpcConfiguration.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetHost.VpcConfiguration.SecurityGroupIds'),
        outputPath: 'VpcConfiguration.SecurityGroupIds',
        parameters: {
          HostArn: this.__input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHost.VpcConfiguration.SecurityGroupIds', props);
    return resource.getResponseField('VpcConfiguration.SecurityGroupIds') as unknown as string[];
  }

  public get tlsCertificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHost',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.GetHost.VpcConfiguration.TlsCertificate'),
        outputPath: 'VpcConfiguration.TlsCertificate',
        parameters: {
          HostArn: this.__input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHost.VpcConfiguration.TlsCertificate', props);
    return resource.getResponseField('VpcConfiguration.TlsCertificate') as unknown as string;
  }

}

export class CodeStarconnectionsResponsesListConnections {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarconnectionsListConnectionsInput) {
  }

  public get connections(): shapes.CodeStarconnectionsConnection[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConnections',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.ListConnections.Connections'),
        outputPath: 'Connections',
        parameters: {
          ProviderTypeFilter: this.__input.providerTypeFilter,
          HostArnFilter: this.__input.hostArnFilter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConnections.Connections', props);
    return resource.getResponseField('Connections') as unknown as shapes.CodeStarconnectionsConnection[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConnections',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.ListConnections.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ProviderTypeFilter: this.__input.providerTypeFilter,
          HostArnFilter: this.__input.hostArnFilter,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConnections.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeStarconnectionsResponsesListHosts {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarconnectionsListHostsInput) {
  }

  public get hosts(): shapes.CodeStarconnectionsHost[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHosts',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.ListHosts.Hosts'),
        outputPath: 'Hosts',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHosts.Hosts', props);
    return resource.getResponseField('Hosts') as unknown as shapes.CodeStarconnectionsHost[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listHosts',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.ListHosts.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListHosts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeStarconnectionsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.CodeStarconnectionsListTagsForResourceInput) {
  }

  public get tags(): shapes.CodeStarconnectionsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'CodeStarconnections',
        physicalResourceId: cr.PhysicalResourceId.of('CodeStarconnections.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.CodeStarconnectionsTag[];
  }

}

