import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ChimeSdkIdentityClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createAppInstance(input: shapes.ChimeSdkIdentityCreateAppInstanceRequest): ChimeSDKIdentityResponsesCreateAppInstance {
    return new ChimeSDKIdentityResponsesCreateAppInstance(this, this.__resources, input);
  }

  public createAppInstanceAdmin(input: shapes.ChimeSdkIdentityCreateAppInstanceAdminRequest): ChimeSDKIdentityResponsesCreateAppInstanceAdmin {
    return new ChimeSDKIdentityResponsesCreateAppInstanceAdmin(this, this.__resources, input);
  }

  public createAppInstanceUser(input: shapes.ChimeSdkIdentityCreateAppInstanceUserRequest): ChimeSDKIdentityResponsesCreateAppInstanceUser {
    return new ChimeSDKIdentityResponsesCreateAppInstanceUser(this, this.__resources, input);
  }

  public deleteAppInstance(input: shapes.ChimeSdkIdentityDeleteAppInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppInstance',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DeleteAppInstance'),
        parameters: {
          AppInstanceArn: input.appInstanceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppInstance', props);
  }

  public deleteAppInstanceAdmin(input: shapes.ChimeSdkIdentityDeleteAppInstanceAdminRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppInstanceAdmin',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DeleteAppInstanceAdmin'),
        parameters: {
          AppInstanceAdminArn: input.appInstanceAdminArn,
          AppInstanceArn: input.appInstanceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppInstanceAdmin', props);
  }

  public deleteAppInstanceUser(input: shapes.ChimeSdkIdentityDeleteAppInstanceUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAppInstanceUser',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DeleteAppInstanceUser'),
        parameters: {
          AppInstanceUserArn: input.appInstanceUserArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAppInstanceUser', props);
  }

  public describeAppInstance(input: shapes.ChimeSdkIdentityDescribeAppInstanceRequest): ChimeSDKIdentityResponsesDescribeAppInstance {
    return new ChimeSDKIdentityResponsesDescribeAppInstance(this, this.__resources, input);
  }

  public describeAppInstanceAdmin(input: shapes.ChimeSdkIdentityDescribeAppInstanceAdminRequest): ChimeSDKIdentityResponsesDescribeAppInstanceAdmin {
    return new ChimeSDKIdentityResponsesDescribeAppInstanceAdmin(this, this.__resources, input);
  }

  public describeAppInstanceUser(input: shapes.ChimeSdkIdentityDescribeAppInstanceUserRequest): ChimeSDKIdentityResponsesDescribeAppInstanceUser {
    return new ChimeSDKIdentityResponsesDescribeAppInstanceUser(this, this.__resources, input);
  }

  public fetchAppInstanceRetentionSettings(input: shapes.ChimeSdkIdentityGetAppInstanceRetentionSettingsRequest): ChimeSDKIdentityResponsesFetchAppInstanceRetentionSettings {
    return new ChimeSDKIdentityResponsesFetchAppInstanceRetentionSettings(this, this.__resources, input);
  }

  public listAppInstanceAdmins(input: shapes.ChimeSdkIdentityListAppInstanceAdminsRequest): ChimeSDKIdentityResponsesListAppInstanceAdmins {
    return new ChimeSDKIdentityResponsesListAppInstanceAdmins(this, this.__resources, input);
  }

  public listAppInstanceUsers(input: shapes.ChimeSdkIdentityListAppInstanceUsersRequest): ChimeSDKIdentityResponsesListAppInstanceUsers {
    return new ChimeSDKIdentityResponsesListAppInstanceUsers(this, this.__resources, input);
  }

  public listAppInstances(input: shapes.ChimeSdkIdentityListAppInstancesRequest): ChimeSDKIdentityResponsesListAppInstances {
    return new ChimeSDKIdentityResponsesListAppInstances(this, this.__resources, input);
  }

  public putAppInstanceRetentionSettings(input: shapes.ChimeSdkIdentityPutAppInstanceRetentionSettingsRequest): ChimeSDKIdentityResponsesPutAppInstanceRetentionSettings {
    return new ChimeSDKIdentityResponsesPutAppInstanceRetentionSettings(this, this.__resources, input);
  }

  public updateAppInstance(input: shapes.ChimeSdkIdentityUpdateAppInstanceRequest): ChimeSDKIdentityResponsesUpdateAppInstance {
    return new ChimeSDKIdentityResponsesUpdateAppInstance(this, this.__resources, input);
  }

  public updateAppInstanceUser(input: shapes.ChimeSdkIdentityUpdateAppInstanceUserRequest): ChimeSDKIdentityResponsesUpdateAppInstanceUser {
    return new ChimeSDKIdentityResponsesUpdateAppInstanceUser(this, this.__resources, input);
  }

}

export class ChimeSDKIdentityResponsesCreateAppInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityCreateAppInstanceRequest) {
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAppInstance',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.CreateAppInstance.AppInstanceArn'),
        outputPath: 'AppInstanceArn',
        parameters: {
          Name: this.__input.name,
          Metadata: this.__input.metadata,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAppInstance.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesCreateAppInstanceAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityCreateAppInstanceAdminRequest) {
  }

  public get appInstanceAdmin(): ChimeSDKIdentityResponsesCreateAppInstanceAdminAppInstanceAdmin {
    return new ChimeSDKIdentityResponsesCreateAppInstanceAdminAppInstanceAdmin(this.__scope, this.__resources, this.__input);
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAppInstanceAdmin',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.CreateAppInstanceAdmin.AppInstanceArn'),
        outputPath: 'AppInstanceArn',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAppInstanceAdmin.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesCreateAppInstanceAdminAppInstanceAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityCreateAppInstanceAdminRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAppInstanceAdmin',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.CreateAppInstanceAdmin.AppInstanceAdmin.Arn'),
        outputPath: 'AppInstanceAdmin.Arn',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAppInstanceAdmin.AppInstanceAdmin.Arn', props);
    return resource.getResponseField('AppInstanceAdmin.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAppInstanceAdmin',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.CreateAppInstanceAdmin.AppInstanceAdmin.Name'),
        outputPath: 'AppInstanceAdmin.Name',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAppInstanceAdmin.AppInstanceAdmin.Name', props);
    return resource.getResponseField('AppInstanceAdmin.Name') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesCreateAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityCreateAppInstanceUserRequest) {
  }

  public get appInstanceUserArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAppInstanceUser',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.CreateAppInstanceUser.AppInstanceUserArn'),
        outputPath: 'AppInstanceUserArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          AppInstanceUserId: this.__input.appInstanceUserId,
          Name: this.__input.name,
          Metadata: this.__input.metadata,
          ClientRequestToken: this.__input.clientRequestToken,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAppInstanceUser.AppInstanceUserArn', props);
    return resource.getResponseField('AppInstanceUserArn') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesDescribeAppInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityDescribeAppInstanceRequest) {
  }

  public get appInstance(): ChimeSDKIdentityResponsesDescribeAppInstanceAppInstance {
    return new ChimeSDKIdentityResponsesDescribeAppInstanceAppInstance(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKIdentityResponsesDescribeAppInstanceAppInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityDescribeAppInstanceRequest) {
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstance',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstance.AppInstance.AppInstanceArn'),
        outputPath: 'AppInstance.AppInstanceArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstance.AppInstance.AppInstanceArn', props);
    return resource.getResponseField('AppInstance.AppInstanceArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstance',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstance.AppInstance.Name'),
        outputPath: 'AppInstance.Name',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstance.AppInstance.Name', props);
    return resource.getResponseField('AppInstance.Name') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstance',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstance.AppInstance.CreatedTimestamp'),
        outputPath: 'AppInstance.CreatedTimestamp',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstance.AppInstance.CreatedTimestamp', props);
    return resource.getResponseField('AppInstance.CreatedTimestamp') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstance',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstance.AppInstance.LastUpdatedTimestamp'),
        outputPath: 'AppInstance.LastUpdatedTimestamp',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstance.AppInstance.LastUpdatedTimestamp', props);
    return resource.getResponseField('AppInstance.LastUpdatedTimestamp') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstance',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstance.AppInstance.Metadata'),
        outputPath: 'AppInstance.Metadata',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstance.AppInstance.Metadata', props);
    return resource.getResponseField('AppInstance.Metadata') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesDescribeAppInstanceAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityDescribeAppInstanceAdminRequest) {
  }

  public get appInstanceAdmin(): ChimeSDKIdentityResponsesDescribeAppInstanceAdminAppInstanceAdmin {
    return new ChimeSDKIdentityResponsesDescribeAppInstanceAdminAppInstanceAdmin(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKIdentityResponsesDescribeAppInstanceAdminAppInstanceAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityDescribeAppInstanceAdminRequest) {
  }

  public get admin(): ChimeSDKIdentityResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin {
    return new ChimeSDKIdentityResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin(this.__scope, this.__resources, this.__input);
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceAdmin',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstanceAdmin.AppInstanceAdmin.AppInstanceArn'),
        outputPath: 'AppInstanceAdmin.AppInstanceArn',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceAdmin.AppInstanceAdmin.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceAdmin.AppInstanceArn') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceAdmin',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstanceAdmin.AppInstanceAdmin.CreatedTimestamp'),
        outputPath: 'AppInstanceAdmin.CreatedTimestamp',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceAdmin.AppInstanceAdmin.CreatedTimestamp', props);
    return resource.getResponseField('AppInstanceAdmin.CreatedTimestamp') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesDescribeAppInstanceAdminAppInstanceAdminAdmin {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityDescribeAppInstanceAdminRequest) {
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceAdmin',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstanceAdmin.AppInstanceAdmin.Admin.Arn'),
        outputPath: 'AppInstanceAdmin.Admin.Arn',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceAdmin.AppInstanceAdmin.Admin.Arn', props);
    return resource.getResponseField('AppInstanceAdmin.Admin.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceAdmin',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstanceAdmin.AppInstanceAdmin.Admin.Name'),
        outputPath: 'AppInstanceAdmin.Admin.Name',
        parameters: {
          AppInstanceAdminArn: this.__input.appInstanceAdminArn,
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceAdmin.AppInstanceAdmin.Admin.Name', props);
    return resource.getResponseField('AppInstanceAdmin.Admin.Name') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesDescribeAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityDescribeAppInstanceUserRequest) {
  }

  public get appInstanceUser(): ChimeSDKIdentityResponsesDescribeAppInstanceUserAppInstanceUser {
    return new ChimeSDKIdentityResponsesDescribeAppInstanceUserAppInstanceUser(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKIdentityResponsesDescribeAppInstanceUserAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityDescribeAppInstanceUserRequest) {
  }

  public get appInstanceUserArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceUser',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstanceUser.AppInstanceUser.AppInstanceUserArn'),
        outputPath: 'AppInstanceUser.AppInstanceUserArn',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceUser.AppInstanceUser.AppInstanceUserArn', props);
    return resource.getResponseField('AppInstanceUser.AppInstanceUserArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceUser',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstanceUser.AppInstanceUser.Name'),
        outputPath: 'AppInstanceUser.Name',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceUser.AppInstanceUser.Name', props);
    return resource.getResponseField('AppInstanceUser.Name') as unknown as string;
  }

  public get metadata(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceUser',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstanceUser.AppInstanceUser.Metadata'),
        outputPath: 'AppInstanceUser.Metadata',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceUser.AppInstanceUser.Metadata', props);
    return resource.getResponseField('AppInstanceUser.Metadata') as unknown as string;
  }

  public get createdTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceUser',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstanceUser.AppInstanceUser.CreatedTimestamp'),
        outputPath: 'AppInstanceUser.CreatedTimestamp',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceUser.AppInstanceUser.CreatedTimestamp', props);
    return resource.getResponseField('AppInstanceUser.CreatedTimestamp') as unknown as string;
  }

  public get lastUpdatedTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAppInstanceUser',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.DescribeAppInstanceUser.AppInstanceUser.LastUpdatedTimestamp'),
        outputPath: 'AppInstanceUser.LastUpdatedTimestamp',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAppInstanceUser.AppInstanceUser.LastUpdatedTimestamp', props);
    return resource.getResponseField('AppInstanceUser.LastUpdatedTimestamp') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesFetchAppInstanceRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityGetAppInstanceRetentionSettingsRequest) {
  }

  public get appInstanceRetentionSettings(): ChimeSDKIdentityResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings {
    return new ChimeSDKIdentityResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings(this.__scope, this.__resources, this.__input);
  }

  public get initiateDeletionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppInstanceRetentionSettings',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.GetAppInstanceRetentionSettings.InitiateDeletionTimestamp'),
        outputPath: 'InitiateDeletionTimestamp',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppInstanceRetentionSettings.InitiateDeletionTimestamp', props);
    return resource.getResponseField('InitiateDeletionTimestamp') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityGetAppInstanceRetentionSettingsRequest) {
  }

  public get channelRetentionSettings(): ChimeSDKIdentityResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings {
    return new ChimeSDKIdentityResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKIdentityResponsesFetchAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityGetAppInstanceRetentionSettingsRequest) {
  }

  public get retentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getAppInstanceRetentionSettings',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.GetAppInstanceRetentionSettings.AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays'),
        outputPath: 'AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetAppInstanceRetentionSettings.AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays', props);
    return resource.getResponseField('AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimeSDKIdentityResponsesListAppInstanceAdmins {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityListAppInstanceAdminsRequest) {
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceAdmins',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.ListAppInstanceAdmins.AppInstanceArn'),
        outputPath: 'AppInstanceArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceAdmins.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

  public get appInstanceAdmins(): shapes.ChimeSdkIdentityAppInstanceAdminSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceAdmins',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.ListAppInstanceAdmins.AppInstanceAdmins'),
        outputPath: 'AppInstanceAdmins',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceAdmins.AppInstanceAdmins', props);
    return resource.getResponseField('AppInstanceAdmins') as unknown as shapes.ChimeSdkIdentityAppInstanceAdminSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceAdmins',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.ListAppInstanceAdmins.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceAdmins.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesListAppInstanceUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityListAppInstanceUsersRequest) {
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceUsers',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.ListAppInstanceUsers.AppInstanceArn'),
        outputPath: 'AppInstanceArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceUsers.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

  public get appInstanceUsers(): shapes.ChimeSdkIdentityAppInstanceUserSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceUsers',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.ListAppInstanceUsers.AppInstanceUsers'),
        outputPath: 'AppInstanceUsers',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceUsers.AppInstanceUsers', props);
    return resource.getResponseField('AppInstanceUsers') as unknown as shapes.ChimeSdkIdentityAppInstanceUserSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstanceUsers',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.ListAppInstanceUsers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstanceUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesListAppInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityListAppInstancesRequest) {
  }

  public get appInstances(): shapes.ChimeSdkIdentityAppInstanceSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstances',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.ListAppInstances.AppInstances'),
        outputPath: 'AppInstances',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstances.AppInstances', props);
    return resource.getResponseField('AppInstances') as unknown as shapes.ChimeSdkIdentityAppInstanceSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAppInstances',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.ListAppInstances.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAppInstances.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesPutAppInstanceRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityPutAppInstanceRetentionSettingsRequest) {
  }

  public get appInstanceRetentionSettings(): ChimeSDKIdentityResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings {
    return new ChimeSDKIdentityResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings(this.__scope, this.__resources, this.__input);
  }

  public get initiateDeletionTimestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppInstanceRetentionSettings',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.PutAppInstanceRetentionSettings.InitiateDeletionTimestamp'),
        outputPath: 'InitiateDeletionTimestamp',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          AppInstanceRetentionSettings: {
            ChannelRetentionSettings: {
              RetentionDays: this.__input.appInstanceRetentionSettings.channelRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppInstanceRetentionSettings.InitiateDeletionTimestamp', props);
    return resource.getResponseField('InitiateDeletionTimestamp') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityPutAppInstanceRetentionSettingsRequest) {
  }

  public get channelRetentionSettings(): ChimeSDKIdentityResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings {
    return new ChimeSDKIdentityResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings(this.__scope, this.__resources, this.__input);
  }

}

export class ChimeSDKIdentityResponsesPutAppInstanceRetentionSettingsAppInstanceRetentionSettingsChannelRetentionSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityPutAppInstanceRetentionSettingsRequest) {
  }

  public get retentionDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putAppInstanceRetentionSettings',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.PutAppInstanceRetentionSettings.AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays'),
        outputPath: 'AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          AppInstanceRetentionSettings: {
            ChannelRetentionSettings: {
              RetentionDays: this.__input.appInstanceRetentionSettings.channelRetentionSettings?.retentionDays,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PutAppInstanceRetentionSettings.AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays', props);
    return resource.getResponseField('AppInstanceRetentionSettings.ChannelRetentionSettings.RetentionDays') as unknown as number;
  }

}

export class ChimeSDKIdentityResponsesUpdateAppInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityUpdateAppInstanceRequest) {
  }

  public get appInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAppInstance',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.UpdateAppInstance.AppInstanceArn'),
        outputPath: 'AppInstanceArn',
        parameters: {
          AppInstanceArn: this.__input.appInstanceArn,
          Name: this.__input.name,
          Metadata: this.__input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAppInstance.AppInstanceArn', props);
    return resource.getResponseField('AppInstanceArn') as unknown as string;
  }

}

export class ChimeSDKIdentityResponsesUpdateAppInstanceUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ChimeSdkIdentityUpdateAppInstanceUserRequest) {
  }

  public get appInstanceUserArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAppInstanceUser',
        service: 'ChimeSDKIdentity',
        physicalResourceId: cr.PhysicalResourceId.of('ChimeSDKIdentity.UpdateAppInstanceUser.AppInstanceUserArn'),
        outputPath: 'AppInstanceUserArn',
        parameters: {
          AppInstanceUserArn: this.__input.appInstanceUserArn,
          Name: this.__input.name,
          Metadata: this.__input.metadata,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateAppInstanceUser.AppInstanceUserArn', props);
    return resource.getResponseField('AppInstanceUserArn') as unknown as string;
  }

}

