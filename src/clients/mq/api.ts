import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MqClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createBroker(input: shapes.MqCreateBrokerRequest): MQResponsesCreateBroker {
    return new MQResponsesCreateBroker(this, this.__resources, input);
  }

  public createConfiguration(input: shapes.MqCreateConfigurationRequest): MQResponsesCreateConfiguration {
    return new MQResponsesCreateConfiguration(this, this.__resources, input);
  }

  public createTags(input: shapes.MqCreateTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTags',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateTags'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateTags', props);
  }

  public createUser(input: shapes.MqCreateUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateUser'),
        parameters: {
          BrokerId: input.brokerId,
          ConsoleAccess: input.consoleAccess,
          Groups: input.groups,
          Password: input.password,
          Username: input.username,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateUser', props);
  }

  public deleteBroker(input: shapes.MqDeleteBrokerRequest): MQResponsesDeleteBroker {
    return new MQResponsesDeleteBroker(this, this.__resources, input);
  }

  public deleteTags(input: shapes.MqDeleteTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTags',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DeleteTags'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTags', props);
  }

  public deleteUser(input: shapes.MqDeleteUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DeleteUser'),
        parameters: {
          BrokerId: input.brokerId,
          Username: input.username,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUser', props);
  }

  public describeBroker(input: shapes.MqDescribeBrokerRequest): MQResponsesDescribeBroker {
    return new MQResponsesDescribeBroker(this, this.__resources, input);
  }

  public describeBrokerEngineTypes(input: shapes.MqDescribeBrokerEngineTypesRequest): MQResponsesDescribeBrokerEngineTypes {
    return new MQResponsesDescribeBrokerEngineTypes(this, this.__resources, input);
  }

  public describeBrokerInstanceOptions(input: shapes.MqDescribeBrokerInstanceOptionsRequest): MQResponsesDescribeBrokerInstanceOptions {
    return new MQResponsesDescribeBrokerInstanceOptions(this, this.__resources, input);
  }

  public describeConfiguration(input: shapes.MqDescribeConfigurationRequest): MQResponsesDescribeConfiguration {
    return new MQResponsesDescribeConfiguration(this, this.__resources, input);
  }

  public describeConfigurationRevision(input: shapes.MqDescribeConfigurationRevisionRequest): MQResponsesDescribeConfigurationRevision {
    return new MQResponsesDescribeConfigurationRevision(this, this.__resources, input);
  }

  public describeUser(input: shapes.MqDescribeUserRequest): MQResponsesDescribeUser {
    return new MQResponsesDescribeUser(this, this.__resources, input);
  }

  public listBrokers(input: shapes.MqListBrokersRequest): MQResponsesListBrokers {
    return new MQResponsesListBrokers(this, this.__resources, input);
  }

  public listConfigurationRevisions(input: shapes.MqListConfigurationRevisionsRequest): MQResponsesListConfigurationRevisions {
    return new MQResponsesListConfigurationRevisions(this, this.__resources, input);
  }

  public listConfigurations(input: shapes.MqListConfigurationsRequest): MQResponsesListConfigurations {
    return new MQResponsesListConfigurations(this, this.__resources, input);
  }

  public listTags(input: shapes.MqListTagsRequest): MQResponsesListTags {
    return new MQResponsesListTags(this, this.__resources, input);
  }

  public listUsers(input: shapes.MqListUsersRequest): MQResponsesListUsers {
    return new MQResponsesListUsers(this, this.__resources, input);
  }

  public rebootBroker(input: shapes.MqRebootBrokerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.RebootBroker'),
        parameters: {
          BrokerId: input.brokerId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RebootBroker', props);
  }

  public updateBroker(input: shapes.MqUpdateBrokerRequest): MQResponsesUpdateBroker {
    return new MQResponsesUpdateBroker(this, this.__resources, input);
  }

  public updateConfiguration(input: shapes.MqUpdateConfigurationRequest): MQResponsesUpdateConfiguration {
    return new MQResponsesUpdateConfiguration(this, this.__resources, input);
  }

  public updateUser(input: shapes.MqUpdateUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUser',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateUser'),
        parameters: {
          BrokerId: input.brokerId,
          ConsoleAccess: input.consoleAccess,
          Groups: input.groups,
          Password: input.password,
          Username: input.username,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUser', props);
  }

}

export class MQResponsesCreateBroker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqCreateBrokerRequest) {
  }

  public get brokerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateBroker.BrokerArn'),
        outputPath: 'BrokerArn',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerName: this.__input.brokerName,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          CreatorRequestId: this.__input.creatorRequestId,
          DeploymentMode: this.__input.deploymentMode,
          EncryptionOptions: {
            KmsKeyId: this.__input.encryptionOptions?.kmsKeyId,
            UseAwsOwnedKey: this.__input.encryptionOptions?.useAwsOwnedKey,
          },
          EngineType: this.__input.engineType,
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          PubliclyAccessible: this.__input.publiclyAccessible,
          SecurityGroups: this.__input.securityGroups,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          Users: this.__input.users,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBroker.BrokerArn', props);
    return resource.getResponseField('BrokerArn') as unknown as string;
  }

  public get brokerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateBroker.BrokerId'),
        outputPath: 'BrokerId',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerName: this.__input.brokerName,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          CreatorRequestId: this.__input.creatorRequestId,
          DeploymentMode: this.__input.deploymentMode,
          EncryptionOptions: {
            KmsKeyId: this.__input.encryptionOptions?.kmsKeyId,
            UseAwsOwnedKey: this.__input.encryptionOptions?.useAwsOwnedKey,
          },
          EngineType: this.__input.engineType,
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          PubliclyAccessible: this.__input.publiclyAccessible,
          SecurityGroups: this.__input.securityGroups,
          StorageType: this.__input.storageType,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
          Users: this.__input.users,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBroker.BrokerId', props);
    return resource.getResponseField('BrokerId') as unknown as string;
  }

}

export class MQResponsesCreateConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqCreateConfigurationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateConfiguration.Arn'),
        outputPath: 'Arn',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          EngineType: this.__input.engineType,
          EngineVersion: this.__input.engineVersion,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get authenticationStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateConfiguration.AuthenticationStrategy'),
        outputPath: 'AuthenticationStrategy',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          EngineType: this.__input.engineType,
          EngineVersion: this.__input.engineVersion,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.AuthenticationStrategy', props);
    return resource.getResponseField('AuthenticationStrategy') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateConfiguration.Created'),
        outputPath: 'Created',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          EngineType: this.__input.engineType,
          EngineVersion: this.__input.engineVersion,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.Created', props);
    return resource.getResponseField('Created') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateConfiguration.Id'),
        outputPath: 'Id',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          EngineType: this.__input.engineType,
          EngineVersion: this.__input.engineVersion,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get latestRevision(): MQResponsesCreateConfigurationLatestRevision {
    return new MQResponsesCreateConfigurationLatestRevision(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateConfiguration.Name'),
        outputPath: 'Name',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          EngineType: this.__input.engineType,
          EngineVersion: this.__input.engineVersion,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class MQResponsesCreateConfigurationLatestRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqCreateConfigurationRequest) {
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateConfiguration.LatestRevision.Created'),
        outputPath: 'LatestRevision.Created',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          EngineType: this.__input.engineType,
          EngineVersion: this.__input.engineVersion,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.LatestRevision.Created', props);
    return resource.getResponseField('LatestRevision.Created') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateConfiguration.LatestRevision.Description'),
        outputPath: 'LatestRevision.Description',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          EngineType: this.__input.engineType,
          EngineVersion: this.__input.engineVersion,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.LatestRevision.Description', props);
    return resource.getResponseField('LatestRevision.Description') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.CreateConfiguration.LatestRevision.Revision'),
        outputPath: 'LatestRevision.Revision',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          EngineType: this.__input.engineType,
          EngineVersion: this.__input.engineVersion,
          Name: this.__input.name,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

export class MQResponsesDeleteBroker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDeleteBrokerRequest) {
  }

  public get brokerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DeleteBroker.BrokerId'),
        outputPath: 'BrokerId',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBroker.BrokerId', props);
    return resource.getResponseField('BrokerId') as unknown as string;
  }

}

export class MQResponsesDescribeBroker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerRequest) {
  }

  public get authenticationStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.AuthenticationStrategy'),
        outputPath: 'AuthenticationStrategy',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.AuthenticationStrategy', props);
    return resource.getResponseField('AuthenticationStrategy') as unknown as string;
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.AutoMinorVersionUpgrade'),
        outputPath: 'AutoMinorVersionUpgrade',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get brokerArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.BrokerArn'),
        outputPath: 'BrokerArn',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.BrokerArn', props);
    return resource.getResponseField('BrokerArn') as unknown as string;
  }

  public get brokerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.BrokerId'),
        outputPath: 'BrokerId',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.BrokerId', props);
    return resource.getResponseField('BrokerId') as unknown as string;
  }

  public get brokerInstances(): shapes.MqBrokerInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.BrokerInstances'),
        outputPath: 'BrokerInstances',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.BrokerInstances', props);
    return resource.getResponseField('BrokerInstances') as unknown as shapes.MqBrokerInstance[];
  }

  public get brokerName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.BrokerName'),
        outputPath: 'BrokerName',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.BrokerName', props);
    return resource.getResponseField('BrokerName') as unknown as string;
  }

  public get brokerState(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.BrokerState'),
        outputPath: 'BrokerState',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.BrokerState', props);
    return resource.getResponseField('BrokerState') as unknown as string;
  }

  public get configurations(): MQResponsesDescribeBrokerConfigurations {
    return new MQResponsesDescribeBrokerConfigurations(this.__scope, this.__resources, this.__input);
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Created'),
        outputPath: 'Created',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Created', props);
    return resource.getResponseField('Created') as unknown as string;
  }

  public get deploymentMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.DeploymentMode'),
        outputPath: 'DeploymentMode',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.DeploymentMode', props);
    return resource.getResponseField('DeploymentMode') as unknown as string;
  }

  public get encryptionOptions(): MQResponsesDescribeBrokerEncryptionOptions {
    return new MQResponsesDescribeBrokerEncryptionOptions(this.__scope, this.__resources, this.__input);
  }

  public get engineType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.EngineType'),
        outputPath: 'EngineType',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.EngineType', props);
    return resource.getResponseField('EngineType') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.EngineVersion'),
        outputPath: 'EngineVersion',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.EngineVersion', props);
    return resource.getResponseField('EngineVersion') as unknown as string;
  }

  public get hostInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.HostInstanceType'),
        outputPath: 'HostInstanceType',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.HostInstanceType', props);
    return resource.getResponseField('HostInstanceType') as unknown as string;
  }

  public get ldapServerMetadata(): MQResponsesDescribeBrokerLdapServerMetadata {
    return new MQResponsesDescribeBrokerLdapServerMetadata(this.__scope, this.__resources, this.__input);
  }

  public get logs(): MQResponsesDescribeBrokerLogs {
    return new MQResponsesDescribeBrokerLogs(this.__scope, this.__resources, this.__input);
  }

  public get maintenanceWindowStartTime(): MQResponsesDescribeBrokerMaintenanceWindowStartTime {
    return new MQResponsesDescribeBrokerMaintenanceWindowStartTime(this.__scope, this.__resources, this.__input);
  }

  public get pendingAuthenticationStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingAuthenticationStrategy'),
        outputPath: 'PendingAuthenticationStrategy',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingAuthenticationStrategy', props);
    return resource.getResponseField('PendingAuthenticationStrategy') as unknown as string;
  }

  public get pendingEngineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingEngineVersion'),
        outputPath: 'PendingEngineVersion',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingEngineVersion', props);
    return resource.getResponseField('PendingEngineVersion') as unknown as string;
  }

  public get pendingHostInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingHostInstanceType'),
        outputPath: 'PendingHostInstanceType',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingHostInstanceType', props);
    return resource.getResponseField('PendingHostInstanceType') as unknown as string;
  }

  public get pendingLdapServerMetadata(): MQResponsesDescribeBrokerPendingLdapServerMetadata {
    return new MQResponsesDescribeBrokerPendingLdapServerMetadata(this.__scope, this.__resources, this.__input);
  }

  public get pendingSecurityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingSecurityGroups'),
        outputPath: 'PendingSecurityGroups',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingSecurityGroups', props);
    return resource.getResponseField('PendingSecurityGroups') as unknown as string[];
  }

  public get publiclyAccessible(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PubliclyAccessible'),
        outputPath: 'PubliclyAccessible',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PubliclyAccessible', props);
    return resource.getResponseField('PubliclyAccessible') as unknown as boolean;
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.SecurityGroups'),
        outputPath: 'SecurityGroups',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.SecurityGroups', props);
    return resource.getResponseField('SecurityGroups') as unknown as string[];
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.StorageType'),
        outputPath: 'StorageType',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.StorageType', props);
    return resource.getResponseField('StorageType') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.SubnetIds'),
        outputPath: 'SubnetIds',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.SubnetIds', props);
    return resource.getResponseField('SubnetIds') as unknown as string[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Tags'),
        outputPath: 'Tags',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get users(): shapes.MqUserSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Users'),
        outputPath: 'Users',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.MqUserSummary[];
  }

}

export class MQResponsesDescribeBrokerConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerRequest) {
  }

  public get current(): MQResponsesDescribeBrokerConfigurationsCurrent {
    return new MQResponsesDescribeBrokerConfigurationsCurrent(this.__scope, this.__resources, this.__input);
  }

  public get history(): shapes.MqConfigurationId[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Configurations.History'),
        outputPath: 'Configurations.History',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Configurations.History', props);
    return resource.getResponseField('Configurations.History') as unknown as shapes.MqConfigurationId[];
  }

  public get pending(): MQResponsesDescribeBrokerConfigurationsPending {
    return new MQResponsesDescribeBrokerConfigurationsPending(this.__scope, this.__resources, this.__input);
  }

}

export class MQResponsesDescribeBrokerConfigurationsCurrent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Configurations.Current.Id'),
        outputPath: 'Configurations.Current.Id',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Configurations.Current.Id', props);
    return resource.getResponseField('Configurations.Current.Id') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Configurations.Current.Revision'),
        outputPath: 'Configurations.Current.Revision',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Configurations.Current.Revision', props);
    return resource.getResponseField('Configurations.Current.Revision') as unknown as number;
  }

}

export class MQResponsesDescribeBrokerConfigurationsPending {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Configurations.Pending.Id'),
        outputPath: 'Configurations.Pending.Id',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Configurations.Pending.Id', props);
    return resource.getResponseField('Configurations.Pending.Id') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Configurations.Pending.Revision'),
        outputPath: 'Configurations.Pending.Revision',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Configurations.Pending.Revision', props);
    return resource.getResponseField('Configurations.Pending.Revision') as unknown as number;
  }

}

export class MQResponsesDescribeBrokerEncryptionOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerRequest) {
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.EncryptionOptions.KmsKeyId'),
        outputPath: 'EncryptionOptions.KmsKeyId',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.EncryptionOptions.KmsKeyId', props);
    return resource.getResponseField('EncryptionOptions.KmsKeyId') as unknown as string;
  }

  public get useAwsOwnedKey(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.EncryptionOptions.UseAwsOwnedKey'),
        outputPath: 'EncryptionOptions.UseAwsOwnedKey',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.EncryptionOptions.UseAwsOwnedKey', props);
    return resource.getResponseField('EncryptionOptions.UseAwsOwnedKey') as unknown as boolean;
  }

}

export class MQResponsesDescribeBrokerLdapServerMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerRequest) {
  }

  public get hosts(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.LdapServerMetadata.Hosts'),
        outputPath: 'LdapServerMetadata.Hosts',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.LdapServerMetadata.Hosts', props);
    return resource.getResponseField('LdapServerMetadata.Hosts') as unknown as string[];
  }

  public get roleBase(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.LdapServerMetadata.RoleBase'),
        outputPath: 'LdapServerMetadata.RoleBase',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.LdapServerMetadata.RoleBase', props);
    return resource.getResponseField('LdapServerMetadata.RoleBase') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.LdapServerMetadata.RoleName'),
        outputPath: 'LdapServerMetadata.RoleName',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.LdapServerMetadata.RoleName', props);
    return resource.getResponseField('LdapServerMetadata.RoleName') as unknown as string;
  }

  public get roleSearchMatching(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.LdapServerMetadata.RoleSearchMatching'),
        outputPath: 'LdapServerMetadata.RoleSearchMatching',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.LdapServerMetadata.RoleSearchMatching', props);
    return resource.getResponseField('LdapServerMetadata.RoleSearchMatching') as unknown as string;
  }

  public get roleSearchSubtree(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.LdapServerMetadata.RoleSearchSubtree'),
        outputPath: 'LdapServerMetadata.RoleSearchSubtree',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.LdapServerMetadata.RoleSearchSubtree', props);
    return resource.getResponseField('LdapServerMetadata.RoleSearchSubtree') as unknown as boolean;
  }

  public get serviceAccountUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.LdapServerMetadata.ServiceAccountUsername'),
        outputPath: 'LdapServerMetadata.ServiceAccountUsername',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.LdapServerMetadata.ServiceAccountUsername', props);
    return resource.getResponseField('LdapServerMetadata.ServiceAccountUsername') as unknown as string;
  }

  public get userBase(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.LdapServerMetadata.UserBase'),
        outputPath: 'LdapServerMetadata.UserBase',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.LdapServerMetadata.UserBase', props);
    return resource.getResponseField('LdapServerMetadata.UserBase') as unknown as string;
  }

  public get userRoleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.LdapServerMetadata.UserRoleName'),
        outputPath: 'LdapServerMetadata.UserRoleName',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.LdapServerMetadata.UserRoleName', props);
    return resource.getResponseField('LdapServerMetadata.UserRoleName') as unknown as string;
  }

  public get userSearchMatching(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.LdapServerMetadata.UserSearchMatching'),
        outputPath: 'LdapServerMetadata.UserSearchMatching',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.LdapServerMetadata.UserSearchMatching', props);
    return resource.getResponseField('LdapServerMetadata.UserSearchMatching') as unknown as string;
  }

  public get userSearchSubtree(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.LdapServerMetadata.UserSearchSubtree'),
        outputPath: 'LdapServerMetadata.UserSearchSubtree',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.LdapServerMetadata.UserSearchSubtree', props);
    return resource.getResponseField('LdapServerMetadata.UserSearchSubtree') as unknown as boolean;
  }

}

export class MQResponsesDescribeBrokerLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerRequest) {
  }

  public get audit(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Logs.Audit'),
        outputPath: 'Logs.Audit',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Logs.Audit', props);
    return resource.getResponseField('Logs.Audit') as unknown as boolean;
  }

  public get auditLogGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Logs.AuditLogGroup'),
        outputPath: 'Logs.AuditLogGroup',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Logs.AuditLogGroup', props);
    return resource.getResponseField('Logs.AuditLogGroup') as unknown as string;
  }

  public get general(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Logs.General'),
        outputPath: 'Logs.General',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Logs.General', props);
    return resource.getResponseField('Logs.General') as unknown as boolean;
  }

  public get generalLogGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Logs.GeneralLogGroup'),
        outputPath: 'Logs.GeneralLogGroup',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Logs.GeneralLogGroup', props);
    return resource.getResponseField('Logs.GeneralLogGroup') as unknown as string;
  }

  public get pending(): MQResponsesDescribeBrokerLogsPending {
    return new MQResponsesDescribeBrokerLogsPending(this.__scope, this.__resources, this.__input);
  }

}

export class MQResponsesDescribeBrokerLogsPending {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerRequest) {
  }

  public get audit(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Logs.Pending.Audit'),
        outputPath: 'Logs.Pending.Audit',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Logs.Pending.Audit', props);
    return resource.getResponseField('Logs.Pending.Audit') as unknown as boolean;
  }

  public get general(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.Logs.Pending.General'),
        outputPath: 'Logs.Pending.General',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.Logs.Pending.General', props);
    return resource.getResponseField('Logs.Pending.General') as unknown as boolean;
  }

}

export class MQResponsesDescribeBrokerMaintenanceWindowStartTime {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerRequest) {
  }

  public get dayOfWeek(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.MaintenanceWindowStartTime.DayOfWeek'),
        outputPath: 'MaintenanceWindowStartTime.DayOfWeek',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.MaintenanceWindowStartTime.DayOfWeek', props);
    return resource.getResponseField('MaintenanceWindowStartTime.DayOfWeek') as unknown as string;
  }

  public get timeOfDay(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.MaintenanceWindowStartTime.TimeOfDay'),
        outputPath: 'MaintenanceWindowStartTime.TimeOfDay',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.MaintenanceWindowStartTime.TimeOfDay', props);
    return resource.getResponseField('MaintenanceWindowStartTime.TimeOfDay') as unknown as string;
  }

  public get timeZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.MaintenanceWindowStartTime.TimeZone'),
        outputPath: 'MaintenanceWindowStartTime.TimeZone',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.MaintenanceWindowStartTime.TimeZone', props);
    return resource.getResponseField('MaintenanceWindowStartTime.TimeZone') as unknown as string;
  }

}

export class MQResponsesDescribeBrokerPendingLdapServerMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerRequest) {
  }

  public get hosts(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingLdapServerMetadata.Hosts'),
        outputPath: 'PendingLdapServerMetadata.Hosts',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingLdapServerMetadata.Hosts', props);
    return resource.getResponseField('PendingLdapServerMetadata.Hosts') as unknown as string[];
  }

  public get roleBase(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingLdapServerMetadata.RoleBase'),
        outputPath: 'PendingLdapServerMetadata.RoleBase',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingLdapServerMetadata.RoleBase', props);
    return resource.getResponseField('PendingLdapServerMetadata.RoleBase') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingLdapServerMetadata.RoleName'),
        outputPath: 'PendingLdapServerMetadata.RoleName',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingLdapServerMetadata.RoleName', props);
    return resource.getResponseField('PendingLdapServerMetadata.RoleName') as unknown as string;
  }

  public get roleSearchMatching(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingLdapServerMetadata.RoleSearchMatching'),
        outputPath: 'PendingLdapServerMetadata.RoleSearchMatching',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingLdapServerMetadata.RoleSearchMatching', props);
    return resource.getResponseField('PendingLdapServerMetadata.RoleSearchMatching') as unknown as string;
  }

  public get roleSearchSubtree(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingLdapServerMetadata.RoleSearchSubtree'),
        outputPath: 'PendingLdapServerMetadata.RoleSearchSubtree',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingLdapServerMetadata.RoleSearchSubtree', props);
    return resource.getResponseField('PendingLdapServerMetadata.RoleSearchSubtree') as unknown as boolean;
  }

  public get serviceAccountUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingLdapServerMetadata.ServiceAccountUsername'),
        outputPath: 'PendingLdapServerMetadata.ServiceAccountUsername',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingLdapServerMetadata.ServiceAccountUsername', props);
    return resource.getResponseField('PendingLdapServerMetadata.ServiceAccountUsername') as unknown as string;
  }

  public get userBase(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingLdapServerMetadata.UserBase'),
        outputPath: 'PendingLdapServerMetadata.UserBase',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingLdapServerMetadata.UserBase', props);
    return resource.getResponseField('PendingLdapServerMetadata.UserBase') as unknown as string;
  }

  public get userRoleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingLdapServerMetadata.UserRoleName'),
        outputPath: 'PendingLdapServerMetadata.UserRoleName',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingLdapServerMetadata.UserRoleName', props);
    return resource.getResponseField('PendingLdapServerMetadata.UserRoleName') as unknown as string;
  }

  public get userSearchMatching(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingLdapServerMetadata.UserSearchMatching'),
        outputPath: 'PendingLdapServerMetadata.UserSearchMatching',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingLdapServerMetadata.UserSearchMatching', props);
    return resource.getResponseField('PendingLdapServerMetadata.UserSearchMatching') as unknown as string;
  }

  public get userSearchSubtree(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBroker.PendingLdapServerMetadata.UserSearchSubtree'),
        outputPath: 'PendingLdapServerMetadata.UserSearchSubtree',
        parameters: {
          BrokerId: this.__input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBroker.PendingLdapServerMetadata.UserSearchSubtree', props);
    return resource.getResponseField('PendingLdapServerMetadata.UserSearchSubtree') as unknown as boolean;
  }

}

export class MQResponsesDescribeBrokerEngineTypes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerEngineTypesRequest) {
  }

  public get brokerEngineTypes(): shapes.MqBrokerEngineType[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBrokerEngineTypes',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBrokerEngineTypes.BrokerEngineTypes'),
        outputPath: 'BrokerEngineTypes',
        parameters: {
          EngineType: this.__input.engineType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBrokerEngineTypes.BrokerEngineTypes', props);
    return resource.getResponseField('BrokerEngineTypes') as unknown as shapes.MqBrokerEngineType[];
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBrokerEngineTypes',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBrokerEngineTypes.MaxResults'),
        outputPath: 'MaxResults',
        parameters: {
          EngineType: this.__input.engineType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBrokerEngineTypes.MaxResults', props);
    return resource.getResponseField('MaxResults') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBrokerEngineTypes',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBrokerEngineTypes.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          EngineType: this.__input.engineType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBrokerEngineTypes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MQResponsesDescribeBrokerInstanceOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeBrokerInstanceOptionsRequest) {
  }

  public get brokerInstanceOptions(): shapes.MqBrokerInstanceOption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBrokerInstanceOptions',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBrokerInstanceOptions.BrokerInstanceOptions'),
        outputPath: 'BrokerInstanceOptions',
        parameters: {
          EngineType: this.__input.engineType,
          HostInstanceType: this.__input.hostInstanceType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          StorageType: this.__input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBrokerInstanceOptions.BrokerInstanceOptions', props);
    return resource.getResponseField('BrokerInstanceOptions') as unknown as shapes.MqBrokerInstanceOption[];
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBrokerInstanceOptions',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBrokerInstanceOptions.MaxResults'),
        outputPath: 'MaxResults',
        parameters: {
          EngineType: this.__input.engineType,
          HostInstanceType: this.__input.hostInstanceType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          StorageType: this.__input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBrokerInstanceOptions.MaxResults', props);
    return resource.getResponseField('MaxResults') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBrokerInstanceOptions',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeBrokerInstanceOptions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          EngineType: this.__input.engineType,
          HostInstanceType: this.__input.hostInstanceType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          StorageType: this.__input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBrokerInstanceOptions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MQResponsesDescribeConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeConfigurationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.Arn'),
        outputPath: 'Arn',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get authenticationStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.AuthenticationStrategy'),
        outputPath: 'AuthenticationStrategy',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.AuthenticationStrategy', props);
    return resource.getResponseField('AuthenticationStrategy') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.Created'),
        outputPath: 'Created',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.Created', props);
    return resource.getResponseField('Created') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.Description'),
        outputPath: 'Description',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

  public get engineType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.EngineType'),
        outputPath: 'EngineType',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.EngineType', props);
    return resource.getResponseField('EngineType') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.EngineVersion'),
        outputPath: 'EngineVersion',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.EngineVersion', props);
    return resource.getResponseField('EngineVersion') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.Id'),
        outputPath: 'Id',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get latestRevision(): MQResponsesDescribeConfigurationLatestRevision {
    return new MQResponsesDescribeConfigurationLatestRevision(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.Name'),
        outputPath: 'Name',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.Tags'),
        outputPath: 'Tags',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MQResponsesDescribeConfigurationLatestRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeConfigurationRequest) {
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.LatestRevision.Created'),
        outputPath: 'LatestRevision.Created',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.LatestRevision.Created', props);
    return resource.getResponseField('LatestRevision.Created') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.LatestRevision.Description'),
        outputPath: 'LatestRevision.Description',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.LatestRevision.Description', props);
    return resource.getResponseField('LatestRevision.Description') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfiguration.LatestRevision.Revision'),
        outputPath: 'LatestRevision.Revision',
        parameters: {
          ConfigurationId: this.__input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

export class MQResponsesDescribeConfigurationRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeConfigurationRevisionRequest) {
  }

  public get configurationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationRevision',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfigurationRevision.ConfigurationId'),
        outputPath: 'ConfigurationId',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          ConfigurationRevision: this.__input.configurationRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationRevision.ConfigurationId', props);
    return resource.getResponseField('ConfigurationId') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationRevision',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfigurationRevision.Created'),
        outputPath: 'Created',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          ConfigurationRevision: this.__input.configurationRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationRevision.Created', props);
    return resource.getResponseField('Created') as unknown as string;
  }

  public get data(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationRevision',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfigurationRevision.Data'),
        outputPath: 'Data',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          ConfigurationRevision: this.__input.configurationRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationRevision.Data', props);
    return resource.getResponseField('Data') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConfigurationRevision',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeConfigurationRevision.Description'),
        outputPath: 'Description',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          ConfigurationRevision: this.__input.configurationRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConfigurationRevision.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class MQResponsesDescribeUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeUserRequest) {
  }

  public get brokerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeUser.BrokerId'),
        outputPath: 'BrokerId',
        parameters: {
          BrokerId: this.__input.brokerId,
          Username: this.__input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.BrokerId', props);
    return resource.getResponseField('BrokerId') as unknown as string;
  }

  public get consoleAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeUser.ConsoleAccess'),
        outputPath: 'ConsoleAccess',
        parameters: {
          BrokerId: this.__input.brokerId,
          Username: this.__input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.ConsoleAccess', props);
    return resource.getResponseField('ConsoleAccess') as unknown as boolean;
  }

  public get groups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeUser.Groups'),
        outputPath: 'Groups',
        parameters: {
          BrokerId: this.__input.brokerId,
          Username: this.__input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.Groups', props);
    return resource.getResponseField('Groups') as unknown as string[];
  }

  public get pending(): MQResponsesDescribeUserPending {
    return new MQResponsesDescribeUserPending(this.__scope, this.__resources, this.__input);
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeUser.Username'),
        outputPath: 'Username',
        parameters: {
          BrokerId: this.__input.brokerId,
          Username: this.__input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.Username', props);
    return resource.getResponseField('Username') as unknown as string;
  }

}

export class MQResponsesDescribeUserPending {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqDescribeUserRequest) {
  }

  public get consoleAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeUser.Pending.ConsoleAccess'),
        outputPath: 'Pending.ConsoleAccess',
        parameters: {
          BrokerId: this.__input.brokerId,
          Username: this.__input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.Pending.ConsoleAccess', props);
    return resource.getResponseField('Pending.ConsoleAccess') as unknown as boolean;
  }

  public get groups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeUser.Pending.Groups'),
        outputPath: 'Pending.Groups',
        parameters: {
          BrokerId: this.__input.brokerId,
          Username: this.__input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.Pending.Groups', props);
    return resource.getResponseField('Pending.Groups') as unknown as string[];
  }

  public get pendingChange(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUser',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.DescribeUser.Pending.PendingChange'),
        outputPath: 'Pending.PendingChange',
        parameters: {
          BrokerId: this.__input.brokerId,
          Username: this.__input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUser.Pending.PendingChange', props);
    return resource.getResponseField('Pending.PendingChange') as unknown as string;
  }

}

export class MQResponsesListBrokers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqListBrokersRequest) {
  }

  public get brokerSummaries(): shapes.MqBrokerSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBrokers',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListBrokers.BrokerSummaries'),
        outputPath: 'BrokerSummaries',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBrokers.BrokerSummaries', props);
    return resource.getResponseField('BrokerSummaries') as unknown as shapes.MqBrokerSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listBrokers',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListBrokers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListBrokers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MQResponsesListConfigurationRevisions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqListConfigurationRevisionsRequest) {
  }

  public get configurationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationRevisions',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListConfigurationRevisions.ConfigurationId'),
        outputPath: 'ConfigurationId',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationRevisions.ConfigurationId', props);
    return resource.getResponseField('ConfigurationId') as unknown as string;
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationRevisions',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListConfigurationRevisions.MaxResults'),
        outputPath: 'MaxResults',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationRevisions.MaxResults', props);
    return resource.getResponseField('MaxResults') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationRevisions',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListConfigurationRevisions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationRevisions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get revisions(): shapes.MqConfigurationRevision[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurationRevisions',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListConfigurationRevisions.Revisions'),
        outputPath: 'Revisions',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurationRevisions.Revisions', props);
    return resource.getResponseField('Revisions') as unknown as shapes.MqConfigurationRevision[];
  }

}

export class MQResponsesListConfigurations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqListConfigurationsRequest) {
  }

  public get configurations(): shapes.MqConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurations',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListConfigurations.Configurations'),
        outputPath: 'Configurations',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurations.Configurations', props);
    return resource.getResponseField('Configurations') as unknown as shapes.MqConfiguration[];
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurations',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListConfigurations.MaxResults'),
        outputPath: 'MaxResults',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurations.MaxResults', props);
    return resource.getResponseField('MaxResults') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listConfigurations',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListConfigurations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MQResponsesListTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqListTagsRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MQResponsesListUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqListUsersRequest) {
  }

  public get brokerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListUsers.BrokerId'),
        outputPath: 'BrokerId',
        parameters: {
          BrokerId: this.__input.brokerId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.BrokerId', props);
    return resource.getResponseField('BrokerId') as unknown as string;
  }

  public get maxResults(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListUsers.MaxResults'),
        outputPath: 'MaxResults',
        parameters: {
          BrokerId: this.__input.brokerId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.MaxResults', props);
    return resource.getResponseField('MaxResults') as unknown as number;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListUsers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          BrokerId: this.__input.brokerId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get users(): shapes.MqUserSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUsers',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.ListUsers.Users'),
        outputPath: 'Users',
        parameters: {
          BrokerId: this.__input.brokerId,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.MqUserSummary[];
  }

}

export class MQResponsesUpdateBroker {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqUpdateBrokerRequest) {
  }

  public get authenticationStrategy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.AuthenticationStrategy'),
        outputPath: 'AuthenticationStrategy',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.AuthenticationStrategy', props);
    return resource.getResponseField('AuthenticationStrategy') as unknown as string;
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.AutoMinorVersionUpgrade'),
        outputPath: 'AutoMinorVersionUpgrade',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get brokerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.BrokerId'),
        outputPath: 'BrokerId',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.BrokerId', props);
    return resource.getResponseField('BrokerId') as unknown as string;
  }

  public get configuration(): MQResponsesUpdateBrokerConfiguration {
    return new MQResponsesUpdateBrokerConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.EngineVersion'),
        outputPath: 'EngineVersion',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.EngineVersion', props);
    return resource.getResponseField('EngineVersion') as unknown as string;
  }

  public get hostInstanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.HostInstanceType'),
        outputPath: 'HostInstanceType',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.HostInstanceType', props);
    return resource.getResponseField('HostInstanceType') as unknown as string;
  }

  public get ldapServerMetadata(): MQResponsesUpdateBrokerLdapServerMetadata {
    return new MQResponsesUpdateBrokerLdapServerMetadata(this.__scope, this.__resources, this.__input);
  }

  public get logs(): MQResponsesUpdateBrokerLogs {
    return new MQResponsesUpdateBrokerLogs(this.__scope, this.__resources, this.__input);
  }

  public get maintenanceWindowStartTime(): MQResponsesUpdateBrokerMaintenanceWindowStartTime {
    return new MQResponsesUpdateBrokerMaintenanceWindowStartTime(this.__scope, this.__resources, this.__input);
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.SecurityGroups'),
        outputPath: 'SecurityGroups',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.SecurityGroups', props);
    return resource.getResponseField('SecurityGroups') as unknown as string[];
  }

}

export class MQResponsesUpdateBrokerConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqUpdateBrokerRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.Configuration.Id'),
        outputPath: 'Configuration.Id',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.Configuration.Id', props);
    return resource.getResponseField('Configuration.Id') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.Configuration.Revision'),
        outputPath: 'Configuration.Revision',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.Configuration.Revision', props);
    return resource.getResponseField('Configuration.Revision') as unknown as number;
  }

}

export class MQResponsesUpdateBrokerLdapServerMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqUpdateBrokerRequest) {
  }

  public get hosts(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.LdapServerMetadata.Hosts'),
        outputPath: 'LdapServerMetadata.Hosts',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.LdapServerMetadata.Hosts', props);
    return resource.getResponseField('LdapServerMetadata.Hosts') as unknown as string[];
  }

  public get roleBase(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.LdapServerMetadata.RoleBase'),
        outputPath: 'LdapServerMetadata.RoleBase',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.LdapServerMetadata.RoleBase', props);
    return resource.getResponseField('LdapServerMetadata.RoleBase') as unknown as string;
  }

  public get roleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.LdapServerMetadata.RoleName'),
        outputPath: 'LdapServerMetadata.RoleName',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.LdapServerMetadata.RoleName', props);
    return resource.getResponseField('LdapServerMetadata.RoleName') as unknown as string;
  }

  public get roleSearchMatching(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.LdapServerMetadata.RoleSearchMatching'),
        outputPath: 'LdapServerMetadata.RoleSearchMatching',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.LdapServerMetadata.RoleSearchMatching', props);
    return resource.getResponseField('LdapServerMetadata.RoleSearchMatching') as unknown as string;
  }

  public get roleSearchSubtree(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.LdapServerMetadata.RoleSearchSubtree'),
        outputPath: 'LdapServerMetadata.RoleSearchSubtree',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.LdapServerMetadata.RoleSearchSubtree', props);
    return resource.getResponseField('LdapServerMetadata.RoleSearchSubtree') as unknown as boolean;
  }

  public get serviceAccountUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.LdapServerMetadata.ServiceAccountUsername'),
        outputPath: 'LdapServerMetadata.ServiceAccountUsername',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.LdapServerMetadata.ServiceAccountUsername', props);
    return resource.getResponseField('LdapServerMetadata.ServiceAccountUsername') as unknown as string;
  }

  public get userBase(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.LdapServerMetadata.UserBase'),
        outputPath: 'LdapServerMetadata.UserBase',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.LdapServerMetadata.UserBase', props);
    return resource.getResponseField('LdapServerMetadata.UserBase') as unknown as string;
  }

  public get userRoleName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.LdapServerMetadata.UserRoleName'),
        outputPath: 'LdapServerMetadata.UserRoleName',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.LdapServerMetadata.UserRoleName', props);
    return resource.getResponseField('LdapServerMetadata.UserRoleName') as unknown as string;
  }

  public get userSearchMatching(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.LdapServerMetadata.UserSearchMatching'),
        outputPath: 'LdapServerMetadata.UserSearchMatching',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.LdapServerMetadata.UserSearchMatching', props);
    return resource.getResponseField('LdapServerMetadata.UserSearchMatching') as unknown as string;
  }

  public get userSearchSubtree(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.LdapServerMetadata.UserSearchSubtree'),
        outputPath: 'LdapServerMetadata.UserSearchSubtree',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.LdapServerMetadata.UserSearchSubtree', props);
    return resource.getResponseField('LdapServerMetadata.UserSearchSubtree') as unknown as boolean;
  }

}

export class MQResponsesUpdateBrokerLogs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqUpdateBrokerRequest) {
  }

  public get audit(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.Logs.Audit'),
        outputPath: 'Logs.Audit',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.Logs.Audit', props);
    return resource.getResponseField('Logs.Audit') as unknown as boolean;
  }

  public get general(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.Logs.General'),
        outputPath: 'Logs.General',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.Logs.General', props);
    return resource.getResponseField('Logs.General') as unknown as boolean;
  }

}

export class MQResponsesUpdateBrokerMaintenanceWindowStartTime {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqUpdateBrokerRequest) {
  }

  public get dayOfWeek(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.MaintenanceWindowStartTime.DayOfWeek'),
        outputPath: 'MaintenanceWindowStartTime.DayOfWeek',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.MaintenanceWindowStartTime.DayOfWeek', props);
    return resource.getResponseField('MaintenanceWindowStartTime.DayOfWeek') as unknown as string;
  }

  public get timeOfDay(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.MaintenanceWindowStartTime.TimeOfDay'),
        outputPath: 'MaintenanceWindowStartTime.TimeOfDay',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.MaintenanceWindowStartTime.TimeOfDay', props);
    return resource.getResponseField('MaintenanceWindowStartTime.TimeOfDay') as unknown as string;
  }

  public get timeZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBroker',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateBroker.MaintenanceWindowStartTime.TimeZone'),
        outputPath: 'MaintenanceWindowStartTime.TimeZone',
        parameters: {
          AuthenticationStrategy: this.__input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          BrokerId: this.__input.brokerId,
          Configuration: {
            Id: this.__input.configuration?.id,
            Revision: this.__input.configuration?.revision,
          },
          EngineVersion: this.__input.engineVersion,
          HostInstanceType: this.__input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.__input.ldapServerMetadata?.hosts,
            RoleBase: this.__input.ldapServerMetadata?.roleBase,
            RoleName: this.__input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.__input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.__input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.__input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.__input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.__input.ldapServerMetadata?.userBase,
            UserRoleName: this.__input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.__input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.__input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.__input.logs?.audit,
            General: this.__input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.__input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.__input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.__input.maintenanceWindowStartTime?.timeZone,
          },
          SecurityGroups: this.__input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBroker.MaintenanceWindowStartTime.TimeZone', props);
    return resource.getResponseField('MaintenanceWindowStartTime.TimeZone') as unknown as string;
  }

}

export class MQResponsesUpdateConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqUpdateConfigurationRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateConfiguration.Arn'),
        outputPath: 'Arn',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          Data: this.__input.data,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.Arn', props);
    return resource.getResponseField('Arn') as unknown as string;
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateConfiguration.Created'),
        outputPath: 'Created',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          Data: this.__input.data,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.Created', props);
    return resource.getResponseField('Created') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateConfiguration.Id'),
        outputPath: 'Id',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          Data: this.__input.data,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get latestRevision(): MQResponsesUpdateConfigurationLatestRevision {
    return new MQResponsesUpdateConfigurationLatestRevision(this.__scope, this.__resources, this.__input);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateConfiguration.Name'),
        outputPath: 'Name',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          Data: this.__input.data,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get warnings(): shapes.MqSanitizationWarning[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateConfiguration.Warnings'),
        outputPath: 'Warnings',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          Data: this.__input.data,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as shapes.MqSanitizationWarning[];
  }

}

export class MQResponsesUpdateConfigurationLatestRevision {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MqUpdateConfigurationRequest) {
  }

  public get created(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateConfiguration.LatestRevision.Created'),
        outputPath: 'LatestRevision.Created',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          Data: this.__input.data,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.LatestRevision.Created', props);
    return resource.getResponseField('LatestRevision.Created') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateConfiguration.LatestRevision.Description'),
        outputPath: 'LatestRevision.Description',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          Data: this.__input.data,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.LatestRevision.Description', props);
    return resource.getResponseField('LatestRevision.Description') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConfiguration',
        service: 'MQ',
        physicalResourceId: cr.PhysicalResourceId.of('MQ.UpdateConfiguration.LatestRevision.Revision'),
        outputPath: 'LatestRevision.Revision',
        parameters: {
          ConfigurationId: this.__input.configurationId,
          Data: this.__input.data,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

