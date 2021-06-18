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

  public applyPendingMaintenanceAction(input: shapes.DocDbApplyPendingMaintenanceActionMessage): DocDBApplyPendingMaintenanceAction {
    return new DocDBApplyPendingMaintenanceAction(this, 'ApplyPendingMaintenanceAction', this.__resources, input);
  }

  public copyDbClusterParameterGroup(input: shapes.DocDbCopyDbClusterParameterGroupMessage): DocDBCopyDbClusterParameterGroup {
    return new DocDBCopyDbClusterParameterGroup(this, 'CopyDbClusterParameterGroup', this.__resources, input);
  }

  public copyDbClusterSnapshot(input: shapes.DocDbCopyDbClusterSnapshotMessage): DocDBCopyDbClusterSnapshot {
    return new DocDBCopyDbClusterSnapshot(this, 'CopyDbClusterSnapshot', this.__resources, input);
  }

  public createDbCluster(input: shapes.DocDbCreateDbClusterMessage): DocDBCreateDbCluster {
    return new DocDBCreateDbCluster(this, 'CreateDbCluster', this.__resources, input);
  }

  public createDbClusterParameterGroup(input: shapes.DocDbCreateDbClusterParameterGroupMessage): DocDBCreateDbClusterParameterGroup {
    return new DocDBCreateDbClusterParameterGroup(this, 'CreateDbClusterParameterGroup', this.__resources, input);
  }

  public createDbClusterSnapshot(input: shapes.DocDbCreateDbClusterSnapshotMessage): DocDBCreateDbClusterSnapshot {
    return new DocDBCreateDbClusterSnapshot(this, 'CreateDbClusterSnapshot', this.__resources, input);
  }

  public createDbInstance(input: shapes.DocDbCreateDbInstanceMessage): DocDBCreateDbInstance {
    return new DocDBCreateDbInstance(this, 'CreateDbInstance', this.__resources, input);
  }

  public createDbSubnetGroup(input: shapes.DocDbCreateDbSubnetGroupMessage): DocDBCreateDbSubnetGroup {
    return new DocDBCreateDbSubnetGroup(this, 'CreateDbSubnetGroup', this.__resources, input);
  }

  public deleteDbCluster(input: shapes.DocDbDeleteDbClusterMessage): DocDBDeleteDbCluster {
    return new DocDBDeleteDbCluster(this, 'DeleteDbCluster', this.__resources, input);
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

  public deleteDbClusterSnapshot(input: shapes.DocDbDeleteDbClusterSnapshotMessage): DocDBDeleteDbClusterSnapshot {
    return new DocDBDeleteDbClusterSnapshot(this, 'DeleteDbClusterSnapshot', this.__resources, input);
  }

  public deleteDbInstance(input: shapes.DocDbDeleteDbInstanceMessage): DocDBDeleteDbInstance {
    return new DocDBDeleteDbInstance(this, 'DeleteDbInstance', this.__resources, input);
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

  public describeCertificates(input: shapes.DocDbDescribeCertificatesMessage): DocDBDescribeCertificates {
    return new DocDBDescribeCertificates(this, 'DescribeCertificates', this.__resources, input);
  }

  public describeDbClusterParameterGroups(input: shapes.DocDbDescribeDbClusterParameterGroupsMessage): DocDBDescribeDbClusterParameterGroups {
    return new DocDBDescribeDbClusterParameterGroups(this, 'DescribeDbClusterParameterGroups', this.__resources, input);
  }

  public describeDbClusterParameters(input: shapes.DocDbDescribeDbClusterParametersMessage): DocDBDescribeDbClusterParameters {
    return new DocDBDescribeDbClusterParameters(this, 'DescribeDbClusterParameters', this.__resources, input);
  }

  public describeDbClusterSnapshotAttributes(input: shapes.DocDbDescribeDbClusterSnapshotAttributesMessage): DocDBDescribeDbClusterSnapshotAttributes {
    return new DocDBDescribeDbClusterSnapshotAttributes(this, 'DescribeDbClusterSnapshotAttributes', this.__resources, input);
  }

  public describeDbClusterSnapshots(input: shapes.DocDbDescribeDbClusterSnapshotsMessage): DocDBDescribeDbClusterSnapshots {
    return new DocDBDescribeDbClusterSnapshots(this, 'DescribeDbClusterSnapshots', this.__resources, input);
  }

  public describeDbClusters(input: shapes.DocDbDescribeDbClustersMessage): DocDBDescribeDbClusters {
    return new DocDBDescribeDbClusters(this, 'DescribeDbClusters', this.__resources, input);
  }

  public describeDbEngineVersions(input: shapes.DocDbDescribeDbEngineVersionsMessage): DocDBDescribeDbEngineVersions {
    return new DocDBDescribeDbEngineVersions(this, 'DescribeDbEngineVersions', this.__resources, input);
  }

  public describeDbInstances(input: shapes.DocDbDescribeDbInstancesMessage): DocDBDescribeDbInstances {
    return new DocDBDescribeDbInstances(this, 'DescribeDbInstances', this.__resources, input);
  }

  public describeDbSubnetGroups(input: shapes.DocDbDescribeDbSubnetGroupsMessage): DocDBDescribeDbSubnetGroups {
    return new DocDBDescribeDbSubnetGroups(this, 'DescribeDbSubnetGroups', this.__resources, input);
  }

  public describeEngineDefaultClusterParameters(input: shapes.DocDbDescribeEngineDefaultClusterParametersMessage): DocDBDescribeEngineDefaultClusterParameters {
    return new DocDBDescribeEngineDefaultClusterParameters(this, 'DescribeEngineDefaultClusterParameters', this.__resources, input);
  }

  public describeEventCategories(input: shapes.DocDbDescribeEventCategoriesMessage): DocDBDescribeEventCategories {
    return new DocDBDescribeEventCategories(this, 'DescribeEventCategories', this.__resources, input);
  }

  public describeEvents(input: shapes.DocDbDescribeEventsMessage): DocDBDescribeEvents {
    return new DocDBDescribeEvents(this, 'DescribeEvents', this.__resources, input);
  }

  public describeOrderableDbInstanceOptions(input: shapes.DocDbDescribeOrderableDbInstanceOptionsMessage): DocDBDescribeOrderableDbInstanceOptions {
    return new DocDBDescribeOrderableDbInstanceOptions(this, 'DescribeOrderableDbInstanceOptions', this.__resources, input);
  }

  public describePendingMaintenanceActions(input: shapes.DocDbDescribePendingMaintenanceActionsMessage): DocDBDescribePendingMaintenanceActions {
    return new DocDBDescribePendingMaintenanceActions(this, 'DescribePendingMaintenanceActions', this.__resources, input);
  }

  public failoverDbCluster(input: shapes.DocDbFailoverDbClusterMessage): DocDBFailoverDbCluster {
    return new DocDBFailoverDbCluster(this, 'FailoverDbCluster', this.__resources, input);
  }

  public listTagsForResource(input: shapes.DocDbListTagsForResourceMessage): DocDBListTagsForResource {
    return new DocDBListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public modifyDbCluster(input: shapes.DocDbModifyDbClusterMessage): DocDBModifyDbCluster {
    return new DocDBModifyDbCluster(this, 'ModifyDbCluster', this.__resources, input);
  }

  public modifyDbClusterParameterGroup(input: shapes.DocDbModifyDbClusterParameterGroupMessage): DocDBModifyDbClusterParameterGroup {
    return new DocDBModifyDbClusterParameterGroup(this, 'ModifyDbClusterParameterGroup', this.__resources, input);
  }

  public modifyDbClusterSnapshotAttribute(input: shapes.DocDbModifyDbClusterSnapshotAttributeMessage): DocDBModifyDbClusterSnapshotAttribute {
    return new DocDBModifyDbClusterSnapshotAttribute(this, 'ModifyDbClusterSnapshotAttribute', this.__resources, input);
  }

  public modifyDbInstance(input: shapes.DocDbModifyDbInstanceMessage): DocDBModifyDbInstance {
    return new DocDBModifyDbInstance(this, 'ModifyDbInstance', this.__resources, input);
  }

  public modifyDbSubnetGroup(input: shapes.DocDbModifyDbSubnetGroupMessage): DocDBModifyDbSubnetGroup {
    return new DocDBModifyDbSubnetGroup(this, 'ModifyDbSubnetGroup', this.__resources, input);
  }

  public rebootDbInstance(input: shapes.DocDbRebootDbInstanceMessage): DocDBRebootDbInstance {
    return new DocDBRebootDbInstance(this, 'RebootDbInstance', this.__resources, input);
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

  public resetDbClusterParameterGroup(input: shapes.DocDbResetDbClusterParameterGroupMessage): DocDBResetDbClusterParameterGroup {
    return new DocDBResetDbClusterParameterGroup(this, 'ResetDbClusterParameterGroup', this.__resources, input);
  }

  public restoreDbClusterFromSnapshot(input: shapes.DocDbRestoreDbClusterFromSnapshotMessage): DocDBRestoreDbClusterFromSnapshot {
    return new DocDBRestoreDbClusterFromSnapshot(this, 'RestoreDbClusterFromSnapshot', this.__resources, input);
  }

  public restoreDbClusterToPointInTime(input: shapes.DocDbRestoreDbClusterToPointInTimeMessage): DocDBRestoreDbClusterToPointInTime {
    return new DocDBRestoreDbClusterToPointInTime(this, 'RestoreDbClusterToPointInTime', this.__resources, input);
  }

  public startDbCluster(input: shapes.DocDbStartDbClusterMessage): DocDBStartDbCluster {
    return new DocDBStartDbCluster(this, 'StartDbCluster', this.__resources, input);
  }

  public stopDbCluster(input: shapes.DocDbStopDbClusterMessage): DocDBStopDbCluster {
    return new DocDBStopDbCluster(this, 'StopDbCluster', this.__resources, input);
  }

}

export class DocDBApplyPendingMaintenanceAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbApplyPendingMaintenanceActionMessage) {
    super(scope, id);
  }

  public get resourcePendingMaintenanceActions(): DocDBApplyPendingMaintenanceActionResourcePendingMaintenanceActions {
    return new DocDBApplyPendingMaintenanceActionResourcePendingMaintenanceActions(this, 'ResourcePendingMaintenanceActions', this.__resources, this.input);
  }

}

export class DocDBApplyPendingMaintenanceActionResourcePendingMaintenanceActions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbApplyPendingMaintenanceActionMessage) {
    super(scope, id);
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
          ResourceIdentifier: this.input.resourceIdentifier,
          ApplyAction: this.input.applyAction,
          OptInType: this.input.optInType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ApplyPendingMaintenanceAction.ResourcePendingMaintenanceActions.ResourceIdentifier', props);
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
          ResourceIdentifier: this.input.resourceIdentifier,
          ApplyAction: this.input.applyAction,
          OptInType: this.input.optInType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ApplyPendingMaintenanceAction.ResourcePendingMaintenanceActions.PendingMaintenanceActionDetails', props);
    return resource.getResponseField('ResourcePendingMaintenanceActions.PendingMaintenanceActionDetails') as unknown as shapes.DocDbPendingMaintenanceAction[];
  }

}

export class DocDBCopyDbClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCopyDbClusterParameterGroupMessage) {
    super(scope, id);
  }

  public get dbClusterParameterGroup(): DocDBCopyDbClusterParameterGroupDbClusterParameterGroup {
    return new DocDBCopyDbClusterParameterGroupDbClusterParameterGroup(this, 'DbClusterParameterGroup', this.__resources, this.input);
  }

}

export class DocDBCopyDbClusterParameterGroupDbClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCopyDbClusterParameterGroupMessage) {
    super(scope, id);
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
          SourceDBClusterParameterGroupIdentifier: this.input.sourceDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupIdentifier: this.input.targetDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupDescription: this.input.targetDbClusterParameterGroupDescription,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupName', props);
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
          SourceDBClusterParameterGroupIdentifier: this.input.sourceDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupIdentifier: this.input.targetDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupDescription: this.input.targetDbClusterParameterGroupDescription,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterParameterGroup.DBClusterParameterGroup.DBParameterGroupFamily', props);
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
          SourceDBClusterParameterGroupIdentifier: this.input.sourceDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupIdentifier: this.input.targetDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupDescription: this.input.targetDbClusterParameterGroupDescription,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterParameterGroup.DBClusterParameterGroup.Description', props);
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
          SourceDBClusterParameterGroupIdentifier: this.input.sourceDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupIdentifier: this.input.targetDbClusterParameterGroupIdentifier,
          TargetDBClusterParameterGroupDescription: this.input.targetDbClusterParameterGroupDescription,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupArn', props);
    return resource.getResponseField('DBClusterParameterGroup.DBClusterParameterGroupArn') as unknown as string;
  }

}

export class DocDBCopyDbClusterSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCopyDbClusterSnapshotMessage) {
    super(scope, id);
  }

  public get dbClusterSnapshot(): DocDBCopyDbClusterSnapshotDbClusterSnapshot {
    return new DocDBCopyDbClusterSnapshotDbClusterSnapshot(this, 'DbClusterSnapshot', this.__resources, this.input);
  }

}

export class DocDBCopyDbClusterSnapshotDbClusterSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCopyDbClusterSnapshotMessage) {
    super(scope, id);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.AvailabilityZones', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotIdentifier', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.DBClusterIdentifier', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.SnapshotCreateTime', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.Engine', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.Status', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.Port', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.VpcId', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.ClusterCreateTime', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.MasterUsername', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.EngineVersion', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.SnapshotType', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.PercentProgress', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.StorageEncrypted', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.KmsKeyId', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotArn', props);
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
          SourceDBClusterSnapshotIdentifier: this.input.sourceDbClusterSnapshotIdentifier,
          TargetDBClusterSnapshotIdentifier: this.input.targetDbClusterSnapshotIdentifier,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          CopyTags: this.input.copyTags,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopyDBClusterSnapshot.DBClusterSnapshot.SourceDBClusterSnapshotArn', props);
    return resource.getResponseField('DBClusterSnapshot.SourceDBClusterSnapshotArn') as unknown as string;
  }

}

export class DocDBCreateDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbClusterMessage) {
    super(scope, id);
  }

  public get dbCluster(): DocDBCreateDbClusterDbCluster {
    return new DocDBCreateDbClusterDbCluster(this, 'DbCluster', this.__resources, this.input);
  }

}

export class DocDBCreateDbClusterDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbClusterMessage) {
    super(scope, id);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.AvailabilityZones', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.BackupRetentionPeriod', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.DBClusterIdentifier', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.DBClusterParameterGroup', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.DBSubnetGroup', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.Status', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.PercentProgress', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.EarliestRestorableTime', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.Endpoint', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.ReaderEndpoint', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.MultiAZ', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.Engine', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.EngineVersion', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.LatestRestorableTime', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.Port', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.MasterUsername', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.PreferredBackupWindow', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.PreferredMaintenanceWindow', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.DBClusterMembers', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.VpcSecurityGroups', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.HostedZoneId', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.StorageEncrypted', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.KmsKeyId', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.DbClusterResourceId', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.DBClusterArn', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.AssociatedRoles', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.ClusterCreateTime', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
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
          AvailabilityZones: this.input.availabilityZones,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          MasterUsername: this.input.masterUsername,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Tags: this.input.tags,
          StorageEncrypted: this.input.storageEncrypted,
          KmsKeyId: this.input.kmsKeyId,
          PreSignedUrl: this.input.preSignedUrl,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBCreateDbClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbClusterParameterGroupMessage) {
    super(scope, id);
  }

  public get dbClusterParameterGroup(): DocDBCreateDbClusterParameterGroupDbClusterParameterGroup {
    return new DocDBCreateDbClusterParameterGroupDbClusterParameterGroup(this, 'DbClusterParameterGroup', this.__resources, this.input);
  }

}

export class DocDBCreateDbClusterParameterGroupDbClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbClusterParameterGroupMessage) {
    super(scope, id);
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
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          DBParameterGroupFamily: this.input.dbParameterGroupFamily,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupName', props);
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
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          DBParameterGroupFamily: this.input.dbParameterGroupFamily,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterParameterGroup.DBClusterParameterGroup.DBParameterGroupFamily', props);
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
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          DBParameterGroupFamily: this.input.dbParameterGroupFamily,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterParameterGroup.DBClusterParameterGroup.Description', props);
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
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          DBParameterGroupFamily: this.input.dbParameterGroupFamily,
          Description: this.input.description,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterParameterGroup.DBClusterParameterGroup.DBClusterParameterGroupArn', props);
    return resource.getResponseField('DBClusterParameterGroup.DBClusterParameterGroupArn') as unknown as string;
  }

}

export class DocDBCreateDbClusterSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbClusterSnapshotMessage) {
    super(scope, id);
  }

  public get dbClusterSnapshot(): DocDBCreateDbClusterSnapshotDbClusterSnapshot {
    return new DocDBCreateDbClusterSnapshotDbClusterSnapshot(this, 'DbClusterSnapshot', this.__resources, this.input);
  }

}

export class DocDBCreateDbClusterSnapshotDbClusterSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbClusterSnapshotMessage) {
    super(scope, id);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.AvailabilityZones', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotIdentifier', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.DBClusterIdentifier', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.SnapshotCreateTime', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.Engine', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.Status', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.Port', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.VpcId', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.ClusterCreateTime', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.MasterUsername', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.EngineVersion', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.SnapshotType', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.PercentProgress', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.StorageEncrypted', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.KmsKeyId', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotArn', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBClusterSnapshot.DBClusterSnapshot.SourceDBClusterSnapshotArn', props);
    return resource.getResponseField('DBClusterSnapshot.SourceDBClusterSnapshotArn') as unknown as string;
  }

}

export class DocDBCreateDbInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbInstanceMessage) {
    super(scope, id);
  }

  public get dbInstance(): DocDBCreateDbInstanceDbInstance {
    return new DocDBCreateDbInstanceDbInstance(this, 'DbInstance', this.__resources, this.input);
  }

}

export class DocDBCreateDbInstanceDbInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DBInstanceIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DBInstanceClass', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.Engine', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DBInstanceStatus', props);
    return resource.getResponseField('DBInstance.DBInstanceStatus') as unknown as string;
  }

  public get endpoint(): DocDBCreateDbInstanceDbInstanceEndpoint {
    return new DocDBCreateDbInstanceDbInstanceEndpoint(this, 'Endpoint', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.InstanceCreateTime', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PreferredBackupWindow', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.BackupRetentionPeriod', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.VpcSecurityGroups', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.AvailabilityZone', props);
    return resource.getResponseField('DBInstance.AvailabilityZone') as unknown as string;
  }

  public get dbSubnetGroup(): DocDBCreateDbInstanceDbInstanceDbSubnetGroup {
    return new DocDBCreateDbInstanceDbInstanceDbSubnetGroup(this, 'DbSubnetGroup', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBInstance.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): DocDBCreateDbInstanceDbInstancePendingModifiedValues {
    return new DocDBCreateDbInstanceDbInstancePendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.LatestRestorableTime', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.EngineVersion', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.AutoMinorVersionUpgrade', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PubliclyAccessible', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.StatusInfos', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DBClusterIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.StorageEncrypted', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.KmsKeyId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DbiResourceId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.CACertificateIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PromotionTier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DBInstanceArn', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBInstance.EnabledCloudwatchLogsExports') as unknown as string[];
  }

}

export class DocDBCreateDbInstanceDbInstanceEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.Endpoint.Address', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.Endpoint.Port', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.Endpoint.HostedZoneId', props);
    return resource.getResponseField('DBInstance.Endpoint.HostedZoneId') as unknown as string;
  }

}

export class DocDBCreateDbInstanceDbInstanceDbSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DBSubnetGroup.VpcId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DBSubnetGroup.Subnets', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBCreateDbInstanceDbInstancePendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.Port', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.MultiAZ', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.EngineVersion', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.LicenseModel', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.Iops', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.StorageType', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBSubnetGroupName') as unknown as string;
  }

  public get pendingCloudwatchLogsExports(): DocDBCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {
    return new DocDBCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(this, 'PendingCloudwatchLogsExports', this.__resources, this.input);
  }

}

export class DocDBCreateDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          Engine: this.input.engine,
          AvailabilityZone: this.input.availabilityZone,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          Tags: this.input.tags,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable') as unknown as string[];
  }

}

export class DocDBCreateDbSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbSubnetGroupMessage) {
    super(scope, id);
  }

  public get dbSubnetGroup(): DocDBCreateDbSubnetGroupDbSubnetGroup {
    return new DocDBCreateDbSubnetGroupDbSubnetGroup(this, 'DbSubnetGroup', this.__resources, this.input);
  }

}

export class DocDBCreateDbSubnetGroupDbSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbCreateDbSubnetGroupMessage) {
    super(scope, id);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBSubnetGroup.DBSubnetGroup.DBSubnetGroupName', props);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBSubnetGroup.DBSubnetGroup.DBSubnetGroupDescription', props);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBSubnetGroup.DBSubnetGroup.VpcId', props);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBSubnetGroup.DBSubnetGroup.SubnetGroupStatus', props);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBSubnetGroup.DBSubnetGroup.Subnets', props);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDBSubnetGroup.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBDeleteDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDeleteDbClusterMessage) {
    super(scope, id);
  }

  public get dbCluster(): DocDBDeleteDbClusterDbCluster {
    return new DocDBDeleteDbClusterDbCluster(this, 'DbCluster', this.__resources, this.input);
  }

}

export class DocDBDeleteDbClusterDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDeleteDbClusterMessage) {
    super(scope, id);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.AvailabilityZones', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.BackupRetentionPeriod', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.DBClusterIdentifier', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.DBClusterParameterGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.DBSubnetGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.Status', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.PercentProgress', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.EarliestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.Endpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.ReaderEndpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.MultiAZ', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.Engine', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.EngineVersion', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.LatestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.Port', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.MasterUsername', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.PreferredBackupWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.PreferredMaintenanceWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.DBClusterMembers', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.VpcSecurityGroups', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.HostedZoneId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.StorageEncrypted', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.KmsKeyId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.DbClusterResourceId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.DBClusterArn', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.AssociatedRoles', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.ClusterCreateTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SkipFinalSnapshot: this.input.skipFinalSnapshot,
          FinalDBSnapshotIdentifier: this.input.finalDbSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBDeleteDbClusterSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDeleteDbClusterSnapshotMessage) {
    super(scope, id);
  }

  public get dbClusterSnapshot(): DocDBDeleteDbClusterSnapshotDbClusterSnapshot {
    return new DocDBDeleteDbClusterSnapshotDbClusterSnapshot(this, 'DbClusterSnapshot', this.__resources, this.input);
  }

}

export class DocDBDeleteDbClusterSnapshotDbClusterSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDeleteDbClusterSnapshotMessage) {
    super(scope, id);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.AvailabilityZones', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotIdentifier', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.DBClusterIdentifier', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.SnapshotCreateTime', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.Engine', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.Status', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.Port', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.VpcId', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.ClusterCreateTime', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.MasterUsername', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.EngineVersion', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.SnapshotType', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.PercentProgress', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.StorageEncrypted', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.KmsKeyId', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.DBClusterSnapshotArn', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBClusterSnapshot.DBClusterSnapshot.SourceDBClusterSnapshotArn', props);
    return resource.getResponseField('DBClusterSnapshot.SourceDBClusterSnapshotArn') as unknown as string;
  }

}

export class DocDBDeleteDbInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDeleteDbInstanceMessage) {
    super(scope, id);
  }

  public get dbInstance(): DocDBDeleteDbInstanceDbInstance {
    return new DocDBDeleteDbInstanceDbInstance(this, 'DbInstance', this.__resources, this.input);
  }

}

export class DocDBDeleteDbInstanceDbInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDeleteDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DBInstanceIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DBInstanceClass', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.Engine', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DBInstanceStatus', props);
    return resource.getResponseField('DBInstance.DBInstanceStatus') as unknown as string;
  }

  public get endpoint(): DocDBDeleteDbInstanceDbInstanceEndpoint {
    return new DocDBDeleteDbInstanceDbInstanceEndpoint(this, 'Endpoint', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.InstanceCreateTime', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PreferredBackupWindow', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.BackupRetentionPeriod', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.VpcSecurityGroups', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.AvailabilityZone', props);
    return resource.getResponseField('DBInstance.AvailabilityZone') as unknown as string;
  }

  public get dbSubnetGroup(): DocDBDeleteDbInstanceDbInstanceDbSubnetGroup {
    return new DocDBDeleteDbInstanceDbInstanceDbSubnetGroup(this, 'DbSubnetGroup', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBInstance.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): DocDBDeleteDbInstanceDbInstancePendingModifiedValues {
    return new DocDBDeleteDbInstanceDbInstancePendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.LatestRestorableTime', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.EngineVersion', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.AutoMinorVersionUpgrade', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PubliclyAccessible', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.StatusInfos', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DBClusterIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.StorageEncrypted', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.KmsKeyId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DbiResourceId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.CACertificateIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PromotionTier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DBInstanceArn', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBInstance.EnabledCloudwatchLogsExports') as unknown as string[];
  }

}

export class DocDBDeleteDbInstanceDbInstanceEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDeleteDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.Endpoint.Address', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.Endpoint.Port', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.Endpoint.HostedZoneId', props);
    return resource.getResponseField('DBInstance.Endpoint.HostedZoneId') as unknown as string;
  }

}

export class DocDBDeleteDbInstanceDbInstanceDbSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDeleteDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DBSubnetGroup.VpcId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DBSubnetGroup.Subnets', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBDeleteDbInstanceDbInstancePendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDeleteDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.Port', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.MultiAZ', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.EngineVersion', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.LicenseModel', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.Iops', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.StorageType', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBSubnetGroupName') as unknown as string;
  }

  public get pendingCloudwatchLogsExports(): DocDBDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {
    return new DocDBDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(this, 'PendingCloudwatchLogsExports', this.__resources, this.input);
  }

}

export class DocDBDeleteDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDeleteDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable') as unknown as string[];
  }

}

export class DocDBDescribeCertificates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeCertificatesMessage) {
    super(scope, id);
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
          CertificateIdentifier: this.input.certificateIdentifier,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificates.Certificates', props);
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
          CertificateIdentifier: this.input.certificateIdentifier,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCertificates.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class DocDBDescribeDbClusterParameterGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeDbClusterParameterGroupsMessage) {
    super(scope, id);
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
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBClusterParameterGroups.Marker', props);
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
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBClusterParameterGroups.DBClusterParameterGroups', props);
    return resource.getResponseField('DBClusterParameterGroups') as unknown as shapes.DocDbdbClusterParameterGroup[];
  }

}

export class DocDBDescribeDbClusterParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeDbClusterParametersMessage) {
    super(scope, id);
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
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          Source: this.input.source,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBClusterParameters.Parameters', props);
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
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          Source: this.input.source,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBClusterParameters.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class DocDBDescribeDbClusterSnapshotAttributes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeDbClusterSnapshotAttributesMessage) {
    super(scope, id);
  }

  public get dbClusterSnapshotAttributesResult(): DocDBDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult {
    return new DocDBDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult(this, 'DbClusterSnapshotAttributesResult', this.__resources, this.input);
  }

}

export class DocDBDescribeDbClusterSnapshotAttributesDbClusterSnapshotAttributesResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeDbClusterSnapshotAttributesMessage) {
    super(scope, id);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBClusterSnapshotAttributes.DBClusterSnapshotAttributesResult.DBClusterSnapshotIdentifier', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBClusterSnapshotAttributes.DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes', props);
    return resource.getResponseField('DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes') as unknown as shapes.DocDbdbClusterSnapshotAttribute[];
  }

}

export class DocDBDescribeDbClusterSnapshots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeDbClusterSnapshotsMessage) {
    super(scope, id);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          SnapshotType: this.input.snapshotType,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
          IncludeShared: this.input.includeShared,
          IncludePublic: this.input.includePublic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBClusterSnapshots.Marker', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          SnapshotType: this.input.snapshotType,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
          IncludeShared: this.input.includeShared,
          IncludePublic: this.input.includePublic,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBClusterSnapshots.DBClusterSnapshots', props);
    return resource.getResponseField('DBClusterSnapshots') as unknown as shapes.DocDbdbClusterSnapshot[];
  }

}

export class DocDBDescribeDbClusters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeDbClustersMessage) {
    super(scope, id);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBClusters.Marker', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBClusters.DBClusters', props);
    return resource.getResponseField('DBClusters') as unknown as shapes.DocDbdbCluster[];
  }

}

export class DocDBDescribeDbEngineVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeDbEngineVersionsMessage) {
    super(scope, id);
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
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          DBParameterGroupFamily: this.input.dbParameterGroupFamily,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
          DefaultOnly: this.input.defaultOnly,
          ListSupportedCharacterSets: this.input.listSupportedCharacterSets,
          ListSupportedTimezones: this.input.listSupportedTimezones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBEngineVersions.Marker', props);
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
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          DBParameterGroupFamily: this.input.dbParameterGroupFamily,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
          DefaultOnly: this.input.defaultOnly,
          ListSupportedCharacterSets: this.input.listSupportedCharacterSets,
          ListSupportedTimezones: this.input.listSupportedTimezones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBEngineVersions.DBEngineVersions', props);
    return resource.getResponseField('DBEngineVersions') as unknown as shapes.DocDbdbEngineVersion[];
  }

}

export class DocDBDescribeDbInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeDbInstancesMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBInstances.Marker', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBInstances.DBInstances', props);
    return resource.getResponseField('DBInstances') as unknown as shapes.DocDbdbInstance[];
  }

}

export class DocDBDescribeDbSubnetGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeDbSubnetGroupsMessage) {
    super(scope, id);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBSubnetGroups.Marker', props);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDBSubnetGroups.DBSubnetGroups', props);
    return resource.getResponseField('DBSubnetGroups') as unknown as shapes.DocDbdbSubnetGroup[];
  }

}

export class DocDBDescribeEngineDefaultClusterParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeEngineDefaultClusterParametersMessage) {
    super(scope, id);
  }

  public get engineDefaults(): DocDBDescribeEngineDefaultClusterParametersEngineDefaults {
    return new DocDBDescribeEngineDefaultClusterParametersEngineDefaults(this, 'EngineDefaults', this.__resources, this.input);
  }

}

export class DocDBDescribeEngineDefaultClusterParametersEngineDefaults extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeEngineDefaultClusterParametersMessage) {
    super(scope, id);
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
          DBParameterGroupFamily: this.input.dbParameterGroupFamily,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEngineDefaultClusterParameters.EngineDefaults.DBParameterGroupFamily', props);
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
          DBParameterGroupFamily: this.input.dbParameterGroupFamily,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEngineDefaultClusterParameters.EngineDefaults.Marker', props);
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
          DBParameterGroupFamily: this.input.dbParameterGroupFamily,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEngineDefaultClusterParameters.EngineDefaults.Parameters', props);
    return resource.getResponseField('EngineDefaults.Parameters') as unknown as shapes.DocDbParameter[];
  }

}

export class DocDBDescribeEventCategories extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeEventCategoriesMessage) {
    super(scope, id);
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
          SourceType: this.input.sourceType,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEventCategories.EventCategoriesMapList', props);
    return resource.getResponseField('EventCategoriesMapList') as unknown as shapes.DocDbEventCategoriesMap[];
  }

}

export class DocDBDescribeEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeEventsMessage) {
    super(scope, id);
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
          SourceIdentifier: this.input.sourceIdentifier,
          SourceType: this.input.sourceType,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Duration: this.input.duration,
          EventCategories: this.input.eventCategories,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.Marker', props);
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
          SourceIdentifier: this.input.sourceIdentifier,
          SourceType: this.input.sourceType,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Duration: this.input.duration,
          EventCategories: this.input.eventCategories,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.Events', props);
    return resource.getResponseField('Events') as unknown as shapes.DocDbEvent[];
  }

}

export class DocDBDescribeOrderableDbInstanceOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribeOrderableDbInstanceOptionsMessage) {
    super(scope, id);
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
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          DBInstanceClass: this.input.dbInstanceClass,
          LicenseModel: this.input.licenseModel,
          Vpc: this.input.vpc,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrderableDBInstanceOptions.OrderableDBInstanceOptions', props);
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
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          DBInstanceClass: this.input.dbInstanceClass,
          LicenseModel: this.input.licenseModel,
          Vpc: this.input.vpc,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOrderableDBInstanceOptions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class DocDBDescribePendingMaintenanceActions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbDescribePendingMaintenanceActionsMessage) {
    super(scope, id);
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
          ResourceIdentifier: this.input.resourceIdentifier,
          Filters: this.input.filters,
          Marker: this.input.marker,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePendingMaintenanceActions.PendingMaintenanceActions', props);
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
          ResourceIdentifier: this.input.resourceIdentifier,
          Filters: this.input.filters,
          Marker: this.input.marker,
          MaxRecords: this.input.maxRecords,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePendingMaintenanceActions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class DocDBFailoverDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbFailoverDbClusterMessage) {
    super(scope, id);
  }

  public get dbCluster(): DocDBFailoverDbClusterDbCluster {
    return new DocDBFailoverDbClusterDbCluster(this, 'DbCluster', this.__resources, this.input);
  }

}

export class DocDBFailoverDbClusterDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbFailoverDbClusterMessage) {
    super(scope, id);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.AvailabilityZones', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.BackupRetentionPeriod', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.DBClusterIdentifier', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.DBClusterParameterGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.DBSubnetGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.Status', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.PercentProgress', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.EarliestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.Endpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.ReaderEndpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.MultiAZ', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.Engine', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.EngineVersion', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.LatestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.Port', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.MasterUsername', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.PreferredBackupWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.PreferredMaintenanceWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.DBClusterMembers', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.VpcSecurityGroups', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.HostedZoneId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.StorageEncrypted', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.KmsKeyId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.DbClusterResourceId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.DBClusterArn', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.AssociatedRoles', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.ClusterCreateTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          TargetDBInstanceIdentifier: this.input.targetDbInstanceIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbListTagsForResourceMessage) {
    super(scope, id);
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
          ResourceName: this.input.resourceName,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.DocDbTag[];
  }

}

export class DocDBModifyDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbClusterMessage) {
    super(scope, id);
  }

  public get dbCluster(): DocDBModifyDbClusterDbCluster {
    return new DocDBModifyDbClusterDbCluster(this, 'DbCluster', this.__resources, this.input);
  }

}

export class DocDBModifyDbClusterDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbClusterMessage) {
    super(scope, id);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.AvailabilityZones', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.BackupRetentionPeriod', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.DBClusterIdentifier', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.DBClusterParameterGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.DBSubnetGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.Status', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.PercentProgress', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.EarliestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.Endpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.ReaderEndpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.MultiAZ', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.Engine', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.EngineVersion', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.LatestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.Port', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.MasterUsername', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.PreferredBackupWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.PreferredMaintenanceWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.DBClusterMembers', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.VpcSecurityGroups', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.HostedZoneId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.StorageEncrypted', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.KmsKeyId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.DbClusterResourceId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.DBClusterArn', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.AssociatedRoles', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.ClusterCreateTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          NewDBClusterIdentifier: this.input.newDbClusterIdentifier,
          ApplyImmediately: this.input.applyImmediately,
          BackupRetentionPeriod: this.input.backupRetentionPeriod,
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Port: this.input.port,
          MasterUserPassword: this.input.masterUserPassword,
          PreferredBackupWindow: this.input.preferredBackupWindow,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          CloudwatchLogsExportConfiguration: {
            EnableLogTypes: this.input.cloudwatchLogsExportConfiguration?.enableLogTypes,
            DisableLogTypes: this.input.cloudwatchLogsExportConfiguration?.disableLogTypes,
          },
          EngineVersion: this.input.engineVersion,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBModifyDbClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbClusterParameterGroupMessage) {
    super(scope, id);
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
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBClusterParameterGroup.DBClusterParameterGroupName', props);
    return resource.getResponseField('DBClusterParameterGroupName') as unknown as string;
  }

}

export class DocDBModifyDbClusterSnapshotAttribute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbClusterSnapshotAttributeMessage) {
    super(scope, id);
  }

  public get dbClusterSnapshotAttributesResult(): DocDBModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult {
    return new DocDBModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult(this, 'DbClusterSnapshotAttributesResult', this.__resources, this.input);
  }

}

export class DocDBModifyDbClusterSnapshotAttributeDbClusterSnapshotAttributesResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbClusterSnapshotAttributeMessage) {
    super(scope, id);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          AttributeName: this.input.attributeName,
          ValuesToAdd: this.input.valuesToAdd,
          ValuesToRemove: this.input.valuesToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBClusterSnapshotAttribute.DBClusterSnapshotAttributesResult.DBClusterSnapshotIdentifier', props);
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
          DBClusterSnapshotIdentifier: this.input.dbClusterSnapshotIdentifier,
          AttributeName: this.input.attributeName,
          ValuesToAdd: this.input.valuesToAdd,
          ValuesToRemove: this.input.valuesToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBClusterSnapshotAttribute.DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes', props);
    return resource.getResponseField('DBClusterSnapshotAttributesResult.DBClusterSnapshotAttributes') as unknown as shapes.DocDbdbClusterSnapshotAttribute[];
  }

}

export class DocDBModifyDbInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbInstanceMessage) {
    super(scope, id);
  }

  public get dbInstance(): DocDBModifyDbInstanceDbInstance {
    return new DocDBModifyDbInstanceDbInstance(this, 'DbInstance', this.__resources, this.input);
  }

}

export class DocDBModifyDbInstanceDbInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DBInstanceIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DBInstanceClass', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.Engine', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DBInstanceStatus', props);
    return resource.getResponseField('DBInstance.DBInstanceStatus') as unknown as string;
  }

  public get endpoint(): DocDBModifyDbInstanceDbInstanceEndpoint {
    return new DocDBModifyDbInstanceDbInstanceEndpoint(this, 'Endpoint', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.InstanceCreateTime', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PreferredBackupWindow', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.BackupRetentionPeriod', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.VpcSecurityGroups', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.AvailabilityZone', props);
    return resource.getResponseField('DBInstance.AvailabilityZone') as unknown as string;
  }

  public get dbSubnetGroup(): DocDBModifyDbInstanceDbInstanceDbSubnetGroup {
    return new DocDBModifyDbInstanceDbInstanceDbSubnetGroup(this, 'DbSubnetGroup', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBInstance.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): DocDBModifyDbInstanceDbInstancePendingModifiedValues {
    return new DocDBModifyDbInstanceDbInstancePendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.LatestRestorableTime', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.EngineVersion', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.AutoMinorVersionUpgrade', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PubliclyAccessible', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.StatusInfos', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DBClusterIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.StorageEncrypted', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.KmsKeyId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DbiResourceId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.CACertificateIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PromotionTier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DBInstanceArn', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBInstance.EnabledCloudwatchLogsExports') as unknown as string[];
  }

}

export class DocDBModifyDbInstanceDbInstanceEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.Endpoint.Address', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.Endpoint.Port', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.Endpoint.HostedZoneId', props);
    return resource.getResponseField('DBInstance.Endpoint.HostedZoneId') as unknown as string;
  }

}

export class DocDBModifyDbInstanceDbInstanceDbSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DBSubnetGroup.VpcId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DBSubnetGroup.Subnets', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBModifyDbInstanceDbInstancePendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.Port', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.MultiAZ', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.EngineVersion', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.LicenseModel', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.Iops', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.StorageType', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBSubnetGroupName') as unknown as string;
  }

  public get pendingCloudwatchLogsExports(): DocDBModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {
    return new DocDBModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(this, 'PendingCloudwatchLogsExports', this.__resources, this.input);
  }

}

export class DocDBModifyDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          DBInstanceClass: this.input.dbInstanceClass,
          ApplyImmediately: this.input.applyImmediately,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          NewDBInstanceIdentifier: this.input.newDbInstanceIdentifier,
          CACertificateIdentifier: this.input.caCertificateIdentifier,
          PromotionTier: this.input.promotionTier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable') as unknown as string[];
  }

}

export class DocDBModifyDbSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbSubnetGroupMessage) {
    super(scope, id);
  }

  public get dbSubnetGroup(): DocDBModifyDbSubnetGroupDbSubnetGroup {
    return new DocDBModifyDbSubnetGroupDbSubnetGroup(this, 'DbSubnetGroup', this.__resources, this.input);
  }

}

export class DocDBModifyDbSubnetGroupDbSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbModifyDbSubnetGroupMessage) {
    super(scope, id);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBSubnetGroup.DBSubnetGroup.DBSubnetGroupName', props);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBSubnetGroup.DBSubnetGroup.DBSubnetGroupDescription', props);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBSubnetGroup.DBSubnetGroup.VpcId', props);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBSubnetGroup.DBSubnetGroup.SubnetGroupStatus', props);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBSubnetGroup.DBSubnetGroup.Subnets', props);
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
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          DBSubnetGroupDescription: this.input.dbSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyDBSubnetGroup.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBRebootDbInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbRebootDbInstanceMessage) {
    super(scope, id);
  }

  public get dbInstance(): DocDBRebootDbInstanceDbInstance {
    return new DocDBRebootDbInstanceDbInstance(this, 'DbInstance', this.__resources, this.input);
  }

}

export class DocDBRebootDbInstanceDbInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbRebootDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DBInstanceIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DBInstanceClass', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.Engine', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DBInstanceStatus', props);
    return resource.getResponseField('DBInstance.DBInstanceStatus') as unknown as string;
  }

  public get endpoint(): DocDBRebootDbInstanceDbInstanceEndpoint {
    return new DocDBRebootDbInstanceDbInstanceEndpoint(this, 'Endpoint', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.InstanceCreateTime', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PreferredBackupWindow', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.BackupRetentionPeriod', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.VpcSecurityGroups', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.AvailabilityZone', props);
    return resource.getResponseField('DBInstance.AvailabilityZone') as unknown as string;
  }

  public get dbSubnetGroup(): DocDBRebootDbInstanceDbInstanceDbSubnetGroup {
    return new DocDBRebootDbInstanceDbInstanceDbSubnetGroup(this, 'DbSubnetGroup', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PreferredMaintenanceWindow', props);
    return resource.getResponseField('DBInstance.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): DocDBRebootDbInstanceDbInstancePendingModifiedValues {
    return new DocDBRebootDbInstanceDbInstancePendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.LatestRestorableTime', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.EngineVersion', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.AutoMinorVersionUpgrade', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PubliclyAccessible', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.StatusInfos', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DBClusterIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.StorageEncrypted', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.KmsKeyId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DbiResourceId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.CACertificateIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PromotionTier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DBInstanceArn', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.EnabledCloudwatchLogsExports', props);
    return resource.getResponseField('DBInstance.EnabledCloudwatchLogsExports') as unknown as string[];
  }

}

export class DocDBRebootDbInstanceDbInstanceEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbRebootDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.Endpoint.Address', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.Endpoint.Port', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.Endpoint.HostedZoneId', props);
    return resource.getResponseField('DBInstance.Endpoint.HostedZoneId') as unknown as string;
  }

}

export class DocDBRebootDbInstanceDbInstanceDbSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbRebootDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupName', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupDescription', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DBSubnetGroup.VpcId', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DBSubnetGroup.SubnetGroupStatus', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DBSubnetGroup.Subnets', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.DBSubnetGroup.DBSubnetGroupArn', props);
    return resource.getResponseField('DBInstance.DBSubnetGroup.DBSubnetGroupArn') as unknown as string;
  }

}

export class DocDBRebootDbInstanceDbInstancePendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbRebootDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.DBInstanceClass', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.AllocatedStorage', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.MasterUserPassword', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.Port', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.BackupRetentionPeriod', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.MultiAZ', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.EngineVersion', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.LicenseModel', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.Iops', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.DBInstanceIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.StorageType', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.CACertificateIdentifier', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.DBSubnetGroupName', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.DBSubnetGroupName') as unknown as string;
  }

  public get pendingCloudwatchLogsExports(): DocDBRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports {
    return new DocDBRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports(this, 'PendingCloudwatchLogsExports', this.__resources, this.input);
  }

}

export class DocDBRebootDbInstanceDbInstancePendingModifiedValuesPendingCloudwatchLogsExports extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbRebootDbInstanceMessage) {
    super(scope, id);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToEnable', props);
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
          DBInstanceIdentifier: this.input.dbInstanceIdentifier,
          ForceFailover: this.input.forceFailover,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootDBInstance.DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable', props);
    return resource.getResponseField('DBInstance.PendingModifiedValues.PendingCloudwatchLogsExports.LogTypesToDisable') as unknown as string[];
  }

}

export class DocDBResetDbClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbResetDbClusterParameterGroupMessage) {
    super(scope, id);
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
          DBClusterParameterGroupName: this.input.dbClusterParameterGroupName,
          ResetAllParameters: this.input.resetAllParameters,
          Parameters: this.input.parameters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetDBClusterParameterGroup.DBClusterParameterGroupName', props);
    return resource.getResponseField('DBClusterParameterGroupName') as unknown as string;
  }

}

export class DocDBRestoreDbClusterFromSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbRestoreDbClusterFromSnapshotMessage) {
    super(scope, id);
  }

  public get dbCluster(): DocDBRestoreDbClusterFromSnapshotDbCluster {
    return new DocDBRestoreDbClusterFromSnapshotDbCluster(this, 'DbCluster', this.__resources, this.input);
  }

}

export class DocDBRestoreDbClusterFromSnapshotDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbRestoreDbClusterFromSnapshotMessage) {
    super(scope, id);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.AvailabilityZones', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.BackupRetentionPeriod', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.DBClusterIdentifier', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.DBClusterParameterGroup', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.DBSubnetGroup', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.Status', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.PercentProgress', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.EarliestRestorableTime', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.Endpoint', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.ReaderEndpoint', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.MultiAZ', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.Engine', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.EngineVersion', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.LatestRestorableTime', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.Port', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.MasterUsername', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.PreferredBackupWindow', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.PreferredMaintenanceWindow', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.DBClusterMembers', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.VpcSecurityGroups', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.HostedZoneId', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.StorageEncrypted', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.KmsKeyId', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.DbClusterResourceId', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.DBClusterArn', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.AssociatedRoles', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.ClusterCreateTime', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.EnabledCloudwatchLogsExports', props);
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
          AvailabilityZones: this.input.availabilityZones,
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SnapshotIdentifier: this.input.snapshotIdentifier,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterFromSnapshot.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBRestoreDbClusterToPointInTime extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbRestoreDbClusterToPointInTimeMessage) {
    super(scope, id);
  }

  public get dbCluster(): DocDBRestoreDbClusterToPointInTimeDbCluster {
    return new DocDBRestoreDbClusterToPointInTimeDbCluster(this, 'DbCluster', this.__resources, this.input);
  }

}

export class DocDBRestoreDbClusterToPointInTimeDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbRestoreDbClusterToPointInTimeMessage) {
    super(scope, id);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.AvailabilityZones', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.BackupRetentionPeriod', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.DBClusterIdentifier', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.DBClusterParameterGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.DBSubnetGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.Status', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.PercentProgress', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.EarliestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.Endpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.ReaderEndpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.MultiAZ', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.Engine', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.EngineVersion', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.LatestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.Port', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.MasterUsername', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.PreferredBackupWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.PreferredMaintenanceWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.DBClusterMembers', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.VpcSecurityGroups', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.HostedZoneId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.StorageEncrypted', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.KmsKeyId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.DbClusterResourceId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.DBClusterArn', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.AssociatedRoles', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.ClusterCreateTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.EnabledCloudwatchLogsExports', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
          SourceDBClusterIdentifier: this.input.sourceDbClusterIdentifier,
          RestoreToTime: this.input.restoreToTime,
          UseLatestRestorableTime: this.input.useLatestRestorableTime,
          Port: this.input.port,
          DBSubnetGroupName: this.input.dbSubnetGroupName,
          VpcSecurityGroupIds: this.input.vpcSecurityGroupIds,
          Tags: this.input.tags,
          KmsKeyId: this.input.kmsKeyId,
          EnableCloudwatchLogsExports: this.input.enableCloudwatchLogsExports,
          DeletionProtection: this.input.deletionProtection,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RestoreDBClusterToPointInTime.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBStartDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbStartDbClusterMessage) {
    super(scope, id);
  }

  public get dbCluster(): DocDBStartDbClusterDbCluster {
    return new DocDBStartDbClusterDbCluster(this, 'DbCluster', this.__resources, this.input);
  }

}

export class DocDBStartDbClusterDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbStartDbClusterMessage) {
    super(scope, id);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.AvailabilityZones', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.BackupRetentionPeriod', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.DBClusterIdentifier', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.DBClusterParameterGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.DBSubnetGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.Status', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.PercentProgress', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.EarliestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.Endpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.ReaderEndpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.MultiAZ', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.Engine', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.EngineVersion', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.LatestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.Port', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.MasterUsername', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.PreferredBackupWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.PreferredMaintenanceWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.DBClusterMembers', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.VpcSecurityGroups', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.HostedZoneId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.StorageEncrypted', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.KmsKeyId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.DbClusterResourceId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.DBClusterArn', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.AssociatedRoles', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.ClusterCreateTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

export class DocDBStopDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbStopDbClusterMessage) {
    super(scope, id);
  }

  public get dbCluster(): DocDBStopDbClusterDbCluster {
    return new DocDBStopDbClusterDbCluster(this, 'DbCluster', this.__resources, this.input);
  }

}

export class DocDBStopDbClusterDbCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DocDbStopDbClusterMessage) {
    super(scope, id);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.AvailabilityZones', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.BackupRetentionPeriod', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.DBClusterIdentifier', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.DBClusterParameterGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.DBSubnetGroup', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.Status', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.PercentProgress', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.EarliestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.Endpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.ReaderEndpoint', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.MultiAZ', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.Engine', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.EngineVersion', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.LatestRestorableTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.Port', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.MasterUsername', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.PreferredBackupWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.PreferredMaintenanceWindow', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.DBClusterMembers', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.VpcSecurityGroups', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.HostedZoneId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.StorageEncrypted', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.KmsKeyId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.DbClusterResourceId', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.DBClusterArn', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.AssociatedRoles', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.ClusterCreateTime', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.EnabledCloudwatchLogsExports', props);
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
          DBClusterIdentifier: this.input.dbClusterIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StopDBCluster.DBCluster.DeletionProtection', props);
    return resource.getResponseField('DBCluster.DeletionProtection') as unknown as boolean;
  }

}

