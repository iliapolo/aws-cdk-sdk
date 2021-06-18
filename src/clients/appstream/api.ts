import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class AppStreamClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateFleet(input: shapes.AppStreamAssociateFleetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.AssociateFleet'),
        parameters: {
          FleetName: input.fleetName,
          StackName: input.stackName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateFleet', props);
  }

  public batchAssociateUserStack(input: shapes.AppStreamBatchAssociateUserStackRequest): AppStreamBatchAssociateUserStack {
    return new AppStreamBatchAssociateUserStack(this, 'BatchAssociateUserStack', this.__resources, input);
  }

  public batchDisassociateUserStack(input: shapes.AppStreamBatchDisassociateUserStackRequest): AppStreamBatchDisassociateUserStack {
    return new AppStreamBatchDisassociateUserStack(this, 'BatchDisassociateUserStack', this.__resources, input);
  }

  public copyImage(input: shapes.AppStreamCopyImageRequest): AppStreamCopyImage {
    return new AppStreamCopyImage(this, 'CopyImage', this.__resources, input);
  }

  public createDirectoryConfig(input: shapes.AppStreamCreateDirectoryConfigRequest): AppStreamCreateDirectoryConfig {
    return new AppStreamCreateDirectoryConfig(this, 'CreateDirectoryConfig', this.__resources, input);
  }

  public createFleet(input: shapes.AppStreamCreateFleetRequest): AppStreamCreateFleet {
    return new AppStreamCreateFleet(this, 'CreateFleet', this.__resources, input);
  }

  public createImageBuilder(input: shapes.AppStreamCreateImageBuilderRequest): AppStreamCreateImageBuilder {
    return new AppStreamCreateImageBuilder(this, 'CreateImageBuilder', this.__resources, input);
  }

  public createImageBuilderStreamingUrl(input: shapes.AppStreamCreateImageBuilderStreamingUrlRequest): AppStreamCreateImageBuilderStreamingUrl {
    return new AppStreamCreateImageBuilderStreamingUrl(this, 'CreateImageBuilderStreamingUrl', this.__resources, input);
  }

  public createStack(input: shapes.AppStreamCreateStackRequest): AppStreamCreateStack {
    return new AppStreamCreateStack(this, 'CreateStack', this.__resources, input);
  }

  public createStreamingUrl(input: shapes.AppStreamCreateStreamingUrlRequest): AppStreamCreateStreamingUrl {
    return new AppStreamCreateStreamingUrl(this, 'CreateStreamingUrl', this.__resources, input);
  }

  public createUsageReportSubscription(): AppStreamCreateUsageReportSubscription {
    return new AppStreamCreateUsageReportSubscription(this, 'CreateUsageReportSubscription', this.__resources);
  }

  public createUser(input: shapes.AppStreamCreateUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateUser'),
        parameters: {
          UserName: input.userName,
          MessageAction: input.messageAction,
          FirstName: input.firstName,
          LastName: input.lastName,
          AuthenticationType: input.authenticationType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateUser', props);
  }

  public deleteDirectoryConfig(input: shapes.AppStreamDeleteDirectoryConfigRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDirectoryConfig',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteDirectoryConfig'),
        parameters: {
          DirectoryName: input.directoryName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDirectoryConfig', props);
  }

  public deleteFleet(input: shapes.AppStreamDeleteFleetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteFleet'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFleet', props);
  }

  public deleteImage(input: shapes.AppStreamDeleteImageRequest): AppStreamDeleteImage {
    return new AppStreamDeleteImage(this, 'DeleteImage', this.__resources, input);
  }

  public deleteImageBuilder(input: shapes.AppStreamDeleteImageBuilderRequest): AppStreamDeleteImageBuilder {
    return new AppStreamDeleteImageBuilder(this, 'DeleteImageBuilder', this.__resources, input);
  }

  public deleteImagePermissions(input: shapes.AppStreamDeleteImagePermissionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImagePermissions',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImagePermissions'),
        parameters: {
          Name: input.name,
          SharedAccountId: input.sharedAccountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteImagePermissions', props);
  }

  public deleteStack(input: shapes.AppStreamDeleteStackRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteStack'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStack', props);
  }

  public deleteUsageReportSubscription(): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUsageReportSubscription',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteUsageReportSubscription'),
        parameters: {
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUsageReportSubscription', props);
  }

  public deleteUser(input: shapes.AppStreamDeleteUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteUser'),
        parameters: {
          UserName: input.userName,
          AuthenticationType: input.authenticationType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUser', props);
  }

  public describeDirectoryConfigs(input: shapes.AppStreamDescribeDirectoryConfigsRequest): AppStreamDescribeDirectoryConfigs {
    return new AppStreamDescribeDirectoryConfigs(this, 'DescribeDirectoryConfigs', this.__resources, input);
  }

  public describeFleets(input: shapes.AppStreamDescribeFleetsRequest): AppStreamDescribeFleets {
    return new AppStreamDescribeFleets(this, 'DescribeFleets', this.__resources, input);
  }

  public describeImageBuilders(input: shapes.AppStreamDescribeImageBuildersRequest): AppStreamDescribeImageBuilders {
    return new AppStreamDescribeImageBuilders(this, 'DescribeImageBuilders', this.__resources, input);
  }

  public describeImagePermissions(input: shapes.AppStreamDescribeImagePermissionsRequest): AppStreamDescribeImagePermissions {
    return new AppStreamDescribeImagePermissions(this, 'DescribeImagePermissions', this.__resources, input);
  }

  public describeImages(input: shapes.AppStreamDescribeImagesRequest): AppStreamDescribeImages {
    return new AppStreamDescribeImages(this, 'DescribeImages', this.__resources, input);
  }

  public describeSessions(input: shapes.AppStreamDescribeSessionsRequest): AppStreamDescribeSessions {
    return new AppStreamDescribeSessions(this, 'DescribeSessions', this.__resources, input);
  }

  public describeStacks(input: shapes.AppStreamDescribeStacksRequest): AppStreamDescribeStacks {
    return new AppStreamDescribeStacks(this, 'DescribeStacks', this.__resources, input);
  }

  public describeUsageReportSubscriptions(input: shapes.AppStreamDescribeUsageReportSubscriptionsRequest): AppStreamDescribeUsageReportSubscriptions {
    return new AppStreamDescribeUsageReportSubscriptions(this, 'DescribeUsageReportSubscriptions', this.__resources, input);
  }

  public describeUserStackAssociations(input: shapes.AppStreamDescribeUserStackAssociationsRequest): AppStreamDescribeUserStackAssociations {
    return new AppStreamDescribeUserStackAssociations(this, 'DescribeUserStackAssociations', this.__resources, input);
  }

  public describeUsers(input: shapes.AppStreamDescribeUsersRequest): AppStreamDescribeUsers {
    return new AppStreamDescribeUsers(this, 'DescribeUsers', this.__resources, input);
  }

  public disableUser(input: shapes.AppStreamDisableUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disableUser',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DisableUser'),
        parameters: {
          UserName: input.userName,
          AuthenticationType: input.authenticationType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisableUser', props);
  }

  public disassociateFleet(input: shapes.AppStreamDisassociateFleetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DisassociateFleet'),
        parameters: {
          FleetName: input.fleetName,
          StackName: input.stackName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateFleet', props);
  }

  public enableUser(input: shapes.AppStreamEnableUserRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'enableUser',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.EnableUser'),
        parameters: {
          UserName: input.userName,
          AuthenticationType: input.authenticationType,
        },
      },
    };
    new cr.AwsCustomResource(this, 'EnableUser', props);
  }

  public expireSession(input: shapes.AppStreamExpireSessionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'expireSession',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.ExpireSession'),
        parameters: {
          SessionId: input.sessionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ExpireSession', props);
  }

  public listAssociatedFleets(input: shapes.AppStreamListAssociatedFleetsRequest): AppStreamListAssociatedFleets {
    return new AppStreamListAssociatedFleets(this, 'ListAssociatedFleets', this.__resources, input);
  }

  public listAssociatedStacks(input: shapes.AppStreamListAssociatedStacksRequest): AppStreamListAssociatedStacks {
    return new AppStreamListAssociatedStacks(this, 'ListAssociatedStacks', this.__resources, input);
  }

  public listTagsForResource(input: shapes.AppStreamListTagsForResourceRequest): AppStreamListTagsForResource {
    return new AppStreamListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public startFleet(input: shapes.AppStreamStartFleetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartFleet'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartFleet', props);
  }

  public startImageBuilder(input: shapes.AppStreamStartImageBuilderRequest): AppStreamStartImageBuilder {
    return new AppStreamStartImageBuilder(this, 'StartImageBuilder', this.__resources, input);
  }

  public stopFleet(input: shapes.AppStreamStopFleetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopFleet'),
        parameters: {
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopFleet', props);
  }

  public stopImageBuilder(input: shapes.AppStreamStopImageBuilderRequest): AppStreamStopImageBuilder {
    return new AppStreamStopImageBuilder(this, 'StopImageBuilder', this.__resources, input);
  }

  public tagResource(input: shapes.AppStreamTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.AppStreamUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateDirectoryConfig(input: shapes.AppStreamUpdateDirectoryConfigRequest): AppStreamUpdateDirectoryConfig {
    return new AppStreamUpdateDirectoryConfig(this, 'UpdateDirectoryConfig', this.__resources, input);
  }

  public updateFleet(input: shapes.AppStreamUpdateFleetRequest): AppStreamUpdateFleet {
    return new AppStreamUpdateFleet(this, 'UpdateFleet', this.__resources, input);
  }

  public updateImagePermissions(input: shapes.AppStreamUpdateImagePermissionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateImagePermissions',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateImagePermissions'),
        parameters: {
          Name: input.name,
          SharedAccountId: input.sharedAccountId,
          ImagePermissions: {
            allowFleet: input.imagePermissions.allowFleet,
            allowImageBuilder: input.imagePermissions.allowImageBuilder,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateImagePermissions', props);
  }

  public updateStack(input: shapes.AppStreamUpdateStackRequest): AppStreamUpdateStack {
    return new AppStreamUpdateStack(this, 'UpdateStack', this.__resources, input);
  }

}

export class AppStreamBatchAssociateUserStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamBatchAssociateUserStackRequest) {
    super(scope, id);
  }

  public get errors(): shapes.AppStreamUserStackAssociationError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchAssociateUserStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.BatchAssociateUserStack.errors'),
        outputPath: 'errors',
        parameters: {
          UserStackAssociations: this.input.userStackAssociations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchAssociateUserStack.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.AppStreamUserStackAssociationError[];
  }

}

export class AppStreamBatchDisassociateUserStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamBatchDisassociateUserStackRequest) {
    super(scope, id);
  }

  public get errors(): shapes.AppStreamUserStackAssociationError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDisassociateUserStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.BatchDisassociateUserStack.errors'),
        outputPath: 'errors',
        parameters: {
          UserStackAssociations: this.input.userStackAssociations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDisassociateUserStack.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.AppStreamUserStackAssociationError[];
  }

}

export class AppStreamCopyImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCopyImageRequest) {
    super(scope, id);
  }

  public get destinationImageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CopyImage.DestinationImageName'),
        outputPath: 'DestinationImageName',
        parameters: {
          SourceImageName: this.input.sourceImageName,
          DestinationImageName: this.input.destinationImageName,
          DestinationRegion: this.input.destinationRegion,
          DestinationImageDescription: this.input.destinationImageDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyImage.DestinationImageName', props);
    return resource.getResponseField('DestinationImageName') as unknown as string;
  }

}

export class AppStreamCreateDirectoryConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateDirectoryConfigRequest) {
    super(scope, id);
  }

  public get directoryConfig(): AppStreamCreateDirectoryConfigDirectoryConfig {
    return new AppStreamCreateDirectoryConfigDirectoryConfig(this, 'DirectoryConfig', this.__resources, this.input);
  }

}

export class AppStreamCreateDirectoryConfigDirectoryConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateDirectoryConfigRequest) {
    super(scope, id);
  }

  public get directoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectoryConfig',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateDirectoryConfig.DirectoryConfig.DirectoryName'),
        outputPath: 'DirectoryConfig.DirectoryName',
        parameters: {
          DirectoryName: this.input.directoryName,
          OrganizationalUnitDistinguishedNames: this.input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.input.serviceAccountCredentials?.accountName,
            AccountPassword: this.input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectoryConfig.DirectoryConfig.DirectoryName', props);
    return resource.getResponseField('DirectoryConfig.DirectoryName') as unknown as string;
  }

  public get organizationalUnitDistinguishedNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectoryConfig',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateDirectoryConfig.DirectoryConfig.OrganizationalUnitDistinguishedNames'),
        outputPath: 'DirectoryConfig.OrganizationalUnitDistinguishedNames',
        parameters: {
          DirectoryName: this.input.directoryName,
          OrganizationalUnitDistinguishedNames: this.input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.input.serviceAccountCredentials?.accountName,
            AccountPassword: this.input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectoryConfig.DirectoryConfig.OrganizationalUnitDistinguishedNames', props);
    return resource.getResponseField('DirectoryConfig.OrganizationalUnitDistinguishedNames') as unknown as string[];
  }

  public get serviceAccountCredentials(): AppStreamCreateDirectoryConfigDirectoryConfigServiceAccountCredentials {
    return new AppStreamCreateDirectoryConfigDirectoryConfigServiceAccountCredentials(this, 'ServiceAccountCredentials', this.__resources, this.input);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectoryConfig',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateDirectoryConfig.DirectoryConfig.CreatedTime'),
        outputPath: 'DirectoryConfig.CreatedTime',
        parameters: {
          DirectoryName: this.input.directoryName,
          OrganizationalUnitDistinguishedNames: this.input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.input.serviceAccountCredentials?.accountName,
            AccountPassword: this.input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectoryConfig.DirectoryConfig.CreatedTime', props);
    return resource.getResponseField('DirectoryConfig.CreatedTime') as unknown as string;
  }

}

export class AppStreamCreateDirectoryConfigDirectoryConfigServiceAccountCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateDirectoryConfigRequest) {
    super(scope, id);
  }

  public get accountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectoryConfig',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountName'),
        outputPath: 'DirectoryConfig.ServiceAccountCredentials.AccountName',
        parameters: {
          DirectoryName: this.input.directoryName,
          OrganizationalUnitDistinguishedNames: this.input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.input.serviceAccountCredentials?.accountName,
            AccountPassword: this.input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountName', props);
    return resource.getResponseField('DirectoryConfig.ServiceAccountCredentials.AccountName') as unknown as string;
  }

  public get accountPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDirectoryConfig',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountPassword'),
        outputPath: 'DirectoryConfig.ServiceAccountCredentials.AccountPassword',
        parameters: {
          DirectoryName: this.input.directoryName,
          OrganizationalUnitDistinguishedNames: this.input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.input.serviceAccountCredentials?.accountName,
            AccountPassword: this.input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountPassword', props);
    return resource.getResponseField('DirectoryConfig.ServiceAccountCredentials.AccountPassword') as unknown as string;
  }

}

export class AppStreamCreateFleet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateFleetRequest) {
    super(scope, id);
  }

  public get fleet(): AppStreamCreateFleetFleet {
    return new AppStreamCreateFleetFleet(this, 'Fleet', this.__resources, this.input);
  }

}

export class AppStreamCreateFleetFleet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateFleetRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.Arn'),
        outputPath: 'Fleet.Arn',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.Arn', props);
    return resource.getResponseField('Fleet.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.Name'),
        outputPath: 'Fleet.Name',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.Name', props);
    return resource.getResponseField('Fleet.Name') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.DisplayName'),
        outputPath: 'Fleet.DisplayName',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.DisplayName', props);
    return resource.getResponseField('Fleet.DisplayName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.Description'),
        outputPath: 'Fleet.Description',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.Description', props);
    return resource.getResponseField('Fleet.Description') as unknown as string;
  }

  public get imageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.ImageName'),
        outputPath: 'Fleet.ImageName',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.ImageName', props);
    return resource.getResponseField('Fleet.ImageName') as unknown as string;
  }

  public get imageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.ImageArn'),
        outputPath: 'Fleet.ImageArn',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.ImageArn', props);
    return resource.getResponseField('Fleet.ImageArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.InstanceType'),
        outputPath: 'Fleet.InstanceType',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.InstanceType', props);
    return resource.getResponseField('Fleet.InstanceType') as unknown as string;
  }

  public get fleetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.FleetType'),
        outputPath: 'Fleet.FleetType',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.FleetType', props);
    return resource.getResponseField('Fleet.FleetType') as unknown as string;
  }

  public get computeCapacityStatus(): AppStreamCreateFleetFleetComputeCapacityStatus {
    return new AppStreamCreateFleetFleetComputeCapacityStatus(this, 'ComputeCapacityStatus', this.__resources, this.input);
  }

  public get maxUserDurationInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.MaxUserDurationInSeconds'),
        outputPath: 'Fleet.MaxUserDurationInSeconds',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.MaxUserDurationInSeconds', props);
    return resource.getResponseField('Fleet.MaxUserDurationInSeconds') as unknown as number;
  }

  public get disconnectTimeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.DisconnectTimeoutInSeconds'),
        outputPath: 'Fleet.DisconnectTimeoutInSeconds',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.DisconnectTimeoutInSeconds', props);
    return resource.getResponseField('Fleet.DisconnectTimeoutInSeconds') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.State'),
        outputPath: 'Fleet.State',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.State', props);
    return resource.getResponseField('Fleet.State') as unknown as string;
  }

  public get vpcConfig(): AppStreamCreateFleetFleetVpcConfig {
    return new AppStreamCreateFleetFleetVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.CreatedTime'),
        outputPath: 'Fleet.CreatedTime',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.CreatedTime', props);
    return resource.getResponseField('Fleet.CreatedTime') as unknown as string;
  }

  public get fleetErrors(): shapes.AppStreamFleetError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.FleetErrors'),
        outputPath: 'Fleet.FleetErrors',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.FleetErrors', props);
    return resource.getResponseField('Fleet.FleetErrors') as unknown as shapes.AppStreamFleetError[];
  }

  public get enableDefaultInternetAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.EnableDefaultInternetAccess'),
        outputPath: 'Fleet.EnableDefaultInternetAccess',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.EnableDefaultInternetAccess', props);
    return resource.getResponseField('Fleet.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamCreateFleetFleetDomainJoinInfo {
    return new AppStreamCreateFleetFleetDomainJoinInfo(this, 'DomainJoinInfo', this.__resources, this.input);
  }

  public get idleDisconnectTimeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.IdleDisconnectTimeoutInSeconds'),
        outputPath: 'Fleet.IdleDisconnectTimeoutInSeconds',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.IdleDisconnectTimeoutInSeconds', props);
    return resource.getResponseField('Fleet.IdleDisconnectTimeoutInSeconds') as unknown as number;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.IamRoleArn'),
        outputPath: 'Fleet.IamRoleArn',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.IamRoleArn', props);
    return resource.getResponseField('Fleet.IamRoleArn') as unknown as string;
  }

  public get streamView(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.StreamView'),
        outputPath: 'Fleet.StreamView',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.StreamView', props);
    return resource.getResponseField('Fleet.StreamView') as unknown as string;
  }

}

export class AppStreamCreateFleetFleetComputeCapacityStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateFleetRequest) {
    super(scope, id);
  }

  public get desired(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.ComputeCapacityStatus.Desired'),
        outputPath: 'Fleet.ComputeCapacityStatus.Desired',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.ComputeCapacityStatus.Desired', props);
    return resource.getResponseField('Fleet.ComputeCapacityStatus.Desired') as unknown as number;
  }

  public get running(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.ComputeCapacityStatus.Running'),
        outputPath: 'Fleet.ComputeCapacityStatus.Running',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.ComputeCapacityStatus.Running', props);
    return resource.getResponseField('Fleet.ComputeCapacityStatus.Running') as unknown as number;
  }

  public get inUse(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.ComputeCapacityStatus.InUse'),
        outputPath: 'Fleet.ComputeCapacityStatus.InUse',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.ComputeCapacityStatus.InUse', props);
    return resource.getResponseField('Fleet.ComputeCapacityStatus.InUse') as unknown as number;
  }

  public get available(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.ComputeCapacityStatus.Available'),
        outputPath: 'Fleet.ComputeCapacityStatus.Available',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.ComputeCapacityStatus.Available', props);
    return resource.getResponseField('Fleet.ComputeCapacityStatus.Available') as unknown as number;
  }

}

export class AppStreamCreateFleetFleetVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateFleetRequest) {
    super(scope, id);
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.VpcConfig.SubnetIds'),
        outputPath: 'Fleet.VpcConfig.SubnetIds',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.VpcConfig.SubnetIds', props);
    return resource.getResponseField('Fleet.VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.VpcConfig.SecurityGroupIds'),
        outputPath: 'Fleet.VpcConfig.SecurityGroupIds',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('Fleet.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamCreateFleetFleetDomainJoinInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateFleetRequest) {
    super(scope, id);
  }

  public get directoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.DomainJoinInfo.DirectoryName'),
        outputPath: 'Fleet.DomainJoinInfo.DirectoryName',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.DomainJoinInfo.DirectoryName', props);
    return resource.getResponseField('Fleet.DomainJoinInfo.DirectoryName') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateFleet.Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName'),
        outputPath: 'Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          FleetType: this.input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.input.tags,
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamCreateImageBuilder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateImageBuilderRequest) {
    super(scope, id);
  }

  public get imageBuilder(): AppStreamCreateImageBuilderImageBuilder {
    return new AppStreamCreateImageBuilderImageBuilder(this, 'ImageBuilder', this.__resources, this.input);
  }

}

export class AppStreamCreateImageBuilderImageBuilder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateImageBuilderRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.Name'),
        outputPath: 'ImageBuilder.Name',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.Name', props);
    return resource.getResponseField('ImageBuilder.Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.Arn'),
        outputPath: 'ImageBuilder.Arn',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.Arn', props);
    return resource.getResponseField('ImageBuilder.Arn') as unknown as string;
  }

  public get imageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.ImageArn'),
        outputPath: 'ImageBuilder.ImageArn',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.ImageArn', props);
    return resource.getResponseField('ImageBuilder.ImageArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.Description'),
        outputPath: 'ImageBuilder.Description',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.Description', props);
    return resource.getResponseField('ImageBuilder.Description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.DisplayName'),
        outputPath: 'ImageBuilder.DisplayName',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.DisplayName', props);
    return resource.getResponseField('ImageBuilder.DisplayName') as unknown as string;
  }

  public get vpcConfig(): AppStreamCreateImageBuilderImageBuilderVpcConfig {
    return new AppStreamCreateImageBuilderImageBuilderVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.InstanceType'),
        outputPath: 'ImageBuilder.InstanceType',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.InstanceType', props);
    return resource.getResponseField('ImageBuilder.InstanceType') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.Platform'),
        outputPath: 'ImageBuilder.Platform',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.Platform', props);
    return resource.getResponseField('ImageBuilder.Platform') as unknown as string;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.IamRoleArn'),
        outputPath: 'ImageBuilder.IamRoleArn',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.IamRoleArn', props);
    return resource.getResponseField('ImageBuilder.IamRoleArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.State'),
        outputPath: 'ImageBuilder.State',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.State', props);
    return resource.getResponseField('ImageBuilder.State') as unknown as string;
  }

  public get stateChangeReason(): AppStreamCreateImageBuilderImageBuilderStateChangeReason {
    return new AppStreamCreateImageBuilderImageBuilderStateChangeReason(this, 'StateChangeReason', this.__resources, this.input);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.CreatedTime'),
        outputPath: 'ImageBuilder.CreatedTime',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.CreatedTime', props);
    return resource.getResponseField('ImageBuilder.CreatedTime') as unknown as string;
  }

  public get enableDefaultInternetAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.EnableDefaultInternetAccess'),
        outputPath: 'ImageBuilder.EnableDefaultInternetAccess',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.EnableDefaultInternetAccess', props);
    return resource.getResponseField('ImageBuilder.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamCreateImageBuilderImageBuilderDomainJoinInfo {
    return new AppStreamCreateImageBuilderImageBuilderDomainJoinInfo(this, 'DomainJoinInfo', this.__resources, this.input);
  }

  public get networkAccessConfiguration(): AppStreamCreateImageBuilderImageBuilderNetworkAccessConfiguration {
    return new AppStreamCreateImageBuilderImageBuilderNetworkAccessConfiguration(this, 'NetworkAccessConfiguration', this.__resources, this.input);
  }

  public get imageBuilderErrors(): shapes.AppStreamResourceError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.ImageBuilderErrors'),
        outputPath: 'ImageBuilder.ImageBuilderErrors',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.ImageBuilderErrors', props);
    return resource.getResponseField('ImageBuilder.ImageBuilderErrors') as unknown as shapes.AppStreamResourceError[];
  }

  public get appstreamAgentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.AppstreamAgentVersion'),
        outputPath: 'ImageBuilder.AppstreamAgentVersion',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.AppstreamAgentVersion', props);
    return resource.getResponseField('ImageBuilder.AppstreamAgentVersion') as unknown as string;
  }

  public get accessEndpoints(): shapes.AppStreamAccessEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.AccessEndpoints'),
        outputPath: 'ImageBuilder.AccessEndpoints',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.AccessEndpoints', props);
    return resource.getResponseField('ImageBuilder.AccessEndpoints') as unknown as shapes.AppStreamAccessEndpoint[];
  }

}

export class AppStreamCreateImageBuilderImageBuilderVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateImageBuilderRequest) {
    super(scope, id);
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.VpcConfig.SubnetIds'),
        outputPath: 'ImageBuilder.VpcConfig.SubnetIds',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.VpcConfig.SubnetIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds'),
        outputPath: 'ImageBuilder.VpcConfig.SecurityGroupIds',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamCreateImageBuilderImageBuilderStateChangeReason extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateImageBuilderRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.StateChangeReason.Code'),
        outputPath: 'ImageBuilder.StateChangeReason.Code',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.StateChangeReason.Code', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.StateChangeReason.Message'),
        outputPath: 'ImageBuilder.StateChangeReason.Message',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.StateChangeReason.Message', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Message') as unknown as string;
  }

}

export class AppStreamCreateImageBuilderImageBuilderDomainJoinInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateImageBuilderRequest) {
    super(scope, id);
  }

  public get directoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName'),
        outputPath: 'ImageBuilder.DomainJoinInfo.DirectoryName',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.DirectoryName') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName'),
        outputPath: 'ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamCreateImageBuilderImageBuilderNetworkAccessConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateImageBuilderRequest) {
    super(scope, id);
  }

  public get eniPrivateIpAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress'),
        outputPath: 'ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress') as unknown as string;
  }

  public get eniId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId'),
        outputPath: 'ImageBuilder.NetworkAccessConfiguration.EniId',
        parameters: {
          Name: this.input.name,
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          InstanceType: this.input.instanceType,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.input.iamRoleArn,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniId') as unknown as string;
  }

}

export class AppStreamCreateImageBuilderStreamingUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateImageBuilderStreamingUrlRequest) {
    super(scope, id);
  }

  public get streamingUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilderStreamingUrl',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilderStreamingURL.StreamingURL'),
        outputPath: 'StreamingURL',
        parameters: {
          Name: this.input.name,
          Validity: this.input.validity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilderStreamingURL.StreamingURL', props);
    return resource.getResponseField('StreamingURL') as unknown as string;
  }

  public get expires(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createImageBuilderStreamingUrl',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateImageBuilderStreamingURL.Expires'),
        outputPath: 'Expires',
        parameters: {
          Name: this.input.name,
          Validity: this.input.validity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateImageBuilderStreamingURL.Expires', props);
    return resource.getResponseField('Expires') as unknown as string;
  }

}

export class AppStreamCreateStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateStackRequest) {
    super(scope, id);
  }

  public get stack(): AppStreamCreateStackStack {
    return new AppStreamCreateStackStack(this, 'Stack', this.__resources, this.input);
  }

}

export class AppStreamCreateStackStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateStackRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.Arn'),
        outputPath: 'Stack.Arn',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.Arn', props);
    return resource.getResponseField('Stack.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.Name'),
        outputPath: 'Stack.Name',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.Name', props);
    return resource.getResponseField('Stack.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.Description'),
        outputPath: 'Stack.Description',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.Description', props);
    return resource.getResponseField('Stack.Description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.DisplayName'),
        outputPath: 'Stack.DisplayName',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.DisplayName', props);
    return resource.getResponseField('Stack.DisplayName') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.CreatedTime'),
        outputPath: 'Stack.CreatedTime',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.CreatedTime', props);
    return resource.getResponseField('Stack.CreatedTime') as unknown as string;
  }

  public get storageConnectors(): shapes.AppStreamStorageConnector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.StorageConnectors'),
        outputPath: 'Stack.StorageConnectors',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.StorageConnectors', props);
    return resource.getResponseField('Stack.StorageConnectors') as unknown as shapes.AppStreamStorageConnector[];
  }

  public get redirectUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.RedirectURL'),
        outputPath: 'Stack.RedirectURL',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.RedirectURL', props);
    return resource.getResponseField('Stack.RedirectURL') as unknown as string;
  }

  public get feedbackUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.FeedbackURL'),
        outputPath: 'Stack.FeedbackURL',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.FeedbackURL', props);
    return resource.getResponseField('Stack.FeedbackURL') as unknown as string;
  }

  public get stackErrors(): shapes.AppStreamStackError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.StackErrors'),
        outputPath: 'Stack.StackErrors',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.StackErrors', props);
    return resource.getResponseField('Stack.StackErrors') as unknown as shapes.AppStreamStackError[];
  }

  public get userSettings(): shapes.AppStreamUserSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.UserSettings'),
        outputPath: 'Stack.UserSettings',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.UserSettings', props);
    return resource.getResponseField('Stack.UserSettings') as unknown as shapes.AppStreamUserSetting[];
  }

  public get applicationSettings(): AppStreamCreateStackStackApplicationSettings {
    return new AppStreamCreateStackStackApplicationSettings(this, 'ApplicationSettings', this.__resources, this.input);
  }

  public get accessEndpoints(): shapes.AppStreamAccessEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.AccessEndpoints'),
        outputPath: 'Stack.AccessEndpoints',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.AccessEndpoints', props);
    return resource.getResponseField('Stack.AccessEndpoints') as unknown as shapes.AppStreamAccessEndpoint[];
  }

  public get embedHostDomains(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.EmbedHostDomains'),
        outputPath: 'Stack.EmbedHostDomains',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.EmbedHostDomains', props);
    return resource.getResponseField('Stack.EmbedHostDomains') as unknown as string[];
  }

}

export class AppStreamCreateStackStackApplicationSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateStackRequest) {
    super(scope, id);
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.ApplicationSettings.Enabled'),
        outputPath: 'Stack.ApplicationSettings.Enabled',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.ApplicationSettings.Enabled', props);
    return resource.getResponseField('Stack.ApplicationSettings.Enabled') as unknown as boolean;
  }

  public get settingsGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.ApplicationSettings.SettingsGroup'),
        outputPath: 'Stack.ApplicationSettings.SettingsGroup',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.ApplicationSettings.SettingsGroup', props);
    return resource.getResponseField('Stack.ApplicationSettings.SettingsGroup') as unknown as string;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStack.Stack.ApplicationSettings.S3BucketName'),
        outputPath: 'Stack.ApplicationSettings.S3BucketName',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          StorageConnectors: this.input.storageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          Tags: this.input.tags,
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.Stack.ApplicationSettings.S3BucketName', props);
    return resource.getResponseField('Stack.ApplicationSettings.S3BucketName') as unknown as string;
  }

}

export class AppStreamCreateStreamingUrl extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamCreateStreamingUrlRequest) {
    super(scope, id);
  }

  public get streamingUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingUrl',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStreamingURL.StreamingURL'),
        outputPath: 'StreamingURL',
        parameters: {
          StackName: this.input.stackName,
          FleetName: this.input.fleetName,
          UserId: this.input.userId,
          ApplicationId: this.input.applicationId,
          Validity: this.input.validity,
          SessionContext: this.input.sessionContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingURL.StreamingURL', props);
    return resource.getResponseField('StreamingURL') as unknown as string;
  }

  public get expires(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStreamingUrl',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateStreamingURL.Expires'),
        outputPath: 'Expires',
        parameters: {
          StackName: this.input.stackName,
          FleetName: this.input.fleetName,
          UserId: this.input.userId,
          ApplicationId: this.input.applicationId,
          Validity: this.input.validity,
          SessionContext: this.input.sessionContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStreamingURL.Expires', props);
    return resource.getResponseField('Expires') as unknown as string;
  }

}

export class AppStreamCreateUsageReportSubscription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsageReportSubscription',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateUsageReportSubscription.S3BucketName'),
        outputPath: 'S3BucketName',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsageReportSubscription.S3BucketName', props);
    return resource.getResponseField('S3BucketName') as unknown as string;
  }

  public get schedule(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUsageReportSubscription',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.CreateUsageReportSubscription.Schedule'),
        outputPath: 'Schedule',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUsageReportSubscription.Schedule', props);
    return resource.getResponseField('Schedule') as unknown as string;
  }

}

export class AppStreamDeleteImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDeleteImageRequest) {
    super(scope, id);
  }

  public get image(): AppStreamDeleteImageImage {
    return new AppStreamDeleteImageImage(this, 'Image', this.__resources, this.input);
  }

}

export class AppStreamDeleteImageImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDeleteImageRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.Name'),
        outputPath: 'Image.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.Name', props);
    return resource.getResponseField('Image.Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.Arn'),
        outputPath: 'Image.Arn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.Arn', props);
    return resource.getResponseField('Image.Arn') as unknown as string;
  }

  public get baseImageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.BaseImageArn'),
        outputPath: 'Image.BaseImageArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.BaseImageArn', props);
    return resource.getResponseField('Image.BaseImageArn') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.DisplayName'),
        outputPath: 'Image.DisplayName',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.DisplayName', props);
    return resource.getResponseField('Image.DisplayName') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.State'),
        outputPath: 'Image.State',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.State', props);
    return resource.getResponseField('Image.State') as unknown as string;
  }

  public get visibility(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.Visibility'),
        outputPath: 'Image.Visibility',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.Visibility', props);
    return resource.getResponseField('Image.Visibility') as unknown as string;
  }

  public get imageBuilderSupported(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.ImageBuilderSupported'),
        outputPath: 'Image.ImageBuilderSupported',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.ImageBuilderSupported', props);
    return resource.getResponseField('Image.ImageBuilderSupported') as unknown as boolean;
  }

  public get imageBuilderName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.ImageBuilderName'),
        outputPath: 'Image.ImageBuilderName',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.ImageBuilderName', props);
    return resource.getResponseField('Image.ImageBuilderName') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.Platform'),
        outputPath: 'Image.Platform',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.Platform', props);
    return resource.getResponseField('Image.Platform') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.Description'),
        outputPath: 'Image.Description',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.Description', props);
    return resource.getResponseField('Image.Description') as unknown as string;
  }

  public get stateChangeReason(): AppStreamDeleteImageImageStateChangeReason {
    return new AppStreamDeleteImageImageStateChangeReason(this, 'StateChangeReason', this.__resources, this.input);
  }

  public get applications(): shapes.AppStreamApplication[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.Applications'),
        outputPath: 'Image.Applications',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.Applications', props);
    return resource.getResponseField('Image.Applications') as unknown as shapes.AppStreamApplication[];
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.CreatedTime'),
        outputPath: 'Image.CreatedTime',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.CreatedTime', props);
    return resource.getResponseField('Image.CreatedTime') as unknown as string;
  }

  public get publicBaseImageReleasedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.PublicBaseImageReleasedDate'),
        outputPath: 'Image.PublicBaseImageReleasedDate',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.PublicBaseImageReleasedDate', props);
    return resource.getResponseField('Image.PublicBaseImageReleasedDate') as unknown as string;
  }

  public get appstreamAgentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.AppstreamAgentVersion'),
        outputPath: 'Image.AppstreamAgentVersion',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.AppstreamAgentVersion', props);
    return resource.getResponseField('Image.AppstreamAgentVersion') as unknown as string;
  }

  public get imagePermissions(): AppStreamDeleteImageImageImagePermissions {
    return new AppStreamDeleteImageImageImagePermissions(this, 'ImagePermissions', this.__resources, this.input);
  }

}

export class AppStreamDeleteImageImageStateChangeReason extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDeleteImageRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.StateChangeReason.Code'),
        outputPath: 'Image.StateChangeReason.Code',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.StateChangeReason.Code', props);
    return resource.getResponseField('Image.StateChangeReason.Code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.StateChangeReason.Message'),
        outputPath: 'Image.StateChangeReason.Message',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.StateChangeReason.Message', props);
    return resource.getResponseField('Image.StateChangeReason.Message') as unknown as string;
  }

}

export class AppStreamDeleteImageImageImagePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDeleteImageRequest) {
    super(scope, id);
  }

  public get allowFleet(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.ImagePermissions.allowFleet'),
        outputPath: 'Image.ImagePermissions.allowFleet',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.ImagePermissions.allowFleet', props);
    return resource.getResponseField('Image.ImagePermissions.allowFleet') as unknown as boolean;
  }

  public get allowImageBuilder(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImage',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImage.Image.ImagePermissions.allowImageBuilder'),
        outputPath: 'Image.ImagePermissions.allowImageBuilder',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImage.Image.ImagePermissions.allowImageBuilder', props);
    return resource.getResponseField('Image.ImagePermissions.allowImageBuilder') as unknown as boolean;
  }

}

export class AppStreamDeleteImageBuilder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDeleteImageBuilderRequest) {
    super(scope, id);
  }

  public get imageBuilder(): AppStreamDeleteImageBuilderImageBuilder {
    return new AppStreamDeleteImageBuilderImageBuilder(this, 'ImageBuilder', this.__resources, this.input);
  }

}

export class AppStreamDeleteImageBuilderImageBuilder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDeleteImageBuilderRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.Name'),
        outputPath: 'ImageBuilder.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.Name', props);
    return resource.getResponseField('ImageBuilder.Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.Arn'),
        outputPath: 'ImageBuilder.Arn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.Arn', props);
    return resource.getResponseField('ImageBuilder.Arn') as unknown as string;
  }

  public get imageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.ImageArn'),
        outputPath: 'ImageBuilder.ImageArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.ImageArn', props);
    return resource.getResponseField('ImageBuilder.ImageArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.Description'),
        outputPath: 'ImageBuilder.Description',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.Description', props);
    return resource.getResponseField('ImageBuilder.Description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.DisplayName'),
        outputPath: 'ImageBuilder.DisplayName',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.DisplayName', props);
    return resource.getResponseField('ImageBuilder.DisplayName') as unknown as string;
  }

  public get vpcConfig(): AppStreamDeleteImageBuilderImageBuilderVpcConfig {
    return new AppStreamDeleteImageBuilderImageBuilderVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.InstanceType'),
        outputPath: 'ImageBuilder.InstanceType',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.InstanceType', props);
    return resource.getResponseField('ImageBuilder.InstanceType') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.Platform'),
        outputPath: 'ImageBuilder.Platform',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.Platform', props);
    return resource.getResponseField('ImageBuilder.Platform') as unknown as string;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.IamRoleArn'),
        outputPath: 'ImageBuilder.IamRoleArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.IamRoleArn', props);
    return resource.getResponseField('ImageBuilder.IamRoleArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.State'),
        outputPath: 'ImageBuilder.State',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.State', props);
    return resource.getResponseField('ImageBuilder.State') as unknown as string;
  }

  public get stateChangeReason(): AppStreamDeleteImageBuilderImageBuilderStateChangeReason {
    return new AppStreamDeleteImageBuilderImageBuilderStateChangeReason(this, 'StateChangeReason', this.__resources, this.input);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.CreatedTime'),
        outputPath: 'ImageBuilder.CreatedTime',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.CreatedTime', props);
    return resource.getResponseField('ImageBuilder.CreatedTime') as unknown as string;
  }

  public get enableDefaultInternetAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.EnableDefaultInternetAccess'),
        outputPath: 'ImageBuilder.EnableDefaultInternetAccess',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.EnableDefaultInternetAccess', props);
    return resource.getResponseField('ImageBuilder.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamDeleteImageBuilderImageBuilderDomainJoinInfo {
    return new AppStreamDeleteImageBuilderImageBuilderDomainJoinInfo(this, 'DomainJoinInfo', this.__resources, this.input);
  }

  public get networkAccessConfiguration(): AppStreamDeleteImageBuilderImageBuilderNetworkAccessConfiguration {
    return new AppStreamDeleteImageBuilderImageBuilderNetworkAccessConfiguration(this, 'NetworkAccessConfiguration', this.__resources, this.input);
  }

  public get imageBuilderErrors(): shapes.AppStreamResourceError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.ImageBuilderErrors'),
        outputPath: 'ImageBuilder.ImageBuilderErrors',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.ImageBuilderErrors', props);
    return resource.getResponseField('ImageBuilder.ImageBuilderErrors') as unknown as shapes.AppStreamResourceError[];
  }

  public get appstreamAgentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.AppstreamAgentVersion'),
        outputPath: 'ImageBuilder.AppstreamAgentVersion',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.AppstreamAgentVersion', props);
    return resource.getResponseField('ImageBuilder.AppstreamAgentVersion') as unknown as string;
  }

  public get accessEndpoints(): shapes.AppStreamAccessEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.AccessEndpoints'),
        outputPath: 'ImageBuilder.AccessEndpoints',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.AccessEndpoints', props);
    return resource.getResponseField('ImageBuilder.AccessEndpoints') as unknown as shapes.AppStreamAccessEndpoint[];
  }

}

export class AppStreamDeleteImageBuilderImageBuilderVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDeleteImageBuilderRequest) {
    super(scope, id);
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.VpcConfig.SubnetIds'),
        outputPath: 'ImageBuilder.VpcConfig.SubnetIds',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.VpcConfig.SubnetIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds'),
        outputPath: 'ImageBuilder.VpcConfig.SecurityGroupIds',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamDeleteImageBuilderImageBuilderStateChangeReason extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDeleteImageBuilderRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.StateChangeReason.Code'),
        outputPath: 'ImageBuilder.StateChangeReason.Code',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.StateChangeReason.Code', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.StateChangeReason.Message'),
        outputPath: 'ImageBuilder.StateChangeReason.Message',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.StateChangeReason.Message', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Message') as unknown as string;
  }

}

export class AppStreamDeleteImageBuilderImageBuilderDomainJoinInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDeleteImageBuilderRequest) {
    super(scope, id);
  }

  public get directoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName'),
        outputPath: 'ImageBuilder.DomainJoinInfo.DirectoryName',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.DirectoryName') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName'),
        outputPath: 'ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamDeleteImageBuilderImageBuilderNetworkAccessConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDeleteImageBuilderRequest) {
    super(scope, id);
  }

  public get eniPrivateIpAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress'),
        outputPath: 'ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress') as unknown as string;
  }

  public get eniId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DeleteImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId'),
        outputPath: 'ImageBuilder.NetworkAccessConfiguration.EniId',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniId') as unknown as string;
  }

}

export class AppStreamDescribeDirectoryConfigs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDescribeDirectoryConfigsRequest) {
    super(scope, id);
  }

  public get directoryConfigs(): shapes.AppStreamDirectoryConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDirectoryConfigs',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeDirectoryConfigs.DirectoryConfigs'),
        outputPath: 'DirectoryConfigs',
        parameters: {
          DirectoryNames: this.input.directoryNames,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDirectoryConfigs.DirectoryConfigs', props);
    return resource.getResponseField('DirectoryConfigs') as unknown as shapes.AppStreamDirectoryConfig[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDirectoryConfigs',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeDirectoryConfigs.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryNames: this.input.directoryNames,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDirectoryConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamDescribeFleets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDescribeFleetsRequest) {
    super(scope, id);
  }

  public get fleets(): shapes.AppStreamFleet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleets',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeFleets.Fleets'),
        outputPath: 'Fleets',
        parameters: {
          Names: this.input.names,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleets.Fleets', props);
    return resource.getResponseField('Fleets') as unknown as shapes.AppStreamFleet[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleets',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeFleets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Names: this.input.names,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamDescribeImageBuilders extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDescribeImageBuildersRequest) {
    super(scope, id);
  }

  public get imageBuilders(): shapes.AppStreamImageBuilder[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageBuilders',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeImageBuilders.ImageBuilders'),
        outputPath: 'ImageBuilders',
        parameters: {
          Names: this.input.names,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageBuilders.ImageBuilders', props);
    return resource.getResponseField('ImageBuilders') as unknown as shapes.AppStreamImageBuilder[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImageBuilders',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeImageBuilders.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Names: this.input.names,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImageBuilders.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamDescribeImagePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDescribeImagePermissionsRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImagePermissions',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeImagePermissions.Name'),
        outputPath: 'Name',
        parameters: {
          Name: this.input.name,
          MaxResults: this.input.maxResults,
          SharedAwsAccountIds: this.input.sharedAwsAccountIds,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImagePermissions.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get sharedImagePermissionsList(): shapes.AppStreamSharedImagePermissions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImagePermissions',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeImagePermissions.SharedImagePermissionsList'),
        outputPath: 'SharedImagePermissionsList',
        parameters: {
          Name: this.input.name,
          MaxResults: this.input.maxResults,
          SharedAwsAccountIds: this.input.sharedAwsAccountIds,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImagePermissions.SharedImagePermissionsList', props);
    return resource.getResponseField('SharedImagePermissionsList') as unknown as shapes.AppStreamSharedImagePermissions[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImagePermissions',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeImagePermissions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Name: this.input.name,
          MaxResults: this.input.maxResults,
          SharedAwsAccountIds: this.input.sharedAwsAccountIds,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImagePermissions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamDescribeImages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDescribeImagesRequest) {
    super(scope, id);
  }

  public get images(): shapes.AppStreamImage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImages',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeImages.Images'),
        outputPath: 'Images',
        parameters: {
          Names: this.input.names,
          Arns: this.input.arns,
          Type: this.input.type,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImages.Images', props);
    return resource.getResponseField('Images') as unknown as shapes.AppStreamImage[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeImages',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeImages.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Names: this.input.names,
          Arns: this.input.arns,
          Type: this.input.type,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeImages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamDescribeSessions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDescribeSessionsRequest) {
    super(scope, id);
  }

  public get sessions(): shapes.AppStreamSession[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSessions',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeSessions.Sessions'),
        outputPath: 'Sessions',
        parameters: {
          StackName: this.input.stackName,
          FleetName: this.input.fleetName,
          UserId: this.input.userId,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
          AuthenticationType: this.input.authenticationType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSessions.Sessions', props);
    return resource.getResponseField('Sessions') as unknown as shapes.AppStreamSession[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSessions',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeSessions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StackName: this.input.stackName,
          FleetName: this.input.fleetName,
          UserId: this.input.userId,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
          AuthenticationType: this.input.authenticationType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamDescribeStacks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDescribeStacksRequest) {
    super(scope, id);
  }

  public get stacks(): shapes.AppStreamStack[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStacks',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeStacks.Stacks'),
        outputPath: 'Stacks',
        parameters: {
          Names: this.input.names,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStacks.Stacks', props);
    return resource.getResponseField('Stacks') as unknown as shapes.AppStreamStack[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStacks',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeStacks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          Names: this.input.names,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStacks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamDescribeUsageReportSubscriptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDescribeUsageReportSubscriptionsRequest) {
    super(scope, id);
  }

  public get usageReportSubscriptions(): shapes.AppStreamUsageReportSubscription[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUsageReportSubscriptions',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeUsageReportSubscriptions.UsageReportSubscriptions'),
        outputPath: 'UsageReportSubscriptions',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUsageReportSubscriptions.UsageReportSubscriptions', props);
    return resource.getResponseField('UsageReportSubscriptions') as unknown as shapes.AppStreamUsageReportSubscription[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUsageReportSubscriptions',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeUsageReportSubscriptions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUsageReportSubscriptions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamDescribeUserStackAssociations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDescribeUserStackAssociationsRequest) {
    super(scope, id);
  }

  public get userStackAssociations(): shapes.AppStreamUserStackAssociation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserStackAssociations',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeUserStackAssociations.UserStackAssociations'),
        outputPath: 'UserStackAssociations',
        parameters: {
          StackName: this.input.stackName,
          UserName: this.input.userName,
          AuthenticationType: this.input.authenticationType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserStackAssociations.UserStackAssociations', props);
    return resource.getResponseField('UserStackAssociations') as unknown as shapes.AppStreamUserStackAssociation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserStackAssociations',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeUserStackAssociations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StackName: this.input.stackName,
          UserName: this.input.userName,
          AuthenticationType: this.input.authenticationType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserStackAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamDescribeUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamDescribeUsersRequest) {
    super(scope, id);
  }

  public get users(): shapes.AppStreamUser[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUsers',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeUsers.Users'),
        outputPath: 'Users',
        parameters: {
          AuthenticationType: this.input.authenticationType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.AppStreamUser[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUsers',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.DescribeUsers.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AuthenticationType: this.input.authenticationType,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamListAssociatedFleets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamListAssociatedFleetsRequest) {
    super(scope, id);
  }

  public get names(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedFleets',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.ListAssociatedFleets.Names'),
        outputPath: 'Names',
        parameters: {
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedFleets.Names', props);
    return resource.getResponseField('Names') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedFleets',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.ListAssociatedFleets.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          StackName: this.input.stackName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedFleets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamListAssociatedStacks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamListAssociatedStacksRequest) {
    super(scope, id);
  }

  public get names(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedStacks',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.ListAssociatedStacks.Names'),
        outputPath: 'Names',
        parameters: {
          FleetName: this.input.fleetName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedStacks.Names', props);
    return resource.getResponseField('Names') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAssociatedStacks',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.ListAssociatedStacks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FleetName: this.input.fleetName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAssociatedStacks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class AppStreamStartImageBuilder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStartImageBuilderRequest) {
    super(scope, id);
  }

  public get imageBuilder(): AppStreamStartImageBuilderImageBuilder {
    return new AppStreamStartImageBuilderImageBuilder(this, 'ImageBuilder', this.__resources, this.input);
  }

}

export class AppStreamStartImageBuilderImageBuilder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStartImageBuilderRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.Name'),
        outputPath: 'ImageBuilder.Name',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.Name', props);
    return resource.getResponseField('ImageBuilder.Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.Arn'),
        outputPath: 'ImageBuilder.Arn',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.Arn', props);
    return resource.getResponseField('ImageBuilder.Arn') as unknown as string;
  }

  public get imageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.ImageArn'),
        outputPath: 'ImageBuilder.ImageArn',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.ImageArn', props);
    return resource.getResponseField('ImageBuilder.ImageArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.Description'),
        outputPath: 'ImageBuilder.Description',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.Description', props);
    return resource.getResponseField('ImageBuilder.Description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.DisplayName'),
        outputPath: 'ImageBuilder.DisplayName',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.DisplayName', props);
    return resource.getResponseField('ImageBuilder.DisplayName') as unknown as string;
  }

  public get vpcConfig(): AppStreamStartImageBuilderImageBuilderVpcConfig {
    return new AppStreamStartImageBuilderImageBuilderVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.InstanceType'),
        outputPath: 'ImageBuilder.InstanceType',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.InstanceType', props);
    return resource.getResponseField('ImageBuilder.InstanceType') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.Platform'),
        outputPath: 'ImageBuilder.Platform',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.Platform', props);
    return resource.getResponseField('ImageBuilder.Platform') as unknown as string;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.IamRoleArn'),
        outputPath: 'ImageBuilder.IamRoleArn',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.IamRoleArn', props);
    return resource.getResponseField('ImageBuilder.IamRoleArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.State'),
        outputPath: 'ImageBuilder.State',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.State', props);
    return resource.getResponseField('ImageBuilder.State') as unknown as string;
  }

  public get stateChangeReason(): AppStreamStartImageBuilderImageBuilderStateChangeReason {
    return new AppStreamStartImageBuilderImageBuilderStateChangeReason(this, 'StateChangeReason', this.__resources, this.input);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.CreatedTime'),
        outputPath: 'ImageBuilder.CreatedTime',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.CreatedTime', props);
    return resource.getResponseField('ImageBuilder.CreatedTime') as unknown as string;
  }

  public get enableDefaultInternetAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.EnableDefaultInternetAccess'),
        outputPath: 'ImageBuilder.EnableDefaultInternetAccess',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.EnableDefaultInternetAccess', props);
    return resource.getResponseField('ImageBuilder.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamStartImageBuilderImageBuilderDomainJoinInfo {
    return new AppStreamStartImageBuilderImageBuilderDomainJoinInfo(this, 'DomainJoinInfo', this.__resources, this.input);
  }

  public get networkAccessConfiguration(): AppStreamStartImageBuilderImageBuilderNetworkAccessConfiguration {
    return new AppStreamStartImageBuilderImageBuilderNetworkAccessConfiguration(this, 'NetworkAccessConfiguration', this.__resources, this.input);
  }

  public get imageBuilderErrors(): shapes.AppStreamResourceError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.ImageBuilderErrors'),
        outputPath: 'ImageBuilder.ImageBuilderErrors',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.ImageBuilderErrors', props);
    return resource.getResponseField('ImageBuilder.ImageBuilderErrors') as unknown as shapes.AppStreamResourceError[];
  }

  public get appstreamAgentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.AppstreamAgentVersion'),
        outputPath: 'ImageBuilder.AppstreamAgentVersion',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.AppstreamAgentVersion', props);
    return resource.getResponseField('ImageBuilder.AppstreamAgentVersion') as unknown as string;
  }

  public get accessEndpoints(): shapes.AppStreamAccessEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.AccessEndpoints'),
        outputPath: 'ImageBuilder.AccessEndpoints',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.AccessEndpoints', props);
    return resource.getResponseField('ImageBuilder.AccessEndpoints') as unknown as shapes.AppStreamAccessEndpoint[];
  }

}

export class AppStreamStartImageBuilderImageBuilderVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStartImageBuilderRequest) {
    super(scope, id);
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.VpcConfig.SubnetIds'),
        outputPath: 'ImageBuilder.VpcConfig.SubnetIds',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.VpcConfig.SubnetIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds'),
        outputPath: 'ImageBuilder.VpcConfig.SecurityGroupIds',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamStartImageBuilderImageBuilderStateChangeReason extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStartImageBuilderRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.StateChangeReason.Code'),
        outputPath: 'ImageBuilder.StateChangeReason.Code',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.StateChangeReason.Code', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.StateChangeReason.Message'),
        outputPath: 'ImageBuilder.StateChangeReason.Message',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.StateChangeReason.Message', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Message') as unknown as string;
  }

}

export class AppStreamStartImageBuilderImageBuilderDomainJoinInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStartImageBuilderRequest) {
    super(scope, id);
  }

  public get directoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName'),
        outputPath: 'ImageBuilder.DomainJoinInfo.DirectoryName',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.DirectoryName') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName'),
        outputPath: 'ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamStartImageBuilderImageBuilderNetworkAccessConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStartImageBuilderRequest) {
    super(scope, id);
  }

  public get eniPrivateIpAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress'),
        outputPath: 'ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress') as unknown as string;
  }

  public get eniId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StartImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId'),
        outputPath: 'ImageBuilder.NetworkAccessConfiguration.EniId',
        parameters: {
          Name: this.input.name,
          AppstreamAgentVersion: this.input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniId') as unknown as string;
  }

}

export class AppStreamStopImageBuilder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStopImageBuilderRequest) {
    super(scope, id);
  }

  public get imageBuilder(): AppStreamStopImageBuilderImageBuilder {
    return new AppStreamStopImageBuilderImageBuilder(this, 'ImageBuilder', this.__resources, this.input);
  }

}

export class AppStreamStopImageBuilderImageBuilder extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStopImageBuilderRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.Name'),
        outputPath: 'ImageBuilder.Name',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.Name', props);
    return resource.getResponseField('ImageBuilder.Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.Arn'),
        outputPath: 'ImageBuilder.Arn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.Arn', props);
    return resource.getResponseField('ImageBuilder.Arn') as unknown as string;
  }

  public get imageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.ImageArn'),
        outputPath: 'ImageBuilder.ImageArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.ImageArn', props);
    return resource.getResponseField('ImageBuilder.ImageArn') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.Description'),
        outputPath: 'ImageBuilder.Description',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.Description', props);
    return resource.getResponseField('ImageBuilder.Description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.DisplayName'),
        outputPath: 'ImageBuilder.DisplayName',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.DisplayName', props);
    return resource.getResponseField('ImageBuilder.DisplayName') as unknown as string;
  }

  public get vpcConfig(): AppStreamStopImageBuilderImageBuilderVpcConfig {
    return new AppStreamStopImageBuilderImageBuilderVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.InstanceType'),
        outputPath: 'ImageBuilder.InstanceType',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.InstanceType', props);
    return resource.getResponseField('ImageBuilder.InstanceType') as unknown as string;
  }

  public get platform(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.Platform'),
        outputPath: 'ImageBuilder.Platform',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.Platform', props);
    return resource.getResponseField('ImageBuilder.Platform') as unknown as string;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.IamRoleArn'),
        outputPath: 'ImageBuilder.IamRoleArn',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.IamRoleArn', props);
    return resource.getResponseField('ImageBuilder.IamRoleArn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.State'),
        outputPath: 'ImageBuilder.State',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.State', props);
    return resource.getResponseField('ImageBuilder.State') as unknown as string;
  }

  public get stateChangeReason(): AppStreamStopImageBuilderImageBuilderStateChangeReason {
    return new AppStreamStopImageBuilderImageBuilderStateChangeReason(this, 'StateChangeReason', this.__resources, this.input);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.CreatedTime'),
        outputPath: 'ImageBuilder.CreatedTime',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.CreatedTime', props);
    return resource.getResponseField('ImageBuilder.CreatedTime') as unknown as string;
  }

  public get enableDefaultInternetAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.EnableDefaultInternetAccess'),
        outputPath: 'ImageBuilder.EnableDefaultInternetAccess',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.EnableDefaultInternetAccess', props);
    return resource.getResponseField('ImageBuilder.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamStopImageBuilderImageBuilderDomainJoinInfo {
    return new AppStreamStopImageBuilderImageBuilderDomainJoinInfo(this, 'DomainJoinInfo', this.__resources, this.input);
  }

  public get networkAccessConfiguration(): AppStreamStopImageBuilderImageBuilderNetworkAccessConfiguration {
    return new AppStreamStopImageBuilderImageBuilderNetworkAccessConfiguration(this, 'NetworkAccessConfiguration', this.__resources, this.input);
  }

  public get imageBuilderErrors(): shapes.AppStreamResourceError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.ImageBuilderErrors'),
        outputPath: 'ImageBuilder.ImageBuilderErrors',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.ImageBuilderErrors', props);
    return resource.getResponseField('ImageBuilder.ImageBuilderErrors') as unknown as shapes.AppStreamResourceError[];
  }

  public get appstreamAgentVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.AppstreamAgentVersion'),
        outputPath: 'ImageBuilder.AppstreamAgentVersion',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.AppstreamAgentVersion', props);
    return resource.getResponseField('ImageBuilder.AppstreamAgentVersion') as unknown as string;
  }

  public get accessEndpoints(): shapes.AppStreamAccessEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.AccessEndpoints'),
        outputPath: 'ImageBuilder.AccessEndpoints',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.AccessEndpoints', props);
    return resource.getResponseField('ImageBuilder.AccessEndpoints') as unknown as shapes.AppStreamAccessEndpoint[];
  }

}

export class AppStreamStopImageBuilderImageBuilderVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStopImageBuilderRequest) {
    super(scope, id);
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.VpcConfig.SubnetIds'),
        outputPath: 'ImageBuilder.VpcConfig.SubnetIds',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.VpcConfig.SubnetIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds'),
        outputPath: 'ImageBuilder.VpcConfig.SecurityGroupIds',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamStopImageBuilderImageBuilderStateChangeReason extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStopImageBuilderRequest) {
    super(scope, id);
  }

  public get code(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.StateChangeReason.Code'),
        outputPath: 'ImageBuilder.StateChangeReason.Code',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.StateChangeReason.Code', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Code') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.StateChangeReason.Message'),
        outputPath: 'ImageBuilder.StateChangeReason.Message',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.StateChangeReason.Message', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Message') as unknown as string;
  }

}

export class AppStreamStopImageBuilderImageBuilderDomainJoinInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStopImageBuilderRequest) {
    super(scope, id);
  }

  public get directoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName'),
        outputPath: 'ImageBuilder.DomainJoinInfo.DirectoryName',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.DirectoryName') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName'),
        outputPath: 'ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamStopImageBuilderImageBuilderNetworkAccessConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamStopImageBuilderRequest) {
    super(scope, id);
  }

  public get eniPrivateIpAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress'),
        outputPath: 'ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress') as unknown as string;
  }

  public get eniId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopImageBuilder',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.StopImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId'),
        outputPath: 'ImageBuilder.NetworkAccessConfiguration.EniId',
        parameters: {
          Name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniId') as unknown as string;
  }

}

export class AppStreamUpdateDirectoryConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamUpdateDirectoryConfigRequest) {
    super(scope, id);
  }

  public get directoryConfig(): AppStreamUpdateDirectoryConfigDirectoryConfig {
    return new AppStreamUpdateDirectoryConfigDirectoryConfig(this, 'DirectoryConfig', this.__resources, this.input);
  }

}

export class AppStreamUpdateDirectoryConfigDirectoryConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamUpdateDirectoryConfigRequest) {
    super(scope, id);
  }

  public get directoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectoryConfig',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateDirectoryConfig.DirectoryConfig.DirectoryName'),
        outputPath: 'DirectoryConfig.DirectoryName',
        parameters: {
          DirectoryName: this.input.directoryName,
          OrganizationalUnitDistinguishedNames: this.input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.input.serviceAccountCredentials?.accountName,
            AccountPassword: this.input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectoryConfig.DirectoryConfig.DirectoryName', props);
    return resource.getResponseField('DirectoryConfig.DirectoryName') as unknown as string;
  }

  public get organizationalUnitDistinguishedNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectoryConfig',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateDirectoryConfig.DirectoryConfig.OrganizationalUnitDistinguishedNames'),
        outputPath: 'DirectoryConfig.OrganizationalUnitDistinguishedNames',
        parameters: {
          DirectoryName: this.input.directoryName,
          OrganizationalUnitDistinguishedNames: this.input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.input.serviceAccountCredentials?.accountName,
            AccountPassword: this.input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectoryConfig.DirectoryConfig.OrganizationalUnitDistinguishedNames', props);
    return resource.getResponseField('DirectoryConfig.OrganizationalUnitDistinguishedNames') as unknown as string[];
  }

  public get serviceAccountCredentials(): AppStreamUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials {
    return new AppStreamUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials(this, 'ServiceAccountCredentials', this.__resources, this.input);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectoryConfig',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateDirectoryConfig.DirectoryConfig.CreatedTime'),
        outputPath: 'DirectoryConfig.CreatedTime',
        parameters: {
          DirectoryName: this.input.directoryName,
          OrganizationalUnitDistinguishedNames: this.input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.input.serviceAccountCredentials?.accountName,
            AccountPassword: this.input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectoryConfig.DirectoryConfig.CreatedTime', props);
    return resource.getResponseField('DirectoryConfig.CreatedTime') as unknown as string;
  }

}

export class AppStreamUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamUpdateDirectoryConfigRequest) {
    super(scope, id);
  }

  public get accountName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectoryConfig',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountName'),
        outputPath: 'DirectoryConfig.ServiceAccountCredentials.AccountName',
        parameters: {
          DirectoryName: this.input.directoryName,
          OrganizationalUnitDistinguishedNames: this.input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.input.serviceAccountCredentials?.accountName,
            AccountPassword: this.input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountName', props);
    return resource.getResponseField('DirectoryConfig.ServiceAccountCredentials.AccountName') as unknown as string;
  }

  public get accountPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDirectoryConfig',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountPassword'),
        outputPath: 'DirectoryConfig.ServiceAccountCredentials.AccountPassword',
        parameters: {
          DirectoryName: this.input.directoryName,
          OrganizationalUnitDistinguishedNames: this.input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.input.serviceAccountCredentials?.accountName,
            AccountPassword: this.input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountPassword', props);
    return resource.getResponseField('DirectoryConfig.ServiceAccountCredentials.AccountPassword') as unknown as string;
  }

}

export class AppStreamUpdateFleet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamUpdateFleetRequest) {
    super(scope, id);
  }

  public get fleet(): AppStreamUpdateFleetFleet {
    return new AppStreamUpdateFleetFleet(this, 'Fleet', this.__resources, this.input);
  }

}

export class AppStreamUpdateFleetFleet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamUpdateFleetRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.Arn'),
        outputPath: 'Fleet.Arn',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.Arn', props);
    return resource.getResponseField('Fleet.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.Name'),
        outputPath: 'Fleet.Name',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.Name', props);
    return resource.getResponseField('Fleet.Name') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.DisplayName'),
        outputPath: 'Fleet.DisplayName',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.DisplayName', props);
    return resource.getResponseField('Fleet.DisplayName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.Description'),
        outputPath: 'Fleet.Description',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.Description', props);
    return resource.getResponseField('Fleet.Description') as unknown as string;
  }

  public get imageName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.ImageName'),
        outputPath: 'Fleet.ImageName',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.ImageName', props);
    return resource.getResponseField('Fleet.ImageName') as unknown as string;
  }

  public get imageArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.ImageArn'),
        outputPath: 'Fleet.ImageArn',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.ImageArn', props);
    return resource.getResponseField('Fleet.ImageArn') as unknown as string;
  }

  public get instanceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.InstanceType'),
        outputPath: 'Fleet.InstanceType',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.InstanceType', props);
    return resource.getResponseField('Fleet.InstanceType') as unknown as string;
  }

  public get fleetType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.FleetType'),
        outputPath: 'Fleet.FleetType',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.FleetType', props);
    return resource.getResponseField('Fleet.FleetType') as unknown as string;
  }

  public get computeCapacityStatus(): AppStreamUpdateFleetFleetComputeCapacityStatus {
    return new AppStreamUpdateFleetFleetComputeCapacityStatus(this, 'ComputeCapacityStatus', this.__resources, this.input);
  }

  public get maxUserDurationInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.MaxUserDurationInSeconds'),
        outputPath: 'Fleet.MaxUserDurationInSeconds',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.MaxUserDurationInSeconds', props);
    return resource.getResponseField('Fleet.MaxUserDurationInSeconds') as unknown as number;
  }

  public get disconnectTimeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.DisconnectTimeoutInSeconds'),
        outputPath: 'Fleet.DisconnectTimeoutInSeconds',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.DisconnectTimeoutInSeconds', props);
    return resource.getResponseField('Fleet.DisconnectTimeoutInSeconds') as unknown as number;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.State'),
        outputPath: 'Fleet.State',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.State', props);
    return resource.getResponseField('Fleet.State') as unknown as string;
  }

  public get vpcConfig(): AppStreamUpdateFleetFleetVpcConfig {
    return new AppStreamUpdateFleetFleetVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.CreatedTime'),
        outputPath: 'Fleet.CreatedTime',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.CreatedTime', props);
    return resource.getResponseField('Fleet.CreatedTime') as unknown as string;
  }

  public get fleetErrors(): shapes.AppStreamFleetError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.FleetErrors'),
        outputPath: 'Fleet.FleetErrors',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.FleetErrors', props);
    return resource.getResponseField('Fleet.FleetErrors') as unknown as shapes.AppStreamFleetError[];
  }

  public get enableDefaultInternetAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.EnableDefaultInternetAccess'),
        outputPath: 'Fleet.EnableDefaultInternetAccess',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.EnableDefaultInternetAccess', props);
    return resource.getResponseField('Fleet.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamUpdateFleetFleetDomainJoinInfo {
    return new AppStreamUpdateFleetFleetDomainJoinInfo(this, 'DomainJoinInfo', this.__resources, this.input);
  }

  public get idleDisconnectTimeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.IdleDisconnectTimeoutInSeconds'),
        outputPath: 'Fleet.IdleDisconnectTimeoutInSeconds',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.IdleDisconnectTimeoutInSeconds', props);
    return resource.getResponseField('Fleet.IdleDisconnectTimeoutInSeconds') as unknown as number;
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.IamRoleArn'),
        outputPath: 'Fleet.IamRoleArn',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.IamRoleArn', props);
    return resource.getResponseField('Fleet.IamRoleArn') as unknown as string;
  }

  public get streamView(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.StreamView'),
        outputPath: 'Fleet.StreamView',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.StreamView', props);
    return resource.getResponseField('Fleet.StreamView') as unknown as string;
  }

}

export class AppStreamUpdateFleetFleetComputeCapacityStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamUpdateFleetRequest) {
    super(scope, id);
  }

  public get desired(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.ComputeCapacityStatus.Desired'),
        outputPath: 'Fleet.ComputeCapacityStatus.Desired',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.ComputeCapacityStatus.Desired', props);
    return resource.getResponseField('Fleet.ComputeCapacityStatus.Desired') as unknown as number;
  }

  public get running(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.ComputeCapacityStatus.Running'),
        outputPath: 'Fleet.ComputeCapacityStatus.Running',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.ComputeCapacityStatus.Running', props);
    return resource.getResponseField('Fleet.ComputeCapacityStatus.Running') as unknown as number;
  }

  public get inUse(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.ComputeCapacityStatus.InUse'),
        outputPath: 'Fleet.ComputeCapacityStatus.InUse',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.ComputeCapacityStatus.InUse', props);
    return resource.getResponseField('Fleet.ComputeCapacityStatus.InUse') as unknown as number;
  }

  public get available(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.ComputeCapacityStatus.Available'),
        outputPath: 'Fleet.ComputeCapacityStatus.Available',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.ComputeCapacityStatus.Available', props);
    return resource.getResponseField('Fleet.ComputeCapacityStatus.Available') as unknown as number;
  }

}

export class AppStreamUpdateFleetFleetVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamUpdateFleetRequest) {
    super(scope, id);
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.VpcConfig.SubnetIds'),
        outputPath: 'Fleet.VpcConfig.SubnetIds',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.VpcConfig.SubnetIds', props);
    return resource.getResponseField('Fleet.VpcConfig.SubnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.VpcConfig.SecurityGroupIds'),
        outputPath: 'Fleet.VpcConfig.SecurityGroupIds',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('Fleet.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamUpdateFleetFleetDomainJoinInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamUpdateFleetRequest) {
    super(scope, id);
  }

  public get directoryName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.DomainJoinInfo.DirectoryName'),
        outputPath: 'Fleet.DomainJoinInfo.DirectoryName',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.DomainJoinInfo.DirectoryName', props);
    return resource.getResponseField('Fleet.DomainJoinInfo.DirectoryName') as unknown as string;
  }

  public get organizationalUnitDistinguishedName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateFleet',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateFleet.Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName'),
        outputPath: 'Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName',
        parameters: {
          ImageName: this.input.imageName,
          ImageArn: this.input.imageArn,
          Name: this.input.name,
          InstanceType: this.input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.input.deleteVpcConfig,
          Description: this.input.description,
          DisplayName: this.input.displayName,
          EnableDefaultInternetAccess: this.input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.input.attributesToDelete,
          IamRoleArn: this.input.iamRoleArn,
          StreamView: this.input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateFleet.Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamUpdateStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamUpdateStackRequest) {
    super(scope, id);
  }

  public get stack(): AppStreamUpdateStackStack {
    return new AppStreamUpdateStackStack(this, 'Stack', this.__resources, this.input);
  }

}

export class AppStreamUpdateStackStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamUpdateStackRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.Arn'),
        outputPath: 'Stack.Arn',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.Arn', props);
    return resource.getResponseField('Stack.Arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.Name'),
        outputPath: 'Stack.Name',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.Name', props);
    return resource.getResponseField('Stack.Name') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.Description'),
        outputPath: 'Stack.Description',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.Description', props);
    return resource.getResponseField('Stack.Description') as unknown as string;
  }

  public get displayName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.DisplayName'),
        outputPath: 'Stack.DisplayName',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.DisplayName', props);
    return resource.getResponseField('Stack.DisplayName') as unknown as string;
  }

  public get createdTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.CreatedTime'),
        outputPath: 'Stack.CreatedTime',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.CreatedTime', props);
    return resource.getResponseField('Stack.CreatedTime') as unknown as string;
  }

  public get storageConnectors(): shapes.AppStreamStorageConnector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.StorageConnectors'),
        outputPath: 'Stack.StorageConnectors',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.StorageConnectors', props);
    return resource.getResponseField('Stack.StorageConnectors') as unknown as shapes.AppStreamStorageConnector[];
  }

  public get redirectUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.RedirectURL'),
        outputPath: 'Stack.RedirectURL',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.RedirectURL', props);
    return resource.getResponseField('Stack.RedirectURL') as unknown as string;
  }

  public get feedbackUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.FeedbackURL'),
        outputPath: 'Stack.FeedbackURL',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.FeedbackURL', props);
    return resource.getResponseField('Stack.FeedbackURL') as unknown as string;
  }

  public get stackErrors(): shapes.AppStreamStackError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.StackErrors'),
        outputPath: 'Stack.StackErrors',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.StackErrors', props);
    return resource.getResponseField('Stack.StackErrors') as unknown as shapes.AppStreamStackError[];
  }

  public get userSettings(): shapes.AppStreamUserSetting[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.UserSettings'),
        outputPath: 'Stack.UserSettings',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.UserSettings', props);
    return resource.getResponseField('Stack.UserSettings') as unknown as shapes.AppStreamUserSetting[];
  }

  public get applicationSettings(): AppStreamUpdateStackStackApplicationSettings {
    return new AppStreamUpdateStackStackApplicationSettings(this, 'ApplicationSettings', this.__resources, this.input);
  }

  public get accessEndpoints(): shapes.AppStreamAccessEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.AccessEndpoints'),
        outputPath: 'Stack.AccessEndpoints',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.AccessEndpoints', props);
    return resource.getResponseField('Stack.AccessEndpoints') as unknown as shapes.AppStreamAccessEndpoint[];
  }

  public get embedHostDomains(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.EmbedHostDomains'),
        outputPath: 'Stack.EmbedHostDomains',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.EmbedHostDomains', props);
    return resource.getResponseField('Stack.EmbedHostDomains') as unknown as string[];
  }

}

export class AppStreamUpdateStackStackApplicationSettings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.AppStreamUpdateStackRequest) {
    super(scope, id);
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.ApplicationSettings.Enabled'),
        outputPath: 'Stack.ApplicationSettings.Enabled',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.ApplicationSettings.Enabled', props);
    return resource.getResponseField('Stack.ApplicationSettings.Enabled') as unknown as boolean;
  }

  public get settingsGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.ApplicationSettings.SettingsGroup'),
        outputPath: 'Stack.ApplicationSettings.SettingsGroup',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.ApplicationSettings.SettingsGroup', props);
    return resource.getResponseField('Stack.ApplicationSettings.SettingsGroup') as unknown as string;
  }

  public get s3BucketName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'AppStream',
        physicalResourceId: cr.PhysicalResourceId.of('AppStream.UpdateStack.Stack.ApplicationSettings.S3BucketName'),
        outputPath: 'Stack.ApplicationSettings.S3BucketName',
        parameters: {
          DisplayName: this.input.displayName,
          Description: this.input.description,
          Name: this.input.name,
          StorageConnectors: this.input.storageConnectors,
          DeleteStorageConnectors: this.input.deleteStorageConnectors,
          RedirectURL: this.input.redirectUrl,
          FeedbackURL: this.input.feedbackUrl,
          AttributesToDelete: this.input.attributesToDelete,
          UserSettings: this.input.userSettings,
          ApplicationSettings: {
            Enabled: this.input.applicationSettings?.enabled,
            SettingsGroup: this.input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.input.accessEndpoints,
          EmbedHostDomains: this.input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateStack.Stack.ApplicationSettings.S3BucketName', props);
    return resource.getResponseField('Stack.ApplicationSettings.S3BucketName') as unknown as string;
  }

}

