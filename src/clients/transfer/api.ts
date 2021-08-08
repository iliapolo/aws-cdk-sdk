import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class TransferClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createAccess(input: shapes.TransferCreateAccessRequest): TransferResponsesCreateAccess {
    return new TransferResponsesCreateAccess(this, this.__resources, input);
  }

  public createServer(input: shapes.TransferCreateServerRequest): TransferResponsesCreateServer {
    return new TransferResponsesCreateServer(this, this.__resources, input);
  }

  public createUser(input: shapes.TransferCreateUserRequest): TransferResponsesCreateUser {
    return new TransferResponsesCreateUser(this, this.__resources, input);
  }

  public deleteAccess(input: shapes.TransferDeleteAccessRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DeleteAccess'),
        parameters: {
          ServerId: input.serverId,
          ExternalId: input.externalId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAccess', props);
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

  public describeAccess(input: shapes.TransferDescribeAccessRequest): TransferResponsesDescribeAccess {
    return new TransferResponsesDescribeAccess(this, this.__resources, input);
  }

  public describeSecurityPolicy(input: shapes.TransferDescribeSecurityPolicyRequest): TransferResponsesDescribeSecurityPolicy {
    return new TransferResponsesDescribeSecurityPolicy(this, this.__resources, input);
  }

  public describeServer(input: shapes.TransferDescribeServerRequest): TransferResponsesDescribeServer {
    return new TransferResponsesDescribeServer(this, this.__resources, input);
  }

  public describeUser(input: shapes.TransferDescribeUserRequest): TransferResponsesDescribeUser {
    return new TransferResponsesDescribeUser(this, this.__resources, input);
  }

  public importSshPublicKey(input: shapes.TransferImportSshPublicKeyRequest): TransferResponsesImportSshPublicKey {
    return new TransferResponsesImportSshPublicKey(this, this.__resources, input);
  }

  public listAccesses(input: shapes.TransferListAccessesRequest): TransferResponsesListAccesses {
    return new TransferResponsesListAccesses(this, this.__resources, input);
  }

  public listSecurityPolicies(input: shapes.TransferListSecurityPoliciesRequest): TransferResponsesListSecurityPolicies {
    return new TransferResponsesListSecurityPolicies(this, this.__resources, input);
  }

  public listServers(input: shapes.TransferListServersRequest): TransferResponsesListServers {
    return new TransferResponsesListServers(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.TransferListTagsForResourceRequest): TransferResponsesListTagsForResource {
    return new TransferResponsesListTagsForResource(this, this.__resources, input);
  }

  public listUsers(input: shapes.TransferListUsersRequest): TransferResponsesListUsers {
    return new TransferResponsesListUsers(this, this.__resources, input);
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

  public testIdentityProvider(input: shapes.TransferTestIdentityProviderRequest): TransferResponsesTestIdentityProvider {
    return new TransferResponsesTestIdentityProvider(this, this.__resources, input);
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

  public updateAccess(input: shapes.TransferUpdateAccessRequest): TransferResponsesUpdateAccess {
    return new TransferResponsesUpdateAccess(this, this.__resources, input);
  }

  public updateServer(input: shapes.TransferUpdateServerRequest): TransferResponsesUpdateServer {
    return new TransferResponsesUpdateServer(this, this.__resources, input);
  }

  public updateUser(input: shapes.TransferUpdateUserRequest): TransferResponsesUpdateUser {
    return new TransferResponsesUpdateUser(this, this.__resources, input);
  }

}

export class TransferResponsesCreateAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferCreateAccessRequest) {
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.CreateAccess.ServerId'),
        outputPath: 'ServerId',
        parameters: {
          HomeDirectory: this.__input.homeDirectory,
          HomeDirectoryType: this.__input.homeDirectoryType,
          HomeDirectoryMappings: this.__input.homeDirectoryMappings,
          Policy: this.__input.policy,
          PosixProfile: {
            Uid: this.__input.posixProfile?.uid,
            Gid: this.__input.posixProfile?.gid,
            SecondaryGids: this.__input.posixProfile?.secondaryGids,
          },
          Role: this.__input.role,
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccess.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

  public get externalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.CreateAccess.ExternalId'),
        outputPath: 'ExternalId',
        parameters: {
          HomeDirectory: this.__input.homeDirectory,
          HomeDirectoryType: this.__input.homeDirectoryType,
          HomeDirectoryMappings: this.__input.homeDirectoryMappings,
          Policy: this.__input.policy,
          PosixProfile: {
            Uid: this.__input.posixProfile?.uid,
            Gid: this.__input.posixProfile?.gid,
            SecondaryGids: this.__input.posixProfile?.secondaryGids,
          },
          Role: this.__input.role,
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAccess.ExternalId', props);
    return resource.getResponseField('ExternalId') as unknown as string;
  }

}

export class TransferResponsesCreateServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferCreateServerRequest) {
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
          Certificate: this.__input.certificate,
          Domain: this.__input.domain,
          EndpointDetails: {
            AddressAllocationIds: this.__input.endpointDetails?.addressAllocationIds,
            SubnetIds: this.__input.endpointDetails?.subnetIds,
            VpcEndpointId: this.__input.endpointDetails?.vpcEndpointId,
            VpcId: this.__input.endpointDetails?.vpcId,
            SecurityGroupIds: this.__input.endpointDetails?.securityGroupIds,
          },
          EndpointType: this.__input.endpointType,
          HostKey: this.__input.hostKey,
          IdentityProviderDetails: {
            Url: this.__input.identityProviderDetails?.url,
            InvocationRole: this.__input.identityProviderDetails?.invocationRole,
            DirectoryId: this.__input.identityProviderDetails?.directoryId,
          },
          IdentityProviderType: this.__input.identityProviderType,
          LoggingRole: this.__input.loggingRole,
          Protocols: this.__input.protocols,
          SecurityPolicyName: this.__input.securityPolicyName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateServer.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

}

export class TransferResponsesCreateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferCreateUserRequest) {
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
          HomeDirectory: this.__input.homeDirectory,
          HomeDirectoryType: this.__input.homeDirectoryType,
          HomeDirectoryMappings: this.__input.homeDirectoryMappings,
          Policy: this.__input.policy,
          PosixProfile: {
            Uid: this.__input.posixProfile?.uid,
            Gid: this.__input.posixProfile?.gid,
            SecondaryGids: this.__input.posixProfile?.secondaryGids,
          },
          Role: this.__input.role,
          ServerId: this.__input.serverId,
          SshPublicKeyBody: this.__input.sshPublicKeyBody,
          Tags: this.__input.tags,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.ServerId', props);
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
          HomeDirectory: this.__input.homeDirectory,
          HomeDirectoryType: this.__input.homeDirectoryType,
          HomeDirectoryMappings: this.__input.homeDirectoryMappings,
          Policy: this.__input.policy,
          PosixProfile: {
            Uid: this.__input.posixProfile?.uid,
            Gid: this.__input.posixProfile?.gid,
            SecondaryGids: this.__input.posixProfile?.secondaryGids,
          },
          Role: this.__input.role,
          ServerId: this.__input.serverId,
          SshPublicKeyBody: this.__input.sshPublicKeyBody,
          Tags: this.__input.tags,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

}

export class TransferResponsesDescribeAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeAccessRequest) {
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeAccess.ServerId'),
        outputPath: 'ServerId',
        parameters: {
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccess.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

  public get access(): TransferResponsesDescribeAccessAccess {
    return new TransferResponsesDescribeAccessAccess(this.__scope, this.__resources, this.__input);
  }

}

export class TransferResponsesDescribeAccessAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeAccessRequest) {
  }

  public get homeDirectory(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeAccess.Access.HomeDirectory'),
        outputPath: 'Access.HomeDirectory',
        parameters: {
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccess.Access.HomeDirectory', props);
    return resource.getResponseField('Access.HomeDirectory') as unknown as string;
  }

  public get homeDirectoryMappings(): shapes.TransferHomeDirectoryMapEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeAccess.Access.HomeDirectoryMappings'),
        outputPath: 'Access.HomeDirectoryMappings',
        parameters: {
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccess.Access.HomeDirectoryMappings', props);
    return resource.getResponseField('Access.HomeDirectoryMappings') as unknown as shapes.TransferHomeDirectoryMapEntry[];
  }

  public get homeDirectoryType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeAccess.Access.HomeDirectoryType'),
        outputPath: 'Access.HomeDirectoryType',
        parameters: {
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccess.Access.HomeDirectoryType', props);
    return resource.getResponseField('Access.HomeDirectoryType') as unknown as string;
  }

  public get policy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeAccess.Access.Policy'),
        outputPath: 'Access.Policy',
        parameters: {
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccess.Access.Policy', props);
    return resource.getResponseField('Access.Policy') as unknown as string;
  }

  public get posixProfile(): TransferResponsesDescribeAccessAccessPosixProfile {
    return new TransferResponsesDescribeAccessAccessPosixProfile(this.__scope, this.__resources, this.__input);
  }

  public get role(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeAccess.Access.Role'),
        outputPath: 'Access.Role',
        parameters: {
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccess.Access.Role', props);
    return resource.getResponseField('Access.Role') as unknown as string;
  }

  public get externalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeAccess.Access.ExternalId'),
        outputPath: 'Access.ExternalId',
        parameters: {
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccess.Access.ExternalId', props);
    return resource.getResponseField('Access.ExternalId') as unknown as string;
  }

}

export class TransferResponsesDescribeAccessAccessPosixProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeAccessRequest) {
  }

  public get uid(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeAccess.Access.PosixProfile.Uid'),
        outputPath: 'Access.PosixProfile.Uid',
        parameters: {
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccess.Access.PosixProfile.Uid', props);
    return resource.getResponseField('Access.PosixProfile.Uid') as unknown as number;
  }

  public get gid(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeAccess.Access.PosixProfile.Gid'),
        outputPath: 'Access.PosixProfile.Gid',
        parameters: {
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccess.Access.PosixProfile.Gid', props);
    return resource.getResponseField('Access.PosixProfile.Gid') as unknown as number;
  }

  public get secondaryGids(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeAccess.Access.PosixProfile.SecondaryGids'),
        outputPath: 'Access.PosixProfile.SecondaryGids',
        parameters: {
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccess.Access.PosixProfile.SecondaryGids', props);
    return resource.getResponseField('Access.PosixProfile.SecondaryGids') as unknown as number[];
  }

}

export class TransferResponsesDescribeSecurityPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeSecurityPolicyRequest) {
  }

  public get securityPolicy(): TransferResponsesDescribeSecurityPolicySecurityPolicy {
    return new TransferResponsesDescribeSecurityPolicySecurityPolicy(this.__scope, this.__resources, this.__input);
  }

}

export class TransferResponsesDescribeSecurityPolicySecurityPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeSecurityPolicyRequest) {
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
          SecurityPolicyName: this.__input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityPolicy.SecurityPolicy.Fips', props);
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
          SecurityPolicyName: this.__input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityPolicy.SecurityPolicy.SecurityPolicyName', props);
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
          SecurityPolicyName: this.__input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityPolicy.SecurityPolicy.SshCiphers', props);
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
          SecurityPolicyName: this.__input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityPolicy.SecurityPolicy.SshKexs', props);
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
          SecurityPolicyName: this.__input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityPolicy.SecurityPolicy.SshMacs', props);
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
          SecurityPolicyName: this.__input.securityPolicyName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSecurityPolicy.SecurityPolicy.TlsCiphers', props);
    return resource.getResponseField('SecurityPolicy.TlsCiphers') as unknown as string[];
  }

}

export class TransferResponsesDescribeServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeServerRequest) {
  }

  public get server(): TransferResponsesDescribeServerServer {
    return new TransferResponsesDescribeServerServer(this.__scope, this.__resources, this.__input);
  }

}

export class TransferResponsesDescribeServerServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeServerRequest) {
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.Arn', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.Certificate', props);
    return resource.getResponseField('Server.Certificate') as unknown as string;
  }

  public get protocolDetails(): TransferResponsesDescribeServerServerProtocolDetails {
    return new TransferResponsesDescribeServerServerProtocolDetails(this.__scope, this.__resources, this.__input);
  }

  public get domain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.Domain'),
        outputPath: 'Server.Domain',
        parameters: {
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.Domain', props);
    return resource.getResponseField('Server.Domain') as unknown as string;
  }

  public get endpointDetails(): TransferResponsesDescribeServerServerEndpointDetails {
    return new TransferResponsesDescribeServerServerEndpointDetails(this.__scope, this.__resources, this.__input);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.EndpointType', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.HostKeyFingerprint', props);
    return resource.getResponseField('Server.HostKeyFingerprint') as unknown as string;
  }

  public get identityProviderDetails(): TransferResponsesDescribeServerServerIdentityProviderDetails {
    return new TransferResponsesDescribeServerServerIdentityProviderDetails(this.__scope, this.__resources, this.__input);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.IdentityProviderType', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.LoggingRole', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.Protocols', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.SecurityPolicyName', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.ServerId', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.State', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.Tags', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.UserCount', props);
    return resource.getResponseField('Server.UserCount') as unknown as number;
  }

}

export class TransferResponsesDescribeServerServerProtocolDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeServerRequest) {
  }

  public get passiveIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.ProtocolDetails.PassiveIp'),
        outputPath: 'Server.ProtocolDetails.PassiveIp',
        parameters: {
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.ProtocolDetails.PassiveIp', props);
    return resource.getResponseField('Server.ProtocolDetails.PassiveIp') as unknown as string;
  }

}

export class TransferResponsesDescribeServerServerEndpointDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeServerRequest) {
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.EndpointDetails.AddressAllocationIds', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.EndpointDetails.SubnetIds', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.EndpointDetails.VpcEndpointId', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.EndpointDetails.VpcId', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.EndpointDetails.SecurityGroupIds', props);
    return resource.getResponseField('Server.EndpointDetails.SecurityGroupIds') as unknown as string[];
  }

}

export class TransferResponsesDescribeServerServerIdentityProviderDetails {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeServerRequest) {
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.IdentityProviderDetails.Url', props);
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
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.IdentityProviderDetails.InvocationRole', props);
    return resource.getResponseField('Server.IdentityProviderDetails.InvocationRole') as unknown as string;
  }

  public get directoryId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServer',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeServer.Server.IdentityProviderDetails.DirectoryId'),
        outputPath: 'Server.IdentityProviderDetails.DirectoryId',
        parameters: {
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServer.Server.IdentityProviderDetails.DirectoryId', props);
    return resource.getResponseField('Server.IdentityProviderDetails.DirectoryId') as unknown as string;
  }

}

export class TransferResponsesDescribeUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeUserRequest) {
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
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

  public get user(): TransferResponsesDescribeUserUser {
    return new TransferResponsesDescribeUserUser(this.__scope, this.__resources, this.__input);
  }

}

export class TransferResponsesDescribeUserUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeUserRequest) {
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
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Arn', props);
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
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.HomeDirectory', props);
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
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.HomeDirectoryMappings', props);
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
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.HomeDirectoryType', props);
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
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Policy', props);
    return resource.getResponseField('User.Policy') as unknown as string;
  }

  public get posixProfile(): TransferResponsesDescribeUserUserPosixProfile {
    return new TransferResponsesDescribeUserUserPosixProfile(this.__scope, this.__resources, this.__input);
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
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Role', props);
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
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.SshPublicKeys', props);
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
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.Tags', props);
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
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.UserName', props);
    return resource.getResponseField('User.UserName') as unknown as string;
  }

}

export class TransferResponsesDescribeUserUserPosixProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferDescribeUserRequest) {
  }

  public get uid(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.PosixProfile.Uid'),
        outputPath: 'User.PosixProfile.Uid',
        parameters: {
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.PosixProfile.Uid', props);
    return resource.getResponseField('User.PosixProfile.Uid') as unknown as number;
  }

  public get gid(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.PosixProfile.Gid'),
        outputPath: 'User.PosixProfile.Gid',
        parameters: {
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.PosixProfile.Gid', props);
    return resource.getResponseField('User.PosixProfile.Gid') as unknown as number;
  }

  public get secondaryGids(): number[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.DescribeUser.User.PosixProfile.SecondaryGids'),
        outputPath: 'User.PosixProfile.SecondaryGids',
        parameters: {
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.User.PosixProfile.SecondaryGids', props);
    return resource.getResponseField('User.PosixProfile.SecondaryGids') as unknown as number[];
  }

}

export class TransferResponsesImportSshPublicKey {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferImportSshPublicKeyRequest) {
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
          ServerId: this.__input.serverId,
          SshPublicKeyBody: this.__input.sshPublicKeyBody,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportSshPublicKey.ServerId', props);
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
          ServerId: this.__input.serverId,
          SshPublicKeyBody: this.__input.sshPublicKeyBody,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportSshPublicKey.SshPublicKeyId', props);
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
          ServerId: this.__input.serverId,
          SshPublicKeyBody: this.__input.sshPublicKeyBody,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportSshPublicKey.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

}

export class TransferResponsesListAccesses {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferListAccessesRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccesses',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListAccesses.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccesses.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccesses',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListAccesses.ServerId'),
        outputPath: 'ServerId',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccesses.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

  public get accesses(): shapes.TransferListedAccess[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAccesses',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.ListAccesses.Accesses'),
        outputPath: 'Accesses',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAccesses.Accesses', props);
    return resource.getResponseField('Accesses') as unknown as shapes.TransferListedAccess[];
  }

}

export class TransferResponsesListSecurityPolicies {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferListSecurityPoliciesRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecurityPolicies.NextToken', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSecurityPolicies.SecurityPolicyNames', props);
    return resource.getResponseField('SecurityPolicyNames') as unknown as string[];
  }

}

export class TransferResponsesListServers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferListServersRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServers.NextToken', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListServers.Servers', props);
    return resource.getResponseField('Servers') as unknown as shapes.TransferListedServer[];
  }

}

export class TransferResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferListTagsForResourceRequest) {
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
          Arn: this.__input.arn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Arn', props);
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
          Arn: this.__input.arn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
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
          Arn: this.__input.arn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.TransferTag[];
  }

}

export class TransferResponsesListUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferListUsersRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.NextToken', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.ServerId', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.TransferListedUser[];
  }

}

export class TransferResponsesTestIdentityProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferTestIdentityProviderRequest) {
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
          ServerId: this.__input.serverId,
          ServerProtocol: this.__input.serverProtocol,
          SourceIp: this.__input.sourceIp,
          UserName: this.__input.userName,
          UserPassword: this.__input.userPassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestIdentityProvider.Response', props);
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
          ServerId: this.__input.serverId,
          ServerProtocol: this.__input.serverProtocol,
          SourceIp: this.__input.sourceIp,
          UserName: this.__input.userName,
          UserPassword: this.__input.userPassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestIdentityProvider.StatusCode', props);
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
          ServerId: this.__input.serverId,
          ServerProtocol: this.__input.serverProtocol,
          SourceIp: this.__input.sourceIp,
          UserName: this.__input.userName,
          UserPassword: this.__input.userPassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestIdentityProvider.Message', props);
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
          ServerId: this.__input.serverId,
          ServerProtocol: this.__input.serverProtocol,
          SourceIp: this.__input.sourceIp,
          UserName: this.__input.userName,
          UserPassword: this.__input.userPassword,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestIdentityProvider.Url', props);
    return resource.getResponseField('Url') as unknown as string;
  }

}

export class TransferResponsesUpdateAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferUpdateAccessRequest) {
  }

  public get serverId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.UpdateAccess.ServerId'),
        outputPath: 'ServerId',
        parameters: {
          HomeDirectory: this.__input.homeDirectory,
          HomeDirectoryType: this.__input.homeDirectoryType,
          HomeDirectoryMappings: this.__input.homeDirectoryMappings,
          Policy: this.__input.policy,
          PosixProfile: {
            Uid: this.__input.posixProfile?.uid,
            Gid: this.__input.posixProfile?.gid,
            SecondaryGids: this.__input.posixProfile?.secondaryGids,
          },
          Role: this.__input.role,
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccess.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

  public get externalId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAccess',
        service: 'Transfer',
        physicalResourceId: cr.PhysicalResourceId.of('Transfer.UpdateAccess.ExternalId'),
        outputPath: 'ExternalId',
        parameters: {
          HomeDirectory: this.__input.homeDirectory,
          HomeDirectoryType: this.__input.homeDirectoryType,
          HomeDirectoryMappings: this.__input.homeDirectoryMappings,
          Policy: this.__input.policy,
          PosixProfile: {
            Uid: this.__input.posixProfile?.uid,
            Gid: this.__input.posixProfile?.gid,
            SecondaryGids: this.__input.posixProfile?.secondaryGids,
          },
          Role: this.__input.role,
          ServerId: this.__input.serverId,
          ExternalId: this.__input.externalId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAccess.ExternalId', props);
    return resource.getResponseField('ExternalId') as unknown as string;
  }

}

export class TransferResponsesUpdateServer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferUpdateServerRequest) {
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
          Certificate: this.__input.certificate,
          ProtocolDetails: {
            PassiveIp: this.__input.protocolDetails?.passiveIp,
          },
          EndpointDetails: {
            AddressAllocationIds: this.__input.endpointDetails?.addressAllocationIds,
            SubnetIds: this.__input.endpointDetails?.subnetIds,
            VpcEndpointId: this.__input.endpointDetails?.vpcEndpointId,
            VpcId: this.__input.endpointDetails?.vpcId,
            SecurityGroupIds: this.__input.endpointDetails?.securityGroupIds,
          },
          EndpointType: this.__input.endpointType,
          HostKey: this.__input.hostKey,
          IdentityProviderDetails: {
            Url: this.__input.identityProviderDetails?.url,
            InvocationRole: this.__input.identityProviderDetails?.invocationRole,
            DirectoryId: this.__input.identityProviderDetails?.directoryId,
          },
          LoggingRole: this.__input.loggingRole,
          Protocols: this.__input.protocols,
          SecurityPolicyName: this.__input.securityPolicyName,
          ServerId: this.__input.serverId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateServer.ServerId', props);
    return resource.getResponseField('ServerId') as unknown as string;
  }

}

export class TransferResponsesUpdateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.TransferUpdateUserRequest) {
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
          HomeDirectory: this.__input.homeDirectory,
          HomeDirectoryType: this.__input.homeDirectoryType,
          HomeDirectoryMappings: this.__input.homeDirectoryMappings,
          Policy: this.__input.policy,
          PosixProfile: {
            Uid: this.__input.posixProfile?.uid,
            Gid: this.__input.posixProfile?.gid,
            SecondaryGids: this.__input.posixProfile?.secondaryGids,
          },
          Role: this.__input.role,
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.ServerId', props);
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
          HomeDirectory: this.__input.homeDirectory,
          HomeDirectoryType: this.__input.homeDirectoryType,
          HomeDirectoryMappings: this.__input.homeDirectoryMappings,
          Policy: this.__input.policy,
          PosixProfile: {
            Uid: this.__input.posixProfile?.uid,
            Gid: this.__input.posixProfile?.gid,
            SecondaryGids: this.__input.posixProfile?.secondaryGids,
          },
          Role: this.__input.role,
          ServerId: this.__input.serverId,
          UserName: this.__input.userName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateUser.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

}

