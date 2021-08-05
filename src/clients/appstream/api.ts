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

  public batchAssociateUserStack(input: shapes.AppStreamBatchAssociateUserStackRequest): AppStreamResponsesBatchAssociateUserStack {
    return new AppStreamResponsesBatchAssociateUserStack(this, this.__resources, input);
  }

  public batchDisassociateUserStack(input: shapes.AppStreamBatchDisassociateUserStackRequest): AppStreamResponsesBatchDisassociateUserStack {
    return new AppStreamResponsesBatchDisassociateUserStack(this, this.__resources, input);
  }

  public copyImage(input: shapes.AppStreamCopyImageRequest): AppStreamResponsesCopyImage {
    return new AppStreamResponsesCopyImage(this, this.__resources, input);
  }

  public createDirectoryConfig(input: shapes.AppStreamCreateDirectoryConfigRequest): AppStreamResponsesCreateDirectoryConfig {
    return new AppStreamResponsesCreateDirectoryConfig(this, this.__resources, input);
  }

  public createFleet(input: shapes.AppStreamCreateFleetRequest): AppStreamResponsesCreateFleet {
    return new AppStreamResponsesCreateFleet(this, this.__resources, input);
  }

  public createImageBuilder(input: shapes.AppStreamCreateImageBuilderRequest): AppStreamResponsesCreateImageBuilder {
    return new AppStreamResponsesCreateImageBuilder(this, this.__resources, input);
  }

  public createImageBuilderStreamingUrl(input: shapes.AppStreamCreateImageBuilderStreamingUrlRequest): AppStreamResponsesCreateImageBuilderStreamingUrl {
    return new AppStreamResponsesCreateImageBuilderStreamingUrl(this, this.__resources, input);
  }

  public createStack(input: shapes.AppStreamCreateStackRequest): AppStreamResponsesCreateStack {
    return new AppStreamResponsesCreateStack(this, this.__resources, input);
  }

  public createStreamingUrl(input: shapes.AppStreamCreateStreamingUrlRequest): AppStreamResponsesCreateStreamingUrl {
    return new AppStreamResponsesCreateStreamingUrl(this, this.__resources, input);
  }

  public createUsageReportSubscription(): AppStreamResponsesCreateUsageReportSubscription {
    return new AppStreamResponsesCreateUsageReportSubscription(this, this.__resources);
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

  public deleteImage(input: shapes.AppStreamDeleteImageRequest): AppStreamResponsesDeleteImage {
    return new AppStreamResponsesDeleteImage(this, this.__resources, input);
  }

  public deleteImageBuilder(input: shapes.AppStreamDeleteImageBuilderRequest): AppStreamResponsesDeleteImageBuilder {
    return new AppStreamResponsesDeleteImageBuilder(this, this.__resources, input);
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

  public describeDirectoryConfigs(input: shapes.AppStreamDescribeDirectoryConfigsRequest): AppStreamResponsesDescribeDirectoryConfigs {
    return new AppStreamResponsesDescribeDirectoryConfigs(this, this.__resources, input);
  }

  public describeFleets(input: shapes.AppStreamDescribeFleetsRequest): AppStreamResponsesDescribeFleets {
    return new AppStreamResponsesDescribeFleets(this, this.__resources, input);
  }

  public describeImageBuilders(input: shapes.AppStreamDescribeImageBuildersRequest): AppStreamResponsesDescribeImageBuilders {
    return new AppStreamResponsesDescribeImageBuilders(this, this.__resources, input);
  }

  public describeImagePermissions(input: shapes.AppStreamDescribeImagePermissionsRequest): AppStreamResponsesDescribeImagePermissions {
    return new AppStreamResponsesDescribeImagePermissions(this, this.__resources, input);
  }

  public describeImages(input: shapes.AppStreamDescribeImagesRequest): AppStreamResponsesDescribeImages {
    return new AppStreamResponsesDescribeImages(this, this.__resources, input);
  }

  public describeSessions(input: shapes.AppStreamDescribeSessionsRequest): AppStreamResponsesDescribeSessions {
    return new AppStreamResponsesDescribeSessions(this, this.__resources, input);
  }

  public describeStacks(input: shapes.AppStreamDescribeStacksRequest): AppStreamResponsesDescribeStacks {
    return new AppStreamResponsesDescribeStacks(this, this.__resources, input);
  }

  public describeUsageReportSubscriptions(input: shapes.AppStreamDescribeUsageReportSubscriptionsRequest): AppStreamResponsesDescribeUsageReportSubscriptions {
    return new AppStreamResponsesDescribeUsageReportSubscriptions(this, this.__resources, input);
  }

  public describeUserStackAssociations(input: shapes.AppStreamDescribeUserStackAssociationsRequest): AppStreamResponsesDescribeUserStackAssociations {
    return new AppStreamResponsesDescribeUserStackAssociations(this, this.__resources, input);
  }

  public describeUsers(input: shapes.AppStreamDescribeUsersRequest): AppStreamResponsesDescribeUsers {
    return new AppStreamResponsesDescribeUsers(this, this.__resources, input);
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

  public listAssociatedFleets(input: shapes.AppStreamListAssociatedFleetsRequest): AppStreamResponsesListAssociatedFleets {
    return new AppStreamResponsesListAssociatedFleets(this, this.__resources, input);
  }

  public listAssociatedStacks(input: shapes.AppStreamListAssociatedStacksRequest): AppStreamResponsesListAssociatedStacks {
    return new AppStreamResponsesListAssociatedStacks(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.AppStreamListTagsForResourceRequest): AppStreamResponsesListTagsForResource {
    return new AppStreamResponsesListTagsForResource(this, this.__resources, input);
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

  public startImageBuilder(input: shapes.AppStreamStartImageBuilderRequest): AppStreamResponsesStartImageBuilder {
    return new AppStreamResponsesStartImageBuilder(this, this.__resources, input);
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

  public stopImageBuilder(input: shapes.AppStreamStopImageBuilderRequest): AppStreamResponsesStopImageBuilder {
    return new AppStreamResponsesStopImageBuilder(this, this.__resources, input);
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

  public updateDirectoryConfig(input: shapes.AppStreamUpdateDirectoryConfigRequest): AppStreamResponsesUpdateDirectoryConfig {
    return new AppStreamResponsesUpdateDirectoryConfig(this, this.__resources, input);
  }

  public updateFleet(input: shapes.AppStreamUpdateFleetRequest): AppStreamResponsesUpdateFleet {
    return new AppStreamResponsesUpdateFleet(this, this.__resources, input);
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

  public updateStack(input: shapes.AppStreamUpdateStackRequest): AppStreamResponsesUpdateStack {
    return new AppStreamResponsesUpdateStack(this, this.__resources, input);
  }

}

export class AppStreamResponsesBatchAssociateUserStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamBatchAssociateUserStackRequest) {
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
          UserStackAssociations: this.__input.userStackAssociations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchAssociateUserStack.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.AppStreamUserStackAssociationError[];
  }

}

export class AppStreamResponsesBatchDisassociateUserStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamBatchDisassociateUserStackRequest) {
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
          UserStackAssociations: this.__input.userStackAssociations,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDisassociateUserStack.errors', props);
    return resource.getResponseField('errors') as unknown as shapes.AppStreamUserStackAssociationError[];
  }

}

export class AppStreamResponsesCopyImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCopyImageRequest) {
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
          SourceImageName: this.__input.sourceImageName,
          DestinationImageName: this.__input.destinationImageName,
          DestinationRegion: this.__input.destinationRegion,
          DestinationImageDescription: this.__input.destinationImageDescription,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyImage.DestinationImageName', props);
    return resource.getResponseField('DestinationImageName') as unknown as string;
  }

}

export class AppStreamResponsesCreateDirectoryConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateDirectoryConfigRequest) {
  }

  public get directoryConfig(): AppStreamResponsesCreateDirectoryConfigDirectoryConfig {
    return new AppStreamResponsesCreateDirectoryConfigDirectoryConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesCreateDirectoryConfigDirectoryConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateDirectoryConfigRequest) {
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
          DirectoryName: this.__input.directoryName,
          OrganizationalUnitDistinguishedNames: this.__input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.__input.serviceAccountCredentials?.accountName,
            AccountPassword: this.__input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectoryConfig.DirectoryConfig.DirectoryName', props);
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
          DirectoryName: this.__input.directoryName,
          OrganizationalUnitDistinguishedNames: this.__input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.__input.serviceAccountCredentials?.accountName,
            AccountPassword: this.__input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectoryConfig.DirectoryConfig.OrganizationalUnitDistinguishedNames', props);
    return resource.getResponseField('DirectoryConfig.OrganizationalUnitDistinguishedNames') as unknown as string[];
  }

  public get serviceAccountCredentials(): AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials {
    return new AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials(this.__scope, this.__resources, this.__input);
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
          DirectoryName: this.__input.directoryName,
          OrganizationalUnitDistinguishedNames: this.__input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.__input.serviceAccountCredentials?.accountName,
            AccountPassword: this.__input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectoryConfig.DirectoryConfig.CreatedTime', props);
    return resource.getResponseField('DirectoryConfig.CreatedTime') as unknown as string;
  }

}

export class AppStreamResponsesCreateDirectoryConfigDirectoryConfigServiceAccountCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateDirectoryConfigRequest) {
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
          DirectoryName: this.__input.directoryName,
          OrganizationalUnitDistinguishedNames: this.__input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.__input.serviceAccountCredentials?.accountName,
            AccountPassword: this.__input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountName', props);
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
          DirectoryName: this.__input.directoryName,
          OrganizationalUnitDistinguishedNames: this.__input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.__input.serviceAccountCredentials?.accountName,
            AccountPassword: this.__input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountPassword', props);
    return resource.getResponseField('DirectoryConfig.ServiceAccountCredentials.AccountPassword') as unknown as string;
  }

}

export class AppStreamResponsesCreateFleet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateFleetRequest) {
  }

  public get fleet(): AppStreamResponsesCreateFleetFleet {
    return new AppStreamResponsesCreateFleetFleet(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesCreateFleetFleet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateFleetRequest) {
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.Arn', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.Name', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.DisplayName', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.Description', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.ImageName', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.ImageArn', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.InstanceType', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.FleetType', props);
    return resource.getResponseField('Fleet.FleetType') as unknown as string;
  }

  public get computeCapacityStatus(): AppStreamResponsesCreateFleetFleetComputeCapacityStatus {
    return new AppStreamResponsesCreateFleetFleetComputeCapacityStatus(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.MaxUserDurationInSeconds', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.DisconnectTimeoutInSeconds', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.State', props);
    return resource.getResponseField('Fleet.State') as unknown as string;
  }

  public get vpcConfig(): AppStreamResponsesCreateFleetFleetVpcConfig {
    return new AppStreamResponsesCreateFleetFleetVpcConfig(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.CreatedTime', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.FleetErrors', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.EnableDefaultInternetAccess', props);
    return resource.getResponseField('Fleet.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamResponsesCreateFleetFleetDomainJoinInfo {
    return new AppStreamResponsesCreateFleetFleetDomainJoinInfo(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.IdleDisconnectTimeoutInSeconds', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.IamRoleArn', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.StreamView', props);
    return resource.getResponseField('Fleet.StreamView') as unknown as string;
  }

}

export class AppStreamResponsesCreateFleetFleetComputeCapacityStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateFleetRequest) {
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.ComputeCapacityStatus.Desired', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.ComputeCapacityStatus.Running', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.ComputeCapacityStatus.InUse', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.ComputeCapacityStatus.Available', props);
    return resource.getResponseField('Fleet.ComputeCapacityStatus.Available') as unknown as number;
  }

}

export class AppStreamResponsesCreateFleetFleetVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateFleetRequest) {
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.VpcConfig.SubnetIds', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('Fleet.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamResponsesCreateFleetFleetDomainJoinInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateFleetRequest) {
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.DomainJoinInfo.DirectoryName', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          FleetType: this.__input.fleetType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          Tags: this.__input.tags,
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamResponsesCreateImageBuilder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateImageBuilderRequest) {
  }

  public get imageBuilder(): AppStreamResponsesCreateImageBuilderImageBuilder {
    return new AppStreamResponsesCreateImageBuilderImageBuilder(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesCreateImageBuilderImageBuilder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateImageBuilderRequest) {
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.Name', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.Arn', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.ImageArn', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.Description', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.DisplayName', props);
    return resource.getResponseField('ImageBuilder.DisplayName') as unknown as string;
  }

  public get vpcConfig(): AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig {
    return new AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.InstanceType', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.Platform', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.IamRoleArn', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.State', props);
    return resource.getResponseField('ImageBuilder.State') as unknown as string;
  }

  public get stateChangeReason(): AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason {
    return new AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.CreatedTime', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.EnableDefaultInternetAccess', props);
    return resource.getResponseField('ImageBuilder.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo {
    return new AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo(this.__scope, this.__resources, this.__input);
  }

  public get networkAccessConfiguration(): AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration {
    return new AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.ImageBuilderErrors', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.AppstreamAgentVersion', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.AccessEndpoints', props);
    return resource.getResponseField('ImageBuilder.AccessEndpoints') as unknown as shapes.AppStreamAccessEndpoint[];
  }

}

export class AppStreamResponsesCreateImageBuilderImageBuilderVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateImageBuilderRequest) {
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.VpcConfig.SubnetIds', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamResponsesCreateImageBuilderImageBuilderStateChangeReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateImageBuilderRequest) {
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.StateChangeReason.Code', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.StateChangeReason.Message', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Message') as unknown as string;
  }

}

export class AppStreamResponsesCreateImageBuilderImageBuilderDomainJoinInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateImageBuilderRequest) {
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamResponsesCreateImageBuilderImageBuilderNetworkAccessConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateImageBuilderRequest) {
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress', props);
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
          Name: this.__input.name,
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          InstanceType: this.__input.instanceType,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          IamRoleArn: this.__input.iamRoleArn,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniId') as unknown as string;
  }

}

export class AppStreamResponsesCreateImageBuilderStreamingUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateImageBuilderStreamingUrlRequest) {
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
          Name: this.__input.name,
          Validity: this.__input.validity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilderStreamingURL.StreamingURL', props);
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
          Name: this.__input.name,
          Validity: this.__input.validity,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateImageBuilderStreamingURL.Expires', props);
    return resource.getResponseField('Expires') as unknown as string;
  }

}

export class AppStreamResponsesCreateStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateStackRequest) {
  }

  public get stack(): AppStreamResponsesCreateStackStack {
    return new AppStreamResponsesCreateStackStack(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesCreateStackStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateStackRequest) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.Arn', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.Name', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.Description', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.DisplayName', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.CreatedTime', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.StorageConnectors', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.RedirectURL', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.FeedbackURL', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.StackErrors', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.UserSettings', props);
    return resource.getResponseField('Stack.UserSettings') as unknown as shapes.AppStreamUserSetting[];
  }

  public get applicationSettings(): AppStreamResponsesCreateStackStackApplicationSettings {
    return new AppStreamResponsesCreateStackStackApplicationSettings(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.AccessEndpoints', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.EmbedHostDomains', props);
    return resource.getResponseField('Stack.EmbedHostDomains') as unknown as string[];
  }

}

export class AppStreamResponsesCreateStackStackApplicationSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateStackRequest) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.ApplicationSettings.Enabled', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.ApplicationSettings.SettingsGroup', props);
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
          Name: this.__input.name,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          StorageConnectors: this.__input.storageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          Tags: this.__input.tags,
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.Stack.ApplicationSettings.S3BucketName', props);
    return resource.getResponseField('Stack.ApplicationSettings.S3BucketName') as unknown as string;
  }

}

export class AppStreamResponsesCreateStreamingUrl {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamCreateStreamingUrlRequest) {
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
          StackName: this.__input.stackName,
          FleetName: this.__input.fleetName,
          UserId: this.__input.userId,
          ApplicationId: this.__input.applicationId,
          Validity: this.__input.validity,
          SessionContext: this.__input.sessionContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingURL.StreamingURL', props);
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
          StackName: this.__input.stackName,
          FleetName: this.__input.fleetName,
          UserId: this.__input.userId,
          ApplicationId: this.__input.applicationId,
          Validity: this.__input.validity,
          SessionContext: this.__input.sessionContext,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStreamingURL.Expires', props);
    return resource.getResponseField('Expires') as unknown as string;
  }

}

export class AppStreamResponsesCreateUsageReportSubscription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsageReportSubscription.S3BucketName', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUsageReportSubscription.Schedule', props);
    return resource.getResponseField('Schedule') as unknown as string;
  }

}

export class AppStreamResponsesDeleteImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDeleteImageRequest) {
  }

  public get image(): AppStreamResponsesDeleteImageImage {
    return new AppStreamResponsesDeleteImageImage(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesDeleteImageImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDeleteImageRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.Name', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.Arn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.BaseImageArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.DisplayName', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.State', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.Visibility', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.ImageBuilderSupported', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.ImageBuilderName', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.Platform', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.Description', props);
    return resource.getResponseField('Image.Description') as unknown as string;
  }

  public get stateChangeReason(): AppStreamResponsesDeleteImageImageStateChangeReason {
    return new AppStreamResponsesDeleteImageImageStateChangeReason(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.Applications', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.CreatedTime', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.PublicBaseImageReleasedDate', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.AppstreamAgentVersion', props);
    return resource.getResponseField('Image.AppstreamAgentVersion') as unknown as string;
  }

  public get imagePermissions(): AppStreamResponsesDeleteImageImageImagePermissions {
    return new AppStreamResponsesDeleteImageImageImagePermissions(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesDeleteImageImageStateChangeReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDeleteImageRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.StateChangeReason.Code', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.StateChangeReason.Message', props);
    return resource.getResponseField('Image.StateChangeReason.Message') as unknown as string;
  }

}

export class AppStreamResponsesDeleteImageImageImagePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDeleteImageRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.ImagePermissions.allowFleet', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImage.Image.ImagePermissions.allowImageBuilder', props);
    return resource.getResponseField('Image.ImagePermissions.allowImageBuilder') as unknown as boolean;
  }

}

export class AppStreamResponsesDeleteImageBuilder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDeleteImageBuilderRequest) {
  }

  public get imageBuilder(): AppStreamResponsesDeleteImageBuilderImageBuilder {
    return new AppStreamResponsesDeleteImageBuilderImageBuilder(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesDeleteImageBuilderImageBuilder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDeleteImageBuilderRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.Name', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.Arn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.ImageArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.Description', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.DisplayName', props);
    return resource.getResponseField('ImageBuilder.DisplayName') as unknown as string;
  }

  public get vpcConfig(): AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig {
    return new AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.InstanceType', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.Platform', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.IamRoleArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.State', props);
    return resource.getResponseField('ImageBuilder.State') as unknown as string;
  }

  public get stateChangeReason(): AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason {
    return new AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.CreatedTime', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.EnableDefaultInternetAccess', props);
    return resource.getResponseField('ImageBuilder.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo {
    return new AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo(this.__scope, this.__resources, this.__input);
  }

  public get networkAccessConfiguration(): AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration {
    return new AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.ImageBuilderErrors', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.AppstreamAgentVersion', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.AccessEndpoints', props);
    return resource.getResponseField('ImageBuilder.AccessEndpoints') as unknown as shapes.AppStreamAccessEndpoint[];
  }

}

export class AppStreamResponsesDeleteImageBuilderImageBuilderVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDeleteImageBuilderRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.VpcConfig.SubnetIds', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamResponsesDeleteImageBuilderImageBuilderStateChangeReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDeleteImageBuilderRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.StateChangeReason.Code', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.StateChangeReason.Message', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Message') as unknown as string;
  }

}

export class AppStreamResponsesDeleteImageBuilderImageBuilderDomainJoinInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDeleteImageBuilderRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamResponsesDeleteImageBuilderImageBuilderNetworkAccessConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDeleteImageBuilderRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniId') as unknown as string;
  }

}

export class AppStreamResponsesDescribeDirectoryConfigs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDescribeDirectoryConfigsRequest) {
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
          DirectoryNames: this.__input.directoryNames,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDirectoryConfigs.DirectoryConfigs', props);
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
          DirectoryNames: this.__input.directoryNames,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDirectoryConfigs.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesDescribeFleets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDescribeFleetsRequest) {
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
          Names: this.__input.names,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleets.Fleets', props);
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
          Names: this.__input.names,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesDescribeImageBuilders {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDescribeImageBuildersRequest) {
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
          Names: this.__input.names,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageBuilders.ImageBuilders', props);
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
          Names: this.__input.names,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImageBuilders.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesDescribeImagePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDescribeImagePermissionsRequest) {
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
          Name: this.__input.name,
          MaxResults: this.__input.maxResults,
          SharedAwsAccountIds: this.__input.sharedAwsAccountIds,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImagePermissions.Name', props);
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
          Name: this.__input.name,
          MaxResults: this.__input.maxResults,
          SharedAwsAccountIds: this.__input.sharedAwsAccountIds,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImagePermissions.SharedImagePermissionsList', props);
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
          Name: this.__input.name,
          MaxResults: this.__input.maxResults,
          SharedAwsAccountIds: this.__input.sharedAwsAccountIds,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImagePermissions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesDescribeImages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDescribeImagesRequest) {
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
          Names: this.__input.names,
          Arns: this.__input.arns,
          Type: this.__input.type,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImages.Images', props);
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
          Names: this.__input.names,
          Arns: this.__input.arns,
          Type: this.__input.type,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeImages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesDescribeSessions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDescribeSessionsRequest) {
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
          StackName: this.__input.stackName,
          FleetName: this.__input.fleetName,
          UserId: this.__input.userId,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
          AuthenticationType: this.__input.authenticationType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSessions.Sessions', props);
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
          StackName: this.__input.stackName,
          FleetName: this.__input.fleetName,
          UserId: this.__input.userId,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
          AuthenticationType: this.__input.authenticationType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSessions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesDescribeStacks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDescribeStacksRequest) {
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
          Names: this.__input.names,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStacks.Stacks', props);
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
          Names: this.__input.names,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStacks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesDescribeUsageReportSubscriptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDescribeUsageReportSubscriptionsRequest) {
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUsageReportSubscriptions.UsageReportSubscriptions', props);
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
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUsageReportSubscriptions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesDescribeUserStackAssociations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDescribeUserStackAssociationsRequest) {
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
          StackName: this.__input.stackName,
          UserName: this.__input.userName,
          AuthenticationType: this.__input.authenticationType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserStackAssociations.UserStackAssociations', props);
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
          StackName: this.__input.stackName,
          UserName: this.__input.userName,
          AuthenticationType: this.__input.authenticationType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserStackAssociations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesDescribeUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamDescribeUsersRequest) {
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
          AuthenticationType: this.__input.authenticationType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUsers.Users', props);
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
          AuthenticationType: this.__input.authenticationType,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUsers.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesListAssociatedFleets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamListAssociatedFleetsRequest) {
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
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedFleets.Names', props);
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
          StackName: this.__input.stackName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedFleets.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesListAssociatedStacks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamListAssociatedStacksRequest) {
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
          FleetName: this.__input.fleetName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedStacks.Names', props);
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
          FleetName: this.__input.fleetName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAssociatedStacks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class AppStreamResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamListTagsForResourceRequest) {
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
          ResourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

}

export class AppStreamResponsesStartImageBuilder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStartImageBuilderRequest) {
  }

  public get imageBuilder(): AppStreamResponsesStartImageBuilderImageBuilder {
    return new AppStreamResponsesStartImageBuilderImageBuilder(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesStartImageBuilderImageBuilder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStartImageBuilderRequest) {
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.Name', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.Arn', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.ImageArn', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.Description', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.DisplayName', props);
    return resource.getResponseField('ImageBuilder.DisplayName') as unknown as string;
  }

  public get vpcConfig(): AppStreamResponsesStartImageBuilderImageBuilderVpcConfig {
    return new AppStreamResponsesStartImageBuilderImageBuilderVpcConfig(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.InstanceType', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.Platform', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.IamRoleArn', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.State', props);
    return resource.getResponseField('ImageBuilder.State') as unknown as string;
  }

  public get stateChangeReason(): AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason {
    return new AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.CreatedTime', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.EnableDefaultInternetAccess', props);
    return resource.getResponseField('ImageBuilder.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo {
    return new AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo(this.__scope, this.__resources, this.__input);
  }

  public get networkAccessConfiguration(): AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration {
    return new AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.ImageBuilderErrors', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.AppstreamAgentVersion', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.AccessEndpoints', props);
    return resource.getResponseField('ImageBuilder.AccessEndpoints') as unknown as shapes.AppStreamAccessEndpoint[];
  }

}

export class AppStreamResponsesStartImageBuilderImageBuilderVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStartImageBuilderRequest) {
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.VpcConfig.SubnetIds', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamResponsesStartImageBuilderImageBuilderStateChangeReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStartImageBuilderRequest) {
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.StateChangeReason.Code', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.StateChangeReason.Message', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Message') as unknown as string;
  }

}

export class AppStreamResponsesStartImageBuilderImageBuilderDomainJoinInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStartImageBuilderRequest) {
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamResponsesStartImageBuilderImageBuilderNetworkAccessConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStartImageBuilderRequest) {
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress', props);
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
          Name: this.__input.name,
          AppstreamAgentVersion: this.__input.appstreamAgentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniId') as unknown as string;
  }

}

export class AppStreamResponsesStopImageBuilder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStopImageBuilderRequest) {
  }

  public get imageBuilder(): AppStreamResponsesStopImageBuilderImageBuilder {
    return new AppStreamResponsesStopImageBuilderImageBuilder(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesStopImageBuilderImageBuilder {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStopImageBuilderRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.Name', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.Arn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.ImageArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.Description', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.DisplayName', props);
    return resource.getResponseField('ImageBuilder.DisplayName') as unknown as string;
  }

  public get vpcConfig(): AppStreamResponsesStopImageBuilderImageBuilderVpcConfig {
    return new AppStreamResponsesStopImageBuilderImageBuilderVpcConfig(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.InstanceType', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.Platform', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.IamRoleArn', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.State', props);
    return resource.getResponseField('ImageBuilder.State') as unknown as string;
  }

  public get stateChangeReason(): AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason {
    return new AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.CreatedTime', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.EnableDefaultInternetAccess', props);
    return resource.getResponseField('ImageBuilder.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo {
    return new AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo(this.__scope, this.__resources, this.__input);
  }

  public get networkAccessConfiguration(): AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration {
    return new AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration(this.__scope, this.__resources, this.__input);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.ImageBuilderErrors', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.AppstreamAgentVersion', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.AccessEndpoints', props);
    return resource.getResponseField('ImageBuilder.AccessEndpoints') as unknown as shapes.AppStreamAccessEndpoint[];
  }

}

export class AppStreamResponsesStopImageBuilderImageBuilderVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStopImageBuilderRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.VpcConfig.SubnetIds', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('ImageBuilder.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamResponsesStopImageBuilderImageBuilderStateChangeReason {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStopImageBuilderRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.StateChangeReason.Code', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.StateChangeReason.Message', props);
    return resource.getResponseField('ImageBuilder.StateChangeReason.Message') as unknown as string;
  }

}

export class AppStreamResponsesStopImageBuilderImageBuilderDomainJoinInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStopImageBuilderRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.DomainJoinInfo.DirectoryName', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('ImageBuilder.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamResponsesStopImageBuilderImageBuilderNetworkAccessConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamStopImageBuilderRequest) {
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniPrivateIpAddress', props);
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
          Name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopImageBuilder.ImageBuilder.NetworkAccessConfiguration.EniId', props);
    return resource.getResponseField('ImageBuilder.NetworkAccessConfiguration.EniId') as unknown as string;
  }

}

export class AppStreamResponsesUpdateDirectoryConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamUpdateDirectoryConfigRequest) {
  }

  public get directoryConfig(): AppStreamResponsesUpdateDirectoryConfigDirectoryConfig {
    return new AppStreamResponsesUpdateDirectoryConfigDirectoryConfig(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesUpdateDirectoryConfigDirectoryConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamUpdateDirectoryConfigRequest) {
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
          DirectoryName: this.__input.directoryName,
          OrganizationalUnitDistinguishedNames: this.__input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.__input.serviceAccountCredentials?.accountName,
            AccountPassword: this.__input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectoryConfig.DirectoryConfig.DirectoryName', props);
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
          DirectoryName: this.__input.directoryName,
          OrganizationalUnitDistinguishedNames: this.__input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.__input.serviceAccountCredentials?.accountName,
            AccountPassword: this.__input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectoryConfig.DirectoryConfig.OrganizationalUnitDistinguishedNames', props);
    return resource.getResponseField('DirectoryConfig.OrganizationalUnitDistinguishedNames') as unknown as string[];
  }

  public get serviceAccountCredentials(): AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials {
    return new AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials(this.__scope, this.__resources, this.__input);
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
          DirectoryName: this.__input.directoryName,
          OrganizationalUnitDistinguishedNames: this.__input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.__input.serviceAccountCredentials?.accountName,
            AccountPassword: this.__input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectoryConfig.DirectoryConfig.CreatedTime', props);
    return resource.getResponseField('DirectoryConfig.CreatedTime') as unknown as string;
  }

}

export class AppStreamResponsesUpdateDirectoryConfigDirectoryConfigServiceAccountCredentials {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamUpdateDirectoryConfigRequest) {
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
          DirectoryName: this.__input.directoryName,
          OrganizationalUnitDistinguishedNames: this.__input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.__input.serviceAccountCredentials?.accountName,
            AccountPassword: this.__input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountName', props);
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
          DirectoryName: this.__input.directoryName,
          OrganizationalUnitDistinguishedNames: this.__input.organizationalUnitDistinguishedNames,
          ServiceAccountCredentials: {
            AccountName: this.__input.serviceAccountCredentials?.accountName,
            AccountPassword: this.__input.serviceAccountCredentials?.accountPassword,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDirectoryConfig.DirectoryConfig.ServiceAccountCredentials.AccountPassword', props);
    return resource.getResponseField('DirectoryConfig.ServiceAccountCredentials.AccountPassword') as unknown as string;
  }

}

export class AppStreamResponsesUpdateFleet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamUpdateFleetRequest) {
  }

  public get fleet(): AppStreamResponsesUpdateFleetFleet {
    return new AppStreamResponsesUpdateFleetFleet(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesUpdateFleetFleet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamUpdateFleetRequest) {
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.Arn', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.Name', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.DisplayName', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.Description', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.ImageName', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.ImageArn', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.InstanceType', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.FleetType', props);
    return resource.getResponseField('Fleet.FleetType') as unknown as string;
  }

  public get computeCapacityStatus(): AppStreamResponsesUpdateFleetFleetComputeCapacityStatus {
    return new AppStreamResponsesUpdateFleetFleetComputeCapacityStatus(this.__scope, this.__resources, this.__input);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.MaxUserDurationInSeconds', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.DisconnectTimeoutInSeconds', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.State', props);
    return resource.getResponseField('Fleet.State') as unknown as string;
  }

  public get vpcConfig(): AppStreamResponsesUpdateFleetFleetVpcConfig {
    return new AppStreamResponsesUpdateFleetFleetVpcConfig(this.__scope, this.__resources, this.__input);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.CreatedTime', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.FleetErrors', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.EnableDefaultInternetAccess', props);
    return resource.getResponseField('Fleet.EnableDefaultInternetAccess') as unknown as boolean;
  }

  public get domainJoinInfo(): AppStreamResponsesUpdateFleetFleetDomainJoinInfo {
    return new AppStreamResponsesUpdateFleetFleetDomainJoinInfo(this.__scope, this.__resources, this.__input);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.IdleDisconnectTimeoutInSeconds', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.IamRoleArn', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.StreamView', props);
    return resource.getResponseField('Fleet.StreamView') as unknown as string;
  }

}

export class AppStreamResponsesUpdateFleetFleetComputeCapacityStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamUpdateFleetRequest) {
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.ComputeCapacityStatus.Desired', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.ComputeCapacityStatus.Running', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.ComputeCapacityStatus.InUse', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.ComputeCapacityStatus.Available', props);
    return resource.getResponseField('Fleet.ComputeCapacityStatus.Available') as unknown as number;
  }

}

export class AppStreamResponsesUpdateFleetFleetVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamUpdateFleetRequest) {
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.VpcConfig.SubnetIds', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.VpcConfig.SecurityGroupIds', props);
    return resource.getResponseField('Fleet.VpcConfig.SecurityGroupIds') as unknown as string[];
  }

}

export class AppStreamResponsesUpdateFleetFleetDomainJoinInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamUpdateFleetRequest) {
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.DomainJoinInfo.DirectoryName', props);
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
          ImageName: this.__input.imageName,
          ImageArn: this.__input.imageArn,
          Name: this.__input.name,
          InstanceType: this.__input.instanceType,
          ComputeCapacity: {
            DesiredInstances: this.__input.computeCapacity?.desiredInstances,
          },
          VpcConfig: {
            SubnetIds: this.__input.vpcConfig?.subnetIds,
            SecurityGroupIds: this.__input.vpcConfig?.securityGroupIds,
          },
          MaxUserDurationInSeconds: this.__input.maxUserDurationInSeconds,
          DisconnectTimeoutInSeconds: this.__input.disconnectTimeoutInSeconds,
          DeleteVpcConfig: this.__input.deleteVpcConfig,
          Description: this.__input.description,
          DisplayName: this.__input.displayName,
          EnableDefaultInternetAccess: this.__input.enableDefaultInternetAccess,
          DomainJoinInfo: {
            DirectoryName: this.__input.domainJoinInfo?.directoryName,
            OrganizationalUnitDistinguishedName: this.__input.domainJoinInfo?.organizationalUnitDistinguishedName,
          },
          IdleDisconnectTimeoutInSeconds: this.__input.idleDisconnectTimeoutInSeconds,
          AttributesToDelete: this.__input.attributesToDelete,
          IamRoleArn: this.__input.iamRoleArn,
          StreamView: this.__input.streamView,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateFleet.Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName', props);
    return resource.getResponseField('Fleet.DomainJoinInfo.OrganizationalUnitDistinguishedName') as unknown as string;
  }

}

export class AppStreamResponsesUpdateStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamUpdateStackRequest) {
  }

  public get stack(): AppStreamResponsesUpdateStackStack {
    return new AppStreamResponsesUpdateStackStack(this.__scope, this.__resources, this.__input);
  }

}

export class AppStreamResponsesUpdateStackStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamUpdateStackRequest) {
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.Arn', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.Name', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.Description', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.DisplayName', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.CreatedTime', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.StorageConnectors', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.RedirectURL', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.FeedbackURL', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.StackErrors', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.UserSettings', props);
    return resource.getResponseField('Stack.UserSettings') as unknown as shapes.AppStreamUserSetting[];
  }

  public get applicationSettings(): AppStreamResponsesUpdateStackStackApplicationSettings {
    return new AppStreamResponsesUpdateStackStackApplicationSettings(this.__scope, this.__resources, this.__input);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.AccessEndpoints', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.EmbedHostDomains', props);
    return resource.getResponseField('Stack.EmbedHostDomains') as unknown as string[];
  }

}

export class AppStreamResponsesUpdateStackStackApplicationSettings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.AppStreamUpdateStackRequest) {
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.ApplicationSettings.Enabled', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.ApplicationSettings.SettingsGroup', props);
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
          DisplayName: this.__input.displayName,
          Description: this.__input.description,
          Name: this.__input.name,
          StorageConnectors: this.__input.storageConnectors,
          DeleteStorageConnectors: this.__input.deleteStorageConnectors,
          RedirectURL: this.__input.redirectUrl,
          FeedbackURL: this.__input.feedbackUrl,
          AttributesToDelete: this.__input.attributesToDelete,
          UserSettings: this.__input.userSettings,
          ApplicationSettings: {
            Enabled: this.__input.applicationSettings?.enabled,
            SettingsGroup: this.__input.applicationSettings?.settingsGroup,
          },
          AccessEndpoints: this.__input.accessEndpoints,
          EmbedHostDomains: this.__input.embedHostDomains,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateStack.Stack.ApplicationSettings.S3BucketName', props);
    return resource.getResponseField('Stack.ApplicationSettings.S3BucketName') as unknown as string;
  }

}

