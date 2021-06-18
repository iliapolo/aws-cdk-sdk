import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class CodeStarconnectionsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createConnection(input: shapes.CodeStarconnectionsCreateConnectionInput): CodeStarconnectionsCreateConnection {
    return new CodeStarconnectionsCreateConnection(this, 'CreateConnection', this.__resources, input);
  }

  public createHost(input: shapes.CodeStarconnectionsCreateHostInput): CodeStarconnectionsCreateHost {
    return new CodeStarconnectionsCreateHost(this, 'CreateHost', this.__resources, input);
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

  public fetchConnection(input: shapes.CodeStarconnectionsGetConnectionInput): CodeStarconnectionsFetchConnection {
    return new CodeStarconnectionsFetchConnection(this, 'FetchConnection', this.__resources, input);
  }

  public fetchHost(input: shapes.CodeStarconnectionsGetHostInput): CodeStarconnectionsFetchHost {
    return new CodeStarconnectionsFetchHost(this, 'FetchHost', this.__resources, input);
  }

  public listConnections(input: shapes.CodeStarconnectionsListConnectionsInput): CodeStarconnectionsListConnections {
    return new CodeStarconnectionsListConnections(this, 'ListConnections', this.__resources, input);
  }

  public listHosts(input: shapes.CodeStarconnectionsListHostsInput): CodeStarconnectionsListHosts {
    return new CodeStarconnectionsListHosts(this, 'ListHosts', this.__resources, input);
  }

  public listTagsForResource(input: shapes.CodeStarconnectionsListTagsForResourceInput): CodeStarconnectionsListTagsForResource {
    return new CodeStarconnectionsListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

export class CodeStarconnectionsCreateConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarconnectionsCreateConnectionInput) {
    super(scope, id);
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
          ProviderType: this.input.providerType,
          ConnectionName: this.input.connectionName,
          Tags: this.input.tags,
          HostArn: this.input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.ConnectionArn', props);
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
          ProviderType: this.input.providerType,
          ConnectionName: this.input.connectionName,
          Tags: this.input.tags,
          HostArn: this.input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnection.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.CodeStarconnectionsTag[];
  }

}

export class CodeStarconnectionsCreateHost extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarconnectionsCreateHostInput) {
    super(scope, id);
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
          Name: this.input.name,
          ProviderType: this.input.providerType,
          ProviderEndpoint: this.input.providerEndpoint,
          VpcConfiguration: {
            VpcId: this.input.vpcConfiguration?.vpcId,
            SubnetIds: this.input.vpcConfiguration?.subnetIds,
            SecurityGroupIds: this.input.vpcConfiguration?.securityGroupIds,
            TlsCertificate: this.input.vpcConfiguration?.tlsCertificate,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateHost.HostArn', props);
    return resource.getResponseField('HostArn') as unknown as string;
  }

}

export class CodeStarconnectionsFetchConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarconnectionsGetConnectionInput) {
    super(scope, id);
  }

  public get connection(): CodeStarconnectionsFetchConnectionConnection {
    return new CodeStarconnectionsFetchConnectionConnection(this, 'Connection', this.__resources, this.input);
  }

}

export class CodeStarconnectionsFetchConnectionConnection extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarconnectionsGetConnectionInput) {
    super(scope, id);
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
          ConnectionArn: this.input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.ConnectionName', props);
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
          ConnectionArn: this.input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.ConnectionArn', props);
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
          ConnectionArn: this.input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.ProviderType', props);
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
          ConnectionArn: this.input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.OwnerAccountId', props);
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
          ConnectionArn: this.input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.ConnectionStatus', props);
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
          ConnectionArn: this.input.connectionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetConnection.Connection.HostArn', props);
    return resource.getResponseField('Connection.HostArn') as unknown as string;
  }

}

export class CodeStarconnectionsFetchHost extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarconnectionsGetHostInput) {
    super(scope, id);
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
          HostArn: this.input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHost.Name', props);
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
          HostArn: this.input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHost.Status', props);
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
          HostArn: this.input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHost.ProviderType', props);
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
          HostArn: this.input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHost.ProviderEndpoint', props);
    return resource.getResponseField('ProviderEndpoint') as unknown as string;
  }

  public get vpcConfiguration(): CodeStarconnectionsFetchHostVpcConfiguration {
    return new CodeStarconnectionsFetchHostVpcConfiguration(this, 'VpcConfiguration', this.__resources, this.input);
  }

}

export class CodeStarconnectionsFetchHostVpcConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarconnectionsGetHostInput) {
    super(scope, id);
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
          HostArn: this.input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHost.VpcConfiguration.VpcId', props);
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
          HostArn: this.input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHost.VpcConfiguration.SubnetIds', props);
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
          HostArn: this.input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHost.VpcConfiguration.SecurityGroupIds', props);
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
          HostArn: this.input.hostArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHost.VpcConfiguration.TlsCertificate', props);
    return resource.getResponseField('VpcConfiguration.TlsCertificate') as unknown as string;
  }

}

export class CodeStarconnectionsListConnections extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarconnectionsListConnectionsInput) {
    super(scope, id);
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
          ProviderTypeFilter: this.input.providerTypeFilter,
          HostArnFilter: this.input.hostArnFilter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConnections.Connections', props);
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
          ProviderTypeFilter: this.input.providerTypeFilter,
          HostArnFilter: this.input.hostArnFilter,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConnections.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeStarconnectionsListHosts extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarconnectionsListHostsInput) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHosts.Hosts', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListHosts.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class CodeStarconnectionsListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.CodeStarconnectionsListTagsForResourceInput) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.CodeStarconnectionsTag[];
  }

}

