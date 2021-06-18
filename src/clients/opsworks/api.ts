import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class OpsWorksClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public assignInstance(input: shapes.OpsWorksAssignInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assignInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.AssignInstance'),
        parameters: {
          InstanceId: input.instanceId,
          LayerIds: input.layerIds,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssignInstance', props);
  }

  public assignVolume(input: shapes.OpsWorksAssignVolumeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'assignVolume',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.AssignVolume'),
        parameters: {
          VolumeId: input.volumeId,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssignVolume', props);
  }

  public associateElasticIp(input: shapes.OpsWorksAssociateElasticIpRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'associateElasticIp',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.AssociateElasticIp'),
        parameters: {
          ElasticIp: input.elasticIp,
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AssociateElasticIp', props);
  }

  public attachElasticLoadBalancer(input: shapes.OpsWorksAttachElasticLoadBalancerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'attachElasticLoadBalancer',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.AttachElasticLoadBalancer'),
        parameters: {
          ElasticLoadBalancerName: input.elasticLoadBalancerName,
          LayerId: input.layerId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'AttachElasticLoadBalancer', props);
  }

  public cloneStack(input: shapes.OpsWorksCloneStackRequest): OpsWorksCloneStack {
    return new OpsWorksCloneStack(this, 'CloneStack', this.__resources, input);
  }

  public createApp(input: shapes.OpsWorksCreateAppRequest): OpsWorksCreateApp {
    return new OpsWorksCreateApp(this, 'CreateApp', this.__resources, input);
  }

  public createDeployment(input: shapes.OpsWorksCreateDeploymentRequest): OpsWorksCreateDeployment {
    return new OpsWorksCreateDeployment(this, 'CreateDeployment', this.__resources, input);
  }

  public createInstance(input: shapes.OpsWorksCreateInstanceRequest): OpsWorksCreateInstance {
    return new OpsWorksCreateInstance(this, 'CreateInstance', this.__resources, input);
  }

  public createLayer(input: shapes.OpsWorksCreateLayerRequest): OpsWorksCreateLayer {
    return new OpsWorksCreateLayer(this, 'CreateLayer', this.__resources, input);
  }

  public createStack(input: shapes.OpsWorksCreateStackRequest): OpsWorksCreateStack {
    return new OpsWorksCreateStack(this, 'CreateStack', this.__resources, input);
  }

  public createUserProfile(input: shapes.OpsWorksCreateUserProfileRequest): OpsWorksCreateUserProfile {
    return new OpsWorksCreateUserProfile(this, 'CreateUserProfile', this.__resources, input);
  }

  public deleteApp(input: shapes.OpsWorksDeleteAppRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteApp',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DeleteApp'),
        parameters: {
          AppId: input.appId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteApp', props);
  }

  public deleteInstance(input: shapes.OpsWorksDeleteInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DeleteInstance'),
        parameters: {
          InstanceId: input.instanceId,
          DeleteElasticIp: input.deleteElasticIp,
          DeleteVolumes: input.deleteVolumes,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteInstance', props);
  }

  public deleteLayer(input: shapes.OpsWorksDeleteLayerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLayer',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DeleteLayer'),
        parameters: {
          LayerId: input.layerId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLayer', props);
  }

  public deleteStack(input: shapes.OpsWorksDeleteStackRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteStack',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DeleteStack'),
        parameters: {
          StackId: input.stackId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteStack', props);
  }

  public deleteUserProfile(input: shapes.OpsWorksDeleteUserProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteUserProfile',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DeleteUserProfile'),
        parameters: {
          IamUserArn: input.iamUserArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteUserProfile', props);
  }

  public deregisterEcsCluster(input: shapes.OpsWorksDeregisterEcsClusterRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterEcsCluster',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DeregisterEcsCluster'),
        parameters: {
          EcsClusterArn: input.ecsClusterArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterEcsCluster', props);
  }

  public deregisterElasticIp(input: shapes.OpsWorksDeregisterElasticIpRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterElasticIp',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DeregisterElasticIp'),
        parameters: {
          ElasticIp: input.elasticIp,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterElasticIp', props);
  }

  public deregisterInstance(input: shapes.OpsWorksDeregisterInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DeregisterInstance'),
        parameters: {
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterInstance', props);
  }

  public deregisterRdsDbInstance(input: shapes.OpsWorksDeregisterRdsDbInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterRdsDbInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DeregisterRdsDbInstance'),
        parameters: {
          RdsDbInstanceArn: input.rdsDbInstanceArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterRdsDbInstance', props);
  }

  public deregisterVolume(input: shapes.OpsWorksDeregisterVolumeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterVolume',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DeregisterVolume'),
        parameters: {
          VolumeId: input.volumeId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterVolume', props);
  }

  public describeAgentVersions(input: shapes.OpsWorksDescribeAgentVersionsRequest): OpsWorksDescribeAgentVersions {
    return new OpsWorksDescribeAgentVersions(this, 'DescribeAgentVersions', this.__resources, input);
  }

  public describeApps(input: shapes.OpsWorksDescribeAppsRequest): OpsWorksDescribeApps {
    return new OpsWorksDescribeApps(this, 'DescribeApps', this.__resources, input);
  }

  public describeCommands(input: shapes.OpsWorksDescribeCommandsRequest): OpsWorksDescribeCommands {
    return new OpsWorksDescribeCommands(this, 'DescribeCommands', this.__resources, input);
  }

  public describeDeployments(input: shapes.OpsWorksDescribeDeploymentsRequest): OpsWorksDescribeDeployments {
    return new OpsWorksDescribeDeployments(this, 'DescribeDeployments', this.__resources, input);
  }

  public describeEcsClusters(input: shapes.OpsWorksDescribeEcsClustersRequest): OpsWorksDescribeEcsClusters {
    return new OpsWorksDescribeEcsClusters(this, 'DescribeEcsClusters', this.__resources, input);
  }

  public describeElasticIps(input: shapes.OpsWorksDescribeElasticIpsRequest): OpsWorksDescribeElasticIps {
    return new OpsWorksDescribeElasticIps(this, 'DescribeElasticIps', this.__resources, input);
  }

  public describeElasticLoadBalancers(input: shapes.OpsWorksDescribeElasticLoadBalancersRequest): OpsWorksDescribeElasticLoadBalancers {
    return new OpsWorksDescribeElasticLoadBalancers(this, 'DescribeElasticLoadBalancers', this.__resources, input);
  }

  public describeInstances(input: shapes.OpsWorksDescribeInstancesRequest): OpsWorksDescribeInstances {
    return new OpsWorksDescribeInstances(this, 'DescribeInstances', this.__resources, input);
  }

  public describeLayers(input: shapes.OpsWorksDescribeLayersRequest): OpsWorksDescribeLayers {
    return new OpsWorksDescribeLayers(this, 'DescribeLayers', this.__resources, input);
  }

  public describeLoadBasedAutoScaling(input: shapes.OpsWorksDescribeLoadBasedAutoScalingRequest): OpsWorksDescribeLoadBasedAutoScaling {
    return new OpsWorksDescribeLoadBasedAutoScaling(this, 'DescribeLoadBasedAutoScaling', this.__resources, input);
  }

  public describeMyUserProfile(): OpsWorksDescribeMyUserProfile {
    return new OpsWorksDescribeMyUserProfile(this, 'DescribeMyUserProfile', this.__resources);
  }

  public describeOperatingSystems(): OpsWorksDescribeOperatingSystems {
    return new OpsWorksDescribeOperatingSystems(this, 'DescribeOperatingSystems', this.__resources);
  }

  public describePermissions(input: shapes.OpsWorksDescribePermissionsRequest): OpsWorksDescribePermissions {
    return new OpsWorksDescribePermissions(this, 'DescribePermissions', this.__resources, input);
  }

  public describeRaidArrays(input: shapes.OpsWorksDescribeRaidArraysRequest): OpsWorksDescribeRaidArrays {
    return new OpsWorksDescribeRaidArrays(this, 'DescribeRaidArrays', this.__resources, input);
  }

  public describeRdsDbInstances(input: shapes.OpsWorksDescribeRdsDbInstancesRequest): OpsWorksDescribeRdsDbInstances {
    return new OpsWorksDescribeRdsDbInstances(this, 'DescribeRdsDbInstances', this.__resources, input);
  }

  public describeServiceErrors(input: shapes.OpsWorksDescribeServiceErrorsRequest): OpsWorksDescribeServiceErrors {
    return new OpsWorksDescribeServiceErrors(this, 'DescribeServiceErrors', this.__resources, input);
  }

  public describeStackProvisioningParameters(input: shapes.OpsWorksDescribeStackProvisioningParametersRequest): OpsWorksDescribeStackProvisioningParameters {
    return new OpsWorksDescribeStackProvisioningParameters(this, 'DescribeStackProvisioningParameters', this.__resources, input);
  }

  public describeStackSummary(input: shapes.OpsWorksDescribeStackSummaryRequest): OpsWorksDescribeStackSummary {
    return new OpsWorksDescribeStackSummary(this, 'DescribeStackSummary', this.__resources, input);
  }

  public describeStacks(input: shapes.OpsWorksDescribeStacksRequest): OpsWorksDescribeStacks {
    return new OpsWorksDescribeStacks(this, 'DescribeStacks', this.__resources, input);
  }

  public describeTimeBasedAutoScaling(input: shapes.OpsWorksDescribeTimeBasedAutoScalingRequest): OpsWorksDescribeTimeBasedAutoScaling {
    return new OpsWorksDescribeTimeBasedAutoScaling(this, 'DescribeTimeBasedAutoScaling', this.__resources, input);
  }

  public describeUserProfiles(input: shapes.OpsWorksDescribeUserProfilesRequest): OpsWorksDescribeUserProfiles {
    return new OpsWorksDescribeUserProfiles(this, 'DescribeUserProfiles', this.__resources, input);
  }

  public describeVolumes(input: shapes.OpsWorksDescribeVolumesRequest): OpsWorksDescribeVolumes {
    return new OpsWorksDescribeVolumes(this, 'DescribeVolumes', this.__resources, input);
  }

  public detachElasticLoadBalancer(input: shapes.OpsWorksDetachElasticLoadBalancerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'detachElasticLoadBalancer',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DetachElasticLoadBalancer'),
        parameters: {
          ElasticLoadBalancerName: input.elasticLoadBalancerName,
          LayerId: input.layerId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DetachElasticLoadBalancer', props);
  }

  public disassociateElasticIp(input: shapes.OpsWorksDisassociateElasticIpRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'disassociateElasticIp',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DisassociateElasticIp'),
        parameters: {
          ElasticIp: input.elasticIp,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DisassociateElasticIp', props);
  }

  public fetchHostnameSuggestion(input: shapes.OpsWorksGetHostnameSuggestionRequest): OpsWorksFetchHostnameSuggestion {
    return new OpsWorksFetchHostnameSuggestion(this, 'FetchHostnameSuggestion', this.__resources, input);
  }

  public grantAccess(input: shapes.OpsWorksGrantAccessRequest): OpsWorksGrantAccess {
    return new OpsWorksGrantAccess(this, 'GrantAccess', this.__resources, input);
  }

  public listTags(input: shapes.OpsWorksListTagsRequest): OpsWorksListTags {
    return new OpsWorksListTags(this, 'ListTags', this.__resources, input);
  }

  public rebootInstance(input: shapes.OpsWorksRebootInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'rebootInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.RebootInstance'),
        parameters: {
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RebootInstance', props);
  }

  public registerEcsCluster(input: shapes.OpsWorksRegisterEcsClusterRequest): OpsWorksRegisterEcsCluster {
    return new OpsWorksRegisterEcsCluster(this, 'RegisterEcsCluster', this.__resources, input);
  }

  public registerElasticIp(input: shapes.OpsWorksRegisterElasticIpRequest): OpsWorksRegisterElasticIp {
    return new OpsWorksRegisterElasticIp(this, 'RegisterElasticIp', this.__resources, input);
  }

  public registerInstance(input: shapes.OpsWorksRegisterInstanceRequest): OpsWorksRegisterInstance {
    return new OpsWorksRegisterInstance(this, 'RegisterInstance', this.__resources, input);
  }

  public registerRdsDbInstance(input: shapes.OpsWorksRegisterRdsDbInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerRdsDbInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.RegisterRdsDbInstance'),
        parameters: {
          StackId: input.stackId,
          RdsDbInstanceArn: input.rdsDbInstanceArn,
          DbUser: input.dbUser,
          DbPassword: input.dbPassword,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RegisterRdsDbInstance', props);
  }

  public registerVolume(input: shapes.OpsWorksRegisterVolumeRequest): OpsWorksRegisterVolume {
    return new OpsWorksRegisterVolume(this, 'RegisterVolume', this.__resources, input);
  }

  public setLoadBasedAutoScaling(input: shapes.OpsWorksSetLoadBasedAutoScalingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setLoadBasedAutoScaling',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.SetLoadBasedAutoScaling'),
        parameters: {
          LayerId: input.layerId,
          Enable: input.enable,
          UpScaling: {
            InstanceCount: input.upScaling?.instanceCount,
            ThresholdsWaitTime: input.upScaling?.thresholdsWaitTime,
            IgnoreMetricsTime: input.upScaling?.ignoreMetricsTime,
            CpuThreshold: input.upScaling?.cpuThreshold,
            MemoryThreshold: input.upScaling?.memoryThreshold,
            LoadThreshold: input.upScaling?.loadThreshold,
            Alarms: input.upScaling?.alarms,
          },
          DownScaling: {
            InstanceCount: input.downScaling?.instanceCount,
            ThresholdsWaitTime: input.downScaling?.thresholdsWaitTime,
            IgnoreMetricsTime: input.downScaling?.ignoreMetricsTime,
            CpuThreshold: input.downScaling?.cpuThreshold,
            MemoryThreshold: input.downScaling?.memoryThreshold,
            LoadThreshold: input.downScaling?.loadThreshold,
            Alarms: input.downScaling?.alarms,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetLoadBasedAutoScaling', props);
  }

  public setPermission(input: shapes.OpsWorksSetPermissionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setPermission',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.SetPermission'),
        parameters: {
          StackId: input.stackId,
          IamUserArn: input.iamUserArn,
          AllowSsh: input.allowSsh,
          AllowSudo: input.allowSudo,
          Level: input.level,
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetPermission', props);
  }

  public setTimeBasedAutoScaling(input: shapes.OpsWorksSetTimeBasedAutoScalingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'setTimeBasedAutoScaling',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.SetTimeBasedAutoScaling'),
        parameters: {
          InstanceId: input.instanceId,
          AutoScalingSchedule: {
            Monday: input.autoScalingSchedule?.monday,
            Tuesday: input.autoScalingSchedule?.tuesday,
            Wednesday: input.autoScalingSchedule?.wednesday,
            Thursday: input.autoScalingSchedule?.thursday,
            Friday: input.autoScalingSchedule?.friday,
            Saturday: input.autoScalingSchedule?.saturday,
            Sunday: input.autoScalingSchedule?.sunday,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'SetTimeBasedAutoScaling', props);
  }

  public startInstance(input: shapes.OpsWorksStartInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.StartInstance'),
        parameters: {
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartInstance', props);
  }

  public startStack(input: shapes.OpsWorksStartStackRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startStack',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.StartStack'),
        parameters: {
          StackId: input.stackId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StartStack', props);
  }

  public stopInstance(input: shapes.OpsWorksStopInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.StopInstance'),
        parameters: {
          InstanceId: input.instanceId,
          Force: input.force,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopInstance', props);
  }

  public stopStack(input: shapes.OpsWorksStopStackRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'stopStack',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.StopStack'),
        parameters: {
          StackId: input.stackId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'StopStack', props);
  }

  public tagResource(input: shapes.OpsWorksTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public unassignInstance(input: shapes.OpsWorksUnassignInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unassignInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UnassignInstance'),
        parameters: {
          InstanceId: input.instanceId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UnassignInstance', props);
  }

  public unassignVolume(input: shapes.OpsWorksUnassignVolumeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'unassignVolume',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UnassignVolume'),
        parameters: {
          VolumeId: input.volumeId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UnassignVolume', props);
  }

  public untagResource(input: shapes.OpsWorksUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          TagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateApp(input: shapes.OpsWorksUpdateAppRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateApp',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UpdateApp'),
        parameters: {
          AppId: input.appId,
          Name: input.name,
          Description: input.description,
          DataSources: input.dataSources,
          Type: input.type,
          AppSource: {
            Type: input.appSource?.type,
            Url: input.appSource?.url,
            Username: input.appSource?.username,
            Password: input.appSource?.password,
            SshKey: input.appSource?.sshKey,
            Revision: input.appSource?.revision,
          },
          Domains: input.domains,
          EnableSsl: input.enableSsl,
          SslConfiguration: {
            Certificate: input.sslConfiguration?.certificate,
            PrivateKey: input.sslConfiguration?.privateKey,
            Chain: input.sslConfiguration?.chain,
          },
          Attributes: input.attributes,
          Environment: input.environment,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateApp', props);
  }

  public updateElasticIp(input: shapes.OpsWorksUpdateElasticIpRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateElasticIp',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UpdateElasticIp'),
        parameters: {
          ElasticIp: input.elasticIp,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateElasticIp', props);
  }

  public updateInstance(input: shapes.OpsWorksUpdateInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UpdateInstance'),
        parameters: {
          InstanceId: input.instanceId,
          LayerIds: input.layerIds,
          InstanceType: input.instanceType,
          AutoScalingType: input.autoScalingType,
          Hostname: input.hostname,
          Os: input.os,
          AmiId: input.amiId,
          SshKeyName: input.sshKeyName,
          Architecture: input.architecture,
          InstallUpdatesOnBoot: input.installUpdatesOnBoot,
          EbsOptimized: input.ebsOptimized,
          AgentVersion: input.agentVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateInstance', props);
  }

  public updateLayer(input: shapes.OpsWorksUpdateLayerRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateLayer',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UpdateLayer'),
        parameters: {
          LayerId: input.layerId,
          Name: input.name,
          Shortname: input.shortname,
          Attributes: input.attributes,
          CloudWatchLogsConfiguration: {
            Enabled: input.cloudWatchLogsConfiguration?.enabled,
            LogStreams: input.cloudWatchLogsConfiguration?.logStreams,
          },
          CustomInstanceProfileArn: input.customInstanceProfileArn,
          CustomJson: input.customJson,
          CustomSecurityGroupIds: input.customSecurityGroupIds,
          Packages: input.packages,
          VolumeConfigurations: input.volumeConfigurations,
          EnableAutoHealing: input.enableAutoHealing,
          AutoAssignElasticIps: input.autoAssignElasticIps,
          AutoAssignPublicIps: input.autoAssignPublicIps,
          CustomRecipes: {
            Setup: input.customRecipes?.setup,
            Configure: input.customRecipes?.configure,
            Deploy: input.customRecipes?.deploy,
            Undeploy: input.customRecipes?.undeploy,
            Shutdown: input.customRecipes?.shutdown,
          },
          InstallUpdatesOnBoot: input.installUpdatesOnBoot,
          UseEbsOptimizedInstances: input.useEbsOptimizedInstances,
          LifecycleEventConfiguration: {
            Shutdown: {
              ExecutionTimeout: input.lifecycleEventConfiguration?.shutdown?.executionTimeout,
              DelayUntilElbConnectionsDrained: input.lifecycleEventConfiguration?.shutdown?.delayUntilElbConnectionsDrained,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateLayer', props);
  }

  public updateMyUserProfile(input: shapes.OpsWorksUpdateMyUserProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMyUserProfile',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UpdateMyUserProfile'),
        parameters: {
          SshPublicKey: input.sshPublicKey,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateMyUserProfile', props);
  }

  public updateRdsDbInstance(input: shapes.OpsWorksUpdateRdsDbInstanceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRdsDbInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UpdateRdsDbInstance'),
        parameters: {
          RdsDbInstanceArn: input.rdsDbInstanceArn,
          DbUser: input.dbUser,
          DbPassword: input.dbPassword,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateRdsDbInstance', props);
  }

  public updateStack(input: shapes.OpsWorksUpdateStackRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateStack',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UpdateStack'),
        parameters: {
          StackId: input.stackId,
          Name: input.name,
          Attributes: input.attributes,
          ServiceRoleArn: input.serviceRoleArn,
          DefaultInstanceProfileArn: input.defaultInstanceProfileArn,
          DefaultOs: input.defaultOs,
          HostnameTheme: input.hostnameTheme,
          DefaultAvailabilityZone: input.defaultAvailabilityZone,
          DefaultSubnetId: input.defaultSubnetId,
          CustomJson: input.customJson,
          ConfigurationManager: {
            Name: input.configurationManager?.name,
            Version: input.configurationManager?.version,
          },
          ChefConfiguration: {
            ManageBerkshelf: input.chefConfiguration?.manageBerkshelf,
            BerkshelfVersion: input.chefConfiguration?.berkshelfVersion,
          },
          UseCustomCookbooks: input.useCustomCookbooks,
          CustomCookbooksSource: {
            Type: input.customCookbooksSource?.type,
            Url: input.customCookbooksSource?.url,
            Username: input.customCookbooksSource?.username,
            Password: input.customCookbooksSource?.password,
            SshKey: input.customCookbooksSource?.sshKey,
            Revision: input.customCookbooksSource?.revision,
          },
          DefaultSshKeyName: input.defaultSshKeyName,
          DefaultRootDeviceType: input.defaultRootDeviceType,
          UseOpsworksSecurityGroups: input.useOpsworksSecurityGroups,
          AgentVersion: input.agentVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateStack', props);
  }

  public updateUserProfile(input: shapes.OpsWorksUpdateUserProfileRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateUserProfile',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UpdateUserProfile'),
        parameters: {
          IamUserArn: input.iamUserArn,
          SshUsername: input.sshUsername,
          SshPublicKey: input.sshPublicKey,
          AllowSelfManagement: input.allowSelfManagement,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateUserProfile', props);
  }

  public updateVolume(input: shapes.OpsWorksUpdateVolumeRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateVolume',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.UpdateVolume'),
        parameters: {
          VolumeId: input.volumeId,
          Name: input.name,
          MountPoint: input.mountPoint,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateVolume', props);
  }

}

export class OpsWorksCloneStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCloneStackRequest) {
    super(scope, id);
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cloneStack',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.CloneStack.StackId'),
        outputPath: 'StackId',
        parameters: {
          SourceStackId: this.input.sourceStackId,
          Name: this.input.name,
          Region: this.input.region,
          VpcId: this.input.vpcId,
          Attributes: this.input.attributes,
          ServiceRoleArn: this.input.serviceRoleArn,
          DefaultInstanceProfileArn: this.input.defaultInstanceProfileArn,
          DefaultOs: this.input.defaultOs,
          HostnameTheme: this.input.hostnameTheme,
          DefaultAvailabilityZone: this.input.defaultAvailabilityZone,
          DefaultSubnetId: this.input.defaultSubnetId,
          CustomJson: this.input.customJson,
          ConfigurationManager: {
            Name: this.input.configurationManager?.name,
            Version: this.input.configurationManager?.version,
          },
          ChefConfiguration: {
            ManageBerkshelf: this.input.chefConfiguration?.manageBerkshelf,
            BerkshelfVersion: this.input.chefConfiguration?.berkshelfVersion,
          },
          UseCustomCookbooks: this.input.useCustomCookbooks,
          UseOpsworksSecurityGroups: this.input.useOpsworksSecurityGroups,
          CustomCookbooksSource: {
            Type: this.input.customCookbooksSource?.type,
            Url: this.input.customCookbooksSource?.url,
            Username: this.input.customCookbooksSource?.username,
            Password: this.input.customCookbooksSource?.password,
            SshKey: this.input.customCookbooksSource?.sshKey,
            Revision: this.input.customCookbooksSource?.revision,
          },
          DefaultSshKeyName: this.input.defaultSshKeyName,
          ClonePermissions: this.input.clonePermissions,
          CloneAppIds: this.input.cloneAppIds,
          DefaultRootDeviceType: this.input.defaultRootDeviceType,
          AgentVersion: this.input.agentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CloneStack.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class OpsWorksCreateApp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCreateAppRequest) {
    super(scope, id);
  }

  public get appId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createApp',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.CreateApp.AppId'),
        outputPath: 'AppId',
        parameters: {
          StackId: this.input.stackId,
          Shortname: this.input.shortname,
          Name: this.input.name,
          Description: this.input.description,
          DataSources: this.input.dataSources,
          Type: this.input.type,
          AppSource: {
            Type: this.input.appSource?.type,
            Url: this.input.appSource?.url,
            Username: this.input.appSource?.username,
            Password: this.input.appSource?.password,
            SshKey: this.input.appSource?.sshKey,
            Revision: this.input.appSource?.revision,
          },
          Domains: this.input.domains,
          EnableSsl: this.input.enableSsl,
          SslConfiguration: {
            Certificate: this.input.sslConfiguration?.certificate,
            PrivateKey: this.input.sslConfiguration?.privateKey,
            Chain: this.input.sslConfiguration?.chain,
          },
          Attributes: this.input.attributes,
          Environment: this.input.environment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateApp.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

}

export class OpsWorksCreateDeployment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCreateDeploymentRequest) {
    super(scope, id);
  }

  public get deploymentId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeployment',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.CreateDeployment.DeploymentId'),
        outputPath: 'DeploymentId',
        parameters: {
          StackId: this.input.stackId,
          AppId: this.input.appId,
          InstanceIds: this.input.instanceIds,
          LayerIds: this.input.layerIds,
          Command: {
            Name: this.input.command.name,
            Args: this.input.command.args,
          },
          Comment: this.input.comment,
          CustomJson: this.input.customJson,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeployment.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

}

export class OpsWorksCreateInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCreateInstanceRequest) {
    super(scope, id);
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.CreateInstance.InstanceId'),
        outputPath: 'InstanceId',
        parameters: {
          StackId: this.input.stackId,
          LayerIds: this.input.layerIds,
          InstanceType: this.input.instanceType,
          AutoScalingType: this.input.autoScalingType,
          Hostname: this.input.hostname,
          Os: this.input.os,
          AmiId: this.input.amiId,
          SshKeyName: this.input.sshKeyName,
          AvailabilityZone: this.input.availabilityZone,
          VirtualizationType: this.input.virtualizationType,
          SubnetId: this.input.subnetId,
          Architecture: this.input.architecture,
          RootDeviceType: this.input.rootDeviceType,
          BlockDeviceMappings: this.input.blockDeviceMappings,
          InstallUpdatesOnBoot: this.input.installUpdatesOnBoot,
          EbsOptimized: this.input.ebsOptimized,
          AgentVersion: this.input.agentVersion,
          Tenancy: this.input.tenancy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateInstance.InstanceId', props);
    return resource.getResponseField('InstanceId') as unknown as string;
  }

}

export class OpsWorksCreateLayer extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCreateLayerRequest) {
    super(scope, id);
  }

  public get layerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLayer',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.CreateLayer.LayerId'),
        outputPath: 'LayerId',
        parameters: {
          StackId: this.input.stackId,
          Type: this.input.type,
          Name: this.input.name,
          Shortname: this.input.shortname,
          Attributes: this.input.attributes,
          CloudWatchLogsConfiguration: {
            Enabled: this.input.cloudWatchLogsConfiguration?.enabled,
            LogStreams: this.input.cloudWatchLogsConfiguration?.logStreams,
          },
          CustomInstanceProfileArn: this.input.customInstanceProfileArn,
          CustomJson: this.input.customJson,
          CustomSecurityGroupIds: this.input.customSecurityGroupIds,
          Packages: this.input.packages,
          VolumeConfigurations: this.input.volumeConfigurations,
          EnableAutoHealing: this.input.enableAutoHealing,
          AutoAssignElasticIps: this.input.autoAssignElasticIps,
          AutoAssignPublicIps: this.input.autoAssignPublicIps,
          CustomRecipes: {
            Setup: this.input.customRecipes?.setup,
            Configure: this.input.customRecipes?.configure,
            Deploy: this.input.customRecipes?.deploy,
            Undeploy: this.input.customRecipes?.undeploy,
            Shutdown: this.input.customRecipes?.shutdown,
          },
          InstallUpdatesOnBoot: this.input.installUpdatesOnBoot,
          UseEbsOptimizedInstances: this.input.useEbsOptimizedInstances,
          LifecycleEventConfiguration: {
            Shutdown: {
              ExecutionTimeout: this.input.lifecycleEventConfiguration?.shutdown?.executionTimeout,
              DelayUntilElbConnectionsDrained: this.input.lifecycleEventConfiguration?.shutdown?.delayUntilElbConnectionsDrained,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLayer.LayerId', props);
    return resource.getResponseField('LayerId') as unknown as string;
  }

}

export class OpsWorksCreateStack extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCreateStackRequest) {
    super(scope, id);
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createStack',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.CreateStack.StackId'),
        outputPath: 'StackId',
        parameters: {
          Name: this.input.name,
          Region: this.input.region,
          VpcId: this.input.vpcId,
          Attributes: this.input.attributes,
          ServiceRoleArn: this.input.serviceRoleArn,
          DefaultInstanceProfileArn: this.input.defaultInstanceProfileArn,
          DefaultOs: this.input.defaultOs,
          HostnameTheme: this.input.hostnameTheme,
          DefaultAvailabilityZone: this.input.defaultAvailabilityZone,
          DefaultSubnetId: this.input.defaultSubnetId,
          CustomJson: this.input.customJson,
          ConfigurationManager: {
            Name: this.input.configurationManager?.name,
            Version: this.input.configurationManager?.version,
          },
          ChefConfiguration: {
            ManageBerkshelf: this.input.chefConfiguration?.manageBerkshelf,
            BerkshelfVersion: this.input.chefConfiguration?.berkshelfVersion,
          },
          UseCustomCookbooks: this.input.useCustomCookbooks,
          UseOpsworksSecurityGroups: this.input.useOpsworksSecurityGroups,
          CustomCookbooksSource: {
            Type: this.input.customCookbooksSource?.type,
            Url: this.input.customCookbooksSource?.url,
            Username: this.input.customCookbooksSource?.username,
            Password: this.input.customCookbooksSource?.password,
            SshKey: this.input.customCookbooksSource?.sshKey,
            Revision: this.input.customCookbooksSource?.revision,
          },
          DefaultSshKeyName: this.input.defaultSshKeyName,
          DefaultRootDeviceType: this.input.defaultRootDeviceType,
          AgentVersion: this.input.agentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateStack.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class OpsWorksCreateUserProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksCreateUserProfileRequest) {
    super(scope, id);
  }

  public get iamUserArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createUserProfile',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.CreateUserProfile.IamUserArn'),
        outputPath: 'IamUserArn',
        parameters: {
          IamUserArn: this.input.iamUserArn,
          SshUsername: this.input.sshUsername,
          SshPublicKey: this.input.sshPublicKey,
          AllowSelfManagement: this.input.allowSelfManagement,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateUserProfile.IamUserArn', props);
    return resource.getResponseField('IamUserArn') as unknown as string;
  }

}

export class OpsWorksDescribeAgentVersions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeAgentVersionsRequest) {
    super(scope, id);
  }

  public get agentVersions(): shapes.OpsWorksAgentVersion[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgentVersions',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeAgentVersions.AgentVersions'),
        outputPath: 'AgentVersions',
        parameters: {
          StackId: this.input.stackId,
          ConfigurationManager: {
            Name: this.input.configurationManager?.name,
            Version: this.input.configurationManager?.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgentVersions.AgentVersions', props);
    return resource.getResponseField('AgentVersions') as unknown as shapes.OpsWorksAgentVersion[];
  }

}

export class OpsWorksDescribeApps extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeAppsRequest) {
    super(scope, id);
  }

  public get apps(): shapes.OpsWorksApp[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeApps',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeApps.Apps'),
        outputPath: 'Apps',
        parameters: {
          StackId: this.input.stackId,
          AppIds: this.input.appIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeApps.Apps', props);
    return resource.getResponseField('Apps') as unknown as shapes.OpsWorksApp[];
  }

}

export class OpsWorksDescribeCommands extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeCommandsRequest) {
    super(scope, id);
  }

  public get commands(): shapes.OpsWorksCommand[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCommands',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeCommands.Commands'),
        outputPath: 'Commands',
        parameters: {
          DeploymentId: this.input.deploymentId,
          InstanceId: this.input.instanceId,
          CommandIds: this.input.commandIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCommands.Commands', props);
    return resource.getResponseField('Commands') as unknown as shapes.OpsWorksCommand[];
  }

}

export class OpsWorksDescribeDeployments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeDeploymentsRequest) {
    super(scope, id);
  }

  public get deployments(): shapes.OpsWorksDeployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeployments',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeDeployments.Deployments'),
        outputPath: 'Deployments',
        parameters: {
          StackId: this.input.stackId,
          AppId: this.input.appId,
          DeploymentIds: this.input.deploymentIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeployments.Deployments', props);
    return resource.getResponseField('Deployments') as unknown as shapes.OpsWorksDeployment[];
  }

}

export class OpsWorksDescribeEcsClusters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeEcsClustersRequest) {
    super(scope, id);
  }

  public get ecsClusters(): shapes.OpsWorksEcsCluster[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEcsClusters',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeEcsClusters.EcsClusters'),
        outputPath: 'EcsClusters',
        parameters: {
          EcsClusterArns: this.input.ecsClusterArns,
          StackId: this.input.stackId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEcsClusters.EcsClusters', props);
    return resource.getResponseField('EcsClusters') as unknown as shapes.OpsWorksEcsCluster[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEcsClusters',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeEcsClusters.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          EcsClusterArns: this.input.ecsClusterArns,
          StackId: this.input.stackId,
          NextToken: this.input.nextToken,
          MaxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEcsClusters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksDescribeElasticIps extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeElasticIpsRequest) {
    super(scope, id);
  }

  public get elasticIps(): shapes.OpsWorksElasticIp[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeElasticIps',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeElasticIps.ElasticIps'),
        outputPath: 'ElasticIps',
        parameters: {
          InstanceId: this.input.instanceId,
          StackId: this.input.stackId,
          Ips: this.input.ips,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeElasticIps.ElasticIps', props);
    return resource.getResponseField('ElasticIps') as unknown as shapes.OpsWorksElasticIp[];
  }

}

export class OpsWorksDescribeElasticLoadBalancers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeElasticLoadBalancersRequest) {
    super(scope, id);
  }

  public get elasticLoadBalancers(): shapes.OpsWorksElasticLoadBalancer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeElasticLoadBalancers',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeElasticLoadBalancers.ElasticLoadBalancers'),
        outputPath: 'ElasticLoadBalancers',
        parameters: {
          StackId: this.input.stackId,
          LayerIds: this.input.layerIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeElasticLoadBalancers.ElasticLoadBalancers', props);
    return resource.getResponseField('ElasticLoadBalancers') as unknown as shapes.OpsWorksElasticLoadBalancer[];
  }

}

export class OpsWorksDescribeInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeInstancesRequest) {
    super(scope, id);
  }

  public get instances(): shapes.OpsWorksInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeInstances',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeInstances.Instances'),
        outputPath: 'Instances',
        parameters: {
          StackId: this.input.stackId,
          LayerId: this.input.layerId,
          InstanceIds: this.input.instanceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeInstances.Instances', props);
    return resource.getResponseField('Instances') as unknown as shapes.OpsWorksInstance[];
  }

}

export class OpsWorksDescribeLayers extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeLayersRequest) {
    super(scope, id);
  }

  public get layers(): shapes.OpsWorksLayer[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLayers',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeLayers.Layers'),
        outputPath: 'Layers',
        parameters: {
          StackId: this.input.stackId,
          LayerIds: this.input.layerIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLayers.Layers', props);
    return resource.getResponseField('Layers') as unknown as shapes.OpsWorksLayer[];
  }

}

export class OpsWorksDescribeLoadBasedAutoScaling extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeLoadBasedAutoScalingRequest) {
    super(scope, id);
  }

  public get loadBasedAutoScalingConfigurations(): shapes.OpsWorksLoadBasedAutoScalingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoadBasedAutoScaling',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeLoadBasedAutoScaling.LoadBasedAutoScalingConfigurations'),
        outputPath: 'LoadBasedAutoScalingConfigurations',
        parameters: {
          LayerIds: this.input.layerIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLoadBasedAutoScaling.LoadBasedAutoScalingConfigurations', props);
    return resource.getResponseField('LoadBasedAutoScalingConfigurations') as unknown as shapes.OpsWorksLoadBasedAutoScalingConfiguration[];
  }

}

export class OpsWorksDescribeMyUserProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get userProfile(): OpsWorksDescribeMyUserProfileUserProfile {
    return new OpsWorksDescribeMyUserProfileUserProfile(this, 'UserProfile', this.__resources);
  }

}

export class OpsWorksDescribeMyUserProfileUserProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get iamUserArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMyUserProfile',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeMyUserProfile.UserProfile.IamUserArn'),
        outputPath: 'UserProfile.IamUserArn',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMyUserProfile.UserProfile.IamUserArn', props);
    return resource.getResponseField('UserProfile.IamUserArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMyUserProfile',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeMyUserProfile.UserProfile.Name'),
        outputPath: 'UserProfile.Name',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMyUserProfile.UserProfile.Name', props);
    return resource.getResponseField('UserProfile.Name') as unknown as string;
  }

  public get sshUsername(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMyUserProfile',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeMyUserProfile.UserProfile.SshUsername'),
        outputPath: 'UserProfile.SshUsername',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMyUserProfile.UserProfile.SshUsername', props);
    return resource.getResponseField('UserProfile.SshUsername') as unknown as string;
  }

  public get sshPublicKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMyUserProfile',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeMyUserProfile.UserProfile.SshPublicKey'),
        outputPath: 'UserProfile.SshPublicKey',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMyUserProfile.UserProfile.SshPublicKey', props);
    return resource.getResponseField('UserProfile.SshPublicKey') as unknown as string;
  }

}

export class OpsWorksDescribeOperatingSystems extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get operatingSystems(): shapes.OpsWorksOperatingSystem[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeOperatingSystems',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeOperatingSystems.OperatingSystems'),
        outputPath: 'OperatingSystems',
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeOperatingSystems.OperatingSystems', props);
    return resource.getResponseField('OperatingSystems') as unknown as shapes.OpsWorksOperatingSystem[];
  }

}

export class OpsWorksDescribePermissions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribePermissionsRequest) {
    super(scope, id);
  }

  public get permissions(): shapes.OpsWorksPermission[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePermissions',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribePermissions.Permissions'),
        outputPath: 'Permissions',
        parameters: {
          IamUserArn: this.input.iamUserArn,
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.OpsWorksPermission[];
  }

}

export class OpsWorksDescribeRaidArrays extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeRaidArraysRequest) {
    super(scope, id);
  }

  public get raidArrays(): shapes.OpsWorksRaidArray[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRaidArrays',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeRaidArrays.RaidArrays'),
        outputPath: 'RaidArrays',
        parameters: {
          InstanceId: this.input.instanceId,
          StackId: this.input.stackId,
          RaidArrayIds: this.input.raidArrayIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRaidArrays.RaidArrays', props);
    return resource.getResponseField('RaidArrays') as unknown as shapes.OpsWorksRaidArray[];
  }

}

export class OpsWorksDescribeRdsDbInstances extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeRdsDbInstancesRequest) {
    super(scope, id);
  }

  public get rdsDbInstances(): shapes.OpsWorksRdsDbInstance[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRdsDbInstances',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeRdsDbInstances.RdsDbInstances'),
        outputPath: 'RdsDbInstances',
        parameters: {
          StackId: this.input.stackId,
          RdsDbInstanceArns: this.input.rdsDbInstanceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRdsDbInstances.RdsDbInstances', props);
    return resource.getResponseField('RdsDbInstances') as unknown as shapes.OpsWorksRdsDbInstance[];
  }

}

export class OpsWorksDescribeServiceErrors extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeServiceErrorsRequest) {
    super(scope, id);
  }

  public get serviceErrors(): shapes.OpsWorksServiceError[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeServiceErrors',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeServiceErrors.ServiceErrors'),
        outputPath: 'ServiceErrors',
        parameters: {
          StackId: this.input.stackId,
          InstanceId: this.input.instanceId,
          ServiceErrorIds: this.input.serviceErrorIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeServiceErrors.ServiceErrors', props);
    return resource.getResponseField('ServiceErrors') as unknown as shapes.OpsWorksServiceError[];
  }

}

export class OpsWorksDescribeStackProvisioningParameters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeStackProvisioningParametersRequest) {
    super(scope, id);
  }

  public get agentInstallerUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackProvisioningParameters',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackProvisioningParameters.AgentInstallerUrl'),
        outputPath: 'AgentInstallerUrl',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackProvisioningParameters.AgentInstallerUrl', props);
    return resource.getResponseField('AgentInstallerUrl') as unknown as string;
  }

  public get parameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackProvisioningParameters',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackProvisioningParameters.Parameters'),
        outputPath: 'Parameters',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackProvisioningParameters.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as Record<string, string>;
  }

}

export class OpsWorksDescribeStackSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeStackSummaryRequest) {
    super(scope, id);
  }

  public get stackSummary(): OpsWorksDescribeStackSummaryStackSummary {
    return new OpsWorksDescribeStackSummaryStackSummary(this, 'StackSummary', this.__resources, this.input);
  }

}

export class OpsWorksDescribeStackSummaryStackSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeStackSummaryRequest) {
    super(scope, id);
  }

  public get stackId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.StackId'),
        outputPath: 'StackSummary.StackId',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.StackId', props);
    return resource.getResponseField('StackSummary.StackId') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.Name'),
        outputPath: 'StackSummary.Name',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.Name', props);
    return resource.getResponseField('StackSummary.Name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.Arn'),
        outputPath: 'StackSummary.Arn',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.Arn', props);
    return resource.getResponseField('StackSummary.Arn') as unknown as string;
  }

  public get layersCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.LayersCount'),
        outputPath: 'StackSummary.LayersCount',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.LayersCount', props);
    return resource.getResponseField('StackSummary.LayersCount') as unknown as number;
  }

  public get appsCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.AppsCount'),
        outputPath: 'StackSummary.AppsCount',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.AppsCount', props);
    return resource.getResponseField('StackSummary.AppsCount') as unknown as number;
  }

  public get instancesCount(): OpsWorksDescribeStackSummaryStackSummaryInstancesCount {
    return new OpsWorksDescribeStackSummaryStackSummaryInstancesCount(this, 'InstancesCount', this.__resources, this.input);
  }

}

export class OpsWorksDescribeStackSummaryStackSummaryInstancesCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeStackSummaryRequest) {
    super(scope, id);
  }

  public get assigning(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Assigning'),
        outputPath: 'StackSummary.InstancesCount.Assigning',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Assigning', props);
    return resource.getResponseField('StackSummary.InstancesCount.Assigning') as unknown as number;
  }

  public get booting(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Booting'),
        outputPath: 'StackSummary.InstancesCount.Booting',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Booting', props);
    return resource.getResponseField('StackSummary.InstancesCount.Booting') as unknown as number;
  }

  public get connectionLost(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.ConnectionLost'),
        outputPath: 'StackSummary.InstancesCount.ConnectionLost',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.ConnectionLost', props);
    return resource.getResponseField('StackSummary.InstancesCount.ConnectionLost') as unknown as number;
  }

  public get deregistering(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Deregistering'),
        outputPath: 'StackSummary.InstancesCount.Deregistering',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Deregistering', props);
    return resource.getResponseField('StackSummary.InstancesCount.Deregistering') as unknown as number;
  }

  public get online(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Online'),
        outputPath: 'StackSummary.InstancesCount.Online',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Online', props);
    return resource.getResponseField('StackSummary.InstancesCount.Online') as unknown as number;
  }

  public get pending(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Pending'),
        outputPath: 'StackSummary.InstancesCount.Pending',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Pending', props);
    return resource.getResponseField('StackSummary.InstancesCount.Pending') as unknown as number;
  }

  public get rebooting(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Rebooting'),
        outputPath: 'StackSummary.InstancesCount.Rebooting',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Rebooting', props);
    return resource.getResponseField('StackSummary.InstancesCount.Rebooting') as unknown as number;
  }

  public get registered(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Registered'),
        outputPath: 'StackSummary.InstancesCount.Registered',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Registered', props);
    return resource.getResponseField('StackSummary.InstancesCount.Registered') as unknown as number;
  }

  public get registering(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Registering'),
        outputPath: 'StackSummary.InstancesCount.Registering',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Registering', props);
    return resource.getResponseField('StackSummary.InstancesCount.Registering') as unknown as number;
  }

  public get requested(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Requested'),
        outputPath: 'StackSummary.InstancesCount.Requested',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Requested', props);
    return resource.getResponseField('StackSummary.InstancesCount.Requested') as unknown as number;
  }

  public get runningSetup(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.RunningSetup'),
        outputPath: 'StackSummary.InstancesCount.RunningSetup',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.RunningSetup', props);
    return resource.getResponseField('StackSummary.InstancesCount.RunningSetup') as unknown as number;
  }

  public get setupFailed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.SetupFailed'),
        outputPath: 'StackSummary.InstancesCount.SetupFailed',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.SetupFailed', props);
    return resource.getResponseField('StackSummary.InstancesCount.SetupFailed') as unknown as number;
  }

  public get shuttingDown(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.ShuttingDown'),
        outputPath: 'StackSummary.InstancesCount.ShuttingDown',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.ShuttingDown', props);
    return resource.getResponseField('StackSummary.InstancesCount.ShuttingDown') as unknown as number;
  }

  public get startFailed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.StartFailed'),
        outputPath: 'StackSummary.InstancesCount.StartFailed',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.StartFailed', props);
    return resource.getResponseField('StackSummary.InstancesCount.StartFailed') as unknown as number;
  }

  public get stopFailed(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.StopFailed'),
        outputPath: 'StackSummary.InstancesCount.StopFailed',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.StopFailed', props);
    return resource.getResponseField('StackSummary.InstancesCount.StopFailed') as unknown as number;
  }

  public get stopped(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Stopped'),
        outputPath: 'StackSummary.InstancesCount.Stopped',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Stopped', props);
    return resource.getResponseField('StackSummary.InstancesCount.Stopped') as unknown as number;
  }

  public get stopping(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Stopping'),
        outputPath: 'StackSummary.InstancesCount.Stopping',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Stopping', props);
    return resource.getResponseField('StackSummary.InstancesCount.Stopping') as unknown as number;
  }

  public get terminated(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Terminated'),
        outputPath: 'StackSummary.InstancesCount.Terminated',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Terminated', props);
    return resource.getResponseField('StackSummary.InstancesCount.Terminated') as unknown as number;
  }

  public get terminating(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Terminating'),
        outputPath: 'StackSummary.InstancesCount.Terminating',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Terminating', props);
    return resource.getResponseField('StackSummary.InstancesCount.Terminating') as unknown as number;
  }

  public get unassigning(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStackSummary',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStackSummary.StackSummary.InstancesCount.Unassigning'),
        outputPath: 'StackSummary.InstancesCount.Unassigning',
        parameters: {
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStackSummary.StackSummary.InstancesCount.Unassigning', props);
    return resource.getResponseField('StackSummary.InstancesCount.Unassigning') as unknown as number;
  }

}

export class OpsWorksDescribeStacks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeStacksRequest) {
    super(scope, id);
  }

  public get stacks(): shapes.OpsWorksStack[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeStacks',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeStacks.Stacks'),
        outputPath: 'Stacks',
        parameters: {
          StackIds: this.input.stackIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeStacks.Stacks', props);
    return resource.getResponseField('Stacks') as unknown as shapes.OpsWorksStack[];
  }

}

export class OpsWorksDescribeTimeBasedAutoScaling extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeTimeBasedAutoScalingRequest) {
    super(scope, id);
  }

  public get timeBasedAutoScalingConfigurations(): shapes.OpsWorksTimeBasedAutoScalingConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTimeBasedAutoScaling',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeTimeBasedAutoScaling.TimeBasedAutoScalingConfigurations'),
        outputPath: 'TimeBasedAutoScalingConfigurations',
        parameters: {
          InstanceIds: this.input.instanceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTimeBasedAutoScaling.TimeBasedAutoScalingConfigurations', props);
    return resource.getResponseField('TimeBasedAutoScalingConfigurations') as unknown as shapes.OpsWorksTimeBasedAutoScalingConfiguration[];
  }

}

export class OpsWorksDescribeUserProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeUserProfilesRequest) {
    super(scope, id);
  }

  public get userProfiles(): shapes.OpsWorksUserProfile[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUserProfiles',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeUserProfiles.UserProfiles'),
        outputPath: 'UserProfiles',
        parameters: {
          IamUserArns: this.input.iamUserArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUserProfiles.UserProfiles', props);
    return resource.getResponseField('UserProfiles') as unknown as shapes.OpsWorksUserProfile[];
  }

}

export class OpsWorksDescribeVolumes extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksDescribeVolumesRequest) {
    super(scope, id);
  }

  public get volumes(): shapes.OpsWorksVolume[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVolumes',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.DescribeVolumes.Volumes'),
        outputPath: 'Volumes',
        parameters: {
          InstanceId: this.input.instanceId,
          StackId: this.input.stackId,
          RaidArrayId: this.input.raidArrayId,
          VolumeIds: this.input.volumeIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeVolumes.Volumes', props);
    return resource.getResponseField('Volumes') as unknown as shapes.OpsWorksVolume[];
  }

}

export class OpsWorksFetchHostnameSuggestion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksGetHostnameSuggestionRequest) {
    super(scope, id);
  }

  public get layerId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostnameSuggestion',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.GetHostnameSuggestion.LayerId'),
        outputPath: 'LayerId',
        parameters: {
          LayerId: this.input.layerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostnameSuggestion.LayerId', props);
    return resource.getResponseField('LayerId') as unknown as string;
  }

  public get hostname(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getHostnameSuggestion',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.GetHostnameSuggestion.Hostname'),
        outputPath: 'Hostname',
        parameters: {
          LayerId: this.input.layerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetHostnameSuggestion.Hostname', props);
    return resource.getResponseField('Hostname') as unknown as string;
  }

}

export class OpsWorksGrantAccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksGrantAccessRequest) {
    super(scope, id);
  }

  public get temporaryCredential(): OpsWorksGrantAccessTemporaryCredential {
    return new OpsWorksGrantAccessTemporaryCredential(this, 'TemporaryCredential', this.__resources, this.input);
  }

}

export class OpsWorksGrantAccessTemporaryCredential extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksGrantAccessRequest) {
    super(scope, id);
  }

  public get username(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'grantAccess',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.GrantAccess.TemporaryCredential.Username'),
        outputPath: 'TemporaryCredential.Username',
        parameters: {
          InstanceId: this.input.instanceId,
          ValidForInMinutes: this.input.validForInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GrantAccess.TemporaryCredential.Username', props);
    return resource.getResponseField('TemporaryCredential.Username') as unknown as string;
  }

  public get password(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'grantAccess',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.GrantAccess.TemporaryCredential.Password'),
        outputPath: 'TemporaryCredential.Password',
        parameters: {
          InstanceId: this.input.instanceId,
          ValidForInMinutes: this.input.validForInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GrantAccess.TemporaryCredential.Password', props);
    return resource.getResponseField('TemporaryCredential.Password') as unknown as string;
  }

  public get validForInMinutes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'grantAccess',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.GrantAccess.TemporaryCredential.ValidForInMinutes'),
        outputPath: 'TemporaryCredential.ValidForInMinutes',
        parameters: {
          InstanceId: this.input.instanceId,
          ValidForInMinutes: this.input.validForInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GrantAccess.TemporaryCredential.ValidForInMinutes', props);
    return resource.getResponseField('TemporaryCredential.ValidForInMinutes') as unknown as number;
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'grantAccess',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.GrantAccess.TemporaryCredential.InstanceId'),
        outputPath: 'TemporaryCredential.InstanceId',
        parameters: {
          InstanceId: this.input.instanceId,
          ValidForInMinutes: this.input.validForInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GrantAccess.TemporaryCredential.InstanceId', props);
    return resource.getResponseField('TemporaryCredential.InstanceId') as unknown as string;
  }

}

export class OpsWorksListTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksListTagsRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.ListTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.input.resourceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as Record<string, string>;
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTags',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.ListTags.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArn: this.input.resourceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksRegisterEcsCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksRegisterEcsClusterRequest) {
    super(scope, id);
  }

  public get ecsClusterArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerEcsCluster',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.RegisterEcsCluster.EcsClusterArn'),
        outputPath: 'EcsClusterArn',
        parameters: {
          EcsClusterArn: this.input.ecsClusterArn,
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterEcsCluster.EcsClusterArn', props);
    return resource.getResponseField('EcsClusterArn') as unknown as string;
  }

}

export class OpsWorksRegisterElasticIp extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksRegisterElasticIpRequest) {
    super(scope, id);
  }

  public get elasticIp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerElasticIp',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.RegisterElasticIp.ElasticIp'),
        outputPath: 'ElasticIp',
        parameters: {
          ElasticIp: this.input.elasticIp,
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterElasticIp.ElasticIp', props);
    return resource.getResponseField('ElasticIp') as unknown as string;
  }

}

export class OpsWorksRegisterInstance extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksRegisterInstanceRequest) {
    super(scope, id);
  }

  public get instanceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerInstance',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.RegisterInstance.InstanceId'),
        outputPath: 'InstanceId',
        parameters: {
          StackId: this.input.stackId,
          Hostname: this.input.hostname,
          PublicIp: this.input.publicIp,
          PrivateIp: this.input.privateIp,
          RsaPublicKey: this.input.rsaPublicKey,
          RsaPublicKeyFingerprint: this.input.rsaPublicKeyFingerprint,
          InstanceIdentity: {
            Document: this.input.instanceIdentity?.document,
            Signature: this.input.instanceIdentity?.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterInstance.InstanceId', props);
    return resource.getResponseField('InstanceId') as unknown as string;
  }

}

export class OpsWorksRegisterVolume extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.OpsWorksRegisterVolumeRequest) {
    super(scope, id);
  }

  public get volumeId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerVolume',
        service: 'OpsWorks',
        physicalResourceId: cr.PhysicalResourceId.of('OpsWorks.RegisterVolume.VolumeId'),
        outputPath: 'VolumeId',
        parameters: {
          Ec2VolumeId: this.input.ec2VolumeId,
          StackId: this.input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterVolume.VolumeId', props);
    return resource.getResponseField('VolumeId') as unknown as string;
  }

}

