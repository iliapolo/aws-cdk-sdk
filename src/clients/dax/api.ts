import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DaxClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCluster(input: shapes.DaxCreateClusterRequest): DAXResponsesCreateCluster {
    return new DAXResponsesCreateCluster(this, this.__resources, input);
  }

  public createParameterGroup(input: shapes.DaxCreateParameterGroupRequest): DAXResponsesCreateParameterGroup {
    return new DAXResponsesCreateParameterGroup(this, this.__resources, input);
  }

  public createSubnetGroup(input: shapes.DaxCreateSubnetGroupRequest): DAXResponsesCreateSubnetGroup {
    return new DAXResponsesCreateSubnetGroup(this, this.__resources, input);
  }

  public decreaseReplicationFactor(input: shapes.DaxDecreaseReplicationFactorRequest): DAXResponsesDecreaseReplicationFactor {
    return new DAXResponsesDecreaseReplicationFactor(this, this.__resources, input);
  }

  public deleteCluster(input: shapes.DaxDeleteClusterRequest): DAXResponsesDeleteCluster {
    return new DAXResponsesDeleteCluster(this, this.__resources, input);
  }

  public deleteParameterGroup(input: shapes.DaxDeleteParameterGroupRequest): DAXResponsesDeleteParameterGroup {
    return new DAXResponsesDeleteParameterGroup(this, this.__resources, input);
  }

  public deleteSubnetGroup(input: shapes.DaxDeleteSubnetGroupRequest): DAXResponsesDeleteSubnetGroup {
    return new DAXResponsesDeleteSubnetGroup(this, this.__resources, input);
  }

  public describeClusters(input: shapes.DaxDescribeClustersRequest): DAXResponsesDescribeClusters {
    return new DAXResponsesDescribeClusters(this, this.__resources, input);
  }

  public describeDefaultParameters(input: shapes.DaxDescribeDefaultParametersRequest): DAXResponsesDescribeDefaultParameters {
    return new DAXResponsesDescribeDefaultParameters(this, this.__resources, input);
  }

  public describeEvents(input: shapes.DaxDescribeEventsRequest): DAXResponsesDescribeEvents {
    return new DAXResponsesDescribeEvents(this, this.__resources, input);
  }

  public describeParameterGroups(input: shapes.DaxDescribeParameterGroupsRequest): DAXResponsesDescribeParameterGroups {
    return new DAXResponsesDescribeParameterGroups(this, this.__resources, input);
  }

  public describeParameters(input: shapes.DaxDescribeParametersRequest): DAXResponsesDescribeParameters {
    return new DAXResponsesDescribeParameters(this, this.__resources, input);
  }

  public describeSubnetGroups(input: shapes.DaxDescribeSubnetGroupsRequest): DAXResponsesDescribeSubnetGroups {
    return new DAXResponsesDescribeSubnetGroups(this, this.__resources, input);
  }

  public increaseReplicationFactor(input: shapes.DaxIncreaseReplicationFactorRequest): DAXResponsesIncreaseReplicationFactor {
    return new DAXResponsesIncreaseReplicationFactor(this, this.__resources, input);
  }

  public listTags(input: shapes.DaxListTagsRequest): DAXResponsesListTags {
    return new DAXResponsesListTags(this, this.__resources, input);
  }

  public rebootNode(input: shapes.DaxRebootNodeRequest): DAXResponsesRebootNode {
    return new DAXResponsesRebootNode(this, this.__resources, input);
  }

  public tagResource(input: shapes.DaxTagResourceRequest): DAXResponsesTagResource {
    return new DAXResponsesTagResource(this, this.__resources, input);
  }

  public untagResource(input: shapes.DaxUntagResourceRequest): DAXResponsesUntagResource {
    return new DAXResponsesUntagResource(this, this.__resources, input);
  }

  public updateCluster(input: shapes.DaxUpdateClusterRequest): DAXResponsesUpdateCluster {
    return new DAXResponsesUpdateCluster(this, this.__resources, input);
  }

  public updateParameterGroup(input: shapes.DaxUpdateParameterGroupRequest): DAXResponsesUpdateParameterGroup {
    return new DAXResponsesUpdateParameterGroup(this, this.__resources, input);
  }

  public updateSubnetGroup(input: shapes.DaxUpdateSubnetGroupRequest): DAXResponsesUpdateSubnetGroup {
    return new DAXResponsesUpdateSubnetGroup(this, this.__resources, input);
  }

}

export class DAXResponsesCreateCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxCreateClusterRequest) {
  }

  public get cluster(): DAXResponsesCreateClusterCluster {
    return new DAXResponsesCreateClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DAXResponsesCreateClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxCreateClusterRequest) {
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.ClusterName'),
        outputPath: 'Cluster.ClusterName',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ClusterName', props);
    return resource.getResponseField('Cluster.ClusterName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.Description'),
        outputPath: 'Cluster.Description',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.Description', props);
    return resource.getResponseField('Cluster.Description') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.ClusterArn'),
        outputPath: 'Cluster.ClusterArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ClusterArn', props);
    return resource.getResponseField('Cluster.ClusterArn') as unknown as string;
  }

  public get totalNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.TotalNodes'),
        outputPath: 'Cluster.TotalNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.TotalNodes', props);
    return resource.getResponseField('Cluster.TotalNodes') as unknown as number;
  }

  public get activeNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.ActiveNodes'),
        outputPath: 'Cluster.ActiveNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ActiveNodes', props);
    return resource.getResponseField('Cluster.ActiveNodes') as unknown as number;
  }

  public get nodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.NodeType'),
        outputPath: 'Cluster.NodeType',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.NodeType', props);
    return resource.getResponseField('Cluster.NodeType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.Status'),
        outputPath: 'Cluster.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint {
    return new DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get nodeIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.NodeIdsToRemove'),
        outputPath: 'Cluster.NodeIdsToRemove',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.NodeIdsToRemove', props);
    return resource.getResponseField('Cluster.NodeIdsToRemove') as unknown as string[];
  }

  public get nodes(): shapes.DaxNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.Nodes'),
        outputPath: 'Cluster.Nodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.Nodes', props);
    return resource.getResponseField('Cluster.Nodes') as unknown as shapes.DaxNode[];
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.PreferredMaintenanceWindow'),
        outputPath: 'Cluster.PreferredMaintenanceWindow',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXResponsesCreateClusterClusterNotificationConfiguration {
    return new DAXResponsesCreateClusterClusterNotificationConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get subnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.SubnetGroup'),
        outputPath: 'Cluster.SubnetGroup',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.SubnetGroup', props);
    return resource.getResponseField('Cluster.SubnetGroup') as unknown as string;
  }

  public get securityGroups(): shapes.DaxSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.SecurityGroups'),
        outputPath: 'Cluster.SecurityGroups',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.SecurityGroups', props);
    return resource.getResponseField('Cluster.SecurityGroups') as unknown as shapes.DaxSecurityGroupMembership[];
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.IamRoleArn'),
        outputPath: 'Cluster.IamRoleArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXResponsesCreateClusterClusterParameterGroup {
    return new DAXResponsesCreateClusterClusterParameterGroup(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DAXResponsesCreateClusterClusterSseDescription {
    return new DAXResponsesCreateClusterClusterSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get clusterEndpointEncryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.ClusterEndpointEncryptionType'),
        outputPath: 'Cluster.ClusterEndpointEncryptionType',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ClusterEndpointEncryptionType', props);
    return resource.getResponseField('Cluster.ClusterEndpointEncryptionType') as unknown as string;
  }

}

export class DAXResponsesCreateClusterClusterClusterDiscoveryEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxCreateClusterRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.ClusterDiscoveryEndpoint.Address'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Address',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ClusterDiscoveryEndpoint.Address', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.ClusterDiscoveryEndpoint.Port'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Port',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.ClusterDiscoveryEndpoint.URL'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.URL',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ClusterDiscoveryEndpoint.URL', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.URL') as unknown as string;
  }

}

export class DAXResponsesCreateClusterClusterNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxCreateClusterRequest) {
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.NotificationConfiguration.TopicArn'),
        outputPath: 'Cluster.NotificationConfiguration.TopicArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.NotificationConfiguration.TopicArn', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicArn') as unknown as string;
  }

  public get topicStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.NotificationConfiguration.TopicStatus'),
        outputPath: 'Cluster.NotificationConfiguration.TopicStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXResponsesCreateClusterClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxCreateClusterRequest) {
  }

  public get parameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.ParameterGroup.ParameterGroupName'),
        outputPath: 'Cluster.ParameterGroup.ParameterGroupName',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ParameterGroup.ParameterGroupName', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterGroupName') as unknown as string;
  }

  public get parameterApplyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.ParameterGroup.ParameterApplyStatus'),
        outputPath: 'Cluster.ParameterGroup.ParameterApplyStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ParameterGroup.ParameterApplyStatus', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterApplyStatus') as unknown as string;
  }

  public get nodeIdsToReboot(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.ParameterGroup.NodeIdsToReboot'),
        outputPath: 'Cluster.ParameterGroup.NodeIdsToReboot',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXResponsesCreateClusterClusterSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxCreateClusterRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateCluster.Cluster.SSEDescription.Status'),
        outputPath: 'Cluster.SSEDescription.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeType: this.__input.nodeType,
          Description: this.__input.description,
          ReplicationFactor: this.__input.replicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          SubnetGroupName: this.__input.subnetGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          IamRoleArn: this.__input.iamRoleArn,
          ParameterGroupName: this.__input.parameterGroupName,
          Tags: this.__input.tags,
          SSESpecification: {
            Enabled: this.__input.sseSpecification?.enabled,
          },
          ClusterEndpointEncryptionType: this.__input.clusterEndpointEncryptionType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXResponsesCreateParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxCreateParameterGroupRequest) {
  }

  public get parameterGroup(): DAXResponsesCreateParameterGroupParameterGroup {
    return new DAXResponsesCreateParameterGroupParameterGroup(this.__scope, this.__resources, this.__input);
  }

}

export class DAXResponsesCreateParameterGroupParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxCreateParameterGroupRequest) {
  }

  public get parameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createParameterGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateParameterGroup.ParameterGroup.ParameterGroupName'),
        outputPath: 'ParameterGroup.ParameterGroupName',
        parameters: {
          ParameterGroupName: this.__input.parameterGroupName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateParameterGroup.ParameterGroup.ParameterGroupName', props);
    return resource.getResponseField('ParameterGroup.ParameterGroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createParameterGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateParameterGroup.ParameterGroup.Description'),
        outputPath: 'ParameterGroup.Description',
        parameters: {
          ParameterGroupName: this.__input.parameterGroupName,
          Description: this.__input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateParameterGroup.ParameterGroup.Description', props);
    return resource.getResponseField('ParameterGroup.Description') as unknown as string;
  }

}

export class DAXResponsesCreateSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxCreateSubnetGroupRequest) {
  }

  public get subnetGroup(): DAXResponsesCreateSubnetGroupSubnetGroup {
    return new DAXResponsesCreateSubnetGroupSubnetGroup(this.__scope, this.__resources, this.__input);
  }

}

export class DAXResponsesCreateSubnetGroupSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxCreateSubnetGroupRequest) {
  }

  public get subnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubnetGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateSubnetGroup.SubnetGroup.SubnetGroupName'),
        outputPath: 'SubnetGroup.SubnetGroupName',
        parameters: {
          SubnetGroupName: this.__input.subnetGroupName,
          Description: this.__input.description,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubnetGroup.SubnetGroup.SubnetGroupName', props);
    return resource.getResponseField('SubnetGroup.SubnetGroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubnetGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateSubnetGroup.SubnetGroup.Description'),
        outputPath: 'SubnetGroup.Description',
        parameters: {
          SubnetGroupName: this.__input.subnetGroupName,
          Description: this.__input.description,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubnetGroup.SubnetGroup.Description', props);
    return resource.getResponseField('SubnetGroup.Description') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubnetGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateSubnetGroup.SubnetGroup.VpcId'),
        outputPath: 'SubnetGroup.VpcId',
        parameters: {
          SubnetGroupName: this.__input.subnetGroupName,
          Description: this.__input.description,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubnetGroup.SubnetGroup.VpcId', props);
    return resource.getResponseField('SubnetGroup.VpcId') as unknown as string;
  }

  public get subnets(): shapes.DaxSubnet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSubnetGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.CreateSubnetGroup.SubnetGroup.Subnets'),
        outputPath: 'SubnetGroup.Subnets',
        parameters: {
          SubnetGroupName: this.__input.subnetGroupName,
          Description: this.__input.description,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSubnetGroup.SubnetGroup.Subnets', props);
    return resource.getResponseField('SubnetGroup.Subnets') as unknown as shapes.DaxSubnet[];
  }

}

export class DAXResponsesDecreaseReplicationFactor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDecreaseReplicationFactorRequest) {
  }

  public get cluster(): DAXResponsesDecreaseReplicationFactorCluster {
    return new DAXResponsesDecreaseReplicationFactorCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DAXResponsesDecreaseReplicationFactorCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDecreaseReplicationFactorRequest) {
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.ClusterName'),
        outputPath: 'Cluster.ClusterName',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.ClusterName', props);
    return resource.getResponseField('Cluster.ClusterName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.Description'),
        outputPath: 'Cluster.Description',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.Description', props);
    return resource.getResponseField('Cluster.Description') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.ClusterArn'),
        outputPath: 'Cluster.ClusterArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.ClusterArn', props);
    return resource.getResponseField('Cluster.ClusterArn') as unknown as string;
  }

  public get totalNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.TotalNodes'),
        outputPath: 'Cluster.TotalNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.TotalNodes', props);
    return resource.getResponseField('Cluster.TotalNodes') as unknown as number;
  }

  public get activeNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.ActiveNodes'),
        outputPath: 'Cluster.ActiveNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.ActiveNodes', props);
    return resource.getResponseField('Cluster.ActiveNodes') as unknown as number;
  }

  public get nodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.NodeType'),
        outputPath: 'Cluster.NodeType',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.NodeType', props);
    return resource.getResponseField('Cluster.NodeType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.Status'),
        outputPath: 'Cluster.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint {
    return new DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get nodeIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.NodeIdsToRemove'),
        outputPath: 'Cluster.NodeIdsToRemove',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.NodeIdsToRemove', props);
    return resource.getResponseField('Cluster.NodeIdsToRemove') as unknown as string[];
  }

  public get nodes(): shapes.DaxNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.Nodes'),
        outputPath: 'Cluster.Nodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.Nodes', props);
    return resource.getResponseField('Cluster.Nodes') as unknown as shapes.DaxNode[];
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.PreferredMaintenanceWindow'),
        outputPath: 'Cluster.PreferredMaintenanceWindow',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration {
    return new DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get subnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.SubnetGroup'),
        outputPath: 'Cluster.SubnetGroup',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.SubnetGroup', props);
    return resource.getResponseField('Cluster.SubnetGroup') as unknown as string;
  }

  public get securityGroups(): shapes.DaxSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.SecurityGroups'),
        outputPath: 'Cluster.SecurityGroups',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.SecurityGroups', props);
    return resource.getResponseField('Cluster.SecurityGroups') as unknown as shapes.DaxSecurityGroupMembership[];
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.IamRoleArn'),
        outputPath: 'Cluster.IamRoleArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXResponsesDecreaseReplicationFactorClusterParameterGroup {
    return new DAXResponsesDecreaseReplicationFactorClusterParameterGroup(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DAXResponsesDecreaseReplicationFactorClusterSseDescription {
    return new DAXResponsesDecreaseReplicationFactorClusterSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get clusterEndpointEncryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.ClusterEndpointEncryptionType'),
        outputPath: 'Cluster.ClusterEndpointEncryptionType',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.ClusterEndpointEncryptionType', props);
    return resource.getResponseField('Cluster.ClusterEndpointEncryptionType') as unknown as string;
  }

}

export class DAXResponsesDecreaseReplicationFactorClusterClusterDiscoveryEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDecreaseReplicationFactorRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Address'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Address',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Address', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Port'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Port',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.URL'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.URL',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.URL', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.URL') as unknown as string;
  }

}

export class DAXResponsesDecreaseReplicationFactorClusterNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDecreaseReplicationFactorRequest) {
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.NotificationConfiguration.TopicArn'),
        outputPath: 'Cluster.NotificationConfiguration.TopicArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.NotificationConfiguration.TopicArn', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicArn') as unknown as string;
  }

  public get topicStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.NotificationConfiguration.TopicStatus'),
        outputPath: 'Cluster.NotificationConfiguration.TopicStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXResponsesDecreaseReplicationFactorClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDecreaseReplicationFactorRequest) {
  }

  public get parameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.ParameterGroup.ParameterGroupName'),
        outputPath: 'Cluster.ParameterGroup.ParameterGroupName',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.ParameterGroup.ParameterGroupName', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterGroupName') as unknown as string;
  }

  public get parameterApplyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.ParameterGroup.ParameterApplyStatus'),
        outputPath: 'Cluster.ParameterGroup.ParameterApplyStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.ParameterGroup.ParameterApplyStatus', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterApplyStatus') as unknown as string;
  }

  public get nodeIdsToReboot(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.ParameterGroup.NodeIdsToReboot'),
        outputPath: 'Cluster.ParameterGroup.NodeIdsToReboot',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXResponsesDecreaseReplicationFactorClusterSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDecreaseReplicationFactorRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'decreaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DecreaseReplicationFactor.Cluster.SSEDescription.Status'),
        outputPath: 'Cluster.SSEDescription.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
          NodeIdsToRemove: this.__input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DecreaseReplicationFactor.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXResponsesDeleteCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDeleteClusterRequest) {
  }

  public get cluster(): DAXResponsesDeleteClusterCluster {
    return new DAXResponsesDeleteClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DAXResponsesDeleteClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDeleteClusterRequest) {
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.ClusterName'),
        outputPath: 'Cluster.ClusterName',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.ClusterName', props);
    return resource.getResponseField('Cluster.ClusterName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.Description'),
        outputPath: 'Cluster.Description',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.Description', props);
    return resource.getResponseField('Cluster.Description') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.ClusterArn'),
        outputPath: 'Cluster.ClusterArn',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.ClusterArn', props);
    return resource.getResponseField('Cluster.ClusterArn') as unknown as string;
  }

  public get totalNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.TotalNodes'),
        outputPath: 'Cluster.TotalNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.TotalNodes', props);
    return resource.getResponseField('Cluster.TotalNodes') as unknown as number;
  }

  public get activeNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.ActiveNodes'),
        outputPath: 'Cluster.ActiveNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.ActiveNodes', props);
    return resource.getResponseField('Cluster.ActiveNodes') as unknown as number;
  }

  public get nodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.NodeType'),
        outputPath: 'Cluster.NodeType',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.NodeType', props);
    return resource.getResponseField('Cluster.NodeType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.Status'),
        outputPath: 'Cluster.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint {
    return new DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get nodeIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.NodeIdsToRemove'),
        outputPath: 'Cluster.NodeIdsToRemove',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.NodeIdsToRemove', props);
    return resource.getResponseField('Cluster.NodeIdsToRemove') as unknown as string[];
  }

  public get nodes(): shapes.DaxNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.Nodes'),
        outputPath: 'Cluster.Nodes',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.Nodes', props);
    return resource.getResponseField('Cluster.Nodes') as unknown as shapes.DaxNode[];
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.PreferredMaintenanceWindow'),
        outputPath: 'Cluster.PreferredMaintenanceWindow',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXResponsesDeleteClusterClusterNotificationConfiguration {
    return new DAXResponsesDeleteClusterClusterNotificationConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get subnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.SubnetGroup'),
        outputPath: 'Cluster.SubnetGroup',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.SubnetGroup', props);
    return resource.getResponseField('Cluster.SubnetGroup') as unknown as string;
  }

  public get securityGroups(): shapes.DaxSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.SecurityGroups'),
        outputPath: 'Cluster.SecurityGroups',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.SecurityGroups', props);
    return resource.getResponseField('Cluster.SecurityGroups') as unknown as shapes.DaxSecurityGroupMembership[];
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.IamRoleArn'),
        outputPath: 'Cluster.IamRoleArn',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXResponsesDeleteClusterClusterParameterGroup {
    return new DAXResponsesDeleteClusterClusterParameterGroup(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DAXResponsesDeleteClusterClusterSseDescription {
    return new DAXResponsesDeleteClusterClusterSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get clusterEndpointEncryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.ClusterEndpointEncryptionType'),
        outputPath: 'Cluster.ClusterEndpointEncryptionType',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.ClusterEndpointEncryptionType', props);
    return resource.getResponseField('Cluster.ClusterEndpointEncryptionType') as unknown as string;
  }

}

export class DAXResponsesDeleteClusterClusterClusterDiscoveryEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDeleteClusterRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.ClusterDiscoveryEndpoint.Address'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Address',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.ClusterDiscoveryEndpoint.Address', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.ClusterDiscoveryEndpoint.Port'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Port',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.ClusterDiscoveryEndpoint.URL'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.URL',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.ClusterDiscoveryEndpoint.URL', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.URL') as unknown as string;
  }

}

export class DAXResponsesDeleteClusterClusterNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDeleteClusterRequest) {
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.NotificationConfiguration.TopicArn'),
        outputPath: 'Cluster.NotificationConfiguration.TopicArn',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.NotificationConfiguration.TopicArn', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicArn') as unknown as string;
  }

  public get topicStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.NotificationConfiguration.TopicStatus'),
        outputPath: 'Cluster.NotificationConfiguration.TopicStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXResponsesDeleteClusterClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDeleteClusterRequest) {
  }

  public get parameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.ParameterGroup.ParameterGroupName'),
        outputPath: 'Cluster.ParameterGroup.ParameterGroupName',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.ParameterGroup.ParameterGroupName', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterGroupName') as unknown as string;
  }

  public get parameterApplyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.ParameterGroup.ParameterApplyStatus'),
        outputPath: 'Cluster.ParameterGroup.ParameterApplyStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.ParameterGroup.ParameterApplyStatus', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterApplyStatus') as unknown as string;
  }

  public get nodeIdsToReboot(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.ParameterGroup.NodeIdsToReboot'),
        outputPath: 'Cluster.ParameterGroup.NodeIdsToReboot',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXResponsesDeleteClusterClusterSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDeleteClusterRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteCluster.Cluster.SSEDescription.Status'),
        outputPath: 'Cluster.SSEDescription.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXResponsesDeleteParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDeleteParameterGroupRequest) {
  }

  public get deletionMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteParameterGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteParameterGroup.DeletionMessage'),
        outputPath: 'DeletionMessage',
        parameters: {
          ParameterGroupName: this.__input.parameterGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteParameterGroup.DeletionMessage', props);
    return resource.getResponseField('DeletionMessage') as unknown as string;
  }

}

export class DAXResponsesDeleteSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDeleteSubnetGroupRequest) {
  }

  public get deletionMessage(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSubnetGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DeleteSubnetGroup.DeletionMessage'),
        outputPath: 'DeletionMessage',
        parameters: {
          SubnetGroupName: this.__input.subnetGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteSubnetGroup.DeletionMessage', props);
    return resource.getResponseField('DeletionMessage') as unknown as string;
  }

}

export class DAXResponsesDescribeClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDescribeClustersRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusters',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeClusters.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ClusterNames: this.__input.clusterNames,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get clusters(): shapes.DaxCluster[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeClusters',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeClusters.Clusters'),
        outputPath: 'Clusters',
        parameters: {
          ClusterNames: this.__input.clusterNames,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeClusters.Clusters', props);
    return resource.getResponseField('Clusters') as unknown as shapes.DaxCluster[];
  }

}

export class DAXResponsesDescribeDefaultParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDescribeDefaultParametersRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultParameters',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeDefaultParameters.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultParameters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get parameters(): shapes.DaxParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDefaultParameters',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeDefaultParameters.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDefaultParameters.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.DaxParameter[];
  }

}

export class DAXResponsesDescribeEvents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDescribeEventsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeEvents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SourceName: this.__input.sourceName,
          SourceType: this.__input.sourceType,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Duration: this.__input.duration,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get events(): shapes.DaxEvent[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvents',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeEvents.Events'),
        outputPath: 'Events',
        parameters: {
          SourceName: this.__input.sourceName,
          SourceType: this.__input.sourceType,
          StartTime: this.__input.startTime,
          EndTime: this.__input.endTime,
          Duration: this.__input.duration,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvents.Events', props);
    return resource.getResponseField('Events') as unknown as shapes.DaxEvent[];
  }

}

export class DAXResponsesDescribeParameterGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDescribeParameterGroupsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeParameterGroups',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeParameterGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ParameterGroupNames: this.__input.parameterGroupNames,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeParameterGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get parameterGroups(): shapes.DaxParameterGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeParameterGroups',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeParameterGroups.ParameterGroups'),
        outputPath: 'ParameterGroups',
        parameters: {
          ParameterGroupNames: this.__input.parameterGroupNames,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeParameterGroups.ParameterGroups', props);
    return resource.getResponseField('ParameterGroups') as unknown as shapes.DaxParameterGroup[];
  }

}

export class DAXResponsesDescribeParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDescribeParametersRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeParameters',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeParameters.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ParameterGroupName: this.__input.parameterGroupName,
          Source: this.__input.source,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeParameters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get parameters(): shapes.DaxParameter[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeParameters',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeParameters.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          ParameterGroupName: this.__input.parameterGroupName,
          Source: this.__input.source,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeParameters.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.DaxParameter[];
  }

}

export class DAXResponsesDescribeSubnetGroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxDescribeSubnetGroupsRequest) {
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubnetGroups',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeSubnetGroups.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          SubnetGroupNames: this.__input.subnetGroupNames,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubnetGroups.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

  public get subnetGroups(): shapes.DaxSubnetGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSubnetGroups',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.DescribeSubnetGroups.SubnetGroups'),
        outputPath: 'SubnetGroups',
        parameters: {
          SubnetGroupNames: this.__input.subnetGroupNames,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSubnetGroups.SubnetGroups', props);
    return resource.getResponseField('SubnetGroups') as unknown as shapes.DaxSubnetGroup[];
  }

}

export class DAXResponsesIncreaseReplicationFactor {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxIncreaseReplicationFactorRequest) {
  }

  public get cluster(): DAXResponsesIncreaseReplicationFactorCluster {
    return new DAXResponsesIncreaseReplicationFactorCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DAXResponsesIncreaseReplicationFactorCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxIncreaseReplicationFactorRequest) {
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.ClusterName'),
        outputPath: 'Cluster.ClusterName',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.ClusterName', props);
    return resource.getResponseField('Cluster.ClusterName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.Description'),
        outputPath: 'Cluster.Description',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.Description', props);
    return resource.getResponseField('Cluster.Description') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.ClusterArn'),
        outputPath: 'Cluster.ClusterArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.ClusterArn', props);
    return resource.getResponseField('Cluster.ClusterArn') as unknown as string;
  }

  public get totalNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.TotalNodes'),
        outputPath: 'Cluster.TotalNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.TotalNodes', props);
    return resource.getResponseField('Cluster.TotalNodes') as unknown as number;
  }

  public get activeNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.ActiveNodes'),
        outputPath: 'Cluster.ActiveNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.ActiveNodes', props);
    return resource.getResponseField('Cluster.ActiveNodes') as unknown as number;
  }

  public get nodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.NodeType'),
        outputPath: 'Cluster.NodeType',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.NodeType', props);
    return resource.getResponseField('Cluster.NodeType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.Status'),
        outputPath: 'Cluster.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint {
    return new DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get nodeIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.NodeIdsToRemove'),
        outputPath: 'Cluster.NodeIdsToRemove',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.NodeIdsToRemove', props);
    return resource.getResponseField('Cluster.NodeIdsToRemove') as unknown as string[];
  }

  public get nodes(): shapes.DaxNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.Nodes'),
        outputPath: 'Cluster.Nodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.Nodes', props);
    return resource.getResponseField('Cluster.Nodes') as unknown as shapes.DaxNode[];
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.PreferredMaintenanceWindow'),
        outputPath: 'Cluster.PreferredMaintenanceWindow',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration {
    return new DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get subnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.SubnetGroup'),
        outputPath: 'Cluster.SubnetGroup',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.SubnetGroup', props);
    return resource.getResponseField('Cluster.SubnetGroup') as unknown as string;
  }

  public get securityGroups(): shapes.DaxSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.SecurityGroups'),
        outputPath: 'Cluster.SecurityGroups',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.SecurityGroups', props);
    return resource.getResponseField('Cluster.SecurityGroups') as unknown as shapes.DaxSecurityGroupMembership[];
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.IamRoleArn'),
        outputPath: 'Cluster.IamRoleArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXResponsesIncreaseReplicationFactorClusterParameterGroup {
    return new DAXResponsesIncreaseReplicationFactorClusterParameterGroup(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DAXResponsesIncreaseReplicationFactorClusterSseDescription {
    return new DAXResponsesIncreaseReplicationFactorClusterSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get clusterEndpointEncryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.ClusterEndpointEncryptionType'),
        outputPath: 'Cluster.ClusterEndpointEncryptionType',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.ClusterEndpointEncryptionType', props);
    return resource.getResponseField('Cluster.ClusterEndpointEncryptionType') as unknown as string;
  }

}

export class DAXResponsesIncreaseReplicationFactorClusterClusterDiscoveryEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxIncreaseReplicationFactorRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Address'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Address',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Address', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Port'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Port',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.URL'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.URL',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.URL', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.URL') as unknown as string;
  }

}

export class DAXResponsesIncreaseReplicationFactorClusterNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxIncreaseReplicationFactorRequest) {
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.NotificationConfiguration.TopicArn'),
        outputPath: 'Cluster.NotificationConfiguration.TopicArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.NotificationConfiguration.TopicArn', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicArn') as unknown as string;
  }

  public get topicStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.NotificationConfiguration.TopicStatus'),
        outputPath: 'Cluster.NotificationConfiguration.TopicStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXResponsesIncreaseReplicationFactorClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxIncreaseReplicationFactorRequest) {
  }

  public get parameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.ParameterGroup.ParameterGroupName'),
        outputPath: 'Cluster.ParameterGroup.ParameterGroupName',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.ParameterGroup.ParameterGroupName', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterGroupName') as unknown as string;
  }

  public get parameterApplyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.ParameterGroup.ParameterApplyStatus'),
        outputPath: 'Cluster.ParameterGroup.ParameterApplyStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.ParameterGroup.ParameterApplyStatus', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterApplyStatus') as unknown as string;
  }

  public get nodeIdsToReboot(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.ParameterGroup.NodeIdsToReboot'),
        outputPath: 'Cluster.ParameterGroup.NodeIdsToReboot',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXResponsesIncreaseReplicationFactorClusterSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxIncreaseReplicationFactorRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'increaseReplicationFactor',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.IncreaseReplicationFactor.Cluster.SSEDescription.Status'),
        outputPath: 'Cluster.SSEDescription.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
          NewReplicationFactor: this.__input.newReplicationFactor,
          AvailabilityZones: this.__input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'IncreaseReplicationFactor.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXResponsesListTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxListTagsRequest) {
  }

  public get tags(): shapes.DaxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.ListTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceName: this.__input.resourceName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.DaxTag[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.ListTags.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceName: this.__input.resourceName,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DAXResponsesRebootNode {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxRebootNodeRequest) {
  }

  public get cluster(): DAXResponsesRebootNodeCluster {
    return new DAXResponsesRebootNodeCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DAXResponsesRebootNodeCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxRebootNodeRequest) {
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.ClusterName'),
        outputPath: 'Cluster.ClusterName',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.ClusterName', props);
    return resource.getResponseField('Cluster.ClusterName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.Description'),
        outputPath: 'Cluster.Description',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.Description', props);
    return resource.getResponseField('Cluster.Description') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.ClusterArn'),
        outputPath: 'Cluster.ClusterArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.ClusterArn', props);
    return resource.getResponseField('Cluster.ClusterArn') as unknown as string;
  }

  public get totalNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.TotalNodes'),
        outputPath: 'Cluster.TotalNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.TotalNodes', props);
    return resource.getResponseField('Cluster.TotalNodes') as unknown as number;
  }

  public get activeNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.ActiveNodes'),
        outputPath: 'Cluster.ActiveNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.ActiveNodes', props);
    return resource.getResponseField('Cluster.ActiveNodes') as unknown as number;
  }

  public get nodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.NodeType'),
        outputPath: 'Cluster.NodeType',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.NodeType', props);
    return resource.getResponseField('Cluster.NodeType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.Status'),
        outputPath: 'Cluster.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint {
    return new DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get nodeIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.NodeIdsToRemove'),
        outputPath: 'Cluster.NodeIdsToRemove',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.NodeIdsToRemove', props);
    return resource.getResponseField('Cluster.NodeIdsToRemove') as unknown as string[];
  }

  public get nodes(): shapes.DaxNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.Nodes'),
        outputPath: 'Cluster.Nodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.Nodes', props);
    return resource.getResponseField('Cluster.Nodes') as unknown as shapes.DaxNode[];
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.PreferredMaintenanceWindow'),
        outputPath: 'Cluster.PreferredMaintenanceWindow',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXResponsesRebootNodeClusterNotificationConfiguration {
    return new DAXResponsesRebootNodeClusterNotificationConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get subnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.SubnetGroup'),
        outputPath: 'Cluster.SubnetGroup',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.SubnetGroup', props);
    return resource.getResponseField('Cluster.SubnetGroup') as unknown as string;
  }

  public get securityGroups(): shapes.DaxSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.SecurityGroups'),
        outputPath: 'Cluster.SecurityGroups',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.SecurityGroups', props);
    return resource.getResponseField('Cluster.SecurityGroups') as unknown as shapes.DaxSecurityGroupMembership[];
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.IamRoleArn'),
        outputPath: 'Cluster.IamRoleArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXResponsesRebootNodeClusterParameterGroup {
    return new DAXResponsesRebootNodeClusterParameterGroup(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DAXResponsesRebootNodeClusterSseDescription {
    return new DAXResponsesRebootNodeClusterSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get clusterEndpointEncryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.ClusterEndpointEncryptionType'),
        outputPath: 'Cluster.ClusterEndpointEncryptionType',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.ClusterEndpointEncryptionType', props);
    return resource.getResponseField('Cluster.ClusterEndpointEncryptionType') as unknown as string;
  }

}

export class DAXResponsesRebootNodeClusterClusterDiscoveryEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxRebootNodeRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.ClusterDiscoveryEndpoint.Address'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Address',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.ClusterDiscoveryEndpoint.Address', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.ClusterDiscoveryEndpoint.Port'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Port',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.ClusterDiscoveryEndpoint.URL'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.URL',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.ClusterDiscoveryEndpoint.URL', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.URL') as unknown as string;
  }

}

export class DAXResponsesRebootNodeClusterNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxRebootNodeRequest) {
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.NotificationConfiguration.TopicArn'),
        outputPath: 'Cluster.NotificationConfiguration.TopicArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.NotificationConfiguration.TopicArn', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicArn') as unknown as string;
  }

  public get topicStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.NotificationConfiguration.TopicStatus'),
        outputPath: 'Cluster.NotificationConfiguration.TopicStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXResponsesRebootNodeClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxRebootNodeRequest) {
  }

  public get parameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.ParameterGroup.ParameterGroupName'),
        outputPath: 'Cluster.ParameterGroup.ParameterGroupName',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.ParameterGroup.ParameterGroupName', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterGroupName') as unknown as string;
  }

  public get parameterApplyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.ParameterGroup.ParameterApplyStatus'),
        outputPath: 'Cluster.ParameterGroup.ParameterApplyStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.ParameterGroup.ParameterApplyStatus', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterApplyStatus') as unknown as string;
  }

  public get nodeIdsToReboot(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.ParameterGroup.NodeIdsToReboot'),
        outputPath: 'Cluster.ParameterGroup.NodeIdsToReboot',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXResponsesRebootNodeClusterSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxRebootNodeRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootNode',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.RebootNode.Cluster.SSEDescription.Status'),
        outputPath: 'Cluster.SSEDescription.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
          NodeId: this.__input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RebootNode.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXResponsesTagResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxTagResourceRequest) {
  }

  public get tags(): shapes.DaxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.TagResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceName: this.__input.resourceName,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'TagResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.DaxTag[];
  }

}

export class DAXResponsesUntagResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxUntagResourceRequest) {
  }

  public get tags(): shapes.DaxTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UntagResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceName: this.__input.resourceName,
          TagKeys: this.__input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UntagResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.DaxTag[];
  }

}

export class DAXResponsesUpdateCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxUpdateClusterRequest) {
  }

  public get cluster(): DAXResponsesUpdateClusterCluster {
    return new DAXResponsesUpdateClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class DAXResponsesUpdateClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxUpdateClusterRequest) {
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.ClusterName'),
        outputPath: 'Cluster.ClusterName',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.ClusterName', props);
    return resource.getResponseField('Cluster.ClusterName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.Description'),
        outputPath: 'Cluster.Description',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.Description', props);
    return resource.getResponseField('Cluster.Description') as unknown as string;
  }

  public get clusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.ClusterArn'),
        outputPath: 'Cluster.ClusterArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.ClusterArn', props);
    return resource.getResponseField('Cluster.ClusterArn') as unknown as string;
  }

  public get totalNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.TotalNodes'),
        outputPath: 'Cluster.TotalNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.TotalNodes', props);
    return resource.getResponseField('Cluster.TotalNodes') as unknown as number;
  }

  public get activeNodes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.ActiveNodes'),
        outputPath: 'Cluster.ActiveNodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.ActiveNodes', props);
    return resource.getResponseField('Cluster.ActiveNodes') as unknown as number;
  }

  public get nodeType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.NodeType'),
        outputPath: 'Cluster.NodeType',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.NodeType', props);
    return resource.getResponseField('Cluster.NodeType') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.Status'),
        outputPath: 'Cluster.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint {
    return new DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint(this.__scope, this.__resources, this.__input);
  }

  public get nodeIdsToRemove(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.NodeIdsToRemove'),
        outputPath: 'Cluster.NodeIdsToRemove',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.NodeIdsToRemove', props);
    return resource.getResponseField('Cluster.NodeIdsToRemove') as unknown as string[];
  }

  public get nodes(): shapes.DaxNode[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.Nodes'),
        outputPath: 'Cluster.Nodes',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.Nodes', props);
    return resource.getResponseField('Cluster.Nodes') as unknown as shapes.DaxNode[];
  }

  public get preferredMaintenanceWindow(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.PreferredMaintenanceWindow'),
        outputPath: 'Cluster.PreferredMaintenanceWindow',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXResponsesUpdateClusterClusterNotificationConfiguration {
    return new DAXResponsesUpdateClusterClusterNotificationConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get subnetGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.SubnetGroup'),
        outputPath: 'Cluster.SubnetGroup',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.SubnetGroup', props);
    return resource.getResponseField('Cluster.SubnetGroup') as unknown as string;
  }

  public get securityGroups(): shapes.DaxSecurityGroupMembership[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.SecurityGroups'),
        outputPath: 'Cluster.SecurityGroups',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.SecurityGroups', props);
    return resource.getResponseField('Cluster.SecurityGroups') as unknown as shapes.DaxSecurityGroupMembership[];
  }

  public get iamRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.IamRoleArn'),
        outputPath: 'Cluster.IamRoleArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXResponsesUpdateClusterClusterParameterGroup {
    return new DAXResponsesUpdateClusterClusterParameterGroup(this.__scope, this.__resources, this.__input);
  }

  public get sseDescription(): DAXResponsesUpdateClusterClusterSseDescription {
    return new DAXResponsesUpdateClusterClusterSseDescription(this.__scope, this.__resources, this.__input);
  }

  public get clusterEndpointEncryptionType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.ClusterEndpointEncryptionType'),
        outputPath: 'Cluster.ClusterEndpointEncryptionType',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.ClusterEndpointEncryptionType', props);
    return resource.getResponseField('Cluster.ClusterEndpointEncryptionType') as unknown as string;
  }

}

export class DAXResponsesUpdateClusterClusterClusterDiscoveryEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxUpdateClusterRequest) {
  }

  public get address(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.ClusterDiscoveryEndpoint.Address'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Address',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.ClusterDiscoveryEndpoint.Address', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Address') as unknown as string;
  }

  public get port(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.ClusterDiscoveryEndpoint.Port'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.Port',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

  public get url(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.ClusterDiscoveryEndpoint.URL'),
        outputPath: 'Cluster.ClusterDiscoveryEndpoint.URL',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.ClusterDiscoveryEndpoint.URL', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.URL') as unknown as string;
  }

}

export class DAXResponsesUpdateClusterClusterNotificationConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxUpdateClusterRequest) {
  }

  public get topicArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.NotificationConfiguration.TopicArn'),
        outputPath: 'Cluster.NotificationConfiguration.TopicArn',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.NotificationConfiguration.TopicArn', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicArn') as unknown as string;
  }

  public get topicStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.NotificationConfiguration.TopicStatus'),
        outputPath: 'Cluster.NotificationConfiguration.TopicStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXResponsesUpdateClusterClusterParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxUpdateClusterRequest) {
  }

  public get parameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.ParameterGroup.ParameterGroupName'),
        outputPath: 'Cluster.ParameterGroup.ParameterGroupName',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.ParameterGroup.ParameterGroupName', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterGroupName') as unknown as string;
  }

  public get parameterApplyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.ParameterGroup.ParameterApplyStatus'),
        outputPath: 'Cluster.ParameterGroup.ParameterApplyStatus',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.ParameterGroup.ParameterApplyStatus', props);
    return resource.getResponseField('Cluster.ParameterGroup.ParameterApplyStatus') as unknown as string;
  }

  public get nodeIdsToReboot(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.ParameterGroup.NodeIdsToReboot'),
        outputPath: 'Cluster.ParameterGroup.NodeIdsToReboot',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXResponsesUpdateClusterClusterSseDescription {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxUpdateClusterRequest) {
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateCluster',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateCluster.Cluster.SSEDescription.Status'),
        outputPath: 'Cluster.SSEDescription.Status',
        parameters: {
          ClusterName: this.__input.clusterName,
          Description: this.__input.description,
          PreferredMaintenanceWindow: this.__input.preferredMaintenanceWindow,
          NotificationTopicArn: this.__input.notificationTopicArn,
          NotificationTopicStatus: this.__input.notificationTopicStatus,
          ParameterGroupName: this.__input.parameterGroupName,
          SecurityGroupIds: this.__input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateCluster.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXResponsesUpdateParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxUpdateParameterGroupRequest) {
  }

  public get parameterGroup(): DAXResponsesUpdateParameterGroupParameterGroup {
    return new DAXResponsesUpdateParameterGroupParameterGroup(this.__scope, this.__resources, this.__input);
  }

}

export class DAXResponsesUpdateParameterGroupParameterGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxUpdateParameterGroupRequest) {
  }

  public get parameterGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateParameterGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateParameterGroup.ParameterGroup.ParameterGroupName'),
        outputPath: 'ParameterGroup.ParameterGroupName',
        parameters: {
          ParameterGroupName: this.__input.parameterGroupName,
          ParameterNameValues: this.__input.parameterNameValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateParameterGroup.ParameterGroup.ParameterGroupName', props);
    return resource.getResponseField('ParameterGroup.ParameterGroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateParameterGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateParameterGroup.ParameterGroup.Description'),
        outputPath: 'ParameterGroup.Description',
        parameters: {
          ParameterGroupName: this.__input.parameterGroupName,
          ParameterNameValues: this.__input.parameterNameValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateParameterGroup.ParameterGroup.Description', props);
    return resource.getResponseField('ParameterGroup.Description') as unknown as string;
  }

}

export class DAXResponsesUpdateSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxUpdateSubnetGroupRequest) {
  }

  public get subnetGroup(): DAXResponsesUpdateSubnetGroupSubnetGroup {
    return new DAXResponsesUpdateSubnetGroupSubnetGroup(this.__scope, this.__resources, this.__input);
  }

}

export class DAXResponsesUpdateSubnetGroupSubnetGroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DaxUpdateSubnetGroupRequest) {
  }

  public get subnetGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubnetGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateSubnetGroup.SubnetGroup.SubnetGroupName'),
        outputPath: 'SubnetGroup.SubnetGroupName',
        parameters: {
          SubnetGroupName: this.__input.subnetGroupName,
          Description: this.__input.description,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSubnetGroup.SubnetGroup.SubnetGroupName', props);
    return resource.getResponseField('SubnetGroup.SubnetGroupName') as unknown as string;
  }

  public get description(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubnetGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateSubnetGroup.SubnetGroup.Description'),
        outputPath: 'SubnetGroup.Description',
        parameters: {
          SubnetGroupName: this.__input.subnetGroupName,
          Description: this.__input.description,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSubnetGroup.SubnetGroup.Description', props);
    return resource.getResponseField('SubnetGroup.Description') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubnetGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateSubnetGroup.SubnetGroup.VpcId'),
        outputPath: 'SubnetGroup.VpcId',
        parameters: {
          SubnetGroupName: this.__input.subnetGroupName,
          Description: this.__input.description,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSubnetGroup.SubnetGroup.VpcId', props);
    return resource.getResponseField('SubnetGroup.VpcId') as unknown as string;
  }

  public get subnets(): shapes.DaxSubnet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSubnetGroup',
        service: 'DAX',
        physicalResourceId: cr.PhysicalResourceId.of('DAX.UpdateSubnetGroup.SubnetGroup.Subnets'),
        outputPath: 'SubnetGroup.Subnets',
        parameters: {
          SubnetGroupName: this.__input.subnetGroupName,
          Description: this.__input.description,
          SubnetIds: this.__input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSubnetGroup.SubnetGroup.Subnets', props);
    return resource.getResponseField('SubnetGroup.Subnets') as unknown as shapes.DaxSubnet[];
  }

}

