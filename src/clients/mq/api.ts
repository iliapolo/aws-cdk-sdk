import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MqClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createBroker(input: shapes.MqCreateBrokerRequest): MQCreateBroker {
    return new MQCreateBroker(this, 'CreateBroker', this.__resources, input);
  }

  public createConfiguration(input: shapes.MqCreateConfigurationRequest): MQCreateConfiguration {
    return new MQCreateConfiguration(this, 'CreateConfiguration', this.__resources, input);
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

  public deleteBroker(input: shapes.MqDeleteBrokerRequest): MQDeleteBroker {
    return new MQDeleteBroker(this, 'DeleteBroker', this.__resources, input);
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

  public describeBroker(input: shapes.MqDescribeBrokerRequest): MQDescribeBroker {
    return new MQDescribeBroker(this, 'DescribeBroker', this.__resources, input);
  }

  public describeBrokerEngineTypes(input: shapes.MqDescribeBrokerEngineTypesRequest): MQDescribeBrokerEngineTypes {
    return new MQDescribeBrokerEngineTypes(this, 'DescribeBrokerEngineTypes', this.__resources, input);
  }

  public describeBrokerInstanceOptions(input: shapes.MqDescribeBrokerInstanceOptionsRequest): MQDescribeBrokerInstanceOptions {
    return new MQDescribeBrokerInstanceOptions(this, 'DescribeBrokerInstanceOptions', this.__resources, input);
  }

  public describeConfiguration(input: shapes.MqDescribeConfigurationRequest): MQDescribeConfiguration {
    return new MQDescribeConfiguration(this, 'DescribeConfiguration', this.__resources, input);
  }

  public describeConfigurationRevision(input: shapes.MqDescribeConfigurationRevisionRequest): MQDescribeConfigurationRevision {
    return new MQDescribeConfigurationRevision(this, 'DescribeConfigurationRevision', this.__resources, input);
  }

  public describeUser(input: shapes.MqDescribeUserRequest): MQDescribeUser {
    return new MQDescribeUser(this, 'DescribeUser', this.__resources, input);
  }

  public listBrokers(input: shapes.MqListBrokersRequest): MQListBrokers {
    return new MQListBrokers(this, 'ListBrokers', this.__resources, input);
  }

  public listConfigurationRevisions(input: shapes.MqListConfigurationRevisionsRequest): MQListConfigurationRevisions {
    return new MQListConfigurationRevisions(this, 'ListConfigurationRevisions', this.__resources, input);
  }

  public listConfigurations(input: shapes.MqListConfigurationsRequest): MQListConfigurations {
    return new MQListConfigurations(this, 'ListConfigurations', this.__resources, input);
  }

  public listTags(input: shapes.MqListTagsRequest): MQListTags {
    return new MQListTags(this, 'ListTags', this.__resources, input);
  }

  public listUsers(input: shapes.MqListUsersRequest): MQListUsers {
    return new MQListUsers(this, 'ListUsers', this.__resources, input);
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

  public updateBroker(input: shapes.MqUpdateBrokerRequest): MQUpdateBroker {
    return new MQUpdateBroker(this, 'UpdateBroker', this.__resources, input);
  }

  public updateConfiguration(input: shapes.MqUpdateConfigurationRequest): MQUpdateConfiguration {
    return new MQUpdateConfiguration(this, 'UpdateConfiguration', this.__resources, input);
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

export class MQCreateBroker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqCreateBrokerRequest) {
    super(scope, id);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerName: this.input.brokerName,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          CreatorRequestId: this.input.creatorRequestId,
          DeploymentMode: this.input.deploymentMode,
          EncryptionOptions: {
            KmsKeyId: this.input.encryptionOptions?.kmsKeyId,
            UseAwsOwnedKey: this.input.encryptionOptions?.useAwsOwnedKey,
          },
          EngineType: this.input.engineType,
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.input.maintenanceWindowStartTime?.timeZone,
          },
          PubliclyAccessible: this.input.publiclyAccessible,
          SecurityGroups: this.input.securityGroups,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          Users: this.input.users,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBroker.BrokerArn', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerName: this.input.brokerName,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          CreatorRequestId: this.input.creatorRequestId,
          DeploymentMode: this.input.deploymentMode,
          EncryptionOptions: {
            KmsKeyId: this.input.encryptionOptions?.kmsKeyId,
            UseAwsOwnedKey: this.input.encryptionOptions?.useAwsOwnedKey,
          },
          EngineType: this.input.engineType,
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          MaintenanceWindowStartTime: {
            DayOfWeek: this.input.maintenanceWindowStartTime?.dayOfWeek,
            TimeOfDay: this.input.maintenanceWindowStartTime?.timeOfDay,
            TimeZone: this.input.maintenanceWindowStartTime?.timeZone,
          },
          PubliclyAccessible: this.input.publiclyAccessible,
          SecurityGroups: this.input.securityGroups,
          StorageType: this.input.storageType,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
          Users: this.input.users,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBroker.BrokerId', props);
    return resource.getResponseField('BrokerId') as unknown as string;
  }

}

export class MQCreateConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqCreateConfigurationRequest) {
    super(scope, id);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          EngineType: this.input.engineType,
          EngineVersion: this.input.engineVersion,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.Arn', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          EngineType: this.input.engineType,
          EngineVersion: this.input.engineVersion,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.AuthenticationStrategy', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          EngineType: this.input.engineType,
          EngineVersion: this.input.engineVersion,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.Created', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          EngineType: this.input.engineType,
          EngineVersion: this.input.engineVersion,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get latestRevision(): MQCreateConfigurationLatestRevision {
    return new MQCreateConfigurationLatestRevision(this, 'LatestRevision', this.__resources, this.input);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          EngineType: this.input.engineType,
          EngineVersion: this.input.engineVersion,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

}

export class MQCreateConfigurationLatestRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqCreateConfigurationRequest) {
    super(scope, id);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          EngineType: this.input.engineType,
          EngineVersion: this.input.engineVersion,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.LatestRevision.Created', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          EngineType: this.input.engineType,
          EngineVersion: this.input.engineVersion,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.LatestRevision.Description', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          EngineType: this.input.engineType,
          EngineVersion: this.input.engineVersion,
          Name: this.input.name,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

export class MQDeleteBroker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDeleteBrokerRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBroker.BrokerId', props);
    return resource.getResponseField('BrokerId') as unknown as string;
  }

}

export class MQDescribeBroker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.AuthenticationStrategy', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.AutoMinorVersionUpgrade', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.BrokerArn', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.BrokerId', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.BrokerInstances', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.BrokerName', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.BrokerState', props);
    return resource.getResponseField('BrokerState') as unknown as string;
  }

  public get configurations(): MQDescribeBrokerConfigurations {
    return new MQDescribeBrokerConfigurations(this, 'Configurations', this.__resources, this.input);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Created', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.DeploymentMode', props);
    return resource.getResponseField('DeploymentMode') as unknown as string;
  }

  public get encryptionOptions(): MQDescribeBrokerEncryptionOptions {
    return new MQDescribeBrokerEncryptionOptions(this, 'EncryptionOptions', this.__resources, this.input);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.EngineType', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.EngineVersion', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.HostInstanceType', props);
    return resource.getResponseField('HostInstanceType') as unknown as string;
  }

  public get ldapServerMetadata(): MQDescribeBrokerLdapServerMetadata {
    return new MQDescribeBrokerLdapServerMetadata(this, 'LdapServerMetadata', this.__resources, this.input);
  }

  public get logs(): MQDescribeBrokerLogs {
    return new MQDescribeBrokerLogs(this, 'Logs', this.__resources, this.input);
  }

  public get maintenanceWindowStartTime(): MQDescribeBrokerMaintenanceWindowStartTime {
    return new MQDescribeBrokerMaintenanceWindowStartTime(this, 'MaintenanceWindowStartTime', this.__resources, this.input);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingAuthenticationStrategy', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingEngineVersion', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingHostInstanceType', props);
    return resource.getResponseField('PendingHostInstanceType') as unknown as string;
  }

  public get pendingLdapServerMetadata(): MQDescribeBrokerPendingLdapServerMetadata {
    return new MQDescribeBrokerPendingLdapServerMetadata(this, 'PendingLdapServerMetadata', this.__resources, this.input);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingSecurityGroups', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PubliclyAccessible', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.SecurityGroups', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.StorageType', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.SubnetIds', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Tags', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.MqUserSummary[];
  }

}

export class MQDescribeBrokerConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerRequest) {
    super(scope, id);
  }

  public get current(): MQDescribeBrokerConfigurationsCurrent {
    return new MQDescribeBrokerConfigurationsCurrent(this, 'Current', this.__resources, this.input);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Configurations.History', props);
    return resource.getResponseField('Configurations.History') as unknown as shapes.MqConfigurationId[];
  }

  public get pending(): MQDescribeBrokerConfigurationsPending {
    return new MQDescribeBrokerConfigurationsPending(this, 'Pending', this.__resources, this.input);
  }

}

export class MQDescribeBrokerConfigurationsCurrent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Configurations.Current.Id', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Configurations.Current.Revision', props);
    return resource.getResponseField('Configurations.Current.Revision') as unknown as number;
  }

}

export class MQDescribeBrokerConfigurationsPending extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Configurations.Pending.Id', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Configurations.Pending.Revision', props);
    return resource.getResponseField('Configurations.Pending.Revision') as unknown as number;
  }

}

export class MQDescribeBrokerEncryptionOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.EncryptionOptions.KmsKeyId', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.EncryptionOptions.UseAwsOwnedKey', props);
    return resource.getResponseField('EncryptionOptions.UseAwsOwnedKey') as unknown as boolean;
  }

}

export class MQDescribeBrokerLdapServerMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.LdapServerMetadata.Hosts', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.LdapServerMetadata.RoleBase', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.LdapServerMetadata.RoleName', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.LdapServerMetadata.RoleSearchMatching', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.LdapServerMetadata.RoleSearchSubtree', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.LdapServerMetadata.ServiceAccountUsername', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.LdapServerMetadata.UserBase', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.LdapServerMetadata.UserRoleName', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.LdapServerMetadata.UserSearchMatching', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.LdapServerMetadata.UserSearchSubtree', props);
    return resource.getResponseField('LdapServerMetadata.UserSearchSubtree') as unknown as boolean;
  }

}

export class MQDescribeBrokerLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Logs.Audit', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Logs.AuditLogGroup', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Logs.General', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Logs.GeneralLogGroup', props);
    return resource.getResponseField('Logs.GeneralLogGroup') as unknown as string;
  }

  public get pending(): MQDescribeBrokerLogsPending {
    return new MQDescribeBrokerLogsPending(this, 'Pending', this.__resources, this.input);
  }

}

export class MQDescribeBrokerLogsPending extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Logs.Pending.Audit', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.Logs.Pending.General', props);
    return resource.getResponseField('Logs.Pending.General') as unknown as boolean;
  }

}

export class MQDescribeBrokerMaintenanceWindowStartTime extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.MaintenanceWindowStartTime.DayOfWeek', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.MaintenanceWindowStartTime.TimeOfDay', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.MaintenanceWindowStartTime.TimeZone', props);
    return resource.getResponseField('MaintenanceWindowStartTime.TimeZone') as unknown as string;
  }

}

export class MQDescribeBrokerPendingLdapServerMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingLdapServerMetadata.Hosts', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingLdapServerMetadata.RoleBase', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingLdapServerMetadata.RoleName', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingLdapServerMetadata.RoleSearchMatching', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingLdapServerMetadata.RoleSearchSubtree', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingLdapServerMetadata.ServiceAccountUsername', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingLdapServerMetadata.UserBase', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingLdapServerMetadata.UserRoleName', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingLdapServerMetadata.UserSearchMatching', props);
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
          BrokerId: this.input.brokerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBroker.PendingLdapServerMetadata.UserSearchSubtree', props);
    return resource.getResponseField('PendingLdapServerMetadata.UserSearchSubtree') as unknown as boolean;
  }

}

export class MQDescribeBrokerEngineTypes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerEngineTypesRequest) {
    super(scope, id);
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
          EngineType: this.input.engineType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBrokerEngineTypes.BrokerEngineTypes', props);
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
          EngineType: this.input.engineType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBrokerEngineTypes.MaxResults', props);
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
          EngineType: this.input.engineType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBrokerEngineTypes.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MQDescribeBrokerInstanceOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeBrokerInstanceOptionsRequest) {
    super(scope, id);
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
          EngineType: this.input.engineType,
          HostInstanceType: this.input.hostInstanceType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBrokerInstanceOptions.BrokerInstanceOptions', props);
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
          EngineType: this.input.engineType,
          HostInstanceType: this.input.hostInstanceType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBrokerInstanceOptions.MaxResults', props);
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
          EngineType: this.input.engineType,
          HostInstanceType: this.input.hostInstanceType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          StorageType: this.input.storageType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBrokerInstanceOptions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MQDescribeConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeConfigurationRequest) {
    super(scope, id);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.Arn', props);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.AuthenticationStrategy', props);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.Created', props);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.Description', props);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.EngineType', props);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.EngineVersion', props);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get latestRevision(): MQDescribeConfigurationLatestRevision {
    return new MQDescribeConfigurationLatestRevision(this, 'LatestRevision', this.__resources, this.input);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.Name', props);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MQDescribeConfigurationLatestRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeConfigurationRequest) {
    super(scope, id);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.LatestRevision.Created', props);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.LatestRevision.Description', props);
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
          ConfigurationId: this.input.configurationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

export class MQDescribeConfigurationRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeConfigurationRevisionRequest) {
    super(scope, id);
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
          ConfigurationId: this.input.configurationId,
          ConfigurationRevision: this.input.configurationRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationRevision.ConfigurationId', props);
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
          ConfigurationId: this.input.configurationId,
          ConfigurationRevision: this.input.configurationRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationRevision.Created', props);
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
          ConfigurationId: this.input.configurationId,
          ConfigurationRevision: this.input.configurationRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationRevision.Data', props);
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
          ConfigurationId: this.input.configurationId,
          ConfigurationRevision: this.input.configurationRevision,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConfigurationRevision.Description', props);
    return resource.getResponseField('Description') as unknown as string;
  }

}

export class MQDescribeUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeUserRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
          Username: this.input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.BrokerId', props);
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
          BrokerId: this.input.brokerId,
          Username: this.input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.ConsoleAccess', props);
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
          BrokerId: this.input.brokerId,
          Username: this.input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.Groups', props);
    return resource.getResponseField('Groups') as unknown as string[];
  }

  public get pending(): MQDescribeUserPending {
    return new MQDescribeUserPending(this, 'Pending', this.__resources, this.input);
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
          BrokerId: this.input.brokerId,
          Username: this.input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.Username', props);
    return resource.getResponseField('Username') as unknown as string;
  }

}

export class MQDescribeUserPending extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqDescribeUserRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
          Username: this.input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.Pending.ConsoleAccess', props);
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
          BrokerId: this.input.brokerId,
          Username: this.input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.Pending.Groups', props);
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
          BrokerId: this.input.brokerId,
          Username: this.input.username,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUser.Pending.PendingChange', props);
    return resource.getResponseField('Pending.PendingChange') as unknown as string;
  }

}

export class MQListBrokers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqListBrokersRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBrokers.BrokerSummaries', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListBrokers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MQListConfigurationRevisions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqListConfigurationRevisionsRequest) {
    super(scope, id);
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
          ConfigurationId: this.input.configurationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationRevisions.ConfigurationId', props);
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
          ConfigurationId: this.input.configurationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationRevisions.MaxResults', props);
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
          ConfigurationId: this.input.configurationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationRevisions.NextToken', props);
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
          ConfigurationId: this.input.configurationId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurationRevisions.Revisions', props);
    return resource.getResponseField('Revisions') as unknown as shapes.MqConfigurationRevision[];
  }

}

export class MQListConfigurations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqListConfigurationsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurations.Configurations', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurations.MaxResults', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListConfigurations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MQListTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqListTagsRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class MQListUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqListUsersRequest) {
    super(scope, id);
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
          BrokerId: this.input.brokerId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.BrokerId', props);
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
          BrokerId: this.input.brokerId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.MaxResults', props);
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
          BrokerId: this.input.brokerId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.NextToken', props);
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
          BrokerId: this.input.brokerId,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.MqUserSummary[];
  }

}

export class MQUpdateBroker extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqUpdateBrokerRequest) {
    super(scope, id);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.AuthenticationStrategy', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.AutoMinorVersionUpgrade', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.BrokerId', props);
    return resource.getResponseField('BrokerId') as unknown as string;
  }

  public get configuration(): MQUpdateBrokerConfiguration {
    return new MQUpdateBrokerConfiguration(this, 'Configuration', this.__resources, this.input);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.EngineVersion', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.HostInstanceType', props);
    return resource.getResponseField('HostInstanceType') as unknown as string;
  }

  public get ldapServerMetadata(): MQUpdateBrokerLdapServerMetadata {
    return new MQUpdateBrokerLdapServerMetadata(this, 'LdapServerMetadata', this.__resources, this.input);
  }

  public get logs(): MQUpdateBrokerLogs {
    return new MQUpdateBrokerLogs(this, 'Logs', this.__resources, this.input);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.SecurityGroups', props);
    return resource.getResponseField('SecurityGroups') as unknown as string[];
  }

}

export class MQUpdateBrokerConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqUpdateBrokerRequest) {
    super(scope, id);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.Configuration.Id', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.Configuration.Revision', props);
    return resource.getResponseField('Configuration.Revision') as unknown as number;
  }

}

export class MQUpdateBrokerLdapServerMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqUpdateBrokerRequest) {
    super(scope, id);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.LdapServerMetadata.Hosts', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.LdapServerMetadata.RoleBase', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.LdapServerMetadata.RoleName', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.LdapServerMetadata.RoleSearchMatching', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.LdapServerMetadata.RoleSearchSubtree', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.LdapServerMetadata.ServiceAccountUsername', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.LdapServerMetadata.UserBase', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.LdapServerMetadata.UserRoleName', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.LdapServerMetadata.UserSearchMatching', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.LdapServerMetadata.UserSearchSubtree', props);
    return resource.getResponseField('LdapServerMetadata.UserSearchSubtree') as unknown as boolean;
  }

}

export class MQUpdateBrokerLogs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqUpdateBrokerRequest) {
    super(scope, id);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.Logs.Audit', props);
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
          AuthenticationStrategy: this.input.authenticationStrategy,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          BrokerId: this.input.brokerId,
          Configuration: {
            Id: this.input.configuration?.id,
            Revision: this.input.configuration?.revision,
          },
          EngineVersion: this.input.engineVersion,
          HostInstanceType: this.input.hostInstanceType,
          LdapServerMetadata: {
            Hosts: this.input.ldapServerMetadata?.hosts,
            RoleBase: this.input.ldapServerMetadata?.roleBase,
            RoleName: this.input.ldapServerMetadata?.roleName,
            RoleSearchMatching: this.input.ldapServerMetadata?.roleSearchMatching,
            RoleSearchSubtree: this.input.ldapServerMetadata?.roleSearchSubtree,
            ServiceAccountPassword: this.input.ldapServerMetadata?.serviceAccountPassword,
            ServiceAccountUsername: this.input.ldapServerMetadata?.serviceAccountUsername,
            UserBase: this.input.ldapServerMetadata?.userBase,
            UserRoleName: this.input.ldapServerMetadata?.userRoleName,
            UserSearchMatching: this.input.ldapServerMetadata?.userSearchMatching,
            UserSearchSubtree: this.input.ldapServerMetadata?.userSearchSubtree,
          },
          Logs: {
            Audit: this.input.logs?.audit,
            General: this.input.logs?.general,
          },
          SecurityGroups: this.input.securityGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBroker.Logs.General', props);
    return resource.getResponseField('Logs.General') as unknown as boolean;
  }

}

export class MQUpdateConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqUpdateConfigurationRequest) {
    super(scope, id);
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
          ConfigurationId: this.input.configurationId,
          Data: this.input.data,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.Arn', props);
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
          ConfigurationId: this.input.configurationId,
          Data: this.input.data,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.Created', props);
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
          ConfigurationId: this.input.configurationId,
          Data: this.input.data,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.Id', props);
    return resource.getResponseField('Id') as unknown as string;
  }

  public get latestRevision(): MQUpdateConfigurationLatestRevision {
    return new MQUpdateConfigurationLatestRevision(this, 'LatestRevision', this.__resources, this.input);
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
          ConfigurationId: this.input.configurationId,
          Data: this.input.data,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.Name', props);
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
          ConfigurationId: this.input.configurationId,
          Data: this.input.data,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.Warnings', props);
    return resource.getResponseField('Warnings') as unknown as shapes.MqSanitizationWarning[];
  }

}

export class MQUpdateConfigurationLatestRevision extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MqUpdateConfigurationRequest) {
    super(scope, id);
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
          ConfigurationId: this.input.configurationId,
          Data: this.input.data,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.LatestRevision.Created', props);
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
          ConfigurationId: this.input.configurationId,
          Data: this.input.data,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.LatestRevision.Description', props);
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
          ConfigurationId: this.input.configurationId,
          Data: this.input.data,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateConfiguration.LatestRevision.Revision', props);
    return resource.getResponseField('LatestRevision.Revision') as unknown as number;
  }

}

