import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DocDbClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTagsToResource(input: shapes.DocDbAddTagsToResourceMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTagsToResource',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.AddTagsToResource'),
        parameters: {
          ResourceName: input.resourceName,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AddTagsToResource', props);
  }

  public applyPendingMaintenanceAction(input: shapes.DocDbApplyPendingMaintenanceActionMessage): DocDBResponsesApplyPendingMaintenanceAction {
    return new DocDBResponsesApplyPendingMaintenanceAction(this, this.__resources, input);
  }

  public copyDbClusterParameterGroup(input: shapes.DocDbCopyDbClusterParameterGroupMessage): DocDBResponsesCopyDbClusterParameterGroup {
    return new DocDBResponsesCopyDbClusterParameterGroup(this, this.__resources, input);
  }

  public copyDbClusterSnapshot(input: shapes.DocDbCopyDbClusterSnapshotMessage): DocDBResponsesCopyDbClusterSnapshot {
    return new DocDBResponsesCopyDbClusterSnapshot(this, this.__resources, input);
  }

  public createDbCluster(input: shapes.DocDbCreateDbClusterMessage): DocDBResponsesCreateDbCluster {
    return new DocDBResponsesCreateDbCluster(this, this.__resources, input);
  }

  public createDbClusterParameterGroup(input: shapes.DocDbCreateDbClusterParameterGroupMessage): DocDBResponsesCreateDbClusterParameterGroup {
    return new DocDBResponsesCreateDbClusterParameterGroup(this, this.__resources, input);
  }

  public createDbClusterSnapshot(input: shapes.DocDbCreateDbClusterSnapshotMessage): DocDBResponsesCreateDbClusterSnapshot {
    return new DocDBResponsesCreateDbClusterSnapshot(this, this.__resources, input);
  }

  public createDbInstance(input: shapes.DocDbCreateDbInstanceMessage): DocDBResponsesCreateDbInstance {
    return new DocDBResponsesCreateDbInstance(this, this.__resources, input);
  }

  public createDbSubnetGroup(input: shapes.DocDbCreateDbSubnetGroupMessage): DocDBResponsesCreateDbSubnetGroup {
    return new DocDBResponsesCreateDbSubnetGroup(this, this.__resources, input);
  }

  public deleteDbCluster(input: shapes.DocDbDeleteDbClusterMessage): DocDBResponsesDeleteDbCluster {
    return new DocDBResponsesDeleteDbCluster(this, this.__resources, input);
  }

  public deleteDbClusterParameterGroup(input: shapes.DocDbDeleteDbClusterParameterGroupMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterParameterGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterParameterGroup'),
        parameters: {
          DBClusterParameterGroupName: input.dbClusterParameterGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDBClusterParameterGroup', props);
  }

  public deleteDbClusterSnapshot(input: shapes.DocDbDeleteDbClusterSnapshotMessage): DocDBResponsesDeleteDbClusterSnapshot {
    return new DocDBResponsesDeleteDbClusterSnapshot(this, this.__resources, input);
  }

  public deleteDbInstance(input: shapes.DocDbDeleteDbInstanceMessage): DocDBResponsesDeleteDbInstance {
    return new DocDBResponsesDeleteDbInstance(this, this.__resources, input);
  }

  public deleteDbSubnetGroup(input: shapes.DocDbDeleteDbSubnetGroupMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBSubnetGroup'),
        parameters: {
          DBSubnetGroupName: input.dbSubnetGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDBSubnetGroup', props);
  }

  public describeCertificates(input: shapes.DocDbDescribeCertificatesMessage): DocDBResponsesDescribeCertificates {
    return new DocDBResponsesDescribeCertificates(this, this.__resources, input);
  }

  public describeDbClusterParameterGroups(input: shapes.DocDbDescribeDbClusterParameterGroupsMessage): DocDBResponsesDescribeDbClusterParameterGroups {
    return new DocDBResponsesDescribeDbClusterParameterGroups(this, this.__resources, input);
  }

  public describeDbClusterParameters(input: shapes.DocDbDescribeDbClusterParametersMessage): DocDBResponsesDescribeDbClusterParameters {
    return new DocDBResponsesDescribeDbClusterParameters(this, this.__resources, input);
  }

  public describeDbClusterSnapshotAttributes(input: shapes.DocDbDescribeDbClusterSnapshotAttributesMessage): DocDBResponsesDescribeDbClusterSnapshotAttributes {
    return new DocDBResponsesDescribeDbClusterSnapshotAttributes(this, this.__resources, input);
  }

  public describeDbClusterSnapshots(input: shapes.DocDbDescribeDbClusterSnapshotsMessage): DocDBResponsesDescribeDbClusterSnapshots {
    return new DocDBResponsesDescribeDbClusterSnapshots(this, this.__resources, input);
  }

  public describeDbClusters(input: shapes.DocDbDescribeDbClustersMessage): DocDBResponsesDescribeDbClusters {
    return new DocDBResponsesDescribeDbClusters(this, this.__resources, input);
  }

  public describeDbEngineVersions(input: shapes.DocDbDescribeDbEngineVersionsMessage): DocDBResponsesDescribeDbEngineVersions {
    return new DocDBResponsesDescribeDbEngineVersions(this, this.__resources, input);
  }

  public describeDbInstances(input: shapes.DocDbDescribeDbInstancesMessage): DocDBResponsesDescribeDbInstances {
    return new DocDBResponsesDescribeDbInstances(this, this.__resources, input);
  }

  public describeDbSubnetGroups(input: shapes.DocDbDescribeDbSubnetGroupsMessage): DocDBResponsesDescribeDbSubnetGroups {
    return new DocDBResponsesDescribeDbSubnetGroups(this, this.__resources, input);
  }

  public describeEngineDefaultClusterParameters(input: shapes.DocDbDescribeEngineDefaultClusterParametersMessage): DocDBResponsesDescribeEngineDefaultClusterParameters {
    return new DocDBResponsesDescribeEngineDefaultClusterParameters(this, this.__resources, input);
  }

  public describeEventCategories(input: shapes.DocDbDescribeEventCategoriesMessage): DocDBResponsesDescribeEventCategories {
    return new DocDBResponsesDescribeEventCategories(this, this.__resources, input);
  }

  public describeEvents(input: shapes.DocDbDescribeEventsMessage): DocDBResponsesDescribeEvents {
    return new DocDBResponsesDescribeEvents(this, this.__resources, input);
  }

  public describeOrderableDbInstanceOptions(input: shapes.DocDbDescribeOrderableDbInstanceOptionsMessage): DocDBResponsesDescribeOrderableDbInstanceOptions {
    return new DocDBResponsesDescribeOrderableDbInstanceOptions(this, this.__resources, input);
  }

  public describePendingMaintenanceActions(input: shapes.DocDbDescribePendingMaintenanceActionsMessage): DocDBResponsesDescribePendingMaintenanceActions {
    return new DocDBResponsesDescribePendingMaintenanceActions(this, this.__resources, input);
  }

  public failoverDbCluster(input: shapes.DocDbFailoverDbClusterMessage): DocDBResponsesFailoverDbCluster {
    return new DocDBResponsesFailoverDbCluster(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.DocDbListTagsForResourceMessage): DocDBResponsesListTagsForResource {
    return new DocDBResponsesListTagsForResource(this, this.__resources, input);
  }

  public modifyDbCluster(input: shapes.DocDbModifyDbClusterMessage): DocDBResponsesModifyDbCluster {
    return new DocDBResponsesModifyDbCluster(this, this.__resources, input);
  }

  public modifyDbClusterParameterGroup(input: shapes.DocDbModifyDbClusterParameterGroupMessage): DocDBResponsesModifyDbClusterParameterGroup {
    return new DocDBResponsesModifyDbClusterParameterGroup(this, this.__resources, input);
  }

  public modifyDbClusterSnapshotAttribute(input: shapes.DocDbModifyDbClusterSnapshotAttributeMessage): DocDBResponsesModifyDbClusterSnapshotAttribute {
    return new DocDBResponsesModifyDbClusterSnapshotAttribute(this, this.__resources, input);
  }

  public modifyDbInstance(input: shapes.DocDbModifyDbInstanceMessage): DocDBResponsesModifyDbInstance {
    return new DocDBResponsesModifyDbInstance(this, this.__resources, input);
  }

  public modifyDbSubnetGroup(input: shapes.DocDbModifyDbSubnetGroupMessage): DocDBResponsesModifyDbSubnetGroup {
    return new DocDBResponsesModifyDbSubnetGroup(this, this.__resources, input);
  }

  public rebootDbInstance(input: shapes.DocDbRebootDbInstanceMessage): DocDBResponsesRebootDbInstance {
    return new DocDBResponsesRebootDbInstance(this, this.__resources, input);
  }

  public removeTagsFromResource(input: shapes.DocDbRemoveTagsFromResourceMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTagsFromResource',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RemoveTagsFromResource'),
        parameters: {
          ResourceName: input.resourceName,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RemoveTagsFromResource', props);
  }

  public resetDbClusterParameterGroup(input: shapes.DocDbResetDbClusterParameterGroupMessage): DocDBResponsesResetDbClusterParameterGroup {
    return new DocDBResponsesResetDbClusterParameterGroup(this, this.__resources, input);
  }

  public restoreDbClusterFromSnapshot(input: shapes.DocDbRestoreDbClusterFromSnapshotMessage): DocDBResponsesRestoreDbClusterFromSnapshot {
    return new DocDBResponsesRestoreDbClusterFromSnapshot(this, this.__resources, input);
  }

  public restoreDbClusterToPointInTime(input: shapes.DocDbRestoreDbClusterToPointInTimeMessage): DocDBResponsesRestoreDbClusterToPointInTime {
    return new DocDBResponsesRestoreDbClusterToPointInTime(this, this.__resources, input);
  }

  public startDbCluster(input: shapes.DocDbStartDbClusterMessage): DocDBResponsesStartDbCluster {
    return new DocDBResponsesStartDbCluster(this, this.__resources, input);
  }

  public stopDbCluster(input: shapes.DocDbStopDbClusterMessage): DocDBResponsesStopDbCluster {
    return new DocDBResponsesStopDbCluster(this, this.__resources, input);
  }

}

export class DocDBResponsesApplyPendingMaintenanceAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbApplyPendingMaintenanceActionMessage) {
  }

  public get resourcePendingMaintenanceActions(): DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions {
    return new DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesApplyPendingMaintenanceActionResourcePendingMaintenanceActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbApplyPendingMaintenanceActionMessage) {
  }

  public get resourceIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'applyPendingMaintenanceAction',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ApplyPendingMaintenanceAction.ResourcePendingMaintenanceActions.ResourceIdentifier'),
        outputPath: 'ResourcePendingMaintenanceActions.ResourceIdentifier',
        parameters: {
          ResourceIdentifier: this.__input.resourceIdentifier,
          ApplyAction: this.__input.applyAction,
          OptInType: this.__input.optInType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ApplyPendingMaintenanceAction.ResourcePendingMaintenanceActions.ResourceIdentifier', props);
    return resource.getResponseField('ResourcePendingMaintenanceActions.ResourceIdentifier') as unknown as string;
  }

  public get pendingMaintenanceActionDetails(): shapes.DocDbPendingMaintenanceAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'applyPendingMaintenanceAction',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ApplyPendingMaintenanceAction.ResourcePendingMaintenanceActions.PendingMaintenanceActionDetails'),
        outputPath: 'ResourcePendingMaintenanceActions.PendingMaintenanceActionDetails',
        parameters: {
          ResourceIdentifier: this.__input.resourceIdentifier,
          ApplyAction: this.__input.applyAction,
          OptInType: this.__input.optInType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ApplyPendingMaintenanceAction.ResourcePendingMaintenanceActions.PendingMaintenanceActionDetails', props);
    return resource.getResponseField('ResourcePendingMaintenanceActions.PendingMaintenanceActionDetails') as unknown as shapes.DocDbPendingMaintenanceAction[];
  }

}

export class DocDBResponsesCopyDbClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCopyDbClusterParameterGroupMessage) {
  }

  public get dbClusterParameterGroup(): DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup {
    return new DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesCopyDbClusterParameterGroupDbClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCopyDbClusterParameterGroupMessage) {
  }

  public get dbClusterParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterParameterGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupName'),
        outputPath: 'DBClusterParameterGroup.DBClusterParameterGroupName',
        parameters: {
          SourceDBClusterParameterGroupIdentifier: this.__input.sourceDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupIdentifier: this.__input.targetDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupDescription: this.__input.targetDbClusterParameterGroupDescription,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupName', props);
    return resource.getResponseField('DBClusterParameterGroup.DBClusterParameterGroupName') as unknown as string;
  }

  public get dbParameterGroupFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterParameterGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterParameterGroup.DBClusterParameterGroup.DBParameterGroupFamily'),
        outputPath: 'DBClusterParameterGroup.DBParameterGroupFamily',
        parameters: {
          SourceDBClusterParameterGroupIdentifier: this.__input.sourceDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupIdentifier: this.__input.targetDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupDescription: this.__input.targetDbClusterParameterGroupDescription,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterParameterGroup.DBClusterParameterGroup.DBParameterGroupFamily', props);
    return resource.getResponseField('DBClusterParameterGroup.DBParameterGroupFamily') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterParameterGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterParameterGroup.DBClusterParameterGroup.Description'),
        outputPath: 'DBClusterParameterGroup.Description',
        parameters: {
          SourceDBClusterParameterGroupIdentifier: this.__input.sourceDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupIdentifier: this.__input.targetDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupDescription: this.__input.targetDbClusterParameterGroupDescription,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterParameterGroup.DBClusterParameterGroup.Description', props);
    return resource.getResponseField('DBClusterParameterGroup.Description') as unknown as string;
  }

  public get dbClusterParameterGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterParameterGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupArn'),
        outputPath: 'DBClusterParameterGroup.DBClusterParameterGroupArn',
        parameters: {
          SourceDBClusterParameterGroupIdentifier: this.__input.sourceDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupIdentifier: this.__input.targetDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupDescription: this.__input.targetDbClusterParameterGroupDescription,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupArn', props);
    return resource.getResponseField('DBClusterParameterGroup.DBClusterParameterGroupArn') as unknown as string;
  }

}

export class DocDBResponsesCopyDbClusterSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCopyDbClusterSnapshotMessage) {
  }

  public get dbClusterSnapshot(): DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot {
    return new DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesCopyDbClusterSnapshotDbClusterSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCopyDbClusterSnapshotMessage) {
  }

  public get availabilityZones(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.AvailabilityZones'),
        outputPath: 'DBClusterSnapshot.AvailabilityZones',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.AvailabilityZones', props);
    return resource.getResponseField('DBClusterSnapshot.AvailabilityZones') as unknown as string[];
  }

  public get dbClusterSnapshotIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotIdentifier'),
        outputPath: 'DBClusterSnapshot.DBClusterSnapshotIdentifier',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotIdentifier', props);
    return resource.getResponseField('DBClusterSnapshot.DBClusterSnapshotIdentifier') as unknown as string;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.DBClusterIdentifier'),
        outputPath: 'DBClusterSnapshot.DBClusterIdentifier',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.DBClusterIdentifier', props);
    return resource.getResponseField('DBClusterSnapshot.DBClusterIdentifier') as unknown as string;
  }

  public get snapshotCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.SnapshotCreateTime'),
        outputPath: 'DBClusterSnapshot.SnapshotCreateTime',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.SnapshotCreateTime', props);
    return resource.getResponseField('DBClusterSnapshot.SnapshotCreateTime') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.Engine'),
        outputPath: 'DBClusterSnapshot.Engine',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.Engine', props);
    return resource.getResponseField('DBClusterSnapshot.Engine') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.Status'),
        outputPath: 'DBClusterSnapshot.Status',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.Status', props);
    return resource.getResponseField('DBClusterSnapshot.Status') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.Port'),
        outputPath: 'DBClusterSnapshot.Port',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.Port', props);
    return resource.getResponseField('DBClusterSnapshot.Port') as unknown as number;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.VpcId'),
        outputPath: 'DBClusterSnapshot.VpcId',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.VpcId', props);
    return resource.getResponseField('DBClusterSnapshot.VpcId') as unknown as string;
  }

  public get clusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.ClusterCreateTime'),
        outputPath: 'DBClusterSnapshot.ClusterCreateTime',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.ClusterCreateTime', props);
    return resource.getResponseField('DBClusterSnapshot.ClusterCreateTime') as unknown as string;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.MasterUsername'),
        outputPath: 'DBClusterSnapshot.MasterUsername',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.MasterUsername', props);
    return resource.getResponseField('DBClusterSnapshot.MasterUsername') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.EngineVersion'),
        outputPath: 'DBClusterSnapshot.EngineVersion',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.EngineVersion', props);
    return resource.getResponseField('DBClusterSnapshot.EngineVersion') as unknown as string;
  }

  public get snapshotType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.SnapshotType'),
        outputPath: 'DBClusterSnapshot.SnapshotType',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.SnapshotType', props);
    return resource.getResponseField('DBClusterSnapshot.SnapshotType') as unknown as string;
  }

  public get percentProgress(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.PercentProgress'),
        outputPath: 'DBClusterSnapshot.PercentProgress',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.PercentProgress', props);
    return resource.getResponseField('DBClusterSnapshot.PercentProgress') as unknown as number;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.StorageEncrypted'),
        outputPath: 'DBClusterSnapshot.StorageEncrypted',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.StorageEncrypted', props);
    return resource.getResponseField('DBClusterSnapshot.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.KmsKeyId'),
        outputPath: 'DBClusterSnapshot.KmsKeyId',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.KmsKeyId', props);
    return resource.getResponseField('DBClusterSnapshot.KmsKeyId') as unknown as string;
  }

  public get dbClusterSnapshotArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotArn'),
        outputPath: 'DBClusterSnapshot.DBClusterSnapshotArn',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotArn', props);
    return resource.getResponseField('DBClusterSnapshot.DBClusterSnapshotArn') as unknown as string;
  }

  public get sourceDbClusterSnapshotArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copyDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CopyDBClusterSnapshot.DBClusterSnapshot.SourceDBClusterSnapshotArn'),
        outputPath: 'DBClusterSnapshot.SourceDBClusterSnapshotArn',
        parameters: {
          SourceDBClusterSnapshotIdentifier: this.__input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.__input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          CopyTags: this.__input.copyTags,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopyDBClusterSnapshot.DBClusterSnapshot.SourceDBClusterSnapshotArn', props);
    return resource.getResponseField('DBClusterSnapshot.SourceDBClusterSnapshotArn') as unknown as string;
  }

}

export class DocDBResponsesCreateDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbClusterMessage) {
  }

  public get dbCluster(): DocDBResponsesCreateDbClusterDbCluster {
    return new DocDBResponsesCreateDbClusterDbCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesCreateDbClusterDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbClusterMessage) {
  }

  public get availabilityZones(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.AvailabilityZones'),
        outputPath: 'DBCluster.AvailabilityZones',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.AvailabilityZones', props);
    return resource.getResponseField('DBCluster.AvailabilityZones') as unknown as string[];
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.BackupRetentionPeriod'),
        outputPath: 'DBCluster.BackupRetentionPeriod',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.BackupRetentionPeriod', props);
    return resource.getResponseField('DBCluster.BackupRetentionPeriod') as unknown as number;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.DBClusterIdentifier'),
        outputPath: 'DBCluster.DBClusterIdentifier',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.DBClusterIdentifier', props);
    return resource.getResponseField('DBCluster.DBClusterIdentifier') as unknown as string;
  }

  public get dbClusterParameterGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.DBClusterParameterGroup'),
        outputPath: 'DBCluster.DBClusterParameterGroup',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.DBClusterParameterGroup', props);
    return resource.getResponseField('DBCluster.DBClusterParameterGroup') as unknown as string;
  }

  public get dbSubnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.DBSubnetGroup'),
        outputPath: 'DBCluster.DBSubnetGroup',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.DBSubnetGroup', props);
    return resource.getResponseField('DBCluster.DBSubnetGroup') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.Status'),
        outputPath: 'DBCluster.Status',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.Status', props);
    return resource.getResponseField('DBCluster.Status') as unknown as string;
  }

  public get percentProgress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.PercentProgress'),
        outputPath: 'DBCluster.PercentProgress',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.PercentProgress', props);
    return resource.getResponseField('DBCluster.PercentProgress') as unknown as string;
  }

  public get earliestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.EarliestRestorableTime'),
        outputPath: 'DBCluster.EarliestRestorableTime',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.EarliestRestorableTime', props);
    return resource.getResponseField('DBCluster.EarliestRestorableTime') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.Endpoint'),
        outputPath: 'DBCluster.Endpoint',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.Endpoint', props);
    return resource.getResponseField('DBCluster.Endpoint') as unknown as string;
  }

  public get readerEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.ReaderEndpoint'),
        outputPath: 'DBCluster.ReaderEndpoint',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.ReaderEndpoint', props);
    return resource.getResponseField('DBCluster.ReaderEndpoint') as unknown as string;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.MultiAZ'),
        outputPath: 'DBCluster.MultiAZ',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.MultiAZ', props);
    return resource.getResponseField('DBCluster.MultiAZ') as unknown as boolean;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.Engine'),
        outputPath: 'DBCluster.Engine',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.Engine', props);
    return resource.getResponseField('DBCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.EngineVersion'),
        outputPath: 'DBCluster.EngineVersion',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.EngineVersion', props);
    return resource.getResponseField('DBCluster.EngineVersion') as unknown as string;
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.LatestRestorableTime'),
        outputPath: 'DBCluster.LatestRestorableTime',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.LatestRestorableTime', props);
    return resource.getResponseField('DBCluster.LatestRestorableTime') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.Port'),
        outputPath: 'DBCluster.Port',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.Port', props);
    return resource.getResponseField('DBCluster.Port') as unknown as number;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.MasterUsername'),
        outputPath: 'DBCluster.MasterUsername',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.MasterUsername', props);
    return resource.getResponseField('DBCluster.MasterUsername') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.PreferredBackupWindow'),
        outputPath: 'DBCluster.PreferredBackupWindow',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.PreferredBackupWindow', props);
    return resource.getResponseField('DBCluster.PreferredBackupWindow') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.PreferredMaintenanceWindow'),
        outputPath: 'DBCluster.PreferredMaintenanceWindow',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get dbClusterMembers(): shapes.DocDbdbClusterMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.DBClusterMembers'),
        outputPath: 'DBCluster.DBClusterMembers',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.DBClusterMembers', props);
    return resource.getResponseField('DBCluster.DBClusterMembers') as unknown as shapes.DocDbdbClusterMember[];
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.VpcSecurityGroups'),
        outputPath: 'DBCluster.VpcSecurityGroups',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.VpcSecurityGroups', props);
    return resource.getResponseField('DBCluster.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.HostedZoneId'),
        outputPath: 'DBCluster.HostedZoneId',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.HostedZoneId', props);
    return resource.getResponseField('DBCluster.HostedZoneId') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.StorageEncrypted'),
        outputPath: 'DBCluster.StorageEncrypted',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.StorageEncrypted', props);
    return resource.getResponseField('DBCluster.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.KmsKeyId'),
        outputPath: 'DBCluster.KmsKeyId',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.KmsKeyId', props);
    return resource.getResponseField('DBCluster.KmsKeyId') as unknown as string;
  }

  public get dbClusterResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.DbClusterResourceId'),
        outputPath: 'DBCluster.DbClusterResourceId',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.DbClusterResourceId', props);
    return resource.getResponseField('DBCluster.DbClusterResourceId') as unknown as string;
  }

  public get dbClusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.DBClusterArn'),
        outputPath: 'DBCluster.DBClusterArn',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.DBClusterArn', props);
    return resource.getResponseField('DBCluster.DBClusterArn') as unknown as string;
  }

  public get associatedRoles(): shapes.DocDbdbClusterRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.AssociatedRoles'),
        outputPath: 'DBCluster.AssociatedRoles',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.AssociatedRoles', props);
    return resource.getResponseField('DBCluster.AssociatedRoles') as unknown as shapes.DocDbdbClusterRole[];
  }

  public get clusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.ClusterCreateTime'),
        outputPath: 'DBCluster.ClusterCreateTime',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.ClusterCreateTime', props);
    return resource.getResponseField('DBCluster.ClusterCreateTime') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.EnabledCloudwatchLogsExports'),
        outputPath: 'DBCluster.EnabledCloudwatchLogsExports',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBCluster.EnabledCloudwatchLogsExports') as unknown as string[];
  }

  public get deletionProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBCluster.DBCluster.DeletionProtection'),
        outputPath: 'DBCluster.DeletionProtection',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          MasterUsername: this.__input.masterUsername,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Tags: this.__input.tags,
          StorageEncrypted: this.__input.storageEncrypted,
          KmsKeyId: this.__input.kmsKeyId,
          PreSignedUrl: this.__input.preSignedUrl,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBResponsesCreateDbClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbClusterParameterGroupMessage) {
  }

  public get dbClusterParameterGroup(): DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup {
    return new DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesCreateDbClusterParameterGroupDbClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbClusterParameterGroupMessage) {
  }

  public get dbClusterParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterParameterGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupName'),
        outputPath: 'DBClusterParameterGroup.DBClusterParameterGroupName',
        parameters: {
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          DBParameterGroupFamily: this.__input.dbParameterGroupFamily,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupName', props);
    return resource.getResponseField('DBClusterParameterGroup.DBClusterParameterGroupName') as unknown as string;
  }

  public get dbParameterGroupFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterParameterGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterParameterGroup.DBClusterParameterGroup.DBParameterGroupFamily'),
        outputPath: 'DBClusterParameterGroup.DBParameterGroupFamily',
        parameters: {
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          DBParameterGroupFamily: this.__input.dbParameterGroupFamily,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterParameterGroup.DBClusterParameterGroup.DBParameterGroupFamily', props);
    return resource.getResponseField('DBClusterParameterGroup.DBParameterGroupFamily') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterParameterGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterParameterGroup.DBClusterParameterGroup.Description'),
        outputPath: 'DBClusterParameterGroup.Description',
        parameters: {
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          DBParameterGroupFamily: this.__input.dbParameterGroupFamily,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterParameterGroup.DBClusterParameterGroup.Description', props);
    return resource.getResponseField('DBClusterParameterGroup.Description') as unknown as string;
  }

  public get dbClusterParameterGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterParameterGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupArn'),
        outputPath: 'DBClusterParameterGroup.DBClusterParameterGroupArn',
        parameters: {
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          DBParameterGroupFamily: this.__input.dbParameterGroupFamily,
          Description: this.__input.description,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupArn', props);
    return resource.getResponseField('DBClusterParameterGroup.DBClusterParameterGroupArn') as unknown as string;
  }

}

export class DocDBResponsesCreateDbClusterSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbClusterSnapshotMessage) {
  }

  public get dbClusterSnapshot(): DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot {
    return new DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesCreateDbClusterSnapshotDbClusterSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbClusterSnapshotMessage) {
  }

  public get availabilityZones(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.AvailabilityZones'),
        outputPath: 'DBClusterSnapshot.AvailabilityZones',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.AvailabilityZones', props);
    return resource.getResponseField('DBClusterSnapshot.AvailabilityZones') as unknown as string[];
  }

  public get dbClusterSnapshotIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotIdentifier'),
        outputPath: 'DBClusterSnapshot.DBClusterSnapshotIdentifier',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotIdentifier', props);
    return resource.getResponseField('DBClusterSnapshot.DBClusterSnapshotIdentifier') as unknown as string;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.DBClusterIdentifier'),
        outputPath: 'DBClusterSnapshot.DBClusterIdentifier',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.DBClusterIdentifier', props);
    return resource.getResponseField('DBClusterSnapshot.DBClusterIdentifier') as unknown as string;
  }

  public get snapshotCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.SnapshotCreateTime'),
        outputPath: 'DBClusterSnapshot.SnapshotCreateTime',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.SnapshotCreateTime', props);
    return resource.getResponseField('DBClusterSnapshot.SnapshotCreateTime') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.Engine'),
        outputPath: 'DBClusterSnapshot.Engine',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.Engine', props);
    return resource.getResponseField('DBClusterSnapshot.Engine') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.Status'),
        outputPath: 'DBClusterSnapshot.Status',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.Status', props);
    return resource.getResponseField('DBClusterSnapshot.Status') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.Port'),
        outputPath: 'DBClusterSnapshot.Port',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.Port', props);
    return resource.getResponseField('DBClusterSnapshot.Port') as unknown as number;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.VpcId'),
        outputPath: 'DBClusterSnapshot.VpcId',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.VpcId', props);
    return resource.getResponseField('DBClusterSnapshot.VpcId') as unknown as string;
  }

  public get clusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.ClusterCreateTime'),
        outputPath: 'DBClusterSnapshot.ClusterCreateTime',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.ClusterCreateTime', props);
    return resource.getResponseField('DBClusterSnapshot.ClusterCreateTime') as unknown as string;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.MasterUsername'),
        outputPath: 'DBClusterSnapshot.MasterUsername',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.MasterUsername', props);
    return resource.getResponseField('DBClusterSnapshot.MasterUsername') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.EngineVersion'),
        outputPath: 'DBClusterSnapshot.EngineVersion',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.EngineVersion', props);
    return resource.getResponseField('DBClusterSnapshot.EngineVersion') as unknown as string;
  }

  public get snapshotType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.SnapshotType'),
        outputPath: 'DBClusterSnapshot.SnapshotType',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.SnapshotType', props);
    return resource.getResponseField('DBClusterSnapshot.SnapshotType') as unknown as string;
  }

  public get percentProgress(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.PercentProgress'),
        outputPath: 'DBClusterSnapshot.PercentProgress',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.PercentProgress', props);
    return resource.getResponseField('DBClusterSnapshot.PercentProgress') as unknown as number;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.StorageEncrypted'),
        outputPath: 'DBClusterSnapshot.StorageEncrypted',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.StorageEncrypted', props);
    return resource.getResponseField('DBClusterSnapshot.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.KmsKeyId'),
        outputPath: 'DBClusterSnapshot.KmsKeyId',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.KmsKeyId', props);
    return resource.getResponseField('DBClusterSnapshot.KmsKeyId') as unknown as string;
  }

  public get dbClusterSnapshotArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotArn'),
        outputPath: 'DBClusterSnapshot.DBClusterSnapshotArn',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotArn', props);
    return resource.getResponseField('DBClusterSnapshot.DBClusterSnapshotArn') as unknown as string;
  }

  public get sourceDbClusterSnapshotArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBClusterSnapshot.DBClusterSnapshot.SourceDBClusterSnapshotArn'),
        outputPath: 'DBClusterSnapshot.SourceDBClusterSnapshotArn',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBClusterSnapshot.DBClusterSnapshot.SourceDBClusterSnapshotArn', props);
    return resource.getResponseField('DBClusterSnapshot.SourceDBClusterSnapshotArn') as unknown as string;
  }

}

export class DocDBResponsesCreateDbInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbInstanceMessage) {
  }

  public get dbInstance(): DocDBResponsesCreateDbInstanceDbInstance {
    return new DocDBResponsesCreateDbInstanceDbInstance(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesCreateDbInstanceDbInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbInstanceMessage) {
  }

  public get dbInstanceIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DBInstanceIdentifier'),
        outputPath: 'DBInstance.DBInstanceIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DBInstanceIdentifier', props);
    return resource.getResponseField('DBInstance.DBInstanceIdentifier') as unknown as string;
  }

  public get dbInstanceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DBInstanceClass'),
        outputPath: 'DBInstance.DBInstanceClass',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DBInstanceClass', props);
    return resource.getResponseField('DBInstance.DBInstanceClass') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.Engine'),
        outputPath: 'DBInstance.Engine',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.Engine', props);
    return resource.getResponseField('DBInstance.Engine') as unknown as string;
  }

  public get dbInstanceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DBInstanceStatus'),
        outputPath: 'DBInstance.DBInstanceStatus',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DBInstanceStatus', props);
    return resource.getResponseField('DBInstance.DBInstanceStatus') as unknown as string;
  }

  public get endpoint(): DocDBResponsesCreateDbInstanceDbInstanceEndpoint {
    return new DocDBResponsesCreateDbInstanceDbInstanceEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get instanceCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.InstanceCreateTime'),
        outputPath: 'DBInstance.InstanceCreateTime',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.InstanceCreateTime', props);
    return resource.getResponseField('DBInstance.InstanceCreateTime') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PreferredBackupWindow'),
        outputPath: 'DBInstance.PreferredBackupWindow',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PreferredBackupWindow', props);
    return resource.getResponseField('DBInstance.PreferredBackupWindow') as unknown as string;
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.BackupRetentionPeriod'),
        outputPath: 'DBInstance.BackupRetentionPeriod',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.BackupRetentionPeriod', props);
    return resource.getResponseField('DBInstance.BackupRetentionPeriod') as unknown as number;
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.VpcSecurityGroups'),
        outputPath: 'DBInstance.VpcSecurityGroups',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.VpcSecurityGroups', props);
    return resource.getResponseField('DBInstance.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.AvailabilityZone'),
        outputPath: 'DBInstance.AvailabilityZone',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.AvailabilityZone', props);
    return resource.getResponseField('DBInstance.AvailabilityZone') as unknown as string;
  }

  public get dbSubnetGroup(): DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup {
    return new DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup(this.__scope, this.__resources, this.__input);
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PreferredMaintenanceWindow'),
        outputPath: 'DBInstance.PreferredMaintenanceWindow',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBInstance.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues {
    return new DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues(this.__scope, this.__resources, this.__input);
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.LatestRestorableTime'),
        outputPath: 'DBInstance.LatestRestorableTime',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.LatestRestorableTime', props);
    return resource.getResponseField('DBInstance.LatestRestorableTime') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.EngineVersion'),
        outputPath: 'DBInstance.EngineVersion',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.EngineVersion', props);
    return resource.getResponseField('DBInstance.EngineVersion') as unknown as string;
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.AutoMinorVersionUpgrade'),
        outputPath: 'DBInstance.AutoMinorVersionUpgrade',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('DBInstance.AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get publiclyAccessible(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PubliclyAccessible'),
        outputPath: 'DBInstance.PubliclyAccessible',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PubliclyAccessible', props);
    return resource.getResponseField('DBInstance.PubliclyAccessible') as unknown as boolean;
  }

  public get statusInfos(): shapes.DocDbdbInstanceStatusInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.StatusInfos'),
        outputPath: 'DBInstance.StatusInfos',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.StatusInfos', props);
    return resource.getResponseField('DBInstance.StatusInfos') as unknown as shapes.DocDbdbInstanceStatusInfo[];
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DBClusterIdentifier'),
        outputPath: 'DBInstance.DBClusterIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DBClusterIdentifier', props);
    return resource.getResponseField('DBInstance.DBClusterIdentifier') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.StorageEncrypted'),
        outputPath: 'DBInstance.StorageEncrypted',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.StorageEncrypted', props);
    return resource.getResponseField('DBInstance.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.KmsKeyId'),
        outputPath: 'DBInstance.KmsKeyId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.KmsKeyId', props);
    return resource.getResponseField('DBInstance.KmsKeyId') as unknown as string;
  }

  public get dbiResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DbiResourceId'),
        outputPath: 'DBInstance.DbiResourceId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DbiResourceId', props);
    return resource.getResponseField('DBInstance.DbiResourceId') as unknown as string;
  }

  public get caCertificateIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.CACertificateIdentifier'),
        outputPath: 'DBInstance.CACertificateIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.CACertificateIdentifier', props);
    return resource.getResponseField('DBInstance.CACertificateIdentifier') as unknown as string;
  }

  public get promotionTier(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PromotionTier'),
        outputPath: 'DBInstance.PromotionTier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PromotionTier', props);
    return resource.getResponseField('DBInstance.PromotionTier') as unknown as number;
  }

  public get dbInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DBInstanceArn'),
        outputPath: 'DBInstance.DBInstanceArn',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DBInstanceArn', props);
    return resource.getResponseField('DBInstance.DBInstanceArn') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.EnabledCloudwatchLogsExports'),
        outputPath: 'DBInstance.EnabledCloudwatchLogsExports',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBInstance.EnabledCloudwatchLogsExports') as unknown as string[];
  }

}

export class DocDBResponsesCreateDbInstanceDbInstanceEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbInstanceMessage) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.Endpoint.Address'),
        outputPath: 'DBInstance.Endpoint.Address',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.Endpoint.Address', props);
    return resource.getResponseField('DBInstance.Endpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.Endpoint.Port'),
        outputPath: 'DBInstance.Endpoint.Port',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.Endpoint.Port', props);
    return resource.getResponseField('DBInstance.Endpoint.Port') as unknown as number;
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.Endpoint.HostedZoneId'),
        outputPath: 'DBInstance.Endpoint.HostedZoneId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.Endpoint.HostedZoneId', props);
    return resource.getResponseField('DBInstance.Endpoint.HostedZoneId') as unknown as string;
  }

}

export class DocDBResponsesCreateDbInstanceDbInstanceDbSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbInstanceMessage) {
  }

  public get dbSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupName',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupName') as unknown as string;
  }

  public get dbSubnetGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupDescription',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupDescription') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DBSubnetGroup.VpcId'),
        outputPath: 'DBInstance.DBSubnetGroup.VpcId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DBSubnetGroup.VpcId', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.VpcId') as unknown as string;
  }

  public get subnetGroupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus'),
        outputPath: 'DBInstance.DBSubnetGroup.SubnetGroupStatus',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.SubnetGroupStatus') as unknown as string;
  }

  public get subnets(): shapes.DocDbSubnet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DBSubnetGroup.Subnets'),
        outputPath: 'DBInstance.DBSubnetGroup.Subnets',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DBSubnetGroup.Subnets', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.Subnets') as unknown as shapes.DocDbSubnet[];
  }

  public get dbSubnetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupArn',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbInstanceMessage) {
  }

  public get dbInstanceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass'),
        outputPath: 'DBInstance.PendingModifiedValues.DBInstanceClass',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBInstanceClass') as unknown as string;
  }

  public get allocatedStorage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage'),
        outputPath: 'DBInstance.PendingModifiedValues.AllocatedStorage',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.AllocatedStorage') as unknown as number;
  }

  public get masterUserPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword'),
        outputPath: 'DBInstance.PendingModifiedValues.MasterUserPassword',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.MasterUserPassword') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.Port'),
        outputPath: 'DBInstance.PendingModifiedValues.Port',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.Port', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.Port') as unknown as number;
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod'),
        outputPath: 'DBInstance.PendingModifiedValues.BackupRetentionPeriod',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.BackupRetentionPeriod') as unknown as number;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.MultiAZ'),
        outputPath: 'DBInstance.PendingModifiedValues.MultiAZ',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.MultiAZ', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.MultiAZ') as unknown as boolean;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.EngineVersion'),
        outputPath: 'DBInstance.PendingModifiedValues.EngineVersion',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.EngineVersion', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.EngineVersion') as unknown as string;
  }

  public get licenseModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.LicenseModel'),
        outputPath: 'DBInstance.PendingModifiedValues.LicenseModel',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.LicenseModel', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.LicenseModel') as unknown as string;
  }

  public get iops(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.Iops'),
        outputPath: 'DBInstance.PendingModifiedValues.Iops',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.Iops', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.Iops') as unknown as number;
  }

  public get dbInstanceIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier'),
        outputPath: 'DBInstance.PendingModifiedValues.DBInstanceIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBInstanceIdentifier') as unknown as string;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.StorageType'),
        outputPath: 'DBInstance.PendingModifiedValues.StorageType',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.StorageType', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.StorageType') as unknown as string;
  }

  public get caCertificateIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier'),
        outputPath: 'DBInstance.PendingModifiedValues.CACertificateIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.CACertificateIdentifier') as unknown as string;
  }

  public get dbSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName'),
        outputPath: 'DBInstance.PendingModifiedValues.DBSubnetGroupName',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBSubnetGroupName') as unknown as string;
  }

  public get pendingCloudwatchLogsExports(): DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {
    return new DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbInstanceMessage) {
  }

  public get logTypesToEnable(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable'),
        outputPath: 'DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable') as unknown as string[];
  }

  public get logTypesToDisable(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable'),
        outputPath: 'DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          Engine: this.__input.engine,
          AvailabilityZone: this.__input.availabilityZone,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          Tags: this.__input.tags,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable') as unknown as string[];
  }

}

export class DocDBResponsesCreateDbSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbSubnetGroupMessage) {
  }

  public get dbSubnetGroup(): DocDBResponsesCreateDbSubnetGroupDbSubnetGroup {
    return new DocDBResponsesCreateDbSubnetGroupDbSubnetGroup(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesCreateDbSubnetGroupDbSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbCreateDbSubnetGroupMessage) {
  }

  public get dbSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBSubnetGroup.DBSubnetGroup.DBSubnetGroupName'),
        outputPath: 'DBSubnetGroup.DBSubnetGroupName',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBSubnetGroup.DBSubnetGroup.DBSubnetGroupName', props);
    return resource.getResponseField('DBSubnetGroup.DBSubnetGroupName') as unknown as string;
  }

  public get dbSubnetGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBSubnetGroup.DBSubnetGroup.DBSubnetGroupDescription'),
        outputPath: 'DBSubnetGroup.DBSubnetGroupDescription',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBSubnetGroup.DBSubnetGroup.DBSubnetGroupDescription', props);
    return resource.getResponseField('DBSubnetGroup.DBSubnetGroupDescription') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBSubnetGroup.DBSubnetGroup.VpcId'),
        outputPath: 'DBSubnetGroup.VpcId',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBSubnetGroup.DBSubnetGroup.VpcId', props);
    return resource.getResponseField('DBSubnetGroup.VpcId') as unknown as string;
  }

  public get subnetGroupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBSubnetGroup.DBSubnetGroup.SubnetGroupStatus'),
        outputPath: 'DBSubnetGroup.SubnetGroupStatus',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBSubnetGroup.DBSubnetGroup.SubnetGroupStatus', props);
    return resource.getResponseField('DBSubnetGroup.SubnetGroupStatus') as unknown as string;
  }

  public get subnets(): shapes.DocDbSubnet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBSubnetGroup.DBSubnetGroup.Subnets'),
        outputPath: 'DBSubnetGroup.Subnets',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBSubnetGroup.DBSubnetGroup.Subnets', props);
    return resource.getResponseField('DBSubnetGroup.Subnets') as unknown as shapes.DocDbSubnet[];
  }

  public get dbSubnetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.CreateDBSubnetGroup.DBSubnetGroup.DBSubnetGroupArn'),
        outputPath: 'DBSubnetGroup.DBSubnetGroupArn',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDBSubnetGroup.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBResponsesDeleteDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDeleteDbClusterMessage) {
  }

  public get dbCluster(): DocDBResponsesDeleteDbClusterDbCluster {
    return new DocDBResponsesDeleteDbClusterDbCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesDeleteDbClusterDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDeleteDbClusterMessage) {
  }

  public get availabilityZones(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.AvailabilityZones'),
        outputPath: 'DBCluster.AvailabilityZones',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.AvailabilityZones', props);
    return resource.getResponseField('DBCluster.AvailabilityZones') as unknown as string[];
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.BackupRetentionPeriod'),
        outputPath: 'DBCluster.BackupRetentionPeriod',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.BackupRetentionPeriod', props);
    return resource.getResponseField('DBCluster.BackupRetentionPeriod') as unknown as number;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.DBClusterIdentifier'),
        outputPath: 'DBCluster.DBClusterIdentifier',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.DBClusterIdentifier', props);
    return resource.getResponseField('DBCluster.DBClusterIdentifier') as unknown as string;
  }

  public get dbClusterParameterGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.DBClusterParameterGroup'),
        outputPath: 'DBCluster.DBClusterParameterGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.DBClusterParameterGroup', props);
    return resource.getResponseField('DBCluster.DBClusterParameterGroup') as unknown as string;
  }

  public get dbSubnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.DBSubnetGroup'),
        outputPath: 'DBCluster.DBSubnetGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.DBSubnetGroup', props);
    return resource.getResponseField('DBCluster.DBSubnetGroup') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.Status'),
        outputPath: 'DBCluster.Status',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.Status', props);
    return resource.getResponseField('DBCluster.Status') as unknown as string;
  }

  public get percentProgress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.PercentProgress'),
        outputPath: 'DBCluster.PercentProgress',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.PercentProgress', props);
    return resource.getResponseField('DBCluster.PercentProgress') as unknown as string;
  }

  public get earliestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.EarliestRestorableTime'),
        outputPath: 'DBCluster.EarliestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.EarliestRestorableTime', props);
    return resource.getResponseField('DBCluster.EarliestRestorableTime') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.Endpoint'),
        outputPath: 'DBCluster.Endpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.Endpoint', props);
    return resource.getResponseField('DBCluster.Endpoint') as unknown as string;
  }

  public get readerEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.ReaderEndpoint'),
        outputPath: 'DBCluster.ReaderEndpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.ReaderEndpoint', props);
    return resource.getResponseField('DBCluster.ReaderEndpoint') as unknown as string;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.MultiAZ'),
        outputPath: 'DBCluster.MultiAZ',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.MultiAZ', props);
    return resource.getResponseField('DBCluster.MultiAZ') as unknown as boolean;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.Engine'),
        outputPath: 'DBCluster.Engine',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.Engine', props);
    return resource.getResponseField('DBCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.EngineVersion'),
        outputPath: 'DBCluster.EngineVersion',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.EngineVersion', props);
    return resource.getResponseField('DBCluster.EngineVersion') as unknown as string;
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.LatestRestorableTime'),
        outputPath: 'DBCluster.LatestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.LatestRestorableTime', props);
    return resource.getResponseField('DBCluster.LatestRestorableTime') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.Port'),
        outputPath: 'DBCluster.Port',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.Port', props);
    return resource.getResponseField('DBCluster.Port') as unknown as number;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.MasterUsername'),
        outputPath: 'DBCluster.MasterUsername',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.MasterUsername', props);
    return resource.getResponseField('DBCluster.MasterUsername') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.PreferredBackupWindow'),
        outputPath: 'DBCluster.PreferredBackupWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.PreferredBackupWindow', props);
    return resource.getResponseField('DBCluster.PreferredBackupWindow') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.PreferredMaintenanceWindow'),
        outputPath: 'DBCluster.PreferredMaintenanceWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get dbClusterMembers(): shapes.DocDbdbClusterMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.DBClusterMembers'),
        outputPath: 'DBCluster.DBClusterMembers',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.DBClusterMembers', props);
    return resource.getResponseField('DBCluster.DBClusterMembers') as unknown as shapes.DocDbdbClusterMember[];
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.VpcSecurityGroups'),
        outputPath: 'DBCluster.VpcSecurityGroups',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.VpcSecurityGroups', props);
    return resource.getResponseField('DBCluster.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.HostedZoneId'),
        outputPath: 'DBCluster.HostedZoneId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.HostedZoneId', props);
    return resource.getResponseField('DBCluster.HostedZoneId') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.StorageEncrypted'),
        outputPath: 'DBCluster.StorageEncrypted',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.StorageEncrypted', props);
    return resource.getResponseField('DBCluster.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.KmsKeyId'),
        outputPath: 'DBCluster.KmsKeyId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.KmsKeyId', props);
    return resource.getResponseField('DBCluster.KmsKeyId') as unknown as string;
  }

  public get dbClusterResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.DbClusterResourceId'),
        outputPath: 'DBCluster.DbClusterResourceId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.DbClusterResourceId', props);
    return resource.getResponseField('DBCluster.DbClusterResourceId') as unknown as string;
  }

  public get dbClusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.DBClusterArn'),
        outputPath: 'DBCluster.DBClusterArn',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.DBClusterArn', props);
    return resource.getResponseField('DBCluster.DBClusterArn') as unknown as string;
  }

  public get associatedRoles(): shapes.DocDbdbClusterRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.AssociatedRoles'),
        outputPath: 'DBCluster.AssociatedRoles',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.AssociatedRoles', props);
    return resource.getResponseField('DBCluster.AssociatedRoles') as unknown as shapes.DocDbdbClusterRole[];
  }

  public get clusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.ClusterCreateTime'),
        outputPath: 'DBCluster.ClusterCreateTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.ClusterCreateTime', props);
    return resource.getResponseField('DBCluster.ClusterCreateTime') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.EnabledCloudwatchLogsExports'),
        outputPath: 'DBCluster.EnabledCloudwatchLogsExports',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBCluster.EnabledCloudwatchLogsExports') as unknown as string[];
  }

  public get deletionProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBCluster.DBCluster.DeletionProtection'),
        outputPath: 'DBCluster.DeletionProtection',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SkipFinalSnapshot: this.__input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.__input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBResponsesDeleteDbClusterSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDeleteDbClusterSnapshotMessage) {
  }

  public get dbClusterSnapshot(): DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot {
    return new DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesDeleteDbClusterSnapshotDbClusterSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDeleteDbClusterSnapshotMessage) {
  }

  public get availabilityZones(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.AvailabilityZones'),
        outputPath: 'DBClusterSnapshot.AvailabilityZones',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.AvailabilityZones', props);
    return resource.getResponseField('DBClusterSnapshot.AvailabilityZones') as unknown as string[];
  }

  public get dbClusterSnapshotIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotIdentifier'),
        outputPath: 'DBClusterSnapshot.DBClusterSnapshotIdentifier',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotIdentifier', props);
    return resource.getResponseField('DBClusterSnapshot.DBClusterSnapshotIdentifier') as unknown as string;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.DBClusterIdentifier'),
        outputPath: 'DBClusterSnapshot.DBClusterIdentifier',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.DBClusterIdentifier', props);
    return resource.getResponseField('DBClusterSnapshot.DBClusterIdentifier') as unknown as string;
  }

  public get snapshotCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.SnapshotCreateTime'),
        outputPath: 'DBClusterSnapshot.SnapshotCreateTime',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.SnapshotCreateTime', props);
    return resource.getResponseField('DBClusterSnapshot.SnapshotCreateTime') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.Engine'),
        outputPath: 'DBClusterSnapshot.Engine',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.Engine', props);
    return resource.getResponseField('DBClusterSnapshot.Engine') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.Status'),
        outputPath: 'DBClusterSnapshot.Status',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.Status', props);
    return resource.getResponseField('DBClusterSnapshot.Status') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.Port'),
        outputPath: 'DBClusterSnapshot.Port',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.Port', props);
    return resource.getResponseField('DBClusterSnapshot.Port') as unknown as number;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.VpcId'),
        outputPath: 'DBClusterSnapshot.VpcId',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.VpcId', props);
    return resource.getResponseField('DBClusterSnapshot.VpcId') as unknown as string;
  }

  public get clusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.ClusterCreateTime'),
        outputPath: 'DBClusterSnapshot.ClusterCreateTime',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.ClusterCreateTime', props);
    return resource.getResponseField('DBClusterSnapshot.ClusterCreateTime') as unknown as string;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.MasterUsername'),
        outputPath: 'DBClusterSnapshot.MasterUsername',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.MasterUsername', props);
    return resource.getResponseField('DBClusterSnapshot.MasterUsername') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.EngineVersion'),
        outputPath: 'DBClusterSnapshot.EngineVersion',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.EngineVersion', props);
    return resource.getResponseField('DBClusterSnapshot.EngineVersion') as unknown as string;
  }

  public get snapshotType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.SnapshotType'),
        outputPath: 'DBClusterSnapshot.SnapshotType',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.SnapshotType', props);
    return resource.getResponseField('DBClusterSnapshot.SnapshotType') as unknown as string;
  }

  public get percentProgress(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.PercentProgress'),
        outputPath: 'DBClusterSnapshot.PercentProgress',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.PercentProgress', props);
    return resource.getResponseField('DBClusterSnapshot.PercentProgress') as unknown as number;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.StorageEncrypted'),
        outputPath: 'DBClusterSnapshot.StorageEncrypted',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.StorageEncrypted', props);
    return resource.getResponseField('DBClusterSnapshot.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.KmsKeyId'),
        outputPath: 'DBClusterSnapshot.KmsKeyId',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.KmsKeyId', props);
    return resource.getResponseField('DBClusterSnapshot.KmsKeyId') as unknown as string;
  }

  public get dbClusterSnapshotArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotArn'),
        outputPath: 'DBClusterSnapshot.DBClusterSnapshotArn',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotArn', props);
    return resource.getResponseField('DBClusterSnapshot.DBClusterSnapshotArn') as unknown as string;
  }

  public get sourceDbClusterSnapshotArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbClusterSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBClusterSnapshot.DBClusterSnapshot.SourceDBClusterSnapshotArn'),
        outputPath: 'DBClusterSnapshot.SourceDBClusterSnapshotArn',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBClusterSnapshot.DBClusterSnapshot.SourceDBClusterSnapshotArn', props);
    return resource.getResponseField('DBClusterSnapshot.SourceDBClusterSnapshotArn') as unknown as string;
  }

}

export class DocDBResponsesDeleteDbInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDeleteDbInstanceMessage) {
  }

  public get dbInstance(): DocDBResponsesDeleteDbInstanceDbInstance {
    return new DocDBResponsesDeleteDbInstanceDbInstance(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesDeleteDbInstanceDbInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDeleteDbInstanceMessage) {
  }

  public get dbInstanceIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DBInstanceIdentifier'),
        outputPath: 'DBInstance.DBInstanceIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DBInstanceIdentifier', props);
    return resource.getResponseField('DBInstance.DBInstanceIdentifier') as unknown as string;
  }

  public get dbInstanceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DBInstanceClass'),
        outputPath: 'DBInstance.DBInstanceClass',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DBInstanceClass', props);
    return resource.getResponseField('DBInstance.DBInstanceClass') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.Engine'),
        outputPath: 'DBInstance.Engine',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.Engine', props);
    return resource.getResponseField('DBInstance.Engine') as unknown as string;
  }

  public get dbInstanceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DBInstanceStatus'),
        outputPath: 'DBInstance.DBInstanceStatus',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DBInstanceStatus', props);
    return resource.getResponseField('DBInstance.DBInstanceStatus') as unknown as string;
  }

  public get endpoint(): DocDBResponsesDeleteDbInstanceDbInstanceEndpoint {
    return new DocDBResponsesDeleteDbInstanceDbInstanceEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get instanceCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.InstanceCreateTime'),
        outputPath: 'DBInstance.InstanceCreateTime',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.InstanceCreateTime', props);
    return resource.getResponseField('DBInstance.InstanceCreateTime') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PreferredBackupWindow'),
        outputPath: 'DBInstance.PreferredBackupWindow',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PreferredBackupWindow', props);
    return resource.getResponseField('DBInstance.PreferredBackupWindow') as unknown as string;
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.BackupRetentionPeriod'),
        outputPath: 'DBInstance.BackupRetentionPeriod',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.BackupRetentionPeriod', props);
    return resource.getResponseField('DBInstance.BackupRetentionPeriod') as unknown as number;
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.VpcSecurityGroups'),
        outputPath: 'DBInstance.VpcSecurityGroups',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.VpcSecurityGroups', props);
    return resource.getResponseField('DBInstance.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.AvailabilityZone'),
        outputPath: 'DBInstance.AvailabilityZone',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.AvailabilityZone', props);
    return resource.getResponseField('DBInstance.AvailabilityZone') as unknown as string;
  }

  public get dbSubnetGroup(): DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup {
    return new DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup(this.__scope, this.__resources, this.__input);
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PreferredMaintenanceWindow'),
        outputPath: 'DBInstance.PreferredMaintenanceWindow',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBInstance.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues {
    return new DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues(this.__scope, this.__resources, this.__input);
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.LatestRestorableTime'),
        outputPath: 'DBInstance.LatestRestorableTime',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.LatestRestorableTime', props);
    return resource.getResponseField('DBInstance.LatestRestorableTime') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.EngineVersion'),
        outputPath: 'DBInstance.EngineVersion',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.EngineVersion', props);
    return resource.getResponseField('DBInstance.EngineVersion') as unknown as string;
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.AutoMinorVersionUpgrade'),
        outputPath: 'DBInstance.AutoMinorVersionUpgrade',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('DBInstance.AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get publiclyAccessible(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PubliclyAccessible'),
        outputPath: 'DBInstance.PubliclyAccessible',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PubliclyAccessible', props);
    return resource.getResponseField('DBInstance.PubliclyAccessible') as unknown as boolean;
  }

  public get statusInfos(): shapes.DocDbdbInstanceStatusInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.StatusInfos'),
        outputPath: 'DBInstance.StatusInfos',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.StatusInfos', props);
    return resource.getResponseField('DBInstance.StatusInfos') as unknown as shapes.DocDbdbInstanceStatusInfo[];
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DBClusterIdentifier'),
        outputPath: 'DBInstance.DBClusterIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DBClusterIdentifier', props);
    return resource.getResponseField('DBInstance.DBClusterIdentifier') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.StorageEncrypted'),
        outputPath: 'DBInstance.StorageEncrypted',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.StorageEncrypted', props);
    return resource.getResponseField('DBInstance.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.KmsKeyId'),
        outputPath: 'DBInstance.KmsKeyId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.KmsKeyId', props);
    return resource.getResponseField('DBInstance.KmsKeyId') as unknown as string;
  }

  public get dbiResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DbiResourceId'),
        outputPath: 'DBInstance.DbiResourceId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DbiResourceId', props);
    return resource.getResponseField('DBInstance.DbiResourceId') as unknown as string;
  }

  public get caCertificateIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.CACertificateIdentifier'),
        outputPath: 'DBInstance.CACertificateIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.CACertificateIdentifier', props);
    return resource.getResponseField('DBInstance.CACertificateIdentifier') as unknown as string;
  }

  public get promotionTier(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PromotionTier'),
        outputPath: 'DBInstance.PromotionTier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PromotionTier', props);
    return resource.getResponseField('DBInstance.PromotionTier') as unknown as number;
  }

  public get dbInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DBInstanceArn'),
        outputPath: 'DBInstance.DBInstanceArn',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DBInstanceArn', props);
    return resource.getResponseField('DBInstance.DBInstanceArn') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.EnabledCloudwatchLogsExports'),
        outputPath: 'DBInstance.EnabledCloudwatchLogsExports',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBInstance.EnabledCloudwatchLogsExports') as unknown as string[];
  }

}

export class DocDBResponsesDeleteDbInstanceDbInstanceEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDeleteDbInstanceMessage) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.Endpoint.Address'),
        outputPath: 'DBInstance.Endpoint.Address',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.Endpoint.Address', props);
    return resource.getResponseField('DBInstance.Endpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.Endpoint.Port'),
        outputPath: 'DBInstance.Endpoint.Port',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.Endpoint.Port', props);
    return resource.getResponseField('DBInstance.Endpoint.Port') as unknown as number;
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.Endpoint.HostedZoneId'),
        outputPath: 'DBInstance.Endpoint.HostedZoneId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.Endpoint.HostedZoneId', props);
    return resource.getResponseField('DBInstance.Endpoint.HostedZoneId') as unknown as string;
  }

}

export class DocDBResponsesDeleteDbInstanceDbInstanceDbSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDeleteDbInstanceMessage) {
  }

  public get dbSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupName',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupName') as unknown as string;
  }

  public get dbSubnetGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupDescription',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupDescription') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DBSubnetGroup.VpcId'),
        outputPath: 'DBInstance.DBSubnetGroup.VpcId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DBSubnetGroup.VpcId', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.VpcId') as unknown as string;
  }

  public get subnetGroupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus'),
        outputPath: 'DBInstance.DBSubnetGroup.SubnetGroupStatus',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.SubnetGroupStatus') as unknown as string;
  }

  public get subnets(): shapes.DocDbSubnet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DBSubnetGroup.Subnets'),
        outputPath: 'DBInstance.DBSubnetGroup.Subnets',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DBSubnetGroup.Subnets', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.Subnets') as unknown as shapes.DocDbSubnet[];
  }

  public get dbSubnetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupArn',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDeleteDbInstanceMessage) {
  }

  public get dbInstanceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass'),
        outputPath: 'DBInstance.PendingModifiedValues.DBInstanceClass',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBInstanceClass') as unknown as string;
  }

  public get allocatedStorage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage'),
        outputPath: 'DBInstance.PendingModifiedValues.AllocatedStorage',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.AllocatedStorage') as unknown as number;
  }

  public get masterUserPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword'),
        outputPath: 'DBInstance.PendingModifiedValues.MasterUserPassword',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.MasterUserPassword') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.Port'),
        outputPath: 'DBInstance.PendingModifiedValues.Port',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.Port', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.Port') as unknown as number;
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod'),
        outputPath: 'DBInstance.PendingModifiedValues.BackupRetentionPeriod',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.BackupRetentionPeriod') as unknown as number;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.MultiAZ'),
        outputPath: 'DBInstance.PendingModifiedValues.MultiAZ',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.MultiAZ', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.MultiAZ') as unknown as boolean;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.EngineVersion'),
        outputPath: 'DBInstance.PendingModifiedValues.EngineVersion',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.EngineVersion', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.EngineVersion') as unknown as string;
  }

  public get licenseModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.LicenseModel'),
        outputPath: 'DBInstance.PendingModifiedValues.LicenseModel',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.LicenseModel', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.LicenseModel') as unknown as string;
  }

  public get iops(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.Iops'),
        outputPath: 'DBInstance.PendingModifiedValues.Iops',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.Iops', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.Iops') as unknown as number;
  }

  public get dbInstanceIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier'),
        outputPath: 'DBInstance.PendingModifiedValues.DBInstanceIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBInstanceIdentifier') as unknown as string;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.StorageType'),
        outputPath: 'DBInstance.PendingModifiedValues.StorageType',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.StorageType', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.StorageType') as unknown as string;
  }

  public get caCertificateIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier'),
        outputPath: 'DBInstance.PendingModifiedValues.CACertificateIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.CACertificateIdentifier') as unknown as string;
  }

  public get dbSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName'),
        outputPath: 'DBInstance.PendingModifiedValues.DBSubnetGroupName',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBSubnetGroupName') as unknown as string;
  }

  public get pendingCloudwatchLogsExports(): DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {
    return new DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDeleteDbInstanceMessage) {
  }

  public get logTypesToEnable(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable'),
        outputPath: 'DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable') as unknown as string[];
  }

  public get logTypesToDisable(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DeleteDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable'),
        outputPath: 'DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable') as unknown as string[];
  }

}

export class DocDBResponsesDescribeCertificates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeCertificatesMessage) {
  }

  public get certificates(): shapes.DocDbCertificate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificates',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeCertificates.Certificates'),
        outputPath: 'Certificates',
        parameters: {
          CertificateIdentifier: this.__input.certificateIdentifier,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificates.Certificates', props);
    return resource.getResponseField('Certificates') as unknown as shapes.DocDbCertificate[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCertificates',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeCertificates.Marker'),
        outputPath: 'Marker',
        parameters: {
          CertificateIdentifier: this.__input.certificateIdentifier,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCertificates.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class DocDBResponsesDescribeDbClusterParameterGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeDbClusterParameterGroupsMessage) {
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbClusterParameterGroups',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBClusterParameterGroups.Marker'),
        outputPath: 'Marker',
        parameters: {
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBClusterParameterGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get dbClusterParameterGroups(): shapes.DocDbdbClusterParameterGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbClusterParameterGroups',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBClusterParameterGroups.DBClusterParameterGroups'),
        outputPath: 'DBClusterParameterGroups',
        parameters: {
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBClusterParameterGroups.DBClusterParameterGroups', props);
    return resource.getResponseField('DBClusterParameterGroups') as unknown as shapes.DocDbdbClusterParameterGroup[];
  }

}

export class DocDBResponsesDescribeDbClusterParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeDbClusterParametersMessage) {
  }

  public get parameters(): shapes.DocDbParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbClusterParameters',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBClusterParameters.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          Source: this.__input.source,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBClusterParameters.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.DocDbParameter[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbClusterParameters',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBClusterParameters.Marker'),
        outputPath: 'Marker',
        parameters: {
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          Source: this.__input.source,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBClusterParameters.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class DocDBResponsesDescribeDbClusterSnapshotAttributes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeDbClusterSnapshotAttributesMessage) {
  }

  public get dbClusterSnapshotAttributesResult(): DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult {
    return new DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeDbClusterSnapshotAttributesMessage) {
  }

  public get dbClusterSnapshotIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbClusterSnapshotAttributes',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBClusterSnapshotAttributes.DBClusterSnapshotAttributesResult.DBClusterSnapshotIdentifier'),
        outputPath: 'DBClusterSnapshotAttributesResult.DBClusterSnapshotIdentifier',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBClusterSnapshotAttributes.DBClusterSnapshotAttributesResult.DBClusterSnapshotIdentifier', props);
    return resource.getResponseField('DBClusterSnapshotAttributesResult.DBClusterSnapshotIdentifier') as unknown as string;
  }

  public get dbClusterSnapshotAttributes(): shapes.DocDbdbClusterSnapshotAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbClusterSnapshotAttributes',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBClusterSnapshotAttributes.DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes'),
        outputPath: 'DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBClusterSnapshotAttributes.DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes', props);
    return resource.getResponseField('DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes') as unknown as shapes.DocDbdbClusterSnapshotAttribute[];
  }

}

export class DocDBResponsesDescribeDbClusterSnapshots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeDbClusterSnapshotsMessage) {
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbClusterSnapshots',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBClusterSnapshots.Marker'),
        outputPath: 'Marker',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          SnapshotType: this.__input.snapshotType,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
          IncludeShared: this.__input.includeShared,
          IncludePublic: this.__input.includePublic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBClusterSnapshots.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get dbClusterSnapshots(): shapes.DocDbdbClusterSnapshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbClusterSnapshots',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBClusterSnapshots.DBClusterSnapshots'),
        outputPath: 'DBClusterSnapshots',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          SnapshotType: this.__input.snapshotType,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
          IncludeShared: this.__input.includeShared,
          IncludePublic: this.__input.includePublic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBClusterSnapshots.DBClusterSnapshots', props);
    return resource.getResponseField('DBClusterSnapshots') as unknown as shapes.DocDbdbClusterSnapshot[];
  }

}

export class DocDBResponsesDescribeDbClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeDbClustersMessage) {
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbClusters',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBClusters.Marker'),
        outputPath: 'Marker',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBClusters.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get dbClusters(): shapes.DocDbdbCluster[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbClusters',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBClusters.DBClusters'),
        outputPath: 'DBClusters',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBClusters.DBClusters', props);
    return resource.getResponseField('DBClusters') as unknown as shapes.DocDbdbCluster[];
  }

}

export class DocDBResponsesDescribeDbEngineVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeDbEngineVersionsMessage) {
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbEngineVersions',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBEngineVersions.Marker'),
        outputPath: 'Marker',
        parameters: {
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          DBParameterGroupFamily: this.__input.dbParameterGroupFamily,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
          DefaultOnly: this.__input.defaultOnly,
          ListSupportedCharacterSets: this.__input.listSupportedCharacterSets,
          ListSupportedTimezones: this.__input.listSupportedTimezones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBEngineVersions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get dbEngineVersions(): shapes.DocDbdbEngineVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbEngineVersions',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBEngineVersions.DBEngineVersions'),
        outputPath: 'DBEngineVersions',
        parameters: {
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          DBParameterGroupFamily: this.__input.dbParameterGroupFamily,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
          DefaultOnly: this.__input.defaultOnly,
          ListSupportedCharacterSets: this.__input.listSupportedCharacterSets,
          ListSupportedTimezones: this.__input.listSupportedTimezones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBEngineVersions.DBEngineVersions', props);
    return resource.getResponseField('DBEngineVersions') as unknown as shapes.DocDbdbEngineVersion[];
  }

}

export class DocDBResponsesDescribeDbInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeDbInstancesMessage) {
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbInstances',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBInstances.Marker'),
        outputPath: 'Marker',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBInstances.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get dbInstances(): shapes.DocDbdbInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbInstances',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBInstances.DBInstances'),
        outputPath: 'DBInstances',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBInstances.DBInstances', props);
    return resource.getResponseField('DBInstances') as unknown as shapes.DocDbdbInstance[];
  }

}

export class DocDBResponsesDescribeDbSubnetGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeDbSubnetGroupsMessage) {
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbSubnetGroups',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBSubnetGroups.Marker'),
        outputPath: 'Marker',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBSubnetGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get dbSubnetGroups(): shapes.DocDbdbSubnetGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDbSubnetGroups',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeDBSubnetGroups.DBSubnetGroups'),
        outputPath: 'DBSubnetGroups',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDBSubnetGroups.DBSubnetGroups', props);
    return resource.getResponseField('DBSubnetGroups') as unknown as shapes.DocDbdbSubnetGroup[];
  }

}

export class DocDBResponsesDescribeEngineDefaultClusterParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeEngineDefaultClusterParametersMessage) {
  }

  public get engineDefaults(): DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults {
    return new DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesDescribeEngineDefaultClusterParametersEngineDefaults {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeEngineDefaultClusterParametersMessage) {
  }

  public get dbParameterGroupFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngineDefaultClusterParameters',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeEngineDefaultClusterParameters.EngineDefaults.DBParameterGroupFamily'),
        outputPath: 'EngineDefaults.DBParameterGroupFamily',
        parameters: {
          DBParameterGroupFamily: this.__input.dbParameterGroupFamily,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngineDefaultClusterParameters.EngineDefaults.DBParameterGroupFamily', props);
    return resource.getResponseField('EngineDefaults.DBParameterGroupFamily') as unknown as string;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngineDefaultClusterParameters',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeEngineDefaultClusterParameters.EngineDefaults.Marker'),
        outputPath: 'EngineDefaults.Marker',
        parameters: {
          DBParameterGroupFamily: this.__input.dbParameterGroupFamily,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngineDefaultClusterParameters.EngineDefaults.Marker', props);
    return resource.getResponseField('EngineDefaults.Marker') as unknown as string;
  }

  public get parameters(): shapes.DocDbParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngineDefaultClusterParameters',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeEngineDefaultClusterParameters.EngineDefaults.Parameters'),
        outputPath: 'EngineDefaults.Parameters',
        parameters: {
          DBParameterGroupFamily: this.__input.dbParameterGroupFamily,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngineDefaultClusterParameters.EngineDefaults.Parameters', props);
    return resource.getResponseField('EngineDefaults.Parameters') as unknown as shapes.DocDbParameter[];
  }

}

export class DocDBResponsesDescribeEventCategories {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeEventCategoriesMessage) {
  }

  public get eventCategoriesMapList(): shapes.DocDbEventCategoriesMap[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEventCategories',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeEventCategories.EventCategoriesMapList'),
        outputPath: 'EventCategoriesMapList',
        parameters: {
          SourceType: this.__input.sourceType,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEventCategories.EventCategoriesMapList', props);
    return resource.getResponseField('EventCategoriesMapList') as unknown as shapes.DocDbEventCategoriesMap[];
  }

}

export class DocDBResponsesDescribeEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeEventsMessage) {
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeEvents.Marker'),
        outputPath: 'Marker',
        parameters: {
          SourceIdentifier: this.__input.sourceIdentifier,
          SourceType: this.__input.sourceType,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Duration: this.__input.duration,
          EventCategories: this.__input.eventCategories,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get events(): shapes.DocDbEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeEvents.Events'),
        outputPath: 'Events',
        parameters: {
          SourceIdentifier: this.__input.sourceIdentifier,
          SourceType: this.__input.sourceType,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Duration: this.__input.duration,
          EventCategories: this.__input.eventCategories,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.Events', props);
    return resource.getResponseField('Events') as unknown as shapes.DocDbEvent[];
  }

}

export class DocDBResponsesDescribeOrderableDbInstanceOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribeOrderableDbInstanceOptionsMessage) {
  }

  public get orderableDbInstanceOptions(): shapes.DocDbOrderableDbInstanceOption[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrderableDbInstanceOptions',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeOrderableDBInstanceOptions.OrderableDBInstanceOptions'),
        outputPath: 'OrderableDBInstanceOptions',
        parameters: {
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          DBInstanceClass: this.__input.dbInstanceClass,
          LicenseModel: this.__input.licenseModel,
          Vpc: this.__input.vpc,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrderableDBInstanceOptions.OrderableDBInstanceOptions', props);
    return resource.getResponseField('OrderableDBInstanceOptions') as unknown as shapes.DocDbOrderableDbInstanceOption[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOrderableDbInstanceOptions',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribeOrderableDBInstanceOptions.Marker'),
        outputPath: 'Marker',
        parameters: {
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          DBInstanceClass: this.__input.dbInstanceClass,
          LicenseModel: this.__input.licenseModel,
          Vpc: this.__input.vpc,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOrderableDBInstanceOptions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class DocDBResponsesDescribePendingMaintenanceActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbDescribePendingMaintenanceActionsMessage) {
  }

  public get pendingMaintenanceActions(): shapes.DocDbResourcePendingMaintenanceActions[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePendingMaintenanceActions',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribePendingMaintenanceActions.PendingMaintenanceActions'),
        outputPath: 'PendingMaintenanceActions',
        parameters: {
          ResourceIdentifier: this.__input.resourceIdentifier,
          Filters: this.__input.filters,
          Marker: this.__input.marker,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePendingMaintenanceActions.PendingMaintenanceActions', props);
    return resource.getResponseField('PendingMaintenanceActions') as unknown as shapes.DocDbResourcePendingMaintenanceActions[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePendingMaintenanceActions',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.DescribePendingMaintenanceActions.Marker'),
        outputPath: 'Marker',
        parameters: {
          ResourceIdentifier: this.__input.resourceIdentifier,
          Filters: this.__input.filters,
          Marker: this.__input.marker,
          MaxRecords: this.__input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePendingMaintenanceActions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class DocDBResponsesFailoverDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbFailoverDbClusterMessage) {
  }

  public get dbCluster(): DocDBResponsesFailoverDbClusterDbCluster {
    return new DocDBResponsesFailoverDbClusterDbCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesFailoverDbClusterDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbFailoverDbClusterMessage) {
  }

  public get availabilityZones(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.AvailabilityZones'),
        outputPath: 'DBCluster.AvailabilityZones',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.AvailabilityZones', props);
    return resource.getResponseField('DBCluster.AvailabilityZones') as unknown as string[];
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.BackupRetentionPeriod'),
        outputPath: 'DBCluster.BackupRetentionPeriod',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.BackupRetentionPeriod', props);
    return resource.getResponseField('DBCluster.BackupRetentionPeriod') as unknown as number;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.DBClusterIdentifier'),
        outputPath: 'DBCluster.DBClusterIdentifier',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.DBClusterIdentifier', props);
    return resource.getResponseField('DBCluster.DBClusterIdentifier') as unknown as string;
  }

  public get dbClusterParameterGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.DBClusterParameterGroup'),
        outputPath: 'DBCluster.DBClusterParameterGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.DBClusterParameterGroup', props);
    return resource.getResponseField('DBCluster.DBClusterParameterGroup') as unknown as string;
  }

  public get dbSubnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.DBSubnetGroup'),
        outputPath: 'DBCluster.DBSubnetGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.DBSubnetGroup', props);
    return resource.getResponseField('DBCluster.DBSubnetGroup') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.Status'),
        outputPath: 'DBCluster.Status',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.Status', props);
    return resource.getResponseField('DBCluster.Status') as unknown as string;
  }

  public get percentProgress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.PercentProgress'),
        outputPath: 'DBCluster.PercentProgress',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.PercentProgress', props);
    return resource.getResponseField('DBCluster.PercentProgress') as unknown as string;
  }

  public get earliestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.EarliestRestorableTime'),
        outputPath: 'DBCluster.EarliestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.EarliestRestorableTime', props);
    return resource.getResponseField('DBCluster.EarliestRestorableTime') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.Endpoint'),
        outputPath: 'DBCluster.Endpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.Endpoint', props);
    return resource.getResponseField('DBCluster.Endpoint') as unknown as string;
  }

  public get readerEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.ReaderEndpoint'),
        outputPath: 'DBCluster.ReaderEndpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.ReaderEndpoint', props);
    return resource.getResponseField('DBCluster.ReaderEndpoint') as unknown as string;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.MultiAZ'),
        outputPath: 'DBCluster.MultiAZ',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.MultiAZ', props);
    return resource.getResponseField('DBCluster.MultiAZ') as unknown as boolean;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.Engine'),
        outputPath: 'DBCluster.Engine',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.Engine', props);
    return resource.getResponseField('DBCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.EngineVersion'),
        outputPath: 'DBCluster.EngineVersion',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.EngineVersion', props);
    return resource.getResponseField('DBCluster.EngineVersion') as unknown as string;
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.LatestRestorableTime'),
        outputPath: 'DBCluster.LatestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.LatestRestorableTime', props);
    return resource.getResponseField('DBCluster.LatestRestorableTime') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.Port'),
        outputPath: 'DBCluster.Port',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.Port', props);
    return resource.getResponseField('DBCluster.Port') as unknown as number;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.MasterUsername'),
        outputPath: 'DBCluster.MasterUsername',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.MasterUsername', props);
    return resource.getResponseField('DBCluster.MasterUsername') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.PreferredBackupWindow'),
        outputPath: 'DBCluster.PreferredBackupWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.PreferredBackupWindow', props);
    return resource.getResponseField('DBCluster.PreferredBackupWindow') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.PreferredMaintenanceWindow'),
        outputPath: 'DBCluster.PreferredMaintenanceWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get dbClusterMembers(): shapes.DocDbdbClusterMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.DBClusterMembers'),
        outputPath: 'DBCluster.DBClusterMembers',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.DBClusterMembers', props);
    return resource.getResponseField('DBCluster.DBClusterMembers') as unknown as shapes.DocDbdbClusterMember[];
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.VpcSecurityGroups'),
        outputPath: 'DBCluster.VpcSecurityGroups',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.VpcSecurityGroups', props);
    return resource.getResponseField('DBCluster.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.HostedZoneId'),
        outputPath: 'DBCluster.HostedZoneId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.HostedZoneId', props);
    return resource.getResponseField('DBCluster.HostedZoneId') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.StorageEncrypted'),
        outputPath: 'DBCluster.StorageEncrypted',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.StorageEncrypted', props);
    return resource.getResponseField('DBCluster.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.KmsKeyId'),
        outputPath: 'DBCluster.KmsKeyId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.KmsKeyId', props);
    return resource.getResponseField('DBCluster.KmsKeyId') as unknown as string;
  }

  public get dbClusterResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.DbClusterResourceId'),
        outputPath: 'DBCluster.DbClusterResourceId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.DbClusterResourceId', props);
    return resource.getResponseField('DBCluster.DbClusterResourceId') as unknown as string;
  }

  public get dbClusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.DBClusterArn'),
        outputPath: 'DBCluster.DBClusterArn',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.DBClusterArn', props);
    return resource.getResponseField('DBCluster.DBClusterArn') as unknown as string;
  }

  public get associatedRoles(): shapes.DocDbdbClusterRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.AssociatedRoles'),
        outputPath: 'DBCluster.AssociatedRoles',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.AssociatedRoles', props);
    return resource.getResponseField('DBCluster.AssociatedRoles') as unknown as shapes.DocDbdbClusterRole[];
  }

  public get clusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.ClusterCreateTime'),
        outputPath: 'DBCluster.ClusterCreateTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.ClusterCreateTime', props);
    return resource.getResponseField('DBCluster.ClusterCreateTime') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.EnabledCloudwatchLogsExports'),
        outputPath: 'DBCluster.EnabledCloudwatchLogsExports',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBCluster.EnabledCloudwatchLogsExports') as unknown as string[];
  }

  public get deletionProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.FailoverDBCluster.DBCluster.DeletionProtection'),
        outputPath: 'DBCluster.DeletionProtection',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.__input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbListTagsForResourceMessage) {
  }

  public get tagList(): shapes.DocDbTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ListTagsForResource.TagList'),
        outputPath: 'TagList',
        parameters: {
          ResourceName: this.__input.resourceName,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.DocDbTag[];
  }

}

export class DocDBResponsesModifyDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbClusterMessage) {
  }

  public get dbCluster(): DocDBResponsesModifyDbClusterDbCluster {
    return new DocDBResponsesModifyDbClusterDbCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesModifyDbClusterDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbClusterMessage) {
  }

  public get availabilityZones(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.AvailabilityZones'),
        outputPath: 'DBCluster.AvailabilityZones',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.AvailabilityZones', props);
    return resource.getResponseField('DBCluster.AvailabilityZones') as unknown as string[];
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.BackupRetentionPeriod'),
        outputPath: 'DBCluster.BackupRetentionPeriod',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.BackupRetentionPeriod', props);
    return resource.getResponseField('DBCluster.BackupRetentionPeriod') as unknown as number;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.DBClusterIdentifier'),
        outputPath: 'DBCluster.DBClusterIdentifier',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.DBClusterIdentifier', props);
    return resource.getResponseField('DBCluster.DBClusterIdentifier') as unknown as string;
  }

  public get dbClusterParameterGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.DBClusterParameterGroup'),
        outputPath: 'DBCluster.DBClusterParameterGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.DBClusterParameterGroup', props);
    return resource.getResponseField('DBCluster.DBClusterParameterGroup') as unknown as string;
  }

  public get dbSubnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.DBSubnetGroup'),
        outputPath: 'DBCluster.DBSubnetGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.DBSubnetGroup', props);
    return resource.getResponseField('DBCluster.DBSubnetGroup') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.Status'),
        outputPath: 'DBCluster.Status',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.Status', props);
    return resource.getResponseField('DBCluster.Status') as unknown as string;
  }

  public get percentProgress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.PercentProgress'),
        outputPath: 'DBCluster.PercentProgress',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.PercentProgress', props);
    return resource.getResponseField('DBCluster.PercentProgress') as unknown as string;
  }

  public get earliestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.EarliestRestorableTime'),
        outputPath: 'DBCluster.EarliestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.EarliestRestorableTime', props);
    return resource.getResponseField('DBCluster.EarliestRestorableTime') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.Endpoint'),
        outputPath: 'DBCluster.Endpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.Endpoint', props);
    return resource.getResponseField('DBCluster.Endpoint') as unknown as string;
  }

  public get readerEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.ReaderEndpoint'),
        outputPath: 'DBCluster.ReaderEndpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.ReaderEndpoint', props);
    return resource.getResponseField('DBCluster.ReaderEndpoint') as unknown as string;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.MultiAZ'),
        outputPath: 'DBCluster.MultiAZ',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.MultiAZ', props);
    return resource.getResponseField('DBCluster.MultiAZ') as unknown as boolean;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.Engine'),
        outputPath: 'DBCluster.Engine',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.Engine', props);
    return resource.getResponseField('DBCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.EngineVersion'),
        outputPath: 'DBCluster.EngineVersion',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.EngineVersion', props);
    return resource.getResponseField('DBCluster.EngineVersion') as unknown as string;
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.LatestRestorableTime'),
        outputPath: 'DBCluster.LatestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.LatestRestorableTime', props);
    return resource.getResponseField('DBCluster.LatestRestorableTime') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.Port'),
        outputPath: 'DBCluster.Port',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.Port', props);
    return resource.getResponseField('DBCluster.Port') as unknown as number;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.MasterUsername'),
        outputPath: 'DBCluster.MasterUsername',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.MasterUsername', props);
    return resource.getResponseField('DBCluster.MasterUsername') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.PreferredBackupWindow'),
        outputPath: 'DBCluster.PreferredBackupWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.PreferredBackupWindow', props);
    return resource.getResponseField('DBCluster.PreferredBackupWindow') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.PreferredMaintenanceWindow'),
        outputPath: 'DBCluster.PreferredMaintenanceWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get dbClusterMembers(): shapes.DocDbdbClusterMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.DBClusterMembers'),
        outputPath: 'DBCluster.DBClusterMembers',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.DBClusterMembers', props);
    return resource.getResponseField('DBCluster.DBClusterMembers') as unknown as shapes.DocDbdbClusterMember[];
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.VpcSecurityGroups'),
        outputPath: 'DBCluster.VpcSecurityGroups',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.VpcSecurityGroups', props);
    return resource.getResponseField('DBCluster.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.HostedZoneId'),
        outputPath: 'DBCluster.HostedZoneId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.HostedZoneId', props);
    return resource.getResponseField('DBCluster.HostedZoneId') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.StorageEncrypted'),
        outputPath: 'DBCluster.StorageEncrypted',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.StorageEncrypted', props);
    return resource.getResponseField('DBCluster.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.KmsKeyId'),
        outputPath: 'DBCluster.KmsKeyId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.KmsKeyId', props);
    return resource.getResponseField('DBCluster.KmsKeyId') as unknown as string;
  }

  public get dbClusterResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.DbClusterResourceId'),
        outputPath: 'DBCluster.DbClusterResourceId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.DbClusterResourceId', props);
    return resource.getResponseField('DBCluster.DbClusterResourceId') as unknown as string;
  }

  public get dbClusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.DBClusterArn'),
        outputPath: 'DBCluster.DBClusterArn',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.DBClusterArn', props);
    return resource.getResponseField('DBCluster.DBClusterArn') as unknown as string;
  }

  public get associatedRoles(): shapes.DocDbdbClusterRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.AssociatedRoles'),
        outputPath: 'DBCluster.AssociatedRoles',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.AssociatedRoles', props);
    return resource.getResponseField('DBCluster.AssociatedRoles') as unknown as shapes.DocDbdbClusterRole[];
  }

  public get clusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.ClusterCreateTime'),
        outputPath: 'DBCluster.ClusterCreateTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.ClusterCreateTime', props);
    return resource.getResponseField('DBCluster.ClusterCreateTime') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.EnabledCloudwatchLogsExports'),
        outputPath: 'DBCluster.EnabledCloudwatchLogsExports',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBCluster.EnabledCloudwatchLogsExports') as unknown as string[];
  }

  public get deletionProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBCluster.DBCluster.DeletionProtection'),
        outputPath: 'DBCluster.DeletionProtection',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.__input.newDbClusterIdentifier,
          ApplyImmediately: this.__input.applyImmediately,
          BackupRetentionPeriod: this.__input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Port: this.__input.port,
          MasterUserPassword: this.__input.masterUserPassword,
          PreferredBackupWindow: this.__input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.__input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.__input.engineVersion,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBResponsesModifyDbClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbClusterParameterGroupMessage) {
  }

  public get dbClusterParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbClusterParameterGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBClusterParameterGroup.DBClusterParameterGroupName'),
        outputPath: 'DBClusterParameterGroupName',
        parameters: {
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBClusterParameterGroup.DBClusterParameterGroupName', props);
    return resource.getResponseField('DBClusterParameterGroupName') as unknown as string;
  }

}

export class DocDBResponsesModifyDbClusterSnapshotAttribute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbClusterSnapshotAttributeMessage) {
  }

  public get dbClusterSnapshotAttributesResult(): DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult {
    return new DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbClusterSnapshotAttributeMessage) {
  }

  public get dbClusterSnapshotIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbClusterSnapshotAttribute',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBClusterSnapshotAttribute.DBClusterSnapshotAttributesResult.DBClusterSnapshotIdentifier'),
        outputPath: 'DBClusterSnapshotAttributesResult.DBClusterSnapshotIdentifier',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          AttributeName: this.__input.attributeName,
          ValuesToAdd: this.__input.valuesToAdd,
          ValuesToRemove: this.__input.valuesToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBClusterSnapshotAttribute.DBClusterSnapshotAttributesResult.DBClusterSnapshotIdentifier', props);
    return resource.getResponseField('DBClusterSnapshotAttributesResult.DBClusterSnapshotIdentifier') as unknown as string;
  }

  public get dbClusterSnapshotAttributes(): shapes.DocDbdbClusterSnapshotAttribute[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbClusterSnapshotAttribute',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBClusterSnapshotAttribute.DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes'),
        outputPath: 'DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes',
        parameters: {
          DBClusterSnapshotIdentifier: this.__input.dbClusterSnapshotIdentifier,
          AttributeName: this.__input.attributeName,
          ValuesToAdd: this.__input.valuesToAdd,
          ValuesToRemove: this.__input.valuesToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBClusterSnapshotAttribute.DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes', props);
    return resource.getResponseField('DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes') as unknown as shapes.DocDbdbClusterSnapshotAttribute[];
  }

}

export class DocDBResponsesModifyDbInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbInstanceMessage) {
  }

  public get dbInstance(): DocDBResponsesModifyDbInstanceDbInstance {
    return new DocDBResponsesModifyDbInstanceDbInstance(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesModifyDbInstanceDbInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbInstanceMessage) {
  }

  public get dbInstanceIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DBInstanceIdentifier'),
        outputPath: 'DBInstance.DBInstanceIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DBInstanceIdentifier', props);
    return resource.getResponseField('DBInstance.DBInstanceIdentifier') as unknown as string;
  }

  public get dbInstanceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DBInstanceClass'),
        outputPath: 'DBInstance.DBInstanceClass',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DBInstanceClass', props);
    return resource.getResponseField('DBInstance.DBInstanceClass') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.Engine'),
        outputPath: 'DBInstance.Engine',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.Engine', props);
    return resource.getResponseField('DBInstance.Engine') as unknown as string;
  }

  public get dbInstanceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DBInstanceStatus'),
        outputPath: 'DBInstance.DBInstanceStatus',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DBInstanceStatus', props);
    return resource.getResponseField('DBInstance.DBInstanceStatus') as unknown as string;
  }

  public get endpoint(): DocDBResponsesModifyDbInstanceDbInstanceEndpoint {
    return new DocDBResponsesModifyDbInstanceDbInstanceEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get instanceCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.InstanceCreateTime'),
        outputPath: 'DBInstance.InstanceCreateTime',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.InstanceCreateTime', props);
    return resource.getResponseField('DBInstance.InstanceCreateTime') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PreferredBackupWindow'),
        outputPath: 'DBInstance.PreferredBackupWindow',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PreferredBackupWindow', props);
    return resource.getResponseField('DBInstance.PreferredBackupWindow') as unknown as string;
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.BackupRetentionPeriod'),
        outputPath: 'DBInstance.BackupRetentionPeriod',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.BackupRetentionPeriod', props);
    return resource.getResponseField('DBInstance.BackupRetentionPeriod') as unknown as number;
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.VpcSecurityGroups'),
        outputPath: 'DBInstance.VpcSecurityGroups',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.VpcSecurityGroups', props);
    return resource.getResponseField('DBInstance.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.AvailabilityZone'),
        outputPath: 'DBInstance.AvailabilityZone',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.AvailabilityZone', props);
    return resource.getResponseField('DBInstance.AvailabilityZone') as unknown as string;
  }

  public get dbSubnetGroup(): DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup {
    return new DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup(this.__scope, this.__resources, this.__input);
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PreferredMaintenanceWindow'),
        outputPath: 'DBInstance.PreferredMaintenanceWindow',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBInstance.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues {
    return new DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues(this.__scope, this.__resources, this.__input);
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.LatestRestorableTime'),
        outputPath: 'DBInstance.LatestRestorableTime',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.LatestRestorableTime', props);
    return resource.getResponseField('DBInstance.LatestRestorableTime') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.EngineVersion'),
        outputPath: 'DBInstance.EngineVersion',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.EngineVersion', props);
    return resource.getResponseField('DBInstance.EngineVersion') as unknown as string;
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.AutoMinorVersionUpgrade'),
        outputPath: 'DBInstance.AutoMinorVersionUpgrade',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('DBInstance.AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get publiclyAccessible(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PubliclyAccessible'),
        outputPath: 'DBInstance.PubliclyAccessible',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PubliclyAccessible', props);
    return resource.getResponseField('DBInstance.PubliclyAccessible') as unknown as boolean;
  }

  public get statusInfos(): shapes.DocDbdbInstanceStatusInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.StatusInfos'),
        outputPath: 'DBInstance.StatusInfos',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.StatusInfos', props);
    return resource.getResponseField('DBInstance.StatusInfos') as unknown as shapes.DocDbdbInstanceStatusInfo[];
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DBClusterIdentifier'),
        outputPath: 'DBInstance.DBClusterIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DBClusterIdentifier', props);
    return resource.getResponseField('DBInstance.DBClusterIdentifier') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.StorageEncrypted'),
        outputPath: 'DBInstance.StorageEncrypted',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.StorageEncrypted', props);
    return resource.getResponseField('DBInstance.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.KmsKeyId'),
        outputPath: 'DBInstance.KmsKeyId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.KmsKeyId', props);
    return resource.getResponseField('DBInstance.KmsKeyId') as unknown as string;
  }

  public get dbiResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DbiResourceId'),
        outputPath: 'DBInstance.DbiResourceId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DbiResourceId', props);
    return resource.getResponseField('DBInstance.DbiResourceId') as unknown as string;
  }

  public get caCertificateIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.CACertificateIdentifier'),
        outputPath: 'DBInstance.CACertificateIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.CACertificateIdentifier', props);
    return resource.getResponseField('DBInstance.CACertificateIdentifier') as unknown as string;
  }

  public get promotionTier(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PromotionTier'),
        outputPath: 'DBInstance.PromotionTier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PromotionTier', props);
    return resource.getResponseField('DBInstance.PromotionTier') as unknown as number;
  }

  public get dbInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DBInstanceArn'),
        outputPath: 'DBInstance.DBInstanceArn',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DBInstanceArn', props);
    return resource.getResponseField('DBInstance.DBInstanceArn') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.EnabledCloudwatchLogsExports'),
        outputPath: 'DBInstance.EnabledCloudwatchLogsExports',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBInstance.EnabledCloudwatchLogsExports') as unknown as string[];
  }

}

export class DocDBResponsesModifyDbInstanceDbInstanceEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbInstanceMessage) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.Endpoint.Address'),
        outputPath: 'DBInstance.Endpoint.Address',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.Endpoint.Address', props);
    return resource.getResponseField('DBInstance.Endpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.Endpoint.Port'),
        outputPath: 'DBInstance.Endpoint.Port',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.Endpoint.Port', props);
    return resource.getResponseField('DBInstance.Endpoint.Port') as unknown as number;
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.Endpoint.HostedZoneId'),
        outputPath: 'DBInstance.Endpoint.HostedZoneId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.Endpoint.HostedZoneId', props);
    return resource.getResponseField('DBInstance.Endpoint.HostedZoneId') as unknown as string;
  }

}

export class DocDBResponsesModifyDbInstanceDbInstanceDbSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbInstanceMessage) {
  }

  public get dbSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupName',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupName') as unknown as string;
  }

  public get dbSubnetGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupDescription',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupDescription') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DBSubnetGroup.VpcId'),
        outputPath: 'DBInstance.DBSubnetGroup.VpcId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DBSubnetGroup.VpcId', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.VpcId') as unknown as string;
  }

  public get subnetGroupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus'),
        outputPath: 'DBInstance.DBSubnetGroup.SubnetGroupStatus',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.SubnetGroupStatus') as unknown as string;
  }

  public get subnets(): shapes.DocDbSubnet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DBSubnetGroup.Subnets'),
        outputPath: 'DBInstance.DBSubnetGroup.Subnets',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DBSubnetGroup.Subnets', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.Subnets') as unknown as shapes.DocDbSubnet[];
  }

  public get dbSubnetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupArn',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbInstanceMessage) {
  }

  public get dbInstanceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass'),
        outputPath: 'DBInstance.PendingModifiedValues.DBInstanceClass',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBInstanceClass') as unknown as string;
  }

  public get allocatedStorage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage'),
        outputPath: 'DBInstance.PendingModifiedValues.AllocatedStorage',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.AllocatedStorage') as unknown as number;
  }

  public get masterUserPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword'),
        outputPath: 'DBInstance.PendingModifiedValues.MasterUserPassword',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.MasterUserPassword') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.Port'),
        outputPath: 'DBInstance.PendingModifiedValues.Port',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.Port', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.Port') as unknown as number;
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod'),
        outputPath: 'DBInstance.PendingModifiedValues.BackupRetentionPeriod',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.BackupRetentionPeriod') as unknown as number;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.MultiAZ'),
        outputPath: 'DBInstance.PendingModifiedValues.MultiAZ',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.MultiAZ', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.MultiAZ') as unknown as boolean;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.EngineVersion'),
        outputPath: 'DBInstance.PendingModifiedValues.EngineVersion',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.EngineVersion', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.EngineVersion') as unknown as string;
  }

  public get licenseModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.LicenseModel'),
        outputPath: 'DBInstance.PendingModifiedValues.LicenseModel',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.LicenseModel', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.LicenseModel') as unknown as string;
  }

  public get iops(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.Iops'),
        outputPath: 'DBInstance.PendingModifiedValues.Iops',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.Iops', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.Iops') as unknown as number;
  }

  public get dbInstanceIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier'),
        outputPath: 'DBInstance.PendingModifiedValues.DBInstanceIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBInstanceIdentifier') as unknown as string;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.StorageType'),
        outputPath: 'DBInstance.PendingModifiedValues.StorageType',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.StorageType', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.StorageType') as unknown as string;
  }

  public get caCertificateIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier'),
        outputPath: 'DBInstance.PendingModifiedValues.CACertificateIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.CACertificateIdentifier') as unknown as string;
  }

  public get dbSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName'),
        outputPath: 'DBInstance.PendingModifiedValues.DBSubnetGroupName',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBSubnetGroupName') as unknown as string;
  }

  public get pendingCloudwatchLogsExports(): DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {
    return new DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbInstanceMessage) {
  }

  public get logTypesToEnable(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable'),
        outputPath: 'DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable') as unknown as string[];
  }

  public get logTypesToDisable(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable'),
        outputPath: 'DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          DBInstanceClass: this.__input.dbInstanceClass,
          ApplyImmediately: this.__input.applyImmediately,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.__input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.__input.caCertificateIdentifier,
          PromotionTier: this.__input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable') as unknown as string[];
  }

}

export class DocDBResponsesModifyDbSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbSubnetGroupMessage) {
  }

  public get dbSubnetGroup(): DocDBResponsesModifyDbSubnetGroupDbSubnetGroup {
    return new DocDBResponsesModifyDbSubnetGroupDbSubnetGroup(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesModifyDbSubnetGroupDbSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbModifyDbSubnetGroupMessage) {
  }

  public get dbSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBSubnetGroup.DBSubnetGroup.DBSubnetGroupName'),
        outputPath: 'DBSubnetGroup.DBSubnetGroupName',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBSubnetGroup.DBSubnetGroup.DBSubnetGroupName', props);
    return resource.getResponseField('DBSubnetGroup.DBSubnetGroupName') as unknown as string;
  }

  public get dbSubnetGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBSubnetGroup.DBSubnetGroup.DBSubnetGroupDescription'),
        outputPath: 'DBSubnetGroup.DBSubnetGroupDescription',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBSubnetGroup.DBSubnetGroup.DBSubnetGroupDescription', props);
    return resource.getResponseField('DBSubnetGroup.DBSubnetGroupDescription') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBSubnetGroup.DBSubnetGroup.VpcId'),
        outputPath: 'DBSubnetGroup.VpcId',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBSubnetGroup.DBSubnetGroup.VpcId', props);
    return resource.getResponseField('DBSubnetGroup.VpcId') as unknown as string;
  }

  public get subnetGroupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBSubnetGroup.DBSubnetGroup.SubnetGroupStatus'),
        outputPath: 'DBSubnetGroup.SubnetGroupStatus',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBSubnetGroup.DBSubnetGroup.SubnetGroupStatus', props);
    return resource.getResponseField('DBSubnetGroup.SubnetGroupStatus') as unknown as string;
  }

  public get subnets(): shapes.DocDbSubnet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBSubnetGroup.DBSubnetGroup.Subnets'),
        outputPath: 'DBSubnetGroup.Subnets',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBSubnetGroup.DBSubnetGroup.Subnets', props);
    return resource.getResponseField('DBSubnetGroup.Subnets') as unknown as shapes.DocDbSubnet[];
  }

  public get dbSubnetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyDbSubnetGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ModifyDBSubnetGroup.DBSubnetGroup.DBSubnetGroupArn'),
        outputPath: 'DBSubnetGroup.DBSubnetGroupArn',
        parameters: {
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.__input.dbSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyDBSubnetGroup.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBResponsesRebootDbInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbRebootDbInstanceMessage) {
  }

  public get dbInstance(): DocDBResponsesRebootDbInstanceDbInstance {
    return new DocDBResponsesRebootDbInstanceDbInstance(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesRebootDbInstanceDbInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbRebootDbInstanceMessage) {
  }

  public get dbInstanceIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DBInstanceIdentifier'),
        outputPath: 'DBInstance.DBInstanceIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DBInstanceIdentifier', props);
    return resource.getResponseField('DBInstance.DBInstanceIdentifier') as unknown as string;
  }

  public get dbInstanceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DBInstanceClass'),
        outputPath: 'DBInstance.DBInstanceClass',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DBInstanceClass', props);
    return resource.getResponseField('DBInstance.DBInstanceClass') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.Engine'),
        outputPath: 'DBInstance.Engine',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.Engine', props);
    return resource.getResponseField('DBInstance.Engine') as unknown as string;
  }

  public get dbInstanceStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DBInstanceStatus'),
        outputPath: 'DBInstance.DBInstanceStatus',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DBInstanceStatus', props);
    return resource.getResponseField('DBInstance.DBInstanceStatus') as unknown as string;
  }

  public get endpoint(): DocDBResponsesRebootDbInstanceDbInstanceEndpoint {
    return new DocDBResponsesRebootDbInstanceDbInstanceEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get instanceCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.InstanceCreateTime'),
        outputPath: 'DBInstance.InstanceCreateTime',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.InstanceCreateTime', props);
    return resource.getResponseField('DBInstance.InstanceCreateTime') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PreferredBackupWindow'),
        outputPath: 'DBInstance.PreferredBackupWindow',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PreferredBackupWindow', props);
    return resource.getResponseField('DBInstance.PreferredBackupWindow') as unknown as string;
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.BackupRetentionPeriod'),
        outputPath: 'DBInstance.BackupRetentionPeriod',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.BackupRetentionPeriod', props);
    return resource.getResponseField('DBInstance.BackupRetentionPeriod') as unknown as number;
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.VpcSecurityGroups'),
        outputPath: 'DBInstance.VpcSecurityGroups',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.VpcSecurityGroups', props);
    return resource.getResponseField('DBInstance.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get availabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.AvailabilityZone'),
        outputPath: 'DBInstance.AvailabilityZone',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.AvailabilityZone', props);
    return resource.getResponseField('DBInstance.AvailabilityZone') as unknown as string;
  }

  public get dbSubnetGroup(): DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup {
    return new DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup(this.__scope, this.__resources, this.__input);
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PreferredMaintenanceWindow'),
        outputPath: 'DBInstance.PreferredMaintenanceWindow',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBInstance.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues {
    return new DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues(this.__scope, this.__resources, this.__input);
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.LatestRestorableTime'),
        outputPath: 'DBInstance.LatestRestorableTime',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.LatestRestorableTime', props);
    return resource.getResponseField('DBInstance.LatestRestorableTime') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.EngineVersion'),
        outputPath: 'DBInstance.EngineVersion',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.EngineVersion', props);
    return resource.getResponseField('DBInstance.EngineVersion') as unknown as string;
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.AutoMinorVersionUpgrade'),
        outputPath: 'DBInstance.AutoMinorVersionUpgrade',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('DBInstance.AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get publiclyAccessible(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PubliclyAccessible'),
        outputPath: 'DBInstance.PubliclyAccessible',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PubliclyAccessible', props);
    return resource.getResponseField('DBInstance.PubliclyAccessible') as unknown as boolean;
  }

  public get statusInfos(): shapes.DocDbdbInstanceStatusInfo[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.StatusInfos'),
        outputPath: 'DBInstance.StatusInfos',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.StatusInfos', props);
    return resource.getResponseField('DBInstance.StatusInfos') as unknown as shapes.DocDbdbInstanceStatusInfo[];
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DBClusterIdentifier'),
        outputPath: 'DBInstance.DBClusterIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DBClusterIdentifier', props);
    return resource.getResponseField('DBInstance.DBClusterIdentifier') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.StorageEncrypted'),
        outputPath: 'DBInstance.StorageEncrypted',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.StorageEncrypted', props);
    return resource.getResponseField('DBInstance.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.KmsKeyId'),
        outputPath: 'DBInstance.KmsKeyId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.KmsKeyId', props);
    return resource.getResponseField('DBInstance.KmsKeyId') as unknown as string;
  }

  public get dbiResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DbiResourceId'),
        outputPath: 'DBInstance.DbiResourceId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DbiResourceId', props);
    return resource.getResponseField('DBInstance.DbiResourceId') as unknown as string;
  }

  public get caCertificateIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.CACertificateIdentifier'),
        outputPath: 'DBInstance.CACertificateIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.CACertificateIdentifier', props);
    return resource.getResponseField('DBInstance.CACertificateIdentifier') as unknown as string;
  }

  public get promotionTier(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PromotionTier'),
        outputPath: 'DBInstance.PromotionTier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PromotionTier', props);
    return resource.getResponseField('DBInstance.PromotionTier') as unknown as number;
  }

  public get dbInstanceArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DBInstanceArn'),
        outputPath: 'DBInstance.DBInstanceArn',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DBInstanceArn', props);
    return resource.getResponseField('DBInstance.DBInstanceArn') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.EnabledCloudwatchLogsExports'),
        outputPath: 'DBInstance.EnabledCloudwatchLogsExports',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBInstance.EnabledCloudwatchLogsExports') as unknown as string[];
  }

}

export class DocDBResponsesRebootDbInstanceDbInstanceEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbRebootDbInstanceMessage) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.Endpoint.Address'),
        outputPath: 'DBInstance.Endpoint.Address',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.Endpoint.Address', props);
    return resource.getResponseField('DBInstance.Endpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.Endpoint.Port'),
        outputPath: 'DBInstance.Endpoint.Port',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.Endpoint.Port', props);
    return resource.getResponseField('DBInstance.Endpoint.Port') as unknown as number;
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.Endpoint.HostedZoneId'),
        outputPath: 'DBInstance.Endpoint.HostedZoneId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.Endpoint.HostedZoneId', props);
    return resource.getResponseField('DBInstance.Endpoint.HostedZoneId') as unknown as string;
  }

}

export class DocDBResponsesRebootDbInstanceDbInstanceDbSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbRebootDbInstanceMessage) {
  }

  public get dbSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupName',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupName') as unknown as string;
  }

  public get dbSubnetGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupDescription',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupDescription') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DBSubnetGroup.VpcId'),
        outputPath: 'DBInstance.DBSubnetGroup.VpcId',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DBSubnetGroup.VpcId', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.VpcId') as unknown as string;
  }

  public get subnetGroupStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus'),
        outputPath: 'DBInstance.DBSubnetGroup.SubnetGroupStatus',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.SubnetGroupStatus') as unknown as string;
  }

  public get subnets(): shapes.DocDbSubnet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DBSubnetGroup.Subnets'),
        outputPath: 'DBInstance.DBSubnetGroup.Subnets',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DBSubnetGroup.Subnets', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.Subnets') as unknown as shapes.DocDbSubnet[];
  }

  public get dbSubnetGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn'),
        outputPath: 'DBInstance.DBSubnetGroup.DBSubnetGroupArn',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbRebootDbInstanceMessage) {
  }

  public get dbInstanceClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass'),
        outputPath: 'DBInstance.PendingModifiedValues.DBInstanceClass',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBInstanceClass') as unknown as string;
  }

  public get allocatedStorage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage'),
        outputPath: 'DBInstance.PendingModifiedValues.AllocatedStorage',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.AllocatedStorage') as unknown as number;
  }

  public get masterUserPassword(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword'),
        outputPath: 'DBInstance.PendingModifiedValues.MasterUserPassword',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.MasterUserPassword') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.Port'),
        outputPath: 'DBInstance.PendingModifiedValues.Port',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.Port', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.Port') as unknown as number;
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod'),
        outputPath: 'DBInstance.PendingModifiedValues.BackupRetentionPeriod',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.BackupRetentionPeriod') as unknown as number;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.MultiAZ'),
        outputPath: 'DBInstance.PendingModifiedValues.MultiAZ',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.MultiAZ', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.MultiAZ') as unknown as boolean;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.EngineVersion'),
        outputPath: 'DBInstance.PendingModifiedValues.EngineVersion',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.EngineVersion', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.EngineVersion') as unknown as string;
  }

  public get licenseModel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.LicenseModel'),
        outputPath: 'DBInstance.PendingModifiedValues.LicenseModel',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.LicenseModel', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.LicenseModel') as unknown as string;
  }

  public get iops(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.Iops'),
        outputPath: 'DBInstance.PendingModifiedValues.Iops',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.Iops', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.Iops') as unknown as number;
  }

  public get dbInstanceIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier'),
        outputPath: 'DBInstance.PendingModifiedValues.DBInstanceIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBInstanceIdentifier') as unknown as string;
  }

  public get storageType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.StorageType'),
        outputPath: 'DBInstance.PendingModifiedValues.StorageType',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.StorageType', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.StorageType') as unknown as string;
  }

  public get caCertificateIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier'),
        outputPath: 'DBInstance.PendingModifiedValues.CACertificateIdentifier',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.CACertificateIdentifier') as unknown as string;
  }

  public get dbSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName'),
        outputPath: 'DBInstance.PendingModifiedValues.DBSubnetGroupName',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBSubnetGroupName') as unknown as string;
  }

  public get pendingCloudwatchLogsExports(): DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {
    return new DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbRebootDbInstanceMessage) {
  }

  public get logTypesToEnable(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable'),
        outputPath: 'DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable') as unknown as string[];
  }

  public get logTypesToDisable(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootDbInstance',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RebootDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable'),
        outputPath: 'DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable',
        parameters: {
          DBInstanceIdentifier: this.__input.dbInstanceIdentifier,
          ForceFailover: this.__input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable') as unknown as string[];
  }

}

export class DocDBResponsesResetDbClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbResetDbClusterParameterGroupMessage) {
  }

  public get dbClusterParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetDbClusterParameterGroup',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.ResetDBClusterParameterGroup.DBClusterParameterGroupName'),
        outputPath: 'DBClusterParameterGroupName',
        parameters: {
          DBClusterParameterGroupName: this.__input.dbClusterParameterGroupName,
          ResetAllParameters: this.__input.resetAllParameters,
          Parameters: this.__input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetDBClusterParameterGroup.DBClusterParameterGroupName', props);
    return resource.getResponseField('DBClusterParameterGroupName') as unknown as string;
  }

}

export class DocDBResponsesRestoreDbClusterFromSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbRestoreDbClusterFromSnapshotMessage) {
  }

  public get dbCluster(): DocDBResponsesRestoreDbClusterFromSnapshotDbCluster {
    return new DocDBResponsesRestoreDbClusterFromSnapshotDbCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesRestoreDbClusterFromSnapshotDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbRestoreDbClusterFromSnapshotMessage) {
  }

  public get availabilityZones(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.AvailabilityZones'),
        outputPath: 'DBCluster.AvailabilityZones',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.AvailabilityZones', props);
    return resource.getResponseField('DBCluster.AvailabilityZones') as unknown as string[];
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.BackupRetentionPeriod'),
        outputPath: 'DBCluster.BackupRetentionPeriod',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.BackupRetentionPeriod', props);
    return resource.getResponseField('DBCluster.BackupRetentionPeriod') as unknown as number;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.DBClusterIdentifier'),
        outputPath: 'DBCluster.DBClusterIdentifier',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.DBClusterIdentifier', props);
    return resource.getResponseField('DBCluster.DBClusterIdentifier') as unknown as string;
  }

  public get dbClusterParameterGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.DBClusterParameterGroup'),
        outputPath: 'DBCluster.DBClusterParameterGroup',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.DBClusterParameterGroup', props);
    return resource.getResponseField('DBCluster.DBClusterParameterGroup') as unknown as string;
  }

  public get dbSubnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.DBSubnetGroup'),
        outputPath: 'DBCluster.DBSubnetGroup',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.DBSubnetGroup', props);
    return resource.getResponseField('DBCluster.DBSubnetGroup') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.Status'),
        outputPath: 'DBCluster.Status',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.Status', props);
    return resource.getResponseField('DBCluster.Status') as unknown as string;
  }

  public get percentProgress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.PercentProgress'),
        outputPath: 'DBCluster.PercentProgress',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.PercentProgress', props);
    return resource.getResponseField('DBCluster.PercentProgress') as unknown as string;
  }

  public get earliestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.EarliestRestorableTime'),
        outputPath: 'DBCluster.EarliestRestorableTime',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.EarliestRestorableTime', props);
    return resource.getResponseField('DBCluster.EarliestRestorableTime') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.Endpoint'),
        outputPath: 'DBCluster.Endpoint',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.Endpoint', props);
    return resource.getResponseField('DBCluster.Endpoint') as unknown as string;
  }

  public get readerEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.ReaderEndpoint'),
        outputPath: 'DBCluster.ReaderEndpoint',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.ReaderEndpoint', props);
    return resource.getResponseField('DBCluster.ReaderEndpoint') as unknown as string;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.MultiAZ'),
        outputPath: 'DBCluster.MultiAZ',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.MultiAZ', props);
    return resource.getResponseField('DBCluster.MultiAZ') as unknown as boolean;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.Engine'),
        outputPath: 'DBCluster.Engine',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.Engine', props);
    return resource.getResponseField('DBCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.EngineVersion'),
        outputPath: 'DBCluster.EngineVersion',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.EngineVersion', props);
    return resource.getResponseField('DBCluster.EngineVersion') as unknown as string;
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.LatestRestorableTime'),
        outputPath: 'DBCluster.LatestRestorableTime',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.LatestRestorableTime', props);
    return resource.getResponseField('DBCluster.LatestRestorableTime') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.Port'),
        outputPath: 'DBCluster.Port',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.Port', props);
    return resource.getResponseField('DBCluster.Port') as unknown as number;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.MasterUsername'),
        outputPath: 'DBCluster.MasterUsername',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.MasterUsername', props);
    return resource.getResponseField('DBCluster.MasterUsername') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.PreferredBackupWindow'),
        outputPath: 'DBCluster.PreferredBackupWindow',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.PreferredBackupWindow', props);
    return resource.getResponseField('DBCluster.PreferredBackupWindow') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.PreferredMaintenanceWindow'),
        outputPath: 'DBCluster.PreferredMaintenanceWindow',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get dbClusterMembers(): shapes.DocDbdbClusterMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.DBClusterMembers'),
        outputPath: 'DBCluster.DBClusterMembers',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.DBClusterMembers', props);
    return resource.getResponseField('DBCluster.DBClusterMembers') as unknown as shapes.DocDbdbClusterMember[];
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.VpcSecurityGroups'),
        outputPath: 'DBCluster.VpcSecurityGroups',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.VpcSecurityGroups', props);
    return resource.getResponseField('DBCluster.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.HostedZoneId'),
        outputPath: 'DBCluster.HostedZoneId',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.HostedZoneId', props);
    return resource.getResponseField('DBCluster.HostedZoneId') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.StorageEncrypted'),
        outputPath: 'DBCluster.StorageEncrypted',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.StorageEncrypted', props);
    return resource.getResponseField('DBCluster.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.KmsKeyId'),
        outputPath: 'DBCluster.KmsKeyId',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.KmsKeyId', props);
    return resource.getResponseField('DBCluster.KmsKeyId') as unknown as string;
  }

  public get dbClusterResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.DbClusterResourceId'),
        outputPath: 'DBCluster.DbClusterResourceId',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.DbClusterResourceId', props);
    return resource.getResponseField('DBCluster.DbClusterResourceId') as unknown as string;
  }

  public get dbClusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.DBClusterArn'),
        outputPath: 'DBCluster.DBClusterArn',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.DBClusterArn', props);
    return resource.getResponseField('DBCluster.DBClusterArn') as unknown as string;
  }

  public get associatedRoles(): shapes.DocDbdbClusterRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.AssociatedRoles'),
        outputPath: 'DBCluster.AssociatedRoles',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.AssociatedRoles', props);
    return resource.getResponseField('DBCluster.AssociatedRoles') as unknown as shapes.DocDbdbClusterRole[];
  }

  public get clusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.ClusterCreateTime'),
        outputPath: 'DBCluster.ClusterCreateTime',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.ClusterCreateTime', props);
    return resource.getResponseField('DBCluster.ClusterCreateTime') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.EnabledCloudwatchLogsExports'),
        outputPath: 'DBCluster.EnabledCloudwatchLogsExports',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBCluster.EnabledCloudwatchLogsExports') as unknown as string[];
  }

  public get deletionProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterFromSnapshot',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterFromSnapshot.DBCluster.DeletionProtection'),
        outputPath: 'DBCluster.DeletionProtection',
        parameters: {
          AvailabilityZones: this.__input.availabilityZones,
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SnapshotIdentifier: this.__input.snapshotIdentifier,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterFromSnapshot.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBResponsesRestoreDbClusterToPointInTime {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbRestoreDbClusterToPointInTimeMessage) {
  }

  public get dbCluster(): DocDBResponsesRestoreDbClusterToPointInTimeDbCluster {
    return new DocDBResponsesRestoreDbClusterToPointInTimeDbCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesRestoreDbClusterToPointInTimeDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbRestoreDbClusterToPointInTimeMessage) {
  }

  public get availabilityZones(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.AvailabilityZones'),
        outputPath: 'DBCluster.AvailabilityZones',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.AvailabilityZones', props);
    return resource.getResponseField('DBCluster.AvailabilityZones') as unknown as string[];
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.BackupRetentionPeriod'),
        outputPath: 'DBCluster.BackupRetentionPeriod',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.BackupRetentionPeriod', props);
    return resource.getResponseField('DBCluster.BackupRetentionPeriod') as unknown as number;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.DBClusterIdentifier'),
        outputPath: 'DBCluster.DBClusterIdentifier',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.DBClusterIdentifier', props);
    return resource.getResponseField('DBCluster.DBClusterIdentifier') as unknown as string;
  }

  public get dbClusterParameterGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.DBClusterParameterGroup'),
        outputPath: 'DBCluster.DBClusterParameterGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.DBClusterParameterGroup', props);
    return resource.getResponseField('DBCluster.DBClusterParameterGroup') as unknown as string;
  }

  public get dbSubnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.DBSubnetGroup'),
        outputPath: 'DBCluster.DBSubnetGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.DBSubnetGroup', props);
    return resource.getResponseField('DBCluster.DBSubnetGroup') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.Status'),
        outputPath: 'DBCluster.Status',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.Status', props);
    return resource.getResponseField('DBCluster.Status') as unknown as string;
  }

  public get percentProgress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.PercentProgress'),
        outputPath: 'DBCluster.PercentProgress',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.PercentProgress', props);
    return resource.getResponseField('DBCluster.PercentProgress') as unknown as string;
  }

  public get earliestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.EarliestRestorableTime'),
        outputPath: 'DBCluster.EarliestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.EarliestRestorableTime', props);
    return resource.getResponseField('DBCluster.EarliestRestorableTime') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.Endpoint'),
        outputPath: 'DBCluster.Endpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.Endpoint', props);
    return resource.getResponseField('DBCluster.Endpoint') as unknown as string;
  }

  public get readerEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.ReaderEndpoint'),
        outputPath: 'DBCluster.ReaderEndpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.ReaderEndpoint', props);
    return resource.getResponseField('DBCluster.ReaderEndpoint') as unknown as string;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.MultiAZ'),
        outputPath: 'DBCluster.MultiAZ',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.MultiAZ', props);
    return resource.getResponseField('DBCluster.MultiAZ') as unknown as boolean;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.Engine'),
        outputPath: 'DBCluster.Engine',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.Engine', props);
    return resource.getResponseField('DBCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.EngineVersion'),
        outputPath: 'DBCluster.EngineVersion',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.EngineVersion', props);
    return resource.getResponseField('DBCluster.EngineVersion') as unknown as string;
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.LatestRestorableTime'),
        outputPath: 'DBCluster.LatestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.LatestRestorableTime', props);
    return resource.getResponseField('DBCluster.LatestRestorableTime') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.Port'),
        outputPath: 'DBCluster.Port',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.Port', props);
    return resource.getResponseField('DBCluster.Port') as unknown as number;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.MasterUsername'),
        outputPath: 'DBCluster.MasterUsername',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.MasterUsername', props);
    return resource.getResponseField('DBCluster.MasterUsername') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.PreferredBackupWindow'),
        outputPath: 'DBCluster.PreferredBackupWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.PreferredBackupWindow', props);
    return resource.getResponseField('DBCluster.PreferredBackupWindow') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.PreferredMaintenanceWindow'),
        outputPath: 'DBCluster.PreferredMaintenanceWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get dbClusterMembers(): shapes.DocDbdbClusterMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.DBClusterMembers'),
        outputPath: 'DBCluster.DBClusterMembers',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.DBClusterMembers', props);
    return resource.getResponseField('DBCluster.DBClusterMembers') as unknown as shapes.DocDbdbClusterMember[];
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.VpcSecurityGroups'),
        outputPath: 'DBCluster.VpcSecurityGroups',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.VpcSecurityGroups', props);
    return resource.getResponseField('DBCluster.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.HostedZoneId'),
        outputPath: 'DBCluster.HostedZoneId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.HostedZoneId', props);
    return resource.getResponseField('DBCluster.HostedZoneId') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.StorageEncrypted'),
        outputPath: 'DBCluster.StorageEncrypted',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.StorageEncrypted', props);
    return resource.getResponseField('DBCluster.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.KmsKeyId'),
        outputPath: 'DBCluster.KmsKeyId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.KmsKeyId', props);
    return resource.getResponseField('DBCluster.KmsKeyId') as unknown as string;
  }

  public get dbClusterResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.DbClusterResourceId'),
        outputPath: 'DBCluster.DbClusterResourceId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.DbClusterResourceId', props);
    return resource.getResponseField('DBCluster.DbClusterResourceId') as unknown as string;
  }

  public get dbClusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.DBClusterArn'),
        outputPath: 'DBCluster.DBClusterArn',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.DBClusterArn', props);
    return resource.getResponseField('DBCluster.DBClusterArn') as unknown as string;
  }

  public get associatedRoles(): shapes.DocDbdbClusterRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.AssociatedRoles'),
        outputPath: 'DBCluster.AssociatedRoles',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.AssociatedRoles', props);
    return resource.getResponseField('DBCluster.AssociatedRoles') as unknown as shapes.DocDbdbClusterRole[];
  }

  public get clusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.ClusterCreateTime'),
        outputPath: 'DBCluster.ClusterCreateTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.ClusterCreateTime', props);
    return resource.getResponseField('DBCluster.ClusterCreateTime') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.EnabledCloudwatchLogsExports'),
        outputPath: 'DBCluster.EnabledCloudwatchLogsExports',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBCluster.EnabledCloudwatchLogsExports') as unknown as string[];
  }

  public get deletionProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restoreDbClusterToPointInTime',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.RestoreDBClusterToPointInTime.DBCluster.DeletionProtection'),
        outputPath: 'DBCluster.DeletionProtection',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.__input.sourceDbClusterIdentifier,
          RestoreToTime: this.__input.restoreToTime,
          UseLatestRestorableTime: this.__input.useLatestRestorableTime,
          Port: this.__input.port,
          DBSubnetGroupName: this.__input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.__input.vpcSecurityGroupIds,
          Tags: this.__input.tags,
          KmsKeyId: this.__input.kmsKeyId,
          EnableCloudwatchLogsExports: this.__input.enableCloudwatchLogsExports,
          DeletionProtection: this.__input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RestoreDBClusterToPointInTime.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBResponsesStartDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbStartDbClusterMessage) {
  }

  public get dbCluster(): DocDBResponsesStartDbClusterDbCluster {
    return new DocDBResponsesStartDbClusterDbCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesStartDbClusterDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbStartDbClusterMessage) {
  }

  public get availabilityZones(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.AvailabilityZones'),
        outputPath: 'DBCluster.AvailabilityZones',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.AvailabilityZones', props);
    return resource.getResponseField('DBCluster.AvailabilityZones') as unknown as string[];
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.BackupRetentionPeriod'),
        outputPath: 'DBCluster.BackupRetentionPeriod',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.BackupRetentionPeriod', props);
    return resource.getResponseField('DBCluster.BackupRetentionPeriod') as unknown as number;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.DBClusterIdentifier'),
        outputPath: 'DBCluster.DBClusterIdentifier',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.DBClusterIdentifier', props);
    return resource.getResponseField('DBCluster.DBClusterIdentifier') as unknown as string;
  }

  public get dbClusterParameterGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.DBClusterParameterGroup'),
        outputPath: 'DBCluster.DBClusterParameterGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.DBClusterParameterGroup', props);
    return resource.getResponseField('DBCluster.DBClusterParameterGroup') as unknown as string;
  }

  public get dbSubnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.DBSubnetGroup'),
        outputPath: 'DBCluster.DBSubnetGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.DBSubnetGroup', props);
    return resource.getResponseField('DBCluster.DBSubnetGroup') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.Status'),
        outputPath: 'DBCluster.Status',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.Status', props);
    return resource.getResponseField('DBCluster.Status') as unknown as string;
  }

  public get percentProgress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.PercentProgress'),
        outputPath: 'DBCluster.PercentProgress',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.PercentProgress', props);
    return resource.getResponseField('DBCluster.PercentProgress') as unknown as string;
  }

  public get earliestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.EarliestRestorableTime'),
        outputPath: 'DBCluster.EarliestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.EarliestRestorableTime', props);
    return resource.getResponseField('DBCluster.EarliestRestorableTime') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.Endpoint'),
        outputPath: 'DBCluster.Endpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.Endpoint', props);
    return resource.getResponseField('DBCluster.Endpoint') as unknown as string;
  }

  public get readerEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.ReaderEndpoint'),
        outputPath: 'DBCluster.ReaderEndpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.ReaderEndpoint', props);
    return resource.getResponseField('DBCluster.ReaderEndpoint') as unknown as string;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.MultiAZ'),
        outputPath: 'DBCluster.MultiAZ',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.MultiAZ', props);
    return resource.getResponseField('DBCluster.MultiAZ') as unknown as boolean;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.Engine'),
        outputPath: 'DBCluster.Engine',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.Engine', props);
    return resource.getResponseField('DBCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.EngineVersion'),
        outputPath: 'DBCluster.EngineVersion',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.EngineVersion', props);
    return resource.getResponseField('DBCluster.EngineVersion') as unknown as string;
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.LatestRestorableTime'),
        outputPath: 'DBCluster.LatestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.LatestRestorableTime', props);
    return resource.getResponseField('DBCluster.LatestRestorableTime') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.Port'),
        outputPath: 'DBCluster.Port',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.Port', props);
    return resource.getResponseField('DBCluster.Port') as unknown as number;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.MasterUsername'),
        outputPath: 'DBCluster.MasterUsername',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.MasterUsername', props);
    return resource.getResponseField('DBCluster.MasterUsername') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.PreferredBackupWindow'),
        outputPath: 'DBCluster.PreferredBackupWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.PreferredBackupWindow', props);
    return resource.getResponseField('DBCluster.PreferredBackupWindow') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.PreferredMaintenanceWindow'),
        outputPath: 'DBCluster.PreferredMaintenanceWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get dbClusterMembers(): shapes.DocDbdbClusterMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.DBClusterMembers'),
        outputPath: 'DBCluster.DBClusterMembers',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.DBClusterMembers', props);
    return resource.getResponseField('DBCluster.DBClusterMembers') as unknown as shapes.DocDbdbClusterMember[];
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.VpcSecurityGroups'),
        outputPath: 'DBCluster.VpcSecurityGroups',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.VpcSecurityGroups', props);
    return resource.getResponseField('DBCluster.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.HostedZoneId'),
        outputPath: 'DBCluster.HostedZoneId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.HostedZoneId', props);
    return resource.getResponseField('DBCluster.HostedZoneId') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.StorageEncrypted'),
        outputPath: 'DBCluster.StorageEncrypted',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.StorageEncrypted', props);
    return resource.getResponseField('DBCluster.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.KmsKeyId'),
        outputPath: 'DBCluster.KmsKeyId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.KmsKeyId', props);
    return resource.getResponseField('DBCluster.KmsKeyId') as unknown as string;
  }

  public get dbClusterResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.DbClusterResourceId'),
        outputPath: 'DBCluster.DbClusterResourceId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.DbClusterResourceId', props);
    return resource.getResponseField('DBCluster.DbClusterResourceId') as unknown as string;
  }

  public get dbClusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.DBClusterArn'),
        outputPath: 'DBCluster.DBClusterArn',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.DBClusterArn', props);
    return resource.getResponseField('DBCluster.DBClusterArn') as unknown as string;
  }

  public get associatedRoles(): shapes.DocDbdbClusterRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.AssociatedRoles'),
        outputPath: 'DBCluster.AssociatedRoles',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.AssociatedRoles', props);
    return resource.getResponseField('DBCluster.AssociatedRoles') as unknown as shapes.DocDbdbClusterRole[];
  }

  public get clusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.ClusterCreateTime'),
        outputPath: 'DBCluster.ClusterCreateTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.ClusterCreateTime', props);
    return resource.getResponseField('DBCluster.ClusterCreateTime') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.EnabledCloudwatchLogsExports'),
        outputPath: 'DBCluster.EnabledCloudwatchLogsExports',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBCluster.EnabledCloudwatchLogsExports') as unknown as string[];
  }

  public get deletionProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StartDBCluster.DBCluster.DeletionProtection'),
        outputPath: 'DBCluster.DeletionProtection',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBResponsesStopDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbStopDbClusterMessage) {
  }

  public get dbCluster(): DocDBResponsesStopDbClusterDbCluster {
    return new DocDBResponsesStopDbClusterDbCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DocDBResponsesStopDbClusterDbCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DocDbStopDbClusterMessage) {
  }

  public get availabilityZones(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.AvailabilityZones'),
        outputPath: 'DBCluster.AvailabilityZones',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.AvailabilityZones', props);
    return resource.getResponseField('DBCluster.AvailabilityZones') as unknown as string[];
  }

  public get backupRetentionPeriod(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.BackupRetentionPeriod'),
        outputPath: 'DBCluster.BackupRetentionPeriod',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.BackupRetentionPeriod', props);
    return resource.getResponseField('DBCluster.BackupRetentionPeriod') as unknown as number;
  }

  public get dbClusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.DBClusterIdentifier'),
        outputPath: 'DBCluster.DBClusterIdentifier',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.DBClusterIdentifier', props);
    return resource.getResponseField('DBCluster.DBClusterIdentifier') as unknown as string;
  }

  public get dbClusterParameterGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.DBClusterParameterGroup'),
        outputPath: 'DBCluster.DBClusterParameterGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.DBClusterParameterGroup', props);
    return resource.getResponseField('DBCluster.DBClusterParameterGroup') as unknown as string;
  }

  public get dbSubnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.DBSubnetGroup'),
        outputPath: 'DBCluster.DBSubnetGroup',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.DBSubnetGroup', props);
    return resource.getResponseField('DBCluster.DBSubnetGroup') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.Status'),
        outputPath: 'DBCluster.Status',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.Status', props);
    return resource.getResponseField('DBCluster.Status') as unknown as string;
  }

  public get percentProgress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.PercentProgress'),
        outputPath: 'DBCluster.PercentProgress',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.PercentProgress', props);
    return resource.getResponseField('DBCluster.PercentProgress') as unknown as string;
  }

  public get earliestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.EarliestRestorableTime'),
        outputPath: 'DBCluster.EarliestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.EarliestRestorableTime', props);
    return resource.getResponseField('DBCluster.EarliestRestorableTime') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.Endpoint'),
        outputPath: 'DBCluster.Endpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.Endpoint', props);
    return resource.getResponseField('DBCluster.Endpoint') as unknown as string;
  }

  public get readerEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.ReaderEndpoint'),
        outputPath: 'DBCluster.ReaderEndpoint',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.ReaderEndpoint', props);
    return resource.getResponseField('DBCluster.ReaderEndpoint') as unknown as string;
  }

  public get multiAz(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.MultiAZ'),
        outputPath: 'DBCluster.MultiAZ',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.MultiAZ', props);
    return resource.getResponseField('DBCluster.MultiAZ') as unknown as boolean;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.Engine'),
        outputPath: 'DBCluster.Engine',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.Engine', props);
    return resource.getResponseField('DBCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.EngineVersion'),
        outputPath: 'DBCluster.EngineVersion',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.EngineVersion', props);
    return resource.getResponseField('DBCluster.EngineVersion') as unknown as string;
  }

  public get latestRestorableTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.LatestRestorableTime'),
        outputPath: 'DBCluster.LatestRestorableTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.LatestRestorableTime', props);
    return resource.getResponseField('DBCluster.LatestRestorableTime') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.Port'),
        outputPath: 'DBCluster.Port',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.Port', props);
    return resource.getResponseField('DBCluster.Port') as unknown as number;
  }

  public get masterUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.MasterUsername'),
        outputPath: 'DBCluster.MasterUsername',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.MasterUsername', props);
    return resource.getResponseField('DBCluster.MasterUsername') as unknown as string;
  }

  public get preferredBackupWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.PreferredBackupWindow'),
        outputPath: 'DBCluster.PreferredBackupWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.PreferredBackupWindow', props);
    return resource.getResponseField('DBCluster.PreferredBackupWindow') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.PreferredMaintenanceWindow'),
        outputPath: 'DBCluster.PreferredMaintenanceWindow',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get dbClusterMembers(): shapes.DocDbdbClusterMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.DBClusterMembers'),
        outputPath: 'DBCluster.DBClusterMembers',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.DBClusterMembers', props);
    return resource.getResponseField('DBCluster.DBClusterMembers') as unknown as shapes.DocDbdbClusterMember[];
  }

  public get vpcSecurityGroups(): shapes.DocDbVpcSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.VpcSecurityGroups'),
        outputPath: 'DBCluster.VpcSecurityGroups',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.VpcSecurityGroups', props);
    return resource.getResponseField('DBCluster.VpcSecurityGroups') as unknown as shapes.DocDbVpcSecurityGroupMembership[];
  }

  public get hostedZoneId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.HostedZoneId'),
        outputPath: 'DBCluster.HostedZoneId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.HostedZoneId', props);
    return resource.getResponseField('DBCluster.HostedZoneId') as unknown as string;
  }

  public get storageEncrypted(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.StorageEncrypted'),
        outputPath: 'DBCluster.StorageEncrypted',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.StorageEncrypted', props);
    return resource.getResponseField('DBCluster.StorageEncrypted') as unknown as boolean;
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.KmsKeyId'),
        outputPath: 'DBCluster.KmsKeyId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.KmsKeyId', props);
    return resource.getResponseField('DBCluster.KmsKeyId') as unknown as string;
  }

  public get dbClusterResourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.DbClusterResourceId'),
        outputPath: 'DBCluster.DbClusterResourceId',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.DbClusterResourceId', props);
    return resource.getResponseField('DBCluster.DbClusterResourceId') as unknown as string;
  }

  public get dbClusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.DBClusterArn'),
        outputPath: 'DBCluster.DBClusterArn',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.DBClusterArn', props);
    return resource.getResponseField('DBCluster.DBClusterArn') as unknown as string;
  }

  public get associatedRoles(): shapes.DocDbdbClusterRole[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.AssociatedRoles'),
        outputPath: 'DBCluster.AssociatedRoles',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.AssociatedRoles', props);
    return resource.getResponseField('DBCluster.AssociatedRoles') as unknown as shapes.DocDbdbClusterRole[];
  }

  public get clusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.ClusterCreateTime'),
        outputPath: 'DBCluster.ClusterCreateTime',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.ClusterCreateTime', props);
    return resource.getResponseField('DBCluster.ClusterCreateTime') as unknown as string;
  }

  public get enabledCloudwatchLogsExports(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.EnabledCloudwatchLogsExports'),
        outputPath: 'DBCluster.EnabledCloudwatchLogsExports',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBCluster.EnabledCloudwatchLogsExports') as unknown as string[];
  }

  public get deletionProtection(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopDbCluster',
        service: 'DocDB',
        physicalResourceId: cr.PhysicalResourceId.of('DocDB.StopDBCluster.DBCluster.DeletionProtection'),
        outputPath: 'DBCluster.DeletionProtection',
        parameters: {
          DBClusterIdentifier: this.__input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StopDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

