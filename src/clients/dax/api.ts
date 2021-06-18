import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DaxClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCluster(input: shapes.DaxCreateClusterRequest): DAXCreateCluster {
    return new DAXCreateCluster(this, 'CreateCluster', this.__resources, input);
  }

  public createParameterGroup(input: shapes.DaxCreateParameterGroupRequest): DAXCreateParameterGroup {
    return new DAXCreateParameterGroup(this, 'CreateParameterGroup', this.__resources, input);
  }

  public createSubnetGroup(input: shapes.DaxCreateSubnetGroupRequest): DAXCreateSubnetGroup {
    return new DAXCreateSubnetGroup(this, 'CreateSubnetGroup', this.__resources, input);
  }

  public decreaseReplicationFactor(input: shapes.DaxDecreaseReplicationFactorRequest): DAXDecreaseReplicationFactor {
    return new DAXDecreaseReplicationFactor(this, 'DecreaseReplicationFactor', this.__resources, input);
  }

  public deleteCluster(input: shapes.DaxDeleteClusterRequest): DAXDeleteCluster {
    return new DAXDeleteCluster(this, 'DeleteCluster', this.__resources, input);
  }

  public deleteParameterGroup(input: shapes.DaxDeleteParameterGroupRequest): DAXDeleteParameterGroup {
    return new DAXDeleteParameterGroup(this, 'DeleteParameterGroup', this.__resources, input);
  }

  public deleteSubnetGroup(input: shapes.DaxDeleteSubnetGroupRequest): DAXDeleteSubnetGroup {
    return new DAXDeleteSubnetGroup(this, 'DeleteSubnetGroup', this.__resources, input);
  }

  public describeClusters(input: shapes.DaxDescribeClustersRequest): DAXDescribeClusters {
    return new DAXDescribeClusters(this, 'DescribeClusters', this.__resources, input);
  }

  public describeDefaultParameters(input: shapes.DaxDescribeDefaultParametersRequest): DAXDescribeDefaultParameters {
    return new DAXDescribeDefaultParameters(this, 'DescribeDefaultParameters', this.__resources, input);
  }

  public describeEvents(input: shapes.DaxDescribeEventsRequest): DAXDescribeEvents {
    return new DAXDescribeEvents(this, 'DescribeEvents', this.__resources, input);
  }

  public describeParameterGroups(input: shapes.DaxDescribeParameterGroupsRequest): DAXDescribeParameterGroups {
    return new DAXDescribeParameterGroups(this, 'DescribeParameterGroups', this.__resources, input);
  }

  public describeParameters(input: shapes.DaxDescribeParametersRequest): DAXDescribeParameters {
    return new DAXDescribeParameters(this, 'DescribeParameters', this.__resources, input);
  }

  public describeSubnetGroups(input: shapes.DaxDescribeSubnetGroupsRequest): DAXDescribeSubnetGroups {
    return new DAXDescribeSubnetGroups(this, 'DescribeSubnetGroups', this.__resources, input);
  }

  public increaseReplicationFactor(input: shapes.DaxIncreaseReplicationFactorRequest): DAXIncreaseReplicationFactor {
    return new DAXIncreaseReplicationFactor(this, 'IncreaseReplicationFactor', this.__resources, input);
  }

  public listTags(input: shapes.DaxListTagsRequest): DAXListTags {
    return new DAXListTags(this, 'ListTags', this.__resources, input);
  }

  public rebootNode(input: shapes.DaxRebootNodeRequest): DAXRebootNode {
    return new DAXRebootNode(this, 'RebootNode', this.__resources, input);
  }

  public tagResource(input: shapes.DaxTagResourceRequest): DAXTagResource {
    return new DAXTagResource(this, 'TagResource', this.__resources, input);
  }

  public untagResource(input: shapes.DaxUntagResourceRequest): DAXUntagResource {
    return new DAXUntagResource(this, 'UntagResource', this.__resources, input);
  }

  public updateCluster(input: shapes.DaxUpdateClusterRequest): DAXUpdateCluster {
    return new DAXUpdateCluster(this, 'UpdateCluster', this.__resources, input);
  }

  public updateParameterGroup(input: shapes.DaxUpdateParameterGroupRequest): DAXUpdateParameterGroup {
    return new DAXUpdateParameterGroup(this, 'UpdateParameterGroup', this.__resources, input);
  }

  public updateSubnetGroup(input: shapes.DaxUpdateSubnetGroupRequest): DAXUpdateSubnetGroup {
    return new DAXUpdateSubnetGroup(this, 'UpdateSubnetGroup', this.__resources, input);
  }

}

export class DAXCreateCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxCreateClusterRequest) {
    super(scope, id);
  }

  public get cluster(): DAXCreateClusterCluster {
    return new DAXCreateClusterCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class DAXCreateClusterCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxCreateClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.ClusterName', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.Description', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.ClusterArn', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.TotalNodes', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.ActiveNodes', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.NodeType', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXCreateClusterClusterClusterDiscoveryEndpoint {
    return new DAXCreateClusterClusterClusterDiscoveryEndpoint(this, 'ClusterDiscoveryEndpoint', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.NodeIdsToRemove', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.Nodes', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXCreateClusterClusterNotificationConfiguration {
    return new DAXCreateClusterClusterNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.SubnetGroup', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.SecurityGroups', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXCreateClusterClusterParameterGroup {
    return new DAXCreateClusterClusterParameterGroup(this, 'ParameterGroup', this.__resources, this.input);
  }

  public get sseDescription(): DAXCreateClusterClusterSseDescription {
    return new DAXCreateClusterClusterSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

}

export class DAXCreateClusterClusterClusterDiscoveryEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxCreateClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.ClusterDiscoveryEndpoint.Address', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

}

export class DAXCreateClusterClusterNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxCreateClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.NotificationConfiguration.TopicArn', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXCreateClusterClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxCreateClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.ParameterGroup.ParameterGroupName', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.ParameterGroup.ParameterApplyStatus', props);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXCreateClusterClusterSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxCreateClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NodeType: this.input.nodeType,
          Description: this.input.description,
          ReplicationFactor: this.input.replicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          SubnetGroupName: this.input.subnetGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          IamRoleArn: this.input.iamRoleArn,
          ParameterGroupName: this.input.parameterGroupName,
          Tags: this.input.tags,
          SSESpecification: {
            Enabled: this.input.sseSpecification?.enabled,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXCreateParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxCreateParameterGroupRequest) {
    super(scope, id);
  }

  public get parameterGroup(): DAXCreateParameterGroupParameterGroup {
    return new DAXCreateParameterGroupParameterGroup(this, 'ParameterGroup', this.__resources, this.input);
  }

}

export class DAXCreateParameterGroupParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxCreateParameterGroupRequest) {
    super(scope, id);
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
          ParameterGroupName: this.input.parameterGroupName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateParameterGroup.ParameterGroup.ParameterGroupName', props);
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
          ParameterGroupName: this.input.parameterGroupName,
          Description: this.input.description,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateParameterGroup.ParameterGroup.Description', props);
    return resource.getResponseField('ParameterGroup.Description') as unknown as string;
  }

}

export class DAXCreateSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxCreateSubnetGroupRequest) {
    super(scope, id);
  }

  public get subnetGroup(): DAXCreateSubnetGroupSubnetGroup {
    return new DAXCreateSubnetGroupSubnetGroup(this, 'SubnetGroup', this.__resources, this.input);
  }

}

export class DAXCreateSubnetGroupSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxCreateSubnetGroupRequest) {
    super(scope, id);
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
          SubnetGroupName: this.input.subnetGroupName,
          Description: this.input.description,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubnetGroup.SubnetGroup.SubnetGroupName', props);
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
          SubnetGroupName: this.input.subnetGroupName,
          Description: this.input.description,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubnetGroup.SubnetGroup.Description', props);
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
          SubnetGroupName: this.input.subnetGroupName,
          Description: this.input.description,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubnetGroup.SubnetGroup.VpcId', props);
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
          SubnetGroupName: this.input.subnetGroupName,
          Description: this.input.description,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSubnetGroup.SubnetGroup.Subnets', props);
    return resource.getResponseField('SubnetGroup.Subnets') as unknown as shapes.DaxSubnet[];
  }

}

export class DAXDecreaseReplicationFactor extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDecreaseReplicationFactorRequest) {
    super(scope, id);
  }

  public get cluster(): DAXDecreaseReplicationFactorCluster {
    return new DAXDecreaseReplicationFactorCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class DAXDecreaseReplicationFactorCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDecreaseReplicationFactorRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.ClusterName', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.Description', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.ClusterArn', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.TotalNodes', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.ActiveNodes', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.NodeType', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXDecreaseReplicationFactorClusterClusterDiscoveryEndpoint {
    return new DAXDecreaseReplicationFactorClusterClusterDiscoveryEndpoint(this, 'ClusterDiscoveryEndpoint', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.NodeIdsToRemove', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.Nodes', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXDecreaseReplicationFactorClusterNotificationConfiguration {
    return new DAXDecreaseReplicationFactorClusterNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.SubnetGroup', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.SecurityGroups', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXDecreaseReplicationFactorClusterParameterGroup {
    return new DAXDecreaseReplicationFactorClusterParameterGroup(this, 'ParameterGroup', this.__resources, this.input);
  }

  public get sseDescription(): DAXDecreaseReplicationFactorClusterSseDescription {
    return new DAXDecreaseReplicationFactorClusterSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

}

export class DAXDecreaseReplicationFactorClusterClusterDiscoveryEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDecreaseReplicationFactorRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Address', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

}

export class DAXDecreaseReplicationFactorClusterNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDecreaseReplicationFactorRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.NotificationConfiguration.TopicArn', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXDecreaseReplicationFactorClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDecreaseReplicationFactorRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.ParameterGroup.ParameterGroupName', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.ParameterGroup.ParameterApplyStatus', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXDecreaseReplicationFactorClusterSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDecreaseReplicationFactorRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
          NodeIdsToRemove: this.input.nodeIdsToRemove,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DecreaseReplicationFactor.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXDeleteCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDeleteClusterRequest) {
    super(scope, id);
  }

  public get cluster(): DAXDeleteClusterCluster {
    return new DAXDeleteClusterCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class DAXDeleteClusterCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDeleteClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.ClusterName', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.Description', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.ClusterArn', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.TotalNodes', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.ActiveNodes', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.NodeType', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXDeleteClusterClusterClusterDiscoveryEndpoint {
    return new DAXDeleteClusterClusterClusterDiscoveryEndpoint(this, 'ClusterDiscoveryEndpoint', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.NodeIdsToRemove', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.Nodes', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXDeleteClusterClusterNotificationConfiguration {
    return new DAXDeleteClusterClusterNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.SubnetGroup', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.SecurityGroups', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXDeleteClusterClusterParameterGroup {
    return new DAXDeleteClusterClusterParameterGroup(this, 'ParameterGroup', this.__resources, this.input);
  }

  public get sseDescription(): DAXDeleteClusterClusterSseDescription {
    return new DAXDeleteClusterClusterSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

}

export class DAXDeleteClusterClusterClusterDiscoveryEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDeleteClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.ClusterDiscoveryEndpoint.Address', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

}

export class DAXDeleteClusterClusterNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDeleteClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.NotificationConfiguration.TopicArn', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXDeleteClusterClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDeleteClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.ParameterGroup.ParameterGroupName', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.ParameterGroup.ParameterApplyStatus', props);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXDeleteClusterClusterSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDeleteClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXDeleteParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDeleteParameterGroupRequest) {
    super(scope, id);
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
          ParameterGroupName: this.input.parameterGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteParameterGroup.DeletionMessage', props);
    return resource.getResponseField('DeletionMessage') as unknown as string;
  }

}

export class DAXDeleteSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDeleteSubnetGroupRequest) {
    super(scope, id);
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
          SubnetGroupName: this.input.subnetGroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteSubnetGroup.DeletionMessage', props);
    return resource.getResponseField('DeletionMessage') as unknown as string;
  }

}

export class DAXDescribeClusters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDescribeClustersRequest) {
    super(scope, id);
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
          ClusterNames: this.input.clusterNames,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusters.NextToken', props);
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
          ClusterNames: this.input.clusterNames,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeClusters.Clusters', props);
    return resource.getResponseField('Clusters') as unknown as shapes.DaxCluster[];
  }

}

export class DAXDescribeDefaultParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDescribeDefaultParametersRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultParameters.NextToken', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDefaultParameters.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.DaxParameter[];
  }

}

export class DAXDescribeEvents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDescribeEventsRequest) {
    super(scope, id);
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
          SourceName: this.input.sourceName,
          SourceType: this.input.sourceType,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Duration: this.input.duration,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.NextToken', props);
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
          SourceName: this.input.sourceName,
          SourceType: this.input.sourceType,
          StartTime: this.input.startTime,
          EndTime: this.input.endTime,
          Duration: this.input.duration,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvents.Events', props);
    return resource.getResponseField('Events') as unknown as shapes.DaxEvent[];
  }

}

export class DAXDescribeParameterGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDescribeParameterGroupsRequest) {
    super(scope, id);
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
          ParameterGroupNames: this.input.parameterGroupNames,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeParameterGroups.NextToken', props);
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
          ParameterGroupNames: this.input.parameterGroupNames,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeParameterGroups.ParameterGroups', props);
    return resource.getResponseField('ParameterGroups') as unknown as shapes.DaxParameterGroup[];
  }

}

export class DAXDescribeParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDescribeParametersRequest) {
    super(scope, id);
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
          ParameterGroupName: this.input.parameterGroupName,
          Source: this.input.source,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeParameters.NextToken', props);
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
          ParameterGroupName: this.input.parameterGroupName,
          Source: this.input.source,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeParameters.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as shapes.DaxParameter[];
  }

}

export class DAXDescribeSubnetGroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxDescribeSubnetGroupsRequest) {
    super(scope, id);
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
          SubnetGroupNames: this.input.subnetGroupNames,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubnetGroups.NextToken', props);
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
          SubnetGroupNames: this.input.subnetGroupNames,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSubnetGroups.SubnetGroups', props);
    return resource.getResponseField('SubnetGroups') as unknown as shapes.DaxSubnetGroup[];
  }

}

export class DAXIncreaseReplicationFactor extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxIncreaseReplicationFactorRequest) {
    super(scope, id);
  }

  public get cluster(): DAXIncreaseReplicationFactorCluster {
    return new DAXIncreaseReplicationFactorCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class DAXIncreaseReplicationFactorCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxIncreaseReplicationFactorRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.ClusterName', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.Description', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.ClusterArn', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.TotalNodes', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.ActiveNodes', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.NodeType', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXIncreaseReplicationFactorClusterClusterDiscoveryEndpoint {
    return new DAXIncreaseReplicationFactorClusterClusterDiscoveryEndpoint(this, 'ClusterDiscoveryEndpoint', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.NodeIdsToRemove', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.Nodes', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXIncreaseReplicationFactorClusterNotificationConfiguration {
    return new DAXIncreaseReplicationFactorClusterNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.SubnetGroup', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.SecurityGroups', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXIncreaseReplicationFactorClusterParameterGroup {
    return new DAXIncreaseReplicationFactorClusterParameterGroup(this, 'ParameterGroup', this.__resources, this.input);
  }

  public get sseDescription(): DAXIncreaseReplicationFactorClusterSseDescription {
    return new DAXIncreaseReplicationFactorClusterSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

}

export class DAXIncreaseReplicationFactorClusterClusterDiscoveryEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxIncreaseReplicationFactorRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Address', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

}

export class DAXIncreaseReplicationFactorClusterNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxIncreaseReplicationFactorRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.NotificationConfiguration.TopicArn', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXIncreaseReplicationFactorClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxIncreaseReplicationFactorRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.ParameterGroup.ParameterGroupName', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.ParameterGroup.ParameterApplyStatus', props);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXIncreaseReplicationFactorClusterSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxIncreaseReplicationFactorRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NewReplicationFactor: this.input.newReplicationFactor,
          AvailabilityZones: this.input.availabilityZones,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'IncreaseReplicationFactor.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXListTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxListTagsRequest) {
    super(scope, id);
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
          ResourceName: this.input.resourceName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.Tags', props);
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
          ResourceName: this.input.resourceName,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DAXRebootNode extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxRebootNodeRequest) {
    super(scope, id);
  }

  public get cluster(): DAXRebootNodeCluster {
    return new DAXRebootNodeCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class DAXRebootNodeCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxRebootNodeRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.ClusterName', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.Description', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.ClusterArn', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.TotalNodes', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.ActiveNodes', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.NodeType', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXRebootNodeClusterClusterDiscoveryEndpoint {
    return new DAXRebootNodeClusterClusterDiscoveryEndpoint(this, 'ClusterDiscoveryEndpoint', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.NodeIdsToRemove', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.Nodes', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXRebootNodeClusterNotificationConfiguration {
    return new DAXRebootNodeClusterNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.SubnetGroup', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.SecurityGroups', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXRebootNodeClusterParameterGroup {
    return new DAXRebootNodeClusterParameterGroup(this, 'ParameterGroup', this.__resources, this.input);
  }

  public get sseDescription(): DAXRebootNodeClusterSseDescription {
    return new DAXRebootNodeClusterSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

}

export class DAXRebootNodeClusterClusterDiscoveryEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxRebootNodeRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.ClusterDiscoveryEndpoint.Address', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

}

export class DAXRebootNodeClusterNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxRebootNodeRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.NotificationConfiguration.TopicArn', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXRebootNodeClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxRebootNodeRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.ParameterGroup.ParameterGroupName', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.ParameterGroup.ParameterApplyStatus', props);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXRebootNodeClusterSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxRebootNodeRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          NodeId: this.input.nodeId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RebootNode.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXTagResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxTagResourceRequest) {
    super(scope, id);
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
          ResourceName: this.input.resourceName,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'TagResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.DaxTag[];
  }

}

export class DAXUntagResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxUntagResourceRequest) {
    super(scope, id);
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
          ResourceName: this.input.resourceName,
          TagKeys: this.input.tagKeys,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UntagResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.DaxTag[];
  }

}

export class DAXUpdateCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxUpdateClusterRequest) {
    super(scope, id);
  }

  public get cluster(): DAXUpdateClusterCluster {
    return new DAXUpdateClusterCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class DAXUpdateClusterCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxUpdateClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.ClusterName', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.Description', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.ClusterArn', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.TotalNodes', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.ActiveNodes', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.NodeType', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.Status', props);
    return resource.getResponseField('Cluster.Status') as unknown as string;
  }

  public get clusterDiscoveryEndpoint(): DAXUpdateClusterClusterClusterDiscoveryEndpoint {
    return new DAXUpdateClusterClusterClusterDiscoveryEndpoint(this, 'ClusterDiscoveryEndpoint', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.NodeIdsToRemove', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.Nodes', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.PreferredMaintenanceWindow', props);
    return resource.getResponseField('Cluster.PreferredMaintenanceWindow') as unknown as string;
  }

  public get notificationConfiguration(): DAXUpdateClusterClusterNotificationConfiguration {
    return new DAXUpdateClusterClusterNotificationConfiguration(this, 'NotificationConfiguration', this.__resources, this.input);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.SubnetGroup', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.SecurityGroups', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.IamRoleArn', props);
    return resource.getResponseField('Cluster.IamRoleArn') as unknown as string;
  }

  public get parameterGroup(): DAXUpdateClusterClusterParameterGroup {
    return new DAXUpdateClusterClusterParameterGroup(this, 'ParameterGroup', this.__resources, this.input);
  }

  public get sseDescription(): DAXUpdateClusterClusterSseDescription {
    return new DAXUpdateClusterClusterSseDescription(this, 'SseDescription', this.__resources, this.input);
  }

}

export class DAXUpdateClusterClusterClusterDiscoveryEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxUpdateClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.ClusterDiscoveryEndpoint.Address', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.ClusterDiscoveryEndpoint.Port', props);
    return resource.getResponseField('Cluster.ClusterDiscoveryEndpoint.Port') as unknown as number;
  }

}

export class DAXUpdateClusterClusterNotificationConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxUpdateClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.NotificationConfiguration.TopicArn', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.NotificationConfiguration.TopicStatus', props);
    return resource.getResponseField('Cluster.NotificationConfiguration.TopicStatus') as unknown as string;
  }

}

export class DAXUpdateClusterClusterParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxUpdateClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.ParameterGroup.ParameterGroupName', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.ParameterGroup.ParameterApplyStatus', props);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.ParameterGroup.NodeIdsToReboot', props);
    return resource.getResponseField('Cluster.ParameterGroup.NodeIdsToReboot') as unknown as string[];
  }

}

export class DAXUpdateClusterClusterSseDescription extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxUpdateClusterRequest) {
    super(scope, id);
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
          ClusterName: this.input.clusterName,
          Description: this.input.description,
          PreferredMaintenanceWindow: this.input.preferredMaintenanceWindow,
          NotificationTopicArn: this.input.notificationTopicArn,
          NotificationTopicStatus: this.input.notificationTopicStatus,
          ParameterGroupName: this.input.parameterGroupName,
          SecurityGroupIds: this.input.securityGroupIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateCluster.Cluster.SSEDescription.Status', props);
    return resource.getResponseField('Cluster.SSEDescription.Status') as unknown as string;
  }

}

export class DAXUpdateParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxUpdateParameterGroupRequest) {
    super(scope, id);
  }

  public get parameterGroup(): DAXUpdateParameterGroupParameterGroup {
    return new DAXUpdateParameterGroupParameterGroup(this, 'ParameterGroup', this.__resources, this.input);
  }

}

export class DAXUpdateParameterGroupParameterGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxUpdateParameterGroupRequest) {
    super(scope, id);
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
          ParameterGroupName: this.input.parameterGroupName,
          ParameterNameValues: this.input.parameterNameValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateParameterGroup.ParameterGroup.ParameterGroupName', props);
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
          ParameterGroupName: this.input.parameterGroupName,
          ParameterNameValues: this.input.parameterNameValues,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateParameterGroup.ParameterGroup.Description', props);
    return resource.getResponseField('ParameterGroup.Description') as unknown as string;
  }

}

export class DAXUpdateSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxUpdateSubnetGroupRequest) {
    super(scope, id);
  }

  public get subnetGroup(): DAXUpdateSubnetGroupSubnetGroup {
    return new DAXUpdateSubnetGroupSubnetGroup(this, 'SubnetGroup', this.__resources, this.input);
  }

}

export class DAXUpdateSubnetGroupSubnetGroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DaxUpdateSubnetGroupRequest) {
    super(scope, id);
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
          SubnetGroupName: this.input.subnetGroupName,
          Description: this.input.description,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSubnetGroup.SubnetGroup.SubnetGroupName', props);
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
          SubnetGroupName: this.input.subnetGroupName,
          Description: this.input.description,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSubnetGroup.SubnetGroup.Description', props);
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
          SubnetGroupName: this.input.subnetGroupName,
          Description: this.input.description,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSubnetGroup.SubnetGroup.VpcId', props);
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
          SubnetGroupName: this.input.subnetGroupName,
          Description: this.input.description,
          SubnetIds: this.input.subnetIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSubnetGroup.SubnetGroup.Subnets', props);
    return resource.getResponseField('SubnetGroup.Subnets') as unknown as shapes.DaxSubnet[];
  }

}

