import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class WorkSpacesClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public associateConnectionAlias(input: shapes.WorkSpacesAssociateConnectionAliasRequest): WorkSpacesResponsesAssociateConnectionAlias {
    return new WorkSpacesResponsesAssociateConnectionAlias(this, this.__resources, input);
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

  public copyWorkspaceImage(input: shapes.WorkSpacesCopyWorkspaceImageRequest): WorkSpacesResponsesCopyWorkspaceImage {
    return new WorkSpacesResponsesCopyWorkspaceImage(this, this.__resources, input);
  }

  public createConnectionAlias(input: shapes.WorkSpacesCreateConnectionAliasRequest): WorkSpacesResponsesCreateConnectionAlias {
    return new WorkSpacesResponsesCreateConnectionAlias(this, this.__resources, input);
  }

  public createIpGroup(input: shapes.WorkSpacesCreateIpGroupRequest): WorkSpacesResponsesCreateIpGroup {
    return new WorkSpacesResponsesCreateIpGroup(this, this.__resources, input);
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

  public createWorkspaceBundle(input: shapes.WorkSpacesCreateWorkspaceBundleRequest): WorkSpacesResponsesCreateWorkspaceBundle {
    return new WorkSpacesResponsesCreateWorkspaceBundle(this, this.__resources, input);
  }

  public createWorkspaces(input: shapes.WorkSpacesCreateWorkspacesRequest): WorkSpacesResponsesCreateWorkspaces {
    return new WorkSpacesResponsesCreateWorkspaces(this, this.__resources, input);
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

  public deleteWorkspaceBundle(input: shapes.WorkSpacesDeleteWorkspaceBundleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.DeleteWorkspaceBundle'),
        parameters: {
          BundleId: input.bundleId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWorkspaceBundle', props);
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

  public describeAccount(): WorkSpacesResponsesDescribeAccount {
    return new WorkSpacesResponsesDescribeAccount(this, this.__resources);
  }

  public describeAccountModifications(input: shapes.WorkSpacesDescribeAccountModificationsRequest): WorkSpacesResponsesDescribeAccountModifications {
    return new WorkSpacesResponsesDescribeAccountModifications(this, this.__resources, input);
  }

  public describeClientProperties(input: shapes.WorkSpacesDescribeClientPropertiesRequest): WorkSpacesResponsesDescribeClientProperties {
    return new WorkSpacesResponsesDescribeClientProperties(this, this.__resources, input);
  }

  public describeConnectionAliasPermissions(input: shapes.WorkSpacesDescribeConnectionAliasPermissionsRequest): WorkSpacesResponsesDescribeConnectionAliasPermissions {
    return new WorkSpacesResponsesDescribeConnectionAliasPermissions(this, this.__resources, input);
  }

  public describeConnectionAliases(input: shapes.WorkSpacesDescribeConnectionAliasesRequest): WorkSpacesResponsesDescribeConnectionAliases {
    return new WorkSpacesResponsesDescribeConnectionAliases(this, this.__resources, input);
  }

  public describeIpGroups(input: shapes.WorkSpacesDescribeIpGroupsRequest): WorkSpacesResponsesDescribeIpGroups {
    return new WorkSpacesResponsesDescribeIpGroups(this, this.__resources, input);
  }

  public describeTags(input: shapes.WorkSpacesDescribeTagsRequest): WorkSpacesResponsesDescribeTags {
    return new WorkSpacesResponsesDescribeTags(this, this.__resources, input);
  }

  public describeWorkspaceBundles(input: shapes.WorkSpacesDescribeWorkspaceBundlesRequest): WorkSpacesResponsesDescribeWorkspaceBundles {
    return new WorkSpacesResponsesDescribeWorkspaceBundles(this, this.__resources, input);
  }

  public describeWorkspaceDirectories(input: shapes.WorkSpacesDescribeWorkspaceDirectoriesRequest): WorkSpacesResponsesDescribeWorkspaceDirectories {
    return new WorkSpacesResponsesDescribeWorkspaceDirectories(this, this.__resources, input);
  }

  public describeWorkspaceImagePermissions(input: shapes.WorkSpacesDescribeWorkspaceImagePermissionsRequest): WorkSpacesResponsesDescribeWorkspaceImagePermissions {
    return new WorkSpacesResponsesDescribeWorkspaceImagePermissions(this, this.__resources, input);
  }

  public describeWorkspaceImages(input: shapes.WorkSpacesDescribeWorkspaceImagesRequest): WorkSpacesResponsesDescribeWorkspaceImages {
    return new WorkSpacesResponsesDescribeWorkspaceImages(this, this.__resources, input);
  }

  public describeWorkspaceSnapshots(input: shapes.WorkSpacesDescribeWorkspaceSnapshotsRequest): WorkSpacesResponsesDescribeWorkspaceSnapshots {
    return new WorkSpacesResponsesDescribeWorkspaceSnapshots(this, this.__resources, input);
  }

  public describeWorkspaces(input: shapes.WorkSpacesDescribeWorkspacesRequest): WorkSpacesResponsesDescribeWorkspaces {
    return new WorkSpacesResponsesDescribeWorkspaces(this, this.__resources, input);
  }

  public describeWorkspacesConnectionStatus(input: shapes.WorkSpacesDescribeWorkspacesConnectionStatusRequest): WorkSpacesResponsesDescribeWorkspacesConnectionStatus {
    return new WorkSpacesResponsesDescribeWorkspacesConnectionStatus(this, this.__resources, input);
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

  public importWorkspaceImage(input: shapes.WorkSpacesImportWorkspaceImageRequest): WorkSpacesResponsesImportWorkspaceImage {
    return new WorkSpacesResponsesImportWorkspaceImage(this, this.__resources, input);
  }

  public listAvailableManagementCidrRanges(input: shapes.WorkSpacesListAvailableManagementCidrRangesRequest): WorkSpacesResponsesListAvailableManagementCidrRanges {
    return new WorkSpacesResponsesListAvailableManagementCidrRanges(this, this.__resources, input);
  }

  public migrateWorkspace(input: shapes.WorkSpacesMigrateWorkspaceRequest): WorkSpacesResponsesMigrateWorkspace {
    return new WorkSpacesResponsesMigrateWorkspace(this, this.__resources, input);
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
            DeviceTypeLinux: input.workspaceAccessProperties.deviceTypeLinux,
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

  public rebootWorkspaces(input: shapes.WorkSpacesRebootWorkspacesRequest): WorkSpacesResponsesRebootWorkspaces {
    return new WorkSpacesResponsesRebootWorkspaces(this, this.__resources, input);
  }

  public rebuildWorkspaces(input: shapes.WorkSpacesRebuildWorkspacesRequest): WorkSpacesResponsesRebuildWorkspaces {
    return new WorkSpacesResponsesRebuildWorkspaces(this, this.__resources, input);
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

  public startWorkspaces(input: shapes.WorkSpacesStartWorkspacesRequest): WorkSpacesResponsesStartWorkspaces {
    return new WorkSpacesResponsesStartWorkspaces(this, this.__resources, input);
  }

  public stopWorkspaces(input: shapes.WorkSpacesStopWorkspacesRequest): WorkSpacesResponsesStopWorkspaces {
    return new WorkSpacesResponsesStopWorkspaces(this, this.__resources, input);
  }

  public terminateWorkspaces(input: shapes.WorkSpacesTerminateWorkspacesRequest): WorkSpacesResponsesTerminateWorkspaces {
    return new WorkSpacesResponsesTerminateWorkspaces(this, this.__resources, input);
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

  public updateWorkspaceBundle(input: shapes.WorkSpacesUpdateWorkspaceBundleRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.UpdateWorkspaceBundle'),
        parameters: {
          BundleId: input.bundleId,
          ImageId: input.imageId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateWorkspaceBundle', props);
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

export class WorkSpacesResponsesAssociateConnectionAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesAssociateConnectionAliasRequest) {
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
          AliasId: this.__input.aliasId,
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AssociateConnectionAlias.ConnectionIdentifier', props);
    return resource.getResponseField('ConnectionIdentifier') as unknown as string;
  }

}

export class WorkSpacesResponsesCopyWorkspaceImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesCopyWorkspaceImageRequest) {
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
          Name: this.__input.name,
          Description: this.__input.description,
          SourceImageId: this.__input.sourceImageId,
          SourceRegion: this.__input.sourceRegion,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyWorkspaceImage.ImageId', props);
    return resource.getResponseField('ImageId') as unknown as string;
  }

}

export class WorkSpacesResponsesCreateConnectionAlias {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesCreateConnectionAliasRequest) {
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
          ConnectionString: this.__input.connectionString,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateConnectionAlias.AliasId', props);
    return resource.getResponseField('AliasId') as unknown as string;
  }

}

export class WorkSpacesResponsesCreateIpGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesCreateIpGroupRequest) {
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
          GroupName: this.__input.groupName,
          GroupDesc: this.__input.groupDesc,
          UserRules: this.__input.userRules,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateIpGroup.GroupId', props);
    return resource.getResponseField('GroupId') as unknown as string;
  }

}

export class WorkSpacesResponsesCreateWorkspaceBundle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesCreateWorkspaceBundleRequest) {
  }

  public get workspaceBundle(): WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundle {
    return new WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundle(this.__scope, this.__resources, this.__input);
  }

}

export class WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundle {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesCreateWorkspaceBundleRequest) {
  }

  public get bundleId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaceBundle.WorkspaceBundle.BundleId'),
        outputPath: 'WorkspaceBundle.BundleId',
        parameters: {
          BundleName: this.__input.bundleName,
          BundleDescription: this.__input.bundleDescription,
          ImageId: this.__input.imageId,
          ComputeType: {
            Name: this.__input.computeType.name,
          },
          UserStorage: {
            Capacity: this.__input.userStorage.capacity,
          },
          RootStorage: {
            Capacity: this.__input.rootStorage?.capacity,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaceBundle.WorkspaceBundle.BundleId', props);
    return resource.getResponseField('WorkspaceBundle.BundleId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaceBundle.WorkspaceBundle.Name'),
        outputPath: 'WorkspaceBundle.Name',
        parameters: {
          BundleName: this.__input.bundleName,
          BundleDescription: this.__input.bundleDescription,
          ImageId: this.__input.imageId,
          ComputeType: {
            Name: this.__input.computeType.name,
          },
          UserStorage: {
            Capacity: this.__input.userStorage.capacity,
          },
          RootStorage: {
            Capacity: this.__input.rootStorage?.capacity,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaceBundle.WorkspaceBundle.Name', props);
    return resource.getResponseField('WorkspaceBundle.Name') as unknown as string;
  }

  public get owner(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaceBundle.WorkspaceBundle.Owner'),
        outputPath: 'WorkspaceBundle.Owner',
        parameters: {
          BundleName: this.__input.bundleName,
          BundleDescription: this.__input.bundleDescription,
          ImageId: this.__input.imageId,
          ComputeType: {
            Name: this.__input.computeType.name,
          },
          UserStorage: {
            Capacity: this.__input.userStorage.capacity,
          },
          RootStorage: {
            Capacity: this.__input.rootStorage?.capacity,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaceBundle.WorkspaceBundle.Owner', props);
    return resource.getResponseField('WorkspaceBundle.Owner') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaceBundle.WorkspaceBundle.Description'),
        outputPath: 'WorkspaceBundle.Description',
        parameters: {
          BundleName: this.__input.bundleName,
          BundleDescription: this.__input.bundleDescription,
          ImageId: this.__input.imageId,
          ComputeType: {
            Name: this.__input.computeType.name,
          },
          UserStorage: {
            Capacity: this.__input.userStorage.capacity,
          },
          RootStorage: {
            Capacity: this.__input.rootStorage?.capacity,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaceBundle.WorkspaceBundle.Description', props);
    return resource.getResponseField('WorkspaceBundle.Description') as unknown as string;
  }

  public get imageId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaceBundle.WorkspaceBundle.ImageId'),
        outputPath: 'WorkspaceBundle.ImageId',
        parameters: {
          BundleName: this.__input.bundleName,
          BundleDescription: this.__input.bundleDescription,
          ImageId: this.__input.imageId,
          ComputeType: {
            Name: this.__input.computeType.name,
          },
          UserStorage: {
            Capacity: this.__input.userStorage.capacity,
          },
          RootStorage: {
            Capacity: this.__input.rootStorage?.capacity,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaceBundle.WorkspaceBundle.ImageId', props);
    return resource.getResponseField('WorkspaceBundle.ImageId') as unknown as string;
  }

  public get rootStorage(): WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundleRootStorage {
    return new WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundleRootStorage(this.__scope, this.__resources, this.__input);
  }

  public get userStorage(): WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundleUserStorage {
    return new WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundleUserStorage(this.__scope, this.__resources, this.__input);
  }

  public get computeType(): WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundleComputeType {
    return new WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundleComputeType(this.__scope, this.__resources, this.__input);
  }

  public get lastUpdatedTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaceBundle.WorkspaceBundle.LastUpdatedTime'),
        outputPath: 'WorkspaceBundle.LastUpdatedTime',
        parameters: {
          BundleName: this.__input.bundleName,
          BundleDescription: this.__input.bundleDescription,
          ImageId: this.__input.imageId,
          ComputeType: {
            Name: this.__input.computeType.name,
          },
          UserStorage: {
            Capacity: this.__input.userStorage.capacity,
          },
          RootStorage: {
            Capacity: this.__input.rootStorage?.capacity,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaceBundle.WorkspaceBundle.LastUpdatedTime', props);
    return resource.getResponseField('WorkspaceBundle.LastUpdatedTime') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaceBundle.WorkspaceBundle.CreationTime'),
        outputPath: 'WorkspaceBundle.CreationTime',
        parameters: {
          BundleName: this.__input.bundleName,
          BundleDescription: this.__input.bundleDescription,
          ImageId: this.__input.imageId,
          ComputeType: {
            Name: this.__input.computeType.name,
          },
          UserStorage: {
            Capacity: this.__input.userStorage.capacity,
          },
          RootStorage: {
            Capacity: this.__input.rootStorage?.capacity,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaceBundle.WorkspaceBundle.CreationTime', props);
    return resource.getResponseField('WorkspaceBundle.CreationTime') as unknown as string;
  }

}

export class WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundleRootStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesCreateWorkspaceBundleRequest) {
  }

  public get capacity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaceBundle.WorkspaceBundle.RootStorage.Capacity'),
        outputPath: 'WorkspaceBundle.RootStorage.Capacity',
        parameters: {
          BundleName: this.__input.bundleName,
          BundleDescription: this.__input.bundleDescription,
          ImageId: this.__input.imageId,
          ComputeType: {
            Name: this.__input.computeType.name,
          },
          UserStorage: {
            Capacity: this.__input.userStorage.capacity,
          },
          RootStorage: {
            Capacity: this.__input.rootStorage?.capacity,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaceBundle.WorkspaceBundle.RootStorage.Capacity', props);
    return resource.getResponseField('WorkspaceBundle.RootStorage.Capacity') as unknown as string;
  }

}

export class WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundleUserStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesCreateWorkspaceBundleRequest) {
  }

  public get capacity(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaceBundle.WorkspaceBundle.UserStorage.Capacity'),
        outputPath: 'WorkspaceBundle.UserStorage.Capacity',
        parameters: {
          BundleName: this.__input.bundleName,
          BundleDescription: this.__input.bundleDescription,
          ImageId: this.__input.imageId,
          ComputeType: {
            Name: this.__input.computeType.name,
          },
          UserStorage: {
            Capacity: this.__input.userStorage.capacity,
          },
          RootStorage: {
            Capacity: this.__input.rootStorage?.capacity,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaceBundle.WorkspaceBundle.UserStorage.Capacity', props);
    return resource.getResponseField('WorkspaceBundle.UserStorage.Capacity') as unknown as string;
  }

}

export class WorkSpacesResponsesCreateWorkspaceBundleWorkspaceBundleComputeType {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesCreateWorkspaceBundleRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorkspaceBundle',
        service: 'WorkSpaces',
        physicalResourceId: cr.PhysicalResourceId.of('WorkSpaces.CreateWorkspaceBundle.WorkspaceBundle.ComputeType.Name'),
        outputPath: 'WorkspaceBundle.ComputeType.Name',
        parameters: {
          BundleName: this.__input.bundleName,
          BundleDescription: this.__input.bundleDescription,
          ImageId: this.__input.imageId,
          ComputeType: {
            Name: this.__input.computeType.name,
          },
          UserStorage: {
            Capacity: this.__input.userStorage.capacity,
          },
          RootStorage: {
            Capacity: this.__input.rootStorage?.capacity,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaceBundle.WorkspaceBundle.ComputeType.Name', props);
    return resource.getResponseField('WorkspaceBundle.ComputeType.Name') as unknown as string;
  }

}

export class WorkSpacesResponsesCreateWorkspaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesCreateWorkspacesRequest) {
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
          Workspaces: this.__input.workspaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaces.FailedRequests', props);
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
          Workspaces: this.__input.workspaces,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorkspaces.PendingRequests', props);
    return resource.getResponseField('PendingRequests') as unknown as shapes.WorkSpacesWorkspace[];
  }

}

export class WorkSpacesResponsesDescribeAccount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccount.DedicatedTenancySupport', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccount.DedicatedTenancyManagementCidrRange', props);
    return resource.getResponseField('DedicatedTenancyManagementCidrRange') as unknown as string;
  }

}

export class WorkSpacesResponsesDescribeAccountModifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeAccountModificationsRequest) {
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountModifications.AccountModifications', props);
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
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAccountModifications.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesResponsesDescribeClientProperties {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeClientPropertiesRequest) {
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
          ResourceIds: this.__input.resourceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClientProperties.ClientPropertiesList', props);
    return resource.getResponseField('ClientPropertiesList') as unknown as shapes.WorkSpacesClientPropertiesResult[];
  }

}

export class WorkSpacesResponsesDescribeConnectionAliasPermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeConnectionAliasPermissionsRequest) {
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
          AliasId: this.__input.aliasId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectionAliasPermissions.AliasId', props);
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
          AliasId: this.__input.aliasId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectionAliasPermissions.ConnectionAliasPermissions', props);
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
          AliasId: this.__input.aliasId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectionAliasPermissions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesResponsesDescribeConnectionAliases {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeConnectionAliasesRequest) {
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
          AliasIds: this.__input.aliasIds,
          ResourceId: this.__input.resourceId,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectionAliases.ConnectionAliases', props);
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
          AliasIds: this.__input.aliasIds,
          ResourceId: this.__input.resourceId,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeConnectionAliases.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesResponsesDescribeIpGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeIpGroupsRequest) {
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
          GroupIds: this.__input.groupIds,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIpGroups.Result', props);
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
          GroupIds: this.__input.groupIds,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeIpGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesResponsesDescribeTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeTagsRequest) {
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
          ResourceId: this.__input.resourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTags.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.WorkSpacesTag[];
  }

}

export class WorkSpacesResponsesDescribeWorkspaceBundles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeWorkspaceBundlesRequest) {
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
          BundleIds: this.__input.bundleIds,
          Owner: this.__input.owner,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaceBundles.Bundles', props);
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
          BundleIds: this.__input.bundleIds,
          Owner: this.__input.owner,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaceBundles.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesResponsesDescribeWorkspaceDirectories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeWorkspaceDirectoriesRequest) {
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
          DirectoryIds: this.__input.directoryIds,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaceDirectories.Directories', props);
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
          DirectoryIds: this.__input.directoryIds,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaceDirectories.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesResponsesDescribeWorkspaceImagePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeWorkspaceImagePermissionsRequest) {
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
          ImageId: this.__input.imageId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaceImagePermissions.ImageId', props);
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
          ImageId: this.__input.imageId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaceImagePermissions.ImagePermissions', props);
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
          ImageId: this.__input.imageId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaceImagePermissions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesResponsesDescribeWorkspaceImages {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeWorkspaceImagesRequest) {
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
          ImageIds: this.__input.imageIds,
          ImageType: this.__input.imageType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaceImages.Images', props);
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
          ImageIds: this.__input.imageIds,
          ImageType: this.__input.imageType,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaceImages.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesResponsesDescribeWorkspaceSnapshots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeWorkspaceSnapshotsRequest) {
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
          WorkspaceId: this.__input.workspaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaceSnapshots.RebuildSnapshots', props);
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
          WorkspaceId: this.__input.workspaceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaceSnapshots.RestoreSnapshots', props);
    return resource.getResponseField('RestoreSnapshots') as unknown as shapes.WorkSpacesSnapshot[];
  }

}

export class WorkSpacesResponsesDescribeWorkspaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeWorkspacesRequest) {
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
          WorkspaceIds: this.__input.workspaceIds,
          DirectoryId: this.__input.directoryId,
          UserName: this.__input.userName,
          BundleId: this.__input.bundleId,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaces.Workspaces', props);
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
          WorkspaceIds: this.__input.workspaceIds,
          DirectoryId: this.__input.directoryId,
          UserName: this.__input.userName,
          BundleId: this.__input.bundleId,
          Limit: this.__input.limit,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspaces.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesResponsesDescribeWorkspacesConnectionStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesDescribeWorkspacesConnectionStatusRequest) {
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
          WorkspaceIds: this.__input.workspaceIds,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspacesConnectionStatus.WorkspacesConnectionStatus', props);
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
          WorkspaceIds: this.__input.workspaceIds,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorkspacesConnectionStatus.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesResponsesImportWorkspaceImage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesImportWorkspaceImageRequest) {
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
          Ec2ImageId: this.__input.ec2ImageId,
          IngestionProcess: this.__input.ingestionProcess,
          ImageName: this.__input.imageName,
          ImageDescription: this.__input.imageDescription,
          Tags: this.__input.tags,
          Applications: this.__input.applications,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ImportWorkspaceImage.ImageId', props);
    return resource.getResponseField('ImageId') as unknown as string;
  }

}

export class WorkSpacesResponsesListAvailableManagementCidrRanges {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesListAvailableManagementCidrRangesRequest) {
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
          ManagementCidrRangeConstraint: this.__input.managementCidrRangeConstraint,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAvailableManagementCidrRanges.ManagementCidrRanges', props);
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
          ManagementCidrRangeConstraint: this.__input.managementCidrRangeConstraint,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAvailableManagementCidrRanges.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class WorkSpacesResponsesMigrateWorkspace {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesMigrateWorkspaceRequest) {
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
          SourceWorkspaceId: this.__input.sourceWorkspaceId,
          BundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MigrateWorkspace.SourceWorkspaceId', props);
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
          SourceWorkspaceId: this.__input.sourceWorkspaceId,
          BundleId: this.__input.bundleId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'MigrateWorkspace.TargetWorkspaceId', props);
    return resource.getResponseField('TargetWorkspaceId') as unknown as string;
  }

}

export class WorkSpacesResponsesRebootWorkspaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesRebootWorkspacesRequest) {
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
          RebootWorkspaceRequests: this.__input.rebootWorkspaceRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootWorkspaces.FailedRequests', props);
    return resource.getResponseField('FailedRequests') as unknown as shapes.WorkSpacesFailedWorkspaceChangeRequest[];
  }

}

export class WorkSpacesResponsesRebuildWorkspaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesRebuildWorkspacesRequest) {
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
          RebuildWorkspaceRequests: this.__input.rebuildWorkspaceRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebuildWorkspaces.FailedRequests', props);
    return resource.getResponseField('FailedRequests') as unknown as shapes.WorkSpacesFailedWorkspaceChangeRequest[];
  }

}

export class WorkSpacesResponsesStartWorkspaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesStartWorkspacesRequest) {
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
          StartWorkspaceRequests: this.__input.startWorkspaceRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartWorkspaces.FailedRequests', props);
    return resource.getResponseField('FailedRequests') as unknown as shapes.WorkSpacesFailedWorkspaceChangeRequest[];
  }

}

export class WorkSpacesResponsesStopWorkspaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesStopWorkspacesRequest) {
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
          StopWorkspaceRequests: this.__input.stopWorkspaceRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopWorkspaces.FailedRequests', props);
    return resource.getResponseField('FailedRequests') as unknown as shapes.WorkSpacesFailedWorkspaceChangeRequest[];
  }

}

export class WorkSpacesResponsesTerminateWorkspaces {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.WorkSpacesTerminateWorkspacesRequest) {
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
          TerminateWorkspaceRequests: this.__input.terminateWorkspaceRequests,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TerminateWorkspaces.FailedRequests', props);
    return resource.getResponseField('FailedRequests') as unknown as shapes.WorkSpacesFailedWorkspaceChangeRequest[];
  }

}

