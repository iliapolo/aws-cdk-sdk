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

  public cloneStack(input: shapes.OpsWorksCloneStackRequest): OpsWorksResponsesCloneStack {
    return new OpsWorksResponsesCloneStack(this, this.__resources, input);
  }

  public createApp(input: shapes.OpsWorksCreateAppRequest): OpsWorksResponsesCreateApp {
    return new OpsWorksResponsesCreateApp(this, this.__resources, input);
  }

  public createDeployment(input: shapes.OpsWorksCreateDeploymentRequest): OpsWorksResponsesCreateDeployment {
    return new OpsWorksResponsesCreateDeployment(this, this.__resources, input);
  }

  public createInstance(input: shapes.OpsWorksCreateInstanceRequest): OpsWorksResponsesCreateInstance {
    return new OpsWorksResponsesCreateInstance(this, this.__resources, input);
  }

  public createLayer(input: shapes.OpsWorksCreateLayerRequest): OpsWorksResponsesCreateLayer {
    return new OpsWorksResponsesCreateLayer(this, this.__resources, input);
  }

  public createStack(input: shapes.OpsWorksCreateStackRequest): OpsWorksResponsesCreateStack {
    return new OpsWorksResponsesCreateStack(this, this.__resources, input);
  }

  public createUserProfile(input: shapes.OpsWorksCreateUserProfileRequest): OpsWorksResponsesCreateUserProfile {
    return new OpsWorksResponsesCreateUserProfile(this, this.__resources, input);
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

  public describeAgentVersions(input: shapes.OpsWorksDescribeAgentVersionsRequest): OpsWorksResponsesDescribeAgentVersions {
    return new OpsWorksResponsesDescribeAgentVersions(this, this.__resources, input);
  }

  public describeApps(input: shapes.OpsWorksDescribeAppsRequest): OpsWorksResponsesDescribeApps {
    return new OpsWorksResponsesDescribeApps(this, this.__resources, input);
  }

  public describeCommands(input: shapes.OpsWorksDescribeCommandsRequest): OpsWorksResponsesDescribeCommands {
    return new OpsWorksResponsesDescribeCommands(this, this.__resources, input);
  }

  public describeDeployments(input: shapes.OpsWorksDescribeDeploymentsRequest): OpsWorksResponsesDescribeDeployments {
    return new OpsWorksResponsesDescribeDeployments(this, this.__resources, input);
  }

  public describeEcsClusters(input: shapes.OpsWorksDescribeEcsClustersRequest): OpsWorksResponsesDescribeEcsClusters {
    return new OpsWorksResponsesDescribeEcsClusters(this, this.__resources, input);
  }

  public describeElasticIps(input: shapes.OpsWorksDescribeElasticIpsRequest): OpsWorksResponsesDescribeElasticIps {
    return new OpsWorksResponsesDescribeElasticIps(this, this.__resources, input);
  }

  public describeElasticLoadBalancers(input: shapes.OpsWorksDescribeElasticLoadBalancersRequest): OpsWorksResponsesDescribeElasticLoadBalancers {
    return new OpsWorksResponsesDescribeElasticLoadBalancers(this, this.__resources, input);
  }

  public describeInstances(input: shapes.OpsWorksDescribeInstancesRequest): OpsWorksResponsesDescribeInstances {
    return new OpsWorksResponsesDescribeInstances(this, this.__resources, input);
  }

  public describeLayers(input: shapes.OpsWorksDescribeLayersRequest): OpsWorksResponsesDescribeLayers {
    return new OpsWorksResponsesDescribeLayers(this, this.__resources, input);
  }

  public describeLoadBasedAutoScaling(input: shapes.OpsWorksDescribeLoadBasedAutoScalingRequest): OpsWorksResponsesDescribeLoadBasedAutoScaling {
    return new OpsWorksResponsesDescribeLoadBasedAutoScaling(this, this.__resources, input);
  }

  public describeMyUserProfile(): OpsWorksResponsesDescribeMyUserProfile {
    return new OpsWorksResponsesDescribeMyUserProfile(this, this.__resources);
  }

  public describeOperatingSystems(): OpsWorksResponsesDescribeOperatingSystems {
    return new OpsWorksResponsesDescribeOperatingSystems(this, this.__resources);
  }

  public describePermissions(input: shapes.OpsWorksDescribePermissionsRequest): OpsWorksResponsesDescribePermissions {
    return new OpsWorksResponsesDescribePermissions(this, this.__resources, input);
  }

  public describeRaidArrays(input: shapes.OpsWorksDescribeRaidArraysRequest): OpsWorksResponsesDescribeRaidArrays {
    return new OpsWorksResponsesDescribeRaidArrays(this, this.__resources, input);
  }

  public describeRdsDbInstances(input: shapes.OpsWorksDescribeRdsDbInstancesRequest): OpsWorksResponsesDescribeRdsDbInstances {
    return new OpsWorksResponsesDescribeRdsDbInstances(this, this.__resources, input);
  }

  public describeServiceErrors(input: shapes.OpsWorksDescribeServiceErrorsRequest): OpsWorksResponsesDescribeServiceErrors {
    return new OpsWorksResponsesDescribeServiceErrors(this, this.__resources, input);
  }

  public describeStackProvisioningParameters(input: shapes.OpsWorksDescribeStackProvisioningParametersRequest): OpsWorksResponsesDescribeStackProvisioningParameters {
    return new OpsWorksResponsesDescribeStackProvisioningParameters(this, this.__resources, input);
  }

  public describeStackSummary(input: shapes.OpsWorksDescribeStackSummaryRequest): OpsWorksResponsesDescribeStackSummary {
    return new OpsWorksResponsesDescribeStackSummary(this, this.__resources, input);
  }

  public describeStacks(input: shapes.OpsWorksDescribeStacksRequest): OpsWorksResponsesDescribeStacks {
    return new OpsWorksResponsesDescribeStacks(this, this.__resources, input);
  }

  public describeTimeBasedAutoScaling(input: shapes.OpsWorksDescribeTimeBasedAutoScalingRequest): OpsWorksResponsesDescribeTimeBasedAutoScaling {
    return new OpsWorksResponsesDescribeTimeBasedAutoScaling(this, this.__resources, input);
  }

  public describeUserProfiles(input: shapes.OpsWorksDescribeUserProfilesRequest): OpsWorksResponsesDescribeUserProfiles {
    return new OpsWorksResponsesDescribeUserProfiles(this, this.__resources, input);
  }

  public describeVolumes(input: shapes.OpsWorksDescribeVolumesRequest): OpsWorksResponsesDescribeVolumes {
    return new OpsWorksResponsesDescribeVolumes(this, this.__resources, input);
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

  public fetchHostnameSuggestion(input: shapes.OpsWorksGetHostnameSuggestionRequest): OpsWorksResponsesFetchHostnameSuggestion {
    return new OpsWorksResponsesFetchHostnameSuggestion(this, this.__resources, input);
  }

  public grantAccess(input: shapes.OpsWorksGrantAccessRequest): OpsWorksResponsesGrantAccess {
    return new OpsWorksResponsesGrantAccess(this, this.__resources, input);
  }

  public listTags(input: shapes.OpsWorksListTagsRequest): OpsWorksResponsesListTags {
    return new OpsWorksResponsesListTags(this, this.__resources, input);
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

  public registerEcsCluster(input: shapes.OpsWorksRegisterEcsClusterRequest): OpsWorksResponsesRegisterEcsCluster {
    return new OpsWorksResponsesRegisterEcsCluster(this, this.__resources, input);
  }

  public registerElasticIp(input: shapes.OpsWorksRegisterElasticIpRequest): OpsWorksResponsesRegisterElasticIp {
    return new OpsWorksResponsesRegisterElasticIp(this, this.__resources, input);
  }

  public registerInstance(input: shapes.OpsWorksRegisterInstanceRequest): OpsWorksResponsesRegisterInstance {
    return new OpsWorksResponsesRegisterInstance(this, this.__resources, input);
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

  public registerVolume(input: shapes.OpsWorksRegisterVolumeRequest): OpsWorksResponsesRegisterVolume {
    return new OpsWorksResponsesRegisterVolume(this, this.__resources, input);
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

export class OpsWorksResponsesCloneStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCloneStackRequest) {
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
          SourceStackId: this.__input.sourceStackId,
          Name: this.__input.name,
          Region: this.__input.region,
          VpcId: this.__input.vpcId,
          Attributes: this.__input.attributes,
          ServiceRoleArn: this.__input.serviceRoleArn,
          DefaultInstanceProfileArn: this.__input.defaultInstanceProfileArn,
          DefaultOs: this.__input.defaultOs,
          HostnameTheme: this.__input.hostnameTheme,
          DefaultAvailabilityZone: this.__input.defaultAvailabilityZone,
          DefaultSubnetId: this.__input.defaultSubnetId,
          CustomJson: this.__input.customJson,
          ConfigurationManager: {
            Name: this.__input.configurationManager?.name,
            Version: this.__input.configurationManager?.version,
          },
          ChefConfiguration: {
            ManageBerkshelf: this.__input.chefConfiguration?.manageBerkshelf,
            BerkshelfVersion: this.__input.chefConfiguration?.berkshelfVersion,
          },
          UseCustomCookbooks: this.__input.useCustomCookbooks,
          UseOpsworksSecurityGroups: this.__input.useOpsworksSecurityGroups,
          CustomCookbooksSource: {
            Type: this.__input.customCookbooksSource?.type,
            Url: this.__input.customCookbooksSource?.url,
            Username: this.__input.customCookbooksSource?.username,
            Password: this.__input.customCookbooksSource?.password,
            SshKey: this.__input.customCookbooksSource?.sshKey,
            Revision: this.__input.customCookbooksSource?.revision,
          },
          DefaultSshKeyName: this.__input.defaultSshKeyName,
          ClonePermissions: this.__input.clonePermissions,
          CloneAppIds: this.__input.cloneAppIds,
          DefaultRootDeviceType: this.__input.defaultRootDeviceType,
          AgentVersion: this.__input.agentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CloneStack.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class OpsWorksResponsesCreateApp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCreateAppRequest) {
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
          StackId: this.__input.stackId,
          Shortname: this.__input.shortname,
          Name: this.__input.name,
          Description: this.__input.description,
          DataSources: this.__input.dataSources,
          Type: this.__input.type,
          AppSource: {
            Type: this.__input.appSource?.type,
            Url: this.__input.appSource?.url,
            Username: this.__input.appSource?.username,
            Password: this.__input.appSource?.password,
            SshKey: this.__input.appSource?.sshKey,
            Revision: this.__input.appSource?.revision,
          },
          Domains: this.__input.domains,
          EnableSsl: this.__input.enableSsl,
          SslConfiguration: {
            Certificate: this.__input.sslConfiguration?.certificate,
            PrivateKey: this.__input.sslConfiguration?.privateKey,
            Chain: this.__input.sslConfiguration?.chain,
          },
          Attributes: this.__input.attributes,
          Environment: this.__input.environment,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateApp.AppId', props);
    return resource.getResponseField('AppId') as unknown as string;
  }

}

export class OpsWorksResponsesCreateDeployment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCreateDeploymentRequest) {
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
          StackId: this.__input.stackId,
          AppId: this.__input.appId,
          InstanceIds: this.__input.instanceIds,
          LayerIds: this.__input.layerIds,
          Command: {
            Name: this.__input.command.name,
            Args: this.__input.command.args,
          },
          Comment: this.__input.comment,
          CustomJson: this.__input.customJson,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeployment.DeploymentId', props);
    return resource.getResponseField('DeploymentId') as unknown as string;
  }

}

export class OpsWorksResponsesCreateInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCreateInstanceRequest) {
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
          StackId: this.__input.stackId,
          LayerIds: this.__input.layerIds,
          InstanceType: this.__input.instanceType,
          AutoScalingType: this.__input.autoScalingType,
          Hostname: this.__input.hostname,
          Os: this.__input.os,
          AmiId: this.__input.amiId,
          SshKeyName: this.__input.sshKeyName,
          AvailabilityZone: this.__input.availabilityZone,
          VirtualizationType: this.__input.virtualizationType,
          SubnetId: this.__input.subnetId,
          Architecture: this.__input.architecture,
          RootDeviceType: this.__input.rootDeviceType,
          BlockDeviceMappings: this.__input.blockDeviceMappings,
          InstallUpdatesOnBoot: this.__input.installUpdatesOnBoot,
          EbsOptimized: this.__input.ebsOptimized,
          AgentVersion: this.__input.agentVersion,
          Tenancy: this.__input.tenancy,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateInstance.InstanceId', props);
    return resource.getResponseField('InstanceId') as unknown as string;
  }

}

export class OpsWorksResponsesCreateLayer {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCreateLayerRequest) {
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
          StackId: this.__input.stackId,
          Type: this.__input.type,
          Name: this.__input.name,
          Shortname: this.__input.shortname,
          Attributes: this.__input.attributes,
          CloudWatchLogsConfiguration: {
            Enabled: this.__input.cloudWatchLogsConfiguration?.enabled,
            LogStreams: this.__input.cloudWatchLogsConfiguration?.logStreams,
          },
          CustomInstanceProfileArn: this.__input.customInstanceProfileArn,
          CustomJson: this.__input.customJson,
          CustomSecurityGroupIds: this.__input.customSecurityGroupIds,
          Packages: this.__input.packages,
          VolumeConfigurations: this.__input.volumeConfigurations,
          EnableAutoHealing: this.__input.enableAutoHealing,
          AutoAssignElasticIps: this.__input.autoAssignElasticIps,
          AutoAssignPublicIps: this.__input.autoAssignPublicIps,
          CustomRecipes: {
            Setup: this.__input.customRecipes?.setup,
            Configure: this.__input.customRecipes?.configure,
            Deploy: this.__input.customRecipes?.deploy,
            Undeploy: this.__input.customRecipes?.undeploy,
            Shutdown: this.__input.customRecipes?.shutdown,
          },
          InstallUpdatesOnBoot: this.__input.installUpdatesOnBoot,
          UseEbsOptimizedInstances: this.__input.useEbsOptimizedInstances,
          LifecycleEventConfiguration: {
            Shutdown: {
              ExecutionTimeout: this.__input.lifecycleEventConfiguration?.shutdown?.executionTimeout,
              DelayUntilElbConnectionsDrained: this.__input.lifecycleEventConfiguration?.shutdown?.delayUntilElbConnectionsDrained,
            },
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLayer.LayerId', props);
    return resource.getResponseField('LayerId') as unknown as string;
  }

}

export class OpsWorksResponsesCreateStack {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCreateStackRequest) {
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
          Name: this.__input.name,
          Region: this.__input.region,
          VpcId: this.__input.vpcId,
          Attributes: this.__input.attributes,
          ServiceRoleArn: this.__input.serviceRoleArn,
          DefaultInstanceProfileArn: this.__input.defaultInstanceProfileArn,
          DefaultOs: this.__input.defaultOs,
          HostnameTheme: this.__input.hostnameTheme,
          DefaultAvailabilityZone: this.__input.defaultAvailabilityZone,
          DefaultSubnetId: this.__input.defaultSubnetId,
          CustomJson: this.__input.customJson,
          ConfigurationManager: {
            Name: this.__input.configurationManager?.name,
            Version: this.__input.configurationManager?.version,
          },
          ChefConfiguration: {
            ManageBerkshelf: this.__input.chefConfiguration?.manageBerkshelf,
            BerkshelfVersion: this.__input.chefConfiguration?.berkshelfVersion,
          },
          UseCustomCookbooks: this.__input.useCustomCookbooks,
          UseOpsworksSecurityGroups: this.__input.useOpsworksSecurityGroups,
          CustomCookbooksSource: {
            Type: this.__input.customCookbooksSource?.type,
            Url: this.__input.customCookbooksSource?.url,
            Username: this.__input.customCookbooksSource?.username,
            Password: this.__input.customCookbooksSource?.password,
            SshKey: this.__input.customCookbooksSource?.sshKey,
            Revision: this.__input.customCookbooksSource?.revision,
          },
          DefaultSshKeyName: this.__input.defaultSshKeyName,
          DefaultRootDeviceType: this.__input.defaultRootDeviceType,
          AgentVersion: this.__input.agentVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateStack.StackId', props);
    return resource.getResponseField('StackId') as unknown as string;
  }

}

export class OpsWorksResponsesCreateUserProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksCreateUserProfileRequest) {
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
          IamUserArn: this.__input.iamUserArn,
          SshUsername: this.__input.sshUsername,
          SshPublicKey: this.__input.sshPublicKey,
          AllowSelfManagement: this.__input.allowSelfManagement,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateUserProfile.IamUserArn', props);
    return resource.getResponseField('IamUserArn') as unknown as string;
  }

}

export class OpsWorksResponsesDescribeAgentVersions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeAgentVersionsRequest) {
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
          StackId: this.__input.stackId,
          ConfigurationManager: {
            Name: this.__input.configurationManager?.name,
            Version: this.__input.configurationManager?.version,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgentVersions.AgentVersions', props);
    return resource.getResponseField('AgentVersions') as unknown as shapes.OpsWorksAgentVersion[];
  }

}

export class OpsWorksResponsesDescribeApps {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeAppsRequest) {
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
          StackId: this.__input.stackId,
          AppIds: this.__input.appIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeApps.Apps', props);
    return resource.getResponseField('Apps') as unknown as shapes.OpsWorksApp[];
  }

}

export class OpsWorksResponsesDescribeCommands {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeCommandsRequest) {
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
          DeploymentId: this.__input.deploymentId,
          InstanceId: this.__input.instanceId,
          CommandIds: this.__input.commandIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCommands.Commands', props);
    return resource.getResponseField('Commands') as unknown as shapes.OpsWorksCommand[];
  }

}

export class OpsWorksResponsesDescribeDeployments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeDeploymentsRequest) {
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
          StackId: this.__input.stackId,
          AppId: this.__input.appId,
          DeploymentIds: this.__input.deploymentIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeployments.Deployments', props);
    return resource.getResponseField('Deployments') as unknown as shapes.OpsWorksDeployment[];
  }

}

export class OpsWorksResponsesDescribeEcsClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeEcsClustersRequest) {
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
          EcsClusterArns: this.__input.ecsClusterArns,
          StackId: this.__input.stackId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEcsClusters.EcsClusters', props);
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
          EcsClusterArns: this.__input.ecsClusterArns,
          StackId: this.__input.stackId,
          NextToken: this.__input.nextToken,
          MaxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEcsClusters.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksResponsesDescribeElasticIps {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeElasticIpsRequest) {
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
          InstanceId: this.__input.instanceId,
          StackId: this.__input.stackId,
          Ips: this.__input.ips,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeElasticIps.ElasticIps', props);
    return resource.getResponseField('ElasticIps') as unknown as shapes.OpsWorksElasticIp[];
  }

}

export class OpsWorksResponsesDescribeElasticLoadBalancers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeElasticLoadBalancersRequest) {
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
          StackId: this.__input.stackId,
          LayerIds: this.__input.layerIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeElasticLoadBalancers.ElasticLoadBalancers', props);
    return resource.getResponseField('ElasticLoadBalancers') as unknown as shapes.OpsWorksElasticLoadBalancer[];
  }

}

export class OpsWorksResponsesDescribeInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeInstancesRequest) {
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
          StackId: this.__input.stackId,
          LayerId: this.__input.layerId,
          InstanceIds: this.__input.instanceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeInstances.Instances', props);
    return resource.getResponseField('Instances') as unknown as shapes.OpsWorksInstance[];
  }

}

export class OpsWorksResponsesDescribeLayers {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeLayersRequest) {
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
          StackId: this.__input.stackId,
          LayerIds: this.__input.layerIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLayers.Layers', props);
    return resource.getResponseField('Layers') as unknown as shapes.OpsWorksLayer[];
  }

}

export class OpsWorksResponsesDescribeLoadBasedAutoScaling {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeLoadBasedAutoScalingRequest) {
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
          LayerIds: this.__input.layerIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoadBasedAutoScaling.LoadBasedAutoScalingConfigurations', props);
    return resource.getResponseField('LoadBasedAutoScalingConfigurations') as unknown as shapes.OpsWorksLoadBasedAutoScalingConfiguration[];
  }

}

export class OpsWorksResponsesDescribeMyUserProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get userProfile(): OpsWorksResponsesDescribeMyUserProfileUserProfile {
    return new OpsWorksResponsesDescribeMyUserProfileUserProfile(this.__scope, this.__resources);
  }

}

export class OpsWorksResponsesDescribeMyUserProfileUserProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMyUserProfile.UserProfile.IamUserArn', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMyUserProfile.UserProfile.Name', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMyUserProfile.UserProfile.SshUsername', props);
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMyUserProfile.UserProfile.SshPublicKey', props);
    return resource.getResponseField('UserProfile.SshPublicKey') as unknown as string;
  }

}

export class OpsWorksResponsesDescribeOperatingSystems {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
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
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeOperatingSystems.OperatingSystems', props);
    return resource.getResponseField('OperatingSystems') as unknown as shapes.OpsWorksOperatingSystem[];
  }

}

export class OpsWorksResponsesDescribePermissions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribePermissionsRequest) {
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
          IamUserArn: this.__input.iamUserArn,
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePermissions.Permissions', props);
    return resource.getResponseField('Permissions') as unknown as shapes.OpsWorksPermission[];
  }

}

export class OpsWorksResponsesDescribeRaidArrays {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeRaidArraysRequest) {
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
          InstanceId: this.__input.instanceId,
          StackId: this.__input.stackId,
          RaidArrayIds: this.__input.raidArrayIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRaidArrays.RaidArrays', props);
    return resource.getResponseField('RaidArrays') as unknown as shapes.OpsWorksRaidArray[];
  }

}

export class OpsWorksResponsesDescribeRdsDbInstances {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeRdsDbInstancesRequest) {
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
          StackId: this.__input.stackId,
          RdsDbInstanceArns: this.__input.rdsDbInstanceArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRdsDbInstances.RdsDbInstances', props);
    return resource.getResponseField('RdsDbInstances') as unknown as shapes.OpsWorksRdsDbInstance[];
  }

}

export class OpsWorksResponsesDescribeServiceErrors {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeServiceErrorsRequest) {
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
          StackId: this.__input.stackId,
          InstanceId: this.__input.instanceId,
          ServiceErrorIds: this.__input.serviceErrorIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeServiceErrors.ServiceErrors', props);
    return resource.getResponseField('ServiceErrors') as unknown as shapes.OpsWorksServiceError[];
  }

}

export class OpsWorksResponsesDescribeStackProvisioningParameters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeStackProvisioningParametersRequest) {
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackProvisioningParameters.AgentInstallerUrl', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackProvisioningParameters.Parameters', props);
    return resource.getResponseField('Parameters') as unknown as Record<string, string>;
  }

}

export class OpsWorksResponsesDescribeStackSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeStackSummaryRequest) {
  }

  public get stackSummary(): OpsWorksResponsesDescribeStackSummaryStackSummary {
    return new OpsWorksResponsesDescribeStackSummaryStackSummary(this.__scope, this.__resources, this.__input);
  }

}

export class OpsWorksResponsesDescribeStackSummaryStackSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeStackSummaryRequest) {
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.StackId', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.Name', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.Arn', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.LayersCount', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.AppsCount', props);
    return resource.getResponseField('StackSummary.AppsCount') as unknown as number;
  }

  public get instancesCount(): OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount {
    return new OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount(this.__scope, this.__resources, this.__input);
  }

}

export class OpsWorksResponsesDescribeStackSummaryStackSummaryInstancesCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeStackSummaryRequest) {
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Assigning', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Booting', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.ConnectionLost', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Deregistering', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Online', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Pending', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Rebooting', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Registered', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Registering', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Requested', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.RunningSetup', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.SetupFailed', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.ShuttingDown', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.StartFailed', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.StopFailed', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Stopped', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Stopping', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Terminated', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Terminating', props);
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
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStackSummary.StackSummary.InstancesCount.Unassigning', props);
    return resource.getResponseField('StackSummary.InstancesCount.Unassigning') as unknown as number;
  }

}

export class OpsWorksResponsesDescribeStacks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeStacksRequest) {
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
          StackIds: this.__input.stackIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeStacks.Stacks', props);
    return resource.getResponseField('Stacks') as unknown as shapes.OpsWorksStack[];
  }

}

export class OpsWorksResponsesDescribeTimeBasedAutoScaling {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeTimeBasedAutoScalingRequest) {
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
          InstanceIds: this.__input.instanceIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTimeBasedAutoScaling.TimeBasedAutoScalingConfigurations', props);
    return resource.getResponseField('TimeBasedAutoScalingConfigurations') as unknown as shapes.OpsWorksTimeBasedAutoScalingConfiguration[];
  }

}

export class OpsWorksResponsesDescribeUserProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeUserProfilesRequest) {
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
          IamUserArns: this.__input.iamUserArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUserProfiles.UserProfiles', props);
    return resource.getResponseField('UserProfiles') as unknown as shapes.OpsWorksUserProfile[];
  }

}

export class OpsWorksResponsesDescribeVolumes {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksDescribeVolumesRequest) {
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
          InstanceId: this.__input.instanceId,
          StackId: this.__input.stackId,
          RaidArrayId: this.__input.raidArrayId,
          VolumeIds: this.__input.volumeIds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVolumes.Volumes', props);
    return resource.getResponseField('Volumes') as unknown as shapes.OpsWorksVolume[];
  }

}

export class OpsWorksResponsesFetchHostnameSuggestion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksGetHostnameSuggestionRequest) {
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
          LayerId: this.__input.layerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostnameSuggestion.LayerId', props);
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
          LayerId: this.__input.layerId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetHostnameSuggestion.Hostname', props);
    return resource.getResponseField('Hostname') as unknown as string;
  }

}

export class OpsWorksResponsesGrantAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksGrantAccessRequest) {
  }

  public get temporaryCredential(): OpsWorksResponsesGrantAccessTemporaryCredential {
    return new OpsWorksResponsesGrantAccessTemporaryCredential(this.__scope, this.__resources, this.__input);
  }

}

export class OpsWorksResponsesGrantAccessTemporaryCredential {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksGrantAccessRequest) {
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
          InstanceId: this.__input.instanceId,
          ValidForInMinutes: this.__input.validForInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GrantAccess.TemporaryCredential.Username', props);
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
          InstanceId: this.__input.instanceId,
          ValidForInMinutes: this.__input.validForInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GrantAccess.TemporaryCredential.Password', props);
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
          InstanceId: this.__input.instanceId,
          ValidForInMinutes: this.__input.validForInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GrantAccess.TemporaryCredential.ValidForInMinutes', props);
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
          InstanceId: this.__input.instanceId,
          ValidForInMinutes: this.__input.validForInMinutes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GrantAccess.TemporaryCredential.InstanceId', props);
    return resource.getResponseField('TemporaryCredential.InstanceId') as unknown as string;
  }

}

export class OpsWorksResponsesListTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksListTagsRequest) {
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
          ResourceArn: this.__input.resourceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.Tags', props);
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
          ResourceArn: this.__input.resourceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTags.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class OpsWorksResponsesRegisterEcsCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksRegisterEcsClusterRequest) {
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
          EcsClusterArn: this.__input.ecsClusterArn,
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterEcsCluster.EcsClusterArn', props);
    return resource.getResponseField('EcsClusterArn') as unknown as string;
  }

}

export class OpsWorksResponsesRegisterElasticIp {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksRegisterElasticIpRequest) {
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
          ElasticIp: this.__input.elasticIp,
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterElasticIp.ElasticIp', props);
    return resource.getResponseField('ElasticIp') as unknown as string;
  }

}

export class OpsWorksResponsesRegisterInstance {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksRegisterInstanceRequest) {
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
          StackId: this.__input.stackId,
          Hostname: this.__input.hostname,
          PublicIp: this.__input.publicIp,
          PrivateIp: this.__input.privateIp,
          RsaPublicKey: this.__input.rsaPublicKey,
          RsaPublicKeyFingerprint: this.__input.rsaPublicKeyFingerprint,
          InstanceIdentity: {
            Document: this.__input.instanceIdentity?.document,
            Signature: this.__input.instanceIdentity?.signature,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterInstance.InstanceId', props);
    return resource.getResponseField('InstanceId') as unknown as string;
  }

}

export class OpsWorksResponsesRegisterVolume {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.OpsWorksRegisterVolumeRequest) {
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
          Ec2VolumeId: this.__input.ec2VolumeId,
          StackId: this.__input.stackId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterVolume.VolumeId', props);
    return resource.getResponseField('VolumeId') as unknown as string;
  }

}

