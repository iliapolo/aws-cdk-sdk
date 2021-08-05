import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class ElastiCacheClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTagsToResource(input: shapes.ElastiCacheAddTagsToResourceMessage): ElastiCacheResponsesAddTagsToResource {
    return new ElastiCacheResponsesAddTagsToResource(this, this.__resources, input);
  }

  public authorizeCacheSecurityGroupIngress(input: shapes.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage): ElastiCacheResponsesAuthorizeCacheSecurityGroupIngress {
    return new ElastiCacheResponsesAuthorizeCacheSecurityGroupIngress(this, this.__resources, input);
  }

  public batchApplyUpdateAction(input: shapes.ElastiCacheBatchApplyUpdateActionMessage): ElastiCacheResponsesBatchApplyUpdateAction {
    return new ElastiCacheResponsesBatchApplyUpdateAction(this, this.__resources, input);
  }

  public batchStopUpdateAction(input: shapes.ElastiCacheBatchStopUpdateActionMessage): ElastiCacheResponsesBatchStopUpdateAction {
    return new ElastiCacheResponsesBatchStopUpdateAction(this, this.__resources, input);
  }

  public completeMigration(input: shapes.ElastiCacheCompleteMigrationMessage): ElastiCacheResponsesCompleteMigration {
    return new ElastiCacheResponsesCompleteMigration(this, this.__resources, input);
  }

  public copySnapshot(input: shapes.ElastiCacheCopySnapshotMessage): ElastiCacheResponsesCopySnapshot {
    return new ElastiCacheResponsesCopySnapshot(this, this.__resources, input);
  }

  public createCacheCluster(input: shapes.ElastiCacheCreateCacheClusterMessage): ElastiCacheResponsesCreateCacheCluster {
    return new ElastiCacheResponsesCreateCacheCluster(this, this.__resources, input);
  }

  public createCacheParameterGroup(input: shapes.ElastiCacheCreateCacheParameterGroupMessage): ElastiCacheResponsesCreateCacheParameterGroup {
    return new ElastiCacheResponsesCreateCacheParameterGroup(this, this.__resources, input);
  }

  public createCacheSecurityGroup(input: shapes.ElastiCacheCreateCacheSecurityGroupMessage): ElastiCacheResponsesCreateCacheSecurityGroup {
    return new ElastiCacheResponsesCreateCacheSecurityGroup(this, this.__resources, input);
  }

  public createCacheSubnetGroup(input: shapes.ElastiCacheCreateCacheSubnetGroupMessage): ElastiCacheResponsesCreateCacheSubnetGroup {
    return new ElastiCacheResponsesCreateCacheSubnetGroup(this, this.__resources, input);
  }

  public createGlobalReplicationGroup(input: shapes.ElastiCacheCreateGlobalReplicationGroupMessage): ElastiCacheResponsesCreateGlobalReplicationGroup {
    return new ElastiCacheResponsesCreateGlobalReplicationGroup(this, this.__resources, input);
  }

  public createReplicationGroup(input: shapes.ElastiCacheCreateReplicationGroupMessage): ElastiCacheResponsesCreateReplicationGroup {
    return new ElastiCacheResponsesCreateReplicationGroup(this, this.__resources, input);
  }

  public createSnapshot(input: shapes.ElastiCacheCreateSnapshotMessage): ElastiCacheResponsesCreateSnapshot {
    return new ElastiCacheResponsesCreateSnapshot(this, this.__resources, input);
  }

  public createUser(input: shapes.ElastiCacheCreateUserMessage): ElastiCacheResponsesCreateUser {
    return new ElastiCacheResponsesCreateUser(this, this.__resources, input);
  }

  public createUserGroup(input: shapes.ElastiCacheCreateUserGroupMessage): ElastiCacheResponsesCreateUserGroup {
    return new ElastiCacheResponsesCreateUserGroup(this, this.__resources, input);
  }

  public decreaseNodeGroupsInGlobalReplicationGroup(input: shapes.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage): ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroup {
    return new ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroup(this, this.__resources, input);
  }

  public decreaseReplicaCount(input: shapes.ElastiCacheDecreaseReplicaCountMessage): ElastiCacheResponsesDecreaseReplicaCount {
    return new ElastiCacheResponsesDecreaseReplicaCount(this, this.__resources, input);
  }

  public deleteCacheCluster(input: shapes.ElastiCacheDeleteCacheClusterMessage): ElastiCacheResponsesDeleteCacheCluster {
    return new ElastiCacheResponsesDeleteCacheCluster(this, this.__resources, input);
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

  public deleteGlobalReplicationGroup(input: shapes.ElastiCacheDeleteGlobalReplicationGroupMessage): ElastiCacheResponsesDeleteGlobalReplicationGroup {
    return new ElastiCacheResponsesDeleteGlobalReplicationGroup(this, this.__resources, input);
  }

  public deleteReplicationGroup(input: shapes.ElastiCacheDeleteReplicationGroupMessage): ElastiCacheResponsesDeleteReplicationGroup {
    return new ElastiCacheResponsesDeleteReplicationGroup(this, this.__resources, input);
  }

  public deleteSnapshot(input: shapes.ElastiCacheDeleteSnapshotMessage): ElastiCacheResponsesDeleteSnapshot {
    return new ElastiCacheResponsesDeleteSnapshot(this, this.__resources, input);
  }

  public deleteUser(input: shapes.ElastiCacheDeleteUserMessage): ElastiCacheResponsesDeleteUser {
    return new ElastiCacheResponsesDeleteUser(this, this.__resources, input);
  }

  public deleteUserGroup(input: shapes.ElastiCacheDeleteUserGroupMessage): ElastiCacheResponsesDeleteUserGroup {
    return new ElastiCacheResponsesDeleteUserGroup(this, this.__resources, input);
  }

  public describeCacheClusters(input: shapes.ElastiCacheDescribeCacheClustersMessage): ElastiCacheResponsesDescribeCacheClusters {
    return new ElastiCacheResponsesDescribeCacheClusters(this, this.__resources, input);
  }

  public describeCacheEngineVersions(input: shapes.ElastiCacheDescribeCacheEngineVersionsMessage): ElastiCacheResponsesDescribeCacheEngineVersions {
    return new ElastiCacheResponsesDescribeCacheEngineVersions(this, this.__resources, input);
  }

  public describeCacheParameterGroups(input: shapes.ElastiCacheDescribeCacheParameterGroupsMessage): ElastiCacheResponsesDescribeCacheParameterGroups {
    return new ElastiCacheResponsesDescribeCacheParameterGroups(this, this.__resources, input);
  }

  public describeCacheParameters(input: shapes.ElastiCacheDescribeCacheParametersMessage): ElastiCacheResponsesDescribeCacheParameters {
    return new ElastiCacheResponsesDescribeCacheParameters(this, this.__resources, input);
  }

  public describeCacheSecurityGroups(input: shapes.ElastiCacheDescribeCacheSecurityGroupsMessage): ElastiCacheResponsesDescribeCacheSecurityGroups {
    return new ElastiCacheResponsesDescribeCacheSecurityGroups(this, this.__resources, input);
  }

  public describeCacheSubnetGroups(input: shapes.ElastiCacheDescribeCacheSubnetGroupsMessage): ElastiCacheResponsesDescribeCacheSubnetGroups {
    return new ElastiCacheResponsesDescribeCacheSubnetGroups(this, this.__resources, input);
  }

  public describeEngineDefaultParameters(input: shapes.ElastiCacheDescribeEngineDefaultParametersMessage): ElastiCacheResponsesDescribeEngineDefaultParameters {
    return new ElastiCacheResponsesDescribeEngineDefaultParameters(this, this.__resources, input);
  }

  public describeEvents(input: shapes.ElastiCacheDescribeEventsMessage): ElastiCacheResponsesDescribeEvents {
    return new ElastiCacheResponsesDescribeEvents(this, this.__resources, input);
  }

  public describeGlobalReplicationGroups(input: shapes.ElastiCacheDescribeGlobalReplicationGroupsMessage): ElastiCacheResponsesDescribeGlobalReplicationGroups {
    return new ElastiCacheResponsesDescribeGlobalReplicationGroups(this, this.__resources, input);
  }

  public describeReplicationGroups(input: shapes.ElastiCacheDescribeReplicationGroupsMessage): ElastiCacheResponsesDescribeReplicationGroups {
    return new ElastiCacheResponsesDescribeReplicationGroups(this, this.__resources, input);
  }

  public describeReservedCacheNodes(input: shapes.ElastiCacheDescribeReservedCacheNodesMessage): ElastiCacheResponsesDescribeReservedCacheNodes {
    return new ElastiCacheResponsesDescribeReservedCacheNodes(this, this.__resources, input);
  }

  public describeReservedCacheNodesOfferings(input: shapes.ElastiCacheDescribeReservedCacheNodesOfferingsMessage): ElastiCacheResponsesDescribeReservedCacheNodesOfferings {
    return new ElastiCacheResponsesDescribeReservedCacheNodesOfferings(this, this.__resources, input);
  }

  public describeServiceUpdates(input: shapes.ElastiCacheDescribeServiceUpdatesMessage): ElastiCacheResponsesDescribeServiceUpdates {
    return new ElastiCacheResponsesDescribeServiceUpdates(this, this.__resources, input);
  }

  public describeSnapshots(input: shapes.ElastiCacheDescribeSnapshotsMessage): ElastiCacheResponsesDescribeSnapshots {
    return new ElastiCacheResponsesDescribeSnapshots(this, this.__resources, input);
  }

  public describeUpdateActions(input: shapes.ElastiCacheDescribeUpdateActionsMessage): ElastiCacheResponsesDescribeUpdateActions {
    return new ElastiCacheResponsesDescribeUpdateActions(this, this.__resources, input);
  }

  public describeUserGroups(input: shapes.ElastiCacheDescribeUserGroupsMessage): ElastiCacheResponsesDescribeUserGroups {
    return new ElastiCacheResponsesDescribeUserGroups(this, this.__resources, input);
  }

  public describeUsers(input: shapes.ElastiCacheDescribeUsersMessage): ElastiCacheResponsesDescribeUsers {
    return new ElastiCacheResponsesDescribeUsers(this, this.__resources, input);
  }

  public disassociateGlobalReplicationGroup(input: shapes.ElastiCacheDisassociateGlobalReplicationGroupMessage): ElastiCacheResponsesDisassociateGlobalReplicationGroup {
    return new ElastiCacheResponsesDisassociateGlobalReplicationGroup(this, this.__resources, input);
  }

  public failoverGlobalReplicationGroup(input: shapes.ElastiCacheFailoverGlobalReplicationGroupMessage): ElastiCacheResponsesFailoverGlobalReplicationGroup {
    return new ElastiCacheResponsesFailoverGlobalReplicationGroup(this, this.__resources, input);
  }

  public increaseNodeGroupsInGlobalReplicationGroup(input: shapes.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage): ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroup {
    return new ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroup(this, this.__resources, input);
  }

  public increaseReplicaCount(input: shapes.ElastiCacheIncreaseReplicaCountMessage): ElastiCacheResponsesIncreaseReplicaCount {
    return new ElastiCacheResponsesIncreaseReplicaCount(this, this.__resources, input);
  }

  public listAllowedNodeTypeModifications(input: shapes.ElastiCacheListAllowedNodeTypeModificationsMessage): ElastiCacheResponsesListAllowedNodeTypeModifications {
    return new ElastiCacheResponsesListAllowedNodeTypeModifications(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.ElastiCacheListTagsForResourceMessage): ElastiCacheResponsesListTagsForResource {
    return new ElastiCacheResponsesListTagsForResource(this, this.__resources, input);
  }

  public modifyCacheCluster(input: shapes.ElastiCacheModifyCacheClusterMessage): ElastiCacheResponsesModifyCacheCluster {
    return new ElastiCacheResponsesModifyCacheCluster(this, this.__resources, input);
  }

  public modifyCacheParameterGroup(input: shapes.ElastiCacheModifyCacheParameterGroupMessage): ElastiCacheResponsesModifyCacheParameterGroup {
    return new ElastiCacheResponsesModifyCacheParameterGroup(this, this.__resources, input);
  }

  public modifyCacheSubnetGroup(input: shapes.ElastiCacheModifyCacheSubnetGroupMessage): ElastiCacheResponsesModifyCacheSubnetGroup {
    return new ElastiCacheResponsesModifyCacheSubnetGroup(this, this.__resources, input);
  }

  public modifyGlobalReplicationGroup(input: shapes.ElastiCacheModifyGlobalReplicationGroupMessage): ElastiCacheResponsesModifyGlobalReplicationGroup {
    return new ElastiCacheResponsesModifyGlobalReplicationGroup(this, this.__resources, input);
  }

  public modifyReplicationGroup(input: shapes.ElastiCacheModifyReplicationGroupMessage): ElastiCacheResponsesModifyReplicationGroup {
    return new ElastiCacheResponsesModifyReplicationGroup(this, this.__resources, input);
  }

  public modifyReplicationGroupShardConfiguration(input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage): ElastiCacheResponsesModifyReplicationGroupShardConfiguration {
    return new ElastiCacheResponsesModifyReplicationGroupShardConfiguration(this, this.__resources, input);
  }

  public modifyUser(input: shapes.ElastiCacheModifyUserMessage): ElastiCacheResponsesModifyUser {
    return new ElastiCacheResponsesModifyUser(this, this.__resources, input);
  }

  public modifyUserGroup(input: shapes.ElastiCacheModifyUserGroupMessage): ElastiCacheResponsesModifyUserGroup {
    return new ElastiCacheResponsesModifyUserGroup(this, this.__resources, input);
  }

  public purchaseReservedCacheNodesOffering(input: shapes.ElastiCachePurchaseReservedCacheNodesOfferingMessage): ElastiCacheResponsesPurchaseReservedCacheNodesOffering {
    return new ElastiCacheResponsesPurchaseReservedCacheNodesOffering(this, this.__resources, input);
  }

  public rebalanceSlotsInGlobalReplicationGroup(input: shapes.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage): ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroup {
    return new ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroup(this, this.__resources, input);
  }

  public rebootCacheCluster(input: shapes.ElastiCacheRebootCacheClusterMessage): ElastiCacheResponsesRebootCacheCluster {
    return new ElastiCacheResponsesRebootCacheCluster(this, this.__resources, input);
  }

  public removeTagsFromResource(input: shapes.ElastiCacheRemoveTagsFromResourceMessage): ElastiCacheResponsesRemoveTagsFromResource {
    return new ElastiCacheResponsesRemoveTagsFromResource(this, this.__resources, input);
  }

  public resetCacheParameterGroup(input: shapes.ElastiCacheResetCacheParameterGroupMessage): ElastiCacheResponsesResetCacheParameterGroup {
    return new ElastiCacheResponsesResetCacheParameterGroup(this, this.__resources, input);
  }

  public revokeCacheSecurityGroupIngress(input: shapes.ElastiCacheRevokeCacheSecurityGroupIngressMessage): ElastiCacheResponsesRevokeCacheSecurityGroupIngress {
    return new ElastiCacheResponsesRevokeCacheSecurityGroupIngress(this, this.__resources, input);
  }

  public startMigration(input: shapes.ElastiCacheStartMigrationMessage): ElastiCacheResponsesStartMigration {
    return new ElastiCacheResponsesStartMigration(this, this.__resources, input);
  }

  public testFailover(input: shapes.ElastiCacheTestFailoverMessage): ElastiCacheResponsesTestFailover {
    return new ElastiCacheResponsesTestFailover(this, this.__resources, input);
  }

}

export class ElastiCacheResponsesAddTagsToResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheAddTagsToResourceMessage) {
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
          ResourceName: this.__input.resourceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddTagsToResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.ElastiCacheTag[];
  }

}

export class ElastiCacheResponsesAuthorizeCacheSecurityGroupIngress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage) {
  }

  public get cacheSecurityGroup(): ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup {
    return new ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesAuthorizeCacheSecurityGroupIngressCacheSecurityGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheAuthorizeCacheSecurityGroupIngressMessage) {
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.__input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.__input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.OwnerId', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.__input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.__input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.CacheSecurityGroupName', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.__input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.__input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.Description', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.__input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.__input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.EC2SecurityGroups', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.__input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.__input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AuthorizeCacheSecurityGroupIngress.CacheSecurityGroup.ARN', props);
    return resource.getResponseField('CacheSecurityGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesBatchApplyUpdateAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheBatchApplyUpdateActionMessage) {
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
          ReplicationGroupIds: this.__input.replicationGroupIds,
          CacheClusterIds: this.__input.cacheClusterIds,
          ServiceUpdateName: this.__input.serviceUpdateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchApplyUpdateAction.ProcessedUpdateActions', props);
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
          ReplicationGroupIds: this.__input.replicationGroupIds,
          CacheClusterIds: this.__input.cacheClusterIds,
          ServiceUpdateName: this.__input.serviceUpdateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchApplyUpdateAction.UnprocessedUpdateActions', props);
    return resource.getResponseField('UnprocessedUpdateActions') as unknown as shapes.ElastiCacheUnprocessedUpdateAction[];
  }

}

export class ElastiCacheResponsesBatchStopUpdateAction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheBatchStopUpdateActionMessage) {
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
          ReplicationGroupIds: this.__input.replicationGroupIds,
          CacheClusterIds: this.__input.cacheClusterIds,
          ServiceUpdateName: this.__input.serviceUpdateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchStopUpdateAction.ProcessedUpdateActions', props);
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
          ReplicationGroupIds: this.__input.replicationGroupIds,
          CacheClusterIds: this.__input.cacheClusterIds,
          ServiceUpdateName: this.__input.serviceUpdateName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchStopUpdateAction.UnprocessedUpdateActions', props);
    return resource.getResponseField('UnprocessedUpdateActions') as unknown as shapes.ElastiCacheUnprocessedUpdateAction[];
  }

}

export class ElastiCacheResponsesCompleteMigration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCompleteMigrationMessage) {
  }

  public get replicationGroup(): ElastiCacheResponsesCompleteMigrationReplicationGroup {
    return new ElastiCacheResponsesCompleteMigrationReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCompleteMigrationReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCompleteMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.ReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues {
    return new ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.MemberClusters', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.NodeGroups', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.SnapshottingClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.AutomaticFailover', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint {
    return new ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.SnapshotRetentionLimit', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.SnapshotWindow', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.ClusterEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.CacheNodeType', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.AuthTokenEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.AuthTokenLastModifiedDate', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.TransitEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.AtRestEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.MemberClustersOutpostArns', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.KmsKeyId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.ARN', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheResponsesCompleteMigrationReplicationGroupGlobalReplicationGroupInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCompleteMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCompleteMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesResharding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCompleteMigrationMessage) {
  }

  public get slotMigration(): ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCompleteMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheResponsesCompleteMigrationReplicationGroupPendingModifiedValuesUserGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCompleteMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheResponsesCompleteMigrationReplicationGroupConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCompleteMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.ConfigurationEndpoint.Address', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          Force: this.__input.force,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CompleteMigration.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesCopySnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCopySnapshotMessage) {
  }

  public get snapshot(): ElastiCacheResponsesCopySnapshotSnapshot {
    return new ElastiCacheResponsesCopySnapshotSnapshot(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCopySnapshotSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCopySnapshotMessage) {
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.SnapshotName', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.ReplicationGroupId', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.ReplicationGroupDescription', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.CacheClusterId', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.SnapshotStatus', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.SnapshotSource', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.CacheNodeType', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.Engine', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.EngineVersion', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.NumCacheNodes', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.PreferredAvailabilityZone', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.PreferredOutpostArn', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.CacheClusterCreateTime', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.PreferredMaintenanceWindow', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.TopicArn', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.Port', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.CacheParameterGroupName', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.CacheSubnetGroupName', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.VpcId', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.AutoMinorVersionUpgrade', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.SnapshotRetentionLimit', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.SnapshotWindow', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.NumNodeGroups', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.AutomaticFailover', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.NodeSnapshots', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.KmsKeyId', props);
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
          SourceSnapshotName: this.__input.sourceSnapshotName,
          TargetSnapshotName: this.__input.targetSnapshotName,
          TargetBucket: this.__input.targetBucket,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CopySnapshot.Snapshot.ARN', props);
    return resource.getResponseField('Snapshot.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateCacheCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheClusterMessage) {
  }

  public get cacheCluster(): ElastiCacheResponsesCreateCacheClusterCacheCluster {
    return new ElastiCacheResponsesCreateCacheClusterCacheCluster(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCreateCacheClusterCacheCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.CacheClusterId', props);
    return resource.getResponseField('CacheCluster.CacheClusterId') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint {
    return new ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.ClientDownloadLandingPage', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.CacheNodeType', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.Engine', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.EngineVersion', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.CacheClusterStatus', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.NumCacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.PreferredAvailabilityZone', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.PreferredOutpostArn', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.CacheClusterCreateTime', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('CacheCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues {
    return new ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues(this.__scope, this.__resources, this.__input);
  }

  public get notificationConfiguration(): ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration {
    return new ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.CacheSecurityGroups', props);
    return resource.getResponseField('CacheCluster.CacheSecurityGroups') as unknown as shapes.ElastiCacheCacheSecurityGroupMembership[];
  }

  public get cacheParameterGroup(): ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup {
    return new ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.CacheSubnetGroupName', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.CacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.AutoMinorVersionUpgrade', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.SecurityGroups', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.ReplicationGroupId', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.SnapshotRetentionLimit', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.SnapshotWindow', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.AuthTokenEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.AuthTokenLastModifiedDate', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.TransitEncryptionEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.AtRestEncryptionEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.ARN', props);
    return resource.getResponseField('CacheCluster.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateCacheClusterCacheClusterConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.ConfigurationEndpoint.Address', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesCreateCacheClusterCacheClusterPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateCacheClusterCacheClusterNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.NotificationConfiguration.TopicArn', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateCacheClusterCacheClusterCacheParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
          AZMode: this.__input.azMode,
          PreferredAvailabilityZone: this.__input.preferredAvailabilityZone,
          PreferredAvailabilityZones: this.__input.preferredAvailabilityZones,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          OutpostMode: this.__input.outpostMode,
          PreferredOutpostArn: this.__input.preferredOutpostArn,
          PreferredOutpostArns: this.__input.preferredOutpostArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot') as unknown as string[];
  }

}

export class ElastiCacheResponsesCreateCacheParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheParameterGroupMessage) {
  }

  public get cacheParameterGroup(): ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup {
    return new ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCreateCacheParameterGroupCacheParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheParameterGroupMessage) {
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheParameterGroupFamily: this.__input.cacheParameterGroupFamily,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheParameterGroup.CacheParameterGroup.CacheParameterGroupName', props);
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheParameterGroupFamily: this.__input.cacheParameterGroupFamily,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheParameterGroup.CacheParameterGroup.CacheParameterGroupFamily', props);
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheParameterGroupFamily: this.__input.cacheParameterGroupFamily,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheParameterGroup.CacheParameterGroup.Description', props);
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheParameterGroupFamily: this.__input.cacheParameterGroupFamily,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheParameterGroup.CacheParameterGroup.IsGlobal', props);
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheParameterGroupFamily: this.__input.cacheParameterGroupFamily,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheParameterGroup.CacheParameterGroup.ARN', props);
    return resource.getResponseField('CacheParameterGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateCacheSecurityGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheSecurityGroupMessage) {
  }

  public get cacheSecurityGroup(): ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup {
    return new ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCreateCacheSecurityGroupCacheSecurityGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheSecurityGroupMessage) {
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheSecurityGroup.CacheSecurityGroup.OwnerId', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheSecurityGroup.CacheSecurityGroup.CacheSecurityGroupName', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheSecurityGroup.CacheSecurityGroup.Description', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheSecurityGroup.CacheSecurityGroup.EC2SecurityGroups', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheSecurityGroup.CacheSecurityGroup.ARN', props);
    return resource.getResponseField('CacheSecurityGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateCacheSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheSubnetGroupMessage) {
  }

  public get cacheSubnetGroup(): ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup {
    return new ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCreateCacheSubnetGroupCacheSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateCacheSubnetGroupMessage) {
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.__input.cacheSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupName', props);
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.__input.cacheSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupDescription', props);
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.__input.cacheSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheSubnetGroup.CacheSubnetGroup.VpcId', props);
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.__input.cacheSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheSubnetGroup.CacheSubnetGroup.Subnets', props);
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.__input.cacheSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCacheSubnetGroup.CacheSubnetGroup.ARN', props);
    return resource.getResponseField('CacheSubnetGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateGlobalReplicationGroupMessage) {
  }

  public get globalReplicationGroup(): ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCreateGlobalReplicationGroupGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateGlobalReplicationGroupMessage) {
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
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
          GlobalReplicationGroupIdSuffix: this.__input.globalReplicationGroupIdSuffix,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateReplicationGroupMessage) {
  }

  public get replicationGroup(): ElastiCacheResponsesCreateReplicationGroupReplicationGroup {
    return new ElastiCacheResponsesCreateReplicationGroupReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCreateReplicationGroupReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.ReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues {
    return new ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.MemberClusters', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.NodeGroups', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.SnapshottingClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.AutomaticFailover', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint {
    return new ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.SnapshotRetentionLimit', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.SnapshotWindow', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.ClusterEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.CacheNodeType', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.AuthTokenEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.AuthTokenLastModifiedDate', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.TransitEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.AtRestEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.MemberClustersOutpostArns', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.KmsKeyId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.ARN', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheResponsesCreateReplicationGroupReplicationGroupGlobalReplicationGroupInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesResharding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateReplicationGroupMessage) {
  }

  public get slotMigration(): ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheResponsesCreateReplicationGroupReplicationGroupPendingModifiedValuesUserGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheResponsesCreateReplicationGroupReplicationGroupConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Address', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryClusterId: this.__input.primaryClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NumCacheClusters: this.__input.numCacheClusters,
          PreferredCacheClusterAZs: this.__input.preferredCacheClusterAZs,
          NumNodeGroups: this.__input.numNodeGroups,
          ReplicasPerNodeGroup: this.__input.replicasPerNodeGroup,
          NodeGroupConfiguration: this.__input.nodeGroupConfiguration,
          CacheNodeType: this.__input.cacheNodeType,
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          Tags: this.__input.tags,
          SnapshotArns: this.__input.snapshotArns,
          SnapshotName: this.__input.snapshotName,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          Port: this.__input.port,
          NotificationTopicArn: this.__input.notificationTopicArn,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          AuthToken: this.__input.authToken,
          TransitEncryptionEnabled: this.__input.transitEncryptionEnabled,
          AtRestEncryptionEnabled: this.__input.atRestEncryptionEnabled,
          KmsKeyId: this.__input.kmsKeyId,
          UserGroupIds: this.__input.userGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesCreateSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateSnapshotMessage) {
  }

  public get snapshot(): ElastiCacheResponsesCreateSnapshotSnapshot {
    return new ElastiCacheResponsesCreateSnapshotSnapshot(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesCreateSnapshotSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateSnapshotMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.SnapshotName', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.ReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.ReplicationGroupDescription', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.CacheClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.SnapshotStatus', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.SnapshotSource', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.CacheNodeType', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.Engine', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.EngineVersion', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.NumCacheNodes', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.PreferredAvailabilityZone', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.PreferredOutpostArn', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.CacheClusterCreateTime', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.PreferredMaintenanceWindow', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.TopicArn', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.Port', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.CacheParameterGroupName', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.CacheSubnetGroupName', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.VpcId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.AutoMinorVersionUpgrade', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.SnapshotRetentionLimit', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.SnapshotWindow', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.NumNodeGroups', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.AutomaticFailover', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.NodeSnapshots', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.KmsKeyId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          KmsKeyId: this.__input.kmsKeyId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSnapshot.Snapshot.ARN', props);
    return resource.getResponseField('Snapshot.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateUserMessage) {
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
          UserId: this.__input.userId,
          UserName: this.__input.userName,
          Engine: this.__input.engine,
          Passwords: this.__input.passwords,
          AccessString: this.__input.accessString,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.UserId', props);
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
          UserId: this.__input.userId,
          UserName: this.__input.userName,
          Engine: this.__input.engine,
          Passwords: this.__input.passwords,
          AccessString: this.__input.accessString,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.UserName', props);
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
          UserId: this.__input.userId,
          UserName: this.__input.userName,
          Engine: this.__input.engine,
          Passwords: this.__input.passwords,
          AccessString: this.__input.accessString,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.Status', props);
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
          UserId: this.__input.userId,
          UserName: this.__input.userName,
          Engine: this.__input.engine,
          Passwords: this.__input.passwords,
          AccessString: this.__input.accessString,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.Engine', props);
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
          UserId: this.__input.userId,
          UserName: this.__input.userName,
          Engine: this.__input.engine,
          Passwords: this.__input.passwords,
          AccessString: this.__input.accessString,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.AccessString', props);
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
          UserId: this.__input.userId,
          UserName: this.__input.userName,
          Engine: this.__input.engine,
          Passwords: this.__input.passwords,
          AccessString: this.__input.accessString,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.UserGroupIds', props);
    return resource.getResponseField('UserGroupIds') as unknown as string[];
  }

  public get authentication(): ElastiCacheResponsesCreateUserAuthentication {
    return new ElastiCacheResponsesCreateUserAuthentication(this.__scope, this.__resources, this.__input);
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
          UserId: this.__input.userId,
          UserName: this.__input.userName,
          Engine: this.__input.engine,
          Passwords: this.__input.passwords,
          AccessString: this.__input.accessString,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateUserAuthentication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateUserMessage) {
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
          UserId: this.__input.userId,
          UserName: this.__input.userName,
          Engine: this.__input.engine,
          Passwords: this.__input.passwords,
          AccessString: this.__input.accessString,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.Authentication.Type', props);
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
          UserId: this.__input.userId,
          UserName: this.__input.userName,
          Engine: this.__input.engine,
          Passwords: this.__input.passwords,
          AccessString: this.__input.accessString,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUser.Authentication.PasswordCount', props);
    return resource.getResponseField('Authentication.PasswordCount') as unknown as number;
  }

}

export class ElastiCacheResponsesCreateUserGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateUserGroupMessage) {
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
          UserGroupId: this.__input.userGroupId,
          Engine: this.__input.engine,
          UserIds: this.__input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserGroup.UserGroupId', props);
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
          UserGroupId: this.__input.userGroupId,
          Engine: this.__input.engine,
          UserIds: this.__input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserGroup.Status', props);
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
          UserGroupId: this.__input.userGroupId,
          Engine: this.__input.engine,
          UserIds: this.__input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserGroup.Engine', props);
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
          UserGroupId: this.__input.userGroupId,
          Engine: this.__input.engine,
          UserIds: this.__input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserGroup.UserIds', props);
    return resource.getResponseField('UserIds') as unknown as string[];
  }

  public get pendingChanges(): ElastiCacheResponsesCreateUserGroupPendingChanges {
    return new ElastiCacheResponsesCreateUserGroupPendingChanges(this.__scope, this.__resources, this.__input);
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
          UserGroupId: this.__input.userGroupId,
          Engine: this.__input.engine,
          UserIds: this.__input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserGroup.ReplicationGroups', props);
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
          UserGroupId: this.__input.userGroupId,
          Engine: this.__input.engine,
          UserIds: this.__input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserGroup.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesCreateUserGroupPendingChanges {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheCreateUserGroupMessage) {
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
          UserGroupId: this.__input.userGroupId,
          Engine: this.__input.engine,
          UserIds: this.__input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserGroup.PendingChanges.UserIdsToRemove', props);
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
          UserGroupId: this.__input.userGroupId,
          Engine: this.__input.engine,
          UserIds: this.__input.userIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserGroup.PendingChanges.UserIdsToAdd', props);
    return resource.getResponseField('PendingChanges.UserIdsToAdd') as unknown as string[];
  }

}

export class ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage) {
  }

  public get globalReplicationGroup(): ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDecreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDecreaseNodeGroupsInGlobalReplicationGroupMessage) {
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          GlobalNodeGroupsToRemove: this.__input.globalNodeGroupsToRemove,
          GlobalNodeGroupsToRetain: this.__input.globalNodeGroupsToRetain,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesDecreaseReplicaCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
  }

  public get replicationGroup(): ElastiCacheResponsesDecreaseReplicaCountReplicationGroup {
    return new ElastiCacheResponsesDecreaseReplicaCountReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDecreaseReplicaCountReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.ReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues {
    return new ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.MemberClusters', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.NodeGroups', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.SnapshottingClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.AutomaticFailover', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint {
    return new ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.SnapshotRetentionLimit', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.SnapshotWindow', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.ClusterEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.CacheNodeType', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.AuthTokenEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.AuthTokenLastModifiedDate', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.TransitEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.AtRestEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.MemberClustersOutpostArns', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.KmsKeyId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.ARN', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheResponsesDecreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesResharding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
  }

  public get slotMigration(): ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheResponsesDecreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheResponsesDecreaseReplicaCountReplicationGroupConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDecreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Address', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ReplicasToRemove: this.__input.replicasToRemove,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesDeleteCacheCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteCacheClusterMessage) {
  }

  public get cacheCluster(): ElastiCacheResponsesDeleteCacheClusterCacheCluster {
    return new ElastiCacheResponsesDeleteCacheClusterCacheCluster(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDeleteCacheClusterCacheCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.CacheClusterId', props);
    return resource.getResponseField('CacheCluster.CacheClusterId') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint {
    return new ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.ClientDownloadLandingPage', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.CacheNodeType', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.Engine', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.EngineVersion', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.CacheClusterStatus', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.NumCacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.PreferredAvailabilityZone', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.PreferredOutpostArn', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.CacheClusterCreateTime', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('CacheCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues {
    return new ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues(this.__scope, this.__resources, this.__input);
  }

  public get notificationConfiguration(): ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration {
    return new ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.CacheSecurityGroups', props);
    return resource.getResponseField('CacheCluster.CacheSecurityGroups') as unknown as shapes.ElastiCacheCacheSecurityGroupMembership[];
  }

  public get cacheParameterGroup(): ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup {
    return new ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.CacheSubnetGroupName', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.CacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.AutoMinorVersionUpgrade', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.SecurityGroups', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.ReplicationGroupId', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.SnapshotRetentionLimit', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.SnapshotWindow', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.AuthTokenEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.AuthTokenLastModifiedDate', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.TransitEncryptionEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.AtRestEncryptionEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.ARN', props);
    return resource.getResponseField('CacheCluster.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesDeleteCacheClusterCacheClusterConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.ConfigurationEndpoint.Address', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesDeleteCacheClusterCacheClusterPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

}

export class ElastiCacheResponsesDeleteCacheClusterCacheClusterNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.NotificationConfiguration.TopicArn', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class ElastiCacheResponsesDeleteCacheClusterCacheClusterCacheParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot') as unknown as string[];
  }

}

export class ElastiCacheResponsesDeleteGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteGlobalReplicationGroupMessage) {
  }

  public get globalReplicationGroup(): ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDeleteGlobalReplicationGroupGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteGlobalReplicationGroupMessage) {
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          RetainPrimaryReplicationGroup: this.__input.retainPrimaryReplicationGroup,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesDeleteReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
  }

  public get replicationGroup(): ElastiCacheResponsesDeleteReplicationGroupReplicationGroup {
    return new ElastiCacheResponsesDeleteReplicationGroupReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDeleteReplicationGroupReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.ReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues {
    return new ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.MemberClusters', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.NodeGroups', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.SnapshottingClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.AutomaticFailover', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint {
    return new ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.SnapshotRetentionLimit', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.SnapshotWindow', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.ClusterEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.CacheNodeType', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.AuthTokenEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.AuthTokenLastModifiedDate', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.TransitEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.AtRestEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.MemberClustersOutpostArns', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.KmsKeyId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.ARN', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheResponsesDeleteReplicationGroupReplicationGroupGlobalReplicationGroupInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesResharding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
  }

  public get slotMigration(): ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheResponsesDeleteReplicationGroupReplicationGroupPendingModifiedValuesUserGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheResponsesDeleteReplicationGroupReplicationGroupConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Address', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          RetainPrimaryCluster: this.__input.retainPrimaryCluster,
          FinalSnapshotIdentifier: this.__input.finalSnapshotIdentifier,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesDeleteSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteSnapshotMessage) {
  }

  public get snapshot(): ElastiCacheResponsesDeleteSnapshotSnapshot {
    return new ElastiCacheResponsesDeleteSnapshotSnapshot(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDeleteSnapshotSnapshot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteSnapshotMessage) {
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.SnapshotName', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.ReplicationGroupId', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.ReplicationGroupDescription', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.CacheClusterId', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.SnapshotStatus', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.SnapshotSource', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.CacheNodeType', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.Engine', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.EngineVersion', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.NumCacheNodes', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.PreferredAvailabilityZone', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.PreferredOutpostArn', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.CacheClusterCreateTime', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.PreferredMaintenanceWindow', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.TopicArn', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.Port', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.CacheParameterGroupName', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.CacheSubnetGroupName', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.VpcId', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.AutoMinorVersionUpgrade', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.SnapshotRetentionLimit', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.SnapshotWindow', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.NumNodeGroups', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.AutomaticFailover', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.NodeSnapshots', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.KmsKeyId', props);
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
          SnapshotName: this.__input.snapshotName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSnapshot.Snapshot.ARN', props);
    return resource.getResponseField('Snapshot.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesDeleteUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteUserMessage) {
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
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUser.UserId', props);
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
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUser.UserName', props);
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
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUser.Status', props);
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
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUser.Engine', props);
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
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUser.AccessString', props);
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
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUser.UserGroupIds', props);
    return resource.getResponseField('UserGroupIds') as unknown as string[];
  }

  public get authentication(): ElastiCacheResponsesDeleteUserAuthentication {
    return new ElastiCacheResponsesDeleteUserAuthentication(this.__scope, this.__resources, this.__input);
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
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUser.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesDeleteUserAuthentication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteUserMessage) {
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
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUser.Authentication.Type', props);
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
          UserId: this.__input.userId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUser.Authentication.PasswordCount', props);
    return resource.getResponseField('Authentication.PasswordCount') as unknown as number;
  }

}

export class ElastiCacheResponsesDeleteUserGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteUserGroupMessage) {
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
          UserGroupId: this.__input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUserGroup.UserGroupId', props);
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
          UserGroupId: this.__input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUserGroup.Status', props);
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
          UserGroupId: this.__input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUserGroup.Engine', props);
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
          UserGroupId: this.__input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUserGroup.UserIds', props);
    return resource.getResponseField('UserIds') as unknown as string[];
  }

  public get pendingChanges(): ElastiCacheResponsesDeleteUserGroupPendingChanges {
    return new ElastiCacheResponsesDeleteUserGroupPendingChanges(this.__scope, this.__resources, this.__input);
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
          UserGroupId: this.__input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUserGroup.ReplicationGroups', props);
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
          UserGroupId: this.__input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUserGroup.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesDeleteUserGroupPendingChanges {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDeleteUserGroupMessage) {
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
          UserGroupId: this.__input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUserGroup.PendingChanges.UserIdsToRemove', props);
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
          UserGroupId: this.__input.userGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteUserGroup.PendingChanges.UserIdsToAdd', props);
    return resource.getResponseField('PendingChanges.UserIdsToAdd') as unknown as string[];
  }

}

export class ElastiCacheResponsesDescribeCacheClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeCacheClustersMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
          ShowCacheNodeInfo: this.__input.showCacheNodeInfo,
          ShowCacheClustersNotInReplicationGroups: this.__input.showCacheClustersNotInReplicationGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheClusters.Marker', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
          ShowCacheNodeInfo: this.__input.showCacheNodeInfo,
          ShowCacheClustersNotInReplicationGroups: this.__input.showCacheClustersNotInReplicationGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheClusters.CacheClusters', props);
    return resource.getResponseField('CacheClusters') as unknown as shapes.ElastiCacheCacheCluster[];
  }

}

export class ElastiCacheResponsesDescribeCacheEngineVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeCacheEngineVersionsMessage) {
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
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupFamily: this.__input.cacheParameterGroupFamily,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
          DefaultOnly: this.__input.defaultOnly,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheEngineVersions.Marker', props);
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
          Engine: this.__input.engine,
          EngineVersion: this.__input.engineVersion,
          CacheParameterGroupFamily: this.__input.cacheParameterGroupFamily,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
          DefaultOnly: this.__input.defaultOnly,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheEngineVersions.CacheEngineVersions', props);
    return resource.getResponseField('CacheEngineVersions') as unknown as shapes.ElastiCacheCacheEngineVersion[];
  }

}

export class ElastiCacheResponsesDescribeCacheParameterGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeCacheParameterGroupsMessage) {
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheParameterGroups.Marker', props);
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheParameterGroups.CacheParameterGroups', props);
    return resource.getResponseField('CacheParameterGroups') as unknown as shapes.ElastiCacheCacheParameterGroup[];
  }

}

export class ElastiCacheResponsesDescribeCacheParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeCacheParametersMessage) {
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          Source: this.__input.source,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheParameters.Marker', props);
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          Source: this.__input.source,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheParameters.Parameters', props);
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          Source: this.__input.source,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheParameters.CacheNodeTypeSpecificParameters', props);
    return resource.getResponseField('CacheNodeTypeSpecificParameters') as unknown as shapes.ElastiCacheCacheNodeTypeSpecificParameter[];
  }

}

export class ElastiCacheResponsesDescribeCacheSecurityGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeCacheSecurityGroupsMessage) {
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheSecurityGroups.Marker', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheSecurityGroups.CacheSecurityGroups', props);
    return resource.getResponseField('CacheSecurityGroups') as unknown as shapes.ElastiCacheCacheSecurityGroup[];
  }

}

export class ElastiCacheResponsesDescribeCacheSubnetGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeCacheSubnetGroupsMessage) {
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheSubnetGroups.Marker', props);
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCacheSubnetGroups.CacheSubnetGroups', props);
    return resource.getResponseField('CacheSubnetGroups') as unknown as shapes.ElastiCacheCacheSubnetGroup[];
  }

}

export class ElastiCacheResponsesDescribeEngineDefaultParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeEngineDefaultParametersMessage) {
  }

  public get engineDefaults(): ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults {
    return new ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDescribeEngineDefaultParametersEngineDefaults {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeEngineDefaultParametersMessage) {
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
          CacheParameterGroupFamily: this.__input.cacheParameterGroupFamily,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngineDefaultParameters.EngineDefaults.CacheParameterGroupFamily', props);
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
          CacheParameterGroupFamily: this.__input.cacheParameterGroupFamily,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngineDefaultParameters.EngineDefaults.Marker', props);
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
          CacheParameterGroupFamily: this.__input.cacheParameterGroupFamily,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngineDefaultParameters.EngineDefaults.Parameters', props);
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
          CacheParameterGroupFamily: this.__input.cacheParameterGroupFamily,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEngineDefaultParameters.EngineDefaults.CacheNodeTypeSpecificParameters', props);
    return resource.getResponseField('EngineDefaults.CacheNodeTypeSpecificParameters') as unknown as shapes.ElastiCacheCacheNodeTypeSpecificParameter[];
  }

}

export class ElastiCacheResponsesDescribeEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeEventsMessage) {
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
          SourceIdentifier: this.__input.sourceIdentifier,
          SourceType: this.__input.sourceType,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Duration: this.__input.duration,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.Marker', props);
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
          SourceIdentifier: this.__input.sourceIdentifier,
          SourceType: this.__input.sourceType,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Duration: this.__input.duration,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.Events', props);
    return resource.getResponseField('Events') as unknown as shapes.ElastiCacheEvent[];
  }

}

export class ElastiCacheResponsesDescribeGlobalReplicationGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeGlobalReplicationGroupsMessage) {
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
          ShowMemberInfo: this.__input.showMemberInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalReplicationGroups.Marker', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
          ShowMemberInfo: this.__input.showMemberInfo,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeGlobalReplicationGroups.GlobalReplicationGroups', props);
    return resource.getResponseField('GlobalReplicationGroups') as unknown as shapes.ElastiCacheGlobalReplicationGroup[];
  }

}

export class ElastiCacheResponsesDescribeReplicationGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeReplicationGroupsMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplicationGroups.Marker', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReplicationGroups.ReplicationGroups', props);
    return resource.getResponseField('ReplicationGroups') as unknown as shapes.ElastiCacheReplicationGroup[];
  }

}

export class ElastiCacheResponsesDescribeReservedCacheNodes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeReservedCacheNodesMessage) {
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
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          CacheNodeType: this.__input.cacheNodeType,
          Duration: this.__input.duration,
          ProductDescription: this.__input.productDescription,
          OfferingType: this.__input.offeringType,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservedCacheNodes.Marker', props);
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
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          CacheNodeType: this.__input.cacheNodeType,
          Duration: this.__input.duration,
          ProductDescription: this.__input.productDescription,
          OfferingType: this.__input.offeringType,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservedCacheNodes.ReservedCacheNodes', props);
    return resource.getResponseField('ReservedCacheNodes') as unknown as shapes.ElastiCacheReservedCacheNode[];
  }

}

export class ElastiCacheResponsesDescribeReservedCacheNodesOfferings {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeReservedCacheNodesOfferingsMessage) {
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          CacheNodeType: this.__input.cacheNodeType,
          Duration: this.__input.duration,
          ProductDescription: this.__input.productDescription,
          OfferingType: this.__input.offeringType,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservedCacheNodesOfferings.Marker', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          CacheNodeType: this.__input.cacheNodeType,
          Duration: this.__input.duration,
          ProductDescription: this.__input.productDescription,
          OfferingType: this.__input.offeringType,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeReservedCacheNodesOfferings.ReservedCacheNodesOfferings', props);
    return resource.getResponseField('ReservedCacheNodesOfferings') as unknown as shapes.ElastiCacheReservedCacheNodesOffering[];
  }

}

export class ElastiCacheResponsesDescribeServiceUpdates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeServiceUpdatesMessage) {
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
          ServiceUpdateName: this.__input.serviceUpdateName,
          ServiceUpdateStatus: this.__input.serviceUpdateStatus,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceUpdates.Marker', props);
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
          ServiceUpdateName: this.__input.serviceUpdateName,
          ServiceUpdateStatus: this.__input.serviceUpdateStatus,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceUpdates.ServiceUpdates', props);
    return resource.getResponseField('ServiceUpdates') as unknown as shapes.ElastiCacheServiceUpdate[];
  }

}

export class ElastiCacheResponsesDescribeSnapshots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeSnapshotsMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          SnapshotSource: this.__input.snapshotSource,
          Marker: this.__input.marker,
          MaxRecords: this.__input.maxRecords,
          ShowNodeGroupConfig: this.__input.showNodeGroupConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSnapshots.Marker', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CacheClusterId: this.__input.cacheClusterId,
          SnapshotName: this.__input.snapshotName,
          SnapshotSource: this.__input.snapshotSource,
          Marker: this.__input.marker,
          MaxRecords: this.__input.maxRecords,
          ShowNodeGroupConfig: this.__input.showNodeGroupConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSnapshots.Snapshots', props);
    return resource.getResponseField('Snapshots') as unknown as shapes.ElastiCacheSnapshot[];
  }

}

export class ElastiCacheResponsesDescribeUpdateActions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeUpdateActionsMessage) {
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
          ServiceUpdateName: this.__input.serviceUpdateName,
          ReplicationGroupIds: this.__input.replicationGroupIds,
          CacheClusterIds: this.__input.cacheClusterIds,
          Engine: this.__input.engine,
          ServiceUpdateStatus: this.__input.serviceUpdateStatus,
          ServiceUpdateTimeRange: {
            StartTime: this.__input.serviceUpdateTimeRange?.startTime,
            EndTime: this.__input.serviceUpdateTimeRange?.endTime,
          },
          UpdateActionStatus: this.__input.updateActionStatus,
          ShowNodeLevelUpdateStatus: this.__input.showNodeLevelUpdateStatus,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUpdateActions.Marker', props);
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
          ServiceUpdateName: this.__input.serviceUpdateName,
          ReplicationGroupIds: this.__input.replicationGroupIds,
          CacheClusterIds: this.__input.cacheClusterIds,
          Engine: this.__input.engine,
          ServiceUpdateStatus: this.__input.serviceUpdateStatus,
          ServiceUpdateTimeRange: {
            StartTime: this.__input.serviceUpdateTimeRange?.startTime,
            EndTime: this.__input.serviceUpdateTimeRange?.endTime,
          },
          UpdateActionStatus: this.__input.updateActionStatus,
          ShowNodeLevelUpdateStatus: this.__input.showNodeLevelUpdateStatus,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUpdateActions.UpdateActions', props);
    return resource.getResponseField('UpdateActions') as unknown as shapes.ElastiCacheUpdateAction[];
  }

}

export class ElastiCacheResponsesDescribeUserGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeUserGroupsMessage) {
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
          UserGroupId: this.__input.userGroupId,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserGroups.UserGroups', props);
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
          UserGroupId: this.__input.userGroupId,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserGroups.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class ElastiCacheResponsesDescribeUsers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDescribeUsersMessage) {
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
          Engine: this.__input.engine,
          UserId: this.__input.userId,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUsers.Users', props);
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
          Engine: this.__input.engine,
          UserId: this.__input.userId,
          Filters: this.__input.filters,
          MaxRecords: this.__input.maxRecords,
          Marker: this.__input.marker,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUsers.Marker', props);
    return resource.getResponseField('Marker') as unknown as string;
  }

}

export class ElastiCacheResponsesDisassociateGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDisassociateGlobalReplicationGroupMessage) {
  }

  public get globalReplicationGroup(): ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesDisassociateGlobalReplicationGroupGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheDisassociateGlobalReplicationGroupMessage) {
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupRegion: this.__input.replicationGroupRegion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DisassociateGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesFailoverGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheFailoverGlobalReplicationGroupMessage) {
  }

  public get globalReplicationGroup(): ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesFailoverGlobalReplicationGroupGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheFailoverGlobalReplicationGroupMessage) {
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          PrimaryRegion: this.__input.primaryRegion,
          PrimaryReplicationGroupId: this.__input.primaryReplicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'FailoverGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage) {
  }

  public get globalReplicationGroup(): ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesIncreaseNodeGroupsInGlobalReplicationGroupGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheIncreaseNodeGroupsInGlobalReplicationGroupMessage) {
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          RegionalConfigurations: this.__input.regionalConfigurations,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseNodeGroupsInGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesIncreaseReplicaCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
  }

  public get replicationGroup(): ElastiCacheResponsesIncreaseReplicaCountReplicationGroup {
    return new ElastiCacheResponsesIncreaseReplicaCountReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesIncreaseReplicaCountReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.ReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues {
    return new ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.MemberClusters', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.NodeGroups', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.SnapshottingClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.AutomaticFailover', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint {
    return new ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.SnapshotRetentionLimit', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.SnapshotWindow', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.ClusterEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.CacheNodeType', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.AuthTokenEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.AuthTokenLastModifiedDate', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.TransitEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.AtRestEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.MemberClustersOutpostArns', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.KmsKeyId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.ARN', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheResponsesIncreaseReplicaCountReplicationGroupGlobalReplicationGroupInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesResharding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
  }

  public get slotMigration(): ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesReshardingSlotMigration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheResponsesIncreaseReplicaCountReplicationGroupPendingModifiedValuesUserGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheResponsesIncreaseReplicaCountReplicationGroupConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheIncreaseReplicaCountMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Address', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NewReplicaCount: this.__input.newReplicaCount,
          ReplicaConfiguration: this.__input.replicaConfiguration,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicaCount.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesListAllowedNodeTypeModifications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheListAllowedNodeTypeModificationsMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAllowedNodeTypeModifications.ScaleUpModifications', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          ReplicationGroupId: this.__input.replicationGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAllowedNodeTypeModifications.ScaleDownModifications', props);
    return resource.getResponseField('ScaleDownModifications') as unknown as string[];
  }

}

export class ElastiCacheResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheListTagsForResourceMessage) {
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
          ResourceName: this.__input.resourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.ElastiCacheTag[];
  }

}

export class ElastiCacheResponsesModifyCacheCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyCacheClusterMessage) {
  }

  public get cacheCluster(): ElastiCacheResponsesModifyCacheClusterCacheCluster {
    return new ElastiCacheResponsesModifyCacheClusterCacheCluster(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesModifyCacheClusterCacheCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.CacheClusterId', props);
    return resource.getResponseField('CacheCluster.CacheClusterId') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint {
    return new ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.ClientDownloadLandingPage', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.CacheNodeType', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.Engine', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.EngineVersion', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.CacheClusterStatus', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.NumCacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.PreferredAvailabilityZone', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.PreferredOutpostArn', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.CacheClusterCreateTime', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('CacheCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues {
    return new ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues(this.__scope, this.__resources, this.__input);
  }

  public get notificationConfiguration(): ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration {
    return new ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.CacheSecurityGroups', props);
    return resource.getResponseField('CacheCluster.CacheSecurityGroups') as unknown as shapes.ElastiCacheCacheSecurityGroupMembership[];
  }

  public get cacheParameterGroup(): ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup {
    return new ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.CacheSubnetGroupName', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.CacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.AutoMinorVersionUpgrade', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.SecurityGroups', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.ReplicationGroupId', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.SnapshotRetentionLimit', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.SnapshotWindow', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.AuthTokenEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.AuthTokenLastModifiedDate', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.TransitEncryptionEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.AtRestEncryptionEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.ARN', props);
    return resource.getResponseField('CacheCluster.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesModifyCacheClusterCacheClusterConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.ConfigurationEndpoint.Address', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesModifyCacheClusterCacheClusterPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

}

export class ElastiCacheResponsesModifyCacheClusterCacheClusterNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.NotificationConfiguration.TopicArn', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class ElastiCacheResponsesModifyCacheClusterCacheClusterCacheParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          NumCacheNodes: this.__input.numCacheNodes,
          CacheNodeIdsToRemove: this.__input.cacheNodeIdsToRemove,
          AZMode: this.__input.azMode,
          NewAvailabilityZones: this.__input.newAvailabilityZones,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot') as unknown as string[];
  }

}

export class ElastiCacheResponsesModifyCacheParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyCacheParameterGroupMessage) {
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          ParameterNameValues: this.__input.parameterNameValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheParameterGroup.CacheParameterGroupName', props);
    return resource.getResponseField('CacheParameterGroupName') as unknown as string;
  }

}

export class ElastiCacheResponsesModifyCacheSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyCacheSubnetGroupMessage) {
  }

  public get cacheSubnetGroup(): ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup {
    return new ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesModifyCacheSubnetGroupCacheSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyCacheSubnetGroupMessage) {
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.__input.cacheSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupName', props);
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.__input.cacheSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheSubnetGroup.CacheSubnetGroup.CacheSubnetGroupDescription', props);
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.__input.cacheSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheSubnetGroup.CacheSubnetGroup.VpcId', props);
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.__input.cacheSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheSubnetGroup.CacheSubnetGroup.Subnets', props);
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
          CacheSubnetGroupName: this.__input.cacheSubnetGroupName,
          CacheSubnetGroupDescription: this.__input.cacheSubnetGroupDescription,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyCacheSubnetGroup.CacheSubnetGroup.ARN', props);
    return resource.getResponseField('CacheSubnetGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesModifyGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyGlobalReplicationGroupMessage) {
  }

  public get globalReplicationGroup(): ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesModifyGlobalReplicationGroupGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyGlobalReplicationGroupMessage) {
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
          CacheNodeType: this.__input.cacheNodeType,
          EngineVersion: this.__input.engineVersion,
          GlobalReplicationGroupDescription: this.__input.globalReplicationGroupDescription,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesModifyReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupMessage) {
  }

  public get replicationGroup(): ElastiCacheResponsesModifyReplicationGroupReplicationGroup {
    return new ElastiCacheResponsesModifyReplicationGroupReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesModifyReplicationGroupReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.ReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues {
    return new ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.MemberClusters', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.NodeGroups', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.SnapshottingClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.AutomaticFailover', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint {
    return new ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.SnapshotRetentionLimit', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.SnapshotWindow', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.ClusterEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.CacheNodeType', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.AuthTokenEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.AuthTokenLastModifiedDate', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.TransitEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.AtRestEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.MemberClustersOutpostArns', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.KmsKeyId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.ARN', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheResponsesModifyReplicationGroupReplicationGroupGlobalReplicationGroupInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesResharding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupMessage) {
  }

  public get slotMigration(): ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesReshardingSlotMigration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheResponsesModifyReplicationGroupReplicationGroupPendingModifiedValuesUserGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheResponsesModifyReplicationGroupReplicationGroupConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Address', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          ReplicationGroupDescription: this.__input.replicationGroupDescription,
          PrimaryClusterId: this.__input.primaryClusterId,
          SnapshottingClusterId: this.__input.snapshottingClusterId,
          AutomaticFailoverEnabled: this.__input.automaticFailoverEnabled,
          MultiAZEnabled: this.__input.multiAzEnabled,
          NodeGroupId: this.__input.nodeGroupId,
          CacheSecurityGroupNames: this.__input.cacheSecurityGroupNames,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ApplyImmediately: this.__input.applyImmediately,
          EngineVersion: this.__input.engineVersion,
          AutoMinorVersionUpgrade: this.__input.autoMinorVersionUpgrade,
          SnapshotRetentionLimit: this.__input.snapshotRetentionLimit,
          SnapshotWindow: this.__input.snapshotWindow,
          CacheNodeType: this.__input.cacheNodeType,
          AuthToken: this.__input.authToken,
          AuthTokenUpdateStrategy: this.__input.authTokenUpdateStrategy,
          UserGroupIdsToAdd: this.__input.userGroupIdsToAdd,
          UserGroupIdsToRemove: this.__input.userGroupIdsToRemove,
          RemoveUserGroups: this.__input.removeUserGroups,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroup.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesModifyReplicationGroupShardConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
  }

  public get replicationGroup(): ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup {
    return new ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.ReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues {
    return new ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.MemberClusters', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.NodeGroups', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.SnapshottingClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.AutomaticFailover', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint {
    return new ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.SnapshotRetentionLimit', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.SnapshotWindow', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.ClusterEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.CacheNodeType', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.AuthTokenEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.AuthTokenLastModifiedDate', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.TransitEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.AtRestEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.MemberClustersOutpostArns', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.KmsKeyId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.ARN', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupGlobalReplicationGroupInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesResharding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
  }

  public get slotMigration(): ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesReshardingSlotMigration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupPendingModifiedValuesUserGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheResponsesModifyReplicationGroupShardConfigurationReplicationGroupConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyReplicationGroupShardConfigurationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.ConfigurationEndpoint.Address', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupCount: this.__input.nodeGroupCount,
          ApplyImmediately: this.__input.applyImmediately,
          ReshardingConfiguration: this.__input.reshardingConfiguration,
          NodeGroupsToRemove: this.__input.nodeGroupsToRemove,
          NodeGroupsToRetain: this.__input.nodeGroupsToRetain,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyReplicationGroupShardConfiguration.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesModifyUser {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyUserMessage) {
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
          UserId: this.__input.userId,
          AccessString: this.__input.accessString,
          AppendAccessString: this.__input.appendAccessString,
          Passwords: this.__input.passwords,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUser.UserId', props);
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
          UserId: this.__input.userId,
          AccessString: this.__input.accessString,
          AppendAccessString: this.__input.appendAccessString,
          Passwords: this.__input.passwords,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUser.UserName', props);
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
          UserId: this.__input.userId,
          AccessString: this.__input.accessString,
          AppendAccessString: this.__input.appendAccessString,
          Passwords: this.__input.passwords,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUser.Status', props);
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
          UserId: this.__input.userId,
          AccessString: this.__input.accessString,
          AppendAccessString: this.__input.appendAccessString,
          Passwords: this.__input.passwords,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUser.Engine', props);
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
          UserId: this.__input.userId,
          AccessString: this.__input.accessString,
          AppendAccessString: this.__input.appendAccessString,
          Passwords: this.__input.passwords,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUser.AccessString', props);
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
          UserId: this.__input.userId,
          AccessString: this.__input.accessString,
          AppendAccessString: this.__input.appendAccessString,
          Passwords: this.__input.passwords,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUser.UserGroupIds', props);
    return resource.getResponseField('UserGroupIds') as unknown as string[];
  }

  public get authentication(): ElastiCacheResponsesModifyUserAuthentication {
    return new ElastiCacheResponsesModifyUserAuthentication(this.__scope, this.__resources, this.__input);
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
          UserId: this.__input.userId,
          AccessString: this.__input.accessString,
          AppendAccessString: this.__input.appendAccessString,
          Passwords: this.__input.passwords,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUser.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesModifyUserAuthentication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyUserMessage) {
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
          UserId: this.__input.userId,
          AccessString: this.__input.accessString,
          AppendAccessString: this.__input.appendAccessString,
          Passwords: this.__input.passwords,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUser.Authentication.Type', props);
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
          UserId: this.__input.userId,
          AccessString: this.__input.accessString,
          AppendAccessString: this.__input.appendAccessString,
          Passwords: this.__input.passwords,
          NoPasswordRequired: this.__input.noPasswordRequired,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUser.Authentication.PasswordCount', props);
    return resource.getResponseField('Authentication.PasswordCount') as unknown as number;
  }

}

export class ElastiCacheResponsesModifyUserGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyUserGroupMessage) {
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
          UserGroupId: this.__input.userGroupId,
          UserIdsToAdd: this.__input.userIdsToAdd,
          UserIdsToRemove: this.__input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUserGroup.UserGroupId', props);
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
          UserGroupId: this.__input.userGroupId,
          UserIdsToAdd: this.__input.userIdsToAdd,
          UserIdsToRemove: this.__input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUserGroup.Status', props);
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
          UserGroupId: this.__input.userGroupId,
          UserIdsToAdd: this.__input.userIdsToAdd,
          UserIdsToRemove: this.__input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUserGroup.Engine', props);
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
          UserGroupId: this.__input.userGroupId,
          UserIdsToAdd: this.__input.userIdsToAdd,
          UserIdsToRemove: this.__input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUserGroup.UserIds', props);
    return resource.getResponseField('UserIds') as unknown as string[];
  }

  public get pendingChanges(): ElastiCacheResponsesModifyUserGroupPendingChanges {
    return new ElastiCacheResponsesModifyUserGroupPendingChanges(this.__scope, this.__resources, this.__input);
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
          UserGroupId: this.__input.userGroupId,
          UserIdsToAdd: this.__input.userIdsToAdd,
          UserIdsToRemove: this.__input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUserGroup.ReplicationGroups', props);
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
          UserGroupId: this.__input.userGroupId,
          UserIdsToAdd: this.__input.userIdsToAdd,
          UserIdsToRemove: this.__input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUserGroup.ARN', props);
    return resource.getResponseField('ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesModifyUserGroupPendingChanges {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheModifyUserGroupMessage) {
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
          UserGroupId: this.__input.userGroupId,
          UserIdsToAdd: this.__input.userIdsToAdd,
          UserIdsToRemove: this.__input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUserGroup.PendingChanges.UserIdsToRemove', props);
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
          UserGroupId: this.__input.userGroupId,
          UserIdsToAdd: this.__input.userIdsToAdd,
          UserIdsToRemove: this.__input.userIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ModifyUserGroup.PendingChanges.UserIdsToAdd', props);
    return resource.getResponseField('PendingChanges.UserIdsToAdd') as unknown as string[];
  }

}

export class ElastiCacheResponsesPurchaseReservedCacheNodesOffering {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCachePurchaseReservedCacheNodesOfferingMessage) {
  }

  public get reservedCacheNode(): ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode {
    return new ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesPurchaseReservedCacheNodesOfferingReservedCacheNode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCachePurchaseReservedCacheNodesOfferingMessage) {
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.ReservedCacheNodeId', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.ReservedCacheNodesOfferingId', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.CacheNodeType', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.StartTime', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.Duration', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.FixedPrice', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.UsagePrice', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.CacheNodeCount', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.ProductDescription', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.OfferingType', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.State', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.RecurringCharges', props);
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
          ReservedCacheNodesOfferingId: this.__input.reservedCacheNodesOfferingId,
          ReservedCacheNodeId: this.__input.reservedCacheNodeId,
          CacheNodeCount: this.__input.cacheNodeCount,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'PurchaseReservedCacheNodesOffering.ReservedCacheNode.ReservationARN', props);
    return resource.getResponseField('ReservedCacheNode.ReservationARN') as unknown as string;
  }

}

export class ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage) {
  }

  public get globalReplicationGroup(): ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup {
    return new ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesRebalanceSlotsInGlobalReplicationGroupGlobalReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheRebalanceSlotsInGlobalReplicationGroupMessage) {
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupId', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalReplicationGroupDescription', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.Status', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.CacheNodeType', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.Engine', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.EngineVersion', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.Members', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.ClusterEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.GlobalNodeGroups', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.AuthTokenEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.TransitEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.AtRestEncryptionEnabled', props);
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
          GlobalReplicationGroupId: this.__input.globalReplicationGroupId,
          ApplyImmediately: this.__input.applyImmediately,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebalanceSlotsInGlobalReplicationGroup.GlobalReplicationGroup.ARN', props);
    return resource.getResponseField('GlobalReplicationGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesRebootCacheCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheRebootCacheClusterMessage) {
  }

  public get cacheCluster(): ElastiCacheResponsesRebootCacheClusterCacheCluster {
    return new ElastiCacheResponsesRebootCacheClusterCacheCluster(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesRebootCacheClusterCacheCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheRebootCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.CacheClusterId', props);
    return resource.getResponseField('CacheCluster.CacheClusterId') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint {
    return new ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.ClientDownloadLandingPage', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.CacheNodeType', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.Engine', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.EngineVersion', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.CacheClusterStatus', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.NumCacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.PreferredAvailabilityZone', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.PreferredOutpostArn', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.CacheClusterCreateTime', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('CacheCluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues {
    return new ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues(this.__scope, this.__resources, this.__input);
  }

  public get notificationConfiguration(): ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration {
    return new ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.CacheSecurityGroups', props);
    return resource.getResponseField('CacheCluster.CacheSecurityGroups') as unknown as shapes.ElastiCacheCacheSecurityGroupMembership[];
  }

  public get cacheParameterGroup(): ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup {
    return new ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup(this.__scope, this.__resources, this.__input);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.CacheSubnetGroupName', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.CacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.AutoMinorVersionUpgrade', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.SecurityGroups', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.ReplicationGroupId', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.SnapshotRetentionLimit', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.SnapshotWindow', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.AuthTokenEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.AuthTokenLastModifiedDate', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.TransitEncryptionEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.AtRestEncryptionEnabled', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.ARN', props);
    return resource.getResponseField('CacheCluster.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesRebootCacheClusterCacheClusterConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheRebootCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.ConfigurationEndpoint.Address', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('CacheCluster.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesRebootCacheClusterCacheClusterPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheRebootCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.PendingModifiedValues.NumCacheNodes', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeIdsToRemove', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.PendingModifiedValues.EngineVersion', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.PendingModifiedValues.CacheNodeType', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('CacheCluster.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

}

export class ElastiCacheResponsesRebootCacheClusterCacheClusterNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheRebootCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.NotificationConfiguration.TopicArn', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('CacheCluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class ElastiCacheResponsesRebootCacheClusterCacheClusterCacheParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheRebootCacheClusterMessage) {
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.CacheParameterGroup.CacheParameterGroupName', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.CacheParameterGroup.ParameterApplyStatus', props);
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
          CacheClusterId: this.__input.cacheClusterId,
          CacheNodeIdsToReboot: this.__input.cacheNodeIdsToReboot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootCacheCluster.CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot', props);
    return resource.getResponseField('CacheCluster.CacheParameterGroup.CacheNodeIdsToReboot') as unknown as string[];
  }

}

export class ElastiCacheResponsesRemoveTagsFromResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheRemoveTagsFromResourceMessage) {
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
          ResourceName: this.__input.resourceName,
          TagKeys: this.__input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RemoveTagsFromResource.TagList', props);
    return resource.getResponseField('TagList') as unknown as shapes.ElastiCacheTag[];
  }

}

export class ElastiCacheResponsesResetCacheParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheResetCacheParameterGroupMessage) {
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
          CacheParameterGroupName: this.__input.cacheParameterGroupName,
          ResetAllParameters: this.__input.resetAllParameters,
          ParameterNameValues: this.__input.parameterNameValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ResetCacheParameterGroup.CacheParameterGroupName', props);
    return resource.getResponseField('CacheParameterGroupName') as unknown as string;
  }

}

export class ElastiCacheResponsesRevokeCacheSecurityGroupIngress {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheRevokeCacheSecurityGroupIngressMessage) {
  }

  public get cacheSecurityGroup(): ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup {
    return new ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesRevokeCacheSecurityGroupIngressCacheSecurityGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheRevokeCacheSecurityGroupIngressMessage) {
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.__input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.__input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RevokeCacheSecurityGroupIngress.CacheSecurityGroup.OwnerId', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.__input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.__input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RevokeCacheSecurityGroupIngress.CacheSecurityGroup.CacheSecurityGroupName', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.__input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.__input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RevokeCacheSecurityGroupIngress.CacheSecurityGroup.Description', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.__input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.__input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RevokeCacheSecurityGroupIngress.CacheSecurityGroup.EC2SecurityGroups', props);
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
          CacheSecurityGroupName: this.__input.cacheSecurityGroupName,
          EC2SecurityGroupName: this.__input.ec2SecurityGroupName,
          EC2SecurityGroupOwnerId: this.__input.ec2SecurityGroupOwnerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RevokeCacheSecurityGroupIngress.CacheSecurityGroup.ARN', props);
    return resource.getResponseField('CacheSecurityGroup.ARN') as unknown as string;
  }

}

export class ElastiCacheResponsesStartMigration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheStartMigrationMessage) {
  }

  public get replicationGroup(): ElastiCacheResponsesStartMigrationReplicationGroup {
    return new ElastiCacheResponsesStartMigrationReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesStartMigrationReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheStartMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.ReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues {
    return new ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.MemberClusters', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.NodeGroups', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.SnapshottingClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.AutomaticFailover', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint {
    return new ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.SnapshotRetentionLimit', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.SnapshotWindow', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.ClusterEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.CacheNodeType', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.AuthTokenEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.AuthTokenLastModifiedDate', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.TransitEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.AtRestEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.MemberClustersOutpostArns', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.KmsKeyId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.ARN', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheResponsesStartMigrationReplicationGroupGlobalReplicationGroupInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheStartMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheStartMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesResharding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheStartMigrationMessage) {
  }

  public get slotMigration(): ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesReshardingSlotMigration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheStartMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheResponsesStartMigrationReplicationGroupPendingModifiedValuesUserGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheStartMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheResponsesStartMigrationReplicationGroupConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheStartMigrationMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.ConfigurationEndpoint.Address', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          CustomerNodeEndpointList: this.__input.customerNodeEndpointList,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartMigration.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

export class ElastiCacheResponsesTestFailover {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheTestFailoverMessage) {
  }

  public get replicationGroup(): ElastiCacheResponsesTestFailoverReplicationGroup {
    return new ElastiCacheResponsesTestFailoverReplicationGroup(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesTestFailoverReplicationGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheTestFailoverMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.ReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.Description', props);
    return resource.getResponseField('ReplicationGroup.Description') as unknown as string;
  }

  public get globalReplicationGroupInfo(): ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo {
    return new ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.Status', props);
    return resource.getResponseField('ReplicationGroup.Status') as unknown as string;
  }

  public get pendingModifiedValues(): ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues {
    return new ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.MemberClusters', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.NodeGroups', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.SnapshottingClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.AutomaticFailover', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.MultiAZ', props);
    return resource.getResponseField('ReplicationGroup.MultiAZ') as unknown as string;
  }

  public get configurationEndpoint(): ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint {
    return new ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.SnapshotRetentionLimit', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.SnapshotWindow', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.ClusterEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.CacheNodeType', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.AuthTokenEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.AuthTokenLastModifiedDate', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.TransitEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.AtRestEncryptionEnabled', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.MemberClustersOutpostArns', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.KmsKeyId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.ARN', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.UserGroupIds', props);
    return resource.getResponseField('ReplicationGroup.UserGroupIds') as unknown as string[];
  }

}

export class ElastiCacheResponsesTestFailoverReplicationGroupGlobalReplicationGroupInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheTestFailoverMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole', props);
    return resource.getResponseField('ReplicationGroup.GlobalReplicationGroupInfo.GlobalReplicationGroupMemberRole') as unknown as string;
  }

}

export class ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheTestFailoverMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.PendingModifiedValues.PrimaryClusterId', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AutomaticFailoverStatus') as unknown as string;
  }

  public get resharding(): ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding {
    return new ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding(this.__scope, this.__resources, this.__input);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.PendingModifiedValues.AuthTokenStatus', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.AuthTokenStatus') as unknown as string;
  }

  public get userGroups(): ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups {
    return new ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesResharding {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheTestFailoverMessage) {
  }

  public get slotMigration(): ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration {
    return new ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration(this.__scope, this.__resources, this.__input);
  }

}

export class ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesReshardingSlotMigration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheTestFailoverMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.Resharding.SlotMigration.ProgressPercentage') as unknown as number;
  }

}

export class ElastiCacheResponsesTestFailoverReplicationGroupPendingModifiedValuesUserGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheTestFailoverMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToAdd', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove', props);
    return resource.getResponseField('ReplicationGroup.PendingModifiedValues.UserGroups.UserGroupIdsToRemove') as unknown as string[];
  }

}

export class ElastiCacheResponsesTestFailoverReplicationGroupConfigurationEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.ElastiCacheTestFailoverMessage) {
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.ConfigurationEndpoint.Address', props);
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
          ReplicationGroupId: this.__input.replicationGroupId,
          NodeGroupId: this.__input.nodeGroupId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TestFailover.ReplicationGroup.ConfigurationEndpoint.Port', props);
    return resource.getResponseField('ReplicationGroup.ConfigurationEndpoint.Port') as unknown as number;
  }

}

