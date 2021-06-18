import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ElastiCacheClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTagsToResource(input: shapes.ElastiCacheAddTagsToResourceMessage): ElastiCacheAddTagsToResource {
    return new ElastiCacheAddTagsToResource(this, 'AddTagsToResource', this.__resources, input);
  }

  public authorizeCacheSecurityGroupIngress(input: shapes.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage): ElastiCacheAuthorizeCacheSecurityGroupIngress {
    return new ElastiCacheAuthorizeCacheSecurityGroupIngress(this, 'AuthorizeCacheSecurityGroupIngress', this.__resources, input);
  }

  public batchApplyUpdateAction(input: shapes.ElastiCacheBatchApplyUpdateActionMessage): ElastiCacheBatchApplyUpdateAction {
    return new ElastiCacheBatchApplyUpdateAction(this, 'BatchApplyUpdateAction', this.__resources, input);
  }

  public batchStopUpdateAction(input: shapes.ElastiCacheBatchStopUpdateActionMessage): ElastiCacheBatchStopUpdateAction {
    return new ElastiCacheBatchStopUpdateAction(this, 'BatchStopUpdateAction', this.__resources, input);
  }

  public completeMigration(input: shapes.ElastiCacheCompleteMigrationMessage): ElastiCacheCompleteMigration {
    return new ElastiCacheCompleteMigration(this, 'CompleteMigration', this.__resources, input);
  }

  public copySnapshot(input: shapes.ElastiCacheCopySnapshotMessage): ElastiCacheCopySnapshot {
    return new ElastiCacheCopySnapshot(this, 'CopySnapshot', this.__resources, input);
  }

  public createCacheCluster(input: shapes.ElastiCacheCreateCacheClusterMessage): ElastiCacheCreateCacheCluster {
    return new ElastiCacheCreateCacheCluster(this, 'CreateCacheCluster', this.__resources, input);
  }

  public createCacheParameterGroup(input: shapes.ElastiCacheCreateCacheParameterGroupMessage): ElastiCacheCreateCacheParameterGroup {
    return new ElastiCacheCreateCacheParameterGroup(this, 'CreateCacheParameterGroup', this.__resources, input);
  }

  public createCacheSecurityGroup(input: shapes.ElastiCacheCreateCacheSecurityGroupMessage): ElastiCacheCreateCacheSecurityGroup {
    return new ElastiCacheCreateCacheSecurityGroup(this, 'CreateCacheSecurityGroup', this.__resources, input);
  }

  public createCacheSubnetGroup(input: shapes.ElastiCacheCreateCacheSubnetGroupMessage): ElastiCacheCreateCacheSubnetGroup {
    return new ElastiCacheCreateCacheSubnetGroup(this, 'CreateCacheSubnetGroup', this.__resources, input);
  }

  public createGlobalReplicationGroup(input: shapes.ElastiCacheCreateGlobalReplicationGroupMessage): ElastiCacheCreateGlobalReplicationGroup {
    return new ElastiCacheCreateGlobalReplicationGroup(this, 'CreateGlobalReplicationGroup', this.__resources, input);
  }

  public createReplicationGroup(input: shapes.ElastiCacheCreateReplicationGroupMessage): ElastiCacheCreateReplicationGroup {
    return new ElastiCacheCreateReplicationGroup(this, 'CreateReplicationGroup', this.__resources, input);
  }

  public createSnapshot(input: shapes.ElastiCacheCreateSnapshotMessage): ElastiCacheCreateSnapshot {
    return new ElastiCacheCreateSnapshot(this, 'CreateSnapshot', this.__resources, input);
  }

  public createUser(input: shapes.ElastiCacheCreateUserMessage): ElastiCacheCreateUser {
    return new ElastiCacheCreateUser(this, 'CreateUser', this.__resources, input);
  }

  public createUserGroup(input: shapes.ElastiCacheCreateUserGroupMessage): ElastiCacheCreateUserGroup {
    return new ElastiCacheCreateUserGroup(this, 'CreateUserGroup', this.__resources, input);
  }

  public decreaseNodeGroupsInGlobalReplicationGroup(input: shapes.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage): ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroup {
    return new ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroup(this, 'DecreaseNodeGroupsInGlobalReplicationGroup', this.__resources, input);
  }

  public decreaseReplicaCount(input: shapes.ElastiCacheDecreaseReplicaCountMessage): ElastiCacheDecreaseReplicaCount {
    return new ElastiCacheDecreaseReplicaCount(this, 'DecreaseReplicaCount', this.__resources, input);
  }

  public deleteCacheCluster(input: shapes.ElastiCacheDeleteCacheClusterMessage): ElastiCacheDeleteCacheCluster {
    return new ElastiCacheDeleteCacheCluster(this, 'DeleteCacheCluster', this.__resources, input);
  }

  public deleteCacheParameterGroup(input: shapes.ElastiCacheDeleteCacheParameterGroupMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheParameterGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheParameterGroup'),
        parameters: {
          CacheParameterGroupName: input.cacheParameterGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCacheParameterGroup', props);
  }

  public deleteCacheSecurityGroup(input: shapes.ElastiCacheDeleteCacheSecurityGroupMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheSecurityGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheSecurityGroup'),
        parameters: {
          CacheSecurityGroupName: input.cacheSecurityGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCacheSecurityGroup', props);
  }

  public deleteCacheSubnetGroup(input: shapes.ElastiCacheDeleteCacheSubnetGroupMessage): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheSubnetGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheSubnetGroup'),
        parameters: {
          CacheSubnetGroupName: input.cacheSubnetGroupName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteCacheSubnetGroup', props);
  }

  public deleteGlobalReplicationGroup(input: shapes.ElastiCacheDeleteGlobalReplicationGroupMessage): ElastiCacheDeleteGlobalReplicationGroup {
    return new ElastiCacheDeleteGlobalReplicationGroup(this, 'DeleteGlobalReplicationGroup', this.__resources, input);
  }

  public deleteReplicationGroup(input: shapes.ElastiCacheDeleteReplicationGroupMessage): ElastiCacheDeleteReplicationGroup {
    return new ElastiCacheDeleteReplicationGroup(this, 'DeleteReplicationGroup', this.__resources, input);
  }

  public deleteSnapshot(input: shapes.ElastiCacheDeleteSnapshotMessage): ElastiCacheDeleteSnapshot {
    return new ElastiCacheDeleteSnapshot(this, 'DeleteSnapshot', this.__resources, input);
  }

  public deleteUser(input: shapes.ElastiCacheDeleteUserMessage): ElastiCacheDeleteUser {
    return new ElastiCacheDeleteUser(this, 'DeleteUser', this.__resources, input);
  }

  public deleteUserGroup(input: shapes.ElastiCacheDeleteUserGroupMessage): ElastiCacheDeleteUserGroup {
    return new ElastiCacheDeleteUserGroup(this, 'DeleteUserGroup', this.__resources, input);
  }

  public describeCacheClusters(input: shapes.ElastiCacheDescribeCacheClustersMessage): ElastiCacheDescribeCacheClusters {
    return new ElastiCacheDescribeCacheClusters(this, 'DescribeCacheClusters', this.__resources, input);
  }

  public describeCacheEngineVersions(input: shapes.ElastiCacheDescribeCacheEngineVersionsMessage): ElastiCacheDescribeCacheEngineVersions {
    return new ElastiCacheDescribeCacheEngineVersions(this, 'DescribeCacheEngineVersions', this.__resources, input);
  }

  public describeCacheParameterGroups(input: shapes.ElastiCacheDescribeCacheParameterGroupsMessage): ElastiCacheDescribeCacheParameterGroups {
    return new ElastiCacheDescribeCacheParameterGroups(this, 'DescribeCacheParameterGroups', this.__resources, input);
  }

  public describeCacheParameters(input: shapes.ElastiCacheDescribeCacheParametersMessage): ElastiCacheDescribeCacheParameters {
    return new ElastiCacheDescribeCacheParameters(this, 'DescribeCacheParameters', this.__resources, input);
  }

  public describeCacheSecurityGroups(input: shapes.ElastiCacheDescribeCacheSecurityGroupsMessage): ElastiCacheDescribeCacheSecurityGroups {
    return new ElastiCacheDescribeCacheSecurityGroups(this, 'DescribeCacheSecurityGroups', this.__resources, input);
  }

  public describeCacheSubnetGroups(input: shapes.ElastiCacheDescribeCacheSubnetGroupsMessage): ElastiCacheDescribeCacheSubnetGroups {
    return new ElastiCacheDescribeCacheSubnetGroups(this, 'DescribeCacheSubnetGroups', this.__resources, input);
  }

  public describeEngineDefaultParameters(input: shapes.ElastiCacheDescribeEngineDefaultParametersMessage): ElastiCacheDescribeEngineDefaultParameters {
    return new ElastiCacheDescribeEngineDefaultParameters(this, 'DescribeEngineDefaultParameters', this.__resources, input);
  }

  public describeEvents(input: shapes.ElastiCacheDescribeEventsMessage): ElastiCacheDescribeEvents {
    return new ElastiCacheDescribeEvents(this, 'DescribeEvents', this.__resources, input);
  }

  public describeGlobalReplicationGroups(input: shapes.ElastiCacheDescribeGlobalReplicationGroupsMessage): ElastiCacheDescribeGlobalReplicationGroups {
    return new ElastiCacheDescribeGlobalReplicationGroups(this, 'DescribeGlobalReplicationGroups', this.__resources, input);
  }

  public describeReplicationGroups(input: shapes.ElastiCacheDescribeReplicationGroupsMessage): ElastiCacheDescribeReplicationGroups {
    return new ElastiCacheDescribeReplicationGroups(this, 'DescribeReplicationGroups', this.__resources, input);
  }

  public describeReservedCacheNodes(input: shapes.ElastiCacheDescribeReservedCacheNodesMessage): ElastiCacheDescribeReservedCacheNodes {
    return new ElastiCacheDescribeReservedCacheNodes(this, 'DescribeReservedCacheNodes', this.__resources, input);
  }

  public describeReservedCacheNodesOfferings(input: shapes.ElastiCacheDescribeReservedCacheNodesOfferingsMessage): ElastiCacheDescribeReservedCacheNodesOfferings {
    return new ElastiCacheDescribeReservedCacheNodesOfferings(this, 'DescribeReservedCacheNodesOfferings', this.__resources, input);
  }

  public describeServiceUpdates(input: shapes.ElastiCacheDescribeServiceUpdatesMessage): ElastiCacheDescribeServiceUpdates {
    return new ElastiCacheDescribeServiceUpdates(this, 'DescribeServiceUpdates', this.__resources, input);
  }

  public describeSnapshots(input: shapes.ElastiCacheDescribeSnapshotsMessage): ElastiCacheDescribeSnapshots {
    return new ElastiCacheDescribeSnapshots(this, 'DescribeSnapshots', this.__resources, input);
  }

  public describeUpdateActions(input: shapes.ElastiCacheDescribeUpdateActionsMessage): ElastiCacheDescribeUpdateActions {
    return new ElastiCacheDescribeUpdateActions(this, 'DescribeUpdateActions', this.__resources, input);
  }

  public describeUserGroups(input: shapes.ElastiCacheDescribeUserGroupsMessage): ElastiCacheDescribeUserGroups {
    return new ElastiCacheDescribeUserGroups(this, 'DescribeUserGroups', this.__resources, input);
  }

  public describeUsers(input: shapes.ElastiCacheDescribeUsersMessage): ElastiCacheDescribeUsers {
    return new ElastiCacheDescribeUsers(this, 'DescribeUsers', this.__resources, input);
  }

  public disassociateGlobalReplicationGroup(input: shapes.ElastiCacheDisassociateGlobalReplicationGroupMessage): ElastiCacheDisassociateGlobalReplicationGroup {
    return new ElastiCacheDisassociateGlobalReplicationGroup(this, 'DisassociateGlobalReplicationGroup', this.__resources, input);
  }

  public failoverGlobalReplicationGroup(input: shapes.ElastiCacheFailoverGlobalReplicationGroupMessage): ElastiCacheFailoverGlobalReplicationGroup {
    return new ElastiCacheFailoverGlobalReplicationGroup(this, 'FailoverGlobalReplicationGroup', this.__resources, input);
  }

  public increaseNodeGroupsInGlobalReplicationGroup(input: shapes.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage): ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroup {
    return new ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroup(this, 'IncreaseNodeGroupsInGlobalReplicationGroup', this.__resources, input);
  }

  public increaseReplicaCount(input: shapes.ElastiCacheIncreaseReplicaCountMessage): ElastiCacheIncreaseReplicaCount {
    return new ElastiCacheIncreaseReplicaCount(this, 'IncreaseReplicaCount', this.__resources, input);
  }

  public listAllowedNodeTypeModifications(input: shapes.ElastiCacheListAllowedNodeTypeModificationsMessage): ElastiCacheListAllowedNodeTypeModifications {
    return new ElastiCacheListAllowedNodeTypeModifications(this, 'ListAllowedNodeTypeModifications', this.__resources, input);
  }

  public listTagsForResource(input: shapes.ElastiCacheListTagsForResourceMessage): ElastiCacheListTagsForResource {
    return new ElastiCacheListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public modifyCacheCluster(input: shapes.ElastiCacheModifyCacheClusterMessage): ElastiCacheModifyCacheCluster {
    return new ElastiCacheModifyCacheCluster(this, 'ModifyCacheCluster', this.__resources, input);
  }

  public modifyCacheParameterGroup(input: shapes.ElastiCacheModifyCacheParameterGroupMessage): ElastiCacheModifyCacheParameterGroup {
    return new ElastiCacheModifyCacheParameterGroup(this, 'ModifyCacheParameterGroup', this.__resources, input);
  }

  public modifyCacheSubnetGroup(input: shapes.ElastiCacheModifyCacheSubnetGroupMessage): ElastiCacheModifyCacheSubnetGroup {
    return new ElastiCacheModifyCacheSubnetGroup(this, 'ModifyCacheSubnetGroup', this.__resources, input);
  }

  public modifyGlobalReplicationGroup(input: shapes.ElastiCacheModifyGlobalReplicationGroupMessage): ElastiCacheModifyGlobalReplicationGroup {
    return new ElastiCacheModifyGlobalReplicationGroup(this, 'ModifyGlobalReplicationGroup', this.__resources, input);
  }

  public modifyReplicationGroup(input: shapes.ElastiCacheModifyReplicationGroupMessage): ElastiCacheModifyReplicationGroup {
    return new ElastiCacheModifyReplicationGroup(this, 'ModifyReplicationGroup', this.__resources, input);
  }

  public modifyReplicationGroupShardConfiguration(input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage): ElastiCacheModifyReplicationGroupShardConfiguration {
    return new ElastiCacheModifyReplicationGroupShardConfiguration(this, 'ModifyReplicationGroupShardConfiguration', this.__resources, input);
  }

  public modifyUser(input: shapes.ElastiCacheModifyUserMessage): ElastiCacheModifyUser {
    return new ElastiCacheModifyUser(this, 'ModifyUser', this.__resources, input);
  }

  public modifyUserGroup(input: shapes.ElastiCacheModifyUserGroupMessage): ElastiCacheModifyUserGroup {
    return new ElastiCacheModifyUserGroup(this, 'ModifyUserGroup', this.__resources, input);
  }

  public purchaseReservedCacheNodesOffering(input: shapes.ElastiCachePurchaseReservedCacheNodesOfferingMessage): ElastiCachePurchaseReservedCacheNodesOffering {
    return new ElastiCachePurchaseReservedCacheNodesOffering(this, 'PurchaseReservedCacheNodesOffering', this.__resources, input);
  }

  public rebalanceSlotsInGlobalReplicationGroup(input: shapes.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage): ElastiCacheRebalanceSlotsInGlobalReplicationGroup {
    return new ElastiCacheRebalanceSlotsInGlobalReplicationGroup(this, 'RebalanceSlotsInGlobalReplicationGroup', this.__resources, input);
  }

  public rebootCacheCluster(input: shapes.ElastiCacheRebootCacheClusterMessage): ElastiCacheRebootCacheCluster {
    return new ElastiCacheRebootCacheCluster(this, 'RebootCacheCluster', this.__resources, input);
  }

  public removeTagsFromResource(input: shapes.ElastiCacheRemoveTagsFromResourceMessage): ElastiCacheRemoveTagsFromResource {
    return new ElastiCacheRemoveTagsFromResource(this, 'RemoveTagsFromResource', this.__resources, input);
  }

  public resetCacheParameterGroup(input: shapes.ElastiCacheResetCacheParameterGroupMessage): ElastiCacheResetCacheParameterGroup {
    return new ElastiCacheResetCacheParameterGroup(this, 'ResetCacheParameterGroup', this.__resources, input);
  }

  public revokeCacheSecurityGroupIngress(input: shapes.ElastiCacheRevokeCacheSecurityGroupIngressMessage): ElastiCacheRevokeCacheSecurityGroupIngress {
    return new ElastiCacheRevokeCacheSecurityGroupIngress(this, 'RevokeCacheSecurityGroupIngress', this.__resources, input);
  }

  public startMigration(input: shapes.ElastiCacheStartMigrationMessage): ElastiCacheStartMigration {
    return new ElastiCacheStartMigration(this, 'StartMigration', this.__resources, input);
  }

  public testFailover(input: shapes.ElastiCacheTestFailoverMessage): ElastiCacheTestFailover {
    return new ElastiCacheTestFailover(this, 'TestFailover', this.__resources, input);
  }

}

export class ElastiCacheAddTagsToResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheAddTagsToResourceMessage) {
    super(scope, id);
  }

  public get tagList(): shapes.ElastiCacheTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTagsToResource',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.AddTagsToResource.TagList'),
        outputPath: 'TagList',
        parameters: {
          ResourceName: this.input.resourceName,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddTagsToResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.ElastiCacheTag[];
  }

}

export class ElastiCacheAuthorizeCacheSecurityGroupIngress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage) {
    super(scope, id);
  }

  public get cacheSecurityGroup(): ElastiCacheAuthorizeCacheSecurityGroupIngressCacheSecurityGroup {
    return new ElastiCacheAuthorizeCacheSecurityGroupIngressCacheSecurityGroup(this, 'CacheSecurityGroup', this.__resources, this.input);
  }

}

export class ElastiCacheAuthorizeCacheSecurityGroupIngressCacheSecurityGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage) {
    super(scope, id);
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'authorizeCacheSecurityGroupIngress',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.OwnerId'),
        outputPath: 'CacheSecurityGroup.OwnerId',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.OwnerId', props);
    return resource.getResponseField('CacheSecurityGroup.OwnerId') as unknown as string;
  }

  public get cacheSecurityGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'authorizeCacheSecurityGroupIngress',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.CacheSecurityGroupName'),
        outputPath: 'CacheSecurityGroup.CacheSecurityGroupName',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.CacheSecurityGroupName', props);
    return resource.getResponseField('CacheSecurityGroup.CacheSecurityGroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'authorizeCacheSecurityGroupIngress',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.Description'),
        outputPath: 'CacheSecurityGroup.Description',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.Description', props);
    return resource.getResponseField('CacheSecurityGroup.Description') as unknown as string;
  }

  public get ec2SecurityGroups(): shapes.ElastiCacheEc2SecurityGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'authorizeCacheSecurityGroupIngress',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.EC2SecurityGroups'),
        outputPath: 'CacheSecurityGroup.EC2SecurityGroups',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.EC2SecurityGroups', props);
    return resource.getResponseField('CacheSecurityGroup.EC2SecurityGroups') as unknown as shapes.ElastiCacheEc2SecurityGroup[];
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'authorizeCacheSecurityGroupIngress',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.ARN'),
        outputPath: 'CacheSecurityGroup.ARN',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.ARN', props);
    return resource.getResponseField('CacheSecurityGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheBatchApplyUpdateAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheBatchApplyUpdateActionMessage) {
    super(scope, id);
  }

  public get processedUpdateActions(): shapes.ElastiCacheProcessedUpdateAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchApplyUpdateAction',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.BatchApplyUpdateAction.ProcessedUpdateActions'),
        outputPath: 'ProcessedUpdateActions',
        parameters: {
          ReplicationGroupIds: this.input.replicationGroupIds,
          CacheClusterIds: this.input.cacheClusterIds,
          ServiceUpdateName: this.input.serviceUpdateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchApplyUpdateAction.ProcessedUpdateActions', props);
    return resource.getResponseField('ProcessedUpdateActions') as unknown as shapes.ElastiCacheProcessedUpdateAction[];
  }

  public get unprocessedUpdateActions(): shapes.ElastiCacheUnprocessedUpdateAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchApplyUpdateAction',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.BatchApplyUpdateAction.UnprocessedUpdateActions'),
        outputPath: 'UnprocessedUpdateActions',
        parameters: {
          ReplicationGroupIds: this.input.replicationGroupIds,
          CacheClusterIds: this.input.cacheClusterIds,
          ServiceUpdateName: this.input.serviceUpdateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchApplyUpdateAction.UnprocessedUpdateActions', props);
    return resource.getResponseField('UnprocessedUpdateActions') as unknown as shapes.ElastiCacheUnprocessedUpdateAction[];
  }

}

export class ElastiCacheBatchStopUpdateAction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheBatchStopUpdateActionMessage) {
    super(scope, id);
  }

  public get processedUpdateActions(): shapes.ElastiCacheProcessedUpdateAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchStopUpdateAction',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.BatchStopUpdateAction.ProcessedUpdateActions'),
        outputPath: 'ProcessedUpdateActions',
        parameters: {
          ReplicationGroupIds: this.input.replicationGroupIds,
          CacheClusterIds: this.input.cacheClusterIds,
          ServiceUpdateName: this.input.serviceUpdateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchStopUpdateAction.ProcessedUpdateActions', props);
    return resource.getResponseField('ProcessedUpdateActions') as unknown as shapes.ElastiCacheProcessedUpdateAction[];
  }

  public get unprocessedUpdateActions(): shapes.ElastiCacheUnprocessedUpdateAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchStopUpdateAction',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.BatchStopUpdateAction.UnprocessedUpdateActions'),
        outputPath: 'UnprocessedUpdateActions',
        parameters: {
          ReplicationGroupIds: this.input.replicationGroupIds,
          CacheClusterIds: this.input.cacheClusterIds,
          ServiceUpdateName: this.input.serviceUpdateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchStopUpdateAction.UnprocessedUpdateActions', props);
    return resource.getResponseField('UnprocessedUpdateActions') as unknown as shapes.ElastiCacheUnprocessedUpdateAction[];
  }

}

export class ElastiCacheCompleteMigration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCompleteMigrationMessage) {
    super(scope, id);
  }

  public get replicationGroup(): ElastiCacheCompleteMigrationReplicationGroup {
    return new ElastiCacheCompleteMigrationReplicationGroup(this, 'ReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheCompleteMigrationReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCompleteMigrationMessage) {
    super(scope, id);
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.ReplicationGroupId'),
        outputPath: 'ReplicationGroup.ReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.ReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.ReplicationGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.Description'),
        outputPath: 'ReplicationGroup.Description',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheCompleteMigrationReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheCompleteMigrationReplicationGroupGlobalReplicationGroupInfo(this, 'GlobalReplicationGroupInfo', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.Status'),
        outputPath: 'ReplicationGroup.Status',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValues {
    return new ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get memberClusters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.MemberClusters'),
        outputPath: 'ReplicationGroup.MemberClusters',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.MemberClusters', props);
    return resource.getResponseField('ReplicationGroup.MemberClusters') as unknown as string[];
  }

  public get nodeGroups(): shapes.ElastiCacheNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.NodeGroups'),
        outputPath: 'ReplicationGroup.NodeGroups',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.NodeGroups', props);
    return resource.getResponseField('ReplicationGroup.NodeGroups') as unknown as shapes.ElastiCacheNodeGroup[];
  }

  public get snapshottingClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.SnapshottingClusterId'),
        outputPath: 'ReplicationGroup.SnapshottingClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.SnapshottingClusterId', props);
    return resource.getResponseField('ReplicationGroup.SnapshottingClusterId') as unknown as string;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.AutomaticFailover'),
        outputPath: 'ReplicationGroup.AutomaticFailover',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.AutomaticFailover', props);
    return resource.getResponseField('ReplicationGroup.AutomaticFailover') as unknown as string;
  }

  public get multiAz(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.MultiAZ'),
        outputPath: 'ReplicationGroup.MultiAZ',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheCompleteMigrationReplicationGroupConfigurationEndpoint {
    return new ElastiCacheCompleteMigrationReplicationGroupConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.SnapshotRetentionLimit'),
        outputPath: 'ReplicationGroup.SnapshotRetentionLimit',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.SnapshotRetentionLimit', props);
    return resource.getResponseField('ReplicationGroup.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.SnapshotWindow'),
        outputPath: 'ReplicationGroup.SnapshotWindow',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.SnapshotWindow', props);
    return resource.getResponseField('ReplicationGroup.SnapshotWindow') as unknown as string;
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.ClusterEnabled'),
        outputPath: 'ReplicationGroup.ClusterEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('ReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.CacheNodeType'),
        outputPath: 'ReplicationGroup.CacheNodeType',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('ReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.AuthTokenEnabled'),
        outputPath: 'ReplicationGroup.AuthTokenEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.AuthTokenLastModifiedDate'),
        outputPath: 'ReplicationGroup.AuthTokenLastModifiedDate',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'ReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'ReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get memberClustersOutpostArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.MemberClustersOutpostArns'),
        outputPath: 'ReplicationGroup.MemberClustersOutpostArns',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.MemberClustersOutpostArns', props);
    return resource.getResponseField('ReplicationGroup.MemberClustersOutpostArns') as unknown as string[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.KmsKeyId'),
        outputPath: 'ReplicationGroup.KmsKeyId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.KmsKeyId', props);
    return resource.getResponseField('ReplicationGroup.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.ARN'),
        outputPath: 'ReplicationGroup.ARN',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.ARN', props);
    return resource.getResponseField('ReplicationGroup.ARN') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.UserGroupIds'),
        outputPath: 'ReplicationGroup.UserGroupIds',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheCompleteMigrationReplicationGroupGlobalReplicationGroupInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCompleteMigrationMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupMemberRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCompleteMigrationMessage) {
    super(scope, id);
  }

  public get primaryClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.PendingModifiedValues.PrimaryClusterId'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.PrimaryClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.PrimaryClusterId') as unknown as string;
  }

  public get automaticFailoverStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValuesResharding(this, 'Resharding', this.__resources, this.input);
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups(this, 'UserGroups', this.__resources, this.input);
  }

}

export class ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValuesResharding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCompleteMigrationMessage) {
    super(scope, id);
  }

  public get slotMigration(): ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration(this, 'SlotMigration', this.__resources, this.input);
  }

}

export class ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCompleteMigrationMessage) {
    super(scope, id);
  }

  public get progressPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCompleteMigrationMessage) {
    super(scope, id);
  }

  public get userGroupIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd') as unknown as string[];
  }

  public get userGroupIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheCompleteMigrationReplicationGroupConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCompleteMigrationMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.ConfigurationEndpoint.Address'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Address',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'completeMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CompleteMigration.ReplicationGroup.ConfigurationEndpoint.Port'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Port',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          Force: this.input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CompleteMigration.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheCopySnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCopySnapshotMessage) {
    super(scope, id);
  }

  public get snapshot(): ElastiCacheCopySnapshotSnapshot {
    return new ElastiCacheCopySnapshotSnapshot(this, 'Snapshot', this.__resources, this.input);
  }

}

export class ElastiCacheCopySnapshotSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCopySnapshotMessage) {
    super(scope, id);
  }

  public get snapshotName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.SnapshotName'),
        outputPath: 'Snapshot.SnapshotName',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.SnapshotName', props);
    return resource.getResponseField('Snapshot.SnapshotName') as unknown as string;
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.ReplicationGroupId'),
        outputPath: 'Snapshot.ReplicationGroupId',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.ReplicationGroupId', props);
    return resource.getResponseField('Snapshot.ReplicationGroupId') as unknown as string;
  }

  public get replicationGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.ReplicationGroupDescription'),
        outputPath: 'Snapshot.ReplicationGroupDescription',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.ReplicationGroupDescription', props);
    return resource.getResponseField('Snapshot.ReplicationGroupDescription') as unknown as string;
  }

  public get cacheClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.CacheClusterId'),
        outputPath: 'Snapshot.CacheClusterId',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.CacheClusterId', props);
    return resource.getResponseField('Snapshot.CacheClusterId') as unknown as string;
  }

  public get snapshotStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.SnapshotStatus'),
        outputPath: 'Snapshot.SnapshotStatus',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.SnapshotStatus', props);
    return resource.getResponseField('Snapshot.SnapshotStatus') as unknown as string;
  }

  public get snapshotSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.SnapshotSource'),
        outputPath: 'Snapshot.SnapshotSource',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.SnapshotSource', props);
    return resource.getResponseField('Snapshot.SnapshotSource') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.CacheNodeType'),
        outputPath: 'Snapshot.CacheNodeType',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.CacheNodeType', props);
    return resource.getResponseField('Snapshot.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.Engine'),
        outputPath: 'Snapshot.Engine',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.Engine', props);
    return resource.getResponseField('Snapshot.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.EngineVersion'),
        outputPath: 'Snapshot.EngineVersion',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.EngineVersion', props);
    return resource.getResponseField('Snapshot.EngineVersion') as unknown as string;
  }

  public get numCacheNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.NumCacheNodes'),
        outputPath: 'Snapshot.NumCacheNodes',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.NumCacheNodes', props);
    return resource.getResponseField('Snapshot.NumCacheNodes') as unknown as number;
  }

  public get preferredAvailabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.PreferredAvailabilityZone'),
        outputPath: 'Snapshot.PreferredAvailabilityZone',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.PreferredAvailabilityZone', props);
    return resource.getResponseField('Snapshot.PreferredAvailabilityZone') as unknown as string;
  }

  public get preferredOutpostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.PreferredOutpostArn'),
        outputPath: 'Snapshot.PreferredOutpostArn',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.PreferredOutpostArn', props);
    return resource.getResponseField('Snapshot.PreferredOutpostArn') as unknown as string;
  }

  public get cacheClusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.CacheClusterCreateTime'),
        outputPath: 'Snapshot.CacheClusterCreateTime',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.CacheClusterCreateTime', props);
    return resource.getResponseField('Snapshot.CacheClusterCreateTime') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.PreferredMaintenanceWindow'),
        outputPath: 'Snapshot.PreferredMaintenanceWindow',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Snapshot.PreferredMaintenanceWindow') as unknown as string;
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.TopicArn'),
        outputPath: 'Snapshot.TopicArn',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.TopicArn', props);
    return resource.getResponseField('Snapshot.TopicArn') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.Port'),
        outputPath: 'Snapshot.Port',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.Port', props);
    return resource.getResponseField('Snapshot.Port') as unknown as number;
  }

  public get cacheParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.CacheParameterGroupName'),
        outputPath: 'Snapshot.CacheParameterGroupName',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.CacheParameterGroupName', props);
    return resource.getResponseField('Snapshot.CacheParameterGroupName') as unknown as string;
  }

  public get cacheSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.CacheSubnetGroupName'),
        outputPath: 'Snapshot.CacheSubnetGroupName',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.CacheSubnetGroupName', props);
    return resource.getResponseField('Snapshot.CacheSubnetGroupName') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.VpcId'),
        outputPath: 'Snapshot.VpcId',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.VpcId', props);
    return resource.getResponseField('Snapshot.VpcId') as unknown as string;
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.AutoMinorVersionUpgrade'),
        outputPath: 'Snapshot.AutoMinorVersionUpgrade',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('Snapshot.AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.SnapshotRetentionLimit'),
        outputPath: 'Snapshot.SnapshotRetentionLimit',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.SnapshotRetentionLimit', props);
    return resource.getResponseField('Snapshot.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.SnapshotWindow'),
        outputPath: 'Snapshot.SnapshotWindow',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.SnapshotWindow', props);
    return resource.getResponseField('Snapshot.SnapshotWindow') as unknown as string;
  }

  public get numNodeGroups(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.NumNodeGroups'),
        outputPath: 'Snapshot.NumNodeGroups',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.NumNodeGroups', props);
    return resource.getResponseField('Snapshot.NumNodeGroups') as unknown as number;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.AutomaticFailover'),
        outputPath: 'Snapshot.AutomaticFailover',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.AutomaticFailover', props);
    return resource.getResponseField('Snapshot.AutomaticFailover') as unknown as string;
  }

  public get nodeSnapshots(): shapes.ElastiCacheNodeSnapshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.NodeSnapshots'),
        outputPath: 'Snapshot.NodeSnapshots',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.NodeSnapshots', props);
    return resource.getResponseField('Snapshot.NodeSnapshots') as unknown as shapes.ElastiCacheNodeSnapshot[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.KmsKeyId'),
        outputPath: 'Snapshot.KmsKeyId',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.KmsKeyId', props);
    return resource.getResponseField('Snapshot.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'copySnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CopySnapshot.Snapshot.ARN'),
        outputPath: 'Snapshot.ARN',
        parameters: {
          SourceSnapshotName: this.input.sourceSnapshotName,
          TargetSnapshotName: this.input.targetSnapshotName,
          TargetBucket: this.input.targetBucket,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CopySnapshot.Snapshot.ARN', props);
    return resource.getResponseField('Snapshot.ARN') as unknown as string;
  }

}

export class ElastiCacheCreateCacheCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheCluster(): ElastiCacheCreateCacheClusterCacheCluster {
    return new ElastiCacheCreateCacheClusterCacheCluster(this, 'CacheCluster', this.__resources, this.input);
  }

}

export class ElastiCacheCreateCacheClusterCacheCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.CacheClusterId'),
        outputPath: 'CacheCluster.CacheClusterId',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.CacheClusterId', props);
    return resource.getResponseField('CacheCluster.CacheClusterId') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheCreateCacheClusterCacheClusterConfigurationEndpoint {
    return new ElastiCacheCreateCacheClusterCacheClusterConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get clientDownloadLandingPage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.ClientDownloadLandingPage'),
        outputPath: 'CacheCluster.ClientDownloadLandingPage',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.ClientDownloadLandingPage', props);
    return resource.getResponseField('CacheCluster.ClientDownloadLandingPage') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.CacheNodeType'),
        outputPath: 'CacheCluster.CacheNodeType',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.CacheNodeType', props);
    return resource.getResponseField('CacheCluster.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.Engine'),
        outputPath: 'CacheCluster.Engine',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.Engine', props);
    return resource.getResponseField('CacheCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.EngineVersion'),
        outputPath: 'CacheCluster.EngineVersion',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.EngineVersion', props);
    return resource.getResponseField('CacheCluster.EngineVersion') as unknown as string;
  }

  public get cacheClusterStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.CacheClusterStatus'),
        outputPath: 'CacheCluster.CacheClusterStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.CacheClusterStatus', props);
    return resource.getResponseField('CacheCluster.CacheClusterStatus') as unknown as string;
  }

  public get numCacheNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.NumCacheNodes'),
        outputPath: 'CacheCluster.NumCacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.NumCacheNodes', props);
    return resource.getResponseField('CacheCluster.NumCacheNodes') as unknown as number;
  }

  public get preferredAvailabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.PreferredAvailabilityZone'),
        outputPath: 'CacheCluster.PreferredAvailabilityZone',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.PreferredAvailabilityZone', props);
    return resource.getResponseField('CacheCluster.PreferredAvailabilityZone') as unknown as string;
  }

  public get preferredOutpostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.PreferredOutpostArn'),
        outputPath: 'CacheCluster.PreferredOutpostArn',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.PreferredOutpostArn', props);
    return resource.getResponseField('CacheCluster.PreferredOutpostArn') as unknown as string;
  }

  public get cacheClusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.CacheClusterCreateTime'),
        outputPath: 'CacheCluster.CacheClusterCreateTime',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.CacheClusterCreateTime', props);
    return resource.getResponseField('CacheCluster.CacheClusterCreateTime') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.PreferredMaintenanceWindow'),
        outputPath: 'CacheCluster.PreferredMaintenanceWindow',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('CacheCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheCreateCacheClusterCacheClusterPendingModifiedValues {
    return new ElastiCacheCreateCacheClusterCacheClusterPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get notificationConfiguration(): ElastiCacheCreateCacheClusterCacheClusterNotificationConfiguration {
    return new ElastiCacheCreateCacheClusterCacheClusterNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
  }

  public get cacheSecurityGroups(): shapes.ElastiCacheCacheSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.CacheSecurityGroups'),
        outputPath: 'CacheCluster.CacheSecurityGroups',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.CacheSecurityGroups', props);
    return resource.getResponseField('CacheCluster.CacheSecurityGroups') as unknown as shapes.ElastiCacheCacheSecurityGroupMembership[];
  }

  public get cacheParameterGroup(): ElastiCacheCreateCacheClusterCacheClusterCacheParameterGroup {
    return new ElastiCacheCreateCacheClusterCacheClusterCacheParameterGroup(this, 'CacheParameterGroup', this.__resources, this.input);
  }

  public get cacheSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.CacheSubnetGroupName'),
        outputPath: 'CacheCluster.CacheSubnetGroupName',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.CacheSubnetGroupName', props);
    return resource.getResponseField('CacheCluster.CacheSubnetGroupName') as unknown as string;
  }

  public get cacheNodes(): shapes.ElastiCacheCacheNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.CacheNodes'),
        outputPath: 'CacheCluster.CacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.CacheNodes', props);
    return resource.getResponseField('CacheCluster.CacheNodes') as unknown as shapes.ElastiCacheCacheNode[];
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.AutoMinorVersionUpgrade'),
        outputPath: 'CacheCluster.AutoMinorVersionUpgrade',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('CacheCluster.AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get securityGroups(): shapes.ElastiCacheSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.SecurityGroups'),
        outputPath: 'CacheCluster.SecurityGroups',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.SecurityGroups', props);
    return resource.getResponseField('CacheCluster.SecurityGroups') as unknown as shapes.ElastiCacheSecurityGroupMembership[];
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.ReplicationGroupId'),
        outputPath: 'CacheCluster.ReplicationGroupId',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.ReplicationGroupId', props);
    return resource.getResponseField('CacheCluster.ReplicationGroupId') as unknown as string;
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.SnapshotRetentionLimit'),
        outputPath: 'CacheCluster.SnapshotRetentionLimit',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.SnapshotRetentionLimit', props);
    return resource.getResponseField('CacheCluster.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.SnapshotWindow'),
        outputPath: 'CacheCluster.SnapshotWindow',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.SnapshotWindow', props);
    return resource.getResponseField('CacheCluster.SnapshotWindow') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.AuthTokenEnabled'),
        outputPath: 'CacheCluster.AuthTokenEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.AuthTokenEnabled', props);
    return resource.getResponseField('CacheCluster.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.AuthTokenLastModifiedDate'),
        outputPath: 'CacheCluster.AuthTokenLastModifiedDate',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('CacheCluster.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.TransitEncryptionEnabled'),
        outputPath: 'CacheCluster.TransitEncryptionEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.TransitEncryptionEnabled', props);
    return resource.getResponseField('CacheCluster.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.AtRestEncryptionEnabled'),
        outputPath: 'CacheCluster.AtRestEncryptionEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.AtRestEncryptionEnabled', props);
    return resource.getResponseField('CacheCluster.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.ARN'),
        outputPath: 'CacheCluster.ARN',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.ARN', props);
    return resource.getResponseField('CacheCluster.ARN') as unknown as string;
  }

}

export class ElastiCacheCreateCacheClusterCacheClusterConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheClusterMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.ConfigurationEndpoint.Address'),
        outputPath: 'CacheCluster.ConfigurationEndpoint.Address',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.ConfigurationEndpoint.Port'),
        outputPath: 'CacheCluster.ConfigurationEndpoint.Port',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheCreateCacheClusterCacheClusterPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheClusterMessage) {
    super(scope, id);
  }

  public get numCacheNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes'),
        outputPath: 'CacheCluster.PendingModifiedValues.NumCacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.NumCacheNodes') as unknown as number;
  }

  public get cacheNodeIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove'),
        outputPath: 'CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove') as unknown as string[];
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion'),
        outputPath: 'CacheCluster.PendingModifiedValues.EngineVersion',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.EngineVersion') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType'),
        outputPath: 'CacheCluster.PendingModifiedValues.CacheNodeType',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.CacheNodeType') as unknown as string;
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'CacheCluster.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

}

export class ElastiCacheCreateCacheClusterCacheClusterNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheClusterMessage) {
    super(scope, id);
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.NotificationConfiguration.TopicArn'),
        outputPath: 'CacheCluster.NotificationConfiguration.TopicArn',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.NotificationConfiguration.TopicArn', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicArn') as unknown as string;
  }

  public get topicStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus'),
        outputPath: 'CacheCluster.NotificationConfiguration.TopicStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class ElastiCacheCreateCacheClusterCacheClusterCacheParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName'),
        outputPath: 'CacheCluster.CacheParameterGroup.CacheParameterGroupName',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheParameterGroupName') as unknown as string;
  }

  public get parameterApplyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus'),
        outputPath: 'CacheCluster.CacheParameterGroup.ParameterApplyStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.ParameterApplyStatus') as unknown as string;
  }

  public get cacheNodeIdsToReboot(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot'),
        outputPath: 'CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
          AZMode: this.input.azMode,
          PreferredAvailabilityZone: this.input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.input.preferredAvailabilityZones,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          OutpostMode: this.input.outpostMode,
          PreferredOutpostArn: this.input.preferredOutpostArn,
          PreferredOutpostArns: this.input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot') as unknown as string[];
  }

}

export class ElastiCacheCreateCacheParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheParameterGroupMessage) {
    super(scope, id);
  }

  public get cacheParameterGroup(): ElastiCacheCreateCacheParameterGroupCacheParameterGroup {
    return new ElastiCacheCreateCacheParameterGroupCacheParameterGroup(this, 'CacheParameterGroup', this.__resources, this.input);
  }

}

export class ElastiCacheCreateCacheParameterGroupCacheParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheParameterGroupMessage) {
    super(scope, id);
  }

  public get cacheParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheParameterGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheParameterGroup.CacheParameterGroup.CacheParameterGroupName'),
        outputPath: 'CacheParameterGroup.CacheParameterGroupName',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheParameterGroupFamily: this.input.cacheParameterGroupFamily,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheParameterGroup.CacheParameterGroup.CacheParameterGroupName', props);
    return resource.getResponseField('CacheParameterGroup.CacheParameterGroupName') as unknown as string;
  }

  public get cacheParameterGroupFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheParameterGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheParameterGroup.CacheParameterGroup.CacheParameterGroupFamily'),
        outputPath: 'CacheParameterGroup.CacheParameterGroupFamily',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheParameterGroupFamily: this.input.cacheParameterGroupFamily,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheParameterGroup.CacheParameterGroup.CacheParameterGroupFamily', props);
    return resource.getResponseField('CacheParameterGroup.CacheParameterGroupFamily') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheParameterGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheParameterGroup.CacheParameterGroup.Description'),
        outputPath: 'CacheParameterGroup.Description',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheParameterGroupFamily: this.input.cacheParameterGroupFamily,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheParameterGroup.CacheParameterGroup.Description', props);
    return resource.getResponseField('CacheParameterGroup.Description') as unknown as string;
  }

  public get isGlobal(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheParameterGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheParameterGroup.CacheParameterGroup.IsGlobal'),
        outputPath: 'CacheParameterGroup.IsGlobal',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheParameterGroupFamily: this.input.cacheParameterGroupFamily,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheParameterGroup.CacheParameterGroup.IsGlobal', props);
    return resource.getResponseField('CacheParameterGroup.IsGlobal') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheParameterGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheParameterGroup.CacheParameterGroup.ARN'),
        outputPath: 'CacheParameterGroup.ARN',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheParameterGroupFamily: this.input.cacheParameterGroupFamily,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheParameterGroup.CacheParameterGroup.ARN', props);
    return resource.getResponseField('CacheParameterGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheCreateCacheSecurityGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheSecurityGroupMessage) {
    super(scope, id);
  }

  public get cacheSecurityGroup(): ElastiCacheCreateCacheSecurityGroupCacheSecurityGroup {
    return new ElastiCacheCreateCacheSecurityGroupCacheSecurityGroup(this, 'CacheSecurityGroup', this.__resources, this.input);
  }

}

export class ElastiCacheCreateCacheSecurityGroupCacheSecurityGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheSecurityGroupMessage) {
    super(scope, id);
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheSecurityGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheSecurityGroup.CacheSecurityGroup.OwnerId'),
        outputPath: 'CacheSecurityGroup.OwnerId',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheSecurityGroup.CacheSecurityGroup.OwnerId', props);
    return resource.getResponseField('CacheSecurityGroup.OwnerId') as unknown as string;
  }

  public get cacheSecurityGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheSecurityGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheSecurityGroup.CacheSecurityGroup.CacheSecurityGroupName'),
        outputPath: 'CacheSecurityGroup.CacheSecurityGroupName',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheSecurityGroup.CacheSecurityGroup.CacheSecurityGroupName', props);
    return resource.getResponseField('CacheSecurityGroup.CacheSecurityGroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheSecurityGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheSecurityGroup.CacheSecurityGroup.Description'),
        outputPath: 'CacheSecurityGroup.Description',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheSecurityGroup.CacheSecurityGroup.Description', props);
    return resource.getResponseField('CacheSecurityGroup.Description') as unknown as string;
  }

  public get ec2SecurityGroups(): shapes.ElastiCacheEc2SecurityGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheSecurityGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheSecurityGroup.CacheSecurityGroup.EC2SecurityGroups'),
        outputPath: 'CacheSecurityGroup.EC2SecurityGroups',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheSecurityGroup.CacheSecurityGroup.EC2SecurityGroups', props);
    return resource.getResponseField('CacheSecurityGroup.EC2SecurityGroups') as unknown as shapes.ElastiCacheEc2SecurityGroup[];
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheSecurityGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheSecurityGroup.CacheSecurityGroup.ARN'),
        outputPath: 'CacheSecurityGroup.ARN',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheSecurityGroup.CacheSecurityGroup.ARN', props);
    return resource.getResponseField('CacheSecurityGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheCreateCacheSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheSubnetGroupMessage) {
    super(scope, id);
  }

  public get cacheSubnetGroup(): ElastiCacheCreateCacheSubnetGroupCacheSubnetGroup {
    return new ElastiCacheCreateCacheSubnetGroupCacheSubnetGroup(this, 'CacheSubnetGroup', this.__resources, this.input);
  }

}

export class ElastiCacheCreateCacheSubnetGroupCacheSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateCacheSubnetGroupMessage) {
    super(scope, id);
  }

  public get cacheSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheSubnetGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupName'),
        outputPath: 'CacheSubnetGroup.CacheSubnetGroupName',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.input.cacheSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupName', props);
    return resource.getResponseField('CacheSubnetGroup.CacheSubnetGroupName') as unknown as string;
  }

  public get cacheSubnetGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheSubnetGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupDescription'),
        outputPath: 'CacheSubnetGroup.CacheSubnetGroupDescription',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.input.cacheSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupDescription', props);
    return resource.getResponseField('CacheSubnetGroup.CacheSubnetGroupDescription') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheSubnetGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheSubnetGroup.CacheSubnetGroup.VpcId'),
        outputPath: 'CacheSubnetGroup.VpcId',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.input.cacheSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheSubnetGroup.CacheSubnetGroup.VpcId', props);
    return resource.getResponseField('CacheSubnetGroup.VpcId') as unknown as string;
  }

  public get subnets(): shapes.ElastiCacheSubnet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheSubnetGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheSubnetGroup.CacheSubnetGroup.Subnets'),
        outputPath: 'CacheSubnetGroup.Subnets',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.input.cacheSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheSubnetGroup.CacheSubnetGroup.Subnets', props);
    return resource.getResponseField('CacheSubnetGroup.Subnets') as unknown as shapes.ElastiCacheSubnet[];
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCacheSubnetGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateCacheSubnetGroup.CacheSubnetGroup.ARN'),
        outputPath: 'CacheSubnetGroup.ARN',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.input.cacheSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCacheSubnetGroup.CacheSubnetGroup.ARN', props);
    return resource.getResponseField('CacheSubnetGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheCreateGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroup(): ElastiCacheCreateGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheCreateGlobalReplicationGroupGlobalReplicationGroup(this, 'GlobalReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheCreateGlobalReplicationGroupGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupId',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupDescription',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupDescription') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.Status'),
        outputPath: 'GlobalReplicationGroup.Status',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
    return resource.getResponseField('GlobalReplicationGroup.Status') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType'),
        outputPath: 'GlobalReplicationGroup.CacheNodeType',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('GlobalReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.Engine'),
        outputPath: 'GlobalReplicationGroup.Engine',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
    return resource.getResponseField('GlobalReplicationGroup.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion'),
        outputPath: 'GlobalReplicationGroup.EngineVersion',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
    return resource.getResponseField('GlobalReplicationGroup.EngineVersion') as unknown as string;
  }

  public get members(): shapes.ElastiCacheGlobalReplicationGroupMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.Members'),
        outputPath: 'GlobalReplicationGroup.Members',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
    return resource.getResponseField('GlobalReplicationGroup.Members') as unknown as shapes.ElastiCacheGlobalReplicationGroupMember[];
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled'),
        outputPath: 'GlobalReplicationGroup.ClusterEnabled',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get globalNodeGroups(): shapes.ElastiCacheGlobalNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups'),
        outputPath: 'GlobalReplicationGroup.GlobalNodeGroups',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalNodeGroups') as unknown as shapes.ElastiCacheGlobalNodeGroup[];
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled'),
        outputPath: 'GlobalReplicationGroup.AuthTokenEnabled',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateGlobalReplicationGroup.GlobalReplicationGroup.ARN'),
        outputPath: 'GlobalReplicationGroup.ARN',
        parameters: {
          GlobalReplicationGroupIdSuffix: this.input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheCreateReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateReplicationGroupMessage) {
    super(scope, id);
  }

  public get replicationGroup(): ElastiCacheCreateReplicationGroupReplicationGroup {
    return new ElastiCacheCreateReplicationGroupReplicationGroup(this, 'ReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheCreateReplicationGroupReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateReplicationGroupMessage) {
    super(scope, id);
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.ReplicationGroupId'),
        outputPath: 'ReplicationGroup.ReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.ReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.ReplicationGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.Description'),
        outputPath: 'ReplicationGroup.Description',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo(this, 'GlobalReplicationGroupInfo', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.Status'),
        outputPath: 'ReplicationGroup.Status',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValues {
    return new ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get memberClusters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.MemberClusters'),
        outputPath: 'ReplicationGroup.MemberClusters',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.MemberClusters', props);
    return resource.getResponseField('ReplicationGroup.MemberClusters') as unknown as string[];
  }

  public get nodeGroups(): shapes.ElastiCacheNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.NodeGroups'),
        outputPath: 'ReplicationGroup.NodeGroups',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.NodeGroups', props);
    return resource.getResponseField('ReplicationGroup.NodeGroups') as unknown as shapes.ElastiCacheNodeGroup[];
  }

  public get snapshottingClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.SnapshottingClusterId'),
        outputPath: 'ReplicationGroup.SnapshottingClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.SnapshottingClusterId', props);
    return resource.getResponseField('ReplicationGroup.SnapshottingClusterId') as unknown as string;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.AutomaticFailover'),
        outputPath: 'ReplicationGroup.AutomaticFailover',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.AutomaticFailover', props);
    return resource.getResponseField('ReplicationGroup.AutomaticFailover') as unknown as string;
  }

  public get multiAz(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.MultiAZ'),
        outputPath: 'ReplicationGroup.MultiAZ',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheCreateReplicationGroupReplicationGroupConfigurationEndpoint {
    return new ElastiCacheCreateReplicationGroupReplicationGroupConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.SnapshotRetentionLimit'),
        outputPath: 'ReplicationGroup.SnapshotRetentionLimit',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.SnapshotRetentionLimit', props);
    return resource.getResponseField('ReplicationGroup.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.SnapshotWindow'),
        outputPath: 'ReplicationGroup.SnapshotWindow',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.SnapshotWindow', props);
    return resource.getResponseField('ReplicationGroup.SnapshotWindow') as unknown as string;
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.ClusterEnabled'),
        outputPath: 'ReplicationGroup.ClusterEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('ReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.CacheNodeType'),
        outputPath: 'ReplicationGroup.CacheNodeType',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('ReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.AuthTokenEnabled'),
        outputPath: 'ReplicationGroup.AuthTokenEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.AuthTokenLastModifiedDate'),
        outputPath: 'ReplicationGroup.AuthTokenLastModifiedDate',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'ReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'ReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get memberClustersOutpostArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.MemberClustersOutpostArns'),
        outputPath: 'ReplicationGroup.MemberClustersOutpostArns',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.MemberClustersOutpostArns', props);
    return resource.getResponseField('ReplicationGroup.MemberClustersOutpostArns') as unknown as string[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.KmsKeyId'),
        outputPath: 'ReplicationGroup.KmsKeyId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.KmsKeyId', props);
    return resource.getResponseField('ReplicationGroup.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.ARN'),
        outputPath: 'ReplicationGroup.ARN',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.ARN', props);
    return resource.getResponseField('ReplicationGroup.ARN') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.UserGroupIds'),
        outputPath: 'ReplicationGroup.UserGroupIds',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupMemberRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateReplicationGroupMessage) {
    super(scope, id);
  }

  public get primaryClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.PrimaryClusterId'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.PrimaryClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.PrimaryClusterId') as unknown as string;
  }

  public get automaticFailoverStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding(this, 'Resharding', this.__resources, this.input);
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups(this, 'UserGroups', this.__resources, this.input);
  }

}

export class ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateReplicationGroupMessage) {
    super(scope, id);
  }

  public get slotMigration(): ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration(this, 'SlotMigration', this.__resources, this.input);
  }

}

export class ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateReplicationGroupMessage) {
    super(scope, id);
  }

  public get progressPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateReplicationGroupMessage) {
    super(scope, id);
  }

  public get userGroupIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd') as unknown as string[];
  }

  public get userGroupIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheCreateReplicationGroupReplicationGroupConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateReplicationGroupMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Address'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Address',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Port'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Port',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryClusterId: this.input.primaryClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NumCacheClusters: this.input.numCacheClusters,
          PreferredCacheClusterAZs: this.input.preferredCacheClusterAZs,
          NumNodeGroups: this.input.numNodeGroups,
          ReplicasPerNodeGroup: this.input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.input.nodeGroupConfiguration,
          CacheNodeType: this.input.cacheNodeType,
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          Tags: this.input.tags,
          SnapshotArns: this.input.snapshotArns,
          SnapshotName: this.input.snapshotName,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          Port: this.input.port,
          NotificationTopicArn: this.input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          AuthToken: this.input.authToken,
          TransitEncryptionEnabled: this.input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.input.atRestEncryptionEnabled,
          KmsKeyId: this.input.kmsKeyId,
          UserGroupIds: this.input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheCreateSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateSnapshotMessage) {
    super(scope, id);
  }

  public get snapshot(): ElastiCacheCreateSnapshotSnapshot {
    return new ElastiCacheCreateSnapshotSnapshot(this, 'Snapshot', this.__resources, this.input);
  }

}

export class ElastiCacheCreateSnapshotSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateSnapshotMessage) {
    super(scope, id);
  }

  public get snapshotName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.SnapshotName'),
        outputPath: 'Snapshot.SnapshotName',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.SnapshotName', props);
    return resource.getResponseField('Snapshot.SnapshotName') as unknown as string;
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.ReplicationGroupId'),
        outputPath: 'Snapshot.ReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.ReplicationGroupId', props);
    return resource.getResponseField('Snapshot.ReplicationGroupId') as unknown as string;
  }

  public get replicationGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.ReplicationGroupDescription'),
        outputPath: 'Snapshot.ReplicationGroupDescription',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.ReplicationGroupDescription', props);
    return resource.getResponseField('Snapshot.ReplicationGroupDescription') as unknown as string;
  }

  public get cacheClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.CacheClusterId'),
        outputPath: 'Snapshot.CacheClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.CacheClusterId', props);
    return resource.getResponseField('Snapshot.CacheClusterId') as unknown as string;
  }

  public get snapshotStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.SnapshotStatus'),
        outputPath: 'Snapshot.SnapshotStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.SnapshotStatus', props);
    return resource.getResponseField('Snapshot.SnapshotStatus') as unknown as string;
  }

  public get snapshotSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.SnapshotSource'),
        outputPath: 'Snapshot.SnapshotSource',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.SnapshotSource', props);
    return resource.getResponseField('Snapshot.SnapshotSource') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.CacheNodeType'),
        outputPath: 'Snapshot.CacheNodeType',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.CacheNodeType', props);
    return resource.getResponseField('Snapshot.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.Engine'),
        outputPath: 'Snapshot.Engine',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.Engine', props);
    return resource.getResponseField('Snapshot.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.EngineVersion'),
        outputPath: 'Snapshot.EngineVersion',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.EngineVersion', props);
    return resource.getResponseField('Snapshot.EngineVersion') as unknown as string;
  }

  public get numCacheNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.NumCacheNodes'),
        outputPath: 'Snapshot.NumCacheNodes',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.NumCacheNodes', props);
    return resource.getResponseField('Snapshot.NumCacheNodes') as unknown as number;
  }

  public get preferredAvailabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.PreferredAvailabilityZone'),
        outputPath: 'Snapshot.PreferredAvailabilityZone',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.PreferredAvailabilityZone', props);
    return resource.getResponseField('Snapshot.PreferredAvailabilityZone') as unknown as string;
  }

  public get preferredOutpostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.PreferredOutpostArn'),
        outputPath: 'Snapshot.PreferredOutpostArn',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.PreferredOutpostArn', props);
    return resource.getResponseField('Snapshot.PreferredOutpostArn') as unknown as string;
  }

  public get cacheClusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.CacheClusterCreateTime'),
        outputPath: 'Snapshot.CacheClusterCreateTime',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.CacheClusterCreateTime', props);
    return resource.getResponseField('Snapshot.CacheClusterCreateTime') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.PreferredMaintenanceWindow'),
        outputPath: 'Snapshot.PreferredMaintenanceWindow',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Snapshot.PreferredMaintenanceWindow') as unknown as string;
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.TopicArn'),
        outputPath: 'Snapshot.TopicArn',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.TopicArn', props);
    return resource.getResponseField('Snapshot.TopicArn') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.Port'),
        outputPath: 'Snapshot.Port',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.Port', props);
    return resource.getResponseField('Snapshot.Port') as unknown as number;
  }

  public get cacheParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.CacheParameterGroupName'),
        outputPath: 'Snapshot.CacheParameterGroupName',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.CacheParameterGroupName', props);
    return resource.getResponseField('Snapshot.CacheParameterGroupName') as unknown as string;
  }

  public get cacheSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.CacheSubnetGroupName'),
        outputPath: 'Snapshot.CacheSubnetGroupName',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.CacheSubnetGroupName', props);
    return resource.getResponseField('Snapshot.CacheSubnetGroupName') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.VpcId'),
        outputPath: 'Snapshot.VpcId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.VpcId', props);
    return resource.getResponseField('Snapshot.VpcId') as unknown as string;
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.AutoMinorVersionUpgrade'),
        outputPath: 'Snapshot.AutoMinorVersionUpgrade',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('Snapshot.AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.SnapshotRetentionLimit'),
        outputPath: 'Snapshot.SnapshotRetentionLimit',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.SnapshotRetentionLimit', props);
    return resource.getResponseField('Snapshot.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.SnapshotWindow'),
        outputPath: 'Snapshot.SnapshotWindow',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.SnapshotWindow', props);
    return resource.getResponseField('Snapshot.SnapshotWindow') as unknown as string;
  }

  public get numNodeGroups(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.NumNodeGroups'),
        outputPath: 'Snapshot.NumNodeGroups',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.NumNodeGroups', props);
    return resource.getResponseField('Snapshot.NumNodeGroups') as unknown as number;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.AutomaticFailover'),
        outputPath: 'Snapshot.AutomaticFailover',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.AutomaticFailover', props);
    return resource.getResponseField('Snapshot.AutomaticFailover') as unknown as string;
  }

  public get nodeSnapshots(): shapes.ElastiCacheNodeSnapshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.NodeSnapshots'),
        outputPath: 'Snapshot.NodeSnapshots',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.NodeSnapshots', props);
    return resource.getResponseField('Snapshot.NodeSnapshots') as unknown as shapes.ElastiCacheNodeSnapshot[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.KmsKeyId'),
        outputPath: 'Snapshot.KmsKeyId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.KmsKeyId', props);
    return resource.getResponseField('Snapshot.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateSnapshot.Snapshot.ARN'),
        outputPath: 'Snapshot.ARN',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          KmsKeyId: this.input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSnapshot.Snapshot.ARN', props);
    return resource.getResponseField('Snapshot.ARN') as unknown as string;
  }

}

export class ElastiCacheCreateUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateUserMessage) {
    super(scope, id);
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUser.UserId'),
        outputPath: 'UserId',
        parameters: {
          UserId: this.input.userId,
          UserName: this.input.userName,
          Engine: this.input.engine,
          Passwords: this.input.passwords,
          AccessString: this.input.accessString,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.UserId', props);
    return resource.getResponseField('UserId') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUser.UserName'),
        outputPath: 'UserName',
        parameters: {
          UserId: this.input.userId,
          UserName: this.input.userName,
          Engine: this.input.engine,
          Passwords: this.input.passwords,
          AccessString: this.input.accessString,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUser.Status'),
        outputPath: 'Status',
        parameters: {
          UserId: this.input.userId,
          UserName: this.input.userName,
          Engine: this.input.engine,
          Passwords: this.input.passwords,
          AccessString: this.input.accessString,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUser.Engine'),
        outputPath: 'Engine',
        parameters: {
          UserId: this.input.userId,
          UserName: this.input.userName,
          Engine: this.input.engine,
          Passwords: this.input.passwords,
          AccessString: this.input.accessString,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.Engine', props);
    return resource.getResponseField('Engine') as unknown as string;
  }

  public get accessString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUser.AccessString'),
        outputPath: 'AccessString',
        parameters: {
          UserId: this.input.userId,
          UserName: this.input.userName,
          Engine: this.input.engine,
          Passwords: this.input.passwords,
          AccessString: this.input.accessString,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.AccessString', props);
    return resource.getResponseField('AccessString') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUser.UserGroupIds'),
        outputPath: 'UserGroupIds',
        parameters: {
          UserId: this.input.userId,
          UserName: this.input.userName,
          Engine: this.input.engine,
          Passwords: this.input.passwords,
          AccessString: this.input.accessString,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.UserGroupIds', props);
    return resource.getResponseField('UserGroupIds') as unknown as string[];
  }

  public get authentication(): ElastiCacheCreateUserAuthentication {
    return new ElastiCacheCreateUserAuthentication(this, 'Authentication', this.__resources, this.input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUser.ARN'),
        outputPath: 'ARN',
        parameters: {
          UserId: this.input.userId,
          UserName: this.input.userName,
          Engine: this.input.engine,
          Passwords: this.input.passwords,
          AccessString: this.input.accessString,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheCreateUserAuthentication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateUserMessage) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUser.Authentication.Type'),
        outputPath: 'Authentication.Type',
        parameters: {
          UserId: this.input.userId,
          UserName: this.input.userName,
          Engine: this.input.engine,
          Passwords: this.input.passwords,
          AccessString: this.input.accessString,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.Authentication.Type', props);
    return resource.getResponseField('Authentication.Type') as unknown as string;
  }

  public get passwordCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUser.Authentication.PasswordCount'),
        outputPath: 'Authentication.PasswordCount',
        parameters: {
          UserId: this.input.userId,
          UserName: this.input.userName,
          Engine: this.input.engine,
          Passwords: this.input.passwords,
          AccessString: this.input.accessString,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUser.Authentication.PasswordCount', props);
    return resource.getResponseField('Authentication.PasswordCount') as unknown as number;
  }

}

export class ElastiCacheCreateUserGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateUserGroupMessage) {
    super(scope, id);
  }

  public get userGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUserGroup.UserGroupId'),
        outputPath: 'UserGroupId',
        parameters: {
          UserGroupId: this.input.userGroupId,
          Engine: this.input.engine,
          UserIds: this.input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserGroup.UserGroupId', props);
    return resource.getResponseField('UserGroupId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUserGroup.Status'),
        outputPath: 'Status',
        parameters: {
          UserGroupId: this.input.userGroupId,
          Engine: this.input.engine,
          UserIds: this.input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserGroup.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUserGroup.Engine'),
        outputPath: 'Engine',
        parameters: {
          UserGroupId: this.input.userGroupId,
          Engine: this.input.engine,
          UserIds: this.input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserGroup.Engine', props);
    return resource.getResponseField('Engine') as unknown as string;
  }

  public get userIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUserGroup.UserIds'),
        outputPath: 'UserIds',
        parameters: {
          UserGroupId: this.input.userGroupId,
          Engine: this.input.engine,
          UserIds: this.input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserGroup.UserIds', props);
    return resource.getResponseField('UserIds') as unknown as string[];
  }

  public get pendingChanges(): ElastiCacheCreateUserGroupPendingChanges {
    return new ElastiCacheCreateUserGroupPendingChanges(this, 'PendingChanges', this.__resources, this.input);
  }

  public get replicationGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUserGroup.ReplicationGroups'),
        outputPath: 'ReplicationGroups',
        parameters: {
          UserGroupId: this.input.userGroupId,
          Engine: this.input.engine,
          UserIds: this.input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserGroup.ReplicationGroups', props);
    return resource.getResponseField('ReplicationGroups') as unknown as string[];
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUserGroup.ARN'),
        outputPath: 'ARN',
        parameters: {
          UserGroupId: this.input.userGroupId,
          Engine: this.input.engine,
          UserIds: this.input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserGroup.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheCreateUserGroupPendingChanges extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheCreateUserGroupMessage) {
    super(scope, id);
  }

  public get userIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUserGroup.PendingChanges.UserIdsToRemove'),
        outputPath: 'PendingChanges.UserIdsToRemove',
        parameters: {
          UserGroupId: this.input.userGroupId,
          Engine: this.input.engine,
          UserIds: this.input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserGroup.PendingChanges.UserIdsToRemove', props);
    return resource.getResponseField('PendingChanges.UserIdsToRemove') as unknown as string[];
  }

  public get userIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.CreateUserGroup.PendingChanges.UserIdsToAdd'),
        outputPath: 'PendingChanges.UserIdsToAdd',
        parameters: {
          UserGroupId: this.input.userGroupId,
          Engine: this.input.engine,
          UserIds: this.input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserGroup.PendingChanges.UserIdsToAdd', props);
    return resource.getResponseField('PendingChanges.UserIdsToAdd') as unknown as string[];
  }

}

export class ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroup(): ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup(this, 'GlobalReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupId',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupDescription',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupDescription') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Status'),
        outputPath: 'GlobalReplicationGroup.Status',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
    return resource.getResponseField('GlobalReplicationGroup.Status') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType'),
        outputPath: 'GlobalReplicationGroup.CacheNodeType',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('GlobalReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Engine'),
        outputPath: 'GlobalReplicationGroup.Engine',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
    return resource.getResponseField('GlobalReplicationGroup.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion'),
        outputPath: 'GlobalReplicationGroup.EngineVersion',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
    return resource.getResponseField('GlobalReplicationGroup.EngineVersion') as unknown as string;
  }

  public get members(): shapes.ElastiCacheGlobalReplicationGroupMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Members'),
        outputPath: 'GlobalReplicationGroup.Members',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
    return resource.getResponseField('GlobalReplicationGroup.Members') as unknown as shapes.ElastiCacheGlobalReplicationGroupMember[];
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled'),
        outputPath: 'GlobalReplicationGroup.ClusterEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get globalNodeGroups(): shapes.ElastiCacheGlobalNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups'),
        outputPath: 'GlobalReplicationGroup.GlobalNodeGroups',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalNodeGroups') as unknown as shapes.ElastiCacheGlobalNodeGroup[];
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled'),
        outputPath: 'GlobalReplicationGroup.AuthTokenEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ARN'),
        outputPath: 'GlobalReplicationGroup.ARN',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.input.globalNodeGroupsToRetain,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheDecreaseReplicaCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get replicationGroup(): ElastiCacheDecreaseReplicaCountReplicationGroup {
    return new ElastiCacheDecreaseReplicaCountReplicationGroup(this, 'ReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheDecreaseReplicaCountReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.ReplicationGroupId'),
        outputPath: 'ReplicationGroup.ReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.ReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.ReplicationGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.Description'),
        outputPath: 'ReplicationGroup.Description',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo(this, 'GlobalReplicationGroupInfo', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.Status'),
        outputPath: 'ReplicationGroup.Status',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValues {
    return new ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get memberClusters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.MemberClusters'),
        outputPath: 'ReplicationGroup.MemberClusters',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.MemberClusters', props);
    return resource.getResponseField('ReplicationGroup.MemberClusters') as unknown as string[];
  }

  public get nodeGroups(): shapes.ElastiCacheNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.NodeGroups'),
        outputPath: 'ReplicationGroup.NodeGroups',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.NodeGroups', props);
    return resource.getResponseField('ReplicationGroup.NodeGroups') as unknown as shapes.ElastiCacheNodeGroup[];
  }

  public get snapshottingClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.SnapshottingClusterId'),
        outputPath: 'ReplicationGroup.SnapshottingClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.SnapshottingClusterId', props);
    return resource.getResponseField('ReplicationGroup.SnapshottingClusterId') as unknown as string;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.AutomaticFailover'),
        outputPath: 'ReplicationGroup.AutomaticFailover',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.AutomaticFailover', props);
    return resource.getResponseField('ReplicationGroup.AutomaticFailover') as unknown as string;
  }

  public get multiAz(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.MultiAZ'),
        outputPath: 'ReplicationGroup.MultiAZ',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheDecreaseReplicaCountReplicationGroupConfigurationEndpoint {
    return new ElastiCacheDecreaseReplicaCountReplicationGroupConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.SnapshotRetentionLimit'),
        outputPath: 'ReplicationGroup.SnapshotRetentionLimit',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.SnapshotRetentionLimit', props);
    return resource.getResponseField('ReplicationGroup.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.SnapshotWindow'),
        outputPath: 'ReplicationGroup.SnapshotWindow',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.SnapshotWindow', props);
    return resource.getResponseField('ReplicationGroup.SnapshotWindow') as unknown as string;
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.ClusterEnabled'),
        outputPath: 'ReplicationGroup.ClusterEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('ReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.CacheNodeType'),
        outputPath: 'ReplicationGroup.CacheNodeType',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('ReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.AuthTokenEnabled'),
        outputPath: 'ReplicationGroup.AuthTokenEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.AuthTokenLastModifiedDate'),
        outputPath: 'ReplicationGroup.AuthTokenLastModifiedDate',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'ReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'ReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get memberClustersOutpostArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.MemberClustersOutpostArns'),
        outputPath: 'ReplicationGroup.MemberClustersOutpostArns',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.MemberClustersOutpostArns', props);
    return resource.getResponseField('ReplicationGroup.MemberClustersOutpostArns') as unknown as string[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.KmsKeyId'),
        outputPath: 'ReplicationGroup.KmsKeyId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.KmsKeyId', props);
    return resource.getResponseField('ReplicationGroup.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.ARN'),
        outputPath: 'ReplicationGroup.ARN',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.ARN', props);
    return resource.getResponseField('ReplicationGroup.ARN') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.UserGroupIds'),
        outputPath: 'ReplicationGroup.UserGroupIds',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupMemberRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get primaryClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.PrimaryClusterId'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.PrimaryClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.PrimaryClusterId') as unknown as string;
  }

  public get automaticFailoverStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding(this, 'Resharding', this.__resources, this.input);
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups(this, 'UserGroups', this.__resources, this.input);
  }

}

export class ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get slotMigration(): ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration(this, 'SlotMigration', this.__resources, this.input);
  }

}

export class ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get progressPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get userGroupIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd') as unknown as string[];
  }

  public get userGroupIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheDecreaseReplicaCountReplicationGroupConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Address'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Address',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DecreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Port'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Port',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ReplicasToRemove: this.input.replicasToRemove,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheDeleteCacheCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheCluster(): ElastiCacheDeleteCacheClusterCacheCluster {
    return new ElastiCacheDeleteCacheClusterCacheCluster(this, 'CacheCluster', this.__resources, this.input);
  }

}

export class ElastiCacheDeleteCacheClusterCacheCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.CacheClusterId'),
        outputPath: 'CacheCluster.CacheClusterId',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.CacheClusterId', props);
    return resource.getResponseField('CacheCluster.CacheClusterId') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheDeleteCacheClusterCacheClusterConfigurationEndpoint {
    return new ElastiCacheDeleteCacheClusterCacheClusterConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get clientDownloadLandingPage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.ClientDownloadLandingPage'),
        outputPath: 'CacheCluster.ClientDownloadLandingPage',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.ClientDownloadLandingPage', props);
    return resource.getResponseField('CacheCluster.ClientDownloadLandingPage') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.CacheNodeType'),
        outputPath: 'CacheCluster.CacheNodeType',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.CacheNodeType', props);
    return resource.getResponseField('CacheCluster.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.Engine'),
        outputPath: 'CacheCluster.Engine',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.Engine', props);
    return resource.getResponseField('CacheCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.EngineVersion'),
        outputPath: 'CacheCluster.EngineVersion',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.EngineVersion', props);
    return resource.getResponseField('CacheCluster.EngineVersion') as unknown as string;
  }

  public get cacheClusterStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.CacheClusterStatus'),
        outputPath: 'CacheCluster.CacheClusterStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.CacheClusterStatus', props);
    return resource.getResponseField('CacheCluster.CacheClusterStatus') as unknown as string;
  }

  public get numCacheNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.NumCacheNodes'),
        outputPath: 'CacheCluster.NumCacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.NumCacheNodes', props);
    return resource.getResponseField('CacheCluster.NumCacheNodes') as unknown as number;
  }

  public get preferredAvailabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.PreferredAvailabilityZone'),
        outputPath: 'CacheCluster.PreferredAvailabilityZone',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.PreferredAvailabilityZone', props);
    return resource.getResponseField('CacheCluster.PreferredAvailabilityZone') as unknown as string;
  }

  public get preferredOutpostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.PreferredOutpostArn'),
        outputPath: 'CacheCluster.PreferredOutpostArn',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.PreferredOutpostArn', props);
    return resource.getResponseField('CacheCluster.PreferredOutpostArn') as unknown as string;
  }

  public get cacheClusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.CacheClusterCreateTime'),
        outputPath: 'CacheCluster.CacheClusterCreateTime',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.CacheClusterCreateTime', props);
    return resource.getResponseField('CacheCluster.CacheClusterCreateTime') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.PreferredMaintenanceWindow'),
        outputPath: 'CacheCluster.PreferredMaintenanceWindow',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('CacheCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheDeleteCacheClusterCacheClusterPendingModifiedValues {
    return new ElastiCacheDeleteCacheClusterCacheClusterPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get notificationConfiguration(): ElastiCacheDeleteCacheClusterCacheClusterNotificationConfiguration {
    return new ElastiCacheDeleteCacheClusterCacheClusterNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
  }

  public get cacheSecurityGroups(): shapes.ElastiCacheCacheSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.CacheSecurityGroups'),
        outputPath: 'CacheCluster.CacheSecurityGroups',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.CacheSecurityGroups', props);
    return resource.getResponseField('CacheCluster.CacheSecurityGroups') as unknown as shapes.ElastiCacheCacheSecurityGroupMembership[];
  }

  public get cacheParameterGroup(): ElastiCacheDeleteCacheClusterCacheClusterCacheParameterGroup {
    return new ElastiCacheDeleteCacheClusterCacheClusterCacheParameterGroup(this, 'CacheParameterGroup', this.__resources, this.input);
  }

  public get cacheSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.CacheSubnetGroupName'),
        outputPath: 'CacheCluster.CacheSubnetGroupName',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.CacheSubnetGroupName', props);
    return resource.getResponseField('CacheCluster.CacheSubnetGroupName') as unknown as string;
  }

  public get cacheNodes(): shapes.ElastiCacheCacheNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.CacheNodes'),
        outputPath: 'CacheCluster.CacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.CacheNodes', props);
    return resource.getResponseField('CacheCluster.CacheNodes') as unknown as shapes.ElastiCacheCacheNode[];
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.AutoMinorVersionUpgrade'),
        outputPath: 'CacheCluster.AutoMinorVersionUpgrade',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('CacheCluster.AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get securityGroups(): shapes.ElastiCacheSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.SecurityGroups'),
        outputPath: 'CacheCluster.SecurityGroups',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.SecurityGroups', props);
    return resource.getResponseField('CacheCluster.SecurityGroups') as unknown as shapes.ElastiCacheSecurityGroupMembership[];
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.ReplicationGroupId'),
        outputPath: 'CacheCluster.ReplicationGroupId',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.ReplicationGroupId', props);
    return resource.getResponseField('CacheCluster.ReplicationGroupId') as unknown as string;
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.SnapshotRetentionLimit'),
        outputPath: 'CacheCluster.SnapshotRetentionLimit',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.SnapshotRetentionLimit', props);
    return resource.getResponseField('CacheCluster.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.SnapshotWindow'),
        outputPath: 'CacheCluster.SnapshotWindow',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.SnapshotWindow', props);
    return resource.getResponseField('CacheCluster.SnapshotWindow') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.AuthTokenEnabled'),
        outputPath: 'CacheCluster.AuthTokenEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.AuthTokenEnabled', props);
    return resource.getResponseField('CacheCluster.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.AuthTokenLastModifiedDate'),
        outputPath: 'CacheCluster.AuthTokenLastModifiedDate',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('CacheCluster.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.TransitEncryptionEnabled'),
        outputPath: 'CacheCluster.TransitEncryptionEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.TransitEncryptionEnabled', props);
    return resource.getResponseField('CacheCluster.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.AtRestEncryptionEnabled'),
        outputPath: 'CacheCluster.AtRestEncryptionEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.AtRestEncryptionEnabled', props);
    return resource.getResponseField('CacheCluster.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.ARN'),
        outputPath: 'CacheCluster.ARN',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.ARN', props);
    return resource.getResponseField('CacheCluster.ARN') as unknown as string;
  }

}

export class ElastiCacheDeleteCacheClusterCacheClusterConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteCacheClusterMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.ConfigurationEndpoint.Address'),
        outputPath: 'CacheCluster.ConfigurationEndpoint.Address',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.ConfigurationEndpoint.Port'),
        outputPath: 'CacheCluster.ConfigurationEndpoint.Port',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheDeleteCacheClusterCacheClusterPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteCacheClusterMessage) {
    super(scope, id);
  }

  public get numCacheNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes'),
        outputPath: 'CacheCluster.PendingModifiedValues.NumCacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.NumCacheNodes') as unknown as number;
  }

  public get cacheNodeIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove'),
        outputPath: 'CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove') as unknown as string[];
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion'),
        outputPath: 'CacheCluster.PendingModifiedValues.EngineVersion',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.EngineVersion') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType'),
        outputPath: 'CacheCluster.PendingModifiedValues.CacheNodeType',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.CacheNodeType') as unknown as string;
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'CacheCluster.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

}

export class ElastiCacheDeleteCacheClusterCacheClusterNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteCacheClusterMessage) {
    super(scope, id);
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.NotificationConfiguration.TopicArn'),
        outputPath: 'CacheCluster.NotificationConfiguration.TopicArn',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.NotificationConfiguration.TopicArn', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicArn') as unknown as string;
  }

  public get topicStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus'),
        outputPath: 'CacheCluster.NotificationConfiguration.TopicStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class ElastiCacheDeleteCacheClusterCacheClusterCacheParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName'),
        outputPath: 'CacheCluster.CacheParameterGroup.CacheParameterGroupName',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheParameterGroupName') as unknown as string;
  }

  public get parameterApplyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus'),
        outputPath: 'CacheCluster.CacheParameterGroup.ParameterApplyStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.ParameterApplyStatus') as unknown as string;
  }

  public get cacheNodeIdsToReboot(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot'),
        outputPath: 'CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot') as unknown as string[];
  }

}

export class ElastiCacheDeleteGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroup(): ElastiCacheDeleteGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheDeleteGlobalReplicationGroupGlobalReplicationGroup(this, 'GlobalReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheDeleteGlobalReplicationGroupGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupId',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupDescription',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupDescription') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.Status'),
        outputPath: 'GlobalReplicationGroup.Status',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
    return resource.getResponseField('GlobalReplicationGroup.Status') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType'),
        outputPath: 'GlobalReplicationGroup.CacheNodeType',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('GlobalReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.Engine'),
        outputPath: 'GlobalReplicationGroup.Engine',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
    return resource.getResponseField('GlobalReplicationGroup.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion'),
        outputPath: 'GlobalReplicationGroup.EngineVersion',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
    return resource.getResponseField('GlobalReplicationGroup.EngineVersion') as unknown as string;
  }

  public get members(): shapes.ElastiCacheGlobalReplicationGroupMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.Members'),
        outputPath: 'GlobalReplicationGroup.Members',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
    return resource.getResponseField('GlobalReplicationGroup.Members') as unknown as shapes.ElastiCacheGlobalReplicationGroupMember[];
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled'),
        outputPath: 'GlobalReplicationGroup.ClusterEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get globalNodeGroups(): shapes.ElastiCacheGlobalNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups'),
        outputPath: 'GlobalReplicationGroup.GlobalNodeGroups',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalNodeGroups') as unknown as shapes.ElastiCacheGlobalNodeGroup[];
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled'),
        outputPath: 'GlobalReplicationGroup.AuthTokenEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteGlobalReplicationGroup.GlobalReplicationGroup.ARN'),
        outputPath: 'GlobalReplicationGroup.ARN',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheDeleteReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
    super(scope, id);
  }

  public get replicationGroup(): ElastiCacheDeleteReplicationGroupReplicationGroup {
    return new ElastiCacheDeleteReplicationGroupReplicationGroup(this, 'ReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheDeleteReplicationGroupReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
    super(scope, id);
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.ReplicationGroupId'),
        outputPath: 'ReplicationGroup.ReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.ReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.ReplicationGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.Description'),
        outputPath: 'ReplicationGroup.Description',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo(this, 'GlobalReplicationGroupInfo', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.Status'),
        outputPath: 'ReplicationGroup.Status',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValues {
    return new ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get memberClusters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.MemberClusters'),
        outputPath: 'ReplicationGroup.MemberClusters',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.MemberClusters', props);
    return resource.getResponseField('ReplicationGroup.MemberClusters') as unknown as string[];
  }

  public get nodeGroups(): shapes.ElastiCacheNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.NodeGroups'),
        outputPath: 'ReplicationGroup.NodeGroups',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.NodeGroups', props);
    return resource.getResponseField('ReplicationGroup.NodeGroups') as unknown as shapes.ElastiCacheNodeGroup[];
  }

  public get snapshottingClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.SnapshottingClusterId'),
        outputPath: 'ReplicationGroup.SnapshottingClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.SnapshottingClusterId', props);
    return resource.getResponseField('ReplicationGroup.SnapshottingClusterId') as unknown as string;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.AutomaticFailover'),
        outputPath: 'ReplicationGroup.AutomaticFailover',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.AutomaticFailover', props);
    return resource.getResponseField('ReplicationGroup.AutomaticFailover') as unknown as string;
  }

  public get multiAz(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.MultiAZ'),
        outputPath: 'ReplicationGroup.MultiAZ',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheDeleteReplicationGroupReplicationGroupConfigurationEndpoint {
    return new ElastiCacheDeleteReplicationGroupReplicationGroupConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.SnapshotRetentionLimit'),
        outputPath: 'ReplicationGroup.SnapshotRetentionLimit',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.SnapshotRetentionLimit', props);
    return resource.getResponseField('ReplicationGroup.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.SnapshotWindow'),
        outputPath: 'ReplicationGroup.SnapshotWindow',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.SnapshotWindow', props);
    return resource.getResponseField('ReplicationGroup.SnapshotWindow') as unknown as string;
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.ClusterEnabled'),
        outputPath: 'ReplicationGroup.ClusterEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('ReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.CacheNodeType'),
        outputPath: 'ReplicationGroup.CacheNodeType',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('ReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.AuthTokenEnabled'),
        outputPath: 'ReplicationGroup.AuthTokenEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.AuthTokenLastModifiedDate'),
        outputPath: 'ReplicationGroup.AuthTokenLastModifiedDate',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'ReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'ReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get memberClustersOutpostArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.MemberClustersOutpostArns'),
        outputPath: 'ReplicationGroup.MemberClustersOutpostArns',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.MemberClustersOutpostArns', props);
    return resource.getResponseField('ReplicationGroup.MemberClustersOutpostArns') as unknown as string[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.KmsKeyId'),
        outputPath: 'ReplicationGroup.KmsKeyId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.KmsKeyId', props);
    return resource.getResponseField('ReplicationGroup.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.ARN'),
        outputPath: 'ReplicationGroup.ARN',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.ARN', props);
    return resource.getResponseField('ReplicationGroup.ARN') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.UserGroupIds'),
        outputPath: 'ReplicationGroup.UserGroupIds',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupMemberRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
    super(scope, id);
  }

  public get primaryClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.PrimaryClusterId'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.PrimaryClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.PrimaryClusterId') as unknown as string;
  }

  public get automaticFailoverStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding(this, 'Resharding', this.__resources, this.input);
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups(this, 'UserGroups', this.__resources, this.input);
  }

}

export class ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
    super(scope, id);
  }

  public get slotMigration(): ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration(this, 'SlotMigration', this.__resources, this.input);
  }

}

export class ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
    super(scope, id);
  }

  public get progressPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
    super(scope, id);
  }

  public get userGroupIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd') as unknown as string[];
  }

  public get userGroupIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheDeleteReplicationGroupReplicationGroupConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Address'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Address',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Port'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Port',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          RetainPrimaryCluster: this.input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheDeleteSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteSnapshotMessage) {
    super(scope, id);
  }

  public get snapshot(): ElastiCacheDeleteSnapshotSnapshot {
    return new ElastiCacheDeleteSnapshotSnapshot(this, 'Snapshot', this.__resources, this.input);
  }

}

export class ElastiCacheDeleteSnapshotSnapshot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteSnapshotMessage) {
    super(scope, id);
  }

  public get snapshotName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.SnapshotName'),
        outputPath: 'Snapshot.SnapshotName',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.SnapshotName', props);
    return resource.getResponseField('Snapshot.SnapshotName') as unknown as string;
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.ReplicationGroupId'),
        outputPath: 'Snapshot.ReplicationGroupId',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.ReplicationGroupId', props);
    return resource.getResponseField('Snapshot.ReplicationGroupId') as unknown as string;
  }

  public get replicationGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.ReplicationGroupDescription'),
        outputPath: 'Snapshot.ReplicationGroupDescription',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.ReplicationGroupDescription', props);
    return resource.getResponseField('Snapshot.ReplicationGroupDescription') as unknown as string;
  }

  public get cacheClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.CacheClusterId'),
        outputPath: 'Snapshot.CacheClusterId',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.CacheClusterId', props);
    return resource.getResponseField('Snapshot.CacheClusterId') as unknown as string;
  }

  public get snapshotStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.SnapshotStatus'),
        outputPath: 'Snapshot.SnapshotStatus',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.SnapshotStatus', props);
    return resource.getResponseField('Snapshot.SnapshotStatus') as unknown as string;
  }

  public get snapshotSource(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.SnapshotSource'),
        outputPath: 'Snapshot.SnapshotSource',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.SnapshotSource', props);
    return resource.getResponseField('Snapshot.SnapshotSource') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.CacheNodeType'),
        outputPath: 'Snapshot.CacheNodeType',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.CacheNodeType', props);
    return resource.getResponseField('Snapshot.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.Engine'),
        outputPath: 'Snapshot.Engine',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.Engine', props);
    return resource.getResponseField('Snapshot.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.EngineVersion'),
        outputPath: 'Snapshot.EngineVersion',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.EngineVersion', props);
    return resource.getResponseField('Snapshot.EngineVersion') as unknown as string;
  }

  public get numCacheNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.NumCacheNodes'),
        outputPath: 'Snapshot.NumCacheNodes',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.NumCacheNodes', props);
    return resource.getResponseField('Snapshot.NumCacheNodes') as unknown as number;
  }

  public get preferredAvailabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.PreferredAvailabilityZone'),
        outputPath: 'Snapshot.PreferredAvailabilityZone',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.PreferredAvailabilityZone', props);
    return resource.getResponseField('Snapshot.PreferredAvailabilityZone') as unknown as string;
  }

  public get preferredOutpostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.PreferredOutpostArn'),
        outputPath: 'Snapshot.PreferredOutpostArn',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.PreferredOutpostArn', props);
    return resource.getResponseField('Snapshot.PreferredOutpostArn') as unknown as string;
  }

  public get cacheClusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.CacheClusterCreateTime'),
        outputPath: 'Snapshot.CacheClusterCreateTime',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.CacheClusterCreateTime', props);
    return resource.getResponseField('Snapshot.CacheClusterCreateTime') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.PreferredMaintenanceWindow'),
        outputPath: 'Snapshot.PreferredMaintenanceWindow',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Snapshot.PreferredMaintenanceWindow') as unknown as string;
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.TopicArn'),
        outputPath: 'Snapshot.TopicArn',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.TopicArn', props);
    return resource.getResponseField('Snapshot.TopicArn') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.Port'),
        outputPath: 'Snapshot.Port',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.Port', props);
    return resource.getResponseField('Snapshot.Port') as unknown as number;
  }

  public get cacheParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.CacheParameterGroupName'),
        outputPath: 'Snapshot.CacheParameterGroupName',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.CacheParameterGroupName', props);
    return resource.getResponseField('Snapshot.CacheParameterGroupName') as unknown as string;
  }

  public get cacheSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.CacheSubnetGroupName'),
        outputPath: 'Snapshot.CacheSubnetGroupName',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.CacheSubnetGroupName', props);
    return resource.getResponseField('Snapshot.CacheSubnetGroupName') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.VpcId'),
        outputPath: 'Snapshot.VpcId',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.VpcId', props);
    return resource.getResponseField('Snapshot.VpcId') as unknown as string;
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.AutoMinorVersionUpgrade'),
        outputPath: 'Snapshot.AutoMinorVersionUpgrade',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('Snapshot.AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.SnapshotRetentionLimit'),
        outputPath: 'Snapshot.SnapshotRetentionLimit',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.SnapshotRetentionLimit', props);
    return resource.getResponseField('Snapshot.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.SnapshotWindow'),
        outputPath: 'Snapshot.SnapshotWindow',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.SnapshotWindow', props);
    return resource.getResponseField('Snapshot.SnapshotWindow') as unknown as string;
  }

  public get numNodeGroups(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.NumNodeGroups'),
        outputPath: 'Snapshot.NumNodeGroups',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.NumNodeGroups', props);
    return resource.getResponseField('Snapshot.NumNodeGroups') as unknown as number;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.AutomaticFailover'),
        outputPath: 'Snapshot.AutomaticFailover',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.AutomaticFailover', props);
    return resource.getResponseField('Snapshot.AutomaticFailover') as unknown as string;
  }

  public get nodeSnapshots(): shapes.ElastiCacheNodeSnapshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.NodeSnapshots'),
        outputPath: 'Snapshot.NodeSnapshots',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.NodeSnapshots', props);
    return resource.getResponseField('Snapshot.NodeSnapshots') as unknown as shapes.ElastiCacheNodeSnapshot[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.KmsKeyId'),
        outputPath: 'Snapshot.KmsKeyId',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.KmsKeyId', props);
    return resource.getResponseField('Snapshot.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSnapshot',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteSnapshot.Snapshot.ARN'),
        outputPath: 'Snapshot.ARN',
        parameters: {
          SnapshotName: this.input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSnapshot.Snapshot.ARN', props);
    return resource.getResponseField('Snapshot.ARN') as unknown as string;
  }

}

export class ElastiCacheDeleteUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteUserMessage) {
    super(scope, id);
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUser.UserId'),
        outputPath: 'UserId',
        parameters: {
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUser.UserId', props);
    return resource.getResponseField('UserId') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUser.UserName'),
        outputPath: 'UserName',
        parameters: {
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUser.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUser.Status'),
        outputPath: 'Status',
        parameters: {
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUser.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUser.Engine'),
        outputPath: 'Engine',
        parameters: {
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUser.Engine', props);
    return resource.getResponseField('Engine') as unknown as string;
  }

  public get accessString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUser.AccessString'),
        outputPath: 'AccessString',
        parameters: {
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUser.AccessString', props);
    return resource.getResponseField('AccessString') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUser.UserGroupIds'),
        outputPath: 'UserGroupIds',
        parameters: {
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUser.UserGroupIds', props);
    return resource.getResponseField('UserGroupIds') as unknown as string[];
  }

  public get authentication(): ElastiCacheDeleteUserAuthentication {
    return new ElastiCacheDeleteUserAuthentication(this, 'Authentication', this.__resources, this.input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUser.ARN'),
        outputPath: 'ARN',
        parameters: {
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUser.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheDeleteUserAuthentication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteUserMessage) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUser.Authentication.Type'),
        outputPath: 'Authentication.Type',
        parameters: {
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUser.Authentication.Type', props);
    return resource.getResponseField('Authentication.Type') as unknown as string;
  }

  public get passwordCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUser.Authentication.PasswordCount'),
        outputPath: 'Authentication.PasswordCount',
        parameters: {
          UserId: this.input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUser.Authentication.PasswordCount', props);
    return resource.getResponseField('Authentication.PasswordCount') as unknown as number;
  }

}

export class ElastiCacheDeleteUserGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteUserGroupMessage) {
    super(scope, id);
  }

  public get userGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUserGroup.UserGroupId'),
        outputPath: 'UserGroupId',
        parameters: {
          UserGroupId: this.input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUserGroup.UserGroupId', props);
    return resource.getResponseField('UserGroupId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUserGroup.Status'),
        outputPath: 'Status',
        parameters: {
          UserGroupId: this.input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUserGroup.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUserGroup.Engine'),
        outputPath: 'Engine',
        parameters: {
          UserGroupId: this.input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUserGroup.Engine', props);
    return resource.getResponseField('Engine') as unknown as string;
  }

  public get userIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUserGroup.UserIds'),
        outputPath: 'UserIds',
        parameters: {
          UserGroupId: this.input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUserGroup.UserIds', props);
    return resource.getResponseField('UserIds') as unknown as string[];
  }

  public get pendingChanges(): ElastiCacheDeleteUserGroupPendingChanges {
    return new ElastiCacheDeleteUserGroupPendingChanges(this, 'PendingChanges', this.__resources, this.input);
  }

  public get replicationGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUserGroup.ReplicationGroups'),
        outputPath: 'ReplicationGroups',
        parameters: {
          UserGroupId: this.input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUserGroup.ReplicationGroups', props);
    return resource.getResponseField('ReplicationGroups') as unknown as string[];
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUserGroup.ARN'),
        outputPath: 'ARN',
        parameters: {
          UserGroupId: this.input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUserGroup.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheDeleteUserGroupPendingChanges extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDeleteUserGroupMessage) {
    super(scope, id);
  }

  public get userIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUserGroup.PendingChanges.UserIdsToRemove'),
        outputPath: 'PendingChanges.UserIdsToRemove',
        parameters: {
          UserGroupId: this.input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUserGroup.PendingChanges.UserIdsToRemove', props);
    return resource.getResponseField('PendingChanges.UserIdsToRemove') as unknown as string[];
  }

  public get userIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DeleteUserGroup.PendingChanges.UserIdsToAdd'),
        outputPath: 'PendingChanges.UserIdsToAdd',
        parameters: {
          UserGroupId: this.input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteUserGroup.PendingChanges.UserIdsToAdd', props);
    return resource.getResponseField('PendingChanges.UserIdsToAdd') as unknown as string[];
  }

}

export class ElastiCacheDescribeCacheClusters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeCacheClustersMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheClusters',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheClusters.Marker'),
        outputPath: 'Marker',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
          ShowCacheNodeInfo: this.input.showCacheNodeInfo,
          ShowCacheClustersNotInReplicationGroups: this.input.showCacheClustersNotInReplicationGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheClusters.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get cacheClusters(): shapes.ElastiCacheCacheCluster[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheClusters',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheClusters.CacheClusters'),
        outputPath: 'CacheClusters',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
          ShowCacheNodeInfo: this.input.showCacheNodeInfo,
          ShowCacheClustersNotInReplicationGroups: this.input.showCacheClustersNotInReplicationGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheClusters.CacheClusters', props);
    return resource.getResponseField('CacheClusters') as unknown as shapes.ElastiCacheCacheCluster[];
  }

}

export class ElastiCacheDescribeCacheEngineVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeCacheEngineVersionsMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheEngineVersions',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheEngineVersions.Marker'),
        outputPath: 'Marker',
        parameters: {
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupFamily: this.input.cacheParameterGroupFamily,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
          DefaultOnly: this.input.defaultOnly,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheEngineVersions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get cacheEngineVersions(): shapes.ElastiCacheCacheEngineVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheEngineVersions',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheEngineVersions.CacheEngineVersions'),
        outputPath: 'CacheEngineVersions',
        parameters: {
          Engine: this.input.engine,
          EngineVersion: this.input.engineVersion,
          CacheParameterGroupFamily: this.input.cacheParameterGroupFamily,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
          DefaultOnly: this.input.defaultOnly,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheEngineVersions.CacheEngineVersions', props);
    return resource.getResponseField('CacheEngineVersions') as unknown as shapes.ElastiCacheCacheEngineVersion[];
  }

}

export class ElastiCacheDescribeCacheParameterGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeCacheParameterGroupsMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheParameterGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheParameterGroups.Marker'),
        outputPath: 'Marker',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheParameterGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get cacheParameterGroups(): shapes.ElastiCacheCacheParameterGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheParameterGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheParameterGroups.CacheParameterGroups'),
        outputPath: 'CacheParameterGroups',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheParameterGroups.CacheParameterGroups', props);
    return resource.getResponseField('CacheParameterGroups') as unknown as shapes.ElastiCacheCacheParameterGroup[];
  }

}

export class ElastiCacheDescribeCacheParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeCacheParametersMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheParameters',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheParameters.Marker'),
        outputPath: 'Marker',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          Source: this.input.source,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheParameters.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get parameters(): shapes.ElastiCacheParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheParameters',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheParameters.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          Source: this.input.source,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheParameters.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.ElastiCacheParameter[];
  }

  public get cacheNodeTypeSpecificParameters(): shapes.ElastiCacheCacheNodeTypeSpecificParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheParameters',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheParameters.CacheNodeTypeSpecificParameters'),
        outputPath: 'CacheNodeTypeSpecificParameters',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          Source: this.input.source,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheParameters.CacheNodeTypeSpecificParameters', props);
    return resource.getResponseField('CacheNodeTypeSpecificParameters') as unknown as shapes.ElastiCacheCacheNodeTypeSpecificParameter[];
  }

}

export class ElastiCacheDescribeCacheSecurityGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeCacheSecurityGroupsMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheSecurityGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheSecurityGroups.Marker'),
        outputPath: 'Marker',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheSecurityGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get cacheSecurityGroups(): shapes.ElastiCacheCacheSecurityGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheSecurityGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheSecurityGroups.CacheSecurityGroups'),
        outputPath: 'CacheSecurityGroups',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheSecurityGroups.CacheSecurityGroups', props);
    return resource.getResponseField('CacheSecurityGroups') as unknown as shapes.ElastiCacheCacheSecurityGroup[];
  }

}

export class ElastiCacheDescribeCacheSubnetGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeCacheSubnetGroupsMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheSubnetGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheSubnetGroups.Marker'),
        outputPath: 'Marker',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheSubnetGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get cacheSubnetGroups(): shapes.ElastiCacheCacheSubnetGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCacheSubnetGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeCacheSubnetGroups.CacheSubnetGroups'),
        outputPath: 'CacheSubnetGroups',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCacheSubnetGroups.CacheSubnetGroups', props);
    return resource.getResponseField('CacheSubnetGroups') as unknown as shapes.ElastiCacheCacheSubnetGroup[];
  }

}

export class ElastiCacheDescribeEngineDefaultParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeEngineDefaultParametersMessage) {
    super(scope, id);
  }

  public get engineDefaults(): ElastiCacheDescribeEngineDefaultParametersEngineDefaults {
    return new ElastiCacheDescribeEngineDefaultParametersEngineDefaults(this, 'EngineDefaults', this.__resources, this.input);
  }

}

export class ElastiCacheDescribeEngineDefaultParametersEngineDefaults extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeEngineDefaultParametersMessage) {
    super(scope, id);
  }

  public get cacheParameterGroupFamily(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngineDefaultParameters',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeEngineDefaultParameters.EngineDefaults.CacheParameterGroupFamily'),
        outputPath: 'EngineDefaults.CacheParameterGroupFamily',
        parameters: {
          CacheParameterGroupFamily: this.input.cacheParameterGroupFamily,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEngineDefaultParameters.EngineDefaults.CacheParameterGroupFamily', props);
    return resource.getResponseField('EngineDefaults.CacheParameterGroupFamily') as unknown as string;
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngineDefaultParameters',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeEngineDefaultParameters.EngineDefaults.Marker'),
        outputPath: 'EngineDefaults.Marker',
        parameters: {
          CacheParameterGroupFamily: this.input.cacheParameterGroupFamily,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEngineDefaultParameters.EngineDefaults.Marker', props);
    return resource.getResponseField('EngineDefaults.Marker') as unknown as string;
  }

  public get parameters(): shapes.ElastiCacheParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngineDefaultParameters',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeEngineDefaultParameters.EngineDefaults.Parameters'),
        outputPath: 'EngineDefaults.Parameters',
        parameters: {
          CacheParameterGroupFamily: this.input.cacheParameterGroupFamily,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEngineDefaultParameters.EngineDefaults.Parameters', props);
    return resource.getResponseField('EngineDefaults.Parameters') as unknown as shapes.ElastiCacheParameter[];
  }

  public get cacheNodeTypeSpecificParameters(): shapes.ElastiCacheCacheNodeTypeSpecificParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEngineDefaultParameters',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeEngineDefaultParameters.EngineDefaults.CacheNodeTypeSpecificParameters'),
        outputPath: 'EngineDefaults.CacheNodeTypeSpecificParameters',
        parameters: {
          CacheParameterGroupFamily: this.input.cacheParameterGroupFamily,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEngineDefaultParameters.EngineDefaults.CacheNodeTypeSpecificParameters', props);
    return resource.getResponseField('EngineDefaults.CacheNodeTypeSpecificParameters') as unknown as shapes.ElastiCacheCacheNodeTypeSpecificParameter[];
  }

}

export class ElastiCacheDescribeEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeEventsMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeEvents.Marker'),
        outputPath: 'Marker',
        parameters: {
          SourceIdentifier: this.input.sourceIdentifier,
          SourceType: this.input.sourceType,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Duration: this.input.duration,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get events(): shapes.ElastiCacheEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeEvents.Events'),
        outputPath: 'Events',
        parameters: {
          SourceIdentifier: this.input.sourceIdentifier,
          SourceType: this.input.sourceType,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Duration: this.input.duration,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.Events', props);
    return resource.getResponseField('Events') as unknown as shapes.ElastiCacheEvent[];
  }

}

export class ElastiCacheDescribeGlobalReplicationGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeGlobalReplicationGroupsMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalReplicationGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeGlobalReplicationGroups.Marker'),
        outputPath: 'Marker',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
          ShowMemberInfo: this.input.showMemberInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalReplicationGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get globalReplicationGroups(): shapes.ElastiCacheGlobalReplicationGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeGlobalReplicationGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeGlobalReplicationGroups.GlobalReplicationGroups'),
        outputPath: 'GlobalReplicationGroups',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
          ShowMemberInfo: this.input.showMemberInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeGlobalReplicationGroups.GlobalReplicationGroups', props);
    return resource.getResponseField('GlobalReplicationGroups') as unknown as shapes.ElastiCacheGlobalReplicationGroup[];
  }

}

export class ElastiCacheDescribeReplicationGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeReplicationGroupsMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplicationGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeReplicationGroups.Marker'),
        outputPath: 'Marker',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplicationGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get replicationGroups(): shapes.ElastiCacheReplicationGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReplicationGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeReplicationGroups.ReplicationGroups'),
        outputPath: 'ReplicationGroups',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReplicationGroups.ReplicationGroups', props);
    return resource.getResponseField('ReplicationGroups') as unknown as shapes.ElastiCacheReplicationGroup[];
  }

}

export class ElastiCacheDescribeReservedCacheNodes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeReservedCacheNodesMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservedCacheNodes',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeReservedCacheNodes.Marker'),
        outputPath: 'Marker',
        parameters: {
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          CacheNodeType: this.input.cacheNodeType,
          Duration: this.input.duration,
          ProductDescription: this.input.productDescription,
          OfferingType: this.input.offeringType,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservedCacheNodes.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get reservedCacheNodes(): shapes.ElastiCacheReservedCacheNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservedCacheNodes',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeReservedCacheNodes.ReservedCacheNodes'),
        outputPath: 'ReservedCacheNodes',
        parameters: {
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          CacheNodeType: this.input.cacheNodeType,
          Duration: this.input.duration,
          ProductDescription: this.input.productDescription,
          OfferingType: this.input.offeringType,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservedCacheNodes.ReservedCacheNodes', props);
    return resource.getResponseField('ReservedCacheNodes') as unknown as shapes.ElastiCacheReservedCacheNode[];
  }

}

export class ElastiCacheDescribeReservedCacheNodesOfferings extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeReservedCacheNodesOfferingsMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservedCacheNodesOfferings',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeReservedCacheNodesOfferings.Marker'),
        outputPath: 'Marker',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          CacheNodeType: this.input.cacheNodeType,
          Duration: this.input.duration,
          ProductDescription: this.input.productDescription,
          OfferingType: this.input.offeringType,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservedCacheNodesOfferings.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get reservedCacheNodesOfferings(): shapes.ElastiCacheReservedCacheNodesOffering[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeReservedCacheNodesOfferings',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeReservedCacheNodesOfferings.ReservedCacheNodesOfferings'),
        outputPath: 'ReservedCacheNodesOfferings',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          CacheNodeType: this.input.cacheNodeType,
          Duration: this.input.duration,
          ProductDescription: this.input.productDescription,
          OfferingType: this.input.offeringType,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeReservedCacheNodesOfferings.ReservedCacheNodesOfferings', props);
    return resource.getResponseField('ReservedCacheNodesOfferings') as unknown as shapes.ElastiCacheReservedCacheNodesOffering[];
  }

}

export class ElastiCacheDescribeServiceUpdates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeServiceUpdatesMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceUpdates',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeServiceUpdates.Marker'),
        outputPath: 'Marker',
        parameters: {
          ServiceUpdateName: this.input.serviceUpdateName,
          ServiceUpdateStatus: this.input.serviceUpdateStatus,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceUpdates.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get serviceUpdates(): shapes.ElastiCacheServiceUpdate[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceUpdates',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeServiceUpdates.ServiceUpdates'),
        outputPath: 'ServiceUpdates',
        parameters: {
          ServiceUpdateName: this.input.serviceUpdateName,
          ServiceUpdateStatus: this.input.serviceUpdateStatus,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceUpdates.ServiceUpdates', props);
    return resource.getResponseField('ServiceUpdates') as unknown as shapes.ElastiCacheServiceUpdate[];
  }

}

export class ElastiCacheDescribeSnapshots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeSnapshotsMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSnapshots',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeSnapshots.Marker'),
        outputPath: 'Marker',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          SnapshotSource: this.input.snapshotSource,
          Marker: this.input.marker,
          MaxRecords: this.input.maxRecords,
          ShowNodeGroupConfig: this.input.showNodeGroupConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSnapshots.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get snapshots(): shapes.ElastiCacheSnapshot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSnapshots',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeSnapshots.Snapshots'),
        outputPath: 'Snapshots',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CacheClusterId: this.input.cacheClusterId,
          SnapshotName: this.input.snapshotName,
          SnapshotSource: this.input.snapshotSource,
          Marker: this.input.marker,
          MaxRecords: this.input.maxRecords,
          ShowNodeGroupConfig: this.input.showNodeGroupConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSnapshots.Snapshots', props);
    return resource.getResponseField('Snapshots') as unknown as shapes.ElastiCacheSnapshot[];
  }

}

export class ElastiCacheDescribeUpdateActions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeUpdateActionsMessage) {
    super(scope, id);
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUpdateActions',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeUpdateActions.Marker'),
        outputPath: 'Marker',
        parameters: {
          ServiceUpdateName: this.input.serviceUpdateName,
          ReplicationGroupIds: this.input.replicationGroupIds,
          CacheClusterIds: this.input.cacheClusterIds,
          Engine: this.input.engine,
          ServiceUpdateStatus: this.input.serviceUpdateStatus,
          ServiceUpdateTimeRange: {
            StartTime: this.input.serviceUpdateTimeRange?.startTime,
            EndTime: this.input.serviceUpdateTimeRange?.endTime,
          },
          UpdateActionStatus: this.input.updateActionStatus,
          ShowNodeLevelUpdateStatus: this.input.showNodeLevelUpdateStatus,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUpdateActions.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

  public get updateActions(): shapes.ElastiCacheUpdateAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUpdateActions',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeUpdateActions.UpdateActions'),
        outputPath: 'UpdateActions',
        parameters: {
          ServiceUpdateName: this.input.serviceUpdateName,
          ReplicationGroupIds: this.input.replicationGroupIds,
          CacheClusterIds: this.input.cacheClusterIds,
          Engine: this.input.engine,
          ServiceUpdateStatus: this.input.serviceUpdateStatus,
          ServiceUpdateTimeRange: {
            StartTime: this.input.serviceUpdateTimeRange?.startTime,
            EndTime: this.input.serviceUpdateTimeRange?.endTime,
          },
          UpdateActionStatus: this.input.updateActionStatus,
          ShowNodeLevelUpdateStatus: this.input.showNodeLevelUpdateStatus,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUpdateActions.UpdateActions', props);
    return resource.getResponseField('UpdateActions') as unknown as shapes.ElastiCacheUpdateAction[];
  }

}

export class ElastiCacheDescribeUserGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeUserGroupsMessage) {
    super(scope, id);
  }

  public get userGroups(): shapes.ElastiCacheUserGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeUserGroups.UserGroups'),
        outputPath: 'UserGroups',
        parameters: {
          UserGroupId: this.input.userGroupId,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserGroups.UserGroups', props);
    return resource.getResponseField('UserGroups') as unknown as shapes.ElastiCacheUserGroup[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserGroups',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeUserGroups.Marker'),
        outputPath: 'Marker',
        parameters: {
          UserGroupId: this.input.userGroupId,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class ElastiCacheDescribeUsers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDescribeUsersMessage) {
    super(scope, id);
  }

  public get users(): shapes.ElastiCacheUser[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUsers',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeUsers.Users'),
        outputPath: 'Users',
        parameters: {
          Engine: this.input.engine,
          UserId: this.input.userId,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUsers.Users', props);
    return resource.getResponseField('Users') as unknown as shapes.ElastiCacheUser[];
  }

  public get marker(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUsers',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DescribeUsers.Marker'),
        outputPath: 'Marker',
        parameters: {
          Engine: this.input.engine,
          UserId: this.input.userId,
          Filters: this.input.filters,
          MaxRecords: this.input.maxRecords,
          Marker: this.input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUsers.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class ElastiCacheDisassociateGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDisassociateGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroup(): ElastiCacheDisassociateGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheDisassociateGlobalReplicationGroupGlobalReplicationGroup(this, 'GlobalReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheDisassociateGlobalReplicationGroupGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheDisassociateGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupId',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupDescription',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupDescription') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.Status'),
        outputPath: 'GlobalReplicationGroup.Status',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
    return resource.getResponseField('GlobalReplicationGroup.Status') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType'),
        outputPath: 'GlobalReplicationGroup.CacheNodeType',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('GlobalReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.Engine'),
        outputPath: 'GlobalReplicationGroup.Engine',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
    return resource.getResponseField('GlobalReplicationGroup.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion'),
        outputPath: 'GlobalReplicationGroup.EngineVersion',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
    return resource.getResponseField('GlobalReplicationGroup.EngineVersion') as unknown as string;
  }

  public get members(): shapes.ElastiCacheGlobalReplicationGroupMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.Members'),
        outputPath: 'GlobalReplicationGroup.Members',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
    return resource.getResponseField('GlobalReplicationGroup.Members') as unknown as shapes.ElastiCacheGlobalReplicationGroupMember[];
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled'),
        outputPath: 'GlobalReplicationGroup.ClusterEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get globalNodeGroups(): shapes.ElastiCacheGlobalNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups'),
        outputPath: 'GlobalReplicationGroup.GlobalNodeGroups',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalNodeGroups') as unknown as shapes.ElastiCacheGlobalNodeGroup[];
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled'),
        outputPath: 'GlobalReplicationGroup.AuthTokenEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.DisassociateGlobalReplicationGroup.GlobalReplicationGroup.ARN'),
        outputPath: 'GlobalReplicationGroup.ARN',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupRegion: this.input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheFailoverGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheFailoverGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroup(): ElastiCacheFailoverGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheFailoverGlobalReplicationGroupGlobalReplicationGroup(this, 'GlobalReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheFailoverGlobalReplicationGroupGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheFailoverGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupId',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupDescription',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupDescription') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.Status'),
        outputPath: 'GlobalReplicationGroup.Status',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
    return resource.getResponseField('GlobalReplicationGroup.Status') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType'),
        outputPath: 'GlobalReplicationGroup.CacheNodeType',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('GlobalReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.Engine'),
        outputPath: 'GlobalReplicationGroup.Engine',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
    return resource.getResponseField('GlobalReplicationGroup.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion'),
        outputPath: 'GlobalReplicationGroup.EngineVersion',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
    return resource.getResponseField('GlobalReplicationGroup.EngineVersion') as unknown as string;
  }

  public get members(): shapes.ElastiCacheGlobalReplicationGroupMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.Members'),
        outputPath: 'GlobalReplicationGroup.Members',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
    return resource.getResponseField('GlobalReplicationGroup.Members') as unknown as shapes.ElastiCacheGlobalReplicationGroupMember[];
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled'),
        outputPath: 'GlobalReplicationGroup.ClusterEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get globalNodeGroups(): shapes.ElastiCacheGlobalNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups'),
        outputPath: 'GlobalReplicationGroup.GlobalNodeGroups',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalNodeGroups') as unknown as shapes.ElastiCacheGlobalNodeGroup[];
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled'),
        outputPath: 'GlobalReplicationGroup.AuthTokenEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'failoverGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.FailoverGlobalReplicationGroup.GlobalReplicationGroup.ARN'),
        outputPath: 'GlobalReplicationGroup.ARN',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          PrimaryRegion: this.input.primaryRegion,
          PrimaryReplicationGroupId: this.input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroup(): ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup(this, 'GlobalReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupId',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupDescription',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupDescription') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Status'),
        outputPath: 'GlobalReplicationGroup.Status',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
    return resource.getResponseField('GlobalReplicationGroup.Status') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType'),
        outputPath: 'GlobalReplicationGroup.CacheNodeType',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('GlobalReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Engine'),
        outputPath: 'GlobalReplicationGroup.Engine',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
    return resource.getResponseField('GlobalReplicationGroup.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion'),
        outputPath: 'GlobalReplicationGroup.EngineVersion',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
    return resource.getResponseField('GlobalReplicationGroup.EngineVersion') as unknown as string;
  }

  public get members(): shapes.ElastiCacheGlobalReplicationGroupMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Members'),
        outputPath: 'GlobalReplicationGroup.Members',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
    return resource.getResponseField('GlobalReplicationGroup.Members') as unknown as shapes.ElastiCacheGlobalReplicationGroupMember[];
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled'),
        outputPath: 'GlobalReplicationGroup.ClusterEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get globalNodeGroups(): shapes.ElastiCacheGlobalNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups'),
        outputPath: 'GlobalReplicationGroup.GlobalNodeGroups',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalNodeGroups') as unknown as shapes.ElastiCacheGlobalNodeGroup[];
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled'),
        outputPath: 'GlobalReplicationGroup.AuthTokenEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseNodeGroupsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ARN'),
        outputPath: 'GlobalReplicationGroup.ARN',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          RegionalConfigurations: this.input.regionalConfigurations,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheIncreaseReplicaCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get replicationGroup(): ElastiCacheIncreaseReplicaCountReplicationGroup {
    return new ElastiCacheIncreaseReplicaCountReplicationGroup(this, 'ReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheIncreaseReplicaCountReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.ReplicationGroupId'),
        outputPath: 'ReplicationGroup.ReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.ReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.ReplicationGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.Description'),
        outputPath: 'ReplicationGroup.Description',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo(this, 'GlobalReplicationGroupInfo', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.Status'),
        outputPath: 'ReplicationGroup.Status',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValues {
    return new ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get memberClusters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.MemberClusters'),
        outputPath: 'ReplicationGroup.MemberClusters',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.MemberClusters', props);
    return resource.getResponseField('ReplicationGroup.MemberClusters') as unknown as string[];
  }

  public get nodeGroups(): shapes.ElastiCacheNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.NodeGroups'),
        outputPath: 'ReplicationGroup.NodeGroups',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.NodeGroups', props);
    return resource.getResponseField('ReplicationGroup.NodeGroups') as unknown as shapes.ElastiCacheNodeGroup[];
  }

  public get snapshottingClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.SnapshottingClusterId'),
        outputPath: 'ReplicationGroup.SnapshottingClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.SnapshottingClusterId', props);
    return resource.getResponseField('ReplicationGroup.SnapshottingClusterId') as unknown as string;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.AutomaticFailover'),
        outputPath: 'ReplicationGroup.AutomaticFailover',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.AutomaticFailover', props);
    return resource.getResponseField('ReplicationGroup.AutomaticFailover') as unknown as string;
  }

  public get multiAz(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.MultiAZ'),
        outputPath: 'ReplicationGroup.MultiAZ',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheIncreaseReplicaCountReplicationGroupConfigurationEndpoint {
    return new ElastiCacheIncreaseReplicaCountReplicationGroupConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.SnapshotRetentionLimit'),
        outputPath: 'ReplicationGroup.SnapshotRetentionLimit',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.SnapshotRetentionLimit', props);
    return resource.getResponseField('ReplicationGroup.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.SnapshotWindow'),
        outputPath: 'ReplicationGroup.SnapshotWindow',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.SnapshotWindow', props);
    return resource.getResponseField('ReplicationGroup.SnapshotWindow') as unknown as string;
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.ClusterEnabled'),
        outputPath: 'ReplicationGroup.ClusterEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('ReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.CacheNodeType'),
        outputPath: 'ReplicationGroup.CacheNodeType',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('ReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.AuthTokenEnabled'),
        outputPath: 'ReplicationGroup.AuthTokenEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.AuthTokenLastModifiedDate'),
        outputPath: 'ReplicationGroup.AuthTokenLastModifiedDate',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'ReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'ReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get memberClustersOutpostArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.MemberClustersOutpostArns'),
        outputPath: 'ReplicationGroup.MemberClustersOutpostArns',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.MemberClustersOutpostArns', props);
    return resource.getResponseField('ReplicationGroup.MemberClustersOutpostArns') as unknown as string[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.KmsKeyId'),
        outputPath: 'ReplicationGroup.KmsKeyId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.KmsKeyId', props);
    return resource.getResponseField('ReplicationGroup.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.ARN'),
        outputPath: 'ReplicationGroup.ARN',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.ARN', props);
    return resource.getResponseField('ReplicationGroup.ARN') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.UserGroupIds'),
        outputPath: 'ReplicationGroup.UserGroupIds',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupMemberRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get primaryClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.PrimaryClusterId'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.PrimaryClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.PrimaryClusterId') as unknown as string;
  }

  public get automaticFailoverStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding(this, 'Resharding', this.__resources, this.input);
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups(this, 'UserGroups', this.__resources, this.input);
  }

}

export class ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get slotMigration(): ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration(this, 'SlotMigration', this.__resources, this.input);
  }

}

export class ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get progressPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get userGroupIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd') as unknown as string[];
  }

  public get userGroupIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheIncreaseReplicaCountReplicationGroupConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Address'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Address',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicaCount',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.IncreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Port'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Port',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NewReplicaCount: this.input.newReplicaCount,
          ReplicaConfiguration: this.input.replicaConfiguration,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheListAllowedNodeTypeModifications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheListAllowedNodeTypeModificationsMessage) {
    super(scope, id);
  }

  public get scaleUpModifications(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAllowedNodeTypeModifications',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ListAllowedNodeTypeModifications.ScaleUpModifications'),
        outputPath: 'ScaleUpModifications',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAllowedNodeTypeModifications.ScaleUpModifications', props);
    return resource.getResponseField('ScaleUpModifications') as unknown as string[];
  }

  public get scaleDownModifications(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAllowedNodeTypeModifications',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ListAllowedNodeTypeModifications.ScaleDownModifications'),
        outputPath: 'ScaleDownModifications',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          ReplicationGroupId: this.input.replicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAllowedNodeTypeModifications.ScaleDownModifications', props);
    return resource.getResponseField('ScaleDownModifications') as unknown as string[];
  }

}

export class ElastiCacheListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheListTagsForResourceMessage) {
    super(scope, id);
  }

  public get tagList(): shapes.ElastiCacheTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ListTagsForResource.TagList'),
        outputPath: 'TagList',
        parameters: {
          ResourceName: this.input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.ElastiCacheTag[];
  }

}

export class ElastiCacheModifyCacheCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheCluster(): ElastiCacheModifyCacheClusterCacheCluster {
    return new ElastiCacheModifyCacheClusterCacheCluster(this, 'CacheCluster', this.__resources, this.input);
  }

}

export class ElastiCacheModifyCacheClusterCacheCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.CacheClusterId'),
        outputPath: 'CacheCluster.CacheClusterId',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.CacheClusterId', props);
    return resource.getResponseField('CacheCluster.CacheClusterId') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheModifyCacheClusterCacheClusterConfigurationEndpoint {
    return new ElastiCacheModifyCacheClusterCacheClusterConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get clientDownloadLandingPage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.ClientDownloadLandingPage'),
        outputPath: 'CacheCluster.ClientDownloadLandingPage',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.ClientDownloadLandingPage', props);
    return resource.getResponseField('CacheCluster.ClientDownloadLandingPage') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.CacheNodeType'),
        outputPath: 'CacheCluster.CacheNodeType',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.CacheNodeType', props);
    return resource.getResponseField('CacheCluster.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.Engine'),
        outputPath: 'CacheCluster.Engine',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.Engine', props);
    return resource.getResponseField('CacheCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.EngineVersion'),
        outputPath: 'CacheCluster.EngineVersion',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.EngineVersion', props);
    return resource.getResponseField('CacheCluster.EngineVersion') as unknown as string;
  }

  public get cacheClusterStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.CacheClusterStatus'),
        outputPath: 'CacheCluster.CacheClusterStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.CacheClusterStatus', props);
    return resource.getResponseField('CacheCluster.CacheClusterStatus') as unknown as string;
  }

  public get numCacheNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.NumCacheNodes'),
        outputPath: 'CacheCluster.NumCacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.NumCacheNodes', props);
    return resource.getResponseField('CacheCluster.NumCacheNodes') as unknown as number;
  }

  public get preferredAvailabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.PreferredAvailabilityZone'),
        outputPath: 'CacheCluster.PreferredAvailabilityZone',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.PreferredAvailabilityZone', props);
    return resource.getResponseField('CacheCluster.PreferredAvailabilityZone') as unknown as string;
  }

  public get preferredOutpostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.PreferredOutpostArn'),
        outputPath: 'CacheCluster.PreferredOutpostArn',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.PreferredOutpostArn', props);
    return resource.getResponseField('CacheCluster.PreferredOutpostArn') as unknown as string;
  }

  public get cacheClusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.CacheClusterCreateTime'),
        outputPath: 'CacheCluster.CacheClusterCreateTime',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.CacheClusterCreateTime', props);
    return resource.getResponseField('CacheCluster.CacheClusterCreateTime') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.PreferredMaintenanceWindow'),
        outputPath: 'CacheCluster.PreferredMaintenanceWindow',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('CacheCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheModifyCacheClusterCacheClusterPendingModifiedValues {
    return new ElastiCacheModifyCacheClusterCacheClusterPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get notificationConfiguration(): ElastiCacheModifyCacheClusterCacheClusterNotificationConfiguration {
    return new ElastiCacheModifyCacheClusterCacheClusterNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
  }

  public get cacheSecurityGroups(): shapes.ElastiCacheCacheSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.CacheSecurityGroups'),
        outputPath: 'CacheCluster.CacheSecurityGroups',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.CacheSecurityGroups', props);
    return resource.getResponseField('CacheCluster.CacheSecurityGroups') as unknown as shapes.ElastiCacheCacheSecurityGroupMembership[];
  }

  public get cacheParameterGroup(): ElastiCacheModifyCacheClusterCacheClusterCacheParameterGroup {
    return new ElastiCacheModifyCacheClusterCacheClusterCacheParameterGroup(this, 'CacheParameterGroup', this.__resources, this.input);
  }

  public get cacheSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.CacheSubnetGroupName'),
        outputPath: 'CacheCluster.CacheSubnetGroupName',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.CacheSubnetGroupName', props);
    return resource.getResponseField('CacheCluster.CacheSubnetGroupName') as unknown as string;
  }

  public get cacheNodes(): shapes.ElastiCacheCacheNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.CacheNodes'),
        outputPath: 'CacheCluster.CacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.CacheNodes', props);
    return resource.getResponseField('CacheCluster.CacheNodes') as unknown as shapes.ElastiCacheCacheNode[];
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.AutoMinorVersionUpgrade'),
        outputPath: 'CacheCluster.AutoMinorVersionUpgrade',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('CacheCluster.AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get securityGroups(): shapes.ElastiCacheSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.SecurityGroups'),
        outputPath: 'CacheCluster.SecurityGroups',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.SecurityGroups', props);
    return resource.getResponseField('CacheCluster.SecurityGroups') as unknown as shapes.ElastiCacheSecurityGroupMembership[];
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.ReplicationGroupId'),
        outputPath: 'CacheCluster.ReplicationGroupId',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.ReplicationGroupId', props);
    return resource.getResponseField('CacheCluster.ReplicationGroupId') as unknown as string;
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.SnapshotRetentionLimit'),
        outputPath: 'CacheCluster.SnapshotRetentionLimit',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.SnapshotRetentionLimit', props);
    return resource.getResponseField('CacheCluster.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.SnapshotWindow'),
        outputPath: 'CacheCluster.SnapshotWindow',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.SnapshotWindow', props);
    return resource.getResponseField('CacheCluster.SnapshotWindow') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.AuthTokenEnabled'),
        outputPath: 'CacheCluster.AuthTokenEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.AuthTokenEnabled', props);
    return resource.getResponseField('CacheCluster.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.AuthTokenLastModifiedDate'),
        outputPath: 'CacheCluster.AuthTokenLastModifiedDate',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('CacheCluster.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.TransitEncryptionEnabled'),
        outputPath: 'CacheCluster.TransitEncryptionEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.TransitEncryptionEnabled', props);
    return resource.getResponseField('CacheCluster.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.AtRestEncryptionEnabled'),
        outputPath: 'CacheCluster.AtRestEncryptionEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.AtRestEncryptionEnabled', props);
    return resource.getResponseField('CacheCluster.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.ARN'),
        outputPath: 'CacheCluster.ARN',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.ARN', props);
    return resource.getResponseField('CacheCluster.ARN') as unknown as string;
  }

}

export class ElastiCacheModifyCacheClusterCacheClusterConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyCacheClusterMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.ConfigurationEndpoint.Address'),
        outputPath: 'CacheCluster.ConfigurationEndpoint.Address',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.ConfigurationEndpoint.Port'),
        outputPath: 'CacheCluster.ConfigurationEndpoint.Port',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheModifyCacheClusterCacheClusterPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyCacheClusterMessage) {
    super(scope, id);
  }

  public get numCacheNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes'),
        outputPath: 'CacheCluster.PendingModifiedValues.NumCacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.NumCacheNodes') as unknown as number;
  }

  public get cacheNodeIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove'),
        outputPath: 'CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove') as unknown as string[];
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion'),
        outputPath: 'CacheCluster.PendingModifiedValues.EngineVersion',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.EngineVersion') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType'),
        outputPath: 'CacheCluster.PendingModifiedValues.CacheNodeType',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.CacheNodeType') as unknown as string;
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'CacheCluster.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

}

export class ElastiCacheModifyCacheClusterCacheClusterNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyCacheClusterMessage) {
    super(scope, id);
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.NotificationConfiguration.TopicArn'),
        outputPath: 'CacheCluster.NotificationConfiguration.TopicArn',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.NotificationConfiguration.TopicArn', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicArn') as unknown as string;
  }

  public get topicStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus'),
        outputPath: 'CacheCluster.NotificationConfiguration.TopicStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class ElastiCacheModifyCacheClusterCacheClusterCacheParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName'),
        outputPath: 'CacheCluster.CacheParameterGroup.CacheParameterGroupName',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheParameterGroupName') as unknown as string;
  }

  public get parameterApplyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus'),
        outputPath: 'CacheCluster.CacheParameterGroup.ParameterApplyStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.ParameterApplyStatus') as unknown as string;
  }

  public get cacheNodeIdsToReboot(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot'),
        outputPath: 'CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          NumCacheNodes: this.input.numCacheNodes,
          CacheNodeIdsToRemove: this.input.cacheNodeIdsToRemove,
          AZMode: this.input.azMode,
          NewAvailabilityZones: this.input.newAvailabilityZones,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot') as unknown as string[];
  }

}

export class ElastiCacheModifyCacheParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyCacheParameterGroupMessage) {
    super(scope, id);
  }

  public get cacheParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheParameterGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheParameterGroup.CacheParameterGroupName'),
        outputPath: 'CacheParameterGroupName',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          ParameterNameValues: this.input.parameterNameValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheParameterGroup.CacheParameterGroupName', props);
    return resource.getResponseField('CacheParameterGroupName') as unknown as string;
  }

}

export class ElastiCacheModifyCacheSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyCacheSubnetGroupMessage) {
    super(scope, id);
  }

  public get cacheSubnetGroup(): ElastiCacheModifyCacheSubnetGroupCacheSubnetGroup {
    return new ElastiCacheModifyCacheSubnetGroupCacheSubnetGroup(this, 'CacheSubnetGroup', this.__resources, this.input);
  }

}

export class ElastiCacheModifyCacheSubnetGroupCacheSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyCacheSubnetGroupMessage) {
    super(scope, id);
  }

  public get cacheSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheSubnetGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupName'),
        outputPath: 'CacheSubnetGroup.CacheSubnetGroupName',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.input.cacheSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupName', props);
    return resource.getResponseField('CacheSubnetGroup.CacheSubnetGroupName') as unknown as string;
  }

  public get cacheSubnetGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheSubnetGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupDescription'),
        outputPath: 'CacheSubnetGroup.CacheSubnetGroupDescription',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.input.cacheSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupDescription', props);
    return resource.getResponseField('CacheSubnetGroup.CacheSubnetGroupDescription') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheSubnetGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheSubnetGroup.CacheSubnetGroup.VpcId'),
        outputPath: 'CacheSubnetGroup.VpcId',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.input.cacheSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheSubnetGroup.CacheSubnetGroup.VpcId', props);
    return resource.getResponseField('CacheSubnetGroup.VpcId') as unknown as string;
  }

  public get subnets(): shapes.ElastiCacheSubnet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheSubnetGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheSubnetGroup.CacheSubnetGroup.Subnets'),
        outputPath: 'CacheSubnetGroup.Subnets',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.input.cacheSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheSubnetGroup.CacheSubnetGroup.Subnets', props);
    return resource.getResponseField('CacheSubnetGroup.Subnets') as unknown as shapes.ElastiCacheSubnet[];
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyCacheSubnetGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyCacheSubnetGroup.CacheSubnetGroup.ARN'),
        outputPath: 'CacheSubnetGroup.ARN',
        parameters: {
          CacheSubnetGroupName: this.input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.input.cacheSubnetGroupDescription,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyCacheSubnetGroup.CacheSubnetGroup.ARN', props);
    return resource.getResponseField('CacheSubnetGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheModifyGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroup(): ElastiCacheModifyGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheModifyGlobalReplicationGroupGlobalReplicationGroup(this, 'GlobalReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheModifyGlobalReplicationGroupGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupId',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupDescription',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupDescription') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.Status'),
        outputPath: 'GlobalReplicationGroup.Status',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
    return resource.getResponseField('GlobalReplicationGroup.Status') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType'),
        outputPath: 'GlobalReplicationGroup.CacheNodeType',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('GlobalReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.Engine'),
        outputPath: 'GlobalReplicationGroup.Engine',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
    return resource.getResponseField('GlobalReplicationGroup.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion'),
        outputPath: 'GlobalReplicationGroup.EngineVersion',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
    return resource.getResponseField('GlobalReplicationGroup.EngineVersion') as unknown as string;
  }

  public get members(): shapes.ElastiCacheGlobalReplicationGroupMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.Members'),
        outputPath: 'GlobalReplicationGroup.Members',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
    return resource.getResponseField('GlobalReplicationGroup.Members') as unknown as shapes.ElastiCacheGlobalReplicationGroupMember[];
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled'),
        outputPath: 'GlobalReplicationGroup.ClusterEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get globalNodeGroups(): shapes.ElastiCacheGlobalNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups'),
        outputPath: 'GlobalReplicationGroup.GlobalNodeGroups',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalNodeGroups') as unknown as shapes.ElastiCacheGlobalNodeGroup[];
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled'),
        outputPath: 'GlobalReplicationGroup.AuthTokenEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyGlobalReplicationGroup.GlobalReplicationGroup.ARN'),
        outputPath: 'GlobalReplicationGroup.ARN',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
          CacheNodeType: this.input.cacheNodeType,
          EngineVersion: this.input.engineVersion,
          GlobalReplicationGroupDescription: this.input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheModifyReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupMessage) {
    super(scope, id);
  }

  public get replicationGroup(): ElastiCacheModifyReplicationGroupReplicationGroup {
    return new ElastiCacheModifyReplicationGroupReplicationGroup(this, 'ReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheModifyReplicationGroupReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupMessage) {
    super(scope, id);
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.ReplicationGroupId'),
        outputPath: 'ReplicationGroup.ReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.ReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.ReplicationGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.Description'),
        outputPath: 'ReplicationGroup.Description',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo(this, 'GlobalReplicationGroupInfo', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.Status'),
        outputPath: 'ReplicationGroup.Status',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValues {
    return new ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get memberClusters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.MemberClusters'),
        outputPath: 'ReplicationGroup.MemberClusters',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.MemberClusters', props);
    return resource.getResponseField('ReplicationGroup.MemberClusters') as unknown as string[];
  }

  public get nodeGroups(): shapes.ElastiCacheNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.NodeGroups'),
        outputPath: 'ReplicationGroup.NodeGroups',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.NodeGroups', props);
    return resource.getResponseField('ReplicationGroup.NodeGroups') as unknown as shapes.ElastiCacheNodeGroup[];
  }

  public get snapshottingClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.SnapshottingClusterId'),
        outputPath: 'ReplicationGroup.SnapshottingClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.SnapshottingClusterId', props);
    return resource.getResponseField('ReplicationGroup.SnapshottingClusterId') as unknown as string;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.AutomaticFailover'),
        outputPath: 'ReplicationGroup.AutomaticFailover',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.AutomaticFailover', props);
    return resource.getResponseField('ReplicationGroup.AutomaticFailover') as unknown as string;
  }

  public get multiAz(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.MultiAZ'),
        outputPath: 'ReplicationGroup.MultiAZ',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheModifyReplicationGroupReplicationGroupConfigurationEndpoint {
    return new ElastiCacheModifyReplicationGroupReplicationGroupConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.SnapshotRetentionLimit'),
        outputPath: 'ReplicationGroup.SnapshotRetentionLimit',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.SnapshotRetentionLimit', props);
    return resource.getResponseField('ReplicationGroup.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.SnapshotWindow'),
        outputPath: 'ReplicationGroup.SnapshotWindow',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.SnapshotWindow', props);
    return resource.getResponseField('ReplicationGroup.SnapshotWindow') as unknown as string;
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.ClusterEnabled'),
        outputPath: 'ReplicationGroup.ClusterEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('ReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.CacheNodeType'),
        outputPath: 'ReplicationGroup.CacheNodeType',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('ReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.AuthTokenEnabled'),
        outputPath: 'ReplicationGroup.AuthTokenEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.AuthTokenLastModifiedDate'),
        outputPath: 'ReplicationGroup.AuthTokenLastModifiedDate',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'ReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'ReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get memberClustersOutpostArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.MemberClustersOutpostArns'),
        outputPath: 'ReplicationGroup.MemberClustersOutpostArns',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.MemberClustersOutpostArns', props);
    return resource.getResponseField('ReplicationGroup.MemberClustersOutpostArns') as unknown as string[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.KmsKeyId'),
        outputPath: 'ReplicationGroup.KmsKeyId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.KmsKeyId', props);
    return resource.getResponseField('ReplicationGroup.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.ARN'),
        outputPath: 'ReplicationGroup.ARN',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.ARN', props);
    return resource.getResponseField('ReplicationGroup.ARN') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.UserGroupIds'),
        outputPath: 'ReplicationGroup.UserGroupIds',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupMemberRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupMessage) {
    super(scope, id);
  }

  public get primaryClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.PrimaryClusterId'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.PrimaryClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.PrimaryClusterId') as unknown as string;
  }

  public get automaticFailoverStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding(this, 'Resharding', this.__resources, this.input);
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups(this, 'UserGroups', this.__resources, this.input);
  }

}

export class ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupMessage) {
    super(scope, id);
  }

  public get slotMigration(): ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration(this, 'SlotMigration', this.__resources, this.input);
  }

}

export class ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupMessage) {
    super(scope, id);
  }

  public get progressPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupMessage) {
    super(scope, id);
  }

  public get userGroupIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd') as unknown as string[];
  }

  public get userGroupIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheModifyReplicationGroupReplicationGroupConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Address'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Address',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Port'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Port',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          ReplicationGroupDescription: this.input.replicationGroupDescription,
          PrimaryClusterId: this.input.primaryClusterId,
          SnapshottingClusterId: this.input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.input.automaticFailoverEnabled,
          MultiAZEnabled: this.input.multiAzEnabled,
          NodeGroupId: this.input.nodeGroupId,
          CacheSecurityGroupNames: this.input.cacheSecurityGroupNames,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ApplyImmediately: this.input.applyImmediately,
          EngineVersion: this.input.engineVersion,
          AutoMinorVersionUpgrade: this.input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.input.snapshotRetentionLimit,
          SnapshotWindow: this.input.snapshotWindow,
          CacheNodeType: this.input.cacheNodeType,
          AuthToken: this.input.authToken,
          AuthTokenUpdateStrategy: this.input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.input.userGroupIdsToRemove,
          RemoveUserGroups: this.input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheModifyReplicationGroupShardConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
    super(scope, id);
  }

  public get replicationGroup(): ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroup {
    return new ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroup(this, 'ReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
    super(scope, id);
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.ReplicationGroupId'),
        outputPath: 'ReplicationGroup.ReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.ReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.ReplicationGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.Description'),
        outputPath: 'ReplicationGroup.Description',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo(this, 'GlobalReplicationGroupInfo', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.Status'),
        outputPath: 'ReplicationGroup.Status',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues {
    return new ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get memberClusters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.MemberClusters'),
        outputPath: 'ReplicationGroup.MemberClusters',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.MemberClusters', props);
    return resource.getResponseField('ReplicationGroup.MemberClusters') as unknown as string[];
  }

  public get nodeGroups(): shapes.ElastiCacheNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.NodeGroups'),
        outputPath: 'ReplicationGroup.NodeGroups',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.NodeGroups', props);
    return resource.getResponseField('ReplicationGroup.NodeGroups') as unknown as shapes.ElastiCacheNodeGroup[];
  }

  public get snapshottingClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.SnapshottingClusterId'),
        outputPath: 'ReplicationGroup.SnapshottingClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.SnapshottingClusterId', props);
    return resource.getResponseField('ReplicationGroup.SnapshottingClusterId') as unknown as string;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.AutomaticFailover'),
        outputPath: 'ReplicationGroup.AutomaticFailover',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.AutomaticFailover', props);
    return resource.getResponseField('ReplicationGroup.AutomaticFailover') as unknown as string;
  }

  public get multiAz(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.MultiAZ'),
        outputPath: 'ReplicationGroup.MultiAZ',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint {
    return new ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.SnapshotRetentionLimit'),
        outputPath: 'ReplicationGroup.SnapshotRetentionLimit',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.SnapshotRetentionLimit', props);
    return resource.getResponseField('ReplicationGroup.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.SnapshotWindow'),
        outputPath: 'ReplicationGroup.SnapshotWindow',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.SnapshotWindow', props);
    return resource.getResponseField('ReplicationGroup.SnapshotWindow') as unknown as string;
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.ClusterEnabled'),
        outputPath: 'ReplicationGroup.ClusterEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('ReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.CacheNodeType'),
        outputPath: 'ReplicationGroup.CacheNodeType',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('ReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.AuthTokenEnabled'),
        outputPath: 'ReplicationGroup.AuthTokenEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.AuthTokenLastModifiedDate'),
        outputPath: 'ReplicationGroup.AuthTokenLastModifiedDate',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'ReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'ReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get memberClustersOutpostArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.MemberClustersOutpostArns'),
        outputPath: 'ReplicationGroup.MemberClustersOutpostArns',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.MemberClustersOutpostArns', props);
    return resource.getResponseField('ReplicationGroup.MemberClustersOutpostArns') as unknown as string[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.KmsKeyId'),
        outputPath: 'ReplicationGroup.KmsKeyId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.KmsKeyId', props);
    return resource.getResponseField('ReplicationGroup.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.ARN'),
        outputPath: 'ReplicationGroup.ARN',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.ARN', props);
    return resource.getResponseField('ReplicationGroup.ARN') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.UserGroupIds'),
        outputPath: 'ReplicationGroup.UserGroupIds',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupMemberRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
    super(scope, id);
  }

  public get primaryClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.PrimaryClusterId'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.PrimaryClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.PrimaryClusterId') as unknown as string;
  }

  public get automaticFailoverStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding(this, 'Resharding', this.__resources, this.input);
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups(this, 'UserGroups', this.__resources, this.input);
  }

}

export class ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
    super(scope, id);
  }

  public get slotMigration(): ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration(this, 'SlotMigration', this.__resources, this.input);
  }

}

export class ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
    super(scope, id);
  }

  public get progressPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
    super(scope, id);
  }

  public get userGroupIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd') as unknown as string[];
  }

  public get userGroupIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.ConfigurationEndpoint.Address'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Address',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyReplicationGroupShardConfiguration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyReplicationGroupShardConfiguration.ReplicationGroup.ConfigurationEndpoint.Port'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Port',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupCount: this.input.nodeGroupCount,
          ApplyImmediately: this.input.applyImmediately,
          ReshardingConfiguration: this.input.reshardingConfiguration,
          NodeGroupsToRemove: this.input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheModifyUser extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyUserMessage) {
    super(scope, id);
  }

  public get userId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUser.UserId'),
        outputPath: 'UserId',
        parameters: {
          UserId: this.input.userId,
          AccessString: this.input.accessString,
          AppendAccessString: this.input.appendAccessString,
          Passwords: this.input.passwords,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUser.UserId', props);
    return resource.getResponseField('UserId') as unknown as string;
  }

  public get userName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUser.UserName'),
        outputPath: 'UserName',
        parameters: {
          UserId: this.input.userId,
          AccessString: this.input.accessString,
          AppendAccessString: this.input.appendAccessString,
          Passwords: this.input.passwords,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUser.UserName', props);
    return resource.getResponseField('UserName') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUser.Status'),
        outputPath: 'Status',
        parameters: {
          UserId: this.input.userId,
          AccessString: this.input.accessString,
          AppendAccessString: this.input.appendAccessString,
          Passwords: this.input.passwords,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUser.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUser.Engine'),
        outputPath: 'Engine',
        parameters: {
          UserId: this.input.userId,
          AccessString: this.input.accessString,
          AppendAccessString: this.input.appendAccessString,
          Passwords: this.input.passwords,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUser.Engine', props);
    return resource.getResponseField('Engine') as unknown as string;
  }

  public get accessString(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUser.AccessString'),
        outputPath: 'AccessString',
        parameters: {
          UserId: this.input.userId,
          AccessString: this.input.accessString,
          AppendAccessString: this.input.appendAccessString,
          Passwords: this.input.passwords,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUser.AccessString', props);
    return resource.getResponseField('AccessString') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUser.UserGroupIds'),
        outputPath: 'UserGroupIds',
        parameters: {
          UserId: this.input.userId,
          AccessString: this.input.accessString,
          AppendAccessString: this.input.appendAccessString,
          Passwords: this.input.passwords,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUser.UserGroupIds', props);
    return resource.getResponseField('UserGroupIds') as unknown as string[];
  }

  public get authentication(): ElastiCacheModifyUserAuthentication {
    return new ElastiCacheModifyUserAuthentication(this, 'Authentication', this.__resources, this.input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUser.ARN'),
        outputPath: 'ARN',
        parameters: {
          UserId: this.input.userId,
          AccessString: this.input.accessString,
          AppendAccessString: this.input.appendAccessString,
          Passwords: this.input.passwords,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUser.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheModifyUserAuthentication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyUserMessage) {
    super(scope, id);
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUser.Authentication.Type'),
        outputPath: 'Authentication.Type',
        parameters: {
          UserId: this.input.userId,
          AccessString: this.input.accessString,
          AppendAccessString: this.input.appendAccessString,
          Passwords: this.input.passwords,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUser.Authentication.Type', props);
    return resource.getResponseField('Authentication.Type') as unknown as string;
  }

  public get passwordCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUser',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUser.Authentication.PasswordCount'),
        outputPath: 'Authentication.PasswordCount',
        parameters: {
          UserId: this.input.userId,
          AccessString: this.input.accessString,
          AppendAccessString: this.input.appendAccessString,
          Passwords: this.input.passwords,
          NoPasswordRequired: this.input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUser.Authentication.PasswordCount', props);
    return resource.getResponseField('Authentication.PasswordCount') as unknown as number;
  }

}

export class ElastiCacheModifyUserGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyUserGroupMessage) {
    super(scope, id);
  }

  public get userGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUserGroup.UserGroupId'),
        outputPath: 'UserGroupId',
        parameters: {
          UserGroupId: this.input.userGroupId,
          UserIdsToAdd: this.input.userIdsToAdd,
          UserIdsToRemove: this.input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUserGroup.UserGroupId', props);
    return resource.getResponseField('UserGroupId') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUserGroup.Status'),
        outputPath: 'Status',
        parameters: {
          UserGroupId: this.input.userGroupId,
          UserIdsToAdd: this.input.userIdsToAdd,
          UserIdsToRemove: this.input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUserGroup.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUserGroup.Engine'),
        outputPath: 'Engine',
        parameters: {
          UserGroupId: this.input.userGroupId,
          UserIdsToAdd: this.input.userIdsToAdd,
          UserIdsToRemove: this.input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUserGroup.Engine', props);
    return resource.getResponseField('Engine') as unknown as string;
  }

  public get userIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUserGroup.UserIds'),
        outputPath: 'UserIds',
        parameters: {
          UserGroupId: this.input.userGroupId,
          UserIdsToAdd: this.input.userIdsToAdd,
          UserIdsToRemove: this.input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUserGroup.UserIds', props);
    return resource.getResponseField('UserIds') as unknown as string[];
  }

  public get pendingChanges(): ElastiCacheModifyUserGroupPendingChanges {
    return new ElastiCacheModifyUserGroupPendingChanges(this, 'PendingChanges', this.__resources, this.input);
  }

  public get replicationGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUserGroup.ReplicationGroups'),
        outputPath: 'ReplicationGroups',
        parameters: {
          UserGroupId: this.input.userGroupId,
          UserIdsToAdd: this.input.userIdsToAdd,
          UserIdsToRemove: this.input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUserGroup.ReplicationGroups', props);
    return resource.getResponseField('ReplicationGroups') as unknown as string[];
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUserGroup.ARN'),
        outputPath: 'ARN',
        parameters: {
          UserGroupId: this.input.userGroupId,
          UserIdsToAdd: this.input.userIdsToAdd,
          UserIdsToRemove: this.input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUserGroup.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheModifyUserGroupPendingChanges extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheModifyUserGroupMessage) {
    super(scope, id);
  }

  public get userIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUserGroup.PendingChanges.UserIdsToRemove'),
        outputPath: 'PendingChanges.UserIdsToRemove',
        parameters: {
          UserGroupId: this.input.userGroupId,
          UserIdsToAdd: this.input.userIdsToAdd,
          UserIdsToRemove: this.input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUserGroup.PendingChanges.UserIdsToRemove', props);
    return resource.getResponseField('PendingChanges.UserIdsToRemove') as unknown as string[];
  }

  public get userIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'modifyUserGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ModifyUserGroup.PendingChanges.UserIdsToAdd'),
        outputPath: 'PendingChanges.UserIdsToAdd',
        parameters: {
          UserGroupId: this.input.userGroupId,
          UserIdsToAdd: this.input.userIdsToAdd,
          UserIdsToRemove: this.input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ModifyUserGroup.PendingChanges.UserIdsToAdd', props);
    return resource.getResponseField('PendingChanges.UserIdsToAdd') as unknown as string[];
  }

}

export class ElastiCachePurchaseReservedCacheNodesOffering extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCachePurchaseReservedCacheNodesOfferingMessage) {
    super(scope, id);
  }

  public get reservedCacheNode(): ElastiCachePurchaseReservedCacheNodesOfferingReservedCacheNode {
    return new ElastiCachePurchaseReservedCacheNodesOfferingReservedCacheNode(this, 'ReservedCacheNode', this.__resources, this.input);
  }

}

export class ElastiCachePurchaseReservedCacheNodesOfferingReservedCacheNode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCachePurchaseReservedCacheNodesOfferingMessage) {
    super(scope, id);
  }

  public get reservedCacheNodeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.ReservedCacheNodeId'),
        outputPath: 'ReservedCacheNode.ReservedCacheNodeId',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.ReservedCacheNodeId', props);
    return resource.getResponseField('ReservedCacheNode.ReservedCacheNodeId') as unknown as string;
  }

  public get reservedCacheNodesOfferingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.ReservedCacheNodesOfferingId'),
        outputPath: 'ReservedCacheNode.ReservedCacheNodesOfferingId',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.ReservedCacheNodesOfferingId', props);
    return resource.getResponseField('ReservedCacheNode.ReservedCacheNodesOfferingId') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.CacheNodeType'),
        outputPath: 'ReservedCacheNode.CacheNodeType',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.CacheNodeType', props);
    return resource.getResponseField('ReservedCacheNode.CacheNodeType') as unknown as string;
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.StartTime'),
        outputPath: 'ReservedCacheNode.StartTime',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.StartTime', props);
    return resource.getResponseField('ReservedCacheNode.StartTime') as unknown as string;
  }

  public get duration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.Duration'),
        outputPath: 'ReservedCacheNode.Duration',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.Duration', props);
    return resource.getResponseField('ReservedCacheNode.Duration') as unknown as number;
  }

  public get fixedPrice(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.FixedPrice'),
        outputPath: 'ReservedCacheNode.FixedPrice',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.FixedPrice', props);
    return resource.getResponseField('ReservedCacheNode.FixedPrice') as unknown as number;
  }

  public get usagePrice(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.UsagePrice'),
        outputPath: 'ReservedCacheNode.UsagePrice',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.UsagePrice', props);
    return resource.getResponseField('ReservedCacheNode.UsagePrice') as unknown as number;
  }

  public get cacheNodeCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.CacheNodeCount'),
        outputPath: 'ReservedCacheNode.CacheNodeCount',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.CacheNodeCount', props);
    return resource.getResponseField('ReservedCacheNode.CacheNodeCount') as unknown as number;
  }

  public get productDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.ProductDescription'),
        outputPath: 'ReservedCacheNode.ProductDescription',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.ProductDescription', props);
    return resource.getResponseField('ReservedCacheNode.ProductDescription') as unknown as string;
  }

  public get offeringType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.OfferingType'),
        outputPath: 'ReservedCacheNode.OfferingType',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.OfferingType', props);
    return resource.getResponseField('ReservedCacheNode.OfferingType') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.State'),
        outputPath: 'ReservedCacheNode.State',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.State', props);
    return resource.getResponseField('ReservedCacheNode.State') as unknown as string;
  }

  public get recurringCharges(): shapes.ElastiCacheRecurringCharge[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.RecurringCharges'),
        outputPath: 'ReservedCacheNode.RecurringCharges',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.RecurringCharges', props);
    return resource.getResponseField('ReservedCacheNode.RecurringCharges') as unknown as shapes.ElastiCacheRecurringCharge[];
  }

  public get reservationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'purchaseReservedCacheNodesOffering',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.PurchaseReservedCacheNodesOffering.ReservedCacheNode.ReservationARN'),
        outputPath: 'ReservedCacheNode.ReservationARN',
        parameters: {
          ReservedCacheNodesOfferingId: this.input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.input.reservedCacheNodeId,
          CacheNodeCount: this.input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.ReservationARN', props);
    return resource.getResponseField('ReservedCacheNode.ReservationARN') as unknown as string;
  }

}

export class ElastiCacheRebalanceSlotsInGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroup(): ElastiCacheRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup(this, 'GlobalReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupId',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupDescription(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription'),
        outputPath: 'GlobalReplicationGroup.GlobalReplicationGroupDescription',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalReplicationGroupDescription') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.Status'),
        outputPath: 'GlobalReplicationGroup.Status',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
    return resource.getResponseField('GlobalReplicationGroup.Status') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType'),
        outputPath: 'GlobalReplicationGroup.CacheNodeType',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('GlobalReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.Engine'),
        outputPath: 'GlobalReplicationGroup.Engine',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
    return resource.getResponseField('GlobalReplicationGroup.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion'),
        outputPath: 'GlobalReplicationGroup.EngineVersion',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
    return resource.getResponseField('GlobalReplicationGroup.EngineVersion') as unknown as string;
  }

  public get members(): shapes.ElastiCacheGlobalReplicationGroupMember[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.Members'),
        outputPath: 'GlobalReplicationGroup.Members',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
    return resource.getResponseField('GlobalReplicationGroup.Members') as unknown as shapes.ElastiCacheGlobalReplicationGroupMember[];
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled'),
        outputPath: 'GlobalReplicationGroup.ClusterEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get globalNodeGroups(): shapes.ElastiCacheGlobalNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups'),
        outputPath: 'GlobalReplicationGroup.GlobalNodeGroups',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
    return resource.getResponseField('GlobalReplicationGroup.GlobalNodeGroups') as unknown as shapes.ElastiCacheGlobalNodeGroup[];
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled'),
        outputPath: 'GlobalReplicationGroup.AuthTokenEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'GlobalReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('GlobalReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebalanceSlotsInGlobalReplicationGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.ARN'),
        outputPath: 'GlobalReplicationGroup.ARN',
        parameters: {
          GlobalReplicationGroupId: this.input.globalReplicationGroupId,
          ApplyImmediately: this.input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheRebootCacheCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheRebootCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheCluster(): ElastiCacheRebootCacheClusterCacheCluster {
    return new ElastiCacheRebootCacheClusterCacheCluster(this, 'CacheCluster', this.__resources, this.input);
  }

}

export class ElastiCacheRebootCacheClusterCacheCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheRebootCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.CacheClusterId'),
        outputPath: 'CacheCluster.CacheClusterId',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.CacheClusterId', props);
    return resource.getResponseField('CacheCluster.CacheClusterId') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheRebootCacheClusterCacheClusterConfigurationEndpoint {
    return new ElastiCacheRebootCacheClusterCacheClusterConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get clientDownloadLandingPage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.ClientDownloadLandingPage'),
        outputPath: 'CacheCluster.ClientDownloadLandingPage',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.ClientDownloadLandingPage', props);
    return resource.getResponseField('CacheCluster.ClientDownloadLandingPage') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.CacheNodeType'),
        outputPath: 'CacheCluster.CacheNodeType',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.CacheNodeType', props);
    return resource.getResponseField('CacheCluster.CacheNodeType') as unknown as string;
  }

  public get engine(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.Engine'),
        outputPath: 'CacheCluster.Engine',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.Engine', props);
    return resource.getResponseField('CacheCluster.Engine') as unknown as string;
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.EngineVersion'),
        outputPath: 'CacheCluster.EngineVersion',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.EngineVersion', props);
    return resource.getResponseField('CacheCluster.EngineVersion') as unknown as string;
  }

  public get cacheClusterStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.CacheClusterStatus'),
        outputPath: 'CacheCluster.CacheClusterStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.CacheClusterStatus', props);
    return resource.getResponseField('CacheCluster.CacheClusterStatus') as unknown as string;
  }

  public get numCacheNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.NumCacheNodes'),
        outputPath: 'CacheCluster.NumCacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.NumCacheNodes', props);
    return resource.getResponseField('CacheCluster.NumCacheNodes') as unknown as number;
  }

  public get preferredAvailabilityZone(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.PreferredAvailabilityZone'),
        outputPath: 'CacheCluster.PreferredAvailabilityZone',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.PreferredAvailabilityZone', props);
    return resource.getResponseField('CacheCluster.PreferredAvailabilityZone') as unknown as string;
  }

  public get preferredOutpostArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.PreferredOutpostArn'),
        outputPath: 'CacheCluster.PreferredOutpostArn',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.PreferredOutpostArn', props);
    return resource.getResponseField('CacheCluster.PreferredOutpostArn') as unknown as string;
  }

  public get cacheClusterCreateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.CacheClusterCreateTime'),
        outputPath: 'CacheCluster.CacheClusterCreateTime',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.CacheClusterCreateTime', props);
    return resource.getResponseField('CacheCluster.CacheClusterCreateTime') as unknown as string;
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.PreferredMaintenanceWindow'),
        outputPath: 'CacheCluster.PreferredMaintenanceWindow',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('CacheCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheRebootCacheClusterCacheClusterPendingModifiedValues {
    return new ElastiCacheRebootCacheClusterCacheClusterPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get notificationConfiguration(): ElastiCacheRebootCacheClusterCacheClusterNotificationConfiguration {
    return new ElastiCacheRebootCacheClusterCacheClusterNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
  }

  public get cacheSecurityGroups(): shapes.ElastiCacheCacheSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.CacheSecurityGroups'),
        outputPath: 'CacheCluster.CacheSecurityGroups',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.CacheSecurityGroups', props);
    return resource.getResponseField('CacheCluster.CacheSecurityGroups') as unknown as shapes.ElastiCacheCacheSecurityGroupMembership[];
  }

  public get cacheParameterGroup(): ElastiCacheRebootCacheClusterCacheClusterCacheParameterGroup {
    return new ElastiCacheRebootCacheClusterCacheClusterCacheParameterGroup(this, 'CacheParameterGroup', this.__resources, this.input);
  }

  public get cacheSubnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.CacheSubnetGroupName'),
        outputPath: 'CacheCluster.CacheSubnetGroupName',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.CacheSubnetGroupName', props);
    return resource.getResponseField('CacheCluster.CacheSubnetGroupName') as unknown as string;
  }

  public get cacheNodes(): shapes.ElastiCacheCacheNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.CacheNodes'),
        outputPath: 'CacheCluster.CacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.CacheNodes', props);
    return resource.getResponseField('CacheCluster.CacheNodes') as unknown as shapes.ElastiCacheCacheNode[];
  }

  public get autoMinorVersionUpgrade(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.AutoMinorVersionUpgrade'),
        outputPath: 'CacheCluster.AutoMinorVersionUpgrade',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.AutoMinorVersionUpgrade', props);
    return resource.getResponseField('CacheCluster.AutoMinorVersionUpgrade') as unknown as boolean;
  }

  public get securityGroups(): shapes.ElastiCacheSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.SecurityGroups'),
        outputPath: 'CacheCluster.SecurityGroups',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.SecurityGroups', props);
    return resource.getResponseField('CacheCluster.SecurityGroups') as unknown as shapes.ElastiCacheSecurityGroupMembership[];
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.ReplicationGroupId'),
        outputPath: 'CacheCluster.ReplicationGroupId',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.ReplicationGroupId', props);
    return resource.getResponseField('CacheCluster.ReplicationGroupId') as unknown as string;
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.SnapshotRetentionLimit'),
        outputPath: 'CacheCluster.SnapshotRetentionLimit',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.SnapshotRetentionLimit', props);
    return resource.getResponseField('CacheCluster.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.SnapshotWindow'),
        outputPath: 'CacheCluster.SnapshotWindow',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.SnapshotWindow', props);
    return resource.getResponseField('CacheCluster.SnapshotWindow') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.AuthTokenEnabled'),
        outputPath: 'CacheCluster.AuthTokenEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.AuthTokenEnabled', props);
    return resource.getResponseField('CacheCluster.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.AuthTokenLastModifiedDate'),
        outputPath: 'CacheCluster.AuthTokenLastModifiedDate',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('CacheCluster.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.TransitEncryptionEnabled'),
        outputPath: 'CacheCluster.TransitEncryptionEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.TransitEncryptionEnabled', props);
    return resource.getResponseField('CacheCluster.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.AtRestEncryptionEnabled'),
        outputPath: 'CacheCluster.AtRestEncryptionEnabled',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.AtRestEncryptionEnabled', props);
    return resource.getResponseField('CacheCluster.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.ARN'),
        outputPath: 'CacheCluster.ARN',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.ARN', props);
    return resource.getResponseField('CacheCluster.ARN') as unknown as string;
  }

}

export class ElastiCacheRebootCacheClusterCacheClusterConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheRebootCacheClusterMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.ConfigurationEndpoint.Address'),
        outputPath: 'CacheCluster.ConfigurationEndpoint.Address',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.ConfigurationEndpoint.Port'),
        outputPath: 'CacheCluster.ConfigurationEndpoint.Port',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheRebootCacheClusterCacheClusterPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheRebootCacheClusterMessage) {
    super(scope, id);
  }

  public get numCacheNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes'),
        outputPath: 'CacheCluster.PendingModifiedValues.NumCacheNodes',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.NumCacheNodes') as unknown as number;
  }

  public get cacheNodeIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove'),
        outputPath: 'CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove') as unknown as string[];
  }

  public get engineVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion'),
        outputPath: 'CacheCluster.PendingModifiedValues.EngineVersion',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.EngineVersion') as unknown as string;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType'),
        outputPath: 'CacheCluster.PendingModifiedValues.CacheNodeType',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.CacheNodeType') as unknown as string;
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'CacheCluster.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

}

export class ElastiCacheRebootCacheClusterCacheClusterNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheRebootCacheClusterMessage) {
    super(scope, id);
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.NotificationConfiguration.TopicArn'),
        outputPath: 'CacheCluster.NotificationConfiguration.TopicArn',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.NotificationConfiguration.TopicArn', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicArn') as unknown as string;
  }

  public get topicStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus'),
        outputPath: 'CacheCluster.NotificationConfiguration.TopicStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class ElastiCacheRebootCacheClusterCacheClusterCacheParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheRebootCacheClusterMessage) {
    super(scope, id);
  }

  public get cacheParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName'),
        outputPath: 'CacheCluster.CacheParameterGroup.CacheParameterGroupName',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheParameterGroupName') as unknown as string;
  }

  public get parameterApplyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus'),
        outputPath: 'CacheCluster.CacheParameterGroup.ParameterApplyStatus',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.ParameterApplyStatus') as unknown as string;
  }

  public get cacheNodeIdsToReboot(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootCacheCluster',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RebootCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot'),
        outputPath: 'CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot',
        parameters: {
          CacheClusterId: this.input.cacheClusterId,
          CacheNodeIdsToReboot: this.input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot') as unknown as string[];
  }

}

export class ElastiCacheRemoveTagsFromResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheRemoveTagsFromResourceMessage) {
    super(scope, id);
  }

  public get tagList(): shapes.ElastiCacheTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'removeTagsFromResource',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RemoveTagsFromResource.TagList'),
        outputPath: 'TagList',
        parameters: {
          ResourceName: this.input.resourceName,
          TagKeys: this.input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RemoveTagsFromResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.ElastiCacheTag[];
  }

}

export class ElastiCacheResetCacheParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheResetCacheParameterGroupMessage) {
    super(scope, id);
  }

  public get cacheParameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'resetCacheParameterGroup',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.ResetCacheParameterGroup.CacheParameterGroupName'),
        outputPath: 'CacheParameterGroupName',
        parameters: {
          CacheParameterGroupName: this.input.cacheParameterGroupName,
          ResetAllParameters: this.input.resetAllParameters,
          ParameterNameValues: this.input.parameterNameValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ResetCacheParameterGroup.CacheParameterGroupName', props);
    return resource.getResponseField('CacheParameterGroupName') as unknown as string;
  }

}

export class ElastiCacheRevokeCacheSecurityGroupIngress extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheRevokeCacheSecurityGroupIngressMessage) {
    super(scope, id);
  }

  public get cacheSecurityGroup(): ElastiCacheRevokeCacheSecurityGroupIngressCacheSecurityGroup {
    return new ElastiCacheRevokeCacheSecurityGroupIngressCacheSecurityGroup(this, 'CacheSecurityGroup', this.__resources, this.input);
  }

}

export class ElastiCacheRevokeCacheSecurityGroupIngressCacheSecurityGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheRevokeCacheSecurityGroupIngressMessage) {
    super(scope, id);
  }

  public get ownerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeCacheSecurityGroupIngress',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RevokeCacheSecurityGroupIngress.CacheSecurityGroup.OwnerId'),
        outputPath: 'CacheSecurityGroup.OwnerId',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RevokeCacheSecurityGroupIngress.CacheSecurityGroup.OwnerId', props);
    return resource.getResponseField('CacheSecurityGroup.OwnerId') as unknown as string;
  }

  public get cacheSecurityGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeCacheSecurityGroupIngress',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RevokeCacheSecurityGroupIngress.CacheSecurityGroup.CacheSecurityGroupName'),
        outputPath: 'CacheSecurityGroup.CacheSecurityGroupName',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RevokeCacheSecurityGroupIngress.CacheSecurityGroup.CacheSecurityGroupName', props);
    return resource.getResponseField('CacheSecurityGroup.CacheSecurityGroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeCacheSecurityGroupIngress',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RevokeCacheSecurityGroupIngress.CacheSecurityGroup.Description'),
        outputPath: 'CacheSecurityGroup.Description',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RevokeCacheSecurityGroupIngress.CacheSecurityGroup.Description', props);
    return resource.getResponseField('CacheSecurityGroup.Description') as unknown as string;
  }

  public get ec2SecurityGroups(): shapes.ElastiCacheEc2SecurityGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeCacheSecurityGroupIngress',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RevokeCacheSecurityGroupIngress.CacheSecurityGroup.EC2SecurityGroups'),
        outputPath: 'CacheSecurityGroup.EC2SecurityGroups',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RevokeCacheSecurityGroupIngress.CacheSecurityGroup.EC2SecurityGroups', props);
    return resource.getResponseField('CacheSecurityGroup.EC2SecurityGroups') as unknown as shapes.ElastiCacheEc2SecurityGroup[];
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'revokeCacheSecurityGroupIngress',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.RevokeCacheSecurityGroupIngress.CacheSecurityGroup.ARN'),
        outputPath: 'CacheSecurityGroup.ARN',
        parameters: {
          CacheSecurityGroupName: this.input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RevokeCacheSecurityGroupIngress.CacheSecurityGroup.ARN', props);
    return resource.getResponseField('CacheSecurityGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheStartMigration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheStartMigrationMessage) {
    super(scope, id);
  }

  public get replicationGroup(): ElastiCacheStartMigrationReplicationGroup {
    return new ElastiCacheStartMigrationReplicationGroup(this, 'ReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheStartMigrationReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheStartMigrationMessage) {
    super(scope, id);
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.ReplicationGroupId'),
        outputPath: 'ReplicationGroup.ReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.ReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.ReplicationGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.Description'),
        outputPath: 'ReplicationGroup.Description',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheStartMigrationReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheStartMigrationReplicationGroupGlobalReplicationGroupInfo(this, 'GlobalReplicationGroupInfo', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.Status'),
        outputPath: 'ReplicationGroup.Status',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheStartMigrationReplicationGroupPendingModifiedValues {
    return new ElastiCacheStartMigrationReplicationGroupPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get memberClusters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.MemberClusters'),
        outputPath: 'ReplicationGroup.MemberClusters',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.MemberClusters', props);
    return resource.getResponseField('ReplicationGroup.MemberClusters') as unknown as string[];
  }

  public get nodeGroups(): shapes.ElastiCacheNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.NodeGroups'),
        outputPath: 'ReplicationGroup.NodeGroups',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.NodeGroups', props);
    return resource.getResponseField('ReplicationGroup.NodeGroups') as unknown as shapes.ElastiCacheNodeGroup[];
  }

  public get snapshottingClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.SnapshottingClusterId'),
        outputPath: 'ReplicationGroup.SnapshottingClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.SnapshottingClusterId', props);
    return resource.getResponseField('ReplicationGroup.SnapshottingClusterId') as unknown as string;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.AutomaticFailover'),
        outputPath: 'ReplicationGroup.AutomaticFailover',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.AutomaticFailover', props);
    return resource.getResponseField('ReplicationGroup.AutomaticFailover') as unknown as string;
  }

  public get multiAz(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.MultiAZ'),
        outputPath: 'ReplicationGroup.MultiAZ',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheStartMigrationReplicationGroupConfigurationEndpoint {
    return new ElastiCacheStartMigrationReplicationGroupConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.SnapshotRetentionLimit'),
        outputPath: 'ReplicationGroup.SnapshotRetentionLimit',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.SnapshotRetentionLimit', props);
    return resource.getResponseField('ReplicationGroup.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.SnapshotWindow'),
        outputPath: 'ReplicationGroup.SnapshotWindow',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.SnapshotWindow', props);
    return resource.getResponseField('ReplicationGroup.SnapshotWindow') as unknown as string;
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.ClusterEnabled'),
        outputPath: 'ReplicationGroup.ClusterEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('ReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.CacheNodeType'),
        outputPath: 'ReplicationGroup.CacheNodeType',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('ReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.AuthTokenEnabled'),
        outputPath: 'ReplicationGroup.AuthTokenEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.AuthTokenLastModifiedDate'),
        outputPath: 'ReplicationGroup.AuthTokenLastModifiedDate',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'ReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'ReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get memberClustersOutpostArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.MemberClustersOutpostArns'),
        outputPath: 'ReplicationGroup.MemberClustersOutpostArns',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.MemberClustersOutpostArns', props);
    return resource.getResponseField('ReplicationGroup.MemberClustersOutpostArns') as unknown as string[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.KmsKeyId'),
        outputPath: 'ReplicationGroup.KmsKeyId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.KmsKeyId', props);
    return resource.getResponseField('ReplicationGroup.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.ARN'),
        outputPath: 'ReplicationGroup.ARN',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.ARN', props);
    return resource.getResponseField('ReplicationGroup.ARN') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.UserGroupIds'),
        outputPath: 'ReplicationGroup.UserGroupIds',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheStartMigrationReplicationGroupGlobalReplicationGroupInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheStartMigrationMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupMemberRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheStartMigrationReplicationGroupPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheStartMigrationMessage) {
    super(scope, id);
  }

  public get primaryClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.PendingModifiedValues.PrimaryClusterId'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.PrimaryClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.PrimaryClusterId') as unknown as string;
  }

  public get automaticFailoverStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheStartMigrationReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheStartMigrationReplicationGroupPendingModifiedValuesResharding(this, 'Resharding', this.__resources, this.input);
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheStartMigrationReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheStartMigrationReplicationGroupPendingModifiedValuesUserGroups(this, 'UserGroups', this.__resources, this.input);
  }

}

export class ElastiCacheStartMigrationReplicationGroupPendingModifiedValuesResharding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheStartMigrationMessage) {
    super(scope, id);
  }

  public get slotMigration(): ElastiCacheStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration(this, 'SlotMigration', this.__resources, this.input);
  }

}

export class ElastiCacheStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheStartMigrationMessage) {
    super(scope, id);
  }

  public get progressPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheStartMigrationReplicationGroupPendingModifiedValuesUserGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheStartMigrationMessage) {
    super(scope, id);
  }

  public get userGroupIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd') as unknown as string[];
  }

  public get userGroupIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheStartMigrationReplicationGroupConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheStartMigrationMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.ConfigurationEndpoint.Address'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Address',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startMigration',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.StartMigration.ReplicationGroup.ConfigurationEndpoint.Port'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Port',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          CustomerNodeEndpointList: this.input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartMigration.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheTestFailover extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheTestFailoverMessage) {
    super(scope, id);
  }

  public get replicationGroup(): ElastiCacheTestFailoverReplicationGroup {
    return new ElastiCacheTestFailoverReplicationGroup(this, 'ReplicationGroup', this.__resources, this.input);
  }

}

export class ElastiCacheTestFailoverReplicationGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheTestFailoverMessage) {
    super(scope, id);
  }

  public get replicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.ReplicationGroupId'),
        outputPath: 'ReplicationGroup.ReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.ReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.ReplicationGroupId') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.Description'),
        outputPath: 'ReplicationGroup.Description',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheTestFailoverReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheTestFailoverReplicationGroupGlobalReplicationGroupInfo(this, 'GlobalReplicationGroupInfo', this.__resources, this.input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.Status'),
        outputPath: 'ReplicationGroup.Status',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheTestFailoverReplicationGroupPendingModifiedValues {
    return new ElastiCacheTestFailoverReplicationGroupPendingModifiedValues(this, 'PendingModifiedValues', this.__resources, this.input);
  }

  public get memberClusters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.MemberClusters'),
        outputPath: 'ReplicationGroup.MemberClusters',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.MemberClusters', props);
    return resource.getResponseField('ReplicationGroup.MemberClusters') as unknown as string[];
  }

  public get nodeGroups(): shapes.ElastiCacheNodeGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.NodeGroups'),
        outputPath: 'ReplicationGroup.NodeGroups',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.NodeGroups', props);
    return resource.getResponseField('ReplicationGroup.NodeGroups') as unknown as shapes.ElastiCacheNodeGroup[];
  }

  public get snapshottingClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.SnapshottingClusterId'),
        outputPath: 'ReplicationGroup.SnapshottingClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.SnapshottingClusterId', props);
    return resource.getResponseField('ReplicationGroup.SnapshottingClusterId') as unknown as string;
  }

  public get automaticFailover(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.AutomaticFailover'),
        outputPath: 'ReplicationGroup.AutomaticFailover',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.AutomaticFailover', props);
    return resource.getResponseField('ReplicationGroup.AutomaticFailover') as unknown as string;
  }

  public get multiAz(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.MultiAZ'),
        outputPath: 'ReplicationGroup.MultiAZ',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheTestFailoverReplicationGroupConfigurationEndpoint {
    return new ElastiCacheTestFailoverReplicationGroupConfigurationEndpoint(this, 'ConfigurationEndpoint', this.__resources, this.input);
  }

  public get snapshotRetentionLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.SnapshotRetentionLimit'),
        outputPath: 'ReplicationGroup.SnapshotRetentionLimit',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.SnapshotRetentionLimit', props);
    return resource.getResponseField('ReplicationGroup.SnapshotRetentionLimit') as unknown as number;
  }

  public get snapshotWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.SnapshotWindow'),
        outputPath: 'ReplicationGroup.SnapshotWindow',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.SnapshotWindow', props);
    return resource.getResponseField('ReplicationGroup.SnapshotWindow') as unknown as string;
  }

  public get clusterEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.ClusterEnabled'),
        outputPath: 'ReplicationGroup.ClusterEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.ClusterEnabled', props);
    return resource.getResponseField('ReplicationGroup.ClusterEnabled') as unknown as boolean;
  }

  public get cacheNodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.CacheNodeType'),
        outputPath: 'ReplicationGroup.CacheNodeType',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.CacheNodeType', props);
    return resource.getResponseField('ReplicationGroup.CacheNodeType') as unknown as string;
  }

  public get authTokenEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.AuthTokenEnabled'),
        outputPath: 'ReplicationGroup.AuthTokenEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.AuthTokenEnabled', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenEnabled') as unknown as boolean;
  }

  public get authTokenLastModifiedDate(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.AuthTokenLastModifiedDate'),
        outputPath: 'ReplicationGroup.AuthTokenLastModifiedDate',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.AuthTokenLastModifiedDate', props);
    return resource.getResponseField('ReplicationGroup.AuthTokenLastModifiedDate') as unknown as string;
  }

  public get transitEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.TransitEncryptionEnabled'),
        outputPath: 'ReplicationGroup.TransitEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.TransitEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.TransitEncryptionEnabled') as unknown as boolean;
  }

  public get atRestEncryptionEnabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.AtRestEncryptionEnabled'),
        outputPath: 'ReplicationGroup.AtRestEncryptionEnabled',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.AtRestEncryptionEnabled', props);
    return resource.getResponseField('ReplicationGroup.AtRestEncryptionEnabled') as unknown as boolean;
  }

  public get memberClustersOutpostArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.MemberClustersOutpostArns'),
        outputPath: 'ReplicationGroup.MemberClustersOutpostArns',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.MemberClustersOutpostArns', props);
    return resource.getResponseField('ReplicationGroup.MemberClustersOutpostArns') as unknown as string[];
  }

  public get kmsKeyId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.KmsKeyId'),
        outputPath: 'ReplicationGroup.KmsKeyId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.KmsKeyId', props);
    return resource.getResponseField('ReplicationGroup.KmsKeyId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.ARN'),
        outputPath: 'ReplicationGroup.ARN',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.ARN', props);
    return resource.getResponseField('ReplicationGroup.ARN') as unknown as string;
  }

  public get userGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.UserGroupIds'),
        outputPath: 'ReplicationGroup.UserGroupIds',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheTestFailoverReplicationGroupGlobalReplicationGroupInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheTestFailoverMessage) {
    super(scope, id);
  }

  public get globalReplicationGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId') as unknown as string;
  }

  public get globalReplicationGroupMemberRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole'),
        outputPath: 'ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheTestFailoverReplicationGroupPendingModifiedValues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheTestFailoverMessage) {
    super(scope, id);
  }

  public get primaryClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.PendingModifiedValues.PrimaryClusterId'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.PrimaryClusterId',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.PrimaryClusterId') as unknown as string;
  }

  public get automaticFailoverStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheTestFailoverReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheTestFailoverReplicationGroupPendingModifiedValuesResharding(this, 'Resharding', this.__resources, this.input);
  }

  public get authTokenStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.PendingModifiedValues.AuthTokenStatus'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.AuthTokenStatus',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheTestFailoverReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheTestFailoverReplicationGroupPendingModifiedValuesUserGroups(this, 'UserGroups', this.__resources, this.input);
  }

}

export class ElastiCacheTestFailoverReplicationGroupPendingModifiedValuesResharding extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheTestFailoverMessage) {
    super(scope, id);
  }

  public get slotMigration(): ElastiCacheTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration(this, 'SlotMigration', this.__resources, this.input);
  }

}

export class ElastiCacheTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheTestFailoverMessage) {
    super(scope, id);
  }

  public get progressPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheTestFailoverReplicationGroupPendingModifiedValuesUserGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheTestFailoverMessage) {
    super(scope, id);
  }

  public get userGroupIdsToAdd(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd') as unknown as string[];
  }

  public get userGroupIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove'),
        outputPath: 'ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheTestFailoverReplicationGroupConfigurationEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.ElastiCacheTestFailoverMessage) {
    super(scope, id);
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.ConfigurationEndpoint.Address'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Address',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.ConfigurationEndpoint.Address', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'testFailover',
        service: 'ElastiCache',
        physicalResourceId: cr.PhysicalResourceId.of('ElastiCache.TestFailover.ReplicationGroup.ConfigurationEndpoint.Port'),
        outputPath: 'ReplicationGroup.ConfigurationEndpoint.Port',
        parameters: {
          ReplicationGroupId: this.input.replicationGroupId,
          NodeGroupId: this.input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TestFailover.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

