import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class TransferClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createServer(input: shapes.TransferCreateServerRequest): TransferCreateServer {
    return new TransferCreateServer(this, 'CreateServer', this.__resources, input);
  }

  public createUser(input: shapes.TransferCreateUserRequest): TransferCreateUser {
    return new TransferCreateUser(this, 'CreateUser', this.__resources, input);
  }

  public deleteServer(input: shapes.TransferDeleteServerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DeleteServer'),
        parameters: {
          ServerId: input.serverId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteServer', props);
  }

  public deleteSshPublicKey(input: shapes.TransferDeleteSshPublicKeyRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSshPublicKey',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DeleteSshPublicKey'),
        parameters: {
          ServerId: input.serverId,
          SshPublicKeyId: input.sshPublicKeyId,
          UserName: input.userName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSshPublicKey', props);
  }

  public deleteUser(input: shapes.TransferDeleteUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DeleteUser'),
        parameters: {
          ServerId: input.serverId,
          UserName: input.userName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUser', props);
  }

  public describeSecurityPolicy(input: shapes.TransferDescribeSecurityPolicyRequest): TransferDescribeSecurityPolicy {
    return new TransferDescribeSecurityPolicy(this, 'DescribeSecurityPolicy', this.__resources, input);
  }

  public describeServer(input: shapes.TransferDescribeServerRequest): TransferDescribeServer {
    return new TransferDescribeServer(this, 'DescribeServer', this.__resources, input);
  }

  public describeUser(input: shapes.TransferDescribeUserRequest): TransferDescribeUser {
    return new TransferDescribeUser(this, 'DescribeUser', this.__resources, input);
  }

  public importSshPublicKey(input: shapes.TransferImportSshPublicKeyRequest): TransferImportSshPublicKey {
    return new TransferImportSshPublicKey(this, 'ImportSshPublicKey', this.__resources, input);
  }

  public listSecurityPolicies(input: shapes.TransferListSecurityPoliciesRequest): TransferListSecurityPolicies {
    return new TransferListSecurityPolicies(this, 'ListSecurityPolicies', this.__resources, input);
  }

  public listServers(input: shapes.TransferListServersRequest): TransferListServers {
    return new TransferListServers(this, 'ListServers', this.__resources, input);
  }

  public listTagsForResource(input: shapes.TransferListTagsForResourceRequest): TransferListTagsForResource {
    return new TransferListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listUsers(input: shapes.TransferListUsersRequest): TransferListUsers {
    return new TransferListUsers(this, 'ListUsers', this.__resources, input);
  }

  public startServer(input: shapes.TransferStartServerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.StartServer'),
        parameters: {
          ServerId: input.serverId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartServer', props);
  }

  public stopServer(input: shapes.TransferStopServerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.StopServer'),
        parameters: {
          ServerId: input.serverId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopServer', props);
  }

  public tagResource(input: shapes.TransferTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.TagResource'),
        parameters: {
          Arn: input.arn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public testIdentityProvider(input: shapes.TransferTestIdentityProviderRequest): TransferTestIdentityProvider {
    return new TransferTestIdentityProvider(this, 'TestIdentityProvider', this.__resources, input);
  }

  public untagResource(input: shapes.TransferUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.UntagResource'),
        parameters: {
          Arn: input.arn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateServer(input: shapes.TransferUpdateServerRequest): TransferUpdateServer {
    return new TransferUpdateServer(this, 'UpdateServer', this.__resources, input);
  }

  public updateUser(input: shapes.TransferUpdateUserRequest): TransferUpdateUser {
    return new TransferUpdateUser(this, 'UpdateUser', this.__resources, input);
  }

}

export class TransferCreateServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferCreateServerRequest) {
    super(scope, id);
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.CreateServer.ServerId'),
        outputPath: 'ServerId',
        parameters: {
          Certificate: this.input.certificate,
          EndpointDetails: {
            AddressAllocationIds: this.input.endpointDetails?.addressAllocationIds,
            SubnetIds: this.input.endpointDetails?.subnetIds,
            VpcEndpointId: this.input.endpointDetails?.vpcEndpointId,
            VpcId: this.input.endpointDetails?.vpcId,
            SecurityGroupIds: this.input.endpointDetails?.securityGroupIds,
          },
          EndpointType: this.input.endpointType,
          HostKey: this.input.hostKey,
          IdentityProviderDetails: {
            Url: this.input.identityProviderDetails?.url,
            InvocationRole: this.input.identityProviderDetails?.invocationRole,
          },
          IdentityProviderType: this.input.identityProviderType,
          LoggingRole: this.input.loggingRole,
          Protocols: this.input.protocols,
          SecurityPolicyName: this.input.securityPolicyName,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateServer.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

}

export class TransferCreateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferCreateUserRequest) {
    super(scope, id);
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.CreateUser.ServerId'),
        outputPath: 'ServerId',
        parameters: {
          HomeDirectory: this.input.homeDirectory,
          HomeDirectoryType: this.input.homeDirectoryType,
          HomeDirectoryMappings: this.input.homeDirectoryMappings,
          Policy: this.input.policy,
          Role: this.input.role,
          ServerId: this.input.serverId,
          SshPublicKeyBody: this.input.sshPublicKeyBody,
          Tags: this.input.tags,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.CreateUser.UserName'),
        outputPath: 'UserName',
        parameters: {
          HomeDirectory: this.input.homeDirectory,
          HomeDirectoryType: this.input.homeDirectoryType,
          HomeDirectoryMappings: this.input.homeDirectoryMappings,
          Policy: this.input.policy,
          Role: this.input.role,
          ServerId: this.input.serverId,
          SshPublicKeyBody: this.input.sshPublicKeyBody,
          Tags: this.input.tags,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

}

export class TransferDescribeSecurityPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferDescribeSecurityPolicyRequest) {
    super(scope, id);
  }

  public get securityPolicy(): TransferDescribeSecurityPolicySecurityPolicy {
    return new TransferDescribeSecurityPolicySecurityPolicy(this, 'SecurityPolicy', this.__resources, this.input);
  }

}

export class TransferDescribeSecurityPolicySecurityPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferDescribeSecurityPolicyRequest) {
    super(scope, id);
  }

  public get fips(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityPolicy',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeSecurityPolicy.SecurityPolicy.Fips'),
        outputPath: 'SecurityPolicy.Fips',
        parameters: {
          SecurityPolicyName: this.input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityPolicy.SecurityPolicy.Fips', props);
    return resource.getResponseField('SecurityPolicy.Fips') as unknown as boolean;
  }

  public get securityPolicyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityPolicy',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeSecurityPolicy.SecurityPolicy.SecurityPolicyName'),
        outputPath: 'SecurityPolicy.SecurityPolicyName',
        parameters: {
          SecurityPolicyName: this.input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityPolicy.SecurityPolicy.SecurityPolicyName', props);
    return resource.getResponseField('SecurityPolicy.SecurityPolicyName') as unknown as string;
  }

  public get sshCiphers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityPolicy',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeSecurityPolicy.SecurityPolicy.SshCiphers'),
        outputPath: 'SecurityPolicy.SshCiphers',
        parameters: {
          SecurityPolicyName: this.input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityPolicy.SecurityPolicy.SshCiphers', props);
    return resource.getResponseField('SecurityPolicy.SshCiphers') as unknown as string[];
  }

  public get sshKexs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityPolicy',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeSecurityPolicy.SecurityPolicy.SshKexs'),
        outputPath: 'SecurityPolicy.SshKexs',
        parameters: {
          SecurityPolicyName: this.input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityPolicy.SecurityPolicy.SshKexs', props);
    return resource.getResponseField('SecurityPolicy.SshKexs') as unknown as string[];
  }

  public get sshMacs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityPolicy',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeSecurityPolicy.SecurityPolicy.SshMacs'),
        outputPath: 'SecurityPolicy.SshMacs',
        parameters: {
          SecurityPolicyName: this.input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityPolicy.SecurityPolicy.SshMacs', props);
    return resource.getResponseField('SecurityPolicy.SshMacs') as unknown as string[];
  }

  public get tlsCiphers(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSecurityPolicy',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeSecurityPolicy.SecurityPolicy.TlsCiphers'),
        outputPath: 'SecurityPolicy.TlsCiphers',
        parameters: {
          SecurityPolicyName: this.input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSecurityPolicy.SecurityPolicy.TlsCiphers', props);
    return resource.getResponseField('SecurityPolicy.TlsCiphers') as unknown as string[];
  }

}

export class TransferDescribeServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferDescribeServerRequest) {
    super(scope, id);
  }

  public get server(): TransferDescribeServerServer {
    return new TransferDescribeServerServer(this, 'Server', this.__resources, this.input);
  }

}

export class TransferDescribeServerServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferDescribeServerRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.Arn'),
        outputPath: 'Server.Arn',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.Arn', props);
    return resource.getResponseField('Server.Arn') as unknown as string;
  }

  public get certificate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.Certificate'),
        outputPath: 'Server.Certificate',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.Certificate', props);
    return resource.getResponseField('Server.Certificate') as unknown as string;
  }

  public get endpointDetails(): TransferDescribeServerServerEndpointDetails {
    return new TransferDescribeServerServerEndpointDetails(this, 'EndpointDetails', this.__resources, this.input);
  }

  public get endpointType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.EndpointType'),
        outputPath: 'Server.EndpointType',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.EndpointType', props);
    return resource.getResponseField('Server.EndpointType') as unknown as string;
  }

  public get hostKeyFingerprint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.HostKeyFingerprint'),
        outputPath: 'Server.HostKeyFingerprint',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.HostKeyFingerprint', props);
    return resource.getResponseField('Server.HostKeyFingerprint') as unknown as string;
  }

  public get identityProviderDetails(): TransferDescribeServerServerIdentityProviderDetails {
    return new TransferDescribeServerServerIdentityProviderDetails(this, 'IdentityProviderDetails', this.__resources, this.input);
  }

  public get identityProviderType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.IdentityProviderType'),
        outputPath: 'Server.IdentityProviderType',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.IdentityProviderType', props);
    return resource.getResponseField('Server.IdentityProviderType') as unknown as string;
  }

  public get loggingRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.LoggingRole'),
        outputPath: 'Server.LoggingRole',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.LoggingRole', props);
    return resource.getResponseField('Server.LoggingRole') as unknown as string;
  }

  public get protocols(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.Protocols'),
        outputPath: 'Server.Protocols',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.Protocols', props);
    return resource.getResponseField('Server.Protocols') as unknown as string[];
  }

  public get securityPolicyName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.SecurityPolicyName'),
        outputPath: 'Server.SecurityPolicyName',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.SecurityPolicyName', props);
    return resource.getResponseField('Server.SecurityPolicyName') as unknown as string;
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.ServerId'),
        outputPath: 'Server.ServerId',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.ServerId', props);
    return resource.getResponseField('Server.ServerId') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.State'),
        outputPath: 'Server.State',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.State', props);
    return resource.getResponseField('Server.State') as unknown as string;
  }

  public get tags(): shapes.TransferTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.Tags'),
        outputPath: 'Server.Tags',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.Tags', props);
    return resource.getResponseField('Server.Tags') as unknown as shapes.TransferTag[];
  }

  public get userCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.UserCount'),
        outputPath: 'Server.UserCount',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.UserCount', props);
    return resource.getResponseField('Server.UserCount') as unknown as number;
  }

}

export class TransferDescribeServerServerEndpointDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferDescribeServerRequest) {
    super(scope, id);
  }

  public get addressAllocationIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.EndpointDetails.AddressAllocationIds'),
        outputPath: 'Server.EndpointDetails.AddressAllocationIds',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.EndpointDetails.AddressAllocationIds', props);
    return resource.getResponseField('Server.EndpointDetails.AddressAllocationIds') as unknown as string[];
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.EndpointDetails.SubnetIds'),
        outputPath: 'Server.EndpointDetails.SubnetIds',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.EndpointDetails.SubnetIds', props);
    return resource.getResponseField('Server.EndpointDetails.SubnetIds') as unknown as string[];
  }

  public get vpcEndpointId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.EndpointDetails.VpcEndpointId'),
        outputPath: 'Server.EndpointDetails.VpcEndpointId',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.EndpointDetails.VpcEndpointId', props);
    return resource.getResponseField('Server.EndpointDetails.VpcEndpointId') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.EndpointDetails.VpcId'),
        outputPath: 'Server.EndpointDetails.VpcId',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.EndpointDetails.VpcId', props);
    return resource.getResponseField('Server.EndpointDetails.VpcId') as unknown as string;
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.EndpointDetails.SecurityGroupIds'),
        outputPath: 'Server.EndpointDetails.SecurityGroupIds',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.EndpointDetails.SecurityGroupIds', props);
    return resource.getResponseField('Server.EndpointDetails.SecurityGroupIds') as unknown as string[];
  }

}

export class TransferDescribeServerServerIdentityProviderDetails extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferDescribeServerRequest) {
    super(scope, id);
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.IdentityProviderDetails.Url'),
        outputPath: 'Server.IdentityProviderDetails.Url',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.IdentityProviderDetails.Url', props);
    return resource.getResponseField('Server.IdentityProviderDetails.Url') as unknown as string;
  }

  public get invocationRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.IdentityProviderDetails.InvocationRole'),
        outputPath: 'Server.IdentityProviderDetails.InvocationRole',
        parameters: {
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServer.Server.IdentityProviderDetails.InvocationRole', props);
    return resource.getResponseField('Server.IdentityProviderDetails.InvocationRole') as unknown as string;
  }

}

export class TransferDescribeUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferDescribeUserRequest) {
    super(scope, id);
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.ServerId'),
        outputPath: 'ServerId',
        parameters: {
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

  public get user(): TransferDescribeUserUser {
    return new TransferDescribeUserUser(this, 'User', this.__resources, this.input);
  }

}

export class TransferDescribeUserUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferDescribeUserRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.Arn'),
        outputPath: 'User.Arn',
        parameters: {
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Arn', props);
    return resource.getResponseField('User.Arn') as unknown as string;
  }

  public get homeDirectory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.HomeDirectory'),
        outputPath: 'User.HomeDirectory',
        parameters: {
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.HomeDirectory', props);
    return resource.getResponseField('User.HomeDirectory') as unknown as string;
  }

  public get homeDirectoryMappings(): shapes.TransferHomeDirectoryMapEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.HomeDirectoryMappings'),
        outputPath: 'User.HomeDirectoryMappings',
        parameters: {
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.HomeDirectoryMappings', props);
    return resource.getResponseField('User.HomeDirectoryMappings') as unknown as shapes.TransferHomeDirectoryMapEntry[];
  }

  public get homeDirectoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.HomeDirectoryType'),
        outputPath: 'User.HomeDirectoryType',
        parameters: {
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.HomeDirectoryType', props);
    return resource.getResponseField('User.HomeDirectoryType') as unknown as string;
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.Policy'),
        outputPath: 'User.Policy',
        parameters: {
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Policy', props);
    return resource.getResponseField('User.Policy') as unknown as string;
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.Role'),
        outputPath: 'User.Role',
        parameters: {
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Role', props);
    return resource.getResponseField('User.Role') as unknown as string;
  }

  public get sshPublicKeys(): shapes.TransferSshPublicKey[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.SshPublicKeys'),
        outputPath: 'User.SshPublicKeys',
        parameters: {
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.SshPublicKeys', props);
    return resource.getResponseField('User.SshPublicKeys') as unknown as shapes.TransferSshPublicKey[];
  }

  public get tags(): shapes.TransferTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.Tags'),
        outputPath: 'User.Tags',
        parameters: {
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.Tags', props);
    return resource.getResponseField('User.Tags') as unknown as shapes.TransferTag[];
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.UserName'),
        outputPath: 'User.UserName',
        parameters: {
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.User.UserName', props);
    return resource.getResponseField('User.UserName') as unknown as string;
  }

}

export class TransferImportSshPublicKey extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferImportSshPublicKeyRequest) {
    super(scope, id);
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importSshPublicKey',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ImportSshPublicKey.ServerId'),
        outputPath: 'ServerId',
        parameters: {
          ServerId: this.input.serverId,
          SshPublicKeyBody: this.input.sshPublicKeyBody,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportSshPublicKey.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

  public get sshPublicKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importSshPublicKey',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ImportSshPublicKey.SshPublicKeyId'),
        outputPath: 'SshPublicKeyId',
        parameters: {
          ServerId: this.input.serverId,
          SshPublicKeyBody: this.input.sshPublicKeyBody,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportSshPublicKey.SshPublicKeyId', props);
    return resource.getResponseField('SshPublicKeyId') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importSshPublicKey',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ImportSshPublicKey.UserName'),
        outputPath: 'UserName',
        parameters: {
          ServerId: this.input.serverId,
          SshPublicKeyBody: this.input.sshPublicKeyBody,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportSshPublicKey.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

}

export class TransferListSecurityPolicies extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferListSecurityPoliciesRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecurityPolicies',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListSecurityPolicies.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecurityPolicies.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get securityPolicyNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSecurityPolicies',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListSecurityPolicies.SecurityPolicyNames'),
        outputPath: 'SecurityPolicyNames',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSecurityPolicies.SecurityPolicyNames', props);
    return resource.getResponseField('SecurityPolicyNames') as unknown as string[];
  }

}

export class TransferListServers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferListServersRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServers',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListServers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get servers(): shapes.TransferListedServer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listServers',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListServers.Servers'),
        outputPath: 'Servers',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListServers.Servers', props);
    return resource.getResponseField('Servers') as unknown as shapes.TransferListedServer[];
  }

}

export class TransferListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferListTagsForResourceRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListTagsForResource.Arn'),
        outputPath: 'Arn',
        parameters: {
          Arn: this.input.arn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Arn: this.input.arn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get tags(): shapes.TransferTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          Arn: this.input.arn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.TransferTag[];
  }

}

export class TransferListUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferListUsersRequest) {
    super(scope, id);
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListUsers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListUsers.ServerId'),
        outputPath: 'ServerId',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

  public get users(): shapes.TransferListedUser[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListUsers.Users'),
        outputPath: 'Users',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.TransferListedUser[];
  }

}

export class TransferTestIdentityProvider extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferTestIdentityProviderRequest) {
    super(scope, id);
  }

  public get response(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testIdentityProvider',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.TestIdentityProvider.Response'),
        outputPath: 'Response',
        parameters: {
          ServerId: this.input.serverId,
          ServerProtocol: this.input.serverProtocol,
          SourceIp: this.input.sourceIp,
          UserName: this.input.userName,
          UserPassword: this.input.userPassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestIdentityProvider.Response', props);
    return resource.getResponseField('Response') as unknown as string;
  }

  public get statusCode(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testIdentityProvider',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.TestIdentityProvider.StatusCode'),
        outputPath: 'StatusCode',
        parameters: {
          ServerId: this.input.serverId,
          ServerProtocol: this.input.serverProtocol,
          SourceIp: this.input.sourceIp,
          UserName: this.input.userName,
          UserPassword: this.input.userPassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestIdentityProvider.StatusCode', props);
    return resource.getResponseField('StatusCode') as unknown as number;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testIdentityProvider',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.TestIdentityProvider.Message'),
        outputPath: 'Message',
        parameters: {
          ServerId: this.input.serverId,
          ServerProtocol: this.input.serverProtocol,
          SourceIp: this.input.sourceIp,
          UserName: this.input.userName,
          UserPassword: this.input.userPassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestIdentityProvider.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testIdentityProvider',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.TestIdentityProvider.Url'),
        outputPath: 'Url',
        parameters: {
          ServerId: this.input.serverId,
          ServerProtocol: this.input.serverProtocol,
          SourceIp: this.input.sourceIp,
          UserName: this.input.userName,
          UserPassword: this.input.userPassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestIdentityProvider.Url', props);
    return resource.getResponseField('Url') as unknown as string;
  }

}

export class TransferUpdateServer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferUpdateServerRequest) {
    super(scope, id);
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.UpdateServer.ServerId'),
        outputPath: 'ServerId',
        parameters: {
          Certificate: this.input.certificate,
          EndpointDetails: {
            AddressAllocationIds: this.input.endpointDetails?.addressAllocationIds,
            SubnetIds: this.input.endpointDetails?.subnetIds,
            VpcEndpointId: this.input.endpointDetails?.vpcEndpointId,
            VpcId: this.input.endpointDetails?.vpcId,
            SecurityGroupIds: this.input.endpointDetails?.securityGroupIds,
          },
          EndpointType: this.input.endpointType,
          HostKey: this.input.hostKey,
          IdentityProviderDetails: {
            Url: this.input.identityProviderDetails?.url,
            InvocationRole: this.input.identityProviderDetails?.invocationRole,
          },
          LoggingRole: this.input.loggingRole,
          Protocols: this.input.protocols,
          SecurityPolicyName: this.input.securityPolicyName,
          ServerId: this.input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateServer.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

}

export class TransferUpdateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.TransferUpdateUserRequest) {
    super(scope, id);
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.UpdateUser.ServerId'),
        outputPath: 'ServerId',
        parameters: {
          HomeDirectory: this.input.homeDirectory,
          HomeDirectoryType: this.input.homeDirectoryType,
          HomeDirectoryMappings: this.input.homeDirectoryMappings,
          Policy: this.input.policy,
          Role: this.input.role,
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.UpdateUser.UserName'),
        outputPath: 'UserName',
        parameters: {
          HomeDirectory: this.input.homeDirectory,
          HomeDirectoryType: this.input.homeDirectoryType,
          HomeDirectoryMappings: this.input.homeDirectoryMappings,
          Policy: this.input.policy,
          Role: this.input.role,
          ServerId: this.input.serverId,
          UserName: this.input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateUser.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

}

