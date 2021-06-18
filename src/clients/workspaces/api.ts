import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class WorkSpacesClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateConnectionAlias(input: shapes.WorkSpacesAssociateConnectionAliasRequest): WorkSpacesAssociateConnectionAlias {
    return new WorkSpacesAssociateConnectionAlias(this, 'AssociateConnectionAlias', this.__resources, input);
  }

  public associateIpGroups(input: shapes.WorkSpacesAssociateIpGroupsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateIpGroups',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.AssociateIpGroups'),
        parameters: {
          DirectoryId: input.directoryId,
          GroupIds: input.groupIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateIpGroups', props);
  }

  public authorizeIpRules(input: shapes.WorkSpacesAuthorizeIpRulesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'authorizeIpRules',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.AuthorizeIpRules'),
        parameters: {
          GroupId: input.groupId,
          UserRules: input.userRules,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AuthorizeIpRules', props);
  }

  public copyWorkspaceImage(input: shapes.WorkSpacesCopyWorkspaceImageRequest): WorkSpacesCopyWorkspaceImage {
    return new WorkSpacesCopyWorkspaceImage(this, 'CopyWorkspaceImage', this.__resources, input);
  }

  public createConnectionAlias(input: shapes.WorkSpacesCreateConnectionAliasRequest): WorkSpacesCreateConnectionAlias {
    return new WorkSpacesCreateConnectionAlias(this, 'CreateConnectionAlias', this.__resources, input);
  }

  public createIpGroup(input: shapes.WorkSpacesCreateIpGroupRequest): WorkSpacesCreateIpGroup {
    return new WorkSpacesCreateIpGroup(this, 'CreateIpGroup', this.__resources, input);
  }

  public createTags(input: shapes.WorkSpacesCreateTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTags',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateTags'),
        parameters: {
          ResourceId: input.resourceId,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CreateTags', props);
  }

  public createWorkspaces(input: shapes.WorkSpacesCreateWorkspacesRequest): WorkSpacesCreateWorkspaces {
    return new WorkSpacesCreateWorkspaces(this, 'CreateWorkspaces', this.__resources, input);
  }

  public deleteConnectionAlias(input: shapes.WorkSpacesDeleteConnectionAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteConnectionAlias',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DeleteConnectionAlias'),
        parameters: {
          AliasId: input.aliasId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteConnectionAlias', props);
  }

  public deleteIpGroup(input: shapes.WorkSpacesDeleteIpGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteIpGroup',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DeleteIpGroup'),
        parameters: {
          GroupId: input.groupId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteIpGroup', props);
  }

  public deleteTags(input: shapes.WorkSpacesDeleteTagsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTags',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DeleteTags'),
        parameters: {
          ResourceId: input.resourceId,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTags', props);
  }

  public deleteWorkspaceImage(input: shapes.WorkSpacesDeleteWorkspaceImageRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWorkspaceImage',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DeleteWorkspaceImage'),
        parameters: {
          ImageId: input.imageId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWorkspaceImage', props);
  }

  public deregisterWorkspaceDirectory(input: shapes.WorkSpacesDeregisterWorkspaceDirectoryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterWorkspaceDirectory',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DeregisterWorkspaceDirectory'),
        parameters: {
          DirectoryId: input.directoryId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterWorkspaceDirectory', props);
  }

  public describeAccount(): WorkSpacesDescribeAccount {
    return new WorkSpacesDescribeAccount(this, 'DescribeAccount', this.__resources);
  }

  public describeAccountModifications(input: shapes.WorkSpacesDescribeAccountModificationsRequest): WorkSpacesDescribeAccountModifications {
    return new WorkSpacesDescribeAccountModifications(this, 'DescribeAccountModifications', this.__resources, input);
  }

  public describeClientProperties(input: shapes.WorkSpacesDescribeClientPropertiesRequest): WorkSpacesDescribeClientProperties {
    return new WorkSpacesDescribeClientProperties(this, 'DescribeClientProperties', this.__resources, input);
  }

  public describeConnectionAliasPermissions(input: shapes.WorkSpacesDescribeConnectionAliasPermissionsRequest): WorkSpacesDescribeConnectionAliasPermissions {
    return new WorkSpacesDescribeConnectionAliasPermissions(this, 'DescribeConnectionAliasPermissions', this.__resources, input);
  }

  public describeConnectionAliases(input: shapes.WorkSpacesDescribeConnectionAliasesRequest): WorkSpacesDescribeConnectionAliases {
    return new WorkSpacesDescribeConnectionAliases(this, 'DescribeConnectionAliases', this.__resources, input);
  }

  public describeIpGroups(input: shapes.WorkSpacesDescribeIpGroupsRequest): WorkSpacesDescribeIpGroups {
    return new WorkSpacesDescribeIpGroups(this, 'DescribeIpGroups', this.__resources, input);
  }

  public describeTags(input: shapes.WorkSpacesDescribeTagsRequest): WorkSpacesDescribeTags {
    return new WorkSpacesDescribeTags(this, 'DescribeTags', this.__resources, input);
  }

  public describeWorkspaceBundles(input: shapes.WorkSpacesDescribeWorkspaceBundlesRequest): WorkSpacesDescribeWorkspaceBundles {
    return new WorkSpacesDescribeWorkspaceBundles(this, 'DescribeWorkspaceBundles', this.__resources, input);
  }

  public describeWorkspaceDirectories(input: shapes.WorkSpacesDescribeWorkspaceDirectoriesRequest): WorkSpacesDescribeWorkspaceDirectories {
    return new WorkSpacesDescribeWorkspaceDirectories(this, 'DescribeWorkspaceDirectories', this.__resources, input);
  }

  public describeWorkspaceImagePermissions(input: shapes.WorkSpacesDescribeWorkspaceImagePermissionsRequest): WorkSpacesDescribeWorkspaceImagePermissions {
    return new WorkSpacesDescribeWorkspaceImagePermissions(this, 'DescribeWorkspaceImagePermissions', this.__resources, input);
  }

  public describeWorkspaceImages(input: shapes.WorkSpacesDescribeWorkspaceImagesRequest): WorkSpacesDescribeWorkspaceImages {
    return new WorkSpacesDescribeWorkspaceImages(this, 'DescribeWorkspaceImages', this.__resources, input);
  }

  public describeWorkspaceSnapshots(input: shapes.WorkSpacesDescribeWorkspaceSnapshotsRequest): WorkSpacesDescribeWorkspaceSnapshots {
    return new WorkSpacesDescribeWorkspaceSnapshots(this, 'DescribeWorkspaceSnapshots', this.__resources, input);
  }

  public describeWorkspaces(input: shapes.WorkSpacesDescribeWorkspacesRequest): WorkSpacesDescribeWorkspaces {
    return new WorkSpacesDescribeWorkspaces(this, 'DescribeWorkspaces', this.__resources, input);
  }

  public describeWorkspacesConnectionStatus(input: shapes.WorkSpacesDescribeWorkspacesConnectionStatusRequest): WorkSpacesDescribeWorkspacesConnectionStatus {
    return new WorkSpacesDescribeWorkspacesConnectionStatus(this, 'DescribeWorkspacesConnectionStatus', this.__resources, input);
  }

  public disassociateConnectionAlias(input: shapes.WorkSpacesDisassociateConnectionAliasRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateConnectionAlias',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DisassociateConnectionAlias'),
        parameters: {
          AliasId: input.aliasId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateConnectionAlias', props);
  }

  public disassociateIpGroups(input: shapes.WorkSpacesDisassociateIpGroupsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateIpGroups',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DisassociateIpGroups'),
        parameters: {
          DirectoryId: input.directoryId,
          GroupIds: input.groupIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateIpGroups', props);
  }

  public importWorkspaceImage(input: shapes.WorkSpacesImportWorkspaceImageRequest): WorkSpacesImportWorkspaceImage {
    return new WorkSpacesImportWorkspaceImage(this, 'ImportWorkspaceImage', this.__resources, input);
  }

  public listAvailableManagementCidrRanges(input: shapes.WorkSpacesListAvailableManagementCidrRangesRequest): WorkSpacesListAvailableManagementCidrRanges {
    return new WorkSpacesListAvailableManagementCidrRanges(this, 'ListAvailableManagementCidrRanges', this.__resources, input);
  }

  public migrateWorkspace(input: shapes.WorkSpacesMigrateWorkspaceRequest): WorkSpacesMigrateWorkspace {
    return new WorkSpacesMigrateWorkspace(this, 'MigrateWorkspace', this.__resources, input);
  }

  public modifyAccount(input: shapes.WorkSpacesModifyAccountRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyAccount',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.ModifyAccount'),
        parameters: {
          DedicatedTenancySupport: input.dedicatedTenancySupport,
          DedicatedTenancyManagementCidrRange: input.dedicatedTenancyManagementCidrRange,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ModifyAccount', props);
  }

  public modifyClientProperties(input: shapes.WorkSpacesModifyClientPropertiesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyClientProperties',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.ModifyClientProperties'),
        parameters: {
          ResourceId: input.resourceId,
          ClientProperties: {
            ReconnectEnabled: input.clientProperties.reconnectEnabled,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'ModifyClientProperties', props);
  }

  public modifySelfservicePermissions(input: shapes.WorkSpacesModifySelfservicePermissionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifySelfservicePermissions',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.ModifySelfservicePermissions'),
        parameters: {
          ResourceId: input.resourceId,
          SelfservicePermissions: {
            RestartWorkspace: input.selfservicePermissions.restartWorkspace,
            IncreaseVolumeSize: input.selfservicePermissions.increaseVolumeSize,
            ChangeComputeType: input.selfservicePermissions.changeComputeType,
            SwitchRunningMode: input.selfservicePermissions.switchRunningMode,
            RebuildWorkspace: input.selfservicePermissions.rebuildWorkspace,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'ModifySelfservicePermissions', props);
  }

  public modifyWorkspaceAccessProperties(input: shapes.WorkSpacesModifyWorkspaceAccessPropertiesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyWorkspaceAccessProperties',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.ModifyWorkspaceAccessProperties'),
        parameters: {
          ResourceId: input.resourceId,
          WorkspaceAccessProperties: {
            DeviceTypeWindows: input.workspaceAccessProperties.deviceTypeWindows,
            DeviceTypeOsx: input.workspaceAccessProperties.deviceTypeOsx,
            DeviceTypeWeb: input.workspaceAccessProperties.deviceTypeWeb,
            DeviceTypeIos: input.workspaceAccessProperties.deviceTypeIos,
            DeviceTypeAndroid: input.workspaceAccessProperties.deviceTypeAndroid,
            DeviceTypeChromeOs: input.workspaceAccessProperties.deviceTypeChromeOs,
            DeviceTypeZeroClient: input.workspaceAccessProperties.deviceTypeZeroClient,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'ModifyWorkspaceAccessProperties', props);
  }

  public modifyWorkspaceCreationProperties(input: shapes.WorkSpacesModifyWorkspaceCreationPropertiesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyWorkspaceCreationProperties',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.ModifyWorkspaceCreationProperties'),
        parameters: {
          ResourceId: input.resourceId,
          WorkspaceCreationProperties: {
            EnableWorkDocs: input.workspaceCreationProperties.enableWorkDocs,
            EnableInternetAccess: input.workspaceCreationProperties.enableInternetAccess,
            DefaultOu: input.workspaceCreationProperties.defaultOu,
            CustomSecurityGroupId: input.workspaceCreationProperties.customSecurityGroupId,
            UserEnabledAsLocalAdministrator: input.workspaceCreationProperties.userEnabledAsLocalAdministrator,
            EnableMaintenanceMode: input.workspaceCreationProperties.enableMaintenanceMode,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'ModifyWorkspaceCreationProperties', props);
  }

  public modifyWorkspaceProperties(input: shapes.WorkSpacesModifyWorkspacePropertiesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyWorkspaceProperties',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.ModifyWorkspaceProperties'),
        parameters: {
          WorkspaceId: input.workspaceId,
          WorkspaceProperties: {
            RunningMode: input.workspaceProperties.runningMode,
            RunningModeAutoStopTimeoutInMinutes: input.workspaceProperties.runningModeAutoStopTimeoutInMinutes,
            RootVolumeSizeGib: input.workspaceProperties.rootVolumeSizeGib,
            UserVolumeSizeGib: input.workspaceProperties.userVolumeSizeGib,
            ComputeTypeName: input.workspaceProperties.computeTypeName,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'ModifyWorkspaceProperties', props);
  }

  public modifyWorkspaceState(input: shapes.WorkSpacesModifyWorkspaceStateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyWorkspaceState',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.ModifyWorkspaceState'),
        parameters: {
          WorkspaceId: input.workspaceId,
          WorkspaceState: input.workspaceState,
        },
      },
    };
    new cr.AwsCustomResource(this, 'ModifyWorkspaceState', props);
  }

  public rebootWorkspaces(input: shapes.WorkSpacesRebootWorkspacesRequest): WorkSpacesRebootWorkspaces {
    return new WorkSpacesRebootWorkspaces(this, 'RebootWorkspaces', this.__resources, input);
  }

  public rebuildWorkspaces(input: shapes.WorkSpacesRebuildWorkspacesRequest): WorkSpacesRebuildWorkspaces {
    return new WorkSpacesRebuildWorkspaces(this, 'RebuildWorkspaces', this.__resources, input);
  }

  public registerWorkspaceDirectory(input: shapes.WorkSpacesRegisterWorkspaceDirectoryRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerWorkspaceDirectory',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.RegisterWorkspaceDirectory'),
        parameters: {
          DirectoryId: input.directoryId,
          SubnetIds: input.subnetIds,
          EnableWorkDocs: input.enableWorkDocs,
          EnableSelfService: input.enableSelfService,
          Tenancy: input.tenancy,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterWorkspaceDirectory', props);
  }

  public restoreWorkspace(input: shapes.WorkSpacesRestoreWorkspaceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreWorkspace',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.RestoreWorkspace'),
        parameters: {
          WorkspaceId: input.workspaceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RestoreWorkspace', props);
  }

  public revokeIpRules(input: shapes.WorkSpacesRevokeIpRulesRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeIpRules',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.RevokeIpRules'),
        parameters: {
          GroupId: input.groupId,
          UserRules: input.userRules,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RevokeIpRules', props);
  }

  public startWorkspaces(input: shapes.WorkSpacesStartWorkspacesRequest): WorkSpacesStartWorkspaces {
    return new WorkSpacesStartWorkspaces(this, 'StartWorkspaces', this.__resources, input);
  }

  public stopWorkspaces(input: shapes.WorkSpacesStopWorkspacesRequest): WorkSpacesStopWorkspaces {
    return new WorkSpacesStopWorkspaces(this, 'StopWorkspaces', this.__resources, input);
  }

  public terminateWorkspaces(input: shapes.WorkSpacesTerminateWorkspacesRequest): WorkSpacesTerminateWorkspaces {
    return new WorkSpacesTerminateWorkspaces(this, 'TerminateWorkspaces', this.__resources, input);
  }

  public updateConnectionAliasPermission(input: shapes.WorkSpacesUpdateConnectionAliasPermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateConnectionAliasPermission',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.UpdateConnectionAliasPermission'),
        parameters: {
          AliasId: input.aliasId,
          ConnectionAliasPermission: {
            SharedAccountId: input.connectionAliasPermission.sharedAccountId,
            AllowAssociation: input.connectionAliasPermission.allowAssociation,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateConnectionAliasPermission', props);
  }

  public updateRulesOfIpGroup(input: shapes.WorkSpacesUpdateRulesOfIpGroupRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRulesOfIpGroup',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.UpdateRulesOfIpGroup'),
        parameters: {
          GroupId: input.groupId,
          UserRules: input.userRules,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRulesOfIpGroup', props);
  }

  public updateWorkspaceImagePermission(input: shapes.WorkSpacesUpdateWorkspaceImagePermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkspaceImagePermission',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.UpdateWorkspaceImagePermission'),
        parameters: {
          ImageId: input.imageId,
          AllowCopyImage: input.allowCopyImage,
          SharedAccountId: input.sharedAccountId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateWorkspaceImagePermission', props);
  }

}

export class WorkSpacesAssociateConnectionAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesAssociateConnectionAliasRequest) {
    super(scope, id);
  }

  public get connectionIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateConnectionAlias',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.AssociateConnectionAlias.ConnectionIdentifier'),
        outputPath: 'ConnectionIdentifier',
        parameters: {
          AliasId: this.input.aliasId,
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AssociateConnectionAlias.ConnectionIdentifier', props);
    return resource.getResponseField('ConnectionIdentifier') as unknown as string;
  }

}

export class WorkSpacesCopyWorkspaceImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesCopyWorkspaceImageRequest) {
    super(scope, id);
  }

  public get imageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyWorkspaceImage',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CopyWorkspaceImage.ImageId'),
        outputPath: 'ImageId',
        parameters: {
          Name: this.input.name,
          Description: this.input.description,
          SourceImageId: this.input.sourceImageId,
          SourceRegion: this.input.sourceRegion,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyWorkspaceImage.ImageId', props);
    return resource.getResponseField('ImageId') as unknown as string;
  }

}

export class WorkSpacesCreateConnectionAlias extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesCreateConnectionAliasRequest) {
    super(scope, id);
  }

  public get aliasId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createConnectionAlias',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateConnectionAlias.AliasId'),
        outputPath: 'AliasId',
        parameters: {
          ConnectionString: this.input.connectionString,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateConnectionAlias.AliasId', props);
    return resource.getResponseField('AliasId') as unknown as string;
  }

}

export class WorkSpacesCreateIpGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesCreateIpGroupRequest) {
    super(scope, id);
  }

  public get groupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createIpGroup',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateIpGroup.GroupId'),
        outputPath: 'GroupId',
        parameters: {
          GroupName: this.input.groupName,
          GroupDesc: this.input.groupDesc,
          UserRules: this.input.userRules,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateIpGroup.GroupId', props);
    return resource.getResponseField('GroupId') as unknown as string;
  }

}

export class WorkSpacesCreateWorkspaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesCreateWorkspacesRequest) {
    super(scope, id);
  }

  public get failedRequests(): shapes.WorkSpacesFailedCreateWorkspaceRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaces',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaces.FailedRequests'),
        outputPath: 'FailedRequests',
        parameters: {
          Workspaces: this.input.workspaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorkspaces.FailedRequests', props);
    return resource.getResponseField('FailedRequests') as unknown as shapes.WorkSpacesFailedCreateWorkspaceRequest[];
  }

  public get pendingRequests(): shapes.WorkSpacesWorkspace[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaces',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaces.PendingRequests'),
        outputPath: 'PendingRequests',
        parameters: {
          Workspaces: this.input.workspaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorkspaces.PendingRequests', props);
    return resource.getResponseField('PendingRequests') as unknown as shapes.WorkSpacesWorkspace[];
  }

}

export class WorkSpacesDescribeAccount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get dedicatedTenancySupport(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccount',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeAccount.DedicatedTenancySupport'),
        outputPath: 'DedicatedTenancySupport',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccount.DedicatedTenancySupport', props);
    return resource.getResponseField('DedicatedTenancySupport') as unknown as string;
  }

  public get dedicatedTenancyManagementCidrRange(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccount',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeAccount.DedicatedTenancyManagementCidrRange'),
        outputPath: 'DedicatedTenancyManagementCidrRange',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccount.DedicatedTenancyManagementCidrRange', props);
    return resource.getResponseField('DedicatedTenancyManagementCidrRange') as unknown as string;
  }

}

export class WorkSpacesDescribeAccountModifications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeAccountModificationsRequest) {
    super(scope, id);
  }

  public get accountModifications(): shapes.WorkSpacesAccountModification[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountModifications',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeAccountModifications.AccountModifications'),
        outputPath: 'AccountModifications',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountModifications.AccountModifications', props);
    return resource.getResponseField('AccountModifications') as unknown as shapes.WorkSpacesAccountModification[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAccountModifications',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeAccountModifications.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAccountModifications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesDescribeClientProperties extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeClientPropertiesRequest) {
    super(scope, id);
  }

  public get clientPropertiesList(): shapes.WorkSpacesClientPropertiesResult[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClientProperties',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeClientProperties.ClientPropertiesList'),
        outputPath: 'ClientPropertiesList',
        parameters: {
          ResourceIds: this.input.resourceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClientProperties.ClientPropertiesList', props);
    return resource.getResponseField('ClientPropertiesList') as unknown as shapes.WorkSpacesClientPropertiesResult[];
  }

}

export class WorkSpacesDescribeConnectionAliasPermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeConnectionAliasPermissionsRequest) {
    super(scope, id);
  }

  public get aliasId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectionAliasPermissions',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeConnectionAliasPermissions.AliasId'),
        outputPath: 'AliasId',
        parameters: {
          AliasId: this.input.aliasId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectionAliasPermissions.AliasId', props);
    return resource.getResponseField('AliasId') as unknown as string;
  }

  public get connectionAliasPermissions(): shapes.WorkSpacesConnectionAliasPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectionAliasPermissions',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeConnectionAliasPermissions.ConnectionAliasPermissions'),
        outputPath: 'ConnectionAliasPermissions',
        parameters: {
          AliasId: this.input.aliasId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectionAliasPermissions.ConnectionAliasPermissions', props);
    return resource.getResponseField('ConnectionAliasPermissions') as unknown as shapes.WorkSpacesConnectionAliasPermission[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectionAliasPermissions',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeConnectionAliasPermissions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AliasId: this.input.aliasId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectionAliasPermissions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesDescribeConnectionAliases extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeConnectionAliasesRequest) {
    super(scope, id);
  }

  public get connectionAliases(): shapes.WorkSpacesConnectionAlias[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectionAliases',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeConnectionAliases.ConnectionAliases'),
        outputPath: 'ConnectionAliases',
        parameters: {
          AliasIds: this.input.aliasIds,
          ResourceId: this.input.resourceId,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectionAliases.ConnectionAliases', props);
    return resource.getResponseField('ConnectionAliases') as unknown as shapes.WorkSpacesConnectionAlias[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeConnectionAliases',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeConnectionAliases.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          AliasIds: this.input.aliasIds,
          ResourceId: this.input.resourceId,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeConnectionAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesDescribeIpGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeIpGroupsRequest) {
    super(scope, id);
  }

  public get result(): shapes.WorkSpacesWorkspacesIpGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIpGroups',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeIpGroups.Result'),
        outputPath: 'Result',
        parameters: {
          GroupIds: this.input.groupIds,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIpGroups.Result', props);
    return resource.getResponseField('Result') as unknown as shapes.WorkSpacesWorkspacesIpGroup[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeIpGroups',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeIpGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          GroupIds: this.input.groupIds,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeIpGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesDescribeTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeTagsRequest) {
    super(scope, id);
  }

  public get tagList(): shapes.WorkSpacesTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTags',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeTags.TagList'),
        outputPath: 'TagList',
        parameters: {
          ResourceId: this.input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTags.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.WorkSpacesTag[];
  }

}

export class WorkSpacesDescribeWorkspaceBundles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeWorkspaceBundlesRequest) {
    super(scope, id);
  }

  public get bundles(): shapes.WorkSpacesWorkspaceBundle[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaceBundles',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaceBundles.Bundles'),
        outputPath: 'Bundles',
        parameters: {
          BundleIds: this.input.bundleIds,
          Owner: this.input.owner,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaceBundles.Bundles', props);
    return resource.getResponseField('Bundles') as unknown as shapes.WorkSpacesWorkspaceBundle[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaceBundles',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaceBundles.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          BundleIds: this.input.bundleIds,
          Owner: this.input.owner,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaceBundles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesDescribeWorkspaceDirectories extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeWorkspaceDirectoriesRequest) {
    super(scope, id);
  }

  public get directories(): shapes.WorkSpacesWorkspaceDirectory[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaceDirectories',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaceDirectories.Directories'),
        outputPath: 'Directories',
        parameters: {
          DirectoryIds: this.input.directoryIds,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaceDirectories.Directories', props);
    return resource.getResponseField('Directories') as unknown as shapes.WorkSpacesWorkspaceDirectory[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaceDirectories',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaceDirectories.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          DirectoryIds: this.input.directoryIds,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaceDirectories.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesDescribeWorkspaceImagePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeWorkspaceImagePermissionsRequest) {
    super(scope, id);
  }

  public get imageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaceImagePermissions',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaceImagePermissions.ImageId'),
        outputPath: 'ImageId',
        parameters: {
          ImageId: this.input.imageId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaceImagePermissions.ImageId', props);
    return resource.getResponseField('ImageId') as unknown as string;
  }

  public get imagePermissions(): shapes.WorkSpacesImagePermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaceImagePermissions',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaceImagePermissions.ImagePermissions'),
        outputPath: 'ImagePermissions',
        parameters: {
          ImageId: this.input.imageId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaceImagePermissions.ImagePermissions', props);
    return resource.getResponseField('ImagePermissions') as unknown as shapes.WorkSpacesImagePermission[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaceImagePermissions',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaceImagePermissions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ImageId: this.input.imageId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaceImagePermissions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesDescribeWorkspaceImages extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeWorkspaceImagesRequest) {
    super(scope, id);
  }

  public get images(): shapes.WorkSpacesWorkspaceImage[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaceImages',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaceImages.Images'),
        outputPath: 'Images',
        parameters: {
          ImageIds: this.input.imageIds,
          ImageType: this.input.imageType,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaceImages.Images', props);
    return resource.getResponseField('Images') as unknown as shapes.WorkSpacesWorkspaceImage[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaceImages',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaceImages.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ImageIds: this.input.imageIds,
          ImageType: this.input.imageType,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaceImages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesDescribeWorkspaceSnapshots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeWorkspaceSnapshotsRequest) {
    super(scope, id);
  }

  public get rebuildSnapshots(): shapes.WorkSpacesSnapshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaceSnapshots',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaceSnapshots.RebuildSnapshots'),
        outputPath: 'RebuildSnapshots',
        parameters: {
          WorkspaceId: this.input.workspaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaceSnapshots.RebuildSnapshots', props);
    return resource.getResponseField('RebuildSnapshots') as unknown as shapes.WorkSpacesSnapshot[];
  }

  public get restoreSnapshots(): shapes.WorkSpacesSnapshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaceSnapshots',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaceSnapshots.RestoreSnapshots'),
        outputPath: 'RestoreSnapshots',
        parameters: {
          WorkspaceId: this.input.workspaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaceSnapshots.RestoreSnapshots', props);
    return resource.getResponseField('RestoreSnapshots') as unknown as shapes.WorkSpacesSnapshot[];
  }

}

export class WorkSpacesDescribeWorkspaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeWorkspacesRequest) {
    super(scope, id);
  }

  public get workspaces(): shapes.WorkSpacesWorkspace[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaces',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaces.Workspaces'),
        outputPath: 'Workspaces',
        parameters: {
          WorkspaceIds: this.input.workspaceIds,
          DirectoryId: this.input.directoryId,
          UserName: this.input.userName,
          BundleId: this.input.bundleId,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaces.Workspaces', props);
    return resource.getResponseField('Workspaces') as unknown as shapes.WorkSpacesWorkspace[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspaces',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspaces.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkspaceIds: this.input.workspaceIds,
          DirectoryId: this.input.directoryId,
          UserName: this.input.userName,
          BundleId: this.input.bundleId,
          Limit: this.input.limit,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspaces.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesDescribeWorkspacesConnectionStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesDescribeWorkspacesConnectionStatusRequest) {
    super(scope, id);
  }

  public get workspacesConnectionStatus(): shapes.WorkSpacesWorkspaceConnectionStatus[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspacesConnectionStatus',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspacesConnectionStatus.WorkspacesConnectionStatus'),
        outputPath: 'WorkspacesConnectionStatus',
        parameters: {
          WorkspaceIds: this.input.workspaceIds,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspacesConnectionStatus.WorkspacesConnectionStatus', props);
    return resource.getResponseField('WorkspacesConnectionStatus') as unknown as shapes.WorkSpacesWorkspaceConnectionStatus[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorkspacesConnectionStatus',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DescribeWorkspacesConnectionStatus.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          WorkspaceIds: this.input.workspaceIds,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorkspacesConnectionStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesImportWorkspaceImage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesImportWorkspaceImageRequest) {
    super(scope, id);
  }

  public get imageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'importWorkspaceImage',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.ImportWorkspaceImage.ImageId'),
        outputPath: 'ImageId',
        parameters: {
          Ec2ImageId: this.input.ec2ImageId,
          IngestionProcess: this.input.ingestionProcess,
          ImageName: this.input.imageName,
          ImageDescription: this.input.imageDescription,
          Tags: this.input.tags,
          Applications: this.input.applications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ImportWorkspaceImage.ImageId', props);
    return resource.getResponseField('ImageId') as unknown as string;
  }

}

export class WorkSpacesListAvailableManagementCidrRanges extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesListAvailableManagementCidrRangesRequest) {
    super(scope, id);
  }

  public get managementCidrRanges(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAvailableManagementCidrRanges',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.ListAvailableManagementCidrRanges.ManagementCidrRanges'),
        outputPath: 'ManagementCidrRanges',
        parameters: {
          ManagementCidrRangeConstraint: this.input.managementCidrRangeConstraint,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAvailableManagementCidrRanges.ManagementCidrRanges', props);
    return resource.getResponseField('ManagementCidrRanges') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAvailableManagementCidrRanges',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.ListAvailableManagementCidrRanges.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ManagementCidrRangeConstraint: this.input.managementCidrRangeConstraint,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAvailableManagementCidrRanges.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesMigrateWorkspace extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesMigrateWorkspaceRequest) {
    super(scope, id);
  }

  public get sourceWorkspaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'migrateWorkspace',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.MigrateWorkspace.SourceWorkspaceId'),
        outputPath: 'SourceWorkspaceId',
        parameters: {
          SourceWorkspaceId: this.input.sourceWorkspaceId,
          BundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MigrateWorkspace.SourceWorkspaceId', props);
    return resource.getResponseField('SourceWorkspaceId') as unknown as string;
  }

  public get targetWorkspaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'migrateWorkspace',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.MigrateWorkspace.TargetWorkspaceId'),
        outputPath: 'TargetWorkspaceId',
        parameters: {
          SourceWorkspaceId: this.input.sourceWorkspaceId,
          BundleId: this.input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'MigrateWorkspace.TargetWorkspaceId', props);
    return resource.getResponseField('TargetWorkspaceId') as unknown as string;
  }

}

export class WorkSpacesRebootWorkspaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesRebootWorkspacesRequest) {
    super(scope, id);
  }

  public get failedRequests(): shapes.WorkSpacesFailedWorkspaceChangeRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootWorkspaces',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.RebootWorkspaces.FailedRequests'),
        outputPath: 'FailedRequests',
        parameters: {
          RebootWorkspaceRequests: this.input.rebootWorkspaceRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootWorkspaces.FailedRequests', props);
    return resource.getResponseField('FailedRequests') as unknown as shapes.WorkSpacesFailedWorkspaceChangeRequest[];
  }

}

export class WorkSpacesRebuildWorkspaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesRebuildWorkspacesRequest) {
    super(scope, id);
  }

  public get failedRequests(): shapes.WorkSpacesFailedWorkspaceChangeRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebuildWorkspaces',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.RebuildWorkspaces.FailedRequests'),
        outputPath: 'FailedRequests',
        parameters: {
          RebuildWorkspaceRequests: this.input.rebuildWorkspaceRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebuildWorkspaces.FailedRequests', props);
    return resource.getResponseField('FailedRequests') as unknown as shapes.WorkSpacesFailedWorkspaceChangeRequest[];
  }

}

export class WorkSpacesStartWorkspaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesStartWorkspacesRequest) {
    super(scope, id);
  }

  public get failedRequests(): shapes.WorkSpacesFailedWorkspaceChangeRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startWorkspaces',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.StartWorkspaces.FailedRequests'),
        outputPath: 'FailedRequests',
        parameters: {
          StartWorkspaceRequests: this.input.startWorkspaceRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartWorkspaces.FailedRequests', props);
    return resource.getResponseField('FailedRequests') as unknown as shapes.WorkSpacesFailedWorkspaceChangeRequest[];
  }

}

export class WorkSpacesStopWorkspaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesStopWorkspacesRequest) {
    super(scope, id);
  }

  public get failedRequests(): shapes.WorkSpacesFailedWorkspaceChangeRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopWorkspaces',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.StopWorkspaces.FailedRequests'),
        outputPath: 'FailedRequests',
        parameters: {
          StopWorkspaceRequests: this.input.stopWorkspaceRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopWorkspaces.FailedRequests', props);
    return resource.getResponseField('FailedRequests') as unknown as shapes.WorkSpacesFailedWorkspaceChangeRequest[];
  }

}

export class WorkSpacesTerminateWorkspaces extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.WorkSpacesTerminateWorkspacesRequest) {
    super(scope, id);
  }

  public get failedRequests(): shapes.WorkSpacesFailedWorkspaceChangeRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateWorkspaces',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.TerminateWorkspaces.FailedRequests'),
        outputPath: 'FailedRequests',
        parameters: {
          TerminateWorkspaceRequests: this.input.terminateWorkspaceRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TerminateWorkspaces.FailedRequests', props);
    return resource.getResponseField('FailedRequests') as unknown as shapes.WorkSpacesFailedWorkspaceChangeRequest[];
  }

}

